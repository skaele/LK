import{F as Ie,a as qt,b as qe,c as Si,H as Nn,d as ei,y as z,u as T,p as ee,e as M,x as D,S as Ue,m as Rs,r as l,s as u,j as t,f as We,I as tc,g as ic,h as nc,i as Ds,A as Ns,k as C,l as sc,n as we,o as rt,B as Ls,q as zs,t as Ui,v as oc,w as ac,R as le,z as Jt,C as ti,D as Tt,L as Z,E as Xt,G as rc,J as lc,K as Ms,M as Fs,N as cc,O as dc,P as ke,Q as ve,T as Ei,U as lt,V as Hs,W as pc,X as Bs,Y as Us,Z as uc,_ as hc,$ as gc,a0 as xc,a1 as Me,a2 as Kt,a3 as fc,a4 as mc,a5 as bc,a6 as vc,a7 as yc,a8 as jc,a9 as Y,aa as Ws,ab as Vs,ac as _c,ad as wc,ae as kc,af as Gs,ag as ii,ah as Tc,ai as pn,aj as un,ak as ni,al as Ys,am as Sc,an as hn,ao as Ec,ap as $c,aq as Pc,ar as qs,as as Oc,at as gn,au as Ac,av as Cc,aw as Ic,ax as Rc,ay as Dc,az as Nc,aA as Js,aB as Lc,aC as zc,aD as vi,aE as Xs,aF as Ks,aG as Q,aH as Ln,aI as Mc,aJ as Ji,aK as Fc,aL as Hc,aM as Bc,aN as fi,aO as Uc,aP as Wc,aQ as Vc,aR as Gc,aS as Yc,aT as zn,aU as qc,aV as Jc,aW as Qs,aX as Zs,aY as Xc,aZ as Kc,a_ as Qc,a$ as Zc,b0 as ed}from"./vendor-e9654bfa.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const td="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",id=3,$i=["home","settings","all"],eo=["home","settings","download-agreements","all"],to="https://lk.eseur.ru/signup",nd="https://old.mospolytech.ru/index.php?id=3428",w={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#6bfeb5",transparent1:"#a7ffd38a",transparent2:"#a7ffd324",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#a3fbfb99",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#29349c",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#675fe5",transparent1:"#5c54d9e0",transparent2:"#5c54d9b5",transparent3:"#5c54d98c"},purple:{dark3:"#5b248d",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#932066",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#a3252f",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#985e1d",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab1f"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},e_={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},t_={Зачтено:w.green.main,"Не зачтено":w.red.main,Отлично:w.green.main,Хорошо:w.blue.main,Удовлетворительно:w.orange.main,Неудовлетворительно:w.red.main,"Не явился":w.red.main,default:w.red.main},i_={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},A="https://e.mospolytech.ru/old",sd="2023-06-30T00:43:43",ct={info:{icon:Ie,color:"blue",title:"Информация"},alert:{icon:qt,color:"orange",title:"Внимание!"},failure:{icon:qe,color:"red",title:"Ошибка"},success:{icon:Si,color:"green",title:"Успешно"},tip:{icon:Nn,color:"grey",title:"Подсказка"},hint:{icon:Nn,color:"white",title:"Подсказка"},hrFailure:{icon:qe,color:"red",title:"Ошибка"}},od={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},ad=["image/jpeg","image/jpg","image/png","application/pdf"],rd=10,ld="376px",I=!window.location.port||window.location.port==="80";console.log("Running on production",I);var G=(e=>(e.NewSettings="NewSettings",e.HomeRoutes="HomeRoutes",e.Token="Token",e.JWT="JWT",e.JWTRefresh="JWTRefresh",e.Version="Version",e.SavePassword="SavePassword",e.SearchHistory="SearchHistory",e))(G||{});const Ze=()=>localStorage.getItem(G.JWT),pt=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},n_=async e=>{const i=e.config;if((e.request.status===403||e.request.status===401)&&!i._retry){i._retry=!0;const n=localStorage.getItem(G.JWTRefresh);try{const{accessToken:s,refreshToken:o}=await xd(n??"");return localStorage.setItem(G.JWT,s),localStorage.setItem(G.JWTRefresh,o),de(i)}catch{Zt.logout()}}return Promise.reject(e)},cd=e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${Ze()}`,e),dd=`${A}/lk_api.php`,pd="https://api.mospolytech.ru/serviceforfrontpersonnelorders",F=ei.create({baseURL:dd,withCredentials:!0}),de=ei.create({baseURL:pd});de.interceptors.request.use(cd);function Pi(e){return e.isAxiosError}function H(){return localStorage.getItem(G.Token)??sessionStorage.getItem(G.Token)??""}const ud=({login:e,password:i})=>F.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),hd=e=>F.get(`?getUser&token=${e}`),gd=e=>F.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),s_=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",H()),F.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},o_=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),F.post(`?changeADPass=1&token=${H()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},a_=async e=>{const i=new FormData;return i.set("email",e),i.set("token",H()),F.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},r_=async e=>{const i=new FormData;return i.set("phone",e),i.set("token",H()),F.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},xd=async e=>{const{data:i}=await ei.post("https://api.mospolytech.ru/frontendtokenservice/Token/Refresh",{refreshToken:e});return i},fd=e=>F.get(`?getSchedule&group=${e}&token=${H()}`),Mn=e=>F.get(`?getScheduleTeacher&fio=${e}&token=${H()}`),md=()=>F.get(`?getSchedule&session=1&token=${H()}`),Fn=e=>F.get(`?getScheduleTeacher&fio=${e}&session=1&token=${H()}`),bd=()=>F.get(`?getPayments&token=${H()}`),vd=e=>F.get(`?signAgreement=${e}&token=${H()}`),yd=e=>F.get(`?signContract=${e}&token=${H()}`),jd=async({semestr:e})=>{var i,n;return(n=(i=await F.get(`?getAcademicPerformance&semestr=${e}&token=${H()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance},_d=e=>F.get(`?getMessages&token=${H()}&id=${e}`),io=async()=>(await F.get(`?getPEPStatus&token=${H()}`)).data,wd=()=>F.get(`?setPEPAccept&token=${H()}`),kd=()=>F.get(`?getContactData&token=${H()}`),Td=e=>{const i=new FormData;i.set("token",H()),i.set("saveContactData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?saveContactData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Sd=()=>F.get(`?getRequestHighComfort&token=${H()}`),l_=e=>{const i=new FormData;i.set("token",H()),i.set("postRequestHighComfort","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?postRequestHighComfort=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Ed=()=>F.get(`?getAppRequests&token=${H()}`),$d=()=>F.get(`?getAppData&token=${H()}`),Pd=async()=>await de.get(`/Dismissal.GetAllHistory?employeeGuid=${pt(Ze()??"").IndividualGuid}`,{timeout:3e4}),Od=async()=>{const{data:e}=await de.get("/AnotherPlaceWork.GetDivisions");return e.divisions},Ad=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",H()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await F.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o.result},Cd=()=>de.get(`?getAppRequests&token=${H()}`),Id=()=>de.get(`?getAppData&token=${H()}`),Rd=e=>de.post("Dismissal.Post",e),Dd=async()=>(await F.get(`?getAdminLinks&token=${H()}`)).data,Nd=async e=>(await F.get(`?PDinfo&token=${H()}`)).data,no=()=>F.get(`?getNotification&token=${H()}`),Ld=e=>F.get(`?viewNotification=${e}&token=${H()}`),zd=Object.freeze(Object.defineProperty({__proto__:null,get:no,view:Ld},Symbol.toStringTag,{value:"Module"})),so=()=>F.get(`?getDocList&token=${H()}`).then(e=>({...e,data:e.data.map(i=>({...i,document:!0}))})),Md=e=>F.get(`?viewDoc=${e}&token=${H()}`),Fd=Object.freeze(Object.defineProperty({__proto__:null,get:so,view:Md},Symbol.toStringTag,{value:"Module"})),Hd=(e,i,n,s)=>F.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${H()}`),Bd=e=>F.get(`?getDivs=${e}&page=1&token=${H()}`),Ud=()=>F.get(`?getCheckData&token=${H()}`),Wd=e=>{const i=new FormData;i.set("token",H()),i.set("saveCheckData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return F.post("?saveCheckData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Vd=(e,i,n,s)=>F.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${H()}`),Gd=async e=>await F.get(`?getGroups=${e}&perpage=30&page=1&token=${H()}`),Yd=async()=>(await F.get(`?getAlerts&token=${H()}`)).data,qd=()=>F.get(`?getNotifications&token=${H()}`),Jd=e=>F.get(`?clearNotificationById=${e}&token=${H()}`),Xd=()=>F.get(`?clearAllNotifications&token=${H()}`);function Xi({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}const Hn={data:null,preparedData:null,loading:!1,error:null},si=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>td})=>{const o=e??Hn,a=()=>({data:M(p).data,preparedData:M(p).preparedData,loading:M(r.pending),error:M(p).error}),r=z(async h=>{try{const g=await i.get(h);return{data:g,preparedData:n?n(g):g}}catch(g){throw new Error(s(g))}}),d=z(async h=>{var g;try{await((g=i.post)==null?void 0:g.call(i,h))}catch(x){throw new Error(s(x))}}),c=T(),p=ee(o).on(r,h=>({...h,error:null})).on(d.pending,h=>({...h,loading:!0})).on(d.failData,(h,{message:g})=>({...h,error:g,loading:!1})).on(d.doneData,h=>({...h,error:null,loading:!1})).on(r.doneData,(h,{data:g,preparedData:x})=>({...h,data:g,preparedData:x})).on(r.failData,(h,g)=>({...h,error:g.message})).on(c,()=>({...Hn}));return{selectors:{useData:a},effects:{getFx:r,postFx:d},events:{clearStore:c}}};function Kd(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}const Qd=si({api:{get:jd},prepareData:Kd}),Je=si({api:{get:Dd}}),Zd=e=>e.reduce((i,n)=>{const s=new Date(n.date).getFullYear();return i[s]?i[s].push(n):i[s]=[n],i},{}),ep=si({api:{get:Yd},prepareData:Zd}),Bn={message:"",type:"success",isOpen:!1,time:2e3},oo=T(),ao=T(),ro=T();ee(Bn).on(oo,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(ao,(e,{isOpen:i})=>({...e,isOpen:i})).on(ro,()=>({...Bn}));const Te={evokePopUpMessage:oo,openPopUpMessage:ao,clearStore:ro},Un={listApplication:null,error:null,dataUserApplication:null},zt=z(async()=>{const e=await Cd();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),mi=z(async()=>{const e=await Id();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Oi=z(async e=>await Rd(e));D({clock:Oi.doneData,fn:e=>{const i=e.data.dismissalResponse;return i.isError?{message:i.errorString,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Te.evokePopUpMessage});D({clock:Oi.fail,fn:()=>({message:"Не удалось отправить форму. Попробуйте позже",type:"hrFailure",time:3e5}),target:Te.evokePopUpMessage});const tp=T();Ue({from:Oi.doneData,to:zt});ee(Un).on(mi,e=>({...e,error:null})).on(mi.doneData,(e,i)=>({...e,dataUserApplication:i})).on(mi.failData,(e,i)=>({...e,error:i.message})).on(zt,e=>({...e,error:null})).on(zt.doneData,(e,i)=>({...e,listApplication:i})).on(zt.failData,(e,i)=>({...e,error:i.message})).on(tp,()=>({...Un}));const ip={getApplicationsFx:zt,getUserDataApplicationsFx:mi,postApplicationFx:Oi},Wn={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},Mt=z(async()=>{const e=await Pd();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Ft=z(async()=>{const e=await Ed();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),Ht=z(async()=>{const e=await $d();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),lo=z(async e=>{const i=await Ad(e);if(i==="ok")return"ok";throw new Error(i)}),np=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=M(sp);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:M(Ht.pending),workerLoading:M(Rs(Mt.pending,ip.postApplicationFx.pending,(o,a)=>o||a)),error:s}},co=T();Ue({from:lo.doneData,to:Ft});const sp=ee(Wn).on(Ht,e=>({...e,error:null})).on(Ht.doneData,(e,i)=>({...e,dataUserApplication:i})).on(Ht.failData,(e,i)=>({...e,error:i.message})).on(Ft,e=>({...e,error:null})).on(Ft.doneData,(e,i)=>({...e,listApplication:i})).on(Ft.failData,(e,i)=>({...e,error:i.message})).on(Mt,e=>({...e,error:null})).on(Mt.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(Mt.failData,(e,i)=>({...e,error:i.message})).on(co,()=>({...Wn})),je={useApplications:np},He={getApplicationsFx:Ft,getUserDataApplicationsFx:Ht,postApplicationFx:lo,getWorkerPosts:Mt},op={clearStore:co},ap=Object.freeze(Object.defineProperty({__proto__:null,effects:He,events:op,selectors:je},Symbol.toStringTag,{value:"Module"})),Vn={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},rp=()=>M(lp),po=T(),uo=T(),ho=T(),lp=ee(Vn).on(po,(e,{message:i,onReject:n,onConfirm:s})=>({isOpen:!0,message:i,onConfirm:s,onReject:n})).on(uo,e=>({...e,isOpen:!1})).on(ho,()=>({...Vn})),go={useConfirm:rp},Fe={evokeConfirm:po,closeConfirm:uo,clearStore:ho},cp=Object.freeze(Object.defineProperty({__proto__:null,events:Fe,selectors:go},Symbol.toStringTag,{value:"Module"})),dp=({defaultStore:e,api:i})=>{const n=e,s=()=>({data:M(c).data,loading:M(r.pending),error:M(c).error,completed:M(c).completed}),o=T(),a=z(async p=>{try{return(await i.post(p)).data}catch{throw new Error("Не удалось отправить данные. Проверьте интернет соединение и попробуйте снова")}}),r=z(async()=>{if(i.get)try{return{...(await i.get()).data}}catch(p){throw new Error(p)}return n.data}),d=T(),c=ee(n).on(r,p=>({...p,error:null})).on(r.doneData,(p,h)=>({...p,data:h})).on(r.failData,(p,h)=>({...p,error:h.message})).on(o,(p,h)=>({...p,completed:h.completed})).on(d,()=>({...n}));return{selectors:{useForm:s},effects:{getFormFx:r,postFormFx:a},events:{changeCompleted:o,clearStore:d}}},{effects:pp,events:up,selectors:hp}=dp({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:kd,post:Td}}),gp=Object.freeze(Object.defineProperty({__proto__:null,effects:pp,events:up,selectors:hp},Symbol.toStringTag,{value:"Module"})),xp=si({api:{get:io,post:wd},prepareData:e=>e[0]}),ie=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},Gn=(e,i)=>{if(i){const n=new Date(Date.parse(i));return n.setDate(n.getDate()+e),ie(n,"extraWeird")}else{const n=new Date;return n.setDate(n.getDate()+e),ie(n,"extraWeird")}},pi=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:Gn(-30*11),maxValueInput:Gn(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),ui={kvdCert:pi({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:pi({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:pi({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:pi({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},bt=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var r;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const d=new Date(((r=a.value)==null?void 0:r.toString())??0);if(a.minValueInput){const c=new Date(a.minValueInput);if(d<c)return!0}if(a.maxValueInput){const c=new Date(a.maxValueInput);if(d>c)return!0}}return i&&a.specialType&&!Object.values(i).includes(a.specialType)?null:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(d=>!!d.files.length)})&&n&&s},fp={all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0},mp=()=>Object.keys(Le).reduce((e,i)=>(e[i]={id:i,property:{}},e),{}),xo=(e="")=>({[e]:{...mp(),[Le["settings-appearance"]]:{id:Le["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[Le["settings-home-page"]]:{id:Le["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0}},[Le["settings-customize-menu"]]:{id:Le["settings-customize-menu"],property:{pages:$i}},[Le["settings-notifications"]]:{id:Le["settings-notifications"],property:fp}}});var Le=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e["settings-notifications"]="settings-notifications",e))(Le||{});const Ki={settings:xo(),error:null,completed:!1};let Pe;const bp=()=>({settings:M(bi).settings[Pe],error:M(bi).error,completed:M(bi).completed}),vp=(e,i)=>{if(!e)return i;const n={...e};for(const s in i)n[s]===void 0&&(n[s]=i[s]);return n},fo=z(e=>{Pe=e;const i=JSON.parse(localStorage.getItem(G.NewSettings)??"{}")[Pe];return vp(i,xo(e)[e])}),mo=T(),bo=T(),vo=T(),bi=ee(Ki).on(bo,(e,i)=>({...e,completed:i.completed})).on(fo.doneData,(e,i)=>({...e,settings:{[Pe]:i}})).on(mo,(e,{nameSettings:i,nameParam:n,value:s})=>({...e,settings:{[Pe]:{...e.settings[Pe],[i]:{...e.settings[Pe][i],property:{...e.settings[Pe][i].property,[n]:s}}}}})).on(vo,()=>({...Ki}));bi.watch(e=>{if(e!==Ki&&Pe){const i=JSON.parse(localStorage.getItem(G.NewSettings)??JSON.stringify({}));i[Pe]=e.settings[Pe],localStorage.setItem(G.NewSettings,JSON.stringify(i))}});const St={useSettings:bp},oi={updateSetting:mo,changeCompleted:bo,clearStore:vo},yp={getLocalSettingsFx:fo},Ai=()=>{var a,r;const{settings:e}=St.useSettings(),i=e==null?void 0:e["settings-appearance"],[n,s]=l.useState(((r=(a=e==null?void 0:e["settings-appearance"])==null?void 0:a.property)==null?void 0:r.theme)??"light");l.useLayoutEffect(()=>{if(e){const d=new Date().getHours()*60+new Date().getMinutes(),c=i.property.lightThemeRange??0,p=d>+c[0]&&d<+c[1],h=i.property.scheduledLightTheme?p?"light":"dark":i.property.theme;document.documentElement.getAttribute("data-theme"),s(h),document.documentElement.setAttribute("data-theme",h)}else document.documentElement.setAttribute("data-theme","light")},[e]);const o=l.useCallback(d=>{s(()=>{const c=d?"dark":"light";return document.documentElement.setAttribute("data-theme",c),oi.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:c}),c})},[]);return{theme:n,switchTheme:o}},jp=u.button`
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
`,Yn={message:"",type:"success",isOpen:!1,time:2e3},_p=()=>M(wp),yo=T(),jo=T(),_o=T(),wp=ee(Yn).on(yo,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(jo,(e,{isOpen:i})=>({...e,isOpen:i})).on(_o,()=>({...Yn})),wo={usePopUpMessage:_p},q={evokePopUpMessage:yo,openPopUpMessage:jo,clearStore:_o},kp=Object.freeze(Object.defineProperty({__proto__:null,events:q,selectors:wo},Symbol.toStringTag,{value:"Module"}));function y(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:d,hoverBackground:c,align:p,isChosen:h,padding:g,shrinkTextInMobile:x,fixedInMobile:m,direction:f="horizontal",isActive:b=!0,height:v,notActiveClickMessage:P,flipped:_,...S}=e,k=X=>{b?s==null||s(X):P&&q.evokePopUpMessage({type:"failure",message:P,time:1e4})};return t.jsxs(jp,{text:!!n,onClick:k,isChosen:h,width:o,minWidth:a,background:r,padding:g,textColor:d,shrinkTextInMobile:x,hoverBackground:c,align:p,direction:f,isActive:b,fixedInMobile:m,height:v,flipped:_,...S,children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})}const Qi=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},qn=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},Tp=u.div`
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
`,Sp=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],ai=u.div.withConfig({shouldForwardProp:e=>!Sp.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?qn(n):Qi(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Qi(i):qn(n)};
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
`,Ep=u.div`
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
`;function U({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(Ep,{pulse:s,size:i,shape:e,margin:n})}const $p=u(ai)`
    height: 100%;
`,Pp=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx($p,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(U,{...o,key:a}))}),nt=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function Op({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:nt(n),children:i});case 2:return t.jsx("h2",{className:"title",style:nt(n),children:i});case 3:return t.jsx("h3",{className:"title",style:nt(n),children:i});case 4:return t.jsx("h4",{className:"title",style:nt(n),children:i});case 5:return t.jsx("h5",{className:"title",style:nt(n),children:i});case 6:return t.jsx("h6",{className:"title",style:nt(n),children:i});default:return t.jsx("h1",{className:"title",style:nt(n),children:i})}}const Ap=u.div`
    width: 100%;
    text-align: ${({align:e})=>e};
    margin-bottom: ${({bottomGap:e})=>typeof e=="string"?e:e?"10px":"0"};
    display: inline-flex;
    align-items: center;
    justify-content: ${({align:e})=>e?e==="left"?"flex-start":e==="right"?"flex-end":e:"center"};

    color: var(--text);

    svg {
        min-width: ${({size:e})=>`${58-e*10}px`};
        height: ${({size:e})=>`${58-e*10}px`};
        margin-right: 8px;
        color: ${({iconColor:e})=>e};
    }
`,Cp=u.span`
    color: var(--red);
    margin-right: 5px;
`,Ip=u.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function W(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,align:d="center",bottomGap:c=!1,visible:p=!0}=e;return p?t.jsxs(Ap,{size:o,className:"title-wrapper",align:d,bottomGap:c,iconColor:n,children:[i,t.jsxs(Op,{size:o,width:r,children:[a&&t.jsx(Cp,{children:"*"}),t.jsx(Ip,{width:r,children:s})]})]}):null}const Rp=(e,i,n)=>n?"#fff":e?w[ct[i].color].dark3:w[ct[i].color].light3,Dp=u.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>Rp(i,e,n)};
    background: ${({type:e,solidBackground:i})=>w[ct[e].color][i?"main":"transparent3"]};
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
        color: ${({type:e,isLightTheme:i})=>w[ct[e].color][i?"main":"light2"]};
    }
`,Np=()=>t.jsx(Pp,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function J({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:d,fontSize:c,gap:p,lineHeight:h,solidBackground:g=!1,align:x="left",visible:m=!0,loading:f=!1}){if(!m)return null;const{theme:b}=Ai();return t.jsxs(Dp,{isLightTheme:b==="light",className:"message",closable:!!r,type:e,align:x,width:s,maxWidth:o,padding:d,fontSize:c,gap:p,lineHeight:h,solidBackground:g,children:[t.jsx(W,{size:4,align:x,icon:n===null?null:n??ct[e].icon({}),children:a??ct[e].title}),r&&t.jsx(y,{onClick:r,icon:t.jsx(We,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),f&&t.jsx(Np,{})]})}u.div`
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
`;const Lp=u.div`
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
`,zp=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(Lp,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),he=u.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,Mp="/assets/sad-emoji-0c60bf90.gif",te=u.span`
    width: ${({width:e})=>e??"fit-content"};
    min-width: ${({width:e})=>e??"fit-content"};
    max-width: ${({maxWidth:e})=>e??"fit-content"};
    font-size: ${({fontSize:e})=>e??"0.8em"};
    font-weight: 500;
    opacity: 0.7;
    text-align: ${({align:e})=>e??"left"};
    display: ${({visible:e})=>!(e??!0)&&"none"};
    line-height: ${({lineHeight:e})=>e};
`,Fp=u.div`
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
`;function ge({text:e,image:i,size:n,children:s}){return t.jsxs(Fp,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||Mp,alt:"груфтим("}):i}),t.jsx(te,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const Hp="/assets/loading-c8041cd3.gif",Bp=u.img`
    width: 40px;
`;function ut(e){return t.jsx(Bp,{...e,src:Hp,alt:"loading",className:"loading-circle"})}const Up="/assets/logo-4d9aa449.png",Wp="/assets/mospolytech-logo-white-b1e4f630.png",Vp=u.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function Ci({width:e,className:i,short:n=!1}){return t.jsx(Vp,{width:e,className:i??"logo",children:t.jsx("img",{src:n?Wp:Up,alt:"Logo"})})}const Gp=u.img``;function xn({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(U,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(Gp,{src:i,alt:o,height:n,width:s})}const Yp=u.div`
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
`;function qp({size:e,color:i}){return t.jsx(Yp,{size:e,color:i?w[i].main:void 0,children:t.jsxs("div",{className:"wrapper",children:[t.jsx("div",{className:"circle-blue",children:t.jsx("div",{className:"circle-white"})}),t.jsx("div",{className:"circle-blue-shadow"}),t.jsx("svg",{className:"check-svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:t.jsx("polyline",{className:"check-poly",points:"26 37 34 43 47 27",strokeLinecap:"round"})})]})})}const Jp=u.div`
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
`;function Xp(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:d=!0,isActive:c=!0}=e;return t.jsxs(Jp,{isActive:c,width:s,textAreaAppearance:d,children:[t.jsx(W,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:p=>n(p.target.value),placeholder:o,required:a,value:i})]})}const Kp=u.button`
    width: ${({width:e})=>e??"100%"};
    padding: 10px;
    box-sizing: border-box;
    opacity: ${e=>e.isLoading||!e.isActive?.5:1};
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
    background: ${({isDone:e,background:i})=>e?"var(--green)":i??"var(--blue)"};
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
`,wt=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:d="Успешно",popUpFailureMessage:c="Nope",pulsing:p,isDone:h=!1,isActive:g=!0,isLoading:x=!1,completed:m=!1,repeatable:f=!0,alerts:b=!0})=>{l.useEffect(()=>{m&&b&&(q.evokePopUpMessage({message:d,type:"success"}),f&&setTimeout(()=>{o(!1)},2e3))},[m,o]);const v=()=>{if(g&&!h&&!x)return i();b&&q.evokePopUpMessage({message:c,type:"failure"})};return t.jsx(Kp,{isLoading:x,background:a,className:"submit-button",completed:m,isActive:g&&!h&&!m,onClick:v,isDone:h,width:n,height:s,repeatable:f,tabIndex:g&&!h?0:-1,pulsing:p&&!h,children:t.jsx("div",{className:"inner-button",children:m?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(tc,{})," ",r]}):x?t.jsx(ut,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},Qp=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,Zp=e=>{const i=["7","8","9"],n=e.target.selectionStart;let s=e.target.value.replace(/\D/g,""),o="";return s.length?e.target.value.length!==n?/\D/g.test(e.nativeEvent.data??"")?s:e.target.value:(i.indexOf(s[0])>-1?(s[0]==="9"&&(s="7"+s),o=(s[0]==="8"?"8":"+7")+" ",s.length&&(o+="("+s.substring(1,4)),s.length>=5&&(o+=") "+s.substring(4,7)),s.length>=8&&(o+="-"+s.substring(7,9)),s.length>=10&&(o+="-"+s.substring(9,11))):o=`+${s.substring(0,16)}`,o):""},eu={groupMask:Qp,phoneMask:Zp},tu=(e,i,n,s,o,a,r,d)=>{const[c,p]=l.useState(n),[h,g]=l.useState(s??!1);l.useEffect(()=>{p(n)},[n]);const x=l.useCallback(v=>v.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:c,danger:h,phoneMaskKeyDown:v=>{v.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>p(v=>v==="password"?"text":"password"),handleOnChange:v=>{if(i(d?r?r(v.target.value,e):n==="tel"?eu.phoneMask(v):n==="email"?x(v.target.value):v.target.value:v.target.value),n==="date"&&(o||a)){const P=new Date(v.target.value);let _=!1;if(o){const S=new Date(o);_=P<S}if(a&&!_){const S=new Date(a);_=P>S}g(_)}}}},iu=u.div`
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
`,Xe=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:d,width:c,minWidth:p,customMask:h,placeholder:g="Введите сюда",type:x="text",danger:m,alertMessage:f,loading:b=!1,isActive:v=!0,inputAppearance:P=!0,mask:_=!1,autocomplete:S=!1,minValue:k=void 0,maxValue:X=void 0,maxLength:O=void 0}=i,{inputType:L,buttonOnClick:se,danger:R,handleOnChange:ae,phoneMaskKeyDown:Ne}=tu(s,o,x,m,k,X,h,_);return t.jsxs(iu,{leftIcon:!!a,isActive:v,inputAppearance:P,width:c,danger:R,minWidth:p,children:[t.jsx(W,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:d,children:r}),t.jsx(J,{type:"alert",visible:!!f,icon:t.jsx(ic,{}),title:f??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:g,min:k,max:X,maxLength:O,step:X?.1:void 0,type:L,placeholder:g,value:s??"",autoComplete:S?"on":"off",onKeyDown:Se=>x==="tel"&&Ne(Se),onChange:ae,required:d,readOnly:!v,ref:n}),x!=="password"?!!(s!=null&&s.length)&&P&&(b?t.jsx(ut,{}):t.jsx(y,{icon:t.jsx(We,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(y,{icon:L==="password"?t.jsx(nc,{}):t.jsx(Ds,{}),tabIndex:-1,onClick:se})]})}),nu=u.div`
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
        background: var(--search);
        cursor: pointer;
        border-radius: 50px;
        padding: 4px;
        transition: 0.2s background;
    }

    .toggle-circle {
        height: 100%;
        background: var(--theme);
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
`,su="/assets/thinking-emoji-f3c10f79.gif",ou=["loading"],au=u.div.withConfig({shouldForwardProp:e=>!ou.includes(e)})`
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
`,et=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs(au,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(ge,{text:n,image:a&&su,children:!a&&t.jsx(y,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(Ns,{})})})}):t.jsx(ut,{})}),t.jsx("div",{className:"content",children:e})]})),ru=u.a`
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
`,lu=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:d,height:c,minHeight:p,padding:h,isActive:g=!0,isChosen:x=!1})=>t.jsxs(ru,{text:!!i,onClick:m=>g&&n&&n(m),isChosen:x,width:s,background:o,textColor:a,href:d,align:r,isActive:g,height:c,padding:h,minHeight:p,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),tt=l.memo(lu),cu=u.div`
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
`,Et=u.div`
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
`,du=u.a`
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
`,pu=({title:e,link:i,type:n})=>t.jsxs(du,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(C,{}):t.jsx(sc,{})}),t.jsx("div",{className:"title",children:e})]}),uu=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),hu={open:!1,content:null,type:"left-click",position:{x:0,y:0}},gu=()=>we(xu),ko=T(),To=T(),So=T(),xu=ee(hu).on(ko,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:uu(n,220,s),open:!0,content:i,type:o})).on(To,e=>({...e,open:!1})).on(So,(e,{position:i})=>({...e,position:i})),Ae={open:ko,close:To,changePosition:So},fu={useContextMenu:gu},mu=()=>{const e=navigator.userAgent;return e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":"Windows"},Wi=new Set,Eo=(e,i)=>{l.useEffect(()=>{window.addEventListener("keydown",n=>{Wi.add(n.key),!e.slice(0,e.length-1).find(o=>!Wi.has(o))&&e[e.length-1]===n.key&&i()}),window.addEventListener("keyup",n=>{Wi.delete(n.key)})},[])},Ve=u.div`
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
`,me=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},$o=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"х","]":"ъ","}":"ъ","'":"э",";":"ж",",":"б",".":"ю"};let n="";for(let s=0;s<e.length;s++){const o=me(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},Po=e=>/[A-Za-z]/.test(e),bu=u.span`
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
`,Oo=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!Po(e))return null;const s=$o(e),o=()=>i(s);return t.jsxs(te,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(bu,{tabIndex:10,children:s})]})};function $t(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function Ke(e,i,n=0){return e>i?n:e<n?i:e}const vu=u.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,yu=u(Ve)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,ju=u.div`
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
`,Ao=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:d,setValue:c,customMask:p,onHintClick:h,validationCheck:g=!1})=>{const[x,m]=l.useState(0),[f,b]=l.useState(!1),v=l.useRef(null),P=l.useRef(null),_=l.useRef(null);$t(v,()=>b(!1)),l.useEffect(()=>{d&&setTimeout(()=>{var O;return(O=_.current)==null?void 0:O.focus()},50)},[d]);const S=O=>{var L,se;(((a==null?void 0:a.length)??0)>0||o)&&b(!0),O.key==="ArrowDown"?((L=P.current)==null||L.scrollIntoView({block:"start",behavior:"smooth"}),typeof x=="number"&&m(Ke(x+1,((a==null?void 0:a.length)??1)-1,0))):O.key==="ArrowUp"?((se=P.current)==null||se.scrollIntoView({block:"end",behavior:"smooth"}),typeof x=="number"&&m(Ke(x-1,((a==null?void 0:a.length)??1)-1,0))):O.key==="Enter"?(c((a==null?void 0:a[x??0].title)??""),b(!1),h==null||h(a==null?void 0:a[x??0])):m(0)},k=O=>()=>{m(O),c((a==null?void 0:a[O].title)??""),b(!1),h==null||h(a==null?void 0:a[O])},X=()=>{a!=null&&a.length&&b(!0)};return t.jsxs(vu,{width:i,onKeyDown:S,onMouseDown:X,ref:v,children:[t.jsx(Xe,{value:e,placeholder:n,leftIcon:r??t.jsx(rt,{}),inputAppearance:s,setValue:c,loading:o,width:i,mask:!0,customMask:p,ref:_}),t.jsx(Oo,{setValue:c,value:e,visible:g}),f&&t.jsx(yu,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:S,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:O,icon:L},se)=>{const R=x===se;return t.jsxs(ju,{onClick:k(se),ref:R?P:null,selected:R,children:[L&&t.jsx("div",{className:"icon",children:L}),t.jsx("span",{children:O})]},O+se)})})]})},Ii=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},_u=u.div`
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
`,wu=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,size:o,condition:a=!0})=>t.jsx(_u,{className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),size:o,condition:a,children:t.jsx("b",{children:s})}),ku=l.memo(wu);u.div`
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
`;const Tu=u.span`
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
`,Su=({currentPage:e,pages:i,size:n,appearance:s})=>{const o=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(Tu,{currentPage:e,appearance:s,moreThanNeeded:o,pages:i,size:n})},Eu=l.memo(Su),$u=u.div`
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
`,Pu=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0})=>{const[a,r]=l.useState(5),d=l.useRef(null),{width:c}=Ii();return l.useEffect(()=>{var h;const p=((h=d==null?void 0:d.current)==null?void 0:h.offsetWidth)??c;p>800?r(5):p>600&&p<=800||p>400&&p<=600?r(4):p<=400&&r(3)},[c,d.current]),t.jsx($u,{ref:d,size:a,sliderWidth:s,appearance:o,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(Eu,{appearance:o,pages:e,currentPage:i,size:a}),e.map((p,h)=>t.jsx(ku,{id:h,currentPage:i,setCurrentPage:n,pageTitle:p.title,condition:p.condition,size:a},h))]})})},fn=l.memo(Pu),Ou=300,Co=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=Ou})=>{const[d,c]=l.useState(e??""),[p,h]=l.useState(""),[g,x]=l.useState(!1);return l.useEffect(()=>{if(d!==null)if(d.length){x(!0);const m=setTimeout(async()=>{await i(d),h(d),x(!1)},r);return()=>clearTimeout(m)}else p.length!==0&&(n==null||n(d),c(""),x(!1))},[d]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(d))??!0)){x(!0);const m=setTimeout(async()=>{await i(d),x(!1)},o??r);return()=>clearTimeout(m)}},[...a]),[d,c,g]},dt=u.span`
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
`,Au=u.div`
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
        width: ${({size:e})=>e/2+"px"};
        height: ${({size:e})=>e/2+"px"};
    }
`,Ce=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs(Au,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(dt,{outline:"4px solid var(--schedule)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},Io=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:d=!1,placeholder:c="Поиск по меню",validationCheck:p=!1})=>{const h=v=>{n(i(v,e))},g=()=>{n(null)},[x,m,f]=Co({onDebounce:h,onClear:g}),b=v=>{m(v),o&&o(v)};return t.jsx(Ao,{value:x??"",setValue:b,inputAppearance:s,placeholder:c,validationCheck:p,loading:d?f:!1,hints:a,width:r})},Cu=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(nu,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),Ro=u.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,Iu=u(Ro)`
    background: var(--almostTransparentOpposite);
`,Ru=u(Ro)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>w[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,Do=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(be,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(Iu,{},a)),t.jsx(Ru,{color:n,current:i})]}),Du=u.div`
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
`,Qe=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>o?t.jsxs(Du,{checked:i,invisibleOnFalse:r,fontSize:s,onClick:()=>{a&&n(!i)},isActive:a,className:"checkbox",children:[t.jsx(y,{width:"25px",height:"25px",onClick:()=>null,icon:i||r?t.jsx(Ls,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(zs,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"checkbox-text",children:e})]}):null,No=e=>e.split("/")[1],Nu=e=>e*1024*1024,Lu=(e,i)=>(i??ad).indexOf(e.type)!==-1,Jn=(e,i,n,s,o=rd)=>{if(n&&i.length+e.length>n)return q.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return Lu(e[a],s)?e[a].size>Nu(o)?(q.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(console.log(e[a]),q.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>No(r))}`,type:"failure",time:5e3}),i)},zu=u.label`
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
`,Pt=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},Mu=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[d,c]=l.useState(!1),p=f=>{const b=f.target.files;b!=null&&b.length&&n(Jn(b,e,i,o,a))},h=f=>{f.preventDefault()},g=f=>{f.preventDefault(),c(!1);const b=f.dataTransfer.files;b.length&&n(Jn(b,e,i,o,a))},x=f=>{f.preventDefault(),c(!0)},m=f=>{f.preventDefault(),c(!1)};return t.jsxs(zu,{isActive:s,showPulse:d,onDragOver:f=>s&&h(f),onDragEnter:f=>s&&x(f),onDragLeave:f=>s&&m(f),onDrop:f=>s&&g(f),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:p}),t.jsxs("div",{className:"message",children:[t.jsx(Ui,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(Ui,{className:"icon-1"}),t.jsx(Ui,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsx(te,{align:"center",children:t.jsx(Pt,{words:[`Форматы: ${o?o.map(f=>No(f)).join(", "):"jpg, png, pdf"}`,`Макс. файлов: ${i}`]})})]})]})},Fu=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},Hu=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),Bu=u.div`
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
`,Uu=({file:e,files:i,setFiles:n})=>{const{open:s}=K(),o=(r,d)=>{r.preventDefault(),r.stopPropagation();const c=new FileReader;c.onloadend=()=>{s(t.jsx(xn,{src:c.result,loading:!1,width:"500px",height:""}))},d&&c.readAsDataURL(d)},a=r=>Fe.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(Hu(r,e.name,i))});return t.jsxs(Bu,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(oc,{}):t.jsx(ac,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(te,{fontSize:"0.7em",children:Fu(e.size)})]})]}),t.jsx(y,{icon:t.jsx(We,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},Wu=({files:e,setFiles:i})=>t.jsx(be,{title:"Список файлов",visible:!!e.length,onDelete:()=>Fe.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx(Uu,{file:n,files:e,setFiles:i},n.name))}),Lo=e=>t.jsxs(be,{gap:12,children:[t.jsx(Mu,{...e}),t.jsx(Wu,{files:e.files,setFiles:e.setFiles})]}),Vu=u.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,Gu=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(Vu,{children:[t.jsx(Qe,{...e}),n&&t.jsx(Lo,{...i})]}),Yu=u.div`
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
`,zo=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:d})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const c=new Date(n[0]),p=new Date(c);p.setDate(c.getDate()+r),n[1]=ie(p,"extraWeird")}return t.jsxs(Yu,{children:[t.jsx(W,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(J,{title:"Внимание",type:"alert",icon:t.jsx(qt,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(Xe,{value:n[0],danger:!o,setValue:c=>s([c,n[1]]),type:"date",minValue:d}),t.jsx(Xe,{value:n[1],setValue:c=>s([n[0],c]),type:"date",danger:!o})]})]})},qu=e=>{var f,b,v;const{width:i}=Ii(),n=l.useRef(null),[s,o]=l.useState(!1),[a,r]=l.useState(!1),[d,c]=l.useState(0),[p,h]=l.useState(0),g=((f=n.current)==null?void 0:f.clientWidth)??1,x=Math.ceil((((b=n.current)==null?void 0:b.scrollWidth)??0)/(g+(e??0)));return l.useEffect(()=>{n.current&&(n.current.scrollLeft=d,n.current.clientWidth<n.current.scrollWidth?(o(!0),r(!0)):(r(!1),o(!1)))},[d,(v=n.current)==null?void 0:v.clientWidth,i]),{listRef:n,leftArrow:s,rightArrow:a,setScrollLeft:c,pageOffset:g,amountOfPages:x,currentPage:p,setCurrentPage:h,handleScroll:P=>{h(Math.ceil(P.currentTarget.scrollLeft/(g+(e??0))))}}},Ju=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:d,wrap:c,onAdd:p,onWatchMore:h,onDelete:g,showPages:x,innerPadding:m,minWidth:f,wrapOnMobile:b,position:v,direction:P="vertical",verticalAlign:_="top",horizontalAlign:S="left",scroll:k=!0,visible:X=!0,...O}=e;if(!X)return null;const{listRef:L,leftArrow:se,rightArrow:R,handleScroll:ae,setScrollLeft:Ne,pageOffset:Se,amountOfPages:It,currentPage:Rt}=qu(s);return t.jsxs(Tp,{padding:r,position:v,width:o,minWidth:f,height:a,children:[t.jsxs(W,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,p&&t.jsx(y,{icon:t.jsx(Jt,{}),width:"35px",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:p}),h&&t.jsx(y,{width:"50px",height:"15px",background:w.blue.transparent2,textColor:w.blue.light1,onClick:h,text:"Ещё"}),g&&t.jsx(y,{width:"fit-content",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:g,text:"Удалить"})]}),t.jsx(ai,{verticalAlign:_,horizontalAlign:S,direction:P,ref:L,gap:s,width:o,height:a,fontSize:d,wrap:c,innerPadding:m,scroll:k,wrapOnMobile:b,onScroll:ae,...O,children:n}),(R||se)&&t.jsxs("div",{className:"bottom-wrapper",children:[se&&t.jsx(y,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(ti,{}),className:"left-button",textColor:w.grey.main,onClick:()=>{Ne(Ee=>{var it;return Ke(Ee-Se-(s??0),((it=L.current)==null?void 0:it.scrollWidth)??0)})}}),x&&t.jsx(Do,{direction:"horizontal",current:Rt,amount:It}),R&&t.jsx(y,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(Tt,{}),className:"right-button",textColor:w.grey.main,onClick:()=>{Ne(Ee=>{var it;return Ke(Ee+Se+(s??0),((it=L.current)==null?void 0:it.scrollWidth)??0)})}})]})]})},be=le.memo(Ju),Xu=()=>t.jsx("div",{className:"left",children:t.jsxs(be,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(Ci,{width:"50px",short:!0,className:"logo first"}),t.jsxs(be,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(Z,{to:Cn,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(Xt,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:ar,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(rc,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:or,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(qt,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:rr,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(qt,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(he,{}),t.jsx(Z,{to:sr,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(lc,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(tt,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx(Ms,{}),align:"left",padding:"0",width:"100%",href:`${A}/index.php`})]})}),Ku=()=>{const{search:e}=Fs();return le.useMemo(()=>new URLSearchParams(e),[e])},Qu=()=>{const e=Ku(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[d,c]=l.useState(!1),p=!!a&&!!s,h=Zt.login,g=f=>{c(f.getModifierState("CapsLock")),f.key==="Enter"&&h({login:s,password:a})},x=f=>{Zt.changeSavePassword({savePassword:f})},m=()=>h({login:s,password:a});return l.useEffect(()=>{i&&n&&h({login:i,password:n})},[i,n]),{isSubmitActive:p,handleSavePassword:x,handleKeyPress:g,handleLogin:m,password:a,setPassword:r,capsLock:d,login:s,setLogin:o}},Zu=()=>{const{loading:e,error:i,data:n}=ce.useUser(),{isSubmitActive:s,handleKeyPress:o,handleSavePassword:a,handleLogin:r,password:d,setPassword:c,capsLock:p,login:h,setLogin:g}=Qu();return t.jsx("div",{className:"right",onKeyDown:o,children:t.jsxs(be,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(Ci,{width:"50px",short:!0,className:"logo second"}),t.jsx($,{jc:"space-between",children:t.jsx(W,{size:3,align:"left",children:"Личный кабинет"})}),t.jsxs(J,{type:"info",title:"Уважаемые абитуриенты!",children:["Личный кабинет абитуриента находится по ссылке",t.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:t.jsx("strong",{children:" lk.mospolytech.ru"})})]}),t.jsxs(be,{gap:16,scroll:!1,children:[t.jsx(W,{size:4,align:"left",children:"Вход"}),t.jsx(te,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(J,{type:"failure",visible:!!i,children:i}),t.jsx(J,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(Xe,{value:h,setValue:g,title:"Логин",placeholder:"Введите логин"}),t.jsx(Xe,{value:d,setValue:c,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:p?"Включен Capslock":void 0}),t.jsx(Qe,{text:"Оставаться в системе",checked:n.savePassword,setChecked:a})]}),t.jsx(wt,{text:"Вход",action:r,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},eh=u(Ve)`
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
`,th=()=>{const{data:{isAuthenticated:e}}=ce.useUser();return t.jsxs(eh,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(Xu,{}),t.jsx(Zu,{})]})},ih=u.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme);
    flex-direction: column;

    @media (max-width: ${ld}) {
        justify-content: flex-start;
        align-items: flex-start;
    }
`,nh=()=>t.jsx(ih,{children:t.jsx(th,{})}),fe=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1,isRedirectButtonVisible:o=!0})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(ge,{text:i,children:o&&t.jsx(tt,{text:n,onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"var(--purple)",width:"300px",href:`${A}/?p=${e==null?void 0:e.slice(1,e.length)}`})})),sh="modulepreload",oh=function(e){return"/"+e},Xn={},j=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=oh(a),a in Xn)return;Xn[a]=!0;const r=a.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const g=o[h];if(g.href===a&&(!r||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${d}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":sh,r||(p.as="script",p.crossOrigin=""),p.href=a,document.head.appendChild(p),r)return new Promise((h,g)=>{p.addEventListener("load",h),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())},ah=l.lazy(()=>j(()=>import("./index-477e5e2d.js"),["assets/index-477e5e2d.js","assets/vendor-e9654bfa.js","assets/get-default-subdivision-205744b6.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js"])),rh=l.lazy(()=>j(()=>import("./index-1e61038f.js"),["assets/index-1e61038f.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js","assets/get-default-subdivision-205744b6.js","assets/get-method-obtaining-fields-431242aa.js","assets/get-teacher-subdivisions-500dfe3f.js"])),lh=l.lazy(()=>j(()=>import("./index-f378a95f.js"),["assets/index-f378a95f.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js"])),ch=l.lazy(()=>j(()=>import("./index-75b212c2.js"),["assets/index-75b212c2.js","assets/vendor-e9654bfa.js","assets/find-current-in-select-ba4611d5.js"]));l.lazy(()=>j(()=>Promise.resolve().then(()=>Rf),void 0));const dh=l.lazy(()=>j(()=>import("./index-db4ec4d6.js"),["assets/index-db4ec4d6.js","assets/vendor-e9654bfa.js","assets/index-c08d9e99.js"])),ph=l.lazy(()=>j(()=>import("./index-a4d553c1.js"),["assets/index-a4d553c1.js","assets/vendor-e9654bfa.js","assets/index-f0d04154.js"])),uh=l.lazy(()=>j(()=>import("./index-1b0475c2.js"),["assets/index-1b0475c2.js","assets/vendor-e9654bfa.js","assets/get-default-subdivision-205744b6.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js"])),hh=l.lazy(()=>j(()=>import("./index-47d19c1d.js"),["assets/index-47d19c1d.js","assets/vendor-e9654bfa.js","assets/get-default-subdivision-205744b6.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js","assets/get-method-obtaining-fields-431242aa.js","assets/get-teacher-subdivisions-500dfe3f.js"])),gh=l.lazy(()=>j(()=>import("./index-c83fc811.js"),["assets/index-c83fc811.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js","assets/get-default-subdivision-205744b6.js","assets/get-method-obtaining-fields-431242aa.js","assets/get-teacher-subdivisions-500dfe3f.js"])),xh=l.lazy(()=>j(()=>import("./index-a58450f7.js"),["assets/index-a58450f7.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js","assets/get-default-subdivision-205744b6.js"])),fh=l.lazy(()=>j(()=>import("./index-fc16b33f.js"),["assets/index-fc16b33f.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js","assets/get-default-subdivision-205744b6.js","assets/get-method-obtaining-fields-431242aa.js","assets/get-teacher-subdivisions-500dfe3f.js"])),mh=l.lazy(()=>j(()=>import("./index-b93f3aa1.js"),["assets/index-b93f3aa1.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js","assets/get-default-subdivision-205744b6.js"])),bh=l.lazy(()=>j(()=>import("./index-b619d54d.js"),["assets/index-b619d54d.js","assets/vendor-e9654bfa.js","assets/ui-f8837c7d.js"])),vh=l.lazy(()=>j(()=>import("./index-5d2d3858.js"),["assets/index-5d2d3858.js","assets/vendor-e9654bfa.js","assets/ui-f8837c7d.js"])),yh=l.lazy(()=>j(()=>import("./index-e0089f74.js"),["assets/index-e0089f74.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js","assets/get-default-subdivision-205744b6.js"])),jh=l.lazy(()=>j(()=>import("./index-63596412.js"),["assets/index-63596412.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js","assets/get-default-subdivision-205744b6.js","assets/get-method-obtaining-fields-431242aa.js","assets/get-teacher-subdivisions-500dfe3f.js"])),_h=l.lazy(()=>j(()=>import("./index-639af2a5.js"),["assets/index-639af2a5.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-205744b6.js"])),wh=l.lazy(()=>j(()=>import("./index-c6c83f3d.js"),["assets/index-c6c83f3d.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js","assets/get-default-subdivision-205744b6.js"])),kh=l.lazy(()=>j(()=>import("./index-500bb46c.js"),["assets/index-500bb46c.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js","assets/get-default-subdivision-205744b6.js","assets/get-method-obtaining-fields-431242aa.js","assets/get-teacher-subdivisions-500dfe3f.js","assets/get-last-year-for-period-e1de6b16.js"])),Th=l.lazy(()=>j(()=>import("./index-b3308121.js"),["assets/index-b3308121.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js","assets/get-default-subdivision-205744b6.js","assets/get-method-obtaining-fields-431242aa.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Sh=l.lazy(()=>j(()=>import("./index-7d40f6a5.js"),["assets/index-7d40f6a5.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js","assets/get-default-subdivision-205744b6.js","assets/get-method-obtaining-fields-431242aa.js","assets/get-teacher-subdivisions-500dfe3f.js","assets/get-last-year-for-period-e1de6b16.js"])),Eh=l.lazy(()=>j(()=>import("./index-32f1f1f9.js"),["assets/index-32f1f1f9.js","assets/vendor-e9654bfa.js","assets/get-default-subdivision-205744b6.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js"])),$h=l.lazy(()=>j(()=>import("./index-5434a645.js"),["assets/index-5434a645.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js","assets/get-default-subdivision-205744b6.js"])),Ph=l.lazy(()=>j(()=>import("./index-a9d41b39.js"),["assets/index-a9d41b39.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js","assets/get-default-subdivision-205744b6.js"])),Oh=l.lazy(()=>j(()=>import("./index-cfe21430.js"),["assets/index-cfe21430.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-205744b6.js"])),Ah=l.lazy(()=>j(()=>import("./index-f977330a.js"),["assets/index-f977330a.js","assets/vendor-e9654bfa.js","assets/index-1244bdbe.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-1d74d9ae.js","assets/get-default-subdivision-205744b6.js","assets/get-method-obtaining-fields-431242aa.js","assets/get-teacher-subdivisions-500dfe3f.js"])),Ch=l.lazy(()=>j(()=>import("./index-9facfe05.js"),["assets/index-9facfe05.js","assets/vendor-e9654bfa.js"]));l.lazy(()=>j(()=>import("./index-46146b9b.js"),["assets/index-46146b9b.js","assets/vendor-e9654bfa.js","assets/index-3075abf3.js","assets/index-11402b8c.js"]));const mn=l.lazy(()=>j(()=>import("./index-3e0ac415.js"),["assets/index-3e0ac415.js","assets/vendor-e9654bfa.js"])),Ih=l.lazy(()=>j(()=>import("./index-538b9d39.js"),["assets/index-538b9d39.js","assets/vendor-e9654bfa.js"])),Rh=l.lazy(()=>j(()=>import("./index-93739c4b.js"),["assets/index-93739c4b.js","assets/vendor-e9654bfa.js","assets/send-hr-form-holiday-work-e519873b.js"])),Dh=l.lazy(()=>j(()=>import("./index-f92a60f0.js"),["assets/index-f92a60f0.js","assets/vendor-e9654bfa.js"])),Nh=l.lazy(()=>j(()=>import("./index-a6677597.js"),["assets/index-a6677597.js","assets/vendor-e9654bfa.js"])),Lh=l.lazy(()=>j(()=>import("./index-2884737a.js"),["assets/index-2884737a.js","assets/vendor-e9654bfa.js","assets/send-hr-form-holiday-work-e519873b.js"])),zh=l.lazy(()=>j(()=>import("./index-1e4bb077.js"),["assets/index-1e4bb077.js","assets/vendor-e9654bfa.js"])),Mh=l.lazy(()=>j(()=>import("./index-a51fd0d7.js"),["assets/index-a51fd0d7.js","assets/vendor-e9654bfa.js"])),Fh=l.lazy(()=>j(()=>import("./index-053aa153.js"),["assets/index-053aa153.js","assets/vendor-e9654bfa.js"])),Hh=l.lazy(()=>j(()=>import("./index-541e1694.js"),["assets/index-541e1694.js","assets/vendor-e9654bfa.js","assets/send-hr-form-work-transfer-01894a0a.js"])),Bh=l.lazy(()=>j(()=>import("./index-929b9315.js"),["assets/index-929b9315.js","assets/vendor-e9654bfa.js","assets/send-hr-form-work-transfer-01894a0a.js"]));l.lazy(()=>j(()=>Promise.resolve().then(()=>ox),void 0));l.lazy(()=>j(()=>import("./index-e4b14c36.js"),["assets/index-e4b14c36.js","assets/vendor-e9654bfa.js","assets/help-links-5544374e.js"]));const Uh=l.lazy(()=>j(()=>import("./index-f125ab99.js"),["assets/index-f125ab99.js","assets/vendor-e9654bfa.js"])),Mo=l.lazy(()=>j(()=>import("./index-3380e758.js"),["assets/index-3380e758.js","assets/vendor-e9654bfa.js","assets/index-3075abf3.js","assets/index-11402b8c.js"])),Fo=l.lazy(()=>j(()=>import("./index-46146b9b.js"),["assets/index-46146b9b.js","assets/vendor-e9654bfa.js","assets/index-3075abf3.js","assets/index-11402b8c.js"])),Wh=l.lazy(()=>j(()=>import("./index-9fd2bc51.js"),["assets/index-9fd2bc51.js","assets/vendor-e9654bfa.js"]));l.lazy(()=>j(()=>import("./index-30a6fc42.js"),["assets/index-30a6fc42.js","assets/vendor-e9654bfa.js","assets/index.esm-6c739436.js"]));const Vh=l.lazy(()=>j(()=>import("./index-dc13779d.js"),["assets/index-dc13779d.js","assets/vendor-e9654bfa.js"])),Ho=l.lazy(()=>j(()=>import("./index-06be8d8c.js"),["assets/index-06be8d8c.js","assets/vendor-e9654bfa.js","assets/help-links-5544374e.js"])),Gh=l.lazy(()=>j(()=>import("./index-f6d6b85d.js"),["assets/index-f6d6b85d.js","assets/vendor-e9654bfa.js"])),Yh=l.lazy(()=>j(()=>import("./index-20388685.js"),["assets/index-20388685.js","assets/vendor-e9654bfa.js"])),qh=l.lazy(()=>j(()=>import("./index-2fb64610.js"),["assets/index-2fb64610.js","assets/vendor-e9654bfa.js","assets/week-schedule-60862079.js"])),Jh=l.lazy(()=>j(()=>import("./index-c34ff857.js"),["assets/index-c34ff857.js","assets/vendor-e9654bfa.js"]));l.lazy(()=>j(()=>Promise.resolve().then(()=>ym),void 0));const Xh=l.lazy(()=>j(()=>import("./index-3d7b2389.js"),["assets/index-3d7b2389.js","assets/vendor-e9654bfa.js"])),Kh=l.lazy(()=>j(()=>import("./index-fa97b5ae.js"),["assets/index-fa97b5ae.js","assets/vendor-e9654bfa.js","assets/index-57eade7d.js","assets/week-schedule-60862079.js","assets/index-11402b8c.js"])),Qh=l.lazy(()=>j(()=>import("./index-9a7b71e5.js"),["assets/index-9a7b71e5.js","assets/vendor-e9654bfa.js","assets/customize-leftside-bar-item-2db53026.js","assets/index.esm-6c739436.js"])),Zh=l.lazy(()=>j(()=>import("./index-bc547027.js"),["assets/index-bc547027.js","assets/vendor-e9654bfa.js"])),eg=l.lazy(()=>j(()=>import("./index-54e1e7ad.js"),["assets/index-54e1e7ad.js","assets/vendor-e9654bfa.js"])),tg=l.lazy(()=>j(()=>import("./index-1d235f9b.js"),["assets/index-1d235f9b.js","assets/vendor-e9654bfa.js","assets/customize-leftside-bar-item-2db53026.js","assets/index.esm-6c739436.js"])),ig=l.lazy(()=>j(()=>import("./index-da309640.js"),["assets/index-da309640.js","assets/vendor-e9654bfa.js"])),ng=l.lazy(()=>j(()=>import("./index-1a9c3e2f.js"),["assets/index-1a9c3e2f.js","assets/vendor-e9654bfa.js","assets/index-57eade7d.js","assets/week-schedule-60862079.js","assets/index-11402b8c.js"])),sg=l.lazy(()=>j(()=>import("./index-26a2f476.js"),["assets/index-26a2f476.js","assets/vendor-e9654bfa.js","assets/index-c08d9e99.js"])),og=l.lazy(()=>j(()=>import("./index-e48f6c1b.js"),["assets/index-e48f6c1b.js","assets/vendor-e9654bfa.js"])),ag=l.lazy(()=>j(()=>import("./index-4f4ddc7b.js"),["assets/index-4f4ddc7b.js","assets/vendor-e9654bfa.js","assets/help-links-5544374e.js"])),rg=l.lazy(()=>j(()=>import("./index-b84596eb.js"),["assets/index-b84596eb.js","assets/vendor-e9654bfa.js","assets/help-links-5544374e.js"])),lg=l.lazy(()=>j(()=>import("./index-74cfa3f4.js"),["assets/index-74cfa3f4.js","assets/vendor-e9654bfa.js"])),cg=l.lazy(()=>j(()=>import("./index-e4b14c36.js"),["assets/index-e4b14c36.js","assets/vendor-e9654bfa.js","assets/help-links-5544374e.js"])),dg=u.div`
    width: 100%;
`,pg=()=>t.jsxs(dg,{children:[t.jsx(U,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(U,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(U,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(U,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(U,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(U,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(U,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(U,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),_e=e=>{const{children:i,skeleton:n=t.jsx(pg,{}),loading:s=!1,...o}=e;return t.jsx(Ve,{...o,className:"block",children:s?n:i})},ug=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},Vi=u.div`
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
`,hg=u.div`
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
`,gg=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r})=>{const d=Object.keys(e??{}),{removeAll:c,removeOne:p,setRemoveAll:h,setRemoveOne:g}=ug(d,r);return d.length?t.jsxs(hg,{removeAll:c||closed,padding:o,height:a,children:[!!i&&t.jsxs(Vi,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(Jt,{}),"Добавить"]}),Object.values(e??{}).map(x=>t.jsxs(Vi,{background:x.background,remove:p===x.id,children:[t.jsx("div",{className:"element-text",children:x.title}),t.jsx("div",{className:"remove",onClick:()=>{d.length===1?(h(!0),n==null||n()):(g(x.id),s(x.id))},children:t.jsx(We,{})})]},x.id)),d.length&&!!n&&t.jsx(Vi,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),h(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},kt=(e,i)=>{switch(i){case"date":return ie(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},xg=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,fg=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[d,c]=l.useState(null),[p,h]=l.useState(e),g=l.useCallback(m=>{var f,b;o(v=>(v&&v[m]&&delete v[m],{...v})),m===((f=i==null?void 0:i.column)==null?void 0:f.field)&&n(null),m===((b=a==null?void 0:a.column)==null?void 0:b.field)&&r(null)},[i,s,a]),x=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!d)c(m=>{const f=Object.values(s)[0].column;return m={[(f==null?void 0:f.field)??""]:{id:(f==null?void 0:f.field)??"",title:"Фильтр: "+(f==null?void 0:f.title)}},{...m}});else{const m=Object.values(s).find(f=>{var b;return!d[((b=f.column)==null?void 0:b.field)??""]});m&&c(f=>{var P,_;const b=((P=m.column)==null?void 0:P.field)??"",v="Фильтр: "+((_=m.column)==null?void 0:_.title);return f&&(f[b]={id:b,title:v}),{...f}})}i&&c(m=>{var v;const f=((v=i.column)==null?void 0:v.field)??"",b="Поиск";return m?m[f]={id:f,title:b}:m={[f]:{id:f,title:b}},{...m}}),a&&c(m=>{var v;const f=((v=a.column)==null?void 0:v.field)??"",b="Сортировка";return m?m[f]={id:f,title:b}:m={[f]:{id:f,title:b}},{...m}})},[i,s,a]),l.useEffect(()=>{var b;const m=i==null?void 0:i.column,f=(b=i==null?void 0:i.column)==null?void 0:b.field;if(i&&f){const v=e==null?void 0:e.filter(P=>me(kt(P[f],m==null?void 0:m.type)).includes(me(kt(i.value,m==null?void 0:m.type))));h(v)}else h(e)},[i]),l.useEffect(()=>{if(s){const m=e==null?void 0:e.filter(f=>!Object.values(s).find(b=>{var v;return f[((v=b.column)==null?void 0:v.field)??""]!==b.value.title}));h(m)}else c(m=>({...m})),h(e)},[s]),l.useEffect(()=>{var f;const m=((f=a==null?void 0:a.column)==null?void 0:f.field)??"";a?h(b=>{const v=[...b??[]];return v==null||v.sort((P,_)=>_[m]<P[m]?a.value==="asc"?1:-1:_[m]>P[m]?a.value==="asc"?-1:1:0),v}):(c(b=>{const v=xg(b,"Сортировка");return b&&v&&delete b[v],{...b}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:p,filter:s,setFilter:o,filterList:d,setFilterList:c,onRemoveOne:g,onRemoveAll:x}},Zi=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),Zi(n.children,i)):n?n.children:e},mg=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[d,c]=l.useState(!1),p=l.useRef(null),h=l.useRef(null),[g,x]=l.useState([]),[m,f]=l.useState(i),[b,v]=l.useState("");l.useEffect(()=>{f(i)});const P=l.useCallback(()=>{c(k=>!k)},[c]),_=l.useCallback(k=>{if(k.children)g.push(k.id.toString()),f(Zi(i,[...g])??[]),x([...g]);else{if(r)if(o)if(o.find(X=>X.id===k.id)){const X=o.filter(O=>O.id!==k.id);X.length?n(X):n(null)}else n([...o,k]);else n([k]);else n(k);!r&&P(),v(g.join("/"))}s==null||s(k)},[n,g]),S=l.useCallback(()=>{g.pop(),x([...g]),g.length===0?f(i):f(Zi(i,g)??[])},[g,f]);return $t(p,()=>{d&&P()}),{handleOpen:P,refElement:p,isOpen:d,multiple:r,handleSelect:_,selectedRoute:b,currentItems:m,route:g,goBack:S,refItems:h,appearance:a}},bg=u.div`
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
`,vg=u.div`
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
`,yg=u.header`
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
`,jg=u.ul`
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
`,Kn=u.li`
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
`,_g=["isOpen"],wg=u(cc).withConfig({shouldForwardProp:e=>!_g.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,kg=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:d,route:c,goBack:p,refItems:h,appearance:g}=mg(e),{isActive:x,width:m,title:f,required:b,selected:v,placeholder:P}=e;return t.jsxs(vg,{onClick:i,appearance:g,ref:n,isOpen:s,isActive:x??!0,width:m,children:[t.jsx(W,{size:4,align:"left",bottomGap:"5px",visible:!!f,required:b,children:f}),t.jsxs(bg,{multiple:o,appearance:g,children:[t.jsx(yg,{appearance:g,children:o?v?v.map(_=>t.jsxs("div",{className:"header-item",children:[!!_.icon&&t.jsx("span",{className:"icon",children:_.icon}),t.jsx("span",{className:"header-title",children:_.title})]},_.id)):t.jsx("span",{className:"not-chosen multi",children:P??"Не выбрано"}):t.jsx("div",{className:"single-header",children:v?t.jsxs(t.Fragment,{children:[!!v.icon&&t.jsx("span",{className:"icon",children:v.icon}),t.jsx("span",{className:"header-title",children:v.title})]}):t.jsx("span",{className:"not-chosen",children:P??"Не выбрано"})})}),t.jsx(wg,{isOpen:s})]}),t.jsxs(jg,{width:m,ref:h,isOpen:s,className:s?"open":"close",itemsAmount:d.length+(c.length?1:0),title:f,children:[!!c.length&&t.jsx(Kn,{isSelected:!1,onClick:_=>{_.stopPropagation(),p()},children:t.jsxs("span",{className:"back-button",children:[t.jsx(ti,{}),"Назад"]})},-1),d.map(({id:_,icon:S,title:k,children:X,data:O})=>t.jsxs(Kn,{onClick:L=>{L.stopPropagation(),a({id:_,icon:S,title:k,children:X,data:O})},isSelected:!o&&!!v&&v.title.includes(k),leadingToSelected:r.includes(_.toString()),children:[!!S&&t.jsx("span",{className:"icon",children:S}),t.jsx("span",{className:"select-item-title",children:k}),!!X&&t.jsx("span",{className:"right-icon",children:t.jsx(Tt,{})}),o&&!!v&&!!v.find(L=>L.title.includes(k))&&t.jsx("span",{className:"right-icon",children:t.jsx(Si,{})})]},k))]})]})},Bo=l.memo(kg),Tg=e=>{switch(e){case"desc":return q.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return q.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return q.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},Sg=u.div`
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
`,Uo=u.div`
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
`,Eg=u.div`
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
`,$g=u.div`
    display: flex;
    align-items: center;
`,Pg=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const d=c=>()=>{c.search&&n({value:"",column:c}),c.sort&&r(p=>{const h=p!=null&&p.value?p.value==="desc"?"asc":null:"desc";return Tg(h),h?{column:c,value:h}:null})};return t.jsx(Eg,{children:e.map(c=>{var p,h,g,x;return t.jsxs(Uo,{overflow:c.catalogs?"visible":"hidden",width:c.width,title:c.title,clickable:c.search,align:c.search?"space-between":c.align,showFull:c.showFull,className:((p=c.priority)==null?void 0:p.toString())??"one",onClick:d(c),children:[!c.catalogs&&c.title,!c.catalogs&&!c.sort&&c.search&&t.jsx(rt,{className:"icon",style:{color:c.field===((h=i==null?void 0:i.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),c.sort&&t.jsx(dc,{className:"icon",style:{color:c.field===((g=a==null?void 0:a.column)==null?void 0:g.field)?"var(--reallyBlue)":"var(--text)"}}),c.catalogs&&t.jsx($g,{children:t.jsx(Bo,{appearance:!1,items:c.catalogs??[],setSelected:m=>o(f=>(m&&(f={...f,[c.field]:{column:c,value:m}}),f)),selected:(x=s==null?void 0:s[c.field])==null?void 0:x.value,placeholder:c.title})})]},c.title)})})},Og=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const d=c=>{c.length?+c>=1&&+c<=e+1&&r((+c-1).toString()):r("")};return t.jsxs(be,{horizontalAlign:o,visible:i,direction:"horizontal",width:"100%",padding:"10px",children:[t.jsx(y,{minWidth:"42px",height:"42px",background:"var(--mild-theme)",icon:t.jsx(ti,{}),onClick:()=>r(Ke(n-1,e).toString())}),t.jsxs("div",{className:"page-indicator",children:[t.jsx(Xe,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:d,inputAppearance:!1}),"/ ",e+1]}),t.jsx(y,{minWidth:"42px",height:"42px",background:"var(--mild-theme)",icon:t.jsx(Tt,{}),onClick:()=>r(Ke(n+1,e).toString())})]})},Ag=u.div`
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
`,st=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(Ag,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{children:i})]}):null,Cg=u.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,Ig=({obj:e,columns:i})=>t.jsx(Cg,{children:i.map(n=>t.jsx(st,{keyStr:n.title,value:n.render?n.render(e[n.field],e):kt(e[n.field],n.type)},n.title))}),Wo=({columns:e,el:i,index:n,onRowClick:s})=>{const{open:o}=K(),a=()=>o(t.jsx(Ig,{obj:i,columns:e}),"Информация");return t.jsx(Sg,{even:n%2===0,onClick:()=>s?s(i):a(),children:e.map(r=>{var d;return t.jsx(t.Fragment,{children:t.jsx(Uo,{showFull:r.showFull,width:r.width,className:((d=r.priority)==null?void 0:d.toString())??"one",align:r.align,children:r.render?r.render(kt(i[r.field],r.type),i):kt(i[r.field],r.type)},r.field)})})})},Rg=u.div`
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
`,Dg=u.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,Ng=({data:e,loading:i,columns:n,maxOnPage:s,onRowClick:o,filter:a})=>{const[r,d]=l.useState(0),c=Math.ceil(((e==null?void 0:e.length)??0)/(s??1))-1,p=s?e==null?void 0:e.slice(r*s,(r+1)*s):e;return l.useEffect(()=>{d(0)},[a]),i?t.jsx(Dg,{children:t.jsx(ut,{})}):t.jsxs(Rg,{children:[p==null?void 0:p.map((h,g)=>t.jsx(Wo,{onRowClick:o,columns:n,el:h,index:g},g)),!(p!=null&&p.length)&&t.jsx(ge,{text:"Нет данных"}),t.jsx(Og,{pages:c,condition:!!s&&!!(p!=null&&p.length),currentPage:r,setCurrentPage:d})]})},Lg=u.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,zg=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},Mg=({search:e,setSearch:i})=>{var n,s;return t.jsx(Lg,{closed:!(e!=null&&e.column),children:t.jsx(Xe,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:zg((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(rt,{}),minWidth:"auto"})})},Fg=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function Hg(e){return Object.keys(e).map(i=>({title:"",field:i}))}const Bg=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(Fg(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(he,{}),t.jsx(Wo,{onRowClick:()=>null,columns:Hg(s),el:s,index:1})]})},Ug=u.div`
    width: 100%;
    box-shadow: var(--schedule-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--form);
    overflow: hidden;
`,Re=({columns:e,data:i,maxOnPage:n,onRowClick:s,footer:o,loading:a=!1})=>{const{sort:r,setSort:d,search:c,setSearch:p,resultData:h,filter:g,setFilter:x,filterList:m,setFilterList:f,onRemoveOne:b,onRemoveAll:v}=fg(i);return t.jsxs(Ug,{children:[t.jsx(gg,{setList:f,padding:"0 10px",list:m,onRemoveOne:b,onRemoveAll:v}),t.jsx(Mg,{search:c,setSearch:p}),t.jsx(Pg,{sort:r,setSort:d,columns:e,search:c,setSearch:p,filter:g,setFilter:x}),t.jsx(Ng,{loading:a,onRowClick:s,filter:g,columns:e,data:h,maxOnPage:n}),t.jsx(Bg,{footer:o,data:i,columns:e})]})},c_={ready:"Готово",pending:"В работе",rejected:"Отклонено"},Ri={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},bn={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},d_=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],p_=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"},{id:3,title:"На почтовый адрес"}],Wg=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Ri).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(bn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(J,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Vg=({historyIsEmpty:e,historyDataWorkerApplication:i})=>{const[n,s]=l.useState(!1);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Gg,{children:["История должностей:",t.jsx(y,{icon:n?t.jsx(ke,{}):t.jsx(ve,{}),onClick:()=>!e&&s(o=>!o),background:"transparent"})]}),n&&i.map((o,a)=>o.dismissalApplications.length?t.jsx(Yg,{columns:Wg(),data:o.dismissalApplications.map(r=>({...r,...o,jobDivision:o.jobTitle+", "+o.subDivision})),maxOnPage:10},a):null),t.jsx(y,{onClick:()=>{!e&&s(o=>!o)},text:e?"История пуста":n?"Скрыть":"Подробнее",background:"transparent"})]})},Gg=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Yg=u(Re)`
    width: 100%;
`,qg=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.DownloadFile?guid=${e}`,n={Authorization:`Bearer ${Ze()}`},s=await ei({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()},Jg=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Ri).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",type:"date",priority:"one",align:"center",render:e=>ie(e.orderDate,"numeric")},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"200px",catalogs:[...Object.values(bn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(J,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{if(e)return t.jsx(y,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:()=>{qg(i.applicationGuid)}})}}],Xg=({jobTitleInfo:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o,canBeRepeated:a,dismissalApplications:r}=e,[d,c]=l.useState(!1);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Qg,{children:[t.jsx("span",{children:n}),t.jsx(y,{icon:d?t.jsx(ke,{}):t.jsx(ve,{}),onClick:()=>{c(p=>!p)},background:"transparent"})]}),t.jsxs(Kg,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),d&&t.jsxs(ex,{children:[a&&t.jsx(Z,{to:`/hr-applications/dismissal/${i}`,children:t.jsx(y,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),!!r.length&&t.jsx(Zg,{columns:Jg(),data:r,maxOnPage:10})]}),t.jsx(y,{onClick:()=>{c(p=>!p)},text:d?"Скрыть":"Подробнее",background:"transparent"})]})},Kg=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Qg=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Zg=u(Re)`
    width: 100%;
`,ex=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,tx=()=>{const{data:{dataWorkerApplication:e}}=je.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(ix,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(Xg,{jobTitleInfo:s,index:o})),t.jsx(Vg,{historyIsEmpty:i,historyDataWorkerApplication:e.filter(({isDismissal:s})=>s)})]}):null},ix=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Vo=()=>{const{data:{listApplication:e},error:i}=je.useApplications();return t.jsx(et,{load:()=>He.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(nx,{children:t.jsxs(Et,{maxWidth:"1500px",children:[t.jsxs(sx,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ie,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(tx,{})]})})})},nx=u.div`
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
`,ox=Object.freeze(Object.defineProperty({__proto__:null,default:Vo},Symbol.toStringTag,{value:"Module"})),vn=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"orderRegistrationStatus",priority:"one",width:"200px",catalogs:[...Object.values(Ri).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"weekends",priority:"one",align:"center",render:e=>e[0].type},{title:"Дата выхода",field:"weekends",priority:"one",align:"center",render:e=>ie(e[0].dates[0].date,"numeric")},{title:"Количество часов",field:"weekends",priority:"one",align:"center",render:e=>e[0].dates[0].hours},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Go=T(),Yo=T(),qo=z(async()=>{const{data:e}=await de.get(`Weekend.GetAllHistory?PersonalGuid=${pt(Ze()??"").IndividualGuid}`);return e.orders});D({clock:Go,target:qo});const ri=z(async e=>(await de.post("Weekend.AddWeekend",e)).data);D({clock:Yo,target:ri});const Jo=ee([]),ax=ri.pending;D({clock:qo.doneData,target:Jo});D({clock:ri.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Te.evokePopUpMessage});D({clock:ri.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Te.evokePopUpMessage});const rx={loadBufferHolidayWork:Go,sendBufferHolidayWork:Yo},u_={sendBufferHolidayWorkFx:ri},lx={useBufferHolidayWork:()=>({data:we(Jo),loading:we(ax)})},cx=()=>{const[e,i]=l.useState(!1);l.useEffect(rx.loadBufferHolidayWork,[]);const{data:n}=lx.useBufferHolidayWork(),s=!!n.every(o=>!o);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(dx,{children:["История заявлений на выход в выходной день:",t.jsx(y,{icon:e?t.jsx(ke,{}):t.jsx(ve,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(px,{columns:vn(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},dx=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,px=u(Re)`
    width: 100%;
`,ux=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(gx,{children:[t.jsx("span",{children:n}),t.jsx(y,{icon:a?t.jsx(ke,{}):t.jsx(ve,{}),onClick:()=>{r(d=>!d)},background:"transparent"})]}),t.jsxs(hx,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsx(xx,{children:t.jsx(Z,{to:`/hr-applications/holiday-work/${i}`,children:t.jsx(y,{text:"Выйти в выходной день",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})}),t.jsx(y,{onClick:()=>{r(d=>!d)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},hx=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,gx=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,xx=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,fx=()=>{const{data:{dataWorkerApplication:e}}=je.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(mx,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(ux,{info:s,index:o})),t.jsx(cx,{})]}):null},mx=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,bx=()=>{const{data:{listApplication:e},error:i}=je.useApplications();return t.jsx(et,{load:()=>He.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(vx,{children:t.jsxs(Et,{maxWidth:"1500px",children:[t.jsxs(yx,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на выход в выходной день"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ie,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(fx,{})]})})})},vx=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,yx=u.div`
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
`,Xo=T(),Ko=T(),yn=z(async()=>{const{data:e}=await de.get(`Vacation.GetAllHistory?personalGuid=${pt(Ze()??"").IndividualGuid}`);return e});D({clock:Xo,target:yn});const Ot=z(async e=>(await de.post("Vacation.AddVacation",e)).data);D({clock:Ko,target:Ot});const yi=ee([]),jx=Ot.pending;D({clock:yn.doneData,fn:({employeeVacations:e})=>e,target:yi});D({clock:Ot.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:Te.evokePopUpMessage});D({clock:Ot.doneData,source:yi,fn:(e,{employeeVacations:i})=>[...e,...i],target:yi});D({clock:yn.failData,fn:e=>{var n;return{message:Pi(e)?(n=e.response)==null?void 0:n.data.error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:q.evokePopUpMessage});D({clock:Ot.failData,fn:e=>{var n;return{message:Pi(e)?(n=e.response)==null?void 0:n.data.error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:Te.evokePopUpMessage});const Qn={loadBufferHolidayPlanning:Xo,sendBufferHolidayPlanning:Ko},h_={sendBufferHolidayPlanningFx:Ot},jn={useBufferHolidayPlanning:()=>({data:we(yi),loading:we(jx)})},_x=()=>{const[e,i]=l.useState(!1),{data:n}=jn.useBufferHolidayPlanning(),s=!!n.every(o=>!o);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(wx,{children:["История заявлений на отпуск:",t.jsx(y,{icon:e?t.jsx(ke,{}):t.jsx(ve,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(kx,{columns:vn(),data:[],maxOnPage:10},a)),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},wx=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,kx=u(Re)`
    width: 100%;
`,Qo=()=>[{title:"Статус заявления",field:"vacation",width:"200px",render:e=>t.jsx(J,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Период",field:"vacation",align:"center",render:e=>{var i,n;return`${ie((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${ie((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}}],Tx=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,d]=l.useState(!1);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Ex,{children:[t.jsx("span",{children:s}),t.jsx(y,{icon:r?t.jsx(ke,{}):t.jsx(ve,{}),onClick:()=>{d(c=>!c)},background:"transparent"})]}),t.jsxs(Sx,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a]}),r&&t.jsxs(Px,{children:[t.jsx(Z,{to:`/hr-applications/holiday-planning/${i}`,children:t.jsx(y,{text:"Отпуск по этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((c,p)=>{if(c.employeeGuid==e.jobGuid){const h=n[p].notTaken.filter(g=>{if(g.vacation.status.orderStatus!="false"&&g.vacation.status.orderStatus!="")return g.vacation.status.orderStatus});return t.jsx($x,{columns:Qo(),data:h,maxOnPage:10},c.jobTitle)}})]}),t.jsx(y,{onClick:()=>{d(c=>!c)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},Sx=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Ex=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,$x=u(Re)`
    width: 100%;
`,Px=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,Ox=()=>{const{data:e}=jn.useBufferHolidayPlanning(),{data:{dataWorkerApplication:i}}=je.useApplications(),[n,s]=l.useState(!0);return i?t.jsxs(Ax,{children:[i.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(Tx,{info:o,index:a,data:e})),t.jsx(_x,{})]}):null},Ax=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Cx=()=>{const{data:e,loading:i}=jn.useBufferHolidayPlanning();return l.useEffect(()=>{Qn.loadBufferHolidayPlanning()},[]),t.jsx(et,{load:Qn.loadBufferHolidayPlanning,loading:i,error:null,data:e,children:t.jsx(Ix,{children:t.jsxs(Et,{maxWidth:"1500px",children:[t.jsxs(Rx,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на отпуск"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ie,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."," "]})]}),t.jsx(Ox,{})]})})})},Ix=u.div`
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
`,Dx=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Ri).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(J,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(bn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(J,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Zo=T(),ea=T(),_n=z(async()=>{const{data:e}=await de.get(`CarryForwardVacation.GetAllHistory?personalGuid=${pt(Ze()??"").IndividualGuid}`);return e});D({clock:Zo,target:_n});const At=z(async e=>(await de.post("CarryForwardVacation.AddCarryForwardVacation",e)).data);D({clock:ea,target:At});const ji=ee([]),Nx=At.pending;D({clock:_n.doneData,fn:({employeeVacations:e})=>e,target:ji});D({clock:At.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:Te.evokePopUpMessage});D({clock:At.doneData,source:ji,fn:(e,{employeeVacations:i})=>[...e,...i],target:ji});D({clock:_n.failData,fn:e=>{var n;return{message:Pi(e)?(n=e.response)==null?void 0:n.data.error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:q.evokePopUpMessage});D({clock:At.failData,fn:e=>{var n;return{message:Pi(e)?(n=e.response)==null?void 0:n.data.error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:Te.evokePopUpMessage});const Zn={loadBufferHolidayTransfer:Zo,sendBufferHolidayTransfer:ea},g_={sendBufferHolidayTransferFx:At},wn={useBufferHolidayTransfer:()=>({data:we(ji),loading:we(Nx)})},Lx=()=>{const[e,i]=l.useState(!1),{data:n}=wn.useBufferHolidayTransfer(),s=!!n.every(o=>!o);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(zx,{children:["История заявлений отпуск:",t.jsx(y,{icon:e?t.jsx(ke,{}):t.jsx(ve,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(Mx,{columns:Dx(),data:[],maxOnPage:10},a)),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},zx=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Mx=u(Re)`
    width: 100%;
`,Fx=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,d]=l.useState(!1);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Bx,{children:[t.jsx("span",{children:s}),t.jsx(y,{icon:r?t.jsx(ke,{}):t.jsx(ve,{}),onClick:()=>{d(c=>!c)},background:"transparent"})]}),t.jsxs(Hx,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a,t.jsx("br",{})]}),r&&t.jsxs(Wx,{children:[t.jsx(Z,{to:`/hr-applications/holiday-transfer/${i}`,children:t.jsx(y,{text:"Перенос отпуска",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((c,p)=>{if(c.employeeGuid==e.jobGuid){const h=n[p].notTaken.filter(g=>{if(g.vacation.status.orderStatus!="false"&&g.vacation.status.orderStatus!="")return g.vacation.status.orderStatus});return t.jsx(Ux,{columns:Qo(),data:h,maxOnPage:10},c.jobTitle)}})]}),t.jsx(y,{onClick:()=>{d(c=>!c)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},Hx=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Bx=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Ux=u(Re)`
    width: 100%;
`,Wx=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,Vx=()=>{const{data:{dataWorkerApplication:e}}=je.useApplications(),{data:i}=wn.useBufferHolidayTransfer(),[n,s]=l.useState(!0);return!i||!e?null:t.jsxs(Gx,{children:[e.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(Fx,{info:o,index:a,data:i})),t.jsx(Lx,{})]})},Gx=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Yx=()=>{const{data:e,loading:i}=wn.useBufferHolidayTransfer();return l.useEffect(()=>{Zn.loadBufferHolidayTransfer()},[]),t.jsx(et,{load:Zn.loadBufferHolidayTransfer,loading:i,error:null,data:e,children:t.jsx(qx,{children:t.jsxs(Et,{maxWidth:"1500px",children:[t.jsxs(Jx,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на перенос отпуска"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ie,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."," "]})]}),t.jsx(Vx,{})]})})})},qx=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Jx=u.div`
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
`,ta=()=>[{title:"Статус заявления",field:"medicalExamination",width:"200px",render:e=>t.jsx(J,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Период",field:"medicalExamination",align:"center",render:e=>{var i,n;return`${ie((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${ie((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}}],Xx=e=>localStorage.setItem("age",e.toString()),x_=e=>localStorage.getItem(e),Kx=e=>e.map(i=>{localStorage.setItem(i.employeeGuid,i.tutor.toString())}),ia=T(),na=T(),sa=z(async()=>{const{data:e}=await de.get(`MedicalExamination.GetAllHistory?PersonalGuid=${pt(Ze()??"").IndividualGuid}`);return Xx(e.age),Kx(e.employeeMedicalExaminations.map(({employeeGuid:i,tutor:n})=>({employeeGuid:i,tutor:n}))),e.employeeMedicalExaminations});D({clock:ia,target:sa});const li=z(async e=>(await de.post("MedicalExamination.AddMedicalExamination",e)).data);D({clock:na,target:li});const oa=ee([]),Qx=li.pending;D({clock:sa.doneData,target:oa});D({clock:li.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Te.evokePopUpMessage});D({clock:li.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Te.evokePopUpMessage});const Zx={loadBufferMedicalExamination:ia,sendBufferMedicalExamination:na},f_={sendBufferMedicalExaminationFx:li},kn={useBufferMedicalExamination:()=>({data:we(oa),loading:we(Qx)})},ef=()=>{const[e,i]=l.useState(!1);l.useEffect(Zx.loadBufferMedicalExamination,[]);const{data:n}=kn.useBufferMedicalExamination(),s=!!n.every(o=>!o);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(tf,{children:["История заявлений на диспансеризацию:",t.jsx(y,{icon:e?t.jsx(ke,{}):t.jsx(ve,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(nf,{columns:ta(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},tf=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,nf=u(Re)`
    width: 100%;
`,sf=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,{data:a}=kn.useBufferMedicalExamination(),[r,d]=l.useState(!1);return a.length==0?null:t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(af,{children:[t.jsx("span",{children:n}),t.jsx(y,{icon:r?t.jsx(ke,{}):t.jsx(ve,{}),onClick:()=>{d(c=>!c)},background:"transparent"})]}),t.jsxs(of,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),r&&t.jsxs(lf,{children:[t.jsx(Z,{to:`/hr-applications/medical-examination/${i}`,children:t.jsx(y,{text:"Оформить заявление",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),a.map((c,p)=>{if(c.employeeGuid==e.jobGuid){const h=a[p].notTaken.filter(g=>{if(g.medicalExamination.status.orderStatus!="false"&&g.medicalExamination.status.orderStatus!="")return g.medicalExamination.status.orderStatus});return t.jsx(rf,{columns:ta(),data:h,maxOnPage:10},c.orderNumber)}})]}),t.jsx(y,{onClick:()=>{d(c=>!c)},text:r?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},of=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,af=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,rf=u(Re)`
    width: 100%;
`,lf=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,cf=()=>{const{data:{dataWorkerApplication:e}}=je.useApplications(),[i,n]=l.useState(!0),{data:s}=kn.useBufferMedicalExamination();return e?t.jsxs(df,{children:[e.map((o,a)=>o.isDismissal?(i&&n(!1),null):t.jsx(sf,{info:o,index:a,data:s})),t.jsx(ef,{})]}):null},df=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,pf=()=>{const{data:{listApplication:e},error:i}=je.useApplications();return t.jsx(et,{load:()=>He.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(uf,{children:t.jsxs(Et,{maxWidth:"1500px",children:[t.jsxs(hf,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на диспансеризацию"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ie,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(cf,{})]})})})},uf=u.div`
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
`,aa=T(),ra=T(),la=z(async()=>{const{data:e}=await de.get(`AnotherPlaceWork.GetAllHistory?PersonalGuid=${pt(Ze()??"").IndividualGuid}`);return e.employeeHistories});D({clock:aa,target:la});const ci=z(async e=>(await de.post("AnotherPlaceWork.AddAnotherPlaceOfWork",e)).data);D({clock:ra,target:ci});const ca=ee([]),gf=ci.pending;D({clock:la.doneData,target:ca});D({clock:ci.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Te.evokePopUpMessage});D({clock:ci.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Te.evokePopUpMessage});const xf={loadBufferWorkTransfer:aa,sendBufferWorkTransfer:ra},m_={sendBufferWorkTransferFx:ci},ff={useBufferWorkTransfer:()=>({data:we(ca),loading:we(gf)})},mf=()=>{const[e,i]=l.useState(!1);l.useEffect(xf.loadBufferWorkTransfer,[]);const{data:n}=ff.useBufferWorkTransfer(),s=!!n.every(o=>!o);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(bf,{children:["История заявлений на перевод:",t.jsx(y,{icon:e?t.jsx(ke,{}):t.jsx(ve,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(vf,{columns:vn(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},bf=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,vf=u(Re)`
    width: 100%;
`,yf=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(_e,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(_f,{children:[t.jsx("span",{children:n}),t.jsx(y,{icon:a?t.jsx(ke,{}):t.jsx(ve,{}),onClick:()=>{r(d=>!d)},background:"transparent"})]}),t.jsxs(jf,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsxs(wf,{children:[t.jsx(Z,{to:`/hr-applications/work-transfer/${i}`,children:t.jsx(y,{text:"Перевестись с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),t.jsx(Z,{to:`/hr-applications/work-transfer-change-rate/${i}`,children:t.jsx(y,{text:"Изменить ставку",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})]}),t.jsx(y,{onClick:()=>{r(d=>!d)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},jf=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,_f=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,wf=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`,kf=()=>{const{data:{dataWorkerApplication:e}}=je.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(Tf,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(yf,{info:s,index:o})),t.jsx(mf,{})]}):null},Tf=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Sf=()=>{const{data:{listApplication:e},error:i}=je.useApplications();return t.jsx(et,{load:()=>He.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(Ef,{children:t.jsxs(Et,{maxWidth:"1500px",children:[t.jsxs($f,{children:[t.jsx(W,{size:2,align:"left",children:"Заявление на перевод"}),t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ie,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),t.jsx(kf,{})]})})})},Ef=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,$f=u.div`
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
`,Pf=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${ie(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${ie(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${ie(e[0])} по ${ie(e[1])}`},Of=u.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,Tn=({title:e,links:i})=>{const[n,s]=l.useState(["",""]),[o,a]=l.useState(!0),{data:r}=Je.selectors.useData();return r?t.jsxs(Of,{children:[t.jsx(W,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(zo,{dates:n,setDates:s,valid:o,setValid:a}),t.jsx(J,{type:"info",title:Pf(n)??"",icon:t.jsx(Ie,{})}),i==null?void 0:i.map((d,c)=>{const p=d.url+"&date_from="+n[0]+"&date_to="+n[1];return t.jsxs(le.Fragment,{children:[t.jsxs("section",{children:[t.jsx(W,{size:4,align:"left",children:d.title}),t.jsx(tt,{onClick:()=>null,href:p,text:"Загрузить",icon:t.jsx(Ei,{}),width:"170px",background:w.blue.main,textColor:"#fff",isActive:o})]}),c!==(i==null?void 0:i.length)-1&&t.jsx(he,{})]},d.title)})]})]}):null},Af=()=>{const{data:e}=Je.selectors.useData();return t.jsx(Tn,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},Cf=()=>{const{data:e}=Je.selectors.useData();return t.jsx(Tn,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},If=()=>{const{data:e}=Je.selectors.useData();return t.jsx(Tn,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},da=()=>{var i;const{data:e}=Je.selectors.useData();return t.jsx(zi,{padding:"10px",children:t.jsx(Ni,{children:t.jsx(In,{appearance:!1,pages:[{title:"Анкета",content:t.jsx(If,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx(Af,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(Cf,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Логины студентов",content:t.jsx(fe,{oldVersionUrl:jm}),condition:!!((i=e==null?void 0:e.studLogins)!=null&&i.length)}]})})})},Rf=Object.freeze(Object.defineProperty({__proto__:null,default:da},Symbol.toStringTag,{value:"Module"})),Df=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},es={payments:null,error:null},Nf=()=>({data:M(ts).payments,loading:M(Bt.pending),error:M(ts).error}),Bt=z(async()=>{const e=await bd();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),en=z(async e=>{try{return await yd(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}}),pa=T(),ts=ee(es).on(Bt,e=>({...e,error:null})).on(Bt.doneData,(e,i)=>({...e,payments:i})).on(Bt.failData,(e,i)=>({...e,error:i.message})).on(en.doneData,(e,i)=>({...e,payments:Df(e.payments,i,!1)})).on(en.failData,(e,i)=>({...e,error:i.message})).on(pa,()=>({...es})),Sn={usePayments:Nf},En={getPaymentsFx:Bt,signContractFx:en},Lf={clearStore:pa},zf=Object.freeze(Object.defineProperty({__proto__:null,effects:En,events:Lf,selectors:Sn},Symbol.toStringTag,{value:"Module"})),Mf=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,Ff=u.div`
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
`,Hf=({date:e,value:i})=>t.jsxs(Ff,{children:[t.jsxs($,{gap:"16px",children:[t.jsx(Ce,{color:"grey",size:33,children:t.jsx(lt,{})}),t.jsxs($,{d:"column",ai:"flex-start",children:[t.jsx("span",{className:"payment-item-date",children:"Платеж"}),t.jsx(te,{children:ie(e)})]})]}),t.jsxs("span",{className:"payment-item-money",children:["+",i," ",t.jsx(lt,{})," "]})]}),Bf=u.div`
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
`,ua=({children:e,size:i,color:n,fontWeight:s})=>{const o=i==="small"?"1rem":i==="big"?"1.5rem":"1.2rem",a=i==="small"?"17px":i==="big"?"22px":"18px";return t.jsxs(Bf,{color:n,fontSize:o,iconSize:a,fontWeight:s,children:[e,t.jsx(lt,{})]})},Uf=e=>Number(e.replace(/,/g,".").replace(/\s/g,"")),Wf=u.div`
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
`,Vf=({payments:e})=>{const i=e==null?void 0:e.reduce((n,s)=>n+Uf(s.value),0).toFixed(1);return t.jsxs(Wf,{children:[t.jsxs($,{jc:"space-between",children:[t.jsx(W,{icon:t.jsx(Hs,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),t.jsx(te,{fontSize:"1rem",width:"fit-content",children:t.jsx(ua,{size:"small",children:i})})]}),t.jsxs("div",{className:"payment-list",children:[!e.length&&t.jsx(ge,{size:"50px",text:"Нет платежей",image:t.jsx(pc,{})}),e.map((n,s)=>l.createElement(Hf,{...n,key:s}))]})]})},ha=()=>t.jsx(J,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:t.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",t.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),Gf=u.div`
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
`,Yf=({contract:e})=>{if(!e)return null;const{number:i,startDate:n,endDatePlan:s,contragent:o,sum:a,can_sign:r,file:d,student:c}=e,{open:p}=K(),[h,g]=l.useState(!1),[x,m]=l.useState(!1),[f,b]=l.useState(!1),{error:v}=Sn.usePayments(),P=[{text:"Номер договора",info:i??""},{text:"Начало действия",info:ie(n)},{text:"Действует до",info:ie(s)},{text:"Заказчик",info:o||"Московский политех"},{text:"Обучающийся",info:c??""},{text:"Сумма к оплате",info:a??""}],_=()=>{navigator.clipboard.writeText((e==null?void 0:e.number)??""),g(!0)},S=()=>{e&&(m(!0),En.signContractFx(e.id),m(!1),b(!0))},k=()=>{p(t.jsx(ha,{}),"Не получается подписать")};return t.jsxs(Gf,{children:[t.jsx("div",{className:"contract-info",children:P.map(({info:X,text:O})=>t.jsx(st,{keyStr:O,value:X},X))}),r&&t.jsxs($,{d:"column",gap:"8px",children:[t.jsx(wt,{text:"Подписать договор",buttonSuccessText:"Подписан",action:S,isLoading:x,completed:f,repeatable:!1,popUpFailureMessage:v??"Не удалось подписать договор",setCompleted:b,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),t.jsx(y,{onClick:k,text:"Не получается подписать?",background:"transparent",textColor:w.grey.main})]}),!r&&t.jsxs($,{gap:"8px",children:[t.jsx(wt,{text:"Скопировать номер договора",action:_,isLoading:!1,completed:h,setCompleted:g,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),t.jsx(tt,{onClick:()=>null,href:d??"",icon:t.jsx(Ei,{}),width:"45px"})]})]})},qf=u.div`
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
`,Jf=({title:e,confirmed:i,setOpenArea:n})=>t.jsxs(qf,{onClick:()=>n(s=>!s),children:[t.jsxs("div",{className:"title-and-icon",children:[i?t.jsx(Bs,{style:{color:"var(--green)"}}):t.jsx(Us,{style:{color:"var(--red)"}}),t.jsx("b",{children:e})]}),t.jsx(y,{icon:t.jsx(ve,{}),onClick:()=>null,background:"transparent"})]}),Xf=u.div`
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
`,Kf=e=>{const{children:i,title:n,height:s,confirmed:o=!1,show:a=!1}=e,[r,d]=l.useState(a);return t.jsxs(Xf,{height:s,open:r,children:[t.jsx(Jf,{title:n,confirmed:o,setOpenArea:d}),t.jsx("div",{className:"inputs",children:i})]})};function ga({isDone:e,submit:i,setData:n}){const[s,o]=l.useState(!1),[a,r]=l.useState(!1),[d,c]=l.useState(e??!1),p=async()=>{try{o(!0),await i(),o(!1),r(!0),c(!0)}catch{o(!1),q.evokePopUpMessage({message:"Не удалось подписать",type:"failure"})}};return l.useEffect(()=>{n&&io().then(h=>n(h[0]))},[]),{done:d,open,loading:s,completed:a,setCompleted:r,handleSubmit:p}}const Qf=u.div`
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
`,Zf=()=>{const{data:{user:e}}=ce.useUser();return t.jsx(Qf,{children:(e==null?void 0:e.user_status)==="stud"?t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"Для изменения данных Вам необходимо обратиться в отделение центра по работе со студентами (многофункциональный центр)"}),t.jsx(tt,{onClick:()=>null,href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/",text:"Контакты центра по работе со студентами",width:"100%",align:"center"})]}):t.jsxs(t.Fragment,{children:["Для изменения данных Вам необходимо обратиться в отдел кадров по телефону",t.jsx("br",{}),t.jsx("b",{children:"+7 (495) 223-05-23 доб.1130"}),"или написать письмо на",t.jsx("br",{}),t.jsx("b",{children:"ok@mospolytech.ru"})]})})},em=u.div`
    .info-text {
        margin: 16px 0;
        line-height: 1.7rem;
    }

    b {
        font-weight: 600;
    }
`,b_=({children:e,data:i,setData:n,submit:s,isDone:o=!1})=>{const{open:a}=K(),{handleSubmit:r,loading:d,done:c,completed:p,setCompleted:h}=ga({isDone:o,submit:s,setData:n});return i?t.jsxs(em,{children:[t.jsxs($,{gap:"8px",children:[t.jsx(tt,{href:i.file,onClick:()=>null,text:"Скачать согласие",width:"100%",minHeight:"38px",height:"38px",icon:t.jsx(Ei,{})}),t.jsx(J,{type:"success",icon:t.jsx(Si,{}),title:"Успешно подписано",visible:i.status||c,align:"center"})]}),t.jsx("div",{className:"info-text",children:e}),!i.status&&!c&&t.jsx(wt,{text:!i.status&&!c?"Подписать":"Подписано",action:r,isLoading:d,completed:p,isDone:c||i.status,setCompleted:h,isActive:!i.status&&!c,popUpFailureMessage:"Согласие уже подписано",popUpSuccessMessage:"Согласие успешно подписано"}),(i.status||c)&&t.jsxs(t.Fragment,{children:[t.jsx(he,{margin:"16px 0",width:"100%"}),t.jsxs(te,{fontSize:"0.9rem",lineHeight:"1.4rem",children:["Дата подписания: ",ie(i.date||new Date),","," ",i.time||`${new Date().getHours()}:${new Date().getMinutes()}`,t.jsx("br",{}),i.fio]})]}),!i.status&&!c&&t.jsx($,{jc:"center",children:t.jsx(y,{onClick:()=>a(t.jsx(Zf,{}),"Ошибка в данных"),text:"Заметили ошибку в личных данных?",background:"transparent",textColor:w.grey.main})})]}):null},tm=u.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,im=({data:e})=>{const{id:i,signed_user:n,name:s,can_sign:o,date:a}=e,{handleSubmit:r,loading:d,done:c,completed:p,setCompleted:h}=ga({isDone:n,submit:()=>vd(i)}),g=n||c?140:100;return t.jsxs(Kf,{height:g,title:s,confirmed:n||c,children:[t.jsxs(tm,{children:[t.jsxs($,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(W,{size:5,align:"left",children:s}),t.jsx(te,{children:ie(a)})]}),t.jsxs($,{gap:"8px",w:"100%",jc:"flex-end",children:[t.jsx(tt,{href:e.file,onClick:()=>null,width:"40px",icon:t.jsx(Ei,{})}),!c&&t.jsx(wt,{text:c?"Подписано":"Подписать",action:r,isLoading:d,completed:p,isDone:c,width:"160px",setCompleted:h,isActive:!c&&o,popUpFailureMessage:o?"Согласие уже подписано":"Необходимо сначала подписать соглашение об электронном взаимодейтсвии",popUpSuccessMessage:"Согласие успешно подписано"}),t.jsx(J,{type:"success",title:"Подписано",icon:t.jsx(Si,{}),align:"center",width:"130px",visible:c})]})]}),(c||n)&&t.jsx(he,{width:"100%"}),(c||n)&&t.jsxs(te,{children:["Дата подписания: ",ie(e.signed_user_date||new Date),","," ",e.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},nm=({isDormitory:e,electronicAgreements:i=[]})=>t.jsxs(be,{width:"100%",children:[t.jsx(W,{size:4,align:"left",icon:t.jsx(uc,{}),bottomGap:!0,children:"Доп. соглашения"}),t.jsx(ha,{}),t.jsx(J,{type:"info",title:"Информация",visible:!e,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),i.map((n,s)=>t.jsx(im,{data:n},s))]}),sm=u.div`
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
`,hi=({qrCode:e})=>{const[i,n]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>{n(!1)},500)},[]),t.jsx(sm,{children:t.jsx(xn,{loading:i,width:"300px",height:"300px",src:e??""})})},om=u.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,am=({qr_current:e,qr_total:i,currentPage:n})=>n===0?t.jsx(hi,{qrCode:e}):n===1?t.jsx(hi,{qrCode:i}):t.jsx(om,{children:t.jsx(In,{pages:[{title:"Текущая залолженность",content:t.jsx(hi,{qrCode:e})},{title:"Общая залолженность",content:t.jsx(hi,{qrCode:i})}],appearance:!1,currentPage:n})}),rm=({type:e="horizontal",...i})=>{const{open:n}=K(),s="Оплатить через QR-code",o=`linear-gradient(45deg, ${w.green.main}, ${w.green.dark1})`,a=()=>{n(t.jsx(am,{...i}),s)};return e==="vertical"?t.jsx(y,{onClick:a,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:t.jsx(hc,{}),textColor:"#fff",background:o}):t.jsx(y,{text:s,onClick:a,width:"100%",textColor:"#fff",background:o})},lm=({debt:e,size:i="big"})=>{const n=e>0?w.red.main:w.green.main;return t.jsx(ua,{size:i,color:n,fontWeight:"600",children:e>=0?e:`+${-e}`})},cm=[{query:"(max-width: 766px)",title:"isMobile"},{query:"(min-width: 767px) and (max-width: 1199px)",title:"isTablet"},{query:"(min-width: 1200px)",title:"isDesktop"}],Gi=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),Di=()=>{const e=cm.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(Gi(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(Gi(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(Gi(e))}))),[]),i},dm=u.div`
    width: 100%;
`,pm=u.div`
    width: 100%;
    padding: 16px;
    background: var(--form);
    border-radius: 6px;
    box-shadow: var(--schedule-shadow);
`,um=u.div`
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
`,hm=u.div`
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
`,gm=u.div`
    position: relative;
`,xm=e=>{const{data:i,isDormitory:n}=e,{balance_currdate:s,balance:o,endDatePlan:a,can_sign:r,bill:d,qr_current:c,qr_total:p}=i,{isMobile:h}=Di(),{open:g}=K(),[x,m]=l.useState(0),f=x===0?+s:+o,b=f>0,v=n?"общежитию":"обучению",P=b?`Долг по ${v}`:f<0?`Переплата по ${v}`:"У вас нет долга",_=x===0?`На ${ie(new Date)}`:`До ${ie(a)}`,S=()=>{g(t.jsx(Yf,{contract:i}),"Реквизиты договора")};return t.jsxs(dm,{children:[t.jsx(W,{icon:t.jsx(gc,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),t.jsxs(pm,{children:[t.jsx(fn,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:x,setCurrentPage:m,appearance:!1}),t.jsxs(um,{children:[t.jsxs($,{d:"column",gap:"12px",ai:"flex-start",children:[t.jsx(lm,{debt:f}),t.jsxs($,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(W,{size:3,align:"left",children:P}),t.jsx(te,{children:_})]})]}),b?t.jsx(rm,{currentPage:x,type:h?"horizontal":"vertical",qr_current:c,qr_total:p}):t.jsx(qp,{color:"green",size:"40px"})]}),t.jsxs(hm,{children:[d&&t.jsx(tt,{text:"Квитанция на оплату",background:"transparent",textColor:w.grey.main,align:"left",width:"fit-content",href:d,padding:"0"}),t.jsxs(gm,{children:[t.jsx(y,{onClick:S,text:"Реквизиты договора",background:"transparent",textColor:w.grey.main,width:"fit-content",padding:"0",align:"left"}),t.jsx(dt,{right:"-25px",top:"10px",visible:r,pulsing:!0,children:"1"})]})]})]})]})},fm=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,mm=(e,i)=>{const n=Number(i==null?void 0:i.sum)||Number(i==null?void 0:i.sum_price),s=Number(i==null?void 0:i.sum_pay);if(!n&&n!==0||!s&&s!==0)return"-";const o=n-s;return o<=0?"Оплачено":`Ожидает оплаты (${kt(String(o),"rub")})`},bm=()=>[{title:"Год",field:"year",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;return n?new Date(n).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;if(!n)return"-";const s=new Date(n).toLocaleDateString("ru",{month:"long"});return fm(s)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:mm}],vm=({paygraph:e})=>t.jsxs($,{d:"column",children:[t.jsx(W,{icon:t.jsx(xc,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),t.jsx(Re,{columns:bm(),data:e??[],maxOnPage:3})]}),gi=({contracts:e})=>e?t.jsx(Mf,{children:e.map((i,n)=>{const{agreements:s,number:o,type:a,paygraph:r,payments:d}=i,c=a==="Общежитие",p=s.filter(h=>new Date(h==null?void 0:h.date)>new Date("2022-02-1"));return t.jsxs(le.Fragment,{children:[e.length!==1&&t.jsxs($,{gap:"8px",children:[t.jsx($,{w:"fit-content",children:t.jsxs(W,{size:3,align:"left",children:["Договор:"," "]})}),t.jsxs(te,{fontSize:"1rem",children:[a,", ",o]})]}),t.jsx(xm,{data:i,isDormitory:c}),t.jsx(Vf,{payments:d??[]}),t.jsx(vm,{paygraph:r}),t.jsx(nm,{isDormitory:c,electronicAgreements:p}),n!==e.length-1&&t.jsx(he,{margin:"0",width:"100%"})]},o)})}):null,$n=()=>{const{data:e,loading:i,error:n}=Sn.usePayments(),s=e!=null&&e.dormitory.length&&(e!=null&&e.education.length)?"both":e!=null&&e.dormitory.length?"dormitory":e!=null&&e.education.length?"education":"none";return l.useEffect(()=>{q.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),t.jsx(et,{loading:i,load:En.getPaymentsFx,error:n,data:e,noDataCheck:!(e!=null&&e.dormitory.length),children:t.jsxs(Ni,{children:[s==="none"&&t.jsx(ge,{text:"Нет данных"}),s==="both"&&t.jsx(In,{pages:[{title:"Общежитие",content:t.jsx(gi,{contracts:e==null?void 0:e.dormitory})},{title:"Обучение",content:t.jsx(gi,{contracts:e==null?void 0:e.education})}],appearance:!1}),s==="dormitory"&&t.jsx(gi,{contracts:e==null?void 0:e.dormitory}),s==="education"&&t.jsx(gi,{contracts:e==null?void 0:e.education})]})})},ym=Object.freeze(Object.defineProperty({__proto__:null,default:$n},Symbol.toStringTag,{value:"Module"})),N="/applications",oe="/hr-applications",is="/staff_orders",ns="/staff_blanks",jm="/ad_logins",Pn="/doclist",ss="/pps_vote2020",xa="/pps_contest",_m="/electronic-statements",pe="/onboarding",wm="/structure-of-the-university",km="/addresses-and-contacts",Tm="/brandbook",Sm="/wifi-at-the-university",Em="/health-care",$m="/psychological-help",Pm="/social-environment",Om="/vacation",Dt="/kpi_pps",Nt="/kpi_admin",os="/sc_news",as="/oop",rs="/centers",Am="/helpful-information",Cm="/download-agreements",Im="/physical-education",Rm="/physical-education/student/:studentId",fa=N+"/contact-info-actualization",ma=N+"/data-verification",ba=N+"/issuance-of-licenses",va=N+"/getting-computer-equipment",ya=N+"/connecting-computer",ja=N+"/printer-maintenance",_a=N+"/question-sed",wa=N+"/question-personal-account",ka=N+"/other-it-services",Ta=N+"/certificate-from-the-place-of-work",Sa=N+"/visa-certificate",Ea=N+"/certificate-of-work-experience",$a=N+"/number-of-unused-vacation-days",Pa=N+"/copy-of-the-employment-record",Oa=N+"/copies-of-documents-from-the-personal-file",Aa=N+"/work-on-the-terms-of-external-concurrency",Ca=N+"/certificate-time-parental-leave",Ia=N+"/arbitrary-request",Ra=N+"/courier",Da=N+"/persona-income-tax-reference",Na=N+"/payment-of-child-birth-allowance",La=N+"/payment-for-child-care",za=oe+"/part-time-employment/",Dm=oe+"/dismissal/:id",Nm=oe+"/work-transfer/:id",Lm=oe+"/extra-holiday-coll",zm=oe+"/holiday-planning/:id",Mm=oe+"/holiday-transfer/:id",Fm=oe+"/holiday-work/:id",Hm=oe+"/work-transfer-change-rate/:id",Bm=oe+"/medical-examination/:id",Ma=oe+"/buffer-dismissal",Fa=oe+"/buffer-holiday-planning",Ha=oe+"/buffer-holiday-transfer",Ba=oe+"/buffer-holiday-work",Ua=oe+"/buffer-medical-examination",Wa=oe+"/buffer-work-transfer",V=()=>fe({oldVersionUrl:"/sprav"}),tn=()=>({onboarding:{id:"onboarding",title:"Новому работнику",icon:t.jsx(Y,{}),path:pe,Component:cg,color:"orange",isTemplate:!1,group:"FINANCES_DOCS"},...hr,"download-agreements":{id:"download-agreements",title:"Административная панель",icon:t.jsx(Hs,{}),path:Cm,Component:da,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(Y,{}),path:_m,Component:()=>(le.useEffect(()=>{window.location.replace(" https://e.mospolytech.ru/old/stats.php?m=items&act=st_list")},[]),null),color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Ws,{}),path:cr,Component:()=>(le.useEffect(()=>{window.location.replace(`${A}/?p=proj_main`)},[]),null),color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},payments:{id:"payments",title:"Оплата общежития",icon:t.jsx(lt,{}),path:wi,Component:$n,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(Y,{}),path:xa,Component:()=>(le.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(Vs,{}),path:Dt,Component:()=>(le.useEffect(()=>{window.location.replace(`${A}/?p=${Dt==null?void 0:Dt.slice(1,Dt.length)}`)},[]),null),color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинго...",icon:t.jsx(_c,{}),path:Nt,Component:()=>(le.useEffect(()=>{window.location.replace(`${A}/?p=${Nt==null?void 0:Nt.slice(1,Nt.length)}`)},[]),null),color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx(wc,{}),path:os,Component:()=>fe({oldVersionUrl:os}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(C,{}),path:is,Component:()=>fe({oldVersionUrl:is}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(Kt,{}),path:ns,Component:()=>fe({oldVersionUrl:ns}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:t.jsx(C,{}),path:Pn,Component:dh,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(kc,{}),path:Om,Component:Ch,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(C,{}),color:"lightGreen",path:Im,show:!I,Component:bh,isTemplate:!1,group:"OTHER"},"physical-education-student":{id:"physical-education-student",title:"Физическая культура",icon:t.jsx(C,{}),color:"pink",path:Rm,Component:vh,isTemplate:!1,group:"OTHER",show:!1},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(Xt,{}),path:as,Component:()=>fe({oldVersionUrl:as}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(Xt,{}),path:rs,Component:()=>fe({oldVersionUrl:rs}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(C,{}),path:Am,Component:mn,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx(Gs,{}),path:ss,Component:()=>fe({oldVersionUrl:ss}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(C,{}),path:N,Component:I?V:ph,color:"red",isTemplate:!1,group:"FINANCES_DOCS",keywords:["заявления","справки","заявление","справка"]},"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(C,{}),path:oe,Component:I?()=>fe({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Ih,color:"green",isTemplate:!1,group:"FINANCES_DOCS"}}),nn=()=>({...gr,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:ba,icon:t.jsx(C,{}),color:"blue",Component:I?V:jh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},dismissal:{id:"dismissal2",title:"Заявление на увольнение",path:Ma,icon:t.jsx(C,{}),color:"blue",Component:I?V:Vo,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:oe},"holiday-work":{id:"part-time-employment",title:"Заявление о привлечении к работе в выходной день",path:Ba,icon:t.jsx(C,{}),color:"blue",Component:I?V:bx,isTemplate:!1,group:"OTHER"},"medical-examination":{id:"part-time-employment",title:"Заявление о диспансеризации",path:Ua,icon:t.jsx(C,{}),color:"blue",Component:I?V:pf,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:oe},"holiday-planning":{id:"holiday-postponed",title:"Заявление о предоставлении отпуска",path:Fa,icon:t.jsx(C,{}),color:"blue",Component:I?V:Cx,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:oe},"holiday-transfer":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:Ha,icon:t.jsx(C,{}),color:"blue",Component:I?V:Yx,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:oe},"work-transfer":{id:"dismissal",title:"Заявление на перевод",path:Wa,icon:t.jsx(C,{}),color:"blue",Component:I?V:Sf,isTemplate:!1,group:"OTHER"},"part-time-employment":{id:"part-time-employment",title:"Заявление на трудоустройство по совместительству",path:za,icon:t.jsx(C,{}),color:"blue",Component:I?V:Rh,isTemplate:!1,group:"OTHER"},"holiday-work-form":{id:"part-time-employment",title:"Заявление о привлечении к работе в выходной день",path:Fm,icon:t.jsx(C,{}),color:"blue",Component:I?V:Lh,isTemplate:!1,group:"OTHER"},"medical-examination-form":{id:"part-time-employment",title:"Заявление о диспансеризации",path:Bm,icon:t.jsx(C,{}),color:"blue",Component:I?V:zh,isTemplate:!1,group:"OTHER"},"holiday-planning-form":{id:"holiday-postponed",title:"Заявление о предоставлении отпуска",path:zm,icon:t.jsx(C,{}),color:"blue",Component:I?V:Mh,isTemplate:!1,group:"OTHER"},"holiday-transfer-form":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:Mm,icon:t.jsx(C,{}),color:"blue",Component:I?V:Fh,isTemplate:!1,group:"OTHER"},"work-transfer-form":{id:"work-transfer-form",title:"Заявление на перевод",path:Nm,icon:t.jsx(C,{}),color:"blue",Component:I?V:Hh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:oe},"work-transfer-change-rate-form":{id:"work-transfer-form",title:"Заявление на перевод",path:Hm,icon:t.jsx(C,{}),color:"blue",Component:I?V:Bh,isTemplate:!1,group:"OTHER"},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:Lm,icon:t.jsx(C,{}),color:"blue",Component:I?V:Nh,isTemplate:!1,group:"OTHER"},dismissal_form:{id:"dismissal",title:"Заявление на увольнение",path:Dm,icon:t.jsx(C,{}),color:"blue",Component:I?V:Dh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:oe},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(C,{}),color:"blue",path:va,Component:I?V:yh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(C,{}),color:"blue",path:ya,Component:I?V:xh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(C,{}),color:"blue",path:ja,Component:I?V:Eh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(C,{}),color:"blue",path:_a,Component:I?V:Ph,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(C,{}),color:"blue",path:wa,Component:I?V:$h,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(C,{}),color:"blue",path:ka,Component:I?V:wh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(C,{}),color:"blue",path:Ta,Component:I?V:ah,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"visa-certificate":{id:"visa-certificate",title:"Справка на визу",icon:t.jsx(C,{}),color:"blue",path:Sa,Component:I?V:Oh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(C,{}),color:"blue",path:Ea,Component:I?V:hh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(C,{}),color:"blue",path:$a,Component:I?V:_h,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(C,{}),color:"blue",path:Pa,Component:I?V:fh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(C,{}),color:"blue",path:Oa,Component:I?V:rh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(C,{}),color:"blue",path:Aa,Component:I?V:Ah,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(C,{}),color:"blue",path:Ca,Component:I?V:gh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(C,{}),color:"blue",path:Ia,Component:I?V:uh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},courier:{id:"courier",title:"Курьер",icon:t.jsx(C,{}),color:"blue",path:Ra,Component:I?V:mh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(C,{}),color:"blue",path:Da,Component:I?V:Sh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(C,{}),color:"blue",path:Na,Component:I?V:Th,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(C,{}),color:"blue",path:La,Component:I?V:kh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(C,{}),color:"blue",path:fa,Component:lh,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(C,{}),color:"blue",path:ma,Component:ch,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:N},"social-environment":{id:"Социальная среда",title:"Социальная среда",color:"pink",Component:()=>(window.location.href="https://profkommospolytech.ru/",t.jsx(Me,{to:pe})),icon:t.jsx(Kt,{}),isTemplate:!1,path:Pm,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:pe},"psychological-help":{id:"Психологическая помощь",title:"Психологическая помощь",color:"green",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/",t.jsx(Me,{to:pe})),icon:t.jsx(fc,{}),isTemplate:!1,path:$m,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:pe},"health-care":{id:"Медицинская помощь",title:"Медицинская помощь",color:"red",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/",t.jsx(Me,{to:pe})),icon:t.jsx(mc,{}),isTemplate:!1,path:Em,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:pe},"wifi-at-the-university":{id:"WI-FI  в университете",title:"WI-FI  в университете",color:"purple",Component:()=>(window.location.href="https://e.mospolytech.ru/old/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",t.jsx(Me,{to:pe})),icon:t.jsx(bc,{}),isTemplate:!1,path:Sm,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:pe},brandbook:{id:"Брендбук",title:"Брендбук",color:"orange",Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/brandbook/",t.jsx(Me,{to:pe})),icon:t.jsx(vc,{}),isTemplate:!1,path:Tm,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:pe},"addresses-and-contacts":{id:"addresses-and-contacts",title:"Адреса и контакты",icon:t.jsx(yc,{}),path:km,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/adresa-i-kontakty/",t.jsx(Me,{to:pe})),color:"darkBlue",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:pe},"structure-of-the-university":{id:"structure-of-the-university",title:"Структура университета",icon:t.jsx(jc,{}),path:wm,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/",t.jsx(Me,{to:pe})),color:"lightGreen",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:pe}}),Va=()=>{var r,d;const e=ii(),{data:i}=ce.useUser(),n=(r=i.user)!=null&&r.subdivisions?{...tn(),...nn()}:{...vt(),...rn(i.user)},[{exactCurrentPage:s,currentPage:o},a]=l.useState({currentPage:Object.values(n).find(c=>e.location.pathname.includes(c.path))??n[0],exactCurrentPage:Object.values(n).find(c=>e.location.pathname.includes(c.path))??null});return l.useEffect(()=>{a({currentPage:Object.values(n).find(c=>e.location.pathname.includes(c.path))??n[0],exactCurrentPage:Object.values(n).find(c=>c.path.includes(e.location.pathname))??null})},[(d=i.user)==null?void 0:d.subdivisions]),l.useEffect(()=>e.listen(c=>{a({currentPage:Object.values(n).find(p=>c.pathname.includes(p.path))??n[0],exactCurrentPage:Object.values(n).find(p=>p.path.includes(c.pathname))??null})}),[e,n]),{currentPage:o,exactCurrentPage:s}},Ga=e=>(e==null?void 0:e.pageSize)==="big"?"1000px":(e==null?void 0:e.pageSize)==="small"?"700px":"963px",Um=u(Ve)`
    position: relative;

    @media (min-width: 1001px) {
        padding-top: 70px;
    }
`,Wm=u.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1000px) {
        top: 7px;
        right: 7px;
    }
`,Vm=({children:e,topRightCornerElement:i,padding:n})=>{const{exactCurrentPage:s}=Va(),o=Ga(s);return t.jsx(zi,{padding:"0 0 10px 0",children:t.jsxs(Um,{justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:o,gap:"24px",alignItems:"flex-start",noAppearanceInMobile:!0,padding:n,children:[i&&t.jsx(Wm,{children:i}),e]})})},Ni=Vm,Gm=({quantity:e=1,avatarShape:i="circle"})=>t.jsx($,{d:"column",gap:"20px",children:Array(e).fill(0).map((n,s)=>t.jsxs($,{gap:"16px",ai:"center",children:[t.jsx(U,{shape:i,size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs($,{gap:"8px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(U,{shape:"rect",size:{width:"90%",height:"13px"},margin:"0"}),t.jsx(U,{shape:"rect",size:{width:"70%",height:"10px"},margin:"0"})]})]},s))});function Qt(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const Ym=u.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,qm=u.div``,Jm=u.div`
    min-height: 0;
    min-width: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
    opacity: ${({isOpen:e})=>e?"1":"0"};
`,Xm=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);l.useEffect(()=>{a(s)},[s]);const r=()=>a(d=>!d);return t.jsxs(Ym,{isOpen:o,bottomMargin:n,onClick:r,children:[e&&t.jsx(qm,{children:e}),t.jsx(Jm,{isOpen:o,children:i})]})},Ya=T(),qa=T(),Km=ee(!1).on(qa,()=>!0).on(Ya,()=>!1),ls={close:Ya,open:qa},Qm={$isModalOpen:Km},On=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),Zm=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),d=Tc(Qm.$isModalOpen),c=a.length>1,p=l.useCallback(()=>{c&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),h=l.useCallback((b,v)=>{b&&(i?(r(()=>[...a,b]),o(()=>[...s,v??""])):(r(()=>[b]),o(v?[v]:[])),n(()=>!0),ls.open())},[r,n,a,i]),g=l.useCallback(()=>{n(()=>!1),ls.close()},[r,n]),x=l.useMemo(()=>a[a.length-1],[a]),m=l.useMemo(()=>s[s.length-1],[s]),f=l.useCallback(b=>{b&&r([...a,b])},[]);return l.useEffect(()=>{d!==i&&n(d)},[d]),t.jsx(On.Provider,{value:{back:p,open:h,close:g,isOpen:i,canBack:c,component:x,title:m,setComponent:f},children:e})},K=()=>{const{open:e,isOpen:i,...n}=l.useContext(On);return{open:e,isOpen:i,...n}},e0="2.2.0",Ja=()=>t.jsx(J,{icon:null,type:"info",title:e0,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),$e=({color:e,children:i})=>t.jsx(Ce,{color:e,children:i}),t0=()=>({info:t.jsx($e,{color:"grey",children:t.jsx(Ie,{})}),message:t.jsx($e,{color:"red",children:t.jsx(pn,{})}),alert:t.jsx($e,{color:"purple",children:t.jsx(un,{})}),"payment-dorm":t.jsx($e,{color:"green",children:t.jsx(lt,{})}),"payment-ed":t.jsx($e,{color:"green",children:t.jsx(lt,{})}),"digital-services":t.jsx($e,{color:"red",children:t.jsx(C,{})}),"doc-for-review":t.jsx($e,{color:"blue",children:t.jsx(C,{})}),"hr-applications":t.jsx($e,{color:"green",children:t.jsx(C,{})}),"kpi-pps":t.jsx($e,{color:"pink",children:t.jsx(Vs,{})}),schedule:t.jsx($e,{color:"pink",children:t.jsx(ni,{})}),"version-update":t.jsx(Ja,{}),"electronic-interaction":t.jsx($e,{color:"blue",children:t.jsx(Ys,{})})}),i0=u(Z)`
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
`,n0=u.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,s0={small:"0.8rem",middle:"0.83rem",big:"0.86rem"},o0={small:"0.75rem",middle:"0.78rem",big:"0.80rem"},a0={small:"0px",middle:"1px",big:"3px"},Xa=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:d,goTo:c,onClose:p,bottomMargin:h,closeAnimation:g=!0,loadingRemove:x=!1,canClose:m=!0,fullText:f=!0,maxLetters:b=200,size:v="middle"})=>{const P=ie(o,"short"),{close:_}=K(),[S,k]=l.useState(!1),X=L=>{L.stopPropagation(),L.preventDefault(),g?(k(!0),setTimeout(()=>{p==null||p()},300)):p==null||p()},O=()=>{a==null||a(),m&&ht.clearById({id:e,pageId:d}),_()};return t.jsx(Xm,{forceState:!S,bottomMargin:h,children:t.jsxs(i0,{to:c??"",onClick:O,children:[t.jsx("span",{className:"left-icon",children:t0()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(te,{fontSize:"0.7rem",children:t.jsx(Pt,{words:[P??"",s??""]})}),t.jsxs($,{d:"column",gap:a0[v],ai:"flex-start",children:[t.jsx(n0,{fontSize:s0[v],children:f?i:Qt(i,b)}),t.jsx(te,{fontSize:o0[v],children:f?n:Qt(n,b)})]})]}),p&&t.jsx(y,{isActive:!(x&&S),icon:t.jsx(We,{}),background:"transparent",onClick:X})]})})},Ka=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{ht.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx($,{d:"column",children:e.map((o,a)=>l.createElement(Xa,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},r0=u.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,Qa=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=ze.useLkNotifications();return l.useEffect(()=>{o&&q.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{ht.clearAllVisible()},[]),t.jsxs(r0,{children:[s.length===0&&!n&&t.jsx(zi,{height:"100%",children:t.jsx(ge,{text:i??"Нет новых уведомлений",image:i?t.jsx(qe,{}):t.jsx(Sc,{}),size:"70px"})}),t.jsxs($,{d:"column",gap:"16px",children:[t.jsx(J,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(Ka,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(Gm,{quantity:10})]})},l0=()=>{const{notifications:e,clearAllError:i,clearAllLoading:n}=ze.useLkNotifications(),s=()=>{Fe.evokeConfirm({message:"Вы уверены, что хотите очистить все уведомления?",onConfirm:()=>ht.clearAll()})};return l.useEffect(()=>{i&&q.evokePopUpMessage({type:"failure",message:i})},[i]),t.jsx(zi,{padding:"10px",children:t.jsxs(Ni,{topRightCornerElement:t.jsx(Z,{to:lr,children:t.jsx(y,{icon:t.jsx(hn,{}),height:"35px",width:"35px"})}),children:[t.jsx(Qa,{}),e.length>0?n?t.jsx($,{jc:"center",children:t.jsx(ut,{width:"40px",height:"40px"})}):t.jsx(y,{text:"Очистить все",onClick:s,width:"100%"}):null]})})},Za="/login",c0="/forgot-password",d0="/medical-certificate",Ut="/all",An="/home",er="/profile",_i="/chat",v_=_i+"/:chatId",tr="/electronic-interaction-agreement",wi="/payments",Ct="/schedule",ir="/all-students",p0="/all-students/:filter",u0="/all-teachers/:filter",nr="/all-teachers",Cn="/feedback",sr="/cant-access",or="/memo-freshmen",ar="/get-your-login",rr="/memo-teacher",ue="/settings",y_=ue+"/:id",h0=ue+"/appearance",g0=ue+"/personal",x0=ue+"/security",f0=ue+"/home-page",m0=ue+"/customize-menu",lr=ue+"/notifications",b0="/instructions",cr="/project-activity",dr="/alerts",pr="/lk-notifications",ur="/helpful-information",v0=Ct+"/:filter",y0=ur+"/:infoType";var j0=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Кадровая среда",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(j0||{});const _0=[{id:0,title:"",icon:"",path:Za,Component:nh},{id:1,title:"",icon:"",path:c0,Component:Gh},{id:2,title:"Обратная связь",icon:t.jsx(Xt,{}),path:Cn,Component:Ho},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(qe,{}),path:sr,Component:Wh},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:ar,Component:og},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:or,Component:ag},{id:6,title:"Вниманию сотрудников!",icon:"",path:rr,Component:rg}],hr={all:{id:"all",title:"Все разделы",icon:t.jsx(Ac,{}),path:Ut,Component:Uh,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0},settings:{id:"settings",title:"Настройки",icon:t.jsx(hn,{}),path:ue,Component:Qh,color:"grey",isTemplate:!0,show:!0,group:"GENERAL",pageSize:"small"},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:t.jsx(C,{}),path:Pn,Component:()=>t.jsx(sg,{}),color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(un,{}),path:dr,Component:Yh,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(qs,{}),path:An,Component:qh,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:t.jsx(Cc,{}),path:er,Component:Xh,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(gn,{}),path:pr,Component:l0,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"],isNew:!0,pageSize:"small"},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(Ys,{}),path:tr,Component:Vh,color:"blue",isTemplate:!1,group:"GENERAL",pageSize:"small"},chat:{id:"chat",title:"Сообщения",icon:t.jsx(Ic,{}),path:_i,Component:()=>fe({oldVersionUrl:_i}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(Rc,{}),path:Ct,Component:Kh,color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["экзамены","зачеты","сессия","пересдача"],planeHeader:!0},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(Kt,{}),path:ir,Component:Mo,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(Gs,{}),path:nr,Component:Fo,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"]},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(Xt,{}),path:Cn,Component:Ho,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(Dc,{}),path:b0,Component:Jh,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(Nc,{}),path:d0,Component:lg,color:"blue",isTemplate:!1,group:"GENERAL",pageSize:"small"}},gr={"teachers-schedule":{id:"teachers-schedule",title:"Расписание преподавателя",icon:t.jsx(Y,{}),path:v0,Component:ng,color:"blue",isTemplate:!1,show:!1,group:"OTHER",planeHeader:!0},"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(Kt,{}),path:p0,Component:Mo,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(Kt,{}),path:u0,Component:Fo,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(Ec,{}),path:h0,Component:eg,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:ue,backButtonText:"Настройки",pageSize:"small"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx($c,{}),path:g0,Component:Zh,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Аккаунт",fallbackPrevPage:ue,backButtonText:"Настройки",pageSize:"small"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:t.jsx(Pc,{}),path:x0,Component:ig,color:"green",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Безопасность",fallbackPrevPage:ue,backButtonText:"Настройки",pageSize:"small"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная",icon:t.jsx(qs,{}),path:f0,Component:tg,color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная",fallbackPrevPage:ue,backButtonText:"Настройки",pageSize:"small"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(Oc,{}),path:m0,Component:()=>t.jsx(t.Fragment,{}),color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:ue,backButtonText:"Настройки",pageSize:"small"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(gn,{}),path:lr,Component:()=>t.jsx(t.Fragment,{}),color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:ue,backButtonText:"Настройки",pageSize:"small"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:y0,Component:mn,color:"grey",isTemplate:!0,show:!1}},xr=(e,i)=>{if(i)if(e!=="home"){const n=i["settings-home-page"].property.pages;oi.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...n,e]})}else q.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},fr=(e,i)=>{if(i){const n=i["settings-home-page"].property.pages;oi.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:n.filter(s=>s!==e)})}},w0=(e,i,n,s)=>{if(i){const o=s.length+id;if(n<o){q.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const a=i["settings-customize-menu"].property.pages??$i;oi.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...a,e]})}else q.evokePopUpMessage({message:`Нельзя добавить больше ${o} элементов`,type:"failure"})}},k0=(e,i,n)=>{if(i)if(n.includes(e))q.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{q.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=i["settings-customize-menu"].property.pages;oi.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(o=>o!==e)})}},T0=u.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,S0=u.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,E0=e=>{var m,f,b;const{id:i,icon:n,title:s,color:o}=e,{settings:a}=St.useSettings(),{data:r}=ce.useUser(),d=Be.useMenu(),c=(m=a["settings-home-page"].property.pages)==null?void 0:m.find(v=>v===i),p=(f=a["settings-customize-menu"].property.pages)==null?void 0:f.find(v=>v===i),h=((b=r.user)==null?void 0:b.user_status)==="staff"?eo:$i,g=()=>{xr(i,a),Ae.close()},x=()=>{w0(i,a,Object.keys(d.leftsideBarRoutes??{}).length??0,h),Ae.close()};return t.jsxs(T0,{children:[t.jsxs("div",{className:"top",children:[t.jsx(Ce,{color:o,size:22,children:n}),t.jsx(S0,{children:s})]}),t.jsx(he,{}),c?t.jsx(y,{text:"Убрать с главной",icon:t.jsx(qe,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:()=>{fr(i,a),Ae.close()}}):t.jsx(y,{text:"Добавить на главную",icon:t.jsx(Jt,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:g}),p?t.jsx(y,{text:"Убрать из меню",icon:t.jsx(qe,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:()=>k0(i,a,h)}):t.jsx(y,{text:"Добавить в меню",icon:t.jsx(Jt,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:x})]})},mr=({route:e})=>{var s;const i=w[(s=e==null?void 0:e.color)!=null&&s.length?e.color:"blue"].main,n=o=>{o.preventDefault(),o.stopPropagation(),Ae.open({e:o,height:105,content:t.jsx(E0,{...e})})};return t.jsx(y,{icon:t.jsx(Js,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},br=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine},vr=u(Ve)`
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
`,cs=e=>{var P;const{color:i,shadow:n,notifications:s,maxWordLength:o,title:a,isNew:r,icon:d,mode:c,id:p,background:h,orientation:g="vertical"}=e,x=g==="vertical",{settings:m}=St.useSettings(),f=!!((P=m["settings-home-page"].property.pages)!=null&&P.find(_=>_===p)),b=11,v=l.useMemo(()=>(_,S)=>{const k=_.split(" ")[0];return k.length>S&&k.length!==S+1&&x?`${_.substr(0,S)}-${_.substr(S,_.length)}`:_},[]);return t.jsxs(vr,{padding:"0",width:"100%",maxWidth:"100%",height:x?"135px":"60px",isVertical:x,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,background:h,children:[t.jsxs("div",{className:"outside",children:[t.jsx(Ce,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:d??t.jsx(Lc,{})}),t.jsx("b",{children:Qt(v(a,b),o)}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",br(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),c==="use"&&t.jsx(mr,{route:e}),c==="add"?f?t.jsx(y,{icon:t.jsx(We,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--schedule)",onClick:()=>fr(p,m)}):t.jsx(y,{icon:t.jsx(Jt,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--schedule)",onClick:()=>xr(p,m)}):null,r&&t.jsx("span",{className:"new",children:"New"})]})},$0=u(vr)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,j_=()=>t.jsx(Z,{to:Ut,onClick:()=>{De.changeOpen({isOpen:!1,currentPage:Ut.slice(1,Ut.length)})},children:t.jsx($0,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(Ce,{color:"blue",children:t.jsx(zc,{})}),t.jsx("b",{children:"Все разделы"})]})})}),P0=u(Z)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,O0=u.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,A0=e=>{const{close:i}=K(),{path:n,orientation:s="vertical",mode:o="use"}=e,a=s==="vertical"?17:50,r=1;if(o==="add")return t.jsx(O0,{width:s==="vertical"?r:"100%",children:t.jsx(cs,{...e,mode:o,maxWordLength:a})});const d=()=>{i(),De.changeOpen({isOpen:!1,currentPage:n.slice(1,n.length)})};return t.jsx(P0,{to:n,onClick:d,width:s==="vertical"?r:"100%",children:t.jsx(cs,{...e,maxWordLength:a,mode:o})})},C0=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,I0=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(ge,{text:"Ничего не было найдено"}):t.jsx(C0,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(A0,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),R0=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(me(s.title).includes(me(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>me(a).includes(me(e))))&&(n[s.id]=s),n},{}),D0=u.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,N0=u(Z)`
    width: 100%;
`,L0=({division:e})=>{const{close:i}=K();return t.jsxs(D0,{children:[t.jsxs($,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(Ce,{size:120,color:"purple",children:t.jsx(vi,{})}),t.jsx(te,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(N0,{to:`${nr}/${e}`,onClick:i,children:t.jsx(y,{icon:t.jsx(Xs,{}),width:"100%",text:"Список"})})]})},z0=u.div`
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
`,M0=({division:e})=>{const{open:i}=K(),n=()=>{i(t.jsx(L0,{division:e}),"Подразделение")};return t.jsx(z0,{onClick:n,children:t.jsxs($,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs($,{gap:"8px",children:[t.jsx(vi,{}),t.jsx(te,{fontSize:"1rem",children:e})]}),t.jsx(Tt,{})]})})},F0=({divisions:e})=>!e||e.length===0?null:t.jsx($,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(M0,{division:i},i))}),H0=u.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,ds=u(Z)`
    width: 100%;
`,B0=({group:e})=>{const{close:i}=K();return t.jsxs(H0,{children:[t.jsxs($,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(Ce,{size:120,color:"lightBlue",children:t.jsx(Ks,{})}),t.jsx(te,{fontSize:"1.2rem",children:e})]}),t.jsxs($,{gap:"8px",onClick:i,children:[t.jsx(ds,{to:`${Ct}/${e}`,children:t.jsx(y,{icon:t.jsx(ni,{}),width:"100%",text:"Расписание"})}),t.jsx(ds,{to:`${ir}/${e}`,children:t.jsx(y,{icon:t.jsx(Xs,{}),width:"100%",text:"Список"})})]})]})},U0=u.div`
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
`,W0=({group:e})=>{const{open:i}=K(),n=()=>{i(t.jsx(B0,{group:e}),"Группа")};return t.jsx(U0,{onClick:n,children:t.jsxs($,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs($,{gap:"8px",h:"50px",children:[t.jsx(Ks,{}),t.jsx(te,{fontSize:"1rem",children:e})]}),t.jsx(Tt,{})]})})},V0=({groups:e})=>e?t.jsx($,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(W0,{group:i},i))}):null,Yi=[{title:"Инструкции",links:[{link:A+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:A+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:A+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:A+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:A+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:A+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:A+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:A+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:A+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:A+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:A+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:A+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:A+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:A+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:A+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:A+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:A+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:A+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:Q},{link:A+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:Q},{link:A+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:Q}]},{title:"Положения",links:[{link:A+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:Q},{link:A+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:Q},{link:A+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:Q},{link:A+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:Q},{link:A+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:Q},{link:A+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:Q},{link:A+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:Q},{link:A+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:Q},{link:A+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:Q},{link:A+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:Q},{link:A+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:Q},{link:A+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:Q},{link:A+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:Q},{link:A+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:Q},{link:A+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:Q}]}];var ye=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))(ye||{});const ft={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},G0=[{id:ye.information,title:ft[ye.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:ye.security,title:ft[ye.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:ye.instructions,title:ft[ye.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...Yi[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:ye.regulations,title:ft[ye.regulations],visible:"staff",content:[{title:"Положения",links:[...Yi[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:ye.orders,title:ft[ye.orders],visible:"staff",content:[{title:"Приказы",links:[...Yi[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:ye.courses,title:ft[ye.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],Y0=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>me(a.title).includes(me(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),q0=u.div`
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
`,J0=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s},o)=>t.jsxs(q0,{children:[t.jsx(W,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(be,{gap:16,children:s.map(({title:a,href:r,visible:d},c)=>d==="staff"&&!i||d==="student"&&i?null:t.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:a},a+c))})]},n+o))}):null,ki=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,ps=({people:e,type:i})=>!e||e.length===0?null:t.jsx($,{d:"column",children:e.map(n=>l.createElement(Pr,{name:n.fio,type:i,...n,key:n.id}))}),X0=()=>{const{allRoutes:e}=Be.useMenu(),{notifications:i,removeNotificationLoading:n}=ze.useLkNotifications(),{data:{user:s}}=ce.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>G0.flatMap(({visible:O,content:L})=>O==="staff"&&o||O==="student"&&!o||O==="all"?L:[]),[o]),[r,d]=l.useState(null),[c,p]=l.useState(null),[h,g]=l.useState(null),[x,m]=l.useState(null),[f,b]=l.useState(null),[v,P]=l.useState(null),[_,S]=l.useState(null),k=[{title:"Разделы",content:t.jsx(I0,{pages:f,showNotFound:!1}),clear:()=>{b(null)},search:O=>{if(e){const L=R0(O,e);b(L)}},data:f},{title:"Студенты",content:t.jsx(ps,{people:x,type:"stud"}),data:x,clear:()=>{m(null)},search:async O=>{const{data:L}=await Vd(O,"",1,20);m(L.items)}},{title:"Сотрудники",content:t.jsx(ps,{people:h,type:"staff"}),data:h,clear:()=>{g(null)},search:async O=>{const{data:L}=await Hd(O,"",1,20);g(L.items)}},{title:"Группы",content:t.jsx(V0,{groups:r}),data:r,clear:()=>{d(null)},search:async O=>{const{data:L}=await Gd(O);d(L.items)}},{title:"Подразделения",content:t.jsx(F0,{divisions:c}),data:c,clear:()=>{p(null)},search:async O=>{const{data:L}=await Bd(O);p(L.items)}},{title:"Уведомления",content:t.jsx(Ka,{notifications:v,loadingRemove:n}),clear:()=>{P(null)},search:O=>{const L=i.filter(se=>me(se.title).includes(O));P(L)},data:v},{title:"Полезная информация",content:t.jsx(J0,{blocks:_,isStaff:o}),clear:()=>{S(null)},search:O=>{const L=Y0(O,a);S(L)},data:_}];return[(()=>{const{content:O,clear:L,data:se}=k.reduce((R,ae)=>(ki(ae.data)&&(R.data.push(ae.data),R.content.push(t.jsxs(t.Fragment,{children:[t.jsx(W,{size:4,align:"left",children:ae.title}),ae.content,t.jsx(he,{})]}))),R.clear.push(ae.clear),R),{content:[],clear:[],data:[]});return{title:"Все",content:O,clear:()=>L.map(R=>R()),search:async R=>{R.length<=8&&/\d|[-]/g.test(R)?await k[3].search(R):(k[0].search(R),k[5].search(R),k[6].search(R),ki(k[0].data)===0&&(await k[1].search(R),await k[2].search(R),await k[4].search(R)))},data:se}})(),...k]},K0=()=>JSON.parse(localStorage.getItem(G.SearchHistory)??"[]"),Q0=()=>{const e=X0(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>K0(),[]),r=async x=>{e[i].clear();const m=Po(x)?$o(x):x;await e[i].search(m),m.length>0&&!a.includes(m)&&(a.unshift(m),a.length>8&&a.pop(),localStorage.setItem(G.SearchHistory,JSON.stringify(a)))},[d,c,p]=Co({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:x=>(o(x),x.length>0&&(s!==x||!e[i].data))}),h=!p&&!d.length,g=!!d.length&&!p&&!!ki(e[i].data);return{showMessage:h,showSearchResult:g,searchValue:d,setSearchValue:c,currentPage:i,setCurrentPage:n,config:e,loading:p,searchHistory:a}},Z0=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(Ln,{})})):e?n.filter(s=>me(s).includes(me(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(Ln,{})})):[],eb=()=>t.jsxs($,{gap:"8px",ai:"flex-start",children:[t.jsx(U,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs($,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(U,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(U,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),tb=u.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,ib=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:d,searchHistory:c}=Q0(),p=Z0(r,n,c),{isOpen:h}=K();return t.jsx(tb,{children:t.jsxs($,{d:"column",gap:"8px",h:"100%",children:[t.jsx(Ao,{value:n,setValue:s,loading:r,focusOn:h,hints:p}),t.jsx(fn,{pages:d.map(({title:g})=>({title:g})),currentPage:o,setCurrentPage:a}),t.jsx(Oo,{value:n,setValue:s}),e&&t.jsx($,{h:"100%",children:t.jsx(ge,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(rt,{})})}),!r&&n.length!==0&&!e&&!ki(d[o].data)&&t.jsx($,{h:"100%",children:t.jsx(ge,{size:"60px",text:"Ничего не было найдено",image:t.jsx(Ds,{})})}),r&&Array(10).fill(0).map((g,x)=>t.jsx(eb,{},x)),i&&t.jsx(t.Fragment,{children:d[o].content})]})})},nb=u(Ve)`
    cursor: pointer;
    &:hover {
        filter: brightness(0.96);
    }
`,sb=u.div`
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
`,ob=u($)`
    @media (max-width: 1000px) {
        display: none;
    }
`,ab=()=>{const e=mu();return{Windows:[{title:"CTRL",key:"Control"},{key:"k"}],Linux:[{title:"CTRL",key:"Control"},{key:"k"}],UNIX:[{title:"CTRL",key:"Control"},{key:"k"}],MacOS:[{title:"CMD",key:"Meta",icon:t.jsx(Mc,{})},{key:"k"}]}[e]},yr=({size:e="large"})=>{const i=ab(),{open:n}=K(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(ib,{}),"Глобальный поиск");return Eo(i.map(({key:r})=>r),a),e==="icon"?t.jsx(y,{direction:"vertical",icon:t.jsx(rt,{}),width:"40px",minWidth:"40px",background:"transparent",onClick:a}):t.jsxs(nb,{maxWidth:"750px",width:o,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(te,{align:"left",fontSize:"0.9rem",children:t.jsxs($,{gap:"8px",children:[t.jsx(rt,{}),"Поиск"]})}),t.jsx(ob,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(sb,{children:(r==null?void 0:r.icon)??(r.title??r.key).toUpperCase()},r.key))})]})},sn=e=>e.split(" ").map(i=>i[0]),Oe=(e,i)=>{const n=sn(e),s=w[od[n[0]]];return s==null?void 0:s[i??"main"]},rb=u.div`
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
`,lb=u.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function di({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:d,boxShadow:c,border:p,icon:h,avatarModal:g,onClick:x,borderRadius:m,background:f}){const[b,v]=l.useState(!0),P=sn(i)[0]+(sn(i)[1]??""),{open:_}=K(),S=k=>{g?_(t.jsx(di,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):x==null||x(k)};return t.jsxs(rb,{selected:e,width:s,height:o,marginRight:a,background:f??Oe(i),boxShadow:c,border:p,onClick:S,borderRadius:m,children:[n&&b?t.jsx(lb,{loading:"lazy",round:!0,onLoadedData:()=>v(!0),onError:()=>v(!1),src:n}):t.jsx("div",{className:"name",children:P}),h&&t.jsx("span",{className:"icon",children:h}),t.jsx(Qe,{invisibleOnFalse:!0,checked:d??!1,visible:d!==void 0,setChecked:()=>null}),t.jsx(dt,{left:"80%",top:"90%",outline:"4px solid var(--schedule)",visible:!!r,children:r})]})}const cb=u.div`
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
`,jr=()=>{const{close:e}=K(),{notifications:i}=ze.useLkNotifications(),n=3;return t.jsxs($,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs($,{d:"column",gap:"16px",children:[t.jsx(Qa,{maxNotificationsVisible:n}),t.jsxs(te,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",br(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(Z,{to:pr,style:{width:"100%"},children:t.jsx(y,{width:"100%",text:"Показать все",onClick:e})})]})},db=()=>{const{notifications:e}=ze.useLkNotifications(),{open:i}=K(),n=()=>{i(t.jsx(jr,{}),"Уведомления")};return t.jsxs(cb,{onClick:n,children:[t.jsx(dt,{outline:"none","box-shadow":"0px 0px 0px 3px var(--schedule)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length>10?"10+":e.length}),t.jsx(Ji,{})]})},__=u.header`
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
`;const w_=u.div`
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
`,pb=u.div`
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
`,k_=u.div`
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
`,T_=u.div`
    margin-top: 50px;
    width: 100%;
`,S_=u.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,E_=u(Ve)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,$_=u.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,ub=u.div`
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
`,hb=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(ub,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(Cu,{id:Math.random().toString(),isToggled:i,setIsToggled:a},e)]})]},e)},gb=u.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,xb=({title:e,toggles:i,setToggles:n,disabled:s})=>{const o=l.useCallback((a,r)=>{i[a].state=!i[a].state,n([...i]),r&&(r==null||r(i[a].state))},[i,n]);return t.jsxs(gb,{children:[!!e.length&&t.jsx("h2",{children:e}),i.map(({title:a,state:r,action:d},c)=>t.jsx(hb,{disabled:s,title:a,state:r,action:()=>o(c,d)},a))]})},_r=({type:e,onClick:i})=>{const{theme:n,switchTheme:s}=Ai(),{settings:o}=St.useSettings(),a=o==null?void 0:o["settings-appearance"].property,[r,d]=l.useState(n==="light"),c=r?t.jsx(Fc,{}):t.jsx(Hc,{}),h=`Тема: ${r?"Светлая":"Темная"}`,[g,x]=l.useState([{title:"Темная тема",state:n!=="light",action:f=>s(f)}]);l.useEffect(()=>{x([{title:"Темная тема",state:n!=="light",action:f=>s(f)}])},[n]),l.useEffect(()=>{d(n==="light")},[n]);const m=()=>{s(r),d(f=>!f),i==null||i()};return e==="toggle"?t.jsx(xb,{disabled:!!(a!=null&&a.scheduledLightTheme),title:"",toggles:g,setToggles:x}):e==="h-button"?t.jsx(y,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,text:h,background:"var(--schedule)",icon:c,width:"100%",align:"left",onClick:m}):t.jsx(y,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,padding:"0",background:w.white.transparent2,icon:t.jsx(pb,{width:"30px",background:w.green.main,children:c}),onClick:m,text:h,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},fb=u.div`
    position: relative;
`,wr=()=>{const{open:e}=K(),{notifications:i}=ze.useLkNotifications(),n=()=>Ae.close(),s=()=>{Fe.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Zt.logout}),n()},o=()=>{Ae.close(),e(t.jsx(Or,{}),"Что нового")},a=()=>{e(t.jsx(jr,{}),"Уведомления"),Ae.close()};return t.jsxs(t.Fragment,{children:[t.jsx(Fv,{padding:"8px",size:"small"}),t.jsx(he,{}),t.jsx(_r,{type:"h-button"}),t.jsx(he,{}),t.jsxs(fb,{children:[t.jsx(y,{onClick:a,icon:t.jsx(gn,{}),text:"Уведомления",width:"100%",background:"var(--schedule)",align:"left"}),t.jsx(dt,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(Z,{to:ue,children:t.jsx(y,{text:"Настройки",background:"var(--schedule)",icon:t.jsx(hn,{}),width:"100%",align:"left",onClick:n})}),t.jsx("a",{href:`${A}/index.php`,children:t.jsx(y,{text:"Старый дизайн",icon:t.jsx(Ms,{}),width:"100%",background:"var(--schedule)",align:"left"})}),t.jsx(he,{}),t.jsx(y,{align:"left",icon:t.jsx(Bc,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--schedule)"}),t.jsx(he,{}),t.jsx(y,{align:"left",icon:t.jsx(Ja,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--schedule)"})]})},mb=u.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-mild-xxl);
    }
`,bb=({showSearch:e=!1})=>{const{data:{user:i}}=ce.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),Ae.open({e:s,height:143,content:t.jsx(wr,{})})};return t.jsxs(mb,{children:[e&&t.jsx(yr,{size:"icon"}),t.jsx(db,{}),t.jsx(di,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},vb=u.header`
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
`,yb=u.div`
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
`,jb=()=>{const{pathname:e}=Fs(),[i,n]=l.useState([e]),{action:s}=ii();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},_b=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=ii();return t.jsx(y,{text:i,onClick:()=>s.goBack(),icon:t.jsx(fi,{}),textColor:"var(--reallyBlue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},wb=({currentPage:e,exactCurrentPage:i,isHeaderVisible:n})=>{const s=ii(),o=jb(),a=(c=Ut)=>()=>{De.changeOpen({isOpen:!1,currentPage:c.slice(1,c.length)}),s.push(c)},r=le.useMemo(()=>i?i.isSubPage?i.subPageHeaderTitle:i.title:e==null?void 0:e.title,[e,i]);return{backButton:le.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?o.length>1?t.jsx(_b,{text:i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(y,{direction:"vertical",icon:t.jsx(fi,{}),onClick:a(i.fallbackPrevPage),background:"transparent"}):t.jsx(y,{direction:"vertical",icon:t.jsx(fi,{}),onClick:a(),background:"transparent"}):t.jsx(y,{icon:t.jsx(fi,{}),onClick:a(),background:"transparent",text:n?void 0:"Все разделы",padding:"0",textColor:"var(--reallyBlue)"}),[i,o,a]),headerTitle:r}},kb=({currentPagePair:{currentPage:e,exactCurrentPage:i},headerVisible:n=!1})=>{var c,p;const{isMobile:s}=Di(),o=n||!!(i!=null&&i.planeHeader),{headerTitle:a,backButton:r}=wb({currentPage:e,exactCurrentPage:i,isHeaderVisible:o}),d=Ga(i);return(c=i??e)!=null&&c.withoutHeader?null:t.jsxs(vb,{headerVisible:o,hidden:(p=i??e)==null?void 0:p.withoutHeader,children:[t.jsx(yb,{maxWidth:d,noButton:i==null?void 0:i.withoutBackButton,headerVisible:o,children:a}),t.jsxs($,{jc:"space-between",mw:d,children:[r??t.jsx("div",{}),s&&t.jsx(bb,{showSearch:!0})]})]})},Tb=le.memo(kb),Sb=u(Z)`
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
`,Eb=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>n?t.jsx(U,{shape:"circle",size:{width:"40px",height:"40px"}}):t.jsxs(Sb,{to:er,onClick:()=>De.changeOpen({isOpen:!1,currentPage:"profile"}),children:[t.jsx(y,{icon:t.jsx(Js,{}),className:"more-button",background:"transparent",onClick:r=>{r.preventDefault(),r.stopPropagation(),Ae.open({e:r,height:143,content:t.jsx(wr,{})})}}),t.jsx(di,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(W,{size:5,children:e})]}),$b=le.memo(Eb),Pb=["isCurrent","color"],Ob=u(Z).withConfig({shouldForwardProp:e=>!Pb.includes(e)})`
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
`,Ab=u.div`
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
`,Cb=u.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,Ib=u.button`
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
`,Rb=e=>{const{path:i,icon:n,title:s,isCurrent:o,isAdmin:a,color:r,notifications:d}=e;return t.jsxs(Ob,{to:i,className:"leftside-bar-item",color:r,isCurrent:o,onClick:()=>{De.changeOpen({isOpen:!1,currentPage:i.slice(1,i.length)})},title:s,children:[t.jsx(dt,{className:"notification",top:"50%",visible:a,right:"-20px",color:"pink",children:"A"}),t.jsx(dt,{className:"notification",top:"50%",visible:!!d,right:a?"0px":"-20px",color:"red",children:d}),n,t.jsx("span",{className:"title",children:s}),t.jsx(mr,{route:e})]})},kr=le.memo(Rb),Db=()=>{const{isOpen:e}=Be.useMenu();return t.jsx(t.Fragment,{children:t.jsx(y,{icon:t.jsx(We,{}),onClick:()=>De.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},Nb=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(Ib,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};le.memo(Nb);u.section`
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
`;const Lb=()=>{const{leftsideBarRoutes:e,currentPage:i}=Be.useMenu(),n=l.useMemo(()=>{const s=window.location.hash.split("/");return s.length>2&&s[1]?s[1]:i==null?void 0:i.id},[i]);return e?t.jsx(Cb,{children:Object.values(e).filter(s=>s!==void 0).map(s=>l.createElement(kr,{...s,key:s==null?void 0:s.id,isCurrent:n===(s==null?void 0:s.id)}))}):t.jsxs($,{d:"column",children:[t.jsxs($,{gap:"8px",children:[t.jsx(U,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(U,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs($,{gap:"8px",children:[t.jsx(U,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(U,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs($,{gap:"8px",children:[t.jsx(U,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(U,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs($,{gap:"8px",children:[t.jsx(U,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(U,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},zb=le.memo(Lb),Mb=()=>{const{isOpen:e}=Be.useMenu(),{width:i,height:n}=Ii(),{data:{user:s}}=ce.useUser(),{visibleRoutes:o,currentPage:a}=Be.useMenu();return t.jsxs(Ab,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(Z,{to:An,children:t.jsx(Ci,{width:"165px"})}),t.jsx($b,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:(a==null?void 0:a.id)==="profile"}),t.jsx(yr,{size:"small"}),t.jsx(zb,{})]}),t.jsx(_r,{type:"toggle"}),i<1e3&&t.jsx(Db,{})]})},Fb=u.div`
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
`,Hb=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=wo.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{q.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),q.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(Fb,{isOpen:e,isClickable:!!o,color:ct[n].color,onClick:a,children:t.jsx(J,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>q.openPopUpMessage({isOpen:!1}),children:i})})},Li=u.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
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
`;const Bb=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(On);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},Ub=u.div`
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
`,Wb=u.div`
    padding-top: 30px;
`,Vb=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=Bb(),r=l.useRef(null),d=l.useMemo(()=>e&&!!i,[e,i]);return Eo(["Escape"],o),$t(r,()=>{o()}),t.jsx(Li,{isOpen:d,children:t.jsxs(Ub,{isOpen:d,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(y,{onClick:s,icon:t.jsx(ti,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(W,{size:3,align:"left",children:a}),t.jsx(y,{onClick:o,icon:t.jsx(We,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--search)"}),t.jsx(Wb,{children:i})]})})},Gb=le.memo(Vb),Yb=u.div`
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
`,qb=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s}=go.useConfirm(),o=l.useRef(null);$t(o,()=>Fe.closeConfirm());const a=()=>{n(),Fe.closeConfirm()},r=()=>{Fe.closeConfirm()};return t.jsx(Li,{isOpen:e,children:t.jsxs(Yb,{isOpen:e,ref:o,children:[t.jsx(W,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(be,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(y,{text:"Да",onClick:a,width:"90px",textColor:w.red.main,background:"transparent",hoverBackground:w.red.transparent3}),t.jsx(y,{text:"Нет",onClick:s??r,width:"90px",textColor:w.blue.main,background:"transparent",hoverBackground:w.blue.transparent3})]})]})})},Jb=u.div`
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
`,Xb=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:d="center",appearance:c=!0})=>{const[p,h]=l.useState(i),{width:g}=Ii(),x=l.useRef(null),m=()=>{var b;x!=null&&x.current&&g<=1e3&&h(Math.round(((b=x.current)==null?void 0:b.scrollLeft)/g))},f=b=>{var v;h(b),r==null||r((v=e[b])==null?void 0:v.id),x!=null&&x.current&&(x.current.scrollLeft=x.current.clientWidth*b)};return l.useEffect(()=>{f(p)},[i,g]),t.jsxs(Jb,{width:n,align:d,maxWidth:o,children:[t.jsx(fn,{pages:e.map(({title:b,condition:v})=>({title:b,condition:v})),currentPage:p,setCurrentPage:f,sliderWidth:a,appearance:c}),t.jsx("div",{className:s??"slider-content",ref:x,onScroll:m,children:e.map(b=>b.condition!==void 0&&b.condition||b.condition===void 0?t.jsx("div",{className:"slider-page",children:b.content},b.title):t.jsx("div",{className:"slider-page",children:t.jsx(ge,{text:"Нет данных"})},b.title))})]})},In=Xb,us=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},hs=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",Tr=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},Kb=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},Qb=u.div`
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
`,Zb=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx(Qb,{width:i,height:n,color:Oe(e,"dark1"),color2:Oe(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Oe(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Oe(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Oe(e,"light2")})})]})}),ev=u.div`
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
`,tv=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:d,degreeLevel:c,course:p,isMe:h=!1,noInfo:g=!1})=>{const x=g?"140px":"110px",m=Tr(h,n,s,o);return t.jsxs(ev,{children:[t.jsx(Zb,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(di,{avatarModal:!0,border:!0,name:i,avatar:e,width:x,height:x,marginRight:"0"}),!g&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(te,{fontSize:"0.9rem",children:t.jsx(Pt,{words:m})}),t.jsx(st,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(st,{fontSize:"0.9rem",visible:!!d,keyStr:"Факультет",value:d}),t.jsx(st,{fontSize:"0.9rem",visible:!!c,keyStr:"Уровень образования",value:c}),t.jsx(st,{fontSize:"0.9rem",visible:!!p,keyStr:"Курс",value:p}),t.jsx(st,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},iv=u.div`
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
`,Sr=e=>{const{children:i}=e;return t.jsxs(iv,{children:[t.jsx(tv,{...e}),t.jsx("div",{className:"buttons",children:i})]})},nv=u.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,sv=()=>t.jsxs(nv,{children:[t.jsx(U,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(U,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(U,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),Er=e=>{if(e)return()=>{Fe.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem(G.Token,e),location.reload()}})}},ov=e=>{const{close:i}=K(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${Oe(s,"main")}, ${Oe(s,"dark1")})`;return t.jsxs(Sr,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:`${Ct}/${o}`,children:t.jsx(y,{icon:t.jsx(ni,{}),text:"Расписание",onClick:()=>i(),width:"100%"})}),t.jsx(y,{icon:t.jsx(pn,{}),text:"Написать",onClick:()=>i(),width:"100%",isActive:!1})]}),n&&t.jsx(y,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:Er(n)})]})},$r=e=>{const{close:i}=K(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${Oe(s,"dark1")}, ${Oe(s,"main")})`;return t.jsxs(Sr,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:`${Ct}/${s}`,children:t.jsx(y,{icon:t.jsx(ni,{}),text:"Расписание",onClick:()=>{i()},width:"100%"})}),t.jsx(y,{icon:t.jsx(pn,{}),text:"Написать",onClick:()=>i(),width:"100%",isActive:!1})]}),n&&t.jsx(y,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:Er(n)})]})},av=u.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?Kb(i):"100%"};

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
            font-size: ${({size:e})=>us(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
            font-weight: 500;
        }

        .status {
            font-size: ${({size:e})=>`calc(${us(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
            font-weight: 500;
        }
    }
`,Pr=e=>{const{open:i}=K(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:d,division:c,group:p,isMe:h=!1,loading:g=!1,orientation:x="horizontal",size:m="middle"}=e,f=Tr(h,n,c,p);if(g)return t.jsx(sv,{});const b=v=>{r?r(v):h||(Ae.close(),i(n==="staff"?t.jsx($r,{...e}):t.jsx(ov,{...e})))};return t.jsxs(av,{orientation:x,size:m,onClick:b,children:[d&&t.jsx("div",{className:"index",children:d}),t.jsx(di,{name:o,avatar:s,width:hs(x,m),height:hs(x,m),marginRight:x==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(Pt,{words:f})})]})]})},rv=u.div`
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
`,lv=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=K();return o?t.jsxs(rv,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(Z,{to:s,children:t.jsx(y,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},cv=u.div`
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
`,dv=u.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,pv=u(te)`
    margin-bottom: 20px;
`,xi=({image:e,list:i,text:n})=>{const{isMobile:s}=Di();return t.jsxs(cv,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(W,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(pv,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(dv,{children:i==null?void 0:i.map(o=>l.createElement(lv,{...o,key:o.title}))})]})},uv=({alert:e})=>{const{content:i,time:n,date:s}=e;return t.jsxs(hv,{children:[t.jsx(te,{fontSize:"0.9rem",children:t.jsx(Pt,{words:[ie(s),n]})}),t.jsx(he,{width:"100%",margin:"12px 0"}),t.jsx("div",{dangerouslySetInnerHTML:{__html:i}})]})},hv=u.div`
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
`,gv=e=>!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e),xv=e=>{const i=e.indexOf('src="')+5;let n=0;if(i===-1)return null;for(let o=i;o<e.length;o++)if(e[o]==='"'){n=o;break}const s=e.slice(i,n);return gv(s)?s:null},fv=u.div`
    display: ${({visible:e})=>e?"flex":"none"};
    padding: 8px;
    border-radius: 6px;
    background: ${w.red.light1};
    color: #fff;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
`,mv=u.div`
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
`,bv=u.div`
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
`,vv=u.div`
    min-height: 90px;
    width: 100%;
    padding: 12px;
    display: flex;
    gap: 4px;
    flex-direction: column;
`,yv=u.div`
    font-weight: 500;
    width: ${({orientation:e})=>e==="vertical"?"100%":"85%"};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,jv=u.div`
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
`,_v=u(fv)`
    position: absolute;
    top: 6px;
    right: -4px;
`,wv=({news:e,orientation:i="vertical",isNew:n=!1})=>{const s=xv(e.content),{open:o}=K(),a=()=>o(t.jsx(uv,{alert:e}),e.title);return t.jsxs(mv,{onClick:a,orientation:i,children:[t.jsx(bv,{orientation:i,children:s?t.jsx("img",{src:s,alt:""}):t.jsx(un,{})}),t.jsxs(vv,{children:[t.jsx(yv,{orientation:i,children:e.title}),t.jsx(jv,{children:t.jsx("div",{dangerouslySetInnerHTML:{__html:Qt(e.content,220)}})}),t.jsx(te,{children:t.jsx(Pt,{words:[ie(e.date),e.time]})})]}),t.jsx(_v,{visible:n,children:"New"})]})},kv=u.div`
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
`,on=u.div`
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
`,Tv=u.div`
    pointer-events: none;
`,Sv=()=>t.jsxs($,{d:"column",gap:"0px",children:[t.jsx(on,{className:"first",children:t.jsxs($,{gap:"16px",w:"fit-content",children:[t.jsx(Ce,{color:"orange",children:t.jsx(Ji,{})}),t.jsxs($,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(U,{pulse:!1,size:{width:"250px",height:"10px"},shape:"rect",margin:"0"}),t.jsx(U,{pulse:!1,size:{width:"190px",height:"8px"},shape:"rect",margin:"0"})]})]})}),t.jsx(on,{className:"second",children:t.jsxs($,{gap:"16px",w:"fit-content",children:[t.jsx(Ce,{color:"orange",children:t.jsx(Ji,{})}),t.jsxs($,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(U,{pulse:!1,size:{width:"250px",height:"10px"},shape:"rect",margin:"0"}),t.jsx(U,{pulse:!1,size:{width:"190px",height:"8px"},shape:"rect",margin:"0"})]})]})})]}),Ev=()=>t.jsxs($,{d:"column",gap:"8px",children:[t.jsx(_e,{height:"fit-content",padding:"12px",maxWidth:"320px",children:t.jsxs($,{gap:"8px",children:[t.jsx(rt,{}),"Распис"]})}),t.jsx(on,{children:t.jsxs($,{gap:"16px",w:"fit-content",children:[t.jsx(Ce,{color:"pink",children:t.jsx(ni,{})}),t.jsxs($,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(U,{pulse:!1,size:{width:"250px",height:"10px"},shape:"rect",margin:"0"}),t.jsx(U,{pulse:!1,size:{width:"190px",height:"8px"},shape:"rect",margin:"0"})]})]})})]}),$v=()=>t.jsx(Tv,{children:t.jsx($,{mw:"250px",children:t.jsx(wv,{news:{title:"Новости",time:"4:20",content:"Как неожиданно и приятно",date:"January 1, 1984",id:0}})})}),Pv=()=>{const{data:{user:e}}=ce.useUser(),{allRoutes:i}=Be.useMenu();if(!i)return null;const n=[i.home,i.payments];return(e==null?void 0:e.user_status)==="stud"&&n.push(i["acad-performance"]),t.jsx($,{gap:"0px",jc:"center",children:n.map(({color:s,icon:o,id:a,title:r})=>t.jsxs($,{d:"column",gap:"12px",w:"110px",children:[t.jsx(Ce,{badge:"1",color:s,size:50,children:o}),t.jsx(W,{size:5,children:Qt(r,8)})]},a))})},Or=()=>{const[e,i]=l.useState(0),{isMobile:n}=Di(),{close:s}=K(),o=[t.jsx(xi,{image:{component:t.jsx(Sv,{}),title:"Уведомления"},text:"Теперь стало проще отслеживать важную информацию, будь то новое сообщение, новости, оплаты или что-либо еще"},0),t.jsx(xi,{image:{component:t.jsx(Ev,{}),title:"Глобальный поиск"},text:`Поможет найти то, что нужно. Находится на главной странице или ${n?"в верхней части личного кабинета":"в меню"}`},1),t.jsx(xi,{image:{component:t.jsx($v,{}),title:"Раздел Новости"},text:"Виджет с новостями добавлен на главный экран, дизайн стал аккуратнее"},2),t.jsx(xi,{image:{component:t.jsx(Pv,{}),title:"Обновлены страницы"},text:"Интерфейс стал понятнее и чище"},3)];return t.jsxs(kv,{children:[t.jsx("div",{className:"content",children:o[e]}),t.jsx(Do,{amount:o.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(y,{onClick:()=>i(a=>Ke(a-1,o.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===o.length-1?t.jsx(y,{onClick:s,text:"Готово",width:"100%",background:w.blue.light1,textColor:"#fff"}):t.jsx(y,{onClick:()=>i(a=>Ke(a+1,o.length-1)),text:"Далее",width:"100%"})]})]})},gs=u(ai)`
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
`,Ov=()=>{const{allRoutes:e,currentPage:i}=Be.useMenu(),{data:{user:n}}=ce.useUser();if(!e||!n)return t.jsxs(gs,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(U,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(U,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(U,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(U,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(U,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"})]});const s=(n==null?void 0:n.user_status)==="stud"?_j:wj;return t.jsx(gs,{direction:"horizontal",horizontalAlign:"evenly",children:s.map(o=>t.jsx(kr,{...e[o],isCurrent:(i==null?void 0:i.id)===o},o))})},Av=(e,i,n)=>({isOpen:i,message:e,position:n}),xs={hints:[]},Cv=()=>M(Iv),Ar=T(),Cr=T(),Ir=T(),Iv=ee(xs).on(Ar,(e,{message:i,position:n})=>({hints:[...e.hints,Av(i,e.hints.length===0,n)]})).on(Cr,e=>({hints:e.hints.splice(1,e.hints.length)})).on(Ir,()=>({...xs})),Rv={useHint:Cv},Dv={evoke:Ar,close:Cr,clearStore:Ir},Nv=u.div`
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
`,Lv=()=>{const{hints:e}=Rv.useHint(),i=e[0];return i?t.jsx(Nv,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(J,{type:"hint",title:i.message,onClose:()=>Dv.close(),width:"100%",icon:null})}):null},zv=u.div`
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
`,Mv=50;function P_({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:d,offset:c=Mv}){const{data:{user:p}}=ce.useUser();let h="";const g=l.useCallback(x=>{const m=x.currentTarget.clientHeight,f=x.currentTarget.scrollHeight,b=x.currentTarget.scrollTop;f-c<b+m&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(ge,{text:"Нет результатов",children:d}):t.jsxs(zv,{onScroll:g,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((x,m)=>{var b,v;const f=r?h!==((b=x.fio)==null?void 0:b.charAt(0)):!1;return f&&(h=((v=x.fio)==null?void 0:v.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[f&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(W,{size:4,align:"left",children:h}),t.jsx(he,{})]}),i(x,(p==null?void 0:p.id.toString())===x.id,m)]})})}),n&&s&&t.jsx(ut,{width:"40px",height:"40px"}),n&&!s&&t.jsx(y,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}u.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const Fv=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=ce.useUser();return K(),t.jsxs(be,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(te,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(Pr,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})},Rr=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>me(a.title).includes(me(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),Hv=()=>{const e=I?" (Сервис временно недоступен)":"";return[{title:"Многофункциональный центр",links:[{link:Ur,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:cl,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:Wr,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:Vr,title:"Справка-вызов"},{link:nl,title:"Заявление на пересдачу для получения диплома с отличием"},{link:ll,title:"Запрос на изменение персональных данных"},{link:il,title:"Запрос на восстановление магнитного пропуска"},{link:Fr,title:"Уточнение паспортных данных"},{link:dl,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:pl,title:"Предоставление каникул в связи с окончанием университета"},{link:ul,title:"Предоставление академического отпуска"},{link:hl,title:"Отчисление по инициативе обучающегося"},{link:gl,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:Gr,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Yr,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:qr,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:Xr,title:"Предоставление права проживания льготной категории граждан"},{link:Jr,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Kr,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Zr,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:el,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:Qr,title:"Расторжение договора найма"},{link:tl,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:to,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:ol,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:al,title:"Заявка на материальную помощь"},{link:Br,title:"Оформить социальную стипендию"},{link:rl,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:I,links:[{link:sl,title:"Отправить документы воинского учета"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:I,links:[{link:an,title:"Оформить дополнительное соглашение к договору об обучении"},{link:an,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:nd,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:Hr,title:" Произвольный запрос"}]}]},Bv=()=>[{title:"Цифровые сервисы",links:[{link:fa,title:"Актуализация контактных данных"},{link:ma,title:"Анкета для сверки данных"},{link:ba,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:va,title:"Получение нового компьютерного оборудования"},{link:ya,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:ja,title:"Обслуживание принтеров, МФУ"},{link:_a,title:"Вопрос по СЭД Directum и 1С"},{link:wa,title:"Вопрос по Личному кабинету"},{link:ka,title:"Прочее ИТ-обслуживание"},{link:Ta,title:"Справка с места работы"},{link:Sa,title:"Справка на визу"},{link:Ea,title:"Справка о стаже работы"},{link:$a,title:"Справка о количестве неиспользованных дней отпуска"},{link:Pa,title:"Копия трудовой книжки"},{link:Oa,title:"Копии документов из личного дела"},{link:Aa,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"},{link:Ca,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:Da,title:"Справка по форме 2-НДФЛ"},{link:Na,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:La,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Прочее",links:[{link:Ia,title:"Произвольный запрос"},{link:to,title:"Вступить в Профсоюз",isExternalLink:!0}]},{title:"Экспедиция отдела контроля и делопроизводства",links:[{link:Ra,title:"Курьер"}]}],Uv=()=>[{title:"",links:[{link:za,title:"Заявление на трудоустройство по совместительству"},{link:Ma,title:"Заявление на увольнение"},{link:Ba,title:"Заявление о привлечении к работе в выходной день"},{link:Fa,title:"Заявление о предоставлении отпуска"},{link:Ha,title:"Заявление о переносе отпуска"},{link:Ua,title:"Заявление о диспансеризации"},{link:Wa,title:"Заявление на перевод"}]}],Wv=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),Vv=u.div`
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
`,O_=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=K(),s=e?Bv():Hv(),[o,a]=l.useState(""),[r,d]=l.useState(s);return t.jsxs(Vv,{children:[t.jsx(Io,{whereToSearch:s,searchEngine:Rr,setResult:d,placeholder:"Поиск заявок",setExternalValue:a}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(r??s).map(c=>t.jsxs("div",{className:"link-list",children:[t.jsx(W,{size:4,align:"left",bottomGap:!0,children:c.title}),!c.disabled&&t.jsx("div",{className:"links",children:c.links.map((p,h)=>{if(!(p.disabled||!Wv(i,p.exceptionalFormEducationList)))return p.isExternalLink?t.jsx("a",{href:p.link,target:p.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:p.title},p.link+h):t.jsx(Z,{to:p.link,onClick:n,children:p.title},p.link+h)})})]},c.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(ge,{text:`По запросу ${o} ничего не найдено`})]})})]})},Gv=u.div`
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
`,Yv=u.div`
    padding: 12px;
    box-shadow: var(--schedule-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,A_=({})=>{const{data:{listApplication:e},error:i}=je.useApplications(),{close:n}=K(),s=Uv(),[o,a]=l.useState(""),[r,d]=l.useState(s);return t.jsx(et,{load:()=>He.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsxs(Ni,{children:[t.jsx(J,{type:"info",title:"Информация",icon:t.jsx(Ie,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(Gv,{children:[t.jsx(W,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(Io,{whereToSearch:s,searchEngine:Rr,setResult:d,placeholder:"Поиск заявления",setExternalValue:a}),t.jsxs(Yv,{children:[(r??s).map(c=>t.jsx("div",{className:"link-list",children:!c.disabled&&t.jsx("div",{className:"links",children:c.links.map(p=>p.isExternalLink?t.jsx("a",{href:p.link,target:p.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:p.title},p.title):t.jsx(Z,{to:p.link,onClick:n,children:p.title},p.link))})},c.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(ge,{text:`По запросу ${o} ничего не найдено`})]})]})]})})},qv=e=>({...e.data.reduce((s,o)=>{var a;if(!o.value)return s;if(o.type==="checkbox-docs"){const r=(a=o.items)==null?void 0:a.reduce((d,c)=>{for(let p=0;p<c.files.length;p++)d[(c==null?void 0:c.fieldName)+`[${p}]`]=c.files[p];return d},{});s=Object.assign({},s,r)}else if(o.type==="select")s[o.fieldName]=o.isSpecificSelect?o.value.id:o.value.title||null;else{const r=!o.value||typeof o.value!="object";s[o.fieldName]=r?o==null?void 0:o.value:o.value.title}return s},{}),...(()=>{var o,a;const s={};if((o=e.documents)!=null&&o.fieldName)for(let r=0;r<e.documents.files.length;r++)s[((a=e.documents)==null?void 0:a.fieldName)+`[${r}]`]=e.documents.files[r];return s})()});u.div`
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
`;const fs={isOpen:!1,pages:[],currentPage:0},Jv=()=>M(Xv),Dr=T(),Nr=T(),Lr=T(),zr=T(),Xv=ee(fs).on(Dr,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on(Nr,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(Lr,(e,{value:i})=>({...e,currentPage:i})).on(zr,()=>({...fs})),Rn={useStory:Jv},ot={open:Dr,close:Nr,clearStore:zr,changeCurrentPage:Lr};u(Ve)`
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
`;const Kv=u.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`,C_=({fio:e})=>{const{open:i}=K();return t.jsx(Kv,{onClick:()=>i(t.jsx($r,{name:e,isMe:!1})),children:e})},Qv=u.div`
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
`,zi=Qv,Zv=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r})=>{const[d,c]=l.useState(r===void 0),[p,h]=l.useState(!a),[g,x]=l.useState(!1),m=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return q.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(_=>(_.confirmed=!0,{..._})),c(!1),h(!1)):q.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!d&&!n.find(_=>!!_.find(S=>!S.value&&S.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(_=>(_.confirmed=!0,{..._})),c(!1),h(!1)):q.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(_=>!!_.find(S=>!S.value&&S.required))&&!n.find(_=>!!_.find(S=>{var k;return S.value.id==="not-chosen"&&!!((k=S.items)!=null&&k.length)}))?(s(_=>(_.confirmed=!0,{..._})),c(!1),h(!1)):q.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(_=>(_.confirmed=!0,{..._})),c(!1),h(!1)):q.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!d&&!n.find(_=>!_.value&&_.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(_=>(_.confirmed=!0,{..._})),c(!1),h(!1)):q.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(_=>!_.value&&_.required)&&!n.find(_=>{var S;return _.value===null&&!!((S=_.items)!=null&&S.length)})?(s(_=>(_.confirmed=!0,{..._})),c(!1),h(!1)):q.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},f=()=>{s(_=>{const S=_.default[0].map(k=>({fieldName:k.fieldName??"",title:k.title,value:k.type==="select"&&(k!=null&&k.items)?null:"",type:k.type,items:k.items,width:k.width,required:k.required}));return{..._,data:[..._.data,S]}})},b=_=>{s(S=>{const k=S.data.filter((X,O)=>_!==O);return{...S,data:k}})},v=_=>{s(S=>(S.documents&&(S.documents.files=[..._]),{...S}))},P=()=>{i&&(i.value=!i.value),s(_=>({..._,optionalCheckbox:i}))};return l.useEffect(()=>{h(!g&&o?!1:!a)},[g,a]),{openArea:p,changeInputArea:d,included:g,setOpenArea:h,setIncluded:x,setChangeInputArea:c,handleRemove:b,handleAddNew:f,handleLoadFiles:v,handleConfirm:m,handleCheckbox:P}},ey=u.div`
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
`,ty=u.div``,iy=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs(ty,{children:[t.jsx(W,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:d,checkboxCondition:c,maxFileSizeInMegaBytes:p},h)=>t.jsx(Gu,{checkbox:{checked:o,setChecked:()=>n(o,h),text:a},loadfile:{files:r,maxFiles:d,maxFileSizeInMegaBytes:p,isActive:!0,setFiles:g=>s(g,h)},docVisible:c==="straight"?o:!o},a))]}),ny=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(W,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(be,{children:[!a&&t.jsx(Qe,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:d,title:c}=r;return t.jsx(Qe,{text:c,checked:d===(s==null?void 0:s.id),setChecked:()=>o({id:d,title:a?d.toString():c})},d)})]})]}),sy=u.div`
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
`,oy=({title:e,value:i,visible:n})=>n?t.jsxs(sy,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,ay=u.div`
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
`,ry=({text:e,checked:i,setChecked:n,visible:s=!0,isActive:o=!0,invisibleOnFalse:a=!1})=>s?t.jsxs(ay,{checked:i,invisibleOnFalse:a,onClick:()=>{o&&n(!i)},isActive:o,className:"checkbox",children:[t.jsx(y,{width:"25px",height:"25px",onClick:()=>null,icon:i||a?t.jsx(Ls,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(zs,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"hr-checkbox-text",children:e})]}):null,ly=u.div`
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
`,cy=({title:e,visible:i})=>i?t.jsx(ly,{children:t.jsx("span",{className:"title",children:e})}):null,dy=u.div`
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
`,py=u.ul`
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
`,uy=u.li`
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
`,hy=({value:e,setValue:i,leftIcon:n,title:s,required:o,width:a,minWidth:r,placeholder:d="Начните ввод...",danger:c,isActive:p=!0,inputAppearance:h=!0,suggestions:g})=>{const[x,m]=l.useState([]),[f,b]=l.useState(!0);return l.useEffect(()=>{if(e){const v=g.filter(P=>P.toLowerCase().includes(e.toLowerCase()));m(v)}else m([])},[e,g]),t.jsxs(dy,{leftIcon:!!n,isActive:p,inputAppearance:h,width:a,danger:c,minWidth:r,children:[t.jsx(W,{size:5,align:"left",visible:!!s,bottomGap:"5px",required:o,children:s}),t.jsxs("div",{children:[t.jsx("input",{type:"text",value:e,onChange:v=>{i(v.target.value),b(!0)},placeholder:d}),x.length>0&&t.jsx(py,{width:"100%",isOpen:f,className:f?"open":"close",itemsAmount:x.length,title:s,children:x.map((v,P)=>t.jsx(uy,{isSelected:!1,onClick:()=>{i(v),m([]),b(!1)},children:v},P))})]})]})},gy=u.div`
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
`,xy=({title:e,visible:i})=>i?t.jsx(gy,{children:t.jsx("span",{className:"title",children:e})}):null,ms=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,suggestions:d,items:c,title:p,documents:h,changeInputArea:g,setData:x,mask:m,editable:f,placeholder:b,autocomplete:v,isSpecificRadio:P,specialType:_,specialFieldsNameConfig:S,minValueInput:k,maxValueInput:X,maxValueLength:O,diff:L,visible:se,onChange:R,onKeyPress:ae,onBlur:Ne,onKeyDown:Se,onKeyUp:It,onFocus:Rt}=e,Ee=f??(g&&!h),[it,Xl]=l.useState(!0),gt=(B,re,xt)=>{R==null||R(B),x(xe=>(Array.isArray(xe.data[0])?xe.data[re][xt??0].value=B:xe.data[re].type==="checkbox-docs"?xe.data[re].items[xt??0].value=!!B:xe.data[re].value=B,{...xe}))},Kl=(B,re,xt)=>{R==null||R(B),x(xe=>(Array.isArray(xe.data[0])?xe.data[re][xt??0].value=B:xe.data[re].value=B,{...xe}))},Ql=(B,re,xt)=>{x(xe=>(xe.data[re].items[xt??0].files=B,{...xe}))},Zl=B=>{R==null||R(B),x(re=>(re.data[o].value=B,{...re}))},ec=B=>{R==null||R(B),ae==null||ae(B),Ne==null||Ne(B),Se==null||Se(B),It==null||It(B),Rt==null||Rt(B),x(re=>(re.data[o].value=B,{...re}))};return S&&_&&!Object.values(S).includes(_)?null:r!=="select"&&r!=="multiselect"||!c?r==="checkbox"?t.jsx(Qe,{text:p,isActive:Ee,checked:i,setChecked:B=>gt(B,o,a)}):r==="hr-checkbox"?t.jsx(ry,{text:p,isActive:Ee,checked:i,setChecked:B=>gt(B,o,a)}):r==="auto-complete-input"?t.jsx(hy,{title:p,suggestions:d??[],required:n,value:i,placeholder:b??p,setValue:B=>gt(B,o,a)}):r==="textarea"?t.jsx(Xp,{value:i,title:p,setValue:B=>gt(B,o,a),isActive:Ee,textAreaAppearance:Ee,placeholder:b??p,required:n,width:s}):r==="checkbox-docs"?t.jsx(iy,{title:p,items:c,setChecked:(B,re)=>gt(!B,o,re),setFiles:(B,re)=>Ql(B,o,re)}):r==="date-interval"?t.jsx(zo,{title:p,required:n,dates:i,setDates:B=>ec(B),valid:it,setValid:Xl,minValue:k,diff:L}):r==="simple-text"?t.jsx(oy,{title:p,value:i,visible:se}):r==="text-warning"?t.jsx(xy,{title:p,visible:se}):r==="text-header"?t.jsx(cy,{title:p,visible:se}):r==="radio"?t.jsx(ny,{buttons:c,title:p,required:n,current:i,setCurrent:Zl,isSpecificRadio:P}):t.jsx(Xe,{value:i,title:p,minValue:k,maxValue:X,maxLength:O,setValue:B=>gt(B,o,a),type:r,isActive:Ee,inputAppearance:Ee,placeholder:b??p,required:n,mask:m,width:s,autocomplete:v}):t.jsx(Bo,{items:c,setSelected:B=>Kl(B,o,a),selected:i,isActive:Ee,title:p,width:s,multiple:r==="multiselect",required:n})},fy=u.div`
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

    @media (max-width: 550px) {
        background: transparent;
        position: relative;
    }
`,my=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r,openArea:d})=>t.jsxs(fy,{onClick:()=>!r&&(i||!n)&&o(c=>!c),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(W,{size:3,align:"left",icon:s!==void 0?s?t.jsx(Bs,{}):t.jsx(Us,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(Qe,{checked:i,setChecked:a})]}),t.jsx(y,{icon:t.jsx(ve,{}),onClick:()=>null,background:"transparent",flipped:d})]}),by=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(y,{onClick:()=>n(a=>(a.confirmed=!1,{...a})),text:"Отменить",icon:t.jsx(qe,{}),textColor:w.red.main,hoverBackground:w.red.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(y,{onClick:o,text:"Сохранить",icon:t.jsx(Uc,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(y,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(qe,{}),textColor:w.red.main,hoverBackground:w.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(y,{onClick:o,text:"Подтвердить",icon:t.jsx(Wc,{}),textColor:w.green.main,hoverBackground:w.green.transparent3,background:"transparent",width:"130px"}),t.jsx(y,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(Vc,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"})]}),vy=e=>e.confirmed===void 0?null:t.jsx(be,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(by,{...e,confirmed:e.confirmed})}),yy=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:d,optional:c=!1,addNew:p=!1,divider:h,collapsed:g,links:x,specialFieldsNameConfig:m})=>{const{openArea:f,changeInputArea:b,included:v,setOpenArea:P,setIncluded:_,setChangeInputArea:S,handleRemove:k,handleAddNew:X,handleLoadFiles:O,handleConfirm:L,handleCheckbox:se}=Zv({documents:a,optionalCheckbox:o,data:s.filter(Boolean),setData:r,optional:c,collapsed:g,confirmed:d});return t.jsxs(t.Fragment,{children:[t.jsxs(ey,{openArea:f,children:[t.jsx(my,{title:e,included:v,optional:c,confirmed:d,setOpenArea:P,setIncluded:_,collapsed:g}),t.jsxs("div",{className:"inputs",children:[t.jsx(J,{type:"alert",visible:!!n,icon:t.jsx(qt,{}),children:n}),t.jsx(J,{type:"info",visible:!!i&&(b||d===void 0),title:"Как заполнить",icon:t.jsx(Ie,{}),children:i}),Array.isArray(s[0])?s.map((R,ae)=>t.jsxs("div",{className:"data-line",children:[R.map((Ne,Se)=>t.jsx(ms,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:ae,indexJ:Se,specialFieldsNameConfig:m,...Ne},Se)),b&&p&&t.jsx(y,{icon:t.jsx(Gc,{}),textColor:w.red.main,onClick:()=>k(ae),background:"transparent",isActive:!(o!=null&&o.value)})]},ae)):s.map((R,ae)=>t.jsx(ms,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:ae,specialFieldsNameConfig:m,...R},ae)),p&&b&&t.jsx(y,{icon:t.jsx(Yc,{}),text:"Добавить",onClick:X,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&b&&t.jsx(Lo,{files:a.files,setFiles:R=>O(R),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(x==null?void 0:x.length)&&x.map(R=>l.createElement(pu,{...R,key:R.title})),t.jsx(Qe,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||b,checked:(o==null?void 0:o.value)??!1,setChecked:se}),t.jsx(vy,{confirmed:d,changeInputArea:b,setData:r,setChangeInputArea:S,handleConfirm:L})]})]}),h&&t.jsx(he,{})]})},jy=u.div`
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
`,_y=u.div`
    display: flex;
    margin-bottom: -20px;
`,wy=u.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,ky=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(d=>({...d,[i]:bt(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(_y,{children:e.map((r,d)=>t.jsxs(wy,{lastElement:d===e.length-1,children:[t.jsx(jy,{current:d===i,onClick:()=>a(d),reached:s[d],children:d+1}),d!==e.length-1&&t.jsx(zp,{direction:"horizontal",reached:s[d],filled:100,distance:40})]},d))}),t.jsx(t.Fragment,{children:e[i].map((r,d)=>l.createElement(yy,{...r.dataForm,setData:r.setDataForm,key:d}))})]})},Ty=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),Sy=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Ey=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),$y=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(p=>{if(o)return qv(p);if(Array.isArray(p.data[0])){const h=p.data.map(x=>Object.assign({},...x==null?void 0:x.map(m=>bs(m)))),g={};return g[e]=JSON.stringify(h),g}else return p.data.map(h=>bs(h))}).flat(),r=i.map(p=>{var g,x;const h={};if((g=p.documents)!=null&&g.fieldName)for(let m=0;m<p.documents.files.length;m++)h[((x=p.documents)==null?void 0:x.fieldName)+`[${m}]`]=p.documents.files[m];return h}),d=i.map(p=>{var g,x;const h={};return(g=p.optionalCheckbox)!=null&&g.fieldName&&(h[(x=p.optionalCheckbox)==null?void 0:x.fieldName]=p.optionalCheckbox.value),h}),c=Object.assign({},...a,...r,...d);try{await He.postApplicationFx({formId:e,args:c}),n(!1),s(!0)}catch(p){n(!1),q.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${p}`,type:"failure",time:3e4})}},bs=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=Py(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},Py=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,Oy=u.div`
    display: flex;
    align-items: ${({isDone:e})=>e?"center":"flex-start"};
    justify-content: center;
    width: 100%;
    height: ${({isDone:e})=>e&&"100%"};
    padding: 10px;
    color: var(--text);

    @media (max-width: 1000px) {
        margin-top: 35px;
    }
`;var Mr=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.ACCOMMODATION_FOR_GRADUATES="accommodation_for_graduates",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(Mr||{}),Ay=(e=>(e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e))(Ay||{});const Cy=[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}],Iy=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],Ry=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:Iy},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:Cy}]}},Dy=()=>{var R;const[e,i]=l.useState(null),[n,s]=l.useState(ui.kvdCert),[o,a]=l.useState(ui.fluorographyCert),[r,d]=l.useState(ui.vichRwCert),[c,p]=l.useState(ui.graftCert),{data:{dataUserApplication:h}}=je.useApplications(),{data:{user:g}}=ce.useUser(),[x,m]=l.useState(!1),[f,b]=l.useState(!1),[v,P]=l.useState(null),[_,S]=l.useState(null),[k,X]=l.useState(null),O=x??!1;if((g==null?void 0:g.educationForm)!=="Недоступен")return t.jsx(ge,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const L=!!e&&!!_&&!!v&&!!k;if(l.useEffect(()=>{h&&(i(Ry(h)),P(Sy()),S(Ey()),X(Ty()))},[h]),!L)return null;const se=[[{dataForm:e,setDataForm:i}],[{dataForm:_,setDataForm:S}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:d}],[{dataForm:c,setDataForm:p}]];return t.jsx(Oy,{isDone:O,children:t.jsxs(cu,{children:[t.jsx(W,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(ky,{stagesConfig:se}),t.jsx(wt,{text:"Отправить",action:()=>$y(Mr.USG_GETHOSTEL_OOZ,[e,_,v,k,n,o,r,c],b,m),isLoading:f,completed:x,setCompleted:m,repeatable:!1,buttonSuccessText:"Отправлено",isDone:O,isActive:(((R=e.optionalCheckbox)==null?void 0:R.value)??!0)&&bt(e)&&bt(o)&&bt(r)&&bt(c)&&bt(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Ny=l.lazy(()=>j(()=>import("./index-e3178993.js"),["assets/index-e3178993.js","assets/vendor-e9654bfa.js"])),Ly=l.lazy(()=>j(()=>import("./index-c51d7bc4.js"),["assets/index-c51d7bc4.js","assets/vendor-e9654bfa.js"])),zy=l.lazy(()=>j(()=>import("./index-ea31a7b2.js"),["assets/index-ea31a7b2.js","assets/vendor-e9654bfa.js"])),My=l.lazy(()=>j(()=>import("./index-cfc67ba8.js"),["assets/index-cfc67ba8.js","assets/vendor-e9654bfa.js"])),Fy=l.lazy(()=>j(()=>import("./index-0f9f8cae.js"),["assets/index-0f9f8cae.js","assets/vendor-e9654bfa.js"])),Hy=l.lazy(()=>j(()=>import("./index-bfa85ae8.js"),["assets/index-bfa85ae8.js","assets/vendor-e9654bfa.js","assets/get-method-obtaining-fields-431242aa.js","assets/find-current-in-select-ba4611d5.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),By=l.lazy(()=>j(()=>import("./index-f80a9212.js"),["assets/index-f80a9212.js","assets/vendor-e9654bfa.js","assets/get-method-obtaining-fields-431242aa.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Uy=l.lazy(()=>j(()=>import("./index-e3dbcff8.js"),["assets/index-e3dbcff8.js","assets/vendor-e9654bfa.js","assets/get-method-obtaining-fields-431242aa.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Wy=l.lazy(()=>j(()=>import("./index-07d89bbf.js"),["assets/index-07d89bbf.js","assets/vendor-e9654bfa.js"])),Vy=l.lazy(()=>j(()=>import("./index-9ff9d51c.js"),["assets/index-9ff9d51c.js","assets/vendor-e9654bfa.js","assets/index-f0d04154.js"])),Gy=l.lazy(()=>j(()=>import("./index-9b015766.js"),["assets/index-9b015766.js","assets/vendor-e9654bfa.js"])),Yy=l.lazy(()=>j(()=>import("./index-91a8ca15.js"),["assets/index-91a8ca15.js","assets/vendor-e9654bfa.js"])),qy=l.lazy(()=>j(()=>import("./index-016c8d22.js"),["assets/index-016c8d22.js","assets/vendor-e9654bfa.js"])),Jy=l.lazy(()=>j(()=>import("./index-1545870c.js"),["assets/index-1545870c.js","assets/vendor-e9654bfa.js"])),Xy=l.lazy(()=>j(()=>import("./index-b741c66f.js"),["assets/index-b741c66f.js","assets/vendor-e9654bfa.js"])),Ky=l.lazy(()=>j(()=>import("./index-e8ea0b19.js"),["assets/index-e8ea0b19.js","assets/vendor-e9654bfa.js"])),Qy=l.lazy(()=>j(()=>import("./index-c2e74dc8.js"),["assets/index-c2e74dc8.js","assets/vendor-e9654bfa.js"])),Zy=l.lazy(()=>j(()=>import("./index-9b76e05b.js"),["assets/index-9b76e05b.js","assets/vendor-e9654bfa.js"])),ej=l.lazy(()=>j(()=>import("./index-e652f630.js"),["assets/index-e652f630.js","assets/vendor-e9654bfa.js"])),tj=l.lazy(()=>j(()=>import("./index-2c9fdd24.js"),["assets/index-2c9fdd24.js","assets/vendor-e9654bfa.js"])),ij=l.lazy(()=>j(()=>import("./index-eb7d210d.js"),["assets/index-eb7d210d.js","assets/vendor-e9654bfa.js"])),nj=l.lazy(()=>j(()=>import("./index-8e756546.js"),["assets/index-8e756546.js","assets/vendor-e9654bfa.js"])),sj=l.lazy(()=>j(()=>import("./index-7ddf1b3f.js"),["assets/index-7ddf1b3f.js","assets/vendor-e9654bfa.js"])),oj=l.lazy(()=>j(()=>import("./index-21e7b524.js"),["assets/index-21e7b524.js","assets/vendor-e9654bfa.js"])),aj=l.lazy(()=>j(()=>import("./index-259f4ef5.js"),["assets/index-259f4ef5.js","assets/vendor-e9654bfa.js"])),rj=l.lazy(()=>j(()=>import("./index-a01e7b83.js"),["assets/index-a01e7b83.js","assets/vendor-e9654bfa.js","assets/get-method-obtaining-fields-431242aa.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),lj=l.lazy(()=>j(()=>import("./index-fbcc7e03.js"),["assets/index-fbcc7e03.js","assets/vendor-e9654bfa.js","assets/get-method-obtaining-fields-431242aa.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),cj=l.lazy(()=>j(()=>import("./index-6a2ab7a3.js"),["assets/index-6a2ab7a3.js","assets/vendor-e9654bfa.js"])),dj=l.lazy(()=>j(()=>import("./index-14fc0a53.js"),["assets/index-14fc0a53.js","assets/vendor-e9654bfa.js"])),pj=l.lazy(()=>j(()=>import("./index-7c322555.js"),["assets/index-7c322555.js","assets/vendor-e9654bfa.js"])),uj=l.lazy(()=>j(()=>import("./index-387ff600.js"),["assets/index-387ff600.js","assets/vendor-e9654bfa.js"])),hj=l.lazy(()=>j(()=>import("./index-53b9997e.js"),["assets/index-53b9997e.js","assets/vendor-e9654bfa.js"])),gj=l.lazy(()=>j(()=>import("./index-e25bcf00.js"),["assets/index-e25bcf00.js","assets/vendor-e9654bfa.js"])),xj=l.lazy(()=>j(()=>import("./index-12f29801.js"),["assets/index-12f29801.js","assets/vendor-e9654bfa.js"])),fj=l.lazy(()=>j(()=>import("./index-38eb2d9b.js"),["assets/index-38eb2d9b.js","assets/vendor-e9654bfa.js","assets/get-divisions-96cfa1b1.js"])),E="/applications",mj="/application-for-superior-room",bj="/acad-performance",vj="/dormitory",Fr=E+"/clarification-of-passport-data",Hr=E+"/arbitrary-request",Br=E+"/social-scollarship",Ur=E+"/certificate-of-attendance",Wr=E+"/social-agencies",Vr=E+"/paper-call",Gr=E+"/regular-accommodation",Yr=E+"/full-time-part-time-form",qr=E+"/accommodation-correspondence-form",Jr=E+"/academic-leave-accommodation",Xr=E+"/preferential-accommodation",Kr=E+"/family-room",Qr=E+"/termination-of-employment-contract",Zr=E+"/relocation-inside-hostel",el=E+"/relocation-to-another-hostel",tl=E+"/accommodation-for-graduates",an=E+"/payment-recipient",il=E+"/restoring-the-magnetic-pass",nl=E+"/retake-for-diploma",sl=E+"/military-registration-documents",ol=E+"/financial-support",al=E+"/financial-assistance",rl=E+"/increased-state-academic-scholarship",ll=E+"/changing-personal-data",cl=E+"/student-status",dl=E+"/state-accreditation",yj=E+"/military-registration-card",pl=E+"/holidays-after-training",ul=E+"/provision-academic-leave",hl=E+"/independently-deducted",gl=E+"/extension-attestation",mt=()=>fe({oldVersionUrl:"/sprav"}),vt=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(C,{}),path:E,Component:Vy,color:"red",isTemplate:!1,group:"OTHER",pageSize:"big",keywords:["справки","справка","заявления","заявление"]},...hr,payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(lt,{}),path:wi,Component:$n,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(zn,{}),path:vj,Component:zy,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(qc,{}),path:bj,Component:Ly,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Ws,{}),path:cr,Component:Gy,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(Jc,{}),path:ur,Component:mn,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(zn,{}),path:mj,Component:Ny,color:"blue",isTemplate:!1,group:"GENERAL",show:!0}}),rn=e=>{var i,n,s;return{...gr,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(vi,{}),path:Fr,Component:My,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(vi,{}),path:Hr,Component:fj,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(Y,{}),path:Br,Component:I?mt:Fy,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(Y,{}),path:Ur,Component:Hy,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(Y,{}),path:Wr,Component:By,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(Y,{}),path:Vr,Component:Uy,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:t.jsx(Y,{}),path:Gr,Component:Wy,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:t.jsx(Y,{}),path:Yr,Component:Dy,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:t.jsx(Y,{}),path:qr,Component:gj,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:t.jsx(Y,{}),path:Jr,Component:Yy,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:t.jsx(Y,{}),path:Xr,Component:qy,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:t.jsx(Y,{}),path:Kr,Component:xj,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:t.jsx(Y,{}),path:Qr,Component:Jy,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:t.jsx(Y,{}),path:Zr,Component:I?()=>t.jsx(fe,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение внутри общежития будет осуществляться с 01.10.2023"}):Xy,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие",icon:t.jsx(Y,{}),path:el,Component:I?()=>t.jsx(fe,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение в другое общежитие завершен 15.06.2023"}):Qy,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"accommodation-for-graduates":{id:"accommodation-for-graduates",title:"Предоставление права проживания в каникулярный период",icon:Y,path:tl,Component:["4","5","6"].includes((e==null?void 0:e.course)??"")||(n=(i=e==null?void 0:e.status)==null?void 0:i.toLocaleLowerCase())!=null&&n.includes("окончил")||((s=e==null?void 0:e.degreeLevel)==null?void 0:s.toLocaleLowerCase())==="магистратура"&&(e==null?void 0:e.course)==="2"?Ky:()=>t.jsx(fe,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:t.jsx(Y,{}),path:an,Component:Zy,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:t.jsx(Y,{}),path:il,Component:ej,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:t.jsx(Y,{}),path:sl,Component:I?mt:nj,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:t.jsx(Y,{}),path:nl,Component:ij,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:t.jsx(Y,{}),path:rl,Component:I?mt:tj,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:t.jsx(Y,{}),path:ol,Component:I?mt:sj,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:t.jsx(Y,{}),path:al,Component:I?mt:oj,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:t.jsx(Y,{}),path:ll,Component:aj,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:t.jsx(Y,{}),path:cl,Component:rj,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:t.jsx(Y,{}),path:dl,Component:lj,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(Y,{}),path:pl,Component:cj,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(Y,{}),path:ul,Component:dj,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(Y,{}),path:hl,Component:pj,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(Y,{}),path:gl,Component:uj,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:E},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(Y,{}),path:yj,Component:I?mt:hj,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:E}}},vs=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),jj=["settings","profile","chat","schedule","payments","project-activity","all-students"],_j=["home","schedule","acad-performance","all","profile"],wj=["home","schedule","hr-applications","all","profile"],kj=e=>{var a,r;if(!e)return[];const n=((r=(a=JSON.parse(localStorage.getItem(G.NewSettings)||"{}")[e.id])==null?void 0:a["settings-customize-menu"])==null?void 0:r.property.pages)??$i,s=eo.filter(d=>!n.includes(d));return(e==null?void 0:e.user_status)==="staff"&&n.some(d=>!s.includes(d))?[...n,...s]:n},ys={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},Tj=()=>M(Ej),xl=T(),fl=T(),ml=T(),bl=T(),Sj=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},Lt=e=>{if(!e)return tn();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",d=Object.entries(tn()).filter(([c])=>c!==r||c===r&&a);return Object.fromEntries(d)},Ej=ee(ys).on(xl,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(fl,()=>({...ys})).on(ml,(e,{user:i,adminLinks:n,homeRoutes:s})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?Lt(n)[window.location.hash.slice(2,window.location.hash.length)]:vt()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...Lt(n),...nn()}:{...vt(),...rn(i)},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?Lt(n):vt(),leftsideBarRoutes:vs(kj(i),(i==null?void 0:i.user_status)==="staff"?Lt(n):vt()),homeRoutes:vs(s??JSON.parse(localStorage.getItem(G.HomeRoutes)??JSON.stringify(jj)),(i==null?void 0:i.user_status)==="staff"?{...Lt(n),...nn()}:{...vt(),...rn(i)})})).on(bl,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:Sj(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),Be={useMenu:Tj},De={changeOpen:xl,clearStore:fl,defineMenu:ml,changeNotifications:bl},$j=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:dr,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:Ct,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:wi,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:wi,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:_i,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:oe,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:xa,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:Pn,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:E,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:tr,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},Pj={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},Mi=z(async({settings:e})=>{try{const{data:i}=await qd(),n={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"};return i.filter(({type:s})=>e[n[s]]).map(({id:s,type:o,title:a,text:r})=>$j(o,s,a,r))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),Oj=z(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&De.changeNotifications({page:i,notifications:1})})}),Aj=z(({notifications:e})=>{const{pageId:i}=e[0];i&&De.changeNotifications({page:i,notifications:1})}),Fi=z(async({id:e,pageId:i})=>{try{return await Jd(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),Hi=z(async()=>{try{await Xd()}catch{throw new Error("Не удалось скрыть все уведомления")}}),Cj=e=>{e&&De.changeNotifications({page:e,notifications:0})},vl=T(),yl=T(),jl=T(),_l=T(),wl=T(),kl=T(),Tl=T(),ne=ee(Pj).reset(Tl);Ue({from:yl,to:Mi});D({clock:Mi.pending,source:ne,fn:(e,i)=>({...e,loading:i}),target:ne});D({clock:Mi.failData,source:ne,fn:(e,i)=>({...e,error:i.message}),target:ne});D({clock:Mi.doneData,source:ne,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[ne,Oj]});D({clock:vl,source:ne,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[ne,Aj]});Ue({from:_l,to:Fi});D({clock:Fi.doneData,source:ne,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(Cj(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:ne});D({clock:Fi.failData,source:ne,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:ne});D({clock:Fi.pending,source:ne,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:ne});Ue({from:wl,to:Hi});D({clock:Hi.pending,source:ne,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:ne});D({clock:Hi.failData,source:ne,fn:(e,i)=>({...e,clearAllError:i.message}),target:ne});D({clock:Hi.doneData,source:ne,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:ne});D({clock:jl,source:ne,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:ne});D({clock:kl,source:ne,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:ne});const Ij=()=>we(ne),ht={initialize:yl,add:vl,clearById:_l,clearVisibleById:jl,clearAll:wl,clearAllVisible:kl,clearStore:Tl},ze={useLkNotifications:Ij},Rj=Object.freeze(Object.defineProperty({__proto__:null,events:ht,selectors:ze},Symbol.toStringTag,{value:"Module"})),js={messages:null,error:null},Dj=()=>({data:M(_s).messages,loading:M(Wt.pending),error:M(_s).error}),Wt=z(async()=>{try{return(await _d("1")).data}catch(e){throw new Error(e)}}),Sl=T(),_s=ee(js).on(Wt,e=>({...e,error:null})).on(Wt.doneData,(e,i)=>({...e,messages:i})).on(Wt.failData,(e,i)=>({...e,error:i.message})).on(Sl,()=>({...js})),Nj={useMessages:Dj},Lj={getMessagesFx:Wt},zj={clearStore:Sl},Mj=Object.freeze(Object.defineProperty({__proto__:null,effects:Lj,events:zj,selectors:Nj},Symbol.toStringTag,{value:"Module"})),ws={type:null,personalNotifications:null,error:null,completed:!1},Fj=()=>({data:M(_t).personalNotifications,loading:M(jt.pending),error:M(_t).error,completed:M(_t).completed}),Hj=()=>M(_t).type,El=T(),$l=z(e=>e),jt=z(async()=>{const{type:e}=_t.getState();if(e==="notifications")try{return(await no()).data}catch(i){throw new Error(i)}try{return{docs:(await so()).data}}catch(i){throw new Error(i)}}),Ti=z(async e=>{const{type:i}=_t.getState(),n=i==="notifications"?zd:Fd;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),Pl=T(),_t=ee(ws).on($l,(e,i)=>({...e,type:i})).on(jt,e=>({...e,error:null})).on(jt.doneData,(e,i)=>({...e,personalNotifications:i})).on(jt.failData,(e,i)=>({...e,error:i.message})).on(Ti.doneData,e=>({...e})).on(Ti.failData,(e,i)=>({...e,error:i.message})).on(El,(e,i)=>({...e,completed:i.completed})).on(Pl,()=>({...ws}));Ti.doneData.watch(()=>jt());const Bj={usePersonalNotifications:Fj,useType:Hj},Uj={setNotificationsType:$l,getPersonalNotificationsFx:jt,viewPersonalNotificationsFx:Ti},Wj={changeCompleted:El,clearStore:Pl},Vj=Object.freeze(Object.defineProperty({__proto__:null,effects:Uj,events:Wj,selectors:Bj},Symbol.toStringTag,{value:"Module"})),Gj=si({api:{get:Nd}}),Yj=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s]=e.split(" - "),[o,a]=s.split(":");return+o*60+ +a-(n.getHours()*60+n.getMinutes());case"days":const r=new Date(e);return Math.ceil(Math.floor((r.getTime()-new Date().getTime())/1e3/60/60)/24)}},ks=e=>e&&Object.keys(e).length?Object.keys(e).findIndex(n=>{const s=Yj(n,"days");return s>=0&&s<30})+1:0,qj=(e,i)=>e&&e[0]?Object.keys(e[0]).find((n,s)=>s+1===i)||"sunday":e&&e[2]?"":"sunday";var ln=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(ln||{});const Ol=e=>new Date(e.setHours(0,0,0,0)),yt=new Date,Ts=1,Ss=yt.getDay(),cn=Ol(new Date(yt.valueOf()-(Ss<=0?7-Ts:Ss-Ts)*864e5)),Jj=Ol(new Date(cn.valueOf()+6*864e5)),Xj=e=>{const[i,n]=e.dateInterval.split("-").map(g=>g.trim()),[s,o]=i.split(" "),[a,r]=(n==null?void 0:n.split(" "))??[null,null],d=ln[o],c=ln[r]||d,p=new Date(`${d}/${s}/${c>=d?yt.getFullYear():yt.getFullYear()-1}`),h=a&&c?new Date(`${c}/${a}/${c>=d?yt.getFullYear():yt.getFullYear()+1}`):null;return!!(p<=Jj&&(!h&&cn<=p||h&&h>=cn))},Kj=e=>e.filter(i=>Xj(i)),Qj=async(e,i)=>{const n=typeof e=="string",s=!n&&!(e!=null&&e.subdivisions)||!!(i!=null&&i.length),o=s?await fd(i??e.group??""):n?await Mn(e):await Mn(Xi({name:e.name,surname:e.surname,patronymic:e.patronymic})),a=s?await md():n?await Fn(e):await Fn(Xi({name:(e==null?void 0:e.name)??"",surname:(e==null?void 0:e.surname)??"",patronymic:(e==null?void 0:e.patronymic)??""})),r={},d={},c={monday:{lessons:[]},tuesday:{lessons:[]},wednesday:{lessons:[]},thursday:{lessons:[]},friday:{lessons:[]},saturday:{lessons:[]}};if(o.data.status!=="error"){for(const p in o.data)if(p!=="Sunday"){const h=p.charAt(0).toLowerCase()+p.slice(1);d[h]=s?o.data[p]:{lessons:o.data[p]}}for(const[p,h]of Object.entries(d))c[p].lessons=Kj(h.lessons)}if(a.data.status!=="error")for(const p in a.data)s?r[p]=a.data[p]:a.data[p].length&&(r[p]={lessons:a.data[p]});return{0:Object.keys(o.data).length&&o.data.status!=="error"?c:null,1:Object.keys(o.data).length&&o.data.status!=="error"?d:null,2:Object.keys(a.data).length&&Object.values(r).find(p=>!!p.lessons.length)&&a.data.status!=="error"?r:null,3:null}},Es={schedule:null,currentModule:"0",currentDay:new Date().getDay(),currentDayString:"",currentChosenDay:new Date().getDay(),view:"full",error:null},Zj=()=>({data:M($s),loading:M(Vt.pending),error:M($s).error}),Vt=z(async({user:e,group:i})=>{try{return Qj(e,i)}catch{throw new Error("Не удалось загрузить расписание")}}),Al=T(),Cl=T(),Il=T(),Rl=T(),$s=ee(Es).on(Vt,e=>({...e,schedule:null,error:null})).on(Vt.doneData,(e,i)=>({...e,schedule:i,currentModule:i[0]?"0":i[1]?"1":i[2]?"2":i[3]?"3":"0",currentDayString:qj(i,e.currentDay),currentChosenDay:ks(i[2]),currentDay:i[0]?new Date().getDay():ks(i[2])})).on(Vt.failData,e=>({...e,error:"Не удалось загрузить расписание"})).on(Al,(e,i)=>({...e,currentModule:i.currentModule.toString()})).on(Cl,(e,i)=>({...e,view:i.view})).on(Il,(e,i)=>({...e,currentChosenDay:i.day})).on(Rl,()=>({...Es})),e1={useSchedule:Zj},t1={changeCurrentModule:Al,changeView:Cl,changeCurrentChosenDay:Il,clearStore:Rl},i1={getScheduleFx:Vt},n1=Object.freeze(Object.defineProperty({__proto__:null,effects:i1,events:t1,selectors:e1},Symbol.toStringTag,{value:"Module"})),Ps={superiorRoom:null,error:null},s1=()=>({data:M(Os).superiorRoom,loading:M(Gt.pending),error:M(Os).error}),Dl=T(),o1=z(async e=>{});Ue({from:Dl,to:o1});const Gt=z(async()=>{try{return(await Sd()).data}catch{throw new Error("Не удалось загрузить раздел")}}),Nl=T(),Os=ee(Ps).on(Gt,e=>({...e,error:null})).on(Gt.doneData,(e,i)=>({...e,superiorRoom:i})).on(Gt.failData,(e,i)=>({...e,error:i.message})).on(Nl,()=>({...Ps})),a1={useSuperiorRoom:s1},r1={getSuperiorRoomFx:Gt},l1={postSuperiorRoom:Dl,clearStore:Nl},c1=Object.freeze(Object.defineProperty({__proto__:null,effects:r1,events:l1,selectors:a1},Symbol.toStringTag,{value:"Module"})),As={teacherDataVerification:null,error:null,completed:!1},d1=()=>({data:M(qi).teacherDataVerification,loading:M(Yt.pending),error:M(qi).error,completed:M(qi).completed}),Ll=T(),zl=T(),p1=z(async e=>{try{return(await Wd(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});Ue({from:Ll,to:p1});const Yt=z(async()=>{try{return(await Ud()).data}catch{throw new Error("Не удалось войти")}}),Ml=T(),qi=ee(As).on(Yt,e=>({...e,error:null})).on(Yt.doneData,(e,i)=>({...e,teacherDataVerification:i})).on(Yt.failData,(e,i)=>({...e,error:i.message})).on(zl,(e,i)=>({...e,completed:i.completed})).on(Ml,()=>({...As})),u1={useTeacherDataVerification:d1},h1={getTeacherDataVerificationFx:Yt},g1={postTeacherDataVerification:Ll,changeCompleted:zl,clearStore:Ml},x1=Object.freeze(Object.defineProperty({__proto__:null,effects:h1,events:g1,selectors:u1},Symbol.toStringTag,{value:"Module"})),f1=[Qd,Je,ap,cp,xp,Mj,Vj,zf,kp,Gj,n1,c1,x1,gp,ep,Rj],m1=()=>{f1.forEach(e=>{e.events.clearStore()})},Ge=localStorage.getItem(G.Token)??"",Ye=()=>JSON.parse(localStorage.getItem(G.SavePassword)??"true"),Bi=z(async e=>{try{const{data:i}=await ud(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await ei.post("/old",n)}catch{}return Ye()?(localStorage.setItem(G.Token,i.token),localStorage.setItem(G.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(G.JWTRefresh,i.jwt_refresh??"")):(sessionStorage.setItem(G.Token,i.token),sessionStorage.setItem(G.JWT,(i==null?void 0:i.jwt)??"")),i}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),at=z(async e=>{try{const n=(await hd(e.token)).data.user,{name:s,surname:o,patronymic:a}=n;return{currentUser:{...n,guid:e.jwt?pt(e.jwt).IndividualGuid:"",fullName:Xi({name:s,surname:o,patronymic:a})},isAuthenticated:!!e,error:null,savePassword:Ye()}}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),dn=z(async e=>{try{return(await gd(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),Fl=z(()=>{Ye()?(localStorage.removeItem(G.Token),localStorage.removeItem(G.JWT),localStorage.removeItem(G.JWTRefresh)):(sessionStorage.removeItem(G.Token),sessionStorage.removeItem(G.JWT),sessionStorage.removeItem(G.JWTRefresh)),m1()}),Hl=e=>{const i=localStorage.getItem(G.SavePassword),n=e??JSON.parse(i??"true");return localStorage.setItem(G.SavePassword,n.toString()),n},Bl=T(),Dn=T(),Ul=T(),Wl=T(),Vl=T();Ue({from:Bl,to:Bi});D({clock:Bi.doneData,target:at});Ue({from:Dn,to:Fl});Ge&&Ye()?at({token:Ge,jwt:localStorage.getItem(G.JWT)}):Fl();const b1={currentUser:null,error:null,isAuthenticated:!!(Ge!=null&&Ge.length),savePassword:Ye(),loginEuz:""};Hl();const v1=ee(b1).on(at,e=>({...e,error:null})).on(at.doneData,(e,i)=>i).on(at.failData,(e,i)=>({error:i.message,currentUser:null,isAuthenticated:!!(Ge!=null&&Ge.length),savePassword:Ye()})).on(Bi.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:Ye()})).on(Dn,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:Ye()})).on(Vl,(e,{savePassword:i})=>({...e,savePassword:Hl(i)})).on(dn,e=>({...e,error:null})).on(dn.doneData,(e,i)=>({...e,loginEuz:i})).on(at.failData,(e,i)=>({...e,error:i.message})).on(Wl,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(Ul,e=>({...e,currentUser:null})),ce={useUser:()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=M(v1);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:M(Bi.pending),error:i}}},Zt={login:Bl,logout:Dn,changeSavePassword:Vl,clear:Ul,update:Wl},y1={getUserFx:at,getLoginEuzFx:dn},j1=()=>{const e="0.0.1";localStorage.getItem(G.Version)!==e&&(localStorage.clear(),localStorage.setItem(G.Version,e),Zt.logout())},Gl=T(),Yl=z(Od);D({clock:Gl,target:Yl});const ql=ee([]),I_=Rs(ql,e=>e.map(i=>i.divisionName));D({clock:Yl.doneData,target:ql});const _1=()=>{const{allRoutes:e}=Be.useMenu();return e?t.jsxs(Qs,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx(Zs,{path:i,component:n,exact:!s},i)),t.jsx(Me,{exact:!0,to:An})]}):null},w1=le.memo(_1),k1=u.div`
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
`,T1=()=>{const{open:e,content:i,position:n}=fu.useContextMenu(),s=l.useRef(null);return $t(s,()=>Ae.close()),t.jsx(Li,{isOpen:e,children:t.jsx(k1,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},Jl=200,S1=5e3,E1=()=>{const{visibleNotifications:e}=ze.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{ht.clearVisibleById(a)},Jl)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??S1))},[e]),{handleClose:o,closing:i}},$1=u.div`
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
`,P1=u.div`
    border-radius: var(--brLight);
    background: var(--schedule);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${Jl/1e3}s forwards;

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
`;const O1=()=>{const{visibleNotifications:e}=ze.useLkNotifications(),{closing:i,handleClose:n}=E1();return t.jsx($1,{children:e.map(s=>t.jsx(P1,{onClick:n(s.id),open:i!==s.id,children:t.jsx(Xa,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},Cs=u.div`
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
`,A1=({loading:e})=>{const{data:{user:i},error:n}=ce.useUser(),s=i?Oe(i==null?void 0:i.fullName):w.blue.main,o=()=>y1.getUserFx(JSON.parse(localStorage.getItem(G.Token)??""));return n?t.jsx(Cs,{$loading:!0,color:s,children:t.jsx(ge,{text:"Нет подключения к интернету",children:t.jsx(y,{onClick:o,text:"Попробовать снова",icon:t.jsx(Ns,{})})})}):t.jsxs(Cs,{color:s,$loading:e,children:[t.jsx(Ci,{short:!0,width:"100px"}),e&&t.jsx(ut,{})]})},C1=u.div`
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
`,I1=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=Rn.useStory();return t.jsx(C1,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():ot.changeCurrentPage({value:o+1})})})},R1=u(ai)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,D1=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=Rn.useStory();return t.jsxs(R1,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(I1,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(Kc,{}):t.jsx(Xc,{}),t.jsx(y,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx(We,{}),onClick:n})]})},N1=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,L1=u(Ve)`
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
`,z1=u.div`
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
    transform: ${({align:e})=>N1(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,M1=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:d,link:c,imageAlign:p,imageSize:h={width:"auto",height:"100%"},textAlign:g="left"})=>{const x=ii();return t.jsxs(L1,{imageAlign:p,onClick:()=>d(m=>!m),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx(xn,{src:n,loading:!1,width:h.width,height:h.height}),t.jsxs(z1,{imageAlign:p,onClick:()=>d(m=>!m),background:e,align:i,color:s,children:[t.jsx(W,{size:2,align:g,children:o}),t.jsx(te,{fontSize:"1.1em",align:g,children:a}),!!(c!=null&&c.text)&&t.jsx(y,{onClick:()=>{x.push(c.to),ot.close()},text:c.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},F1=u.div`
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
`,Is=u.div`
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
`,H1=()=>{const{pages:e,isOpen:i,currentPage:n}=Rn.useStory(),s=l.useRef(null);$t(s,()=>ot.close());const[o,a]=l.useState(!0),r=e[n];return t.jsx(Li,{isOpen:i,children:t.jsx(F1,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(D1,{pages:e.length,onClose:()=>ot.close(),playing:o}),t.jsx(Is,{left:"15px",onClick:()=>{n!==0&&ot.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx(ti,{})}),t.jsx(M1,{setPlaying:a,currentPage:n,...r}),t.jsx(Is,{right:"15px",onClick:()=>{n!==e.length-1?ot.changeCurrentPage({value:n+1}):ot.close(),a(!0)},children:t.jsx(Tt,{})})]})})})},B1=()=>{const{data:{user:e}}=ce.useUser(),{notifications:i,loading:n,loaded:s}=ze.useLkNotifications(),{settings:o}=St.useSettings(),a=l.useMemo(()=>o==null?void 0:o["settings-notifications"].property,[o==null?void 0:o["settings-notifications"]]);l.useEffect(()=>{e&&a&&a.all!==!1&&!s&&!n&&ht.initialize({settings:a})},[e,a,n,s]),l.useEffect(()=>{De.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},U1=()=>{const{data:{user:e}}=ce.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date(sd);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},W1=()=>{const{data:{user:e}}=ce.useUser(),{currentPage:i,exactCurrentPage:n}=Va(),{open:s}=K(),o=U1();return l.useEffect(()=>{e&&yp.getLocalSettingsFx(e.id)},[e]),B1(),Ai(),l.useEffect(()=>{o&&o&&s(t.jsx(Or,{}),"Что нового")},[o]),{currentPage:i,exactCurrentPage:n}},V1=u.div`
    display: flex;
    background: var(--theme);
    height: 100dvh;
`,G1=u.div`
    width: 100%;
    height: 100%;
    z-index: 3;
    background: var(--theme);
    overflow: hidden;
    position: relative;

    @media (max-width: 1000px) {
        font-size: 0.9em;
    }
`,Y1=u.div`
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
`,q1=()=>{var d;const{data:{user:e}}=ce.useUser(),{currentPage:i,exactCurrentPage:n}=W1(),[s,o]=l.useState(!1),a=l.useRef(null),r=c=>{o(c.currentTarget.scrollTop>0)};return t.jsxs(V1,{children:[t.jsx(A1,{loading:!e}),t.jsx(H1,{}),t.jsx(Mb,{}),t.jsxs(G1,{children:[t.jsx(Tb,{headerVisible:s,currentPagePair:{currentPage:i,exactCurrentPage:n}}),t.jsx(Y1,{ref:a,onScroll:r,withHeader:!((d=n??i)!=null&&d.withoutHeader),children:t.jsx(l.Suspense,{fallback:null,children:t.jsx(w1,{})})}),t.jsx(Ov,{})]}),t.jsx(Gb,{}),t.jsx(Hb,{}),t.jsx(qb,{}),t.jsx(T1,{}),t.jsx(Lv,{}),t.jsx(O1,{})]})},J1=()=>{const{data:{isAuthenticated:e,user:i}}=ce.useUser(),{data:n}=Je.selectors.useData(),{settings:s}=St.useSettings();return l.useEffect(()=>{e&&(He.getUserDataApplicationsFx(),(i==null?void 0:i.user_status)==="staff"&&(Je.effects.getFx(),He.getWorkerPosts(),Gl()))},[e,i]),l.useEffect(()=>{i&&s&&De.defineMenu({user:i,adminLinks:n,homeRoutes:s["settings-home-page"].property.pages})},[i,n,s]),e?t.jsx(q1,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(Qs,{children:[_0.map(({path:o,Component:a},r)=>t.jsx(Zs,{path:o,component:a,exact:!0},r)),t.jsx(Me,{exact:!0,to:Za})]})})},X1=u.div`
    background: var(--theme);
    overflow-y: auto;
    height: 100vh;
`;j1();const K1=()=>(Ai(),t.jsx(Zm,{children:t.jsx(Qc,{basename:"/",children:t.jsx(X1,{children:t.jsx(J1,{})})})})),Q1=Zc`
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
		--content: #474747;
		--invert: 0;
		--double-invert: 1;
		--closeToContent: #3a3a3a;
		--theme: #3a3a3a;
		--theme-mild-opposite: #d2d2d2;
		--settings: #292929;
		--blue: #90b3e7;
		--green: #94f0b9;
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
`;ed.render(t.jsxs(le.StrictMode,{children:[t.jsx(Q1,{}),t.jsx(K1,{})]}),document.getElementById("root"));export{F as $,Ay as A,y as B,Qe as C,te as D,ge as E,cu as F,_b as G,Qt as H,yy as I,be as J,st as K,ut as L,J as M,br as N,ce as O,Rm as P,Ni as Q,tt as R,wt as S,W as T,he as U,Hd as V,et as W,Bd as X,Io as Y,Y0 as Z,J0 as _,q as a,b_ as a$,Be as a0,G0 as a1,ur as a2,y0 as a3,A_ as a4,p_ as a5,w as a6,Uj as a7,ht as a8,Bj as a9,wn as aA,ff as aB,ql as aC,m_ as aD,A0 as aE,nn as aF,ey as aG,my as aH,Hr as aI,wi as aJ,j0 as aK,j_ as aL,R0 as aM,I0 as aN,Vd as aO,Gd as aP,eu as aQ,_e as aR,me as aS,v_ as aT,_i as aU,di as aV,U as aW,Ae as aX,Ii as aY,$t as aZ,xp as a_,$ as aa,c_ as ab,je as ac,He as ad,O_ as ae,Co as af,P_ as ag,Pr as ah,Te as ai,de as aj,pt as ak,Ze as al,Oy as am,I_ as an,u_ as ao,ip as ap,Gn as aq,oe as ar,$y as as,lx as at,f_ as au,x_ as av,kn as aw,h_ as ax,jn as ay,g_ as az,h1 as b,Qj as b$,wv as b0,ep as b1,Ce as b2,Sn as b3,lm as b4,rm as b5,e1 as b6,St as b7,Di as b8,dr as b9,ue as bA,pb as bB,_r as bC,g0 as bD,Fe as bE,Zt as bF,Fv as bG,vr as bH,Ai as bI,eo as bJ,$i as bK,k0 as bL,w0 as bM,r_ as bN,a_ as bO,fr as bP,xr as bQ,oi as bR,tv as bS,Lo as bT,s_ as bU,gg as bV,o_ as bW,y_ as bX,ai as bY,cs as bZ,xb as b_,Gm as ba,Oe as bb,yr as bc,bb as bd,i1 as be,En as bf,Yj as bg,Ct as bh,qp as bi,e_ as bj,C_ as bk,ir as bl,t1 as bm,su as bn,A as bo,Yi as bp,__ as bq,Zb as br,S_ as bs,E_ as bt,$_ as bu,T_ as bv,k_ as bw,Pt as bx,fn as by,w_ as bz,gp as c,y1 as c0,pi as c1,l_ as c2,a1 as c3,r1 as c4,Kd as c5,i_ as c6,t_ as c7,xn as c8,Qd as c9,pu as ca,d_ as cb,Cy as cc,ui as cd,Sy as ce,Ey as cf,Ty as cg,ky as ch,gv as ci,Gj as cj,Mr as d,g1 as e,Xe as f,Bo as g,hb as h,Ao as i,Re as j,Og as k,ie as l,Xp as m,In as n,cd as o,n_ as p,ls as q,H as r,u1 as s,dp as t,K as u,qv as v,bt as w,zi as x,si as y,Ve as z};
