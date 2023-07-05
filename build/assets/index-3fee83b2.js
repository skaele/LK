import{F as jt,a as vt,b as Ue,c as Un,H as Hi,y as H,u as O,p as ie,d as I,r as l,j as t,e as kt,S as Se,s as f,f as $e,I as Ir,g as Lr,h as Dr,i as Hn,A as Wn,k as C,l as zr,m as Vn,n as ke,o as _t,q as Gn,t as Mr,L as Z,v as Fr,w as Ft,x as Yn,z as nt,B as qn,C as Tt,D as W,E as Br,G as Ur,J as ni,K as Hr,M as Wr,R as se,N as Et,O as Pi,P as Oi,Q as di,T as Kn,U as Xn,V as Wi,W as Vr,X as Gr,Y as pi,Z as Yr,_ as qr,$ as Ai,a0 as Ri,a1 as Jn,a2 as Kr,a3 as Qn,a4 as St,a5 as Lt,a6 as Xr,a7 as Zn,a8 as si,a9 as Dt,aa as Ye,ab as Jr,ac as F,ad as es,ae as Qr,af as Zr,ag as Bt,ah as el,ai as yt,aj as ts,ak as tl,al as il,am as nl,an as sl,ao as ol,ap as al,aq as rl,ar as Vi,as as ll,at as cl,au as ge,av as dl,aw as pl,ax as ul,ay as is,az as hl,aA as gl,aB as fl,aC as xl,aD as ml,aE as bl,aF as vl,aG as _l,aH as yl,aI as ns,aJ as ss,aK as os,aL as wl,aM as jl,aN as kl,aO as Tl,aP as El}from"./vendor-9cc634b6.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Sl="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",$l=3,Vt=["home","settings","all"],as=["home","settings","download-agreements","all"],rs="https://lk.eseur.ru/signup",Pl="https://old.mospolytech.ru/index.php?id=3428",w={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#6bfeb5",transparent1:"#a7ffd38a",transparent2:"#a7ffd324",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#a3fbfb99",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#29349c",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#675fe5",transparent1:"#5c54d9e0",transparent2:"#5c54d9b5",transparent3:"#5c54d98c"},purple:{dark3:"#5b248d",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#932066",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#a3252f",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#985e1d",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab1f"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},ob={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},ab={Зачтено:w.green.main,"Не зачтено":w.red.main,Отлично:w.green.main,Хорошо:w.blue.main,Удовлетворительно:w.orange.main,Неудовлетворительно:w.red.main,"Не явился":w.red.main,default:w.red.main},rb={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},P="https://e.mospolytech.ru/old",Ol="2023-06-30T00:43:43",He={info:{icon:jt,color:"blue",title:"Информация"},alert:{icon:vt,color:"orange",title:"Внимание!"},failure:{icon:Ue,color:"red",title:"Ошибка"},success:{icon:Un,color:"green",title:"Успешно"},tip:{icon:Hi,color:"grey",title:"Подсказка"},hint:{icon:Hi,color:"white",title:"Подсказка"}},Al={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},Rl=["image/jpeg","image/jpg","image/png","application/pdf"],Nl=10,Cl="376px",Gi=!0,Il={all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0},Ll=()=>Object.keys(_e).reduce((e,i)=>(e[i]={id:i,property:{}},e),{}),ls=(e="")=>({[e]:{...Ll(),[_e["settings-appearance"]]:{id:_e["settings-appearance"],property:{theme:"dark",scheduledLightTheme:!1,lightThemeRange:["300","1140"]}},[_e["settings-home-page"]]:{id:_e["settings-home-page"],property:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],widgetSchedule:!0,widgetPayment:!0}},[_e["settings-customize-menu"]]:{id:_e["settings-customize-menu"],property:{pages:Vt}},[_e["settings-notifications"]]:{id:_e["settings-notifications"],property:Il}}});var _e=(e=>(e["settings-home-page"]="settings-home-page",e["settings-personal"]="settings-personal",e["settings-appearance"]="settings-appearance",e["settings-customize-menu"]="settings-customize-menu",e["settings-notifications"]="settings-notifications",e))(_e||{});const ui={settings:ls(),error:null,completed:!1};let xe;const Dl=()=>({settings:I(zt).settings[xe],error:I(zt).error,completed:I(zt).completed}),zl=(e,i)=>{if(!e)return i;const n={...e};for(const s in i)n[s]===void 0&&(n[s]=i[s]);return n},cs=H(e=>{xe=e;const i=JSON.parse(localStorage.getItem("new-settings")??"{}")[xe];return zl(i,ls(e)[e])}),ds=O(),ps=O(),us=O(),zt=ie(ui).on(ps,(e,i)=>({...e,completed:i.completed})).on(cs.doneData,(e,i)=>({...e,settings:{[xe]:i}})).on(ds,(e,{nameSettings:i,nameParam:n,value:s})=>({...e,settings:{[xe]:{...e.settings[xe],[i]:{...e.settings[xe][i],property:{...e.settings[xe][i].property,[n]:s}}}}})).on(us,()=>({...ui}));zt.watch(e=>{if(e!==ui&&xe){const i=JSON.parse(localStorage.getItem("new-settings")??JSON.stringify({}));i[xe]=e.settings[xe],localStorage.setItem("new-settings",JSON.stringify(i))}});const st={useSettings:Dl},$t={updateSetting:ds,changeCompleted:ps,clearStore:us},Ml={getLocalSettingsFx:cs},Gt=()=>{var a,r;const{settings:e}=st.useSettings(),i=e==null?void 0:e["settings-appearance"],[n,s]=l.useState(((r=(a=e==null?void 0:e["settings-appearance"])==null?void 0:a.property)==null?void 0:r.theme)??"light");l.useLayoutEffect(()=>{if(e){const d=new Date().getHours()*60+new Date().getMinutes(),c=i.property.lightThemeRange??0,p=d>+c[0]&&d<+c[1],u=i.property.scheduledLightTheme?p?"light":"dark":i.property.theme;document.documentElement.getAttribute("data-theme"),s(u),document.documentElement.setAttribute("data-theme",u)}else document.documentElement.setAttribute("data-theme","light")},[e]);const o=l.useCallback(d=>{s(()=>{const c=d?"dark":"light";return document.documentElement.setAttribute("data-theme",c),$t.updateSetting({nameSettings:"settings-appearance",nameParam:"theme",value:c}),c})},[]);return{theme:n,switchTheme:o}},Ni=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),Fl=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),d=a.length>1,c=l.useCallback(()=>{d&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),p=l.useCallback((g,b)=>{g&&(i?(r(()=>[...a,g]),o(()=>[...s,b??""])):(r(()=>[g]),o(b?[b]:[])),n(()=>!0))},[r,n,a,i]),u=l.useCallback(()=>{n(()=>!1)},[r,n]),x=l.useMemo(()=>a[a.length-1],[a]),m=l.useMemo(()=>s[s.length-1],[s]),h=l.useCallback(g=>{g&&r([...a,g])},[]);return t.jsx(Ni.Provider,{value:{back:c,open:p,close:u,isOpen:i,canBack:d,component:x,title:m,setComponent:h},children:e})},G=()=>{const{open:e,isOpen:i,...n}=l.useContext(Ni);return{open:e,isOpen:i,...n}},Yt=()=>localStorage.getItem("jwt"),Bl=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},Ul=`${P}/lk_api.php`,Hl="https://api.mospolytech.ru/serviceforfrontpersonnelorders/",Wl="https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.GetAllHistory",Vl="https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.AllHistory",L=kt.create({baseURL:Ul,withCredentials:!0}),hs=kt.create({baseURL:Wl,timeout:3e4}),Gl=kt.create({baseURL:Vl}),Yl=kt.create({baseURL:Hl});hs.interceptors.request.use(e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${JSON.parse(Yt()||"{}")}`,e));Gl.interceptors.request.use(e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${JSON.parse(Yt()||"{}")}`,e));Yl.interceptors.request.use(e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${JSON.parse(Yt()||"{}")}`,e));function M(){var e;return(e=JSON.parse(localStorage.getItem("token")??sessionStorage.getItem("token")??"null"))==null?void 0:e.token}const ql=({login:e,password:i})=>L.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),Kl=e=>L.get(`?getUser&token=${e}`),Xl=e=>L.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),lb=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",M()),L.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},cb=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),L.post(`?changeADPass=1&token=${M()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},db=async e=>{const i=new FormData;return i.set("email",e),i.set("token",M()),L.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},pb=async e=>{const i=new FormData;return i.set("phone",e),i.set("token",M()),L.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},Jl=e=>L.get(`?getSchedule&group=${e}&token=${M()}`),Yi=e=>L.get(`?getScheduleTeacher&fio=${e}&token=${M()}`),Ql=()=>L.get(`?getSchedule&session=1&token=${M()}`),qi=e=>L.get(`?getScheduleTeacher&fio=${e}&session=1&token=${M()}`),Zl=()=>L.get(`?getPayments&token=${M()}`),ub=e=>L.get(`?signAgreement=${e}&token=${M()}`),ec=e=>L.get(`?signContract=${e}&token=${M()}`),tc=async({semestr:e})=>{var i,n;return(n=(i=await L.get(`?getAcademicPerformance&semestr=${e}&token=${M()}`))==null?void 0:i.data)==null?void 0:n.academicPerformance},ic=e=>L.get(`?getMessages&token=${M()}&id=${e}`),nc=async()=>(await L.get(`?getPEPStatus&token=${M()}`)).data,sc=()=>L.get(`?getContactData&token=${M()}`),oc=e=>{const i=new FormData;i.set("token",M()),i.set("saveContactData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return L.post("?saveContactData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},ac=()=>L.get(`?getRequestHighComfort&token=${M()}`),hb=e=>{const i=new FormData;i.set("token",M()),i.set("postRequestHighComfort","1");for(const[n,s]of Object.entries(e))i.set(n,s);return L.post("?postRequestHighComfort=1",i,{headers:{"Content-Type":"multipart/form-data"}})},rc=()=>L.get(`?getAppRequests&token=${M()}`),lc=()=>L.get(`?getAppData&token=${M()}`),cc=()=>hs.get(`?employeeGuid=${Bl(JSON.parse(Yt()||"{}")).IndividualGuid}`),dc=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",M()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await L.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o.result},pc=async()=>(await L.get(`?getAdminLinks&token=${M()}`)).data,uc=async e=>(await L.get(`?PDinfo&token=${M()}`)).data,gs=()=>L.get(`?getNotification&token=${M()}`),hc=e=>L.get(`?viewNotification=${e}&token=${M()}`),gc=Object.freeze(Object.defineProperty({__proto__:null,get:gs,view:hc},Symbol.toStringTag,{value:"Module"})),fs=()=>L.get(`?getDocList&token=${M()}`).then(e=>({...e,data:e.data.map(i=>({...i,document:!0}))})),fc=e=>L.get(`?viewDoc=${e}&token=${M()}`),xc=Object.freeze(Object.defineProperty({__proto__:null,get:fs,view:fc},Symbol.toStringTag,{value:"Module"})),mc=(e,i,n,s)=>L.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${M()}`),bc=e=>L.get(`?getDivs=${e}&page=1&token=${M()}`),vc=()=>L.get(`?getCheckData&token=${M()}`),_c=e=>{const i=new FormData;i.set("token",M()),i.set("saveCheckData","1");for(const[n,s]of Object.entries(e))i.set(n,s);return L.post("?saveCheckData=1",i,{headers:{"Content-Type":"multipart/form-data"}})},yc=(e,i,n,s)=>L.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${M()}`),wc=async e=>await L.get(`?getGroups=${e}&perpage=30&page=1&token=${M()}`),jc=async()=>(await L.get(`?getAlerts&token=${M()}`)).data,kc=()=>L.get(`?getNotifications&token=${M()}`),Tc=e=>L.get(`?clearNotificationById=${e}&token=${M()}`),Ec=()=>L.get(`?clearAllNotifications&token=${M()}`),Ki={data:null,preparedData:null,loading:!1,error:null},Pt=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>Sl})=>{const o=e??Ki,a=()=>({data:I(p).data,preparedData:I(p).preparedData,loading:I(r.pending),error:I(p).error}),r=H(async u=>{try{const x=await i.get(u);return{data:x,preparedData:n?n(x):x}}catch(x){throw new Error(s(x))}}),d=H(async u=>{var x;try{await((x=i.post)==null?void 0:x.call(i,u))}catch(m){throw new Error(s(m))}}),c=O(),p=ie(o).on(r,u=>({...u,error:null})).on(d.pending,u=>({...u,loading:!0})).on(d.failData,(u,{message:x})=>({...u,error:x,loading:!1})).on(d.doneData,u=>({...u,error:null,loading:!1})).on(r.doneData,(u,{data:x,preparedData:m})=>({...u,data:x,preparedData:m})).on(r.failData,(u,x)=>({...u,error:x.message})).on(c,()=>({...Ki}));return{selectors:{useData:a},effects:{getFx:r,postFx:d},events:{clearStore:c}}};function Sc(e){const i={};for(const n of e)i[n.exam_type]?i[n.exam_type].push(n):i[n.exam_type]=[n];return i}const $c=Pt({api:{get:tc},prepareData:Sc}),hi=Pt({api:{get:pc}}),Pc=e=>e.reduce((i,n)=>{const s=new Date(n.date).getFullYear();return i[s]?i[s].push(n):i[s]=[n],i},{}),Oc=Pt({api:{get:jc},prepareData:Pc}),Xi={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},Ac=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=I(Rc);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:I(ut.pending),error:s}},pt=H(async()=>{const e=await rc();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),ut=H(async()=>{const e=await lc();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),xs=H(async e=>{const i=await dc(e);if(i==="ok")return"ok";throw new Error(i)}),Mt=H(async()=>{const e=await cc();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),ms=O();Se({from:xs.doneData,to:pt});const Rc=ie(Xi).on(ut,e=>({...e,error:null})).on(ut.doneData,(e,i)=>({...e,dataUserApplication:i})).on(ut.failData,(e,i)=>({...e,error:i.message})).on(pt,e=>({...e,error:null})).on(pt.doneData,(e,i)=>({...e,listApplication:i})).on(pt.failData,(e,i)=>({...e,error:i.message})).on(Mt,e=>({...e,error:null})).on(Mt.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(Mt.failData,(e,i)=>({...e,error:i.message})).on(ms,()=>({...Xi})),Ot={useApplications:Ac},tt={getApplicationsFx:pt,getUserDataApplicationsFx:ut,postApplicationFx:xs,getWorkerPosts:Mt},Nc={clearStore:ms},Cc=Object.freeze(Object.defineProperty({__proto__:null,effects:tt,events:Nc,selectors:Ot},Symbol.toStringTag,{value:"Module"})),Ji={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},Ic=()=>I(Lc),bs=O(),vs=O(),_s=O(),Lc=ie(Ji).on(bs,(e,{message:i,onReject:n,onConfirm:s})=>({isOpen:!0,message:i,onConfirm:s,onReject:n})).on(vs,e=>({...e,isOpen:!1})).on(_s,()=>({...Ji})),ys={useConfirm:Ic},je={evokeConfirm:bs,closeConfirm:vs,clearStore:_s},Dc=Object.freeze(Object.defineProperty({__proto__:null,events:je,selectors:ys},Symbol.toStringTag,{value:"Module"})),zc=({defaultStore:e,api:i})=>{const n=e,s=()=>({data:I(c).data,loading:I(r.pending),error:I(c).error,completed:I(c).completed}),o=O(),a=H(async p=>{try{return(await i.post(p)).data}catch{throw new Error("Не удалось отправить данные. Проверьте интернет соединение и попробуйте снова")}}),r=H(async()=>{if(i.get)try{return{...(await i.get()).data}}catch(p){throw new Error(p)}return n.data}),d=O(),c=ie(n).on(r,p=>({...p,error:null})).on(r.doneData,(p,u)=>({...p,data:u})).on(r.failData,(p,u)=>({...p,error:u.message})).on(o,(p,u)=>({...p,completed:u.completed})).on(d,()=>({...n}));return{selectors:{useForm:s},effects:{getFormFx:r,postFormFx:a},events:{changeCompleted:o,clearStore:d}}},{effects:Mc,events:Fc,selectors:Bc}=zc({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:sc,post:oc}}),Uc=Object.freeze(Object.defineProperty({__proto__:null,effects:Mc,events:Fc,selectors:Bc},Symbol.toStringTag,{value:"Module"})),Hc=(e,i=1e3)=>new Promise(n=>{setTimeout(()=>n(e),i)}),Wc=Pt({api:{get:nc,post:()=>Hc(!0)},prepareData:e=>e[0]}),We=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},Qi=e=>{const i=new Date;return i.setDate(i.getDate()+e),We(i,"extraWeird")},Nt=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:Qi(-30*11),maxValueInput:Qi(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Ct={kvdCert:Nt({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:Nt({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:Nt({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:Nt({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},Xe=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var r;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const d=new Date(((r=a.value)==null?void 0:r.toString())??0);if(a.minValueInput){const c=new Date(a.minValueInput);if(d<c)return!0}if(a.maxValueInput){const c=new Date(a.maxValueInput);if(d>c)return!0}}return i&&a.specialType&&!i.includes(a.specialType)?!1:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(d=>!!d.files.length)})&&n&&s},Vc=f.button`
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
`,Zi={message:"",type:"success",isOpen:!1,time:2e3},Gc=()=>I(Yc),ws=O(),js=O(),ks=O(),Yc=ie(Zi).on(ws,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(js,(e,{isOpen:i})=>({...e,isOpen:i})).on(ks,()=>({...Zi})),Ts={usePopUpMessage:Gc},V={evokePopUpMessage:ws,openPopUpMessage:js,clearStore:ks},qc=Object.freeze(Object.defineProperty({__proto__:null,events:V,selectors:Ts},Symbol.toStringTag,{value:"Module"}));function j(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:d,hoverBackground:c,align:p,isChosen:u,padding:x,shrinkTextInMobile:m,fixedInMobile:h,direction:g="horizontal",isActive:b=!0,height:v,notActiveClickMessage:S,..._}=e,E=k=>{b?s==null||s(k):S&&V.evokePopUpMessage({type:"failure",message:S,time:1e4})};return t.jsxs(Vc,{text:!!n,onClick:E,isChosen:u,width:o,minWidth:a,background:r,padding:x,textColor:d,shrinkTextInMobile:m,hoverBackground:c,align:p,direction:g,isActive:b,fixedInMobile:h,height:v,..._,children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})}const gi=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},en=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},Kc=f.div`
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
`,Xc=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],At=f.div.withConfig({shouldForwardProp:e=>!Xc.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?en(n):gi(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?gi(i):en(n)};
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
`,Jc=f.div`
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
`;function D({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(Jc,{pulse:s,size:i,shape:e,margin:n})}const Qc=f(At)`
    height: 100%;
`,Zc=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx(Qc,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(D,{...o,key:a}))}),ze=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function ed({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:ze(n),children:i});case 2:return t.jsx("h2",{className:"title",style:ze(n),children:i});case 3:return t.jsx("h3",{className:"title",style:ze(n),children:i});case 4:return t.jsx("h4",{className:"title",style:ze(n),children:i});case 5:return t.jsx("h5",{className:"title",style:ze(n),children:i});case 6:return t.jsx("h6",{className:"title",style:ze(n),children:i});default:return t.jsx("h1",{className:"title",style:ze(n),children:i})}}const td=f.div`
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
`,id=f.span`
    color: var(--red);
    margin-right: 5px;
`,nd=f.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function K(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,align:d="center",bottomGap:c=!1,visible:p=!0}=e;return p?t.jsxs(td,{size:o,className:"title-wrapper",align:d,bottomGap:c,iconColor:n,children:[i,t.jsxs(ed,{size:o,width:r,children:[a&&t.jsx(id,{children:"*"}),t.jsx(nd,{width:r,children:s})]})]}):null}const sd=(e,i,n)=>n?"#fff":e?w[He[i].color].dark3:w[He[i].color].light3,od=f.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>sd(i,e,n)};
    background: ${({type:e,solidBackground:i})=>w[He[e].color][i?"main":"transparent3"]};
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
        color: ${({type:e,isLightTheme:i})=>w[He[e].color][i?"main":"light2"]};
    }
`,ad=()=>t.jsx(Zc,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function re({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:d,fontSize:c,gap:p,lineHeight:u,solidBackground:x=!1,align:m="left",visible:h=!0,loading:g=!1}){if(!h)return null;const{theme:b}=Gt();return t.jsxs(od,{isLightTheme:b==="light",className:"message",closable:!!r,type:e,align:m,width:s,maxWidth:o,padding:d,fontSize:c,gap:p,lineHeight:u,solidBackground:x,children:[t.jsx(K,{size:4,align:m,icon:n===null?null:n??He[e].icon({}),children:a??He[e].title}),r&&t.jsx(j,{onClick:r,icon:t.jsx($e,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),g&&t.jsx(ad,{})]})}f.div`
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
`;const rd=f.div`
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
`,ld=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(rd,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),he=f.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,cd="/assets/sad-emoji-0c60bf90.gif",ee=f.span`
    width: ${({width:e})=>e??"fit-content"};
    min-width: ${({width:e})=>e??"fit-content"};
    max-width: ${({maxWidth:e})=>e??"fit-content"};
    font-size: ${({fontSize:e})=>e??"0.8em"};
    font-weight: 500;
    opacity: 0.7;
    text-align: ${({align:e})=>e??"left"};
    display: ${({visible:e})=>!(e??!0)&&"none"};
    line-height: ${({lineHeight:e})=>e};
`,dd=f.div`
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
`;function ce({text:e,image:i,size:n,children:s}){return t.jsxs(dd,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||cd,alt:"груфтим("}):i}),t.jsx(ee,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const pd="/assets/loading-c8041cd3.gif",ud=f.img`
    width: 40px;
`;function Le(e){return t.jsx(ud,{...e,src:pd,alt:"loading",className:"loading-circle"})}const hd="/assets/logo-4d9aa449.png",gd="/assets/mospolytech-logo-white-b1e4f630.png",fd=f.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function qt({width:e,className:i,short:n=!1}){return t.jsx(fd,{width:e,className:i??"logo",children:t.jsx("img",{src:n?gd:hd,alt:"Logo"})})}const xd=f.img``;function Es({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(D,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(xd,{src:i,alt:o,height:n,width:s})}const gb=f.div`
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
`,md=f.div`
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
`;function bd(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:d=!0,isActive:c=!0}=e;return t.jsxs(md,{isActive:c,width:s,textAreaAppearance:d,children:[t.jsx(K,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:p=>n(p.target.value),placeholder:o,required:a,value:i})]})}const vd=f.button`
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
`,Ss=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:d="Успешно",popUpFailureMessage:c="Nope",pulsing:p,isDone:u=!1,isActive:x=!0,isLoading:m=!1,completed:h=!1,repeatable:g=!0})=>{l.useEffect(()=>{h&&(V.evokePopUpMessage({message:d,type:"success"}),g&&setTimeout(()=>{o(!1)},2e3))},[h,o]);const b=()=>{if(x&&!u&&!m)return i();V.evokePopUpMessage({message:c,type:"failure"})};return t.jsx(vd,{isLoading:m,background:a,className:"submit-button",completed:h,isActive:x&&!u&&!h,onClick:b,isDone:u,width:n,height:s,repeatable:g,tabIndex:x&&!u?0:-1,pulsing:p&&!u,children:t.jsx("div",{className:"inner-button",children:h?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(Ir,{})," ",r]}):m?t.jsx(Le,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},_d=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,yd=e=>{const i=["7","8","9"],n=e.target.selectionStart;let s=e.target.value.replace(/\D/g,""),o="";return s.length?e.target.value.length!==n?/\D/g.test(e.nativeEvent.data??"")?s:e.target.value:(i.indexOf(s[0])>-1?(s[0]==="9"&&(s="7"+s),o=(s[0]==="8"?"8":"+7")+" ",s.length&&(o+="("+s.substring(1,4)),s.length>=5&&(o+=") "+s.substring(4,7)),s.length>=8&&(o+="-"+s.substring(7,9)),s.length>=10&&(o+="-"+s.substring(9,11))):o=`+${s.substring(0,16)}`,o):""},wd={groupMask:_d,phoneMask:yd},jd=(e,i,n,s,o,a,r,d)=>{const[c,p]=l.useState(n),[u,x]=l.useState(s??!1);l.useEffect(()=>{p(n)},[n]);const m=l.useCallback(v=>v.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:c,danger:u,phoneMaskKeyDown:v=>{v.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>p(v=>v==="password"?"text":"password"),handleOnChange:v=>{if(i(d?r?r(v.target.value,e):n==="tel"?wd.phoneMask(v):n==="email"?m(v.target.value):v.target.value:v.target.value),n==="date"&&(o||a)){const S=new Date(v.target.value);let _=!1;if(o){const E=new Date(o);_=S<E}if(a&&!_){const E=new Date(a);_=S>E}x(_)}}}},kd=f.div`
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
`,Te=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:d,width:c,minWidth:p,customMask:u,placeholder:x="Введите сюда",type:m="text",danger:h,alertMessage:g,loading:b=!1,isActive:v=!0,inputAppearance:S=!0,mask:_=!1,autocomplete:E=!1,minValue:k=void 0,maxValue:Y=void 0}=i,{inputType:$,buttonOnClick:N,danger:J,handleOnChange:z,phoneMaskKeyDown:Q}=jd(s,o,m,h,k,Y,u,_);return t.jsxs(kd,{leftIcon:!!a,isActive:v,inputAppearance:S,width:c,danger:J,minWidth:p,children:[t.jsx(K,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:d,children:r}),t.jsx(re,{type:"alert",visible:!!g,icon:t.jsx(Lr,{}),title:g??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:x,min:k,max:Y,step:Y?.1:void 0,type:$,placeholder:x,value:s??"",autoComplete:E?"on":"off",onKeyDown:Oe=>m==="tel"&&Q(Oe),onChange:z,required:d,readOnly:!v,ref:n}),m!=="password"?!!(s!=null&&s.length)&&S&&(b?t.jsx(Le,{}):t.jsx(j,{icon:t.jsx($e,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(j,{icon:$==="password"?t.jsx(Dr,{}):t.jsx(Hn,{}),tabIndex:-1,onClick:N})]})}),Td=f.div`
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
`,Ed="/assets/thinking-emoji-f3c10f79.gif",Sd=["loading"],$d=f.div.withConfig({shouldForwardProp:e=>!Sd.includes(e)})`
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
`,$s=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs($d,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(ce,{text:n,image:a&&Ed,children:!a&&t.jsx(j,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(Wn,{})})})}):t.jsx(Le,{})}),t.jsx("div",{className:"content",children:e})]})),Pd=f.a`
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
`,Od=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:d,height:c,minHeight:p,padding:u,isActive:x=!0,isChosen:m=!1})=>t.jsxs(Pd,{text:!!i,onClick:h=>x&&n&&n(h),isChosen:m,width:s,background:o,textColor:a,href:d,align:r,isActive:x,height:c,padding:u,minHeight:p,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),Ps=l.memo(Od),Ad=f.div`
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
`,Rd=f.div`
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
`,Nd=f.a`
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
`,Cd=({title:e,link:i,type:n})=>t.jsxs(Nd,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(C,{}):t.jsx(zr,{})}),t.jsx("div",{className:"title",children:e})]}),Id=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),Ld={open:!1,content:null,type:"left-click",position:{x:0,y:0}},Dd=()=>Vn(zd),Os=O(),As=O(),Rs=O(),zd=ie(Ld).on(Os,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:Id(n,220,s),open:!0,content:i,type:o})).on(As,e=>({...e,open:!1})).on(Rs,(e,{position:i})=>({...e,position:i})),be={open:Os,close:As,changePosition:Rs},Md={useContextMenu:Dd},Fd=()=>{const e=navigator.userAgent;return e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":"Windows"},oi=new Set,Ns=(e,i)=>{l.useEffect(()=>{window.addEventListener("keydown",n=>{oi.add(n.key),!e.slice(0,e.length-1).find(o=>!oi.has(o))&&e[e.length-1]===n.key&&i()}),window.addEventListener("keyup",n=>{oi.delete(n.key)})},[])},Pe=f.div`
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
`,R=f.div`
    width: ${({w:e})=>e??"100%"};
    max-width: ${({mw:e})=>e};
    height: ${({h:e})=>e??"fit-content"};
    gap: ${({gap:e})=>e??"0"};
    display: flex;
    align-items: ${({ai:e})=>e??"center"};
    justify-content: ${({jc:e})=>e??"flex-start"};
    flex-direction: ${({d:e})=>e??"row"};
    flex-wrap: ${({wrap:e})=>e&&"wrap"};
`,oe=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},Cs=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"х","]":"ъ","}":"ъ","'":"э",";":"ж",",":"б",".":"ю"};let n="";for(let s=0;s<e.length;s++){const o=oe(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},Is=e=>/[A-Za-z]/.test(e),Bd=f.span`
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
`,Ls=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!Is(e))return null;const s=Cs(e),o=()=>i(s);return t.jsxs(ee,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(Bd,{tabIndex:10,children:s})]})};function ot(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function Ne(e,i,n=0){return e>i?n:e<n?i:e}const Ud=f.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,Hd=f(Pe)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,Wd=f.div`
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
`,Ds=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:d,setValue:c,customMask:p,onHintClick:u,validationCheck:x=!1})=>{const[m,h]=l.useState(0),[g,b]=l.useState(!1),v=l.useRef(null),S=l.useRef(null),_=l.useRef(null);ot(v,()=>b(!1)),l.useEffect(()=>{d&&setTimeout(()=>{var $;return($=_.current)==null?void 0:$.focus()},50)},[d]);const E=$=>{var N,J;(((a==null?void 0:a.length)??0)>0||o)&&b(!0),$.key==="ArrowDown"?((N=S.current)==null||N.scrollIntoView({block:"start",behavior:"smooth"}),typeof m=="number"&&h(Ne(m+1,((a==null?void 0:a.length)??1)-1,0))):$.key==="ArrowUp"?((J=S.current)==null||J.scrollIntoView({block:"end",behavior:"smooth"}),typeof m=="number"&&h(Ne(m-1,((a==null?void 0:a.length)??1)-1,0))):$.key==="Enter"?(c((a==null?void 0:a[m??0].title)??""),b(!1),u==null||u(a==null?void 0:a[m??0])):h(0)},k=$=>()=>{h($),c((a==null?void 0:a[$].title)??""),b(!1),u==null||u(a==null?void 0:a[$])},Y=()=>{a!=null&&a.length&&b(!0)};return t.jsxs(Ud,{width:i,onKeyDown:E,onMouseDown:Y,ref:v,children:[t.jsx(Te,{value:e,placeholder:n,leftIcon:r??t.jsx(ke,{}),inputAppearance:s,setValue:c,loading:o,width:i,mask:!0,customMask:p,ref:_}),t.jsx(Ls,{setValue:c,value:e,visible:x}),g&&t.jsx(Hd,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:E,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:$,icon:N},J)=>{const z=m===J;return t.jsxs(Wd,{onClick:k(J),ref:z?S:null,selected:z,children:[N&&t.jsx("div",{className:"icon",children:N}),t.jsx("span",{children:$})]},$+J)})})]})},Kt=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},Vd=f.div`
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
`,Gd=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,size:o,condition:a=!0})=>t.jsx(Vd,{className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),size:o,condition:a,children:t.jsx("b",{children:s})}),Yd=l.memo(Gd);f.div`
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
`;const qd=f.span`
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
`,Kd=({currentPage:e,pages:i,size:n,appearance:s})=>{const o=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(qd,{currentPage:e,appearance:s,moreThanNeeded:o,pages:i,size:n})},Xd=l.memo(Kd),Jd=f.div`
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
`,Qd=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0})=>{const[a,r]=l.useState(5),d=l.useRef(null),{width:c}=Kt();return l.useEffect(()=>{var u;const p=((u=d==null?void 0:d.current)==null?void 0:u.offsetWidth)??c;p>800?r(5):p>600&&p<=800||p>400&&p<=600?r(4):p<=400&&r(3)},[c,d.current]),t.jsx(Jd,{ref:d,size:a,sliderWidth:s,appearance:o,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(Xd,{appearance:o,pages:e,currentPage:i,size:a}),e.map((p,u)=>t.jsx(Yd,{id:u,currentPage:i,setCurrentPage:n,pageTitle:p.title,condition:p.condition,size:a},u))]})})},zs=l.memo(Qd),Zd=300,Ms=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=Zd})=>{const[d,c]=l.useState(e??""),[p,u]=l.useState(""),[x,m]=l.useState(!1);return l.useEffect(()=>{if(d!==null)if(d.length){m(!0);const h=setTimeout(async()=>{await i(d),u(d),m(!1)},r);return()=>clearTimeout(h)}else p.length!==0&&(n==null||n(d),c(""),m(!1))},[d]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(d))??!0)){m(!0);const h=setTimeout(async()=>{await i(d),m(!1)},o??r);return()=>clearTimeout(h)}},[...a]),[d,c,x]},it=f.span`
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
`,ep=f.div`
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
`,ye=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs(ep,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(it,{outline:"4px solid var(--schedule)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},Fs=(e,i)=>{if(i)if(e!=="home"){const n=i["settings-home-page"].property.pages;$t.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:[...n,e]})}else V.evokePopUpMessage({message:"Нельзя добавить этот раздел на домашний экран",type:"failure"})},Bs=(e,i)=>{if(i){const n=i["settings-home-page"].property.pages;$t.updateSetting({nameSettings:"settings-home-page",nameParam:"pages",value:n.filter(s=>s!==e)})}},tp=(e,i,n,s)=>{if(i){const o=s.length+$l;if(n<o){V.evokePopUpMessage({message:"Элемент добавлен в навигационное меню",type:"success"});const a=i["settings-customize-menu"].property.pages??Vt;$t.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:[...a,e]})}else V.evokePopUpMessage({message:`Нельзя добавить больше ${o} элементов`,type:"failure"})}},ip=(e,i,n)=>{if(i)if(n.includes(e))V.evokePopUpMessage({message:"Элемент нельзя убрать из навигационного меню",type:"failure"});else{V.evokePopUpMessage({message:"Элемент убран из навигационного меню",type:"success"});const s=i["settings-customize-menu"].property.pages;$t.updateSetting({nameSettings:"settings-customize-menu",nameParam:"pages",value:s.filter(o=>o!==e)})}},np=f.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,sp=f.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,op=e=>{var h,g,b;const{id:i,icon:n,title:s,color:o}=e,{settings:a}=st.useSettings(),{data:r}=ne.useUser(),d=Ee.useMenu(),c=(h=a["settings-home-page"].property.pages)==null?void 0:h.find(v=>v===i),p=(g=a["settings-customize-menu"].property.pages)==null?void 0:g.find(v=>v===i),u=((b=r.user)==null?void 0:b.user_status)==="staff"?as:Vt,x=()=>{Fs(i,a),be.close()},m=()=>{tp(i,a,Object.keys(d.leftsideBarRoutes??{}).length??0,u),be.close()};return t.jsxs(np,{children:[t.jsxs("div",{className:"top",children:[t.jsx(ye,{color:o,size:22,children:n}),t.jsx(sp,{children:s})]}),t.jsx(he,{}),c?t.jsx(j,{text:"Убрать с главной",icon:t.jsx(Ue,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:()=>{Bs(i,a),be.close()}}):t.jsx(j,{text:"Добавить на главную",icon:t.jsx(_t,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:x}),p?t.jsx(j,{text:"Убрать из меню",icon:t.jsx(Ue,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:()=>ip(i,a,u)}):t.jsx(j,{text:"Добавить в меню",icon:t.jsx(_t,{}),width:"100%",align:"left",background:"var(--schedule)",onClick:m})]})},Us=({route:e})=>{const i=w[e.color.length?e.color:"blue"].main,n=s=>{s.preventDefault(),s.stopPropagation(),be.open({e:s,height:105,content:t.jsx(op,{...e})})};return t.jsx(j,{icon:t.jsx(Gn,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},Hs=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine};function wt(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const Ws=f(Pe)`
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
`,tn=e=>{var S;const{color:i,shadow:n,notifications:s,maxWordLength:o,title:a,isNew:r,icon:d,mode:c,id:p,background:u,orientation:x="vertical"}=e,m=x==="vertical",{settings:h}=st.useSettings(),g=!!((S=h["settings-home-page"].property.pages)!=null&&S.find(_=>_===p)),b=11,v=l.useMemo(()=>(_,E)=>{const k=_.split(" ")[0];return k.length>E&&k.length!==E+1&&m?`${_.substr(0,E)}-${_.substr(E,_.length)}`:_},[]);return t.jsxs(Ws,{padding:"0",width:"100%",maxWidth:"100%",height:m?"135px":"60px",isVertical:m,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,background:u,children:[t.jsxs("div",{className:"outside",children:[t.jsx(ye,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:d??t.jsx(Mr,{})}),t.jsx("b",{children:wt(v(a,b),o)}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",Hs(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),c==="use"&&t.jsx(Us,{route:e}),c==="add"?g?t.jsx(j,{icon:t.jsx($e,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--schedule)",onClick:()=>Bs(p,h)}):t.jsx(j,{icon:t.jsx(_t,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--schedule)",onClick:()=>Fs(p,h)}):null,r&&t.jsx("span",{className:"new",children:"New"})]})},ap=f(Ws)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,fb=()=>t.jsx(Z,{to:bt,onClick:()=>{ve.changeOpen({isOpen:!1,currentPage:bt.slice(1,bt.length)})},children:t.jsx(ap,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(ye,{color:"blue",children:t.jsx(Fr,{})}),t.jsx("b",{children:"Все разделы"})]})})}),rp=f(Z)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,lp=f.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,cp=e=>{const{close:i}=G(),{path:n,orientation:s="vertical",mode:o="use"}=e,a=s==="vertical"?17:50,r=1;if(o==="add")return t.jsx(lp,{width:s==="vertical"?r:"100%",children:t.jsx(tn,{...e,mode:o,maxWordLength:a})});const d=()=>{i(),ve.changeOpen({isOpen:!1,currentPage:n.slice(1,n.length)})};return t.jsx(rp,{to:n,onClick:d,width:s==="vertical"?r:"100%",children:t.jsx(tn,{...e,maxWordLength:a,mode:o})})},dp=f.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,pp=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(ce,{text:"Ничего не было найдено"}):t.jsx(dp,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(cp,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),up=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(oe(s.title).includes(oe(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>oe(a).includes(oe(e))))&&(n[s.id]=s),n},{}),hp=f.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,gp=f(Z)`
    width: 100%;
`,fp=({division:e})=>{const{close:i}=G();return t.jsxs(hp,{children:[t.jsxs(R,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(ye,{size:120,color:"purple",children:t.jsx(Ft,{})}),t.jsx(ee,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(gp,{to:`${wr}/${e}`,onClick:i,children:t.jsx(j,{icon:t.jsx(Yn,{}),width:"100%",text:"Список"})})]})},xp=f.div`
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
`,mp=({division:e})=>{const{open:i}=G(),n=()=>{i(t.jsx(fp,{division:e}),"Подразделение")};return t.jsx(xp,{onClick:n,children:t.jsxs(R,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(R,{gap:"8px",children:[t.jsx(Ft,{}),t.jsx(ee,{fontSize:"1rem",children:e})]}),t.jsx(nt,{})]})})},bp=({divisions:e})=>!e||e.length===0?null:t.jsx(R,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(mp,{division:i},i))}),vp=f.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,nn=f(Z)`
    width: 100%;
`,_p=({group:e})=>{const{close:i}=G();return t.jsxs(vp,{children:[t.jsxs(R,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(ye,{size:120,color:"lightBlue",children:t.jsx(qn,{})}),t.jsx(ee,{fontSize:"1.2rem",children:e})]}),t.jsxs(R,{gap:"8px",onClick:i,children:[t.jsx(nn,{to:`${rt}/${e}`,children:t.jsx(j,{icon:t.jsx(Tt,{}),width:"100%",text:"Расписание"})}),t.jsx(nn,{to:`${yr}/${e}`,children:t.jsx(j,{icon:t.jsx(Yn,{}),width:"100%",text:"Список"})})]})]})},yp=f.div`
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
`,wp=({group:e})=>{const{open:i}=G(),n=()=>{i(t.jsx(_p,{group:e}),"Группа")};return t.jsx(yp,{onClick:n,children:t.jsxs(R,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(R,{gap:"8px",h:"50px",children:[t.jsx(qn,{}),t.jsx(ee,{fontSize:"1rem",children:e})]}),t.jsx(nt,{})]})})},jp=({groups:e})=>e?t.jsx(R,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(wp,{group:i},i))}):null,ai=[{title:"Инструкции",links:[{link:P+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:P+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:P+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:P+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:P+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:P+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:P+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:P+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:P+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:P+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:P+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:P+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:P+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:P+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:P+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:P+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:P+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:P+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:W},{link:P+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:W},{link:P+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:W},{link:P+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:W},{link:P+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:W},{link:P+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:W},{link:P+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:W},{link:P+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:W},{link:P+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:W},{link:P+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:W},{link:P+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:W},{link:P+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:W},{link:P+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:W}]},{title:"Положения",links:[{link:P+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:W},{link:P+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:W},{link:P+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:W},{link:P+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:W},{link:P+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:W},{link:P+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:W},{link:P+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:W},{link:P+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:W},{link:P+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:W},{link:P+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:W},{link:P+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:W},{link:P+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:W},{link:P+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:W},{link:P+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:W},{link:P+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:W}]}];var de=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))(de||{});const qe={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},kp=[{id:de.information,title:qe[de.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:de.security,title:qe[de.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:de.instructions,title:qe[de.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...ai[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:de.regulations,title:qe[de.regulations],visible:"staff",content:[{title:"Положения",links:[...ai[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:de.orders,title:qe[de.orders],visible:"staff",content:[{title:"Приказы",links:[...ai[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:de.courses,title:qe[de.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],Tp=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>oe(a.title).includes(oe(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),Vs=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:d=!1,placeholder:c="Поиск по меню",validationCheck:p=!1})=>{const u=v=>{n(i(v,e))},x=()=>{n(null)},[m,h,g]=Ms({onDebounce:u,onClear:x}),b=v=>{h(v),o&&o(v)};return t.jsx(Ds,{value:m??"",setValue:b,inputAppearance:s,placeholder:c,validationCheck:p,loading:d?g:!1,hints:a,width:r})},Ep=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(Td,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),Gs=f.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,Sp=f(Gs)`
    background: var(--almostTransparentOpposite);
`,$p=f(Gs)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>w[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,Ys=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(pe,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(Sp,{},a)),t.jsx($p,{color:n,current:i})]}),Pp=f.div`
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
`,Ce=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>o?t.jsxs(Pp,{checked:i,invisibleOnFalse:r,fontSize:s,onClick:()=>{a&&n(!i)},isActive:a,className:"checkbox",children:[t.jsx(j,{width:"25px",height:"25px",onClick:()=>null,icon:i||r?t.jsx(Br,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(Ur,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"checkbox-text",children:e})]}):null,qs=e=>e.split("/")[1],Op=e=>e*1024*1024,Ap=(e,i)=>(i??Rl).indexOf(e.type)!==-1,sn=(e,i,n,s,o=Nl)=>{if(n&&i.length+e.length>n)return V.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return Ap(e[a],s)?e[a].size>Op(o)?(V.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(console.log(e[a]),V.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>qs(r))}`,type:"failure",time:5e3}),i)},Rp=f.label`
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
`,at=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},Np=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[d,c]=l.useState(!1),p=g=>{const b=g.target.files;b!=null&&b.length&&n(sn(b,e,i,o,a))},u=g=>{g.preventDefault()},x=g=>{g.preventDefault(),c(!1);const b=g.dataTransfer.files;b.length&&n(sn(b,e,i,o,a))},m=g=>{g.preventDefault(),c(!0)},h=g=>{g.preventDefault(),c(!1)};return t.jsxs(Rp,{isActive:s,showPulse:d,onDragOver:g=>s&&u(g),onDragEnter:g=>s&&m(g),onDragLeave:g=>s&&h(g),onDrop:g=>s&&x(g),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:p}),t.jsxs("div",{className:"message",children:[t.jsx(ni,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(ni,{className:"icon-1"}),t.jsx(ni,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsx(ee,{align:"center",children:t.jsx(at,{words:[`Форматы: ${o?o.map(g=>qs(g)).join(", "):"jpg, png, pdf"}`,`Макс. файлов: ${i}`]})})]})]})},Cp=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},Ip=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),Lp=f.div`
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
`,Dp=({file:e,files:i,setFiles:n})=>{const{open:s}=G(),o=(r,d)=>{r.preventDefault(),r.stopPropagation();const c=new FileReader;c.onloadend=()=>{s(t.jsx(Es,{src:c.result,loading:!1,width:"500px",height:""}))},d&&c.readAsDataURL(d)},a=r=>je.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(Ip(r,e.name,i))});return t.jsxs(Lp,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(Hr,{}):t.jsx(Wr,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(ee,{fontSize:"0.7em",children:Cp(e.size)})]})]}),t.jsx(j,{icon:t.jsx($e,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},zp=({files:e,setFiles:i})=>t.jsx(pe,{title:"Список файлов",visible:!!e.length,onDelete:()=>je.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx(Dp,{file:n,files:e,setFiles:i},n.name))}),Ks=e=>t.jsxs(pe,{gap:12,children:[t.jsx(Np,{...e}),t.jsx(zp,{files:e.files,setFiles:e.setFiles})]}),Mp=f.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,Fp=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(Mp,{children:[t.jsx(Ce,{...e}),n&&t.jsx(Ks,{...i})]}),Bp=f.div`
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
`,Up=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:d})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const c=new Date(n[0]),p=new Date(c);p.setDate(c.getDate()+r),n[1]=We(p,"extraWeird")}return t.jsxs(Bp,{children:[t.jsx(K,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(re,{title:"Внимание",type:"alert",icon:t.jsx(vt,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(Te,{value:n[0],danger:!o,setValue:c=>s([c,n[1]]),type:"date",minValue:d}),t.jsx(Te,{value:n[1],setValue:c=>s([n[0],c]),type:"date",danger:!o})]})]})},Hp=e=>{var g,b,v;const{width:i}=Kt(),n=l.useRef(null),[s,o]=l.useState(!1),[a,r]=l.useState(!1),[d,c]=l.useState(0),[p,u]=l.useState(0),x=((g=n.current)==null?void 0:g.clientWidth)??1,m=Math.ceil((((b=n.current)==null?void 0:b.scrollWidth)??0)/(x+(e??0)));return l.useEffect(()=>{n.current&&(n.current.scrollLeft=d,n.current.clientWidth<n.current.scrollWidth?(o(!0),r(!0)):(r(!1),o(!1)))},[d,(v=n.current)==null?void 0:v.clientWidth,i]),{listRef:n,leftArrow:s,rightArrow:a,setScrollLeft:c,pageOffset:x,amountOfPages:m,currentPage:p,setCurrentPage:u,handleScroll:S=>{u(Math.ceil(S.currentTarget.scrollLeft/(x+(e??0))))}}},Wp=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:d,wrap:c,onAdd:p,onWatchMore:u,onDelete:x,showPages:m,innerPadding:h,minWidth:g,wrapOnMobile:b,position:v,direction:S="vertical",verticalAlign:_="top",horizontalAlign:E="left",scroll:k=!0,visible:Y=!0,...$}=e;if(!Y)return null;const{listRef:N,leftArrow:J,rightArrow:z,handleScroll:Q,setScrollLeft:Oe,pageOffset:De,amountOfPages:ti,currentPage:ii}=Hp(s);return t.jsxs(Kc,{padding:r,position:v,width:o,minWidth:g,height:a,children:[t.jsxs(K,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,p&&t.jsx(j,{icon:t.jsx(_t,{}),width:"35px",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:p}),u&&t.jsx(j,{width:"50px",height:"15px",background:w.blue.transparent2,textColor:w.blue.light1,onClick:u,text:"Ещё"}),x&&t.jsx(j,{width:"fit-content",height:"15px",background:w.grey.transparent3,textColor:"var(--reallyBlue)",onClick:x,text:"Удалить"})]}),t.jsx(At,{verticalAlign:_,horizontalAlign:E,direction:S,ref:N,gap:s,width:o,height:a,fontSize:d,wrap:c,innerPadding:h,scroll:k,wrapOnMobile:b,onScroll:Q,...$,children:n}),(z||J)&&t.jsxs("div",{className:"bottom-wrapper",children:[J&&t.jsx(j,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(Et,{}),className:"left-button",textColor:w.grey.main,onClick:()=>{Oe(B=>{var q;return Ne(B-De-(s??0),((q=N.current)==null?void 0:q.scrollWidth)??0)})}}),m&&t.jsx(Ys,{direction:"horizontal",current:ii,amount:ti}),z&&t.jsx(j,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(nt,{}),className:"right-button",textColor:w.grey.main,onClick:()=>{Oe(B=>{var q;return Ne(B+De+(s??0),((q=N.current)==null?void 0:q.scrollWidth)??0)})}})]})]})},pe=se.memo(Wp),Vp=f.div`
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
`,Gp=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s},o)=>t.jsxs(Vp,{children:[t.jsx(K,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(pe,{gap:16,children:s.map(({title:a,href:r,visible:d},c)=>d==="staff"&&!i||d==="student"&&i?null:t.jsx("a",{href:r,target:"_blank",rel:"noreferrer",children:a},a+c))})]},n+o))}):null,Yp=f.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,qp=f.div``,Kp=f.div`
    min-height: 0;
    min-width: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
    opacity: ${({isOpen:e})=>e?"1":"0"};
`,Xp=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);l.useEffect(()=>{a(s)},[s]);const r=()=>a(d=>!d);return t.jsxs(Yp,{isOpen:o,bottomMargin:n,onClick:r,children:[e&&t.jsx(qp,{children:e}),t.jsx(Kp,{isOpen:o,children:i})]})},Jp="2.2.0",Xs=()=>t.jsx(re,{icon:null,type:"info",title:Jp,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),fe=({color:e,children:i})=>t.jsx(ye,{color:e,children:i}),Qp=()=>({info:t.jsx(fe,{color:"grey",children:t.jsx(jt,{})}),message:t.jsx(fe,{color:"red",children:t.jsx(Pi,{})}),alert:t.jsx(fe,{color:"purple",children:t.jsx(Oi,{})}),"payment-dorm":t.jsx(fe,{color:"green",children:t.jsx(di,{})}),"payment-ed":t.jsx(fe,{color:"green",children:t.jsx(di,{})}),"digital-services":t.jsx(fe,{color:"red",children:t.jsx(C,{})}),"doc-for-review":t.jsx(fe,{color:"blue",children:t.jsx(C,{})}),"hr-applications":t.jsx(fe,{color:"green",children:t.jsx(C,{})}),"kpi-pps":t.jsx(fe,{color:"pink",children:t.jsx(Kn,{})}),schedule:t.jsx(fe,{color:"pink",children:t.jsx(Tt,{})}),"version-update":t.jsx(Xs,{}),"electronic-interaction":t.jsx(fe,{color:"blue",children:t.jsx(Xn,{})})}),Zp=f(Z)`
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
`,eu=f.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,tu={small:"0.8rem",middle:"0.83rem",big:"0.86rem"},iu={small:"0.75rem",middle:"0.78rem",big:"0.80rem"},nu={small:"0px",middle:"1px",big:"3px"},Js=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:d,goTo:c,onClose:p,bottomMargin:u,closeAnimation:x=!0,loadingRemove:m=!1,canClose:h=!0,fullText:g=!0,maxLetters:b=200,size:v="middle"})=>{const S=We(o,"short"),{close:_}=G(),[E,k]=l.useState(!1),Y=N=>{N.stopPropagation(),N.preventDefault(),x?(k(!0),setTimeout(()=>{p==null||p()},300)):p==null||p()},$=()=>{a==null||a(),h&&Ve.clearById({id:e,pageId:d}),_()};return t.jsx(Xp,{forceState:!E,bottomMargin:u,children:t.jsxs(Zp,{to:c??"",onClick:$,closed:E,children:[t.jsx("span",{className:"left-icon",children:Qp()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(ee,{fontSize:"0.7rem",children:t.jsx(at,{words:[S??"",s??""]})}),t.jsxs(R,{d:"column",gap:nu[v],ai:"flex-start",children:[t.jsx(eu,{fontSize:tu[v],children:g?i:wt(i,b)}),t.jsx(ee,{fontSize:iu[v],children:g?n:wt(n,b)})]})]}),p&&t.jsx(j,{isActive:!(m&&E),icon:t.jsx($e,{}),background:"transparent",onClick:Y})]})})},Qs=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{Ve.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx(R,{d:"column",children:e.map((o,a)=>l.createElement(Js,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},Ut=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,on=({people:e,type:i})=>!e||e.length===0?null:t.jsx(R,{d:"column",children:e.map(n=>l.createElement(po,{name:n.fio,type:i,...n,key:n.id}))}),su=()=>{const{allRoutes:e}=Ee.useMenu(),{notifications:i,removeNotificationLoading:n}=we.useLkNotifications(),{data:{user:s}}=ne.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>kp.flatMap(({visible:$,content:N})=>$==="staff"&&o||$==="student"&&!o||$==="all"?N:[]),[o]),[r,d]=l.useState(null),[c,p]=l.useState(null),[u,x]=l.useState(null),[m,h]=l.useState(null),[g,b]=l.useState(null),[v,S]=l.useState(null),[_,E]=l.useState(null),k=[{title:"Разделы",content:t.jsx(pp,{pages:g,showNotFound:!1}),clear:()=>{b(null)},search:$=>{if(e){const N=up($,e);b(N)}},data:g},{title:"Студенты",content:t.jsx(on,{people:m,type:"stud"}),data:m,clear:()=>{h(null)},search:async $=>{const{data:N}=await yc($,"",1,20);h(N.items)}},{title:"Сотрудники",content:t.jsx(on,{people:u,type:"staff"}),data:u,clear:()=>{x(null)},search:async $=>{const{data:N}=await mc($,"",1,20);x(N.items)}},{title:"Группы",content:t.jsx(jp,{groups:r}),data:r,clear:()=>{d(null)},search:async $=>{const{data:N}=await wc($);d(N.items)}},{title:"Подразделения",content:t.jsx(bp,{divisions:c}),data:c,clear:()=>{p(null)},search:async $=>{const{data:N}=await bc($);p(N.items)}},{title:"Уведомления",content:t.jsx(Qs,{notifications:v,loadingRemove:n}),clear:()=>{S(null)},search:$=>{const N=i.filter(J=>oe(J.title).includes($));S(N)},data:v},{title:"Полезная информация",content:t.jsx(Gp,{blocks:_,isStaff:o}),clear:()=>{E(null)},search:$=>{const N=Tp($,a);E(N)},data:_}];return[(()=>{const{content:$,clear:N,data:J}=k.reduce((z,Q)=>(Ut(Q.data)&&(z.data.push(Q.data),z.content.push(t.jsxs(t.Fragment,{children:[t.jsx(K,{size:4,align:"left",children:Q.title}),Q.content,t.jsx(he,{})]}))),z.clear.push(Q.clear),z),{content:[],clear:[],data:[]});return{title:"Все",content:$,clear:()=>N.map(z=>z()),search:async z=>{z.length<=8&&/\d|[-]/g.test(z)?await k[3].search(z):(k[0].search(z),k[5].search(z),k[6].search(z),Ut(k[0].data)===0&&(await k[1].search(z),await k[2].search(z),await k[4].search(z)))},data:J}})(),...k]},ou=()=>JSON.parse(localStorage.getItem("search_history")??"[]"),au=()=>{const e=su(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>ou(),[]),r=async m=>{e[i].clear();const h=Is(m)?Cs(m):m;await e[i].search(h),h.length>0&&!a.includes(h)&&(a.unshift(h),a.length>8&&a.pop(),localStorage.setItem("search_history",JSON.stringify(a)))},[d,c,p]=Ms({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:m=>(o(m),m.length>0&&(s!==m||!e[i].data))}),u=!p&&!d.length,x=!!d.length&&!p&&!!Ut(e[i].data);return{showMessage:u,showSearchResult:x,searchValue:d,setSearchValue:c,currentPage:i,setCurrentPage:n,config:e,loading:p,searchHistory:a}},ru=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(Wi,{})})):e?n.filter(s=>oe(s).includes(oe(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(Wi,{})})):[],lu=()=>t.jsxs(R,{gap:"8px",ai:"flex-start",children:[t.jsx(D,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(R,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(D,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(D,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),cu=f.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,du=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:d,searchHistory:c}=au(),p=ru(r,n,c),{isOpen:u}=G();return t.jsx(cu,{children:t.jsxs(R,{d:"column",gap:"8px",h:"100%",children:[t.jsx(Ds,{value:n,setValue:s,loading:r,focusOn:u,hints:p}),t.jsx(zs,{pages:d.map(({title:x})=>({title:x})),currentPage:o,setCurrentPage:a}),t.jsx(Ls,{value:n,setValue:s}),e&&t.jsx(R,{h:"100%",children:t.jsx(ce,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(ke,{})})}),!r&&n.length!==0&&!e&&!Ut(d[o].data)&&t.jsx(R,{h:"100%",children:t.jsx(ce,{size:"60px",text:"Ничего не было найдено",image:t.jsx(Hn,{})})}),r&&Array(10).fill(0).map((x,m)=>t.jsx(lu,{},m)),i&&t.jsx(t.Fragment,{children:d[o].content})]})})},pu=f(Pe)`
    cursor: pointer;
    &:hover {
        filter: brightness(0.96);
    }
`,uu=f.div`
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
`,hu=f(R)`
    @media (max-width: 1000px) {
        display: none;
    }
`,gu=()=>{const e=Fd();return{Windows:[{title:"CTRL",key:"Control"},{key:"k"}],Linux:[{title:"CTRL",key:"Control"},{key:"k"}],UNIX:[{title:"CTRL",key:"Control"},{key:"k"}],MacOS:[{title:"CMD",key:"Meta",icon:t.jsx(Vr,{})},{key:"k"}]}[e]},Zs=({size:e="large"})=>{const i=gu(),{open:n}=G(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(du,{}),"Глобальный поиск");return Ns(i.map(({key:r})=>r),a),e==="icon"?t.jsx(j,{direction:"vertical",icon:t.jsx(ke,{}),width:"40px",minWidth:"40px",background:"transparent",onClick:a}):t.jsxs(pu,{maxWidth:"750px",width:o,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(ee,{align:"left",fontSize:"0.9rem",children:t.jsxs(R,{gap:"8px",children:[t.jsx(ke,{}),"Поиск"]})}),t.jsx(hu,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(uu,{children:(r==null?void 0:r.icon)??(r.title??r.key).toUpperCase()},r.key))})]})},fi=e=>e.split(" ").map(i=>i[0]),me=(e,i)=>{const n=fi(e),s=w[Al[n[0]]];return s==null?void 0:s[i??"main"]},fu=f.div`
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
`,xu=f.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function Rt({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:d,boxShadow:c,border:p,icon:u,avatarModal:x,onClick:m,borderRadius:h,background:g}){const[b,v]=l.useState(!0),S=fi(i)[0]+(fi(i)[1]??""),{open:_}=G(),E=k=>{x?_(t.jsx(Rt,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):m==null||m(k)};return t.jsxs(fu,{selected:e,width:s,height:o,marginRight:a,background:g??me(i),boxShadow:c,border:p,onClick:E,borderRadius:h,children:[n&&b?t.jsx(xu,{loading:"lazy",round:!0,onLoadedData:()=>v(!0),onError:()=>v(!1),src:n}):t.jsx("div",{className:"name",children:S}),u&&t.jsx("span",{className:"icon",children:u}),t.jsx(Ce,{invisibleOnFalse:!0,checked:d??!1,visible:d!==void 0,setChecked:()=>null}),t.jsx(it,{left:"80%",top:"90%",outline:"4px solid var(--schedule)",visible:!!r,children:r})]})}const mu=({quantity:e=1,avatarShape:i="circle"})=>t.jsx(R,{d:"column",gap:"20px",children:Array(e).fill(0).map((n,s)=>t.jsxs(R,{gap:"16px",ai:"center",children:[t.jsx(D,{shape:i,size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(R,{gap:"8px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(D,{shape:"rect",size:{width:"90%",height:"13px"},margin:"0"}),t.jsx(D,{shape:"rect",size:{width:"70%",height:"10px"},margin:"0"})]})]},s))}),bu=f.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,eo=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=we.useLkNotifications();return l.useEffect(()=>{o&&V.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{Ve.clearAllVisible()},[]),t.jsxs(bu,{children:[s.length===0&&!n&&t.jsx(Mi,{height:"100%",children:t.jsx(ce,{text:i??"Нет новых уведомлений",image:i?t.jsx(Ue,{}):t.jsx(Gr,{}),size:"70px"})}),t.jsxs(R,{d:"column",gap:"16px",children:[t.jsx(re,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(Qs,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(mu,{quantity:10})]})},vu=f.div`
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
`,to=()=>{const{close:e}=G(),{notifications:i}=we.useLkNotifications(),n=3;return t.jsxs(R,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs(R,{d:"column",gap:"16px",children:[t.jsx(eo,{maxNotificationsVisible:n}),t.jsxs(ee,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",Hs(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(Z,{to:Or,style:{width:"100%"},children:t.jsx(j,{width:"100%",text:"Показать все",onClick:e})})]})},_u=()=>{const{notifications:e}=we.useLkNotifications(),{open:i}=G(),n=()=>{i(t.jsx(to,{}),"Уведомления")};return t.jsxs(vu,{onClick:n,children:[t.jsx(it,{outline:"none","box-shadow":"0px 0px 0px 3px var(--schedule)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length>10?"10+":e.length}),t.jsx(pi,{})]})},xb=f.header`
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
`;f.div`
    width: ${({width:e})=>e+"px"};
    height: ${({height:e})=>e+"px"};
    border-radius: ${({borderRadius:e})=>e+"px"};
    position: absolute;
    top: ${({top:e})=>e+"%"};
    left: ${({left:e})=>e+"%"};
    z-index: -1;
    box-shadow: 0 0 10px #00000003;
    background-color: ${({color:e})=>e};
`;const mb=f.div`
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
`,yu=f.div`
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
`,bb=f.div`
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
`,vb=f.div`
    margin-top: 50px;
    width: 100%;
`,_b=f.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,yb=f(Pe)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,wb=f.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,wu=f.div`
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
`,ju=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(wu,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(Ep,{id:Math.random().toString(),isToggled:i,setIsToggled:a},e)]})]},e)},ku=f.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`,Tu=({title:e,toggles:i,setToggles:n,disabled:s})=>{const o=l.useCallback((a,r)=>{i[a].state=!i[a].state,n([...i]),r&&(r==null||r(i[a].state))},[i,n]);return t.jsxs(ku,{children:[!!e.length&&t.jsx("h2",{children:e}),i.map(({title:a,state:r,action:d},c)=>t.jsx(ju,{disabled:s,title:a,state:r,action:()=>o(c,d)},a))]})},io=({type:e,onClick:i})=>{const{theme:n,switchTheme:s}=Gt(),{settings:o}=st.useSettings(),a=o==null?void 0:o["settings-appearance"].property,[r,d]=l.useState(n==="light"),c=r?t.jsx(Yr,{}):t.jsx(qr,{}),u=`Тема: ${r?"Светлая":"Темная"}`,[x,m]=l.useState([{title:"Темная тема",state:n!=="light",action:g=>s(g)}]);l.useEffect(()=>{m([{title:"Темная тема",state:n!=="light",action:g=>s(g)}])},[n]),l.useEffect(()=>{d(n==="light")},[n]);const h=()=>{s(r),d(g=>!g),i==null||i()};return e==="toggle"?t.jsx(Tu,{disabled:!!(a!=null&&a.scheduledLightTheme),title:"",toggles:x,setToggles:m}):e==="h-button"?t.jsx(j,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,text:u,background:"var(--schedule)",icon:c,width:"100%",align:"left",onClick:h}):t.jsx(j,{notActiveClickMessage:"У вас включена тема по расписанию. Если хотите управлять темой вручную, перейдите в настройки -> внешний вид",isActive:!a.scheduledLightTheme,padding:"0",background:w.white.transparent2,icon:t.jsx(yu,{width:"30px",background:w.green.main,children:c}),onClick:h,text:u,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},Eu=f.div`
    position: relative;
`,no=()=>{const{open:e}=G(),{notifications:i}=we.useLkNotifications(),n=()=>be.close(),s=()=>{je.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Si.logout}),n()},o=()=>{be.close(),e(t.jsx(uo,{}),"Что нового")},a=()=>{e(t.jsx(to,{}),"Уведомления"),be.close()};return t.jsxs(t.Fragment,{children:[t.jsx(eg,{padding:"8px",size:"small"}),t.jsx(he,{}),t.jsx(io,{type:"h-button"}),t.jsx(he,{}),t.jsxs(Eu,{children:[t.jsx(j,{onClick:a,icon:t.jsx(Ai,{}),text:"Уведомления",width:"100%",background:"var(--schedule)",align:"left"}),t.jsx(it,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(Z,{to:ae,children:t.jsx(j,{text:"Настройки",background:"var(--schedule)",icon:t.jsx(Ri,{}),width:"100%",align:"left",onClick:n})}),t.jsx("a",{href:`${P}/index.php`,children:t.jsx(j,{text:"Старый дизайн",icon:t.jsx(Jn,{}),width:"100%",background:"var(--schedule)",align:"left"})}),t.jsx(he,{}),t.jsx(j,{align:"left",icon:t.jsx(Kr,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--schedule)"}),t.jsx(he,{}),t.jsx(j,{align:"left",icon:t.jsx(Xs,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--schedule)"})]})},Su=f.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-mild-xxl);
    }
`,$u=({showSearch:e=!1})=>{const{data:{user:i}}=ne.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),be.open({e:s,height:143,content:t.jsx(no,{})})};return t.jsxs(Su,{children:[e&&t.jsx(Zs,{size:"icon"}),t.jsx(_u,{}),t.jsx(Rt,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},Pu=[{query:"(max-width: 766px)",title:"isMobile"},{query:"(min-width: 767px) and (max-width: 1199px)",title:"isTablet"},{query:"(min-width: 1200px)",title:"isDesktop"}],ri=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),Ci=()=>{const e=Pu.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(ri(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(ri(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(ri(e))}))),[]),i},Ou=f.header`
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
`,Au=f.div`
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
        transform: ${({headerVisible:e,noButton:i})=>`translate(${e?i?"0, 0":"25px, 0":"0px, 50px"})`};
        width: ${({headerVisible:e})=>e?"180px":"calc(100% - 30px)"};
    }
`,Ru=()=>{const{pathname:e}=Qn(),[i,n]=l.useState([e]),{action:s}=St();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},Nu=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=St();return t.jsx(j,{text:i,onClick:()=>s.goBack(),icon:t.jsx(Lt,{}),textColor:"var(--reallyBlue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},Cu=({currentPage:e,exactCurrentPage:i,isHeaderVisible:n})=>{const s=St(),o=Ru(),a=(c=bt)=>()=>{ve.changeOpen({isOpen:!1,currentPage:c.slice(1,c.length)}),s.push(c)},r=se.useMemo(()=>i?i.isSubPage?i.subPageHeaderTitle:i.title:e==null?void 0:e.title,[e,i]);return{backButton:se.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?o.length>1?t.jsx(Nu,{text:i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(j,{direction:"vertical",icon:t.jsx(Lt,{}),onClick:a(i.fallbackPrevPage),background:"transparent"}):t.jsx(j,{direction:"vertical",icon:t.jsx(Lt,{}),onClick:a(),background:"transparent"}):t.jsx(j,{icon:t.jsx(Lt,{}),onClick:a(),background:"transparent",text:n?void 0:"Все разделы",padding:"0",textColor:"var(--reallyBlue)"}),[i,o,a]),headerTitle:r}},so=e=>(e==null?void 0:e.pageSize)==="big"?"1000px":(e==null?void 0:e.pageSize)==="small"?"600px":"700px",Iu=({currentPagePair:{currentPage:e,exactCurrentPage:i},headerVisible:n=!1})=>{var c,p;const{isMobile:s}=Ci(),o=n||!!(i!=null&&i.planeHeader),{headerTitle:a,backButton:r}=Cu({currentPage:e,exactCurrentPage:i,isHeaderVisible:o}),d=so(i);return(c=i??e)!=null&&c.withoutHeader?null:t.jsxs(Ou,{headerVisible:o,hidden:(p=i??e)==null?void 0:p.withoutHeader,children:[t.jsx(Au,{maxWidth:d,noButton:i==null?void 0:i.withoutBackButton,headerVisible:o,children:a}),t.jsxs(R,{jc:"space-between",mw:d,children:[r??t.jsx("div",{}),s&&t.jsx($u,{showSearch:!0})]})]})},Lu=se.memo(Iu),Du=f(Z)`
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
`,zu=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>n?t.jsx(D,{shape:"circle",size:{width:"40px",height:"40px"}}):t.jsxs(Du,{to:vr,onClick:()=>ve.changeOpen({isOpen:!1,currentPage:"profile"}),children:[t.jsx(j,{icon:t.jsx(Gn,{}),className:"more-button",background:"transparent",onClick:r=>{r.preventDefault(),r.stopPropagation(),be.open({e:r,height:143,content:t.jsx(no,{})})}}),t.jsx(Rt,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(K,{size:5,children:e})]}),Mu=se.memo(zu),Fu=["isCurrent","color"],Bu=f(Z).withConfig({shouldForwardProp:e=>!Fu.includes(e)})`
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
`,Uu=f.div`
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
`,Hu=f.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,Wu=f.button`
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
`,Vu=e=>{const{path:i,icon:n,title:s,isCurrent:o,isAdmin:a,color:r,notifications:d}=e;return t.jsxs(Bu,{to:i,className:"leftside-bar-item",color:r,isCurrent:o,onClick:()=>{ve.changeOpen({isOpen:!1,currentPage:i.slice(1,i.length)})},title:s,children:[t.jsx(it,{className:"notification",top:"50%",visible:a,right:"-20px",color:"pink",children:"A"}),t.jsx(it,{className:"notification",top:"50%",visible:!!d,right:a?"0px":"-20px",color:"red",children:d}),n,t.jsx("span",{className:"title",children:s}),t.jsx(Us,{route:e})]})},oo=se.memo(Vu),Gu=()=>{const{isOpen:e}=Ee.useMenu();return t.jsx(t.Fragment,{children:t.jsx(j,{icon:t.jsx($e,{}),onClick:()=>ve.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},Yu=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(Wu,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};se.memo(Yu);f.section`
    width: 100%;
    max-width: 270px;
    color: #383634;

    border-bottom: 1px solid rgba(56, 54, 52, 0.08);

    transition-property: padding-top, padding-bottom;
    transition: 0.3s ease-in-out;
`;f.div`
    height: 0;
    opacity: 0;

    /* display: flex; */
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &.show {
        height: 180px; /* Если оставляю проценты, то визуализация перехода идёт по другому */
        opacity: 1;
    }
`;const qu=()=>{const{leftsideBarRoutes:e,currentPage:i}=Ee.useMenu(),n=l.useMemo(()=>{const s=window.location.hash.split("/");return s.length>2&&s[1]?s[1]:i==null?void 0:i.id},[i]);return e?t.jsx(Hu,{children:Object.values(e).filter(s=>s!==void 0).map(s=>l.createElement(oo,{...s,key:s==null?void 0:s.id,isCurrent:n===(s==null?void 0:s.id)}))}):t.jsxs(R,{d:"column",children:[t.jsxs(R,{gap:"8px",children:[t.jsx(D,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(D,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(R,{gap:"8px",children:[t.jsx(D,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(D,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(R,{gap:"8px",children:[t.jsx(D,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(D,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(R,{gap:"8px",children:[t.jsx(D,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(D,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},Ku=se.memo(qu),Xu=()=>{const{isOpen:e}=Ee.useMenu(),{width:i,height:n}=Kt(),{data:{user:s}}=ne.useUser(),{visibleRoutes:o,currentPage:a}=Ee.useMenu();return t.jsxs(Uu,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(Z,{to:Bi,children:t.jsx(qt,{width:"165px"})}),t.jsx(Mu,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:(a==null?void 0:a.id)==="profile"}),t.jsx(Zs,{size:"small"}),t.jsx(Ku,{})]}),t.jsx(io,{type:"toggle"}),i<1e3&&t.jsx(Gu,{})]})},Ju=f.div`
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
`,Qu=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=Ts.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{V.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),V.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(Ju,{isOpen:e,isClickable:!!o,color:He[n].color,onClick:a,children:t.jsx(re,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>V.openPopUpMessage({isOpen:!1}),children:i})})},Zu=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(Ni);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},eh=f.div`
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
`,Xt=f.div`
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
`,th=f.div`
    padding-top: 30px;
`,ih=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=Zu(),r=l.useRef(null),d=l.useMemo(()=>e&&!!i,[e,i]);return Ns(["Escape"],o),ot(r,()=>{o()}),t.jsx(Xt,{isOpen:d,children:t.jsxs(eh,{isOpen:d,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(j,{onClick:s,icon:t.jsx(Et,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(K,{size:3,align:"left",children:a}),t.jsx(j,{onClick:o,icon:t.jsx($e,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--search)"}),t.jsx(th,{children:i})]})})},nh=se.memo(ih),sh=f.div`
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
`,oh=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s}=ys.useConfirm(),o=l.useRef(null);ot(o,()=>je.closeConfirm());const a=()=>{n(),je.closeConfirm()},r=()=>{je.closeConfirm()};return t.jsx(Xt,{isOpen:e,children:t.jsxs(sh,{isOpen:e,ref:o,children:[t.jsx(K,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(pe,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(j,{text:"Да",onClick:a,width:"90px",textColor:w.red.main,background:"transparent",hoverBackground:w.red.transparent3}),t.jsx(j,{text:"Нет",onClick:s??r,width:"90px",textColor:w.blue.main,background:"transparent",hoverBackground:w.blue.transparent3})]})]})})},ah=f.div`
    display: flex;
    align-items: ${({align:e})=>gi(e)};
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
`,jb=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:d="center",appearance:c=!0})=>{const[p,u]=l.useState(i),{width:x}=Kt(),m=l.useRef(null),h=()=>{var b;m!=null&&m.current&&x<=1e3&&u(Math.round(((b=m.current)==null?void 0:b.scrollLeft)/x))},g=b=>{var v;u(b),r==null||r((v=e[b])==null?void 0:v.id),m!=null&&m.current&&(m.current.scrollLeft=m.current.clientWidth*b)};return l.useEffect(()=>{g(p)},[i,x]),t.jsxs(ah,{width:n,align:d,maxWidth:o,children:[t.jsx(zs,{pages:e.map(({title:b,condition:v})=>({title:b,condition:v})),currentPage:p,setCurrentPage:g,sliderWidth:a,appearance:c}),t.jsx("div",{className:s??"slider-content",ref:m,onScroll:h,children:e.map(b=>b.condition!==void 0&&b.condition||b.condition===void 0?t.jsx("div",{className:"slider-page",children:b.content},b.title):t.jsx("div",{className:"slider-page",children:t.jsx(ce,{text:"Нет данных"})},b.title))})]})},an=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},rn=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",ao=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},rh=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},lh=f.div`
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
`,Me=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(lh,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{children:i})]}):null,ch=f.div`
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
`,dh=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx(ch,{width:i,height:n,color:me(e,"dark1"),color2:me(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:me(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:me(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:me(e,"light2")})})]})}),ph=f.div`
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
`,uh=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:d,degreeLevel:c,course:p,isMe:u=!1,noInfo:x=!1})=>{const m=x?"140px":"110px",h=ao(u,n,s,o);return t.jsxs(ph,{children:[t.jsx(dh,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(Rt,{avatarModal:!0,border:!0,name:i,avatar:e,width:m,height:m,marginRight:"0"}),!x&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(ee,{fontSize:"0.9rem",children:t.jsx(at,{words:h})}),t.jsx(Me,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(Me,{fontSize:"0.9rem",visible:!!d,keyStr:"Факультет",value:d}),t.jsx(Me,{fontSize:"0.9rem",visible:!!c,keyStr:"Уровень образования",value:c}),t.jsx(Me,{fontSize:"0.9rem",visible:!!p,keyStr:"Курс",value:p}),t.jsx(Me,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},hh=f.div`
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
`,ro=e=>{const{children:i}=e;return t.jsxs(hh,{children:[t.jsx(uh,{...e}),t.jsx("div",{className:"buttons",children:i})]})},gh=f.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,fh=()=>t.jsxs(gh,{children:[t.jsx(D,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(D,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(D,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),lo=e=>{if(e)return()=>{je.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem("token",JSON.stringify({token:e})),location.reload()}})}},xh=e=>{const{close:i}=G(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${me(s,"main")}, ${me(s,"dark1")})`;return t.jsxs(ro,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:`${rt}/${o}`,children:t.jsx(j,{icon:t.jsx(Tt,{}),text:"Расписание",onClick:()=>i(),width:"100%"})}),t.jsx(j,{icon:t.jsx(Pi,{}),text:"Написать",onClick:()=>i(),width:"100%",isActive:!1})]}),n&&t.jsx(j,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:lo(n)})]})},co=e=>{const{close:i}=G(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${me(s,"dark1")}, ${me(s,"main")})`;return t.jsxs(ro,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:`${rt}/${s}`,children:t.jsx(j,{icon:t.jsx(Tt,{}),text:"Расписание",onClick:()=>{i()},width:"100%"})}),t.jsx(j,{icon:t.jsx(Pi,{}),text:"Написать",onClick:()=>i(),width:"100%",isActive:!1})]}),n&&t.jsx(j,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:lo(n)})]})},mh=f.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?rh(i):"100%"};

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
            font-size: ${({size:e})=>an(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
            font-weight: 500;
        }

        .status {
            font-size: ${({size:e})=>`calc(${an(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
            font-weight: 500;
        }
    }
`,po=e=>{const{open:i}=G(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:d,division:c,group:p,isMe:u=!1,loading:x=!1,orientation:m="horizontal",size:h="middle"}=e,g=ao(u,n,c,p);if(x)return t.jsx(fh,{});const b=v=>{r?r(v):u||(be.close(),i(n==="staff"?t.jsx(co,{...e}):t.jsx(xh,{...e})))};return t.jsxs(mh,{orientation:m,size:h,onClick:b,children:[d&&t.jsx("div",{className:"index",children:d}),t.jsx(Rt,{name:o,avatar:s,width:rn(m,h),height:rn(m,h),marginRight:m==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(at,{words:g})})]})]})},bh=f.div`
    width: 100%;
`,vh=()=>t.jsxs(bh,{children:[t.jsx(D,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(D,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(D,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(D,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(D,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(D,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(D,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(D,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),_h=e=>{const{children:i,skeleton:n=t.jsx(vh,{}),loading:s=!1,...o}=e;return t.jsx(Pe,{...o,className:"block",children:s?n:i})},yh=f.div`
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
`,wh=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=G();return o?t.jsxs(yh,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(Z,{to:s,children:t.jsx(j,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},jh=f.div`
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
`,kh=f.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,Th=f(ee)`
    margin-bottom: 20px;
`,It=({image:e,list:i,text:n})=>{const{isMobile:s}=Ci();return t.jsxs(jh,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(K,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(Th,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(kh,{children:i==null?void 0:i.map(o=>l.createElement(wh,{...o,key:o.title}))})]})},Eh=({alert:e})=>{const{content:i,time:n,date:s}=e;return t.jsxs(Sh,{children:[t.jsx(ee,{fontSize:"0.9rem",children:t.jsx(at,{words:[We(s),n]})}),t.jsx(he,{width:"100%",margin:"12px 0"}),t.jsx("div",{dangerouslySetInnerHTML:{__html:i}})]})},Sh=f.div`
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
`,$h=e=>!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e),Ph=e=>{const i=e.indexOf('src="')+5;let n=0;if(i===-1)return null;for(let o=i;o<e.length;o++)if(e[o]==='"'){n=o;break}const s=e.slice(i,n);return $h(s)?s:null},Oh=f.div`
    display: ${({visible:e})=>e?"flex":"none"};
    padding: 8px;
    border-radius: 6px;
    background: ${w.red.light1};
    color: #fff;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
`,Ah=f.div`
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
`,Rh=f.div`
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
`,Nh=f.div`
    min-height: 90px;
    width: 100%;
    padding: 12px;
    display: flex;
    gap: 4px;
    flex-direction: column;
`,Ch=f.div`
    font-weight: 500;
    width: ${({orientation:e})=>e==="vertical"?"100%":"85%"};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,Ih=f.div`
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
`,Lh=f(Oh)`
    position: absolute;
    top: 6px;
    right: -4px;
`,Dh=({news:e,orientation:i="vertical",isNew:n=!1})=>{const s=Ph(e.content),{open:o}=G(),a=()=>o(t.jsx(Eh,{alert:e}),e.title);return t.jsxs(Ah,{onClick:a,orientation:i,children:[t.jsx(Rh,{orientation:i,children:s?t.jsx("img",{src:s,alt:""}):t.jsx(Oi,{})}),t.jsxs(Nh,{children:[t.jsx(Ch,{orientation:i,children:e.title}),t.jsx(Ih,{children:t.jsx("div",{dangerouslySetInnerHTML:{__html:wt(e.content,220)}})}),t.jsx(ee,{children:t.jsx(at,{words:[We(e.date),e.time]})})]}),t.jsx(Lh,{visible:n,children:"New"})]})},zh=f.div`
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
`,xi=f.div`
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
`,Mh=f.div`
    pointer-events: none;
`,Fh=()=>t.jsxs(R,{d:"column",gap:"0px",children:[t.jsx(xi,{className:"first",children:t.jsxs(R,{gap:"16px",w:"fit-content",children:[t.jsx(ye,{color:"orange",children:t.jsx(pi,{})}),t.jsxs(R,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(D,{pulse:!1,size:{width:"250px",height:"10px"},shape:"rect",margin:"0"}),t.jsx(D,{pulse:!1,size:{width:"190px",height:"8px"},shape:"rect",margin:"0"})]})]})}),t.jsx(xi,{className:"second",children:t.jsxs(R,{gap:"16px",w:"fit-content",children:[t.jsx(ye,{color:"orange",children:t.jsx(pi,{})}),t.jsxs(R,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(D,{pulse:!1,size:{width:"250px",height:"10px"},shape:"rect",margin:"0"}),t.jsx(D,{pulse:!1,size:{width:"190px",height:"8px"},shape:"rect",margin:"0"})]})]})})]}),Bh=()=>t.jsxs(R,{d:"column",gap:"8px",children:[t.jsx(_h,{height:"fit-content",padding:"12px",maxWidth:"320px",children:t.jsxs(R,{gap:"8px",children:[t.jsx(ke,{}),"Распис"]})}),t.jsx(xi,{children:t.jsxs(R,{gap:"16px",w:"fit-content",children:[t.jsx(ye,{color:"pink",children:t.jsx(Tt,{})}),t.jsxs(R,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(D,{pulse:!1,size:{width:"250px",height:"10px"},shape:"rect",margin:"0"}),t.jsx(D,{pulse:!1,size:{width:"190px",height:"8px"},shape:"rect",margin:"0"})]})]})})]}),Uh=()=>t.jsx(Mh,{children:t.jsx(R,{mw:"250px",children:t.jsx(Dh,{news:{title:"Новости",time:"4:20",content:"Как неожиданно и приятно",date:"January 1, 1984",id:0}})})}),Hh=()=>{const{data:{user:e}}=ne.useUser(),{allRoutes:i}=Ee.useMenu();if(!i)return null;const n=[i.home,i.payments];return(e==null?void 0:e.user_status)==="stud"&&n.push(i["acad-performance"]),t.jsx(R,{gap:"0px",jc:"center",children:n.map(({color:s,icon:o,id:a,title:r})=>t.jsxs(R,{d:"column",gap:"12px",w:"110px",children:[t.jsx(ye,{badge:"1",color:s,size:50,children:o}),t.jsx(K,{size:5,children:wt(r,8)})]},a))})},uo=()=>{const[e,i]=l.useState(0),{isMobile:n}=Ci(),{close:s}=G(),o=[t.jsx(It,{image:{component:t.jsx(Fh,{}),title:"Уведомления"},text:"Теперь стало проще отслеживать важную информацию, будь то новое сообщение, новости, оплаты или что-либо еще"},0),t.jsx(It,{image:{component:t.jsx(Bh,{}),title:"Глобальный поиск"},text:`Поможет найти то, что нужно. Находится на главной странице или ${n?"в верхней части личного кабинета":"в меню"}`},1),t.jsx(It,{image:{component:t.jsx(Uh,{}),title:"Раздел Новости"},text:"Виджет с новостями добавлен на главный экран, дизайн стал аккуратнее"},2),t.jsx(It,{image:{component:t.jsx(Hh,{}),title:"Обновлены страницы"},text:"Интерфейс стал понятнее и чище"},3)];return t.jsxs(zh,{children:[t.jsx("div",{className:"content",children:o[e]}),t.jsx(Ys,{amount:o.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(j,{onClick:()=>i(a=>Ne(a-1,o.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===o.length-1?t.jsx(j,{onClick:s,text:"Готово",width:"100%",background:w.blue.light1,textColor:"#fff"}):t.jsx(j,{onClick:()=>i(a=>Ne(a+1,o.length-1)),text:"Далее",width:"100%"})]})]})},ln=f(At)`
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
`,Wh=()=>{const{allRoutes:e,currentPage:i}=Ee.useMenu(),{data:{user:n}}=ne.useUser();if(!e||!n)return t.jsxs(ln,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(D,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(D,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(D,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(D,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"}),t.jsx(D,{shape:"rect",size:{width:"55px",height:"40px"},margin:"0"})]});const s=(n==null?void 0:n.user_status)==="stud"?Ax:Rx;return t.jsx(ln,{direction:"horizontal",horizontalAlign:"evenly",children:s.map(o=>t.jsx(oo,{...e[o],isCurrent:(i==null?void 0:i.id)===o},o))})},Vh=(e,i,n)=>({isOpen:i,message:e,position:n}),cn={hints:[]},Gh=()=>I(Yh),ho=O(),go=O(),fo=O(),Yh=ie(cn).on(ho,(e,{message:i,position:n})=>({hints:[...e.hints,Vh(i,e.hints.length===0,n)]})).on(go,e=>({hints:e.hints.splice(1,e.hints.length)})).on(fo,()=>({...cn})),qh={useHint:Gh},Kh={evoke:ho,close:go,clearStore:fo},Xh=f.div`
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
`,Jh=()=>{const{hints:e}=qh.useHint(),i=e[0];return i?t.jsx(Xh,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(re,{type:"hint",title:i.message,onClose:()=>Kh.close(),width:"100%",icon:null})}):null},Qh=f.div`
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
`,Zh=50;function kb({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:d,offset:c=Zh}){const{data:{user:p}}=ne.useUser();let u="";const x=l.useCallback(m=>{const h=m.currentTarget.clientHeight,g=m.currentTarget.scrollHeight,b=m.currentTarget.scrollTop;g-c<b+h&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(ce,{text:"Нет результатов",children:d}):t.jsxs(Qh,{onScroll:x,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((m,h)=>{var b,v;const g=r?u!==((b=m.fio)==null?void 0:b.charAt(0)):!1;return g&&(u=((v=m.fio)==null?void 0:v.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[g&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(K,{size:4,align:"left",children:u}),t.jsx(he,{})]}),i(m,(p==null?void 0:p.id.toString())===m.id,h)]})})}),n&&s&&t.jsx(Le,{width:"40px",height:"40px"}),n&&!s&&t.jsx(j,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}f.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const eg=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=ne.useUser();return G(),t.jsxs(pe,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(ee,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(po,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})},Tb={ready:"Готово",pending:"В работе",rejected:"Отклонено"},tg={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},ig={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},Eb=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],Sb=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"},{id:3,title:"На почтовый адрес"}],xo=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>oe(a.title).includes(oe(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),ng=()=>{const e=" (Сервис временно недоступен)";return[{title:"Многофункциональный центр",links:[{link:pa,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:Aa,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:ua,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:ha,title:"Справка-вызов"},{link:Ta,title:"Заявление на пересдачу для получения диплома с отличием"},{link:Oa,title:"Запрос на изменение персональных данных"},{link:ka,title:"Запрос на восстановление магнитного пропуска"},{link:la,title:"Уточнение паспортных данных"},{link:Ra,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:Na,title:"Предоставление каникул в связи с окончанием университета"},{link:Ca,title:"Предоставление академического отпуска"},{link:Ia,title:"Отчисление по инициативе обучающегося"},{link:La,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:ga,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:fa,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:xa,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:ba,title:"Предоставление права проживания льготной категории граждан"},{link:ma,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:va,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:ya,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:wa,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:_a,title:"Расторжение договора найма"},{link:ja,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:rs,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:Sa,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:$a,title:"Заявка на материальную помощь"},{link:da,title:"Оформить социальную стипендию"},{link:Pa,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:Gi,links:[{link:Ea,title:"Отправить документы воинского учета"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:Gi,links:[{link:_i,title:"Оформить дополнительное соглашение к договору об обучении"},{link:_i,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:Pl,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:ca,title:" Произвольный запрос"}]}]},ue=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1,isRedirectButtonVisible:o=!0})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(ce,{text:i,children:o&&t.jsx(Ps,{text:n,onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"var(--purple)",width:"300px",href:`${P}/?p=${e==null?void 0:e.slice(1,e.length)}`})})),sg="modulepreload",og=function(e){return"/"+e},dn={},y=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=og(a),a in dn)return;dn[a]=!0;const r=a.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!s)for(let u=o.length-1;u>=0;u--){const x=o[u];if(x.href===a&&(!r||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${d}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":sg,r||(p.as="script",p.crossOrigin=""),p.href=a,document.head.appendChild(p),r)return new Promise((u,x)=>{p.addEventListener("load",u),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())};l.lazy(()=>y(()=>import("./index-ac9a82ba.js"),["assets/index-ac9a82ba.js","assets/vendor-9cc634b6.js","assets/get-default-subdivision-6ba457a5.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js"]));l.lazy(()=>y(()=>import("./index-d3fbc687.js"),["assets/index-d3fbc687.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js","assets/get-default-subdivision-6ba457a5.js","assets/get-method-obtaining-fields-2f28254a.js","assets/get-teacher-subdivisions-500dfe3f.js"]));const ag=l.lazy(()=>y(()=>import("./index-1af7137e.js"),["assets/index-1af7137e.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js"])),rg=l.lazy(()=>y(()=>import("./index-3a69f7e5.js"),["assets/index-3a69f7e5.js","assets/vendor-9cc634b6.js","assets/find-current-in-select-ba4611d5.js"])),lg=l.lazy(()=>y(()=>import("./index-e3799a77.js"),["assets/index-e3799a77.js","assets/vendor-9cc634b6.js"])),cg=l.lazy(()=>y(()=>import("./index-57f456eb.js"),["assets/index-57f456eb.js","assets/vendor-9cc634b6.js","assets/index-4f65cfc0.js"]));l.lazy(()=>y(()=>import("./index-54681d60.js"),["assets/index-54681d60.js","assets/vendor-9cc634b6.js","assets/index-4a152e55.js"]));l.lazy(()=>y(()=>import("./index-f19c119e.js"),["assets/index-f19c119e.js","assets/vendor-9cc634b6.js","assets/get-default-subdivision-6ba457a5.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js"]));l.lazy(()=>y(()=>import("./index-5bf83b68.js"),["assets/index-5bf83b68.js","assets/vendor-9cc634b6.js","assets/get-default-subdivision-6ba457a5.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js","assets/get-method-obtaining-fields-2f28254a.js","assets/get-teacher-subdivisions-500dfe3f.js"]));l.lazy(()=>y(()=>import("./index-64067846.js"),["assets/index-64067846.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js","assets/get-default-subdivision-6ba457a5.js","assets/get-method-obtaining-fields-2f28254a.js","assets/get-teacher-subdivisions-500dfe3f.js"]));l.lazy(()=>y(()=>import("./index-1975870c.js"),["assets/index-1975870c.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js","assets/get-default-subdivision-6ba457a5.js"]));l.lazy(()=>y(()=>import("./index-7164d240.js"),["assets/index-7164d240.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js","assets/get-default-subdivision-6ba457a5.js","assets/get-method-obtaining-fields-2f28254a.js","assets/get-teacher-subdivisions-500dfe3f.js"]));l.lazy(()=>y(()=>import("./index-04f60fc0.js"),["assets/index-04f60fc0.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js","assets/get-default-subdivision-6ba457a5.js"]));l.lazy(()=>y(()=>import("./index-37187a60.js"),["assets/index-37187a60.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js","assets/get-default-subdivision-6ba457a5.js"]));l.lazy(()=>y(()=>import("./index-5baa21f3.js"),["assets/index-5baa21f3.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js","assets/get-default-subdivision-6ba457a5.js","assets/get-method-obtaining-fields-2f28254a.js","assets/get-teacher-subdivisions-500dfe3f.js"]));l.lazy(()=>y(()=>import("./index-0f9ae3d2.js"),["assets/index-0f9ae3d2.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-6ba457a5.js"]));l.lazy(()=>y(()=>import("./index-c0dcd848.js"),["assets/index-c0dcd848.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js","assets/get-default-subdivision-6ba457a5.js"]));l.lazy(()=>y(()=>import("./index-2dd186aa.js"),["assets/index-2dd186aa.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js","assets/get-default-subdivision-6ba457a5.js","assets/get-method-obtaining-fields-2f28254a.js","assets/get-teacher-subdivisions-500dfe3f.js","assets/get-last-year-for-period-e1de6b16.js"]));l.lazy(()=>y(()=>import("./index-1dfb3d17.js"),["assets/index-1dfb3d17.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js","assets/get-default-subdivision-6ba457a5.js","assets/get-method-obtaining-fields-2f28254a.js","assets/get-teacher-subdivisions-500dfe3f.js"]));l.lazy(()=>y(()=>import("./index-fef6ad7b.js"),["assets/index-fef6ad7b.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js","assets/get-default-subdivision-6ba457a5.js","assets/get-method-obtaining-fields-2f28254a.js","assets/get-teacher-subdivisions-500dfe3f.js","assets/get-last-year-for-period-e1de6b16.js"]));l.lazy(()=>y(()=>import("./index-f0343235.js"),["assets/index-f0343235.js","assets/vendor-9cc634b6.js","assets/get-default-subdivision-6ba457a5.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js"]));l.lazy(()=>y(()=>import("./index-6a5c7465.js"),["assets/index-6a5c7465.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js","assets/get-default-subdivision-6ba457a5.js"]));l.lazy(()=>y(()=>import("./index-cef400ee.js"),["assets/index-cef400ee.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js","assets/get-default-subdivision-6ba457a5.js"]));l.lazy(()=>y(()=>import("./index-5f89d842.js"),["assets/index-5f89d842.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-6ba457a5.js"]));l.lazy(()=>y(()=>import("./index-92fefc8f.js"),["assets/index-92fefc8f.js","assets/vendor-9cc634b6.js","assets/index-2e48424a.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-56ecdd50.js","assets/get-default-subdivision-6ba457a5.js","assets/get-method-obtaining-fields-2f28254a.js","assets/get-teacher-subdivisions-500dfe3f.js"]));const dg=l.lazy(()=>y(()=>import("./index-4f4ff7f9.js"),["assets/index-4f4ff7f9.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-1a018cb2.js"),["assets/index-1a018cb2.js","assets/vendor-9cc634b6.js","assets/index-c12761ac.js","assets/index-71955de0.js"]));const Ii=l.lazy(()=>y(()=>import("./index-faaa8dbc.js"),["assets/index-faaa8dbc.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-a1b11d43.js"),["assets/index-a1b11d43.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-0139aaa2.js"),["assets/index-0139aaa2.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-1ce8ec1e.js"),["assets/index-1ce8ec1e.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-2f990b67.js"),["assets/index-2f990b67.js","assets/vendor-9cc634b6.js","assets/index-70a5384a.js"]));l.lazy(()=>y(()=>import("./index-864b6598.js"),["assets/index-864b6598.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-7ded54ba.js"),["assets/index-7ded54ba.js","assets/vendor-9cc634b6.js","assets/index-70a5384a.js"]));l.lazy(()=>y(()=>import("./index-cc9ce729.js"),["assets/index-cc9ce729.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-f5b93370.js"),["assets/index-f5b93370.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>Promise.resolve().then(()=>Hg),void 0));let mo;const pg=e=>{mo=e},$b=()=>mo,ug=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},li=f.div`
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
`,hg=f.div`
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
`,bo=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r})=>{const d=Object.keys(e??{}),{removeAll:c,removeOne:p,setRemoveAll:u,setRemoveOne:x}=ug(d,r);return d.length?t.jsxs(hg,{removeAll:c||closed,padding:o,height:a,children:[!!i&&t.jsxs(li,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(_t,{}),"Добавить"]}),Object.values(e??{}).map(m=>t.jsxs(li,{background:m.background,remove:p===m.id,children:[t.jsx("div",{className:"element-text",children:m.title}),t.jsx("div",{className:"remove",onClick:()=>{d.length===1?(u(!0),n==null||n()):(x(m.id),s(m.id))},children:t.jsx($e,{})})]},m.id)),d.length&&!!n&&t.jsx(li,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),u(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]}):null},pn=(e,i)=>{switch(i){case"date":return We(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},gg=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,fg=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[d,c]=l.useState(null),[p,u]=l.useState(e),x=l.useCallback(h=>{var g,b;o(v=>(v&&v[h]&&delete v[h],{...v})),h===((g=i==null?void 0:i.column)==null?void 0:g.field)&&n(null),h===((b=a==null?void 0:a.column)==null?void 0:b.field)&&r(null)},[i,s,a]),m=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!d)c(h=>{const g=Object.values(s)[0].column;return h={[(g==null?void 0:g.field)??""]:{id:(g==null?void 0:g.field)??"",title:"Фильтр: "+(g==null?void 0:g.title)}},{...h}});else{const h=Object.values(s).find(g=>{var b;return!d[((b=g.column)==null?void 0:b.field)??""]});h&&c(g=>{var S,_;const b=((S=h.column)==null?void 0:S.field)??"",v="Фильтр: "+((_=h.column)==null?void 0:_.title);return g&&(g[b]={id:b,title:v}),{...g}})}i&&c(h=>{var v;const g=((v=i.column)==null?void 0:v.field)??"",b="Поиск";return h?h[g]={id:g,title:b}:h={[g]:{id:g,title:b}},{...h}}),a&&c(h=>{var v;const g=((v=a.column)==null?void 0:v.field)??"",b="Сортировка";return h?h[g]={id:g,title:b}:h={[g]:{id:g,title:b}},{...h}})},[i,s,a]),l.useEffect(()=>{var b;const h=i==null?void 0:i.column,g=(b=i==null?void 0:i.column)==null?void 0:b.field;if(i&&g){const v=e==null?void 0:e.filter(S=>oe(pn(S[g],h==null?void 0:h.type)).includes(oe(pn(i.value,h==null?void 0:h.type))));u(v)}else u(e)},[i]),l.useEffect(()=>{if(s){const h=e==null?void 0:e.filter(g=>!Object.values(s).find(b=>{var v;return g[((v=b.column)==null?void 0:v.field)??""]!==b.value.title}));u(h)}else c(h=>({...h})),u(e)},[s]),l.useEffect(()=>{var g;const h=((g=a==null?void 0:a.column)==null?void 0:g.field)??"";a?u(b=>{const v=[...b??[]];return v==null||v.sort((S,_)=>_[h]<S[h]?a.value==="asc"?1:-1:_[h]>S[h]?a.value==="asc"?-1:1:0),v}):(c(b=>{const v=gg(b,"Сортировка");return b&&v&&delete b[v],{...b}}),u(e))},[a==null?void 0:a.value]),l.useEffect(()=>{u(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:p,filter:s,setFilter:o,filterList:d,setFilterList:c,onRemoveOne:x,onRemoveAll:m}},mi=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),mi(n.children,i)):n?n.children:e},xg=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[d,c]=l.useState(!1),p=l.useRef(null),u=l.useRef(null),[x,m]=l.useState([]),[h,g]=l.useState(i),[b,v]=l.useState("");l.useEffect(()=>{g(i)});const S=l.useCallback(()=>{c(k=>!k)},[c]),_=l.useCallback(k=>{if(k.children)x.push(k.id.toString()),g(mi(i,[...x])??[]),m([...x]);else{if(r)if(o)if(o.find(Y=>Y.id===k.id)){const Y=o.filter($=>$.id!==k.id);Y.length?n(Y):n(null)}else n([...o,k]);else n([k]);else n(k);!r&&S(),v(x.join("/"))}s==null||s(k)},[n,x]),E=l.useCallback(()=>{x.pop(),m([...x]),x.length===0?g(i):g(mi(i,x)??[])},[x,g]);return ot(p,()=>{d&&S()}),{handleOpen:S,refElement:p,isOpen:d,multiple:r,handleSelect:_,selectedRoute:b,currentItems:h,route:x,goBack:E,refItems:u,appearance:a}},mg=f.div`
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
`,bg=f.div`
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
`,vg=f.header`
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
`,_g=f.ul`
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
`,un=f.li`
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
`,yg=["isOpen"],wg=f(Xr).withConfig({shouldForwardProp:e=>!yg.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,jg=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:d,route:c,goBack:p,refItems:u,appearance:x}=xg(e),{isActive:m,width:h,title:g,required:b,selected:v,placeholder:S}=e;return t.jsxs(bg,{onClick:i,appearance:x,ref:n,isOpen:s,isActive:m??!0,width:h,children:[t.jsx(K,{size:5,align:"left",bottomGap:"5px",visible:!!g,required:b,children:g}),t.jsxs(mg,{multiple:o,appearance:x,children:[t.jsx(vg,{appearance:x,children:o?v?v.map(_=>t.jsxs("div",{className:"header-item",children:[!!_.icon&&t.jsx("span",{className:"icon",children:_.icon}),t.jsx("span",{className:"header-title",children:_.title})]},_.id)):t.jsx("span",{className:"not-chosen multi",children:S??"Не выбрано"}):t.jsx("div",{className:"single-header",children:v?t.jsxs(t.Fragment,{children:[!!v.icon&&t.jsx("span",{className:"icon",children:v.icon}),t.jsx("span",{className:"header-title",children:v.title})]}):t.jsx("span",{className:"not-chosen",children:S??"Не выбрано"})})}),t.jsx(wg,{isOpen:s})]}),t.jsxs(_g,{width:h,ref:u,isOpen:s,className:s?"open":"close",itemsAmount:d.length+(c.length?1:0),title:g,children:[!!c.length&&t.jsx(un,{isSelected:!1,onClick:_=>{_.stopPropagation(),p()},children:t.jsxs("span",{className:"back-button",children:[t.jsx(Et,{}),"Назад"]})},-1),d.map(({id:_,icon:E,title:k,children:Y})=>t.jsxs(un,{onClick:$=>{$.stopPropagation(),a({id:_,icon:E,title:k,children:Y})},isSelected:!o&&!!v&&v.title.includes(k),leadingToSelected:r.includes(_.toString()),children:[!!E&&t.jsx("span",{className:"icon",children:E}),t.jsx("span",{className:"select-item-title",children:k}),!!Y&&t.jsx("span",{className:"right-icon",children:t.jsx(nt,{})}),o&&!!v&&!!v.find($=>$.title.includes(k))&&t.jsx("span",{className:"right-icon",children:t.jsx(Un,{})})]},k))]})]})},Li=l.memo(jg),vo=e=>{switch(e){case"desc":return V.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return V.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return V.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},kg=f.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.9em;
    background: ${({even:e})=>e?`${w.blue.transparent3}`:"transparent"};

    @media (max-width: 1200px) {
        .five {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        .four {
            display: flex;
        }
    }

    @media (max-width: 700px) {
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
`,_o=f.div`
    width: ${({width:e})=>e??"100%"};
    min-width: ${({width:e})=>e??"auto"};
    padding: ${({padding:e})=>e??"20px"};
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
`,Tg=f.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: 700;
    font-size: 0.9em;
    z-index: 10;

    .icon {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
    }

    & > * + * {
        border-left: 1px solid var(--mild-theme);
    }

    @media (max-width: 1200px) {
        .five {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        .four {
            display: flex;
        }
    }

    @media (max-width: 700px) {
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
`,Eg=f.div`
    display: flex;
    align-items: center;
`,Sg=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>t.jsx(Tg,{children:e.map(d=>{var c,p,u,x;return t.jsxs(_o,{overflow:d.catalogs?"visible":"hidden",width:d.width,title:d.title,clickable:d.search,align:d.search?"space-between":d.align,showFull:d.showFull,className:((c=d.priority)==null?void 0:c.toString())??"one",onClick:()=>{d.search&&n({value:"",column:d}),d.sort&&r(m=>{const h=m!=null&&m.value?m.value==="desc"?"asc":null:"desc";return vo(h),h?{column:d,value:h}:null})},children:[!d.catalogs&&d.title,!d.catalogs&&!d.sort&&d.search&&t.jsx(ke,{className:"icon",style:{color:d.field===((p=i==null?void 0:i.column)==null?void 0:p.field)?"var(--reallyBlue)":"var(--text)"}}),d.sort&&t.jsx(Zn,{className:"icon",style:{color:d.field===((u=a==null?void 0:a.column)==null?void 0:u.field)?"var(--reallyBlue)":"var(--text)"}}),d.catalogs&&t.jsx(Eg,{children:t.jsx(Li,{appearance:!1,items:d.catalogs??[],setSelected:m=>o(h=>(m&&(h={...h,[d.field]:{column:d,value:m}}),h)),selected:(x=s==null?void 0:s[d.field])==null?void 0:x.value,placeholder:d.title})})]},d.title)})}),yo=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const d=c=>{c.length?+c>=1&&+c<=e+1&&r((+c-1).toString()):r("")};return t.jsxs(pe,{horizontalAlign:o,visible:i,direction:"horizontal",width:"100%",padding:"10px",children:[t.jsx(j,{minWidth:"42px",height:"42px",background:"var(--mild-theme)",icon:t.jsx(Et,{}),onClick:()=>r(Ne(n-1,e).toString())}),t.jsxs("div",{className:"page-indicator",children:[t.jsx(Te,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:d,inputAppearance:!1}),"/ ",e+1]}),t.jsx(j,{minWidth:"42px",height:"42px",background:"var(--mild-theme)",icon:t.jsx(nt,{}),onClick:()=>r(Ne(n+1,e).toString())})]})},Ie=(e,i)=>{switch(i){case"date":return We(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},$g=f.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,Pg=({title:e,obj:i,columns:n})=>t.jsxs($g,{children:[t.jsx(K,{size:3,align:"left",bottomGap:!0,children:e}),n.map(s=>t.jsx(Me,{keyStr:s.title,value:s.render?s.render(i[s.field],i):Ie(i[s.field],s.type)},s.title))]}),wo=({columns:e,el:i,index:n,onRowClick:s})=>{const{open:o}=G(),a=()=>o(t.jsx(Pg,{title:"Информация",obj:i,columns:e}));return t.jsx(kg,{even:n%2===0,onClick:()=>s?s(i):a(),children:e.map(r=>{var d;return t.jsx(_o,{showFull:r.showFull,width:r.width,className:((d=r.priority)==null?void 0:d.toString())??"one",align:r.align,children:r.render?r.render(Ie(i[r.field],r.type),i):Ie(i[r.field],r.type)},r.field)})})},Og=f.div`
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
`,Ag=f.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,Rg=({data:e,loading:i,columns:n,maxOnPage:s,onRowClick:o,filter:a})=>{const[r,d]=l.useState(0),c=Math.ceil(((e==null?void 0:e.length)??0)/(s??1))-1,p=s?e==null?void 0:e.slice(r*s,(r+1)*s):e;return l.useEffect(()=>{d(0)},[a]),i?t.jsx(Ag,{children:t.jsx(Le,{})}):t.jsxs(Og,{children:[p==null?void 0:p.map((u,x)=>t.jsx(wo,{onRowClick:o,columns:n,el:u,index:x},x)),!(p!=null&&p.length)&&t.jsx(ce,{text:"Нет данных"}),t.jsx(yo,{pages:c,condition:!!s&&!!(p!=null&&p.length),currentPage:r,setCurrentPage:d})]})},Ng=f.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,Cg=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},Ig=({search:e,setSearch:i})=>{var n,s;return t.jsx(Ng,{closed:!(e!=null&&e.column),children:t.jsx(Te,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:Cg((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(ke,{}),minWidth:"auto"})})},Lg=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function Dg(e){return Object.keys(e).map(i=>({title:"",field:i}))}const zg=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(Lg(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(he,{}),t.jsx(wo,{onRowClick:()=>null,columns:Dg(s),el:s,index:1})]})},Mg=f.div`
    width: 100%;
    box-shadow: var(--schedule-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--form);
    overflow: hidden;
`,hn=({columns:e,data:i,maxOnPage:n,onRowClick:s,footer:o,loading:a=!1})=>{const{sort:r,setSort:d,search:c,setSearch:p,resultData:u,filter:x,setFilter:m,filterList:h,setFilterList:g,onRemoveOne:b,onRemoveAll:v}=fg(i);return t.jsxs(Mg,{children:[t.jsx(bo,{setList:g,padding:"0 10px",list:h,onRemoveOne:b,onRemoveAll:v}),t.jsx(Ig,{search:c,setSearch:p}),t.jsx(Sg,{sort:r,setSort:d,columns:e,search:c,setSearch:p,filter:x,setFilter:m}),t.jsx(Rg,{loading:a,onRowClick:s,filter:x,columns:e,data:u,maxOnPage:n}),t.jsx(zg,{footer:o,data:i,columns:e})]})},gn=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(tg).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(re,{type:e==="Готово"?"success":e==="Отклонено"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата подписи",field:"signDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"orderNumber",priority:"one",align:"center"},{title:"Дата приказа",field:"orderDate",type:"date",priority:"one",align:"center",render:e=>t.jsx(re,{type:e==="Готово"?"success":e==="Отклонено"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Статус приказа",field:"orderStatus",priority:"one",width:"200px",catalogs:[...Object.values(ig).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(re,{type:e==="Готово"?"success":e==="Отклонено"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Файл заявления",priority:"one",field:"file",type:"file"},{title:"Примечание",field:"registrationStatus",priority:"one"}],Fg=f.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;
    .text {
        line-height: 1.5em;
        margin-top: 0px;
        font-weight: normal;
        font-size: 0.9em;
        margin-top: 15px;
    }
    .message {
        margin-bottom: -15px;
    }
    .config {
        margin-top: 15px;
        padding-left: 10px;
        font-weight: bold;
    }
    .collapsed {
        padding-left: 10px;
    }
    .label {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
    }
    .buttonBlock {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .block {
        border-radius: var(--brSemi);
        background: var(--schedule);
        box-shadow: var(--schedule-shadow);
        height: fit-content;
        padding: 20px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        margin-bottom: 30px;
    }
    .firstBlock {
        padding-bottom: 40px;
        margin-bottom: 10px;
    }

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
    .order {
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 15px;
    }
    .moreButton {
        margin: -10px;
        margin-top: -30px;
    }
    .historyTable {
        width: 100%;
        font-size: 16px;
    }
    .historyTable tr {
        min-height: 30px;
    }
`,Bg=()=>{const{data:{dataWorkerApplication:e}}=Ot.useApplications();if(e){const[i,n]=l.useState(Array(e.length).fill(!1)),[s,o]=l.useState(!1),[a,r]=l.useState(Array(e.length).fill(!1));let d;return t.jsxs("div",{className:"jobBlocks",children:[e.map((c,p)=>{var u,x,m;return c.isDismissal?null:t.jsxs("div",{className:"block",children:[t.jsxs("div",{className:"label",children:[c.jobTitle,t.jsx(j,{icon:i[p]?t.jsx(si,{}):t.jsx(Dt,{}),onClick:()=>{n(h=>h.map((g,b)=>b===p?!g:g)),o(!1)},background:"transparent"})]}),t.jsxs("div",{className:"text",children:["Структурное подразделение: ",c.subDivision,t.jsx("br",{}),"Ставка: ",c.rate,t.jsx("br",{}),"Вид места работы: добавим",t.jsx("br",{})]}),d=((u=c==null?void 0:c.dismissalApplications[c.dismissalApplications.length-1])==null?void 0:u.status)=="Не согласовано"||((m=(x=c==null?void 0:c.dismissalApplications[c.dismissalApplications.length-1])==null?void 0:x.dismissalOrder)==null?void 0:m.orderStatus)=="Не согласован"||(c==null?void 0:c.dismissalApplications.length)==0,t.jsx(Ye.Collapse,{isOpened:i[p],className:"collapseс",children:t.jsxs("div",{className:"collapsed",children:[t.jsx("div",{className:"buttonBlock",children:t.jsx(Ye.Collapse,{isOpened:d,children:t.jsx("a",{href:"#/hr-applications/dismissal",children:t.jsx(j,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",onClick:()=>{pg(p)},width:"250px",minWidth:"150px",height:"36px",fixedInMobile:!0})})})}),t.jsx(Ye.Collapse,{isOpened:c.dismissalApplications.length!=0,children:t.jsx("div",{children:t.jsx("div",{className:"text",children:t.jsx(hn,{loading:!c.dismissalApplications,columns:gn(),data:c.dismissalApplications.map(({status:h,signDate:g,dismissalOrder:{orderNumber:b,orderDate:v,registrationStatus:S,orderStatus:_}})=>({status:h,signDate:g,orderNumber:b,orderDate:v,orderStatus:_,registrationStatus:S})),maxOnPage:10})})})})]})}),t.jsx("div",{className:"moreButton",children:t.jsx(j,{onClick:()=>{n(h=>h.map((g,b)=>b===p?!g:g)),o(!1)},text:i[p]?"Скрыть":"Подробнее",background:"transparent"})})]})}),t.jsxs("div",{className:"jobBlocks block",children:[t.jsxs("div",{className:"label",children:["История должностей:",t.jsx(j,{icon:s?t.jsx(si,{}):t.jsx(Dt,{}),onClick:()=>o(!s),background:"transparent"})]}),t.jsx(Ye.Collapse,{isOpened:s,className:"collapseс",children:e.map((c,p)=>c.isDismissal?t.jsxs("div",{children:[t.jsx("div",{className:"config",children:t.jsxs("div",{className:"label",children:[c.jobTitle,t.jsx(j,{icon:a[p]?t.jsx(si,{}):t.jsx(Dt,{}),onClick:()=>r(u=>u.map((x,m)=>m===p?!x:x)),background:"transparent"})]})}),t.jsx(Ye.Collapse,{isOpened:a[p],className:"collapseс",children:t.jsxs("div",{className:"collapsed",children:[t.jsxs("div",{className:"text",children:["Структурное подразделение: ",c.subDivision,t.jsx("br",{}),"Ставка: ",c.rate,t.jsx("br",{}),"Вид места работы: добавим",t.jsx("br",{})]}),t.jsx(Ye.Collapse,{isOpened:c.dismissalApplications.length!=0,children:t.jsx("div",{className:"text",children:t.jsx(hn,{loading:!e,columns:gn(),data:c.dismissalApplications.map(({status:u,signDate:x,dismissalOrder:{orderNumber:m,orderDate:h,registrationStatus:g}})=>({status:u,signDate:x,orderNumber:m,orderDate:h,registrationStatus:g})),maxOnPage:10})})})]})})]}):null)})]})]})}else return null},Ug=()=>{const{data:{listApplication:e},error:i}=Ot.useApplications();return t.jsx($s,{load:()=>tt.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(Fg,{children:t.jsxs(Rd,{maxWidth:"1500px",children:[t.jsxs("div",{className:"block firstBlock",children:[t.jsx(K,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx(re,{type:"info",title:"Информация",icon:t.jsx(jt,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."})]}),Bg()]})})})},Hg=Object.freeze(Object.defineProperty({__proto__:null,default:Ug},Symbol.toStringTag,{value:"Module"})),A="/applications",te="/hr-applications",fn="/staff_orders",xn="/staff_blanks",Pb="/ad_logins",Di="/doclist",mn="/pps_vote2020",jo="/pps_contest",Wg="/electronic-statements",Vg="/vacation",lt="/kpi_pps",ct="/kpi_admin",bn="/sc_news",vn="/oop",_n="/centers",Gg="/helpful-information",Yg="/download-agreements",ko=A+"/contact-info-actualization",To=A+"/data-verification",Eo=A+"/issuance-of-licenses",So=A+"/getting-computer-equipment",$o=A+"/connecting-computer",Po=A+"/printer-maintenance",Oo=A+"/question-sed",Ao=A+"/question-personal-account",Ro=A+"/other-it-services",No=A+"/certificate-from-the-place-of-work",Co=A+"/visa-certificate",Io=A+"/certificate-of-work-experience",Lo=A+"/number-of-unused-vacation-days",Do=A+"/copy-of-the-employment-record",zo=A+"/copies-of-documents-from-the-personal-file",Mo=A+"/work-on-the-terms-of-external-concurrency",Fo=A+"/certificate-time-parental-leave",Bo=A+"/arbitrary-request",Uo=A+"/courier",Ho=A+"/persona-income-tax-reference",Wo=A+"/payment-of-child-birth-allowance",Vo=A+"/payment-for-child-care",qg=te+"/dismissal",Go=te+"/buffer-dismissal",Yo=te+"/buffer-work-transfer",qo=te+"/buffer-extra-holiday-coll",Ko=te+"/buffer-holiday-planning",Xo=te+"/buffer-holiday-work",Jo=te+"/buffer-part-time-deployment",Qo=te+"/buffer-holiday-postponed",U=()=>ue({oldVersionUrl:"/sprav"}),bi=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(C,{}),path:A,Component:U,color:"red",isTemplate:!1,group:"OTHER",keywords:["заявления","справки","заявление","справка"]},...Rr,"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(C,{}),path:te,Component:U,color:"green",isTemplate:!1,group:"OTHER"},"download-agreements":{id:"download-agreements",title:"Административная панель",icon:t.jsx(Jr,{}),path:Yg,Component:lg,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(F,{}),path:Wg,Component:()=>(se.useEffect(()=>{window.location.replace(" https://e.mospolytech.ru/old/stats.php?m=items&act=st_list")},[]),null),color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(es,{}),path:$r,Component:()=>(se.useEffect(()=>{window.location.replace(`${P}/?p=proj_main`)},[]),null),color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(F,{}),path:jo,Component:()=>(se.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(Kn,{}),path:lt,Component:()=>(se.useEffect(()=>{window.location.replace(`${P}/?p=${lt==null?void 0:lt.slice(1,lt.length)}`)},[]),null),color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинго...",icon:t.jsx(Qr,{}),path:ct,Component:()=>(se.useEffect(()=>{window.location.replace(`${P}/?p=${ct==null?void 0:ct.slice(1,ct.length)}`)},[]),null),color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx(Zr,{}),path:bn,Component:()=>ue({oldVersionUrl:bn}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(C,{}),path:fn,Component:()=>ue({oldVersionUrl:fn}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(Bt,{}),path:xn,Component:()=>ue({oldVersionUrl:xn}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:t.jsx(C,{}),path:Di,Component:cg,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(el,{}),path:Vg,Component:dg,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(yt,{}),path:vn,Component:()=>ue({oldVersionUrl:vn}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(yt,{}),path:_n,Component:()=>ue({oldVersionUrl:_n}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(C,{}),path:Gg,Component:Ii,color:"blue",isTemplate:!1,group:"GENERAL"},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx(ts,{}),path:mn,Component:()=>ue({oldVersionUrl:mn}),color:"blue",isTemplate:!1,group:"OTHER",show:!1}}),vi=()=>({...Nr,"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:Eo,icon:t.jsx(C,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"part-time-deployment":{id:"part-time-deployment",title:"Заявление на трудоустройство по совместительству",path:Jo,icon:t.jsx(C,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:te},"holiday-postponed":{id:"holiday-postponed",title:"Заявление на перенос отпуска",path:Qo,icon:t.jsx(C,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:te},dismissal:{id:"dismissal2",title:"Заявление на увольнение",path:Go,icon:t.jsx(C,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:te},"holiday-work":{id:"part-time-deployment",title:"Заявление о привлечении к работе в выходной день",path:Xo,icon:t.jsx(C,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:te},"holiday-planning":{id:"holiday-postponed",title:"Заявление о предоставлении отпуска",path:Ko,icon:t.jsx(C,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:te},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:qo,icon:t.jsx(C,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:te},"work-transfer":{id:"dismissal",title:"Заявление на перевод",path:Yo,icon:t.jsx(C,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:te},dismissal_form:{id:"dismissal",title:"Заявление на увольнение",path:qg,icon:t.jsx(C,{}),color:"blue",Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:te},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(C,{}),color:"blue",path:So,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(C,{}),color:"blue",path:$o,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(C,{}),color:"blue",path:Po,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(C,{}),color:"blue",path:Oo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(C,{}),color:"blue",path:Ao,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(C,{}),color:"blue",path:Ro,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(C,{}),color:"blue",path:No,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"visa-certificate":{id:"visa-certificate",title:"Справка на визу",icon:t.jsx(C,{}),color:"blue",path:Co,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(C,{}),color:"blue",path:Io,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(C,{}),color:"blue",path:Lo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(C,{}),color:"blue",path:Do,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(C,{}),color:"blue",path:zo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(C,{}),color:"blue",path:Mo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(C,{}),color:"blue",path:Fo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(C,{}),color:"blue",path:Bo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},courier:{id:"courier",title:"Курьер",icon:t.jsx(C,{}),color:"blue",path:Uo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(C,{}),color:"blue",path:Ho,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(C,{}),color:"blue",path:Wo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(C,{}),color:"blue",path:Vo,Component:U,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(C,{}),color:"blue",path:ko,Component:ag,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(C,{}),color:"blue",path:To,Component:rg,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A}}),Kg=()=>[{title:"Цифровые сервисы",links:[{link:ko,title:"Актуализация контактных данных"},{link:To,title:"Анкета для сверки данных"},{link:Eo,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:So,title:"Получение нового компьютерного оборудования"},{link:$o,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:Po,title:"Обслуживание принтеров, МФУ"},{link:Oo,title:"Вопрос по СЭД Directum и 1С"},{link:Ao,title:"Вопрос по Личному кабинету"},{link:Ro,title:"Прочее ИТ-обслуживание"},{link:No,title:"Справка с места работы"},{link:Co,title:"Справка на визу"},{link:Io,title:"Справка о стаже работы"},{link:Lo,title:"Справка о количестве неиспользованных дней отпуска"},{link:Do,title:"Копия трудовой книжки"},{link:zo,title:"Копии документов из личного дела"},{link:Mo,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"},{link:Fo,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:Ho,title:"Справка по форме 2-НДФЛ"},{link:Wo,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:Vo,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Прочее",links:[{link:Bo,title:"Произвольный запрос"},{link:rs,title:"Вступить в Профсоюз",isExternalLink:!0}]},{title:"Экспедиция отдела контроля и делопроизводства",links:[{link:Uo,title:"Курьер"}]}],Xg=()=>[{title:"",links:[{link:Jo,title:"Заявление на трудоустройство по совместительству"},{link:Qo,title:"Заявление на перенос отпуска"},{link:Go,title:"Заявление на увольнение"},{link:Xo,title:"Заявление о привлечении к работе в выходной день"},{link:Ko,title:"Заявление о предоставлении отпуска"},{link:Yo,title:"Заявление на перевод"},{link:qo,title:"Заявление о предоставлении дополнительного отпуска по коллективному договору"}]}],Jg=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),Qg=f.div`
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
`,Ob=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=G(),s=e?Kg():ng(),[o,a]=l.useState(""),[r,d]=l.useState(s);return t.jsxs(Qg,{children:[t.jsx(Vs,{whereToSearch:s,searchEngine:xo,setResult:d,placeholder:"Поиск заявок",setExternalValue:a}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(r??s).map(c=>t.jsxs("div",{className:"link-list",children:[t.jsx(K,{size:4,align:"left",bottomGap:!0,children:c.title}),!c.disabled&&t.jsx("div",{className:"links",children:c.links.map((p,u)=>{if(!(p.disabled||!Jg(i,p.exceptionalFormEducationList)))return p.isExternalLink?t.jsx("a",{href:p.link,target:p.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:p.title},p.link+u):t.jsx(Z,{to:p.link,onClick:n,children:p.title},p.link+u)})})]},c.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(ce,{text:`По запросу ${o} ничего не найдено`})]})})]})},Zo=()=>{var r,d;const e=St(),{data:i}=ne.useUser(),n=(r=i.user)!=null&&r.subdivisions?{...bi(),...vi()}:{...Je(),...yi(i.user)},[{exactCurrentPage:s,currentPage:o},a]=l.useState({currentPage:Object.values(n).find(c=>e.location.pathname.includes(c.path))??n[0],exactCurrentPage:Object.values(n).find(c=>e.location.pathname.includes(c.path))??null});return l.useEffect(()=>{a({currentPage:Object.values(n).find(c=>e.location.pathname.includes(c.path))??n[0],exactCurrentPage:Object.values(n).find(c=>c.path.includes(e.location.pathname))??null})},[(d=i.user)==null?void 0:d.subdivisions]),l.useEffect(()=>e.listen(c=>{a({currentPage:Object.values(n).find(p=>c.pathname.includes(p.path))??n[0],exactCurrentPage:Object.values(n).find(p=>p.path.includes(c.pathname))??null})}),[e,n]),{currentPage:o,exactCurrentPage:s}},Zg=f(Pe)`
    position: relative;

    @media (min-width: 1001px) {
        padding-top: 70px;
    }

    @media (max-width: 1000px) {
        padding-top: 50px;
    }
`,ef=f.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1000px) {
        top: -7px;
        right: 7px;
    }
`,ea=({children:e,topRightCornerElement:i,padding:n})=>{const{exactCurrentPage:s}=Zo(),o=so(s);return t.jsx(Mi,{padding:"0 0 10px 0",children:t.jsxs(Zg,{justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:o,gap:"24px",alignItems:"flex-start",noAppearanceInMobile:!0,padding:n,children:[i&&t.jsx(ef,{children:i}),e]})})},tf=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,nf=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[d,c]=l.useState(null),[p,u]=l.useState(e),x=l.useCallback(h=>{var g,b;o(v=>(v&&v[h]&&delete v[h],{...v})),h===((g=i==null?void 0:i.column)==null?void 0:g.field)&&n(null),h===((b=a==null?void 0:a.column)==null?void 0:b.field)&&r(null)},[i,s,a]),m=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!d)c(h=>{const g=Object.values(s)[0].column;return h={[(g==null?void 0:g.field)??""]:{id:(g==null?void 0:g.field)??"",title:"Фильтр: "+(g==null?void 0:g.title)}},{...h}});else{const h=Object.values(s).find(g=>{var b;return!d[((b=g.column)==null?void 0:b.field)??""]});h&&c(g=>{var S,_;const b=((S=h.column)==null?void 0:S.field)??"",v="Фильтр: "+((_=h.column)==null?void 0:_.title);return g&&(g[b]={id:b,title:v}),{...g}})}i&&c(h=>{var v;const g=((v=i.column)==null?void 0:v.field)??"",b="Поиск";return h?h[g]={id:g,title:b}:h={[g]:{id:g,title:b}},{...h}}),a&&c(h=>{var v;const g=((v=a.column)==null?void 0:v.field)??"",b="Сортировка";return h?h[g]={id:g,title:b}:h={[g]:{id:g,title:b}},{...h}})},[i,s,a]),l.useEffect(()=>{var b;const h=i==null?void 0:i.column,g=(b=i==null?void 0:i.column)==null?void 0:b.field;if(i&&g){const v=e==null?void 0:e.filter(S=>oe(Ie(S[g],h==null?void 0:h.type)).includes(oe(Ie(i.value,h==null?void 0:h.type))));u(v)}else u(e)},[i]),l.useEffect(()=>{if(s){const h=e==null?void 0:e.filter(g=>!Object.values(s).find(b=>{var v;return g[((v=b.column)==null?void 0:v.field)??""]!==b.value.title}));u(h)}else c(h=>({...h})),u(e)},[s]),l.useEffect(()=>{var g;const h=((g=a==null?void 0:a.column)==null?void 0:g.field)??"";a?u(b=>{const v=[...b??[]];return v==null||v.sort((S,_)=>_[h]<S[h]?a.value==="asc"?1:-1:_[h]>S[h]?a.value==="asc"?-1:1:0),v}):(c(b=>{const v=tf(b,"Сортировка");return b&&v&&delete b[v],{...b}}),u(e))},[a==null?void 0:a.value]),l.useEffect(()=>{u(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:p,filter:s,setFilter:o,filterList:d,setFilterList:c,onRemoveOne:x,onRemoveAll:m}},sf=f.div`
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
`,ta=f.div`
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
`,of=f.div`
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
`,af=f.div`
    display: flex;
    align-items: center;
`,rf=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const d=c=>()=>{c.search&&n({value:"",column:c}),c.sort&&r(p=>{const u=p!=null&&p.value?p.value==="desc"?"asc":null:"desc";return vo(u),u?{column:c,value:u}:null})};return t.jsx(of,{children:e.map(c=>{var p,u,x,m;return t.jsxs(ta,{overflow:c.catalogs?"visible":"hidden",width:c.width,title:c.title,clickable:c.search,align:c.search?"space-between":c.align,showFull:c.showFull,className:((p=c.priority)==null?void 0:p.toString())??"one",onClick:d(c),children:[!c.catalogs&&c.title,!c.catalogs&&!c.sort&&c.search&&t.jsx(ke,{className:"icon",style:{color:c.field===((u=i==null?void 0:i.column)==null?void 0:u.field)?"var(--reallyBlue)":"var(--text)"}}),c.sort&&t.jsx(Zn,{className:"icon",style:{color:c.field===((x=a==null?void 0:a.column)==null?void 0:x.field)?"var(--reallyBlue)":"var(--text)"}}),c.catalogs&&t.jsx(af,{children:t.jsx(Li,{appearance:!1,items:c.catalogs??[],setSelected:h=>o(g=>(h&&(g={...g,[c.field]:{column:c,value:h}}),g)),selected:(m=s==null?void 0:s[c.field])==null?void 0:m.value,placeholder:c.title})})]},c.title)})})},lf=f.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,cf=({obj:e,columns:i})=>t.jsx(lf,{children:i.map(n=>t.jsx(Me,{keyStr:n.title,value:n.render?n.render(e[n.field],e):Ie(e[n.field],n.type)},n.title))}),ia=({columns:e,el:i,index:n,onRowClick:s})=>{const{open:o}=G(),a=()=>o(t.jsx(cf,{obj:i,columns:e}),"Информация");return t.jsx(sf,{even:n%2===0,onClick:()=>s?s(i):a(),children:e.map(r=>{var d;return t.jsx(t.Fragment,{children:t.jsx(ta,{showFull:r.showFull,width:r.width,className:((d=r.priority)==null?void 0:d.toString())??"one",align:r.align,children:r.render?r.render(Ie(i[r.field],r.type),i):Ie(i[r.field],r.type)},r.field)})})})},df=f.div`
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
`,pf=f.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,uf=({data:e,loading:i,columns:n,maxOnPage:s,onRowClick:o,filter:a})=>{const[r,d]=l.useState(0),c=Math.ceil(((e==null?void 0:e.length)??0)/(s??1))-1,p=s?e==null?void 0:e.slice(r*s,(r+1)*s):e;return l.useEffect(()=>{d(0)},[a]),i?t.jsx(pf,{children:t.jsx(Le,{})}):t.jsxs(df,{children:[p==null?void 0:p.map((u,x)=>t.jsx(ia,{onRowClick:o,columns:n,el:u,index:x},x)),!(p!=null&&p.length)&&t.jsx(ce,{text:"Нет данных"}),t.jsx(yo,{pages:c,condition:!!s&&!!(p!=null&&p.length),currentPage:r,setCurrentPage:d})]})},hf=f.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,gf=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},ff=({search:e,setSearch:i})=>{var n,s;return t.jsx(hf,{closed:!(e!=null&&e.column),children:t.jsx(Te,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:gf((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(ke,{}),minWidth:"auto"})})},xf=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function mf(e){return Object.keys(e).map(i=>({title:"",field:i}))}const bf=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(xf(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(he,{}),t.jsx(ia,{onRowClick:()=>null,columns:mf(s),el:s,index:1})]})},vf=f.div`
    width: 100%;
    box-shadow: var(--schedule-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--form);
    overflow: hidden;
`,Ab=({columns:e,data:i,maxOnPage:n,onRowClick:s,footer:o,loading:a=!1})=>{const{sort:r,setSort:d,search:c,setSearch:p,resultData:u,filter:x,setFilter:m,filterList:h,setFilterList:g,onRemoveOne:b,onRemoveAll:v}=nf(i);return t.jsxs(vf,{children:[t.jsx(bo,{setList:g,padding:"0 10px",list:h,onRemoveOne:b,onRemoveAll:v}),t.jsx(ff,{search:c,setSearch:p}),t.jsx(rf,{sort:r,setSort:d,columns:e,search:c,setSearch:p,filter:x,setFilter:m}),t.jsx(uf,{loading:a,onRowClick:s,filter:x,columns:e,data:u,maxOnPage:n}),t.jsx(bf,{footer:o,data:i,columns:e})]})},_f=f.div`
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
`,yf=f.div`
    padding: 12px;
    box-shadow: var(--schedule-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,Rb=({})=>{const{data:{listApplication:e},error:i}=Ot.useApplications(),{close:n}=G(),s=Xg(),[o,a]=l.useState(""),[r,d]=l.useState(s);return t.jsx($s,{load:()=>tt.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsxs(ea,{children:[t.jsx(re,{type:"info",title:"Информация",icon:t.jsx(jt,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(_f,{children:[t.jsx(K,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(Vs,{whereToSearch:s,searchEngine:xo,setResult:d,placeholder:"Поиск заявления",setExternalValue:a}),t.jsxs(yf,{children:[(r??s).map(c=>t.jsx("div",{className:"link-list",children:!c.disabled&&t.jsx("div",{className:"links",children:c.links.map(p=>p.isExternalLink?t.jsx("a",{href:p.link,target:p.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:p.title},p.title):t.jsx(Z,{to:p.link,onClick:n,children:p.title},p.link))})},c.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(ce,{text:`По запросу ${o} ничего не найдено`})]})]})]})})},wf=e=>({...e.data.reduce((s,o)=>{var a;if(!o.value)return s;if(o.type==="checkbox-docs"){const r=(a=o.items)==null?void 0:a.reduce((d,c)=>{for(let p=0;p<c.files.length;p++)d[(c==null?void 0:c.fieldName)+`[${p}]`]=c.files[p];return d},{});s=Object.assign({},s,r)}else if(o.type==="select")s[o.fieldName]=o.isSpecificSelect?o.value.id:o.value.title||null;else{const r=!o.value||typeof o.value!="object";s[o.fieldName]=r?o==null?void 0:o.value:o.value.title}return s},{}),...(()=>{var o,a;const s={};if((o=e.documents)!=null&&o.fieldName)for(let r=0;r<e.documents.files.length;r++)s[((a=e.documents)==null?void 0:a.fieldName)+`[${r}]`]=e.documents.files[r];return s})()});f.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--theme);
    z-index: 50;
`;f(At)`
    opacity: 0;
    animation: 0.5s defaultFadeIn forwards;
    animation-delay: 2s;
    height: 100%;
    padding: 20px;
`;const yn={isOpen:!1,pages:[],currentPage:0},jf=()=>I(kf),na=O(),sa=O(),oa=O(),aa=O(),kf=ie(yn).on(na,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on(sa,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(oa,(e,{value:i})=>({...e,currentPage:i})).on(aa,()=>({...yn})),zi={useStory:jf},Fe={open:na,close:sa,clearStore:aa,changeCurrentPage:oa};f(Pe)`
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
`;const Tf=f.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`,Nb=({fio:e})=>{const{open:i}=G();return t.jsx(Tf,{onClick:()=>i(t.jsx(co,{name:e,isMe:!1})),children:e})},Mi=f.div`
    display: flex;
    align-items: ${({alignItems:e})=>e??"center"};
    justify-content: center;
    height: ${({height:e})=>e??"auto"};
    min-height: ${({minHeight:e})=>e};
    color: var(--text);
    background: ${({background:e})=>e};
    padding: ${({padding:e})=>e};
    width: 100%;
`,Ef=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r})=>{const[d,c]=l.useState(r===void 0),[p,u]=l.useState(!a),[x,m]=l.useState(!1),h=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return V.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(_=>(_.confirmed=!0,{..._})),c(!1),u(!1)):V.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!d&&!n.find(_=>!!_.find(E=>!E.value&&E.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(_=>(_.confirmed=!0,{..._})),c(!1),u(!1)):V.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(_=>!!_.find(E=>!E.value&&E.required))&&!n.find(_=>!!_.find(E=>{var k;return E.value.id==="not-chosen"&&!!((k=E.items)!=null&&k.length)}))?(s(_=>(_.confirmed=!0,{..._})),c(!1),u(!1)):V.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(_=>(_.confirmed=!0,{..._})),c(!1),u(!1)):V.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!d&&!n.find(_=>!_.value&&_.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(_=>(_.confirmed=!0,{..._})),c(!1),u(!1)):V.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(_=>!_.value&&_.required)&&!n.find(_=>{var E;return _.value===null&&!!((E=_.items)!=null&&E.length)})?(s(_=>(_.confirmed=!0,{..._})),c(!1),u(!1)):V.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},g=()=>{s(_=>{const E=_.default[0].map(k=>({fieldName:k.fieldName??"",title:k.title,value:k.type==="select"&&(k!=null&&k.items)?null:"",type:k.type,items:k.items,width:k.width,required:k.required}));return{..._,data:[..._.data,E]}})},b=_=>{s(E=>{const k=E.data.filter((Y,$)=>_!==$);return{...E,data:k}})},v=_=>{s(E=>(E.documents&&(E.documents.files=[..._]),{...E}))},S=()=>{i&&(i.value=!i.value),s(_=>({..._,optionalCheckbox:i}))};return l.useEffect(()=>{u(!x&&o?!1:!a)},[x,a]),{openArea:p,changeInputArea:d,included:x,setOpenArea:u,setIncluded:m,setChangeInputArea:c,handleRemove:b,handleAddNew:g,handleLoadFiles:v,handleConfirm:h,handleCheckbox:S}},Sf=f.div`
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
`,$f=f.div``,Pf=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs($f,{children:[t.jsx(K,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:d,checkboxCondition:c,maxFileSizeInMegaBytes:p},u)=>t.jsx(Fp,{checkbox:{checked:o,setChecked:()=>n(o,u),text:a},loadfile:{files:r,maxFiles:d,maxFileSizeInMegaBytes:p,isActive:!0,setFiles:x=>s(x,u)},docVisible:c==="straight"?o:!o},a))]}),Of=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(K,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(pe,{children:[!a&&t.jsx(Ce,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:d,title:c}=r;return t.jsx(Ce,{text:c,checked:d===(s==null?void 0:s.id),setChecked:()=>o({id:d,title:a?d.toString():c})},d)})]})]}),Af=f.div`
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
`,Rf=({title:e,value:i,visible:n})=>n?t.jsxs(Af,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,wn=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,items:d,title:c,documents:p,changeInputArea:u,setData:x,mask:m,editable:h,placeholder:g,autocomplete:b,isSpecificRadio:v,specialType:S,specialFieldsNameConfig:_,minValueInput:E,maxValueInput:k,diff:Y,visible:$}=e,N=h??(u&&!p),[J,z]=l.useState(!0),Q=(B,q,Ge)=>{x(le=>(Array.isArray(le.data[0])?le.data[q][Ge??0].value=B:le.data[q].type==="checkbox-docs"?le.data[q].items[Ge??0].value=!!B:le.data[q].value=B,{...le}))},Oe=(B,q,Ge)=>{x(le=>(Array.isArray(le.data[0])?le.data[q][Ge??0].value=B:le.data[q].value=B,{...le}))},De=(B,q,Ge)=>{x(le=>(le.data[q].items[Ge??0].files=B,{...le}))},ti=B=>{x(q=>(q.data[o].value=B,{...q}))},ii=B=>{x(q=>(q.data[o].value=B,{...q}))};return _&&S&&!Object.values(_).includes(S)?null:r!=="select"&&r!=="multiselect"||!d?r==="checkbox"?t.jsx(Ce,{text:c,isActive:N,checked:i,setChecked:B=>Q(B,o,a)}):r==="textarea"?t.jsx(bd,{value:i,title:c,setValue:B=>Q(B,o,a),isActive:N,textAreaAppearance:N,placeholder:g??c,required:n,width:s}):r==="checkbox-docs"?t.jsx(Pf,{title:c,items:d,setChecked:(B,q)=>Q(!B,o,q),setFiles:(B,q)=>De(B,o,q)}):r==="date-interval"?t.jsx(Up,{title:c,required:n,dates:i,setDates:B=>ii(B),valid:J,setValid:z,minValue:E,diff:Y}):r==="simple-text"?t.jsx(Rf,{title:c,value:i,visible:$}):r==="radio"?t.jsx(Of,{buttons:d,title:c,required:n,current:i,setCurrent:ti,isSpecificRadio:v}):t.jsx(Te,{value:i,title:c,minValue:E,maxValue:k,setValue:B=>Q(B,o,a),type:r,isActive:N,inputAppearance:N,placeholder:g??c,required:n,mask:m,width:s,autocomplete:b}):t.jsx(Li,{items:d,setSelected:B=>Oe(B,o,a),selected:i,isActive:N,title:c,width:s,multiple:r==="multiselect",required:n})},Nf=f.div`
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
    }
`,Cf=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r})=>t.jsxs(Nf,{onClick:()=>!r&&(i||!n)&&o(d=>!d),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(K,{size:4,align:"left",icon:s!==void 0?s?t.jsx(tl,{}):t.jsx(il,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(Ce,{checked:i,setChecked:a})]}),t.jsx(j,{icon:t.jsx(Dt,{}),onClick:()=>null,background:"transparent"})]}),If=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(j,{onClick:()=>n(a=>(a.confirmed=!1,{...a})),text:"Отменить",icon:t.jsx(Ue,{}),textColor:w.red.main,hoverBackground:w.red.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:o,text:"Сохранить",icon:t.jsx(nl,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(j,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(Ue,{}),textColor:w.red.main,hoverBackground:w.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:o,text:"Подтвердить",icon:t.jsx(sl,{}),textColor:w.green.main,hoverBackground:w.green.transparent3,background:"transparent",width:"130px"}),t.jsx(j,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(ol,{}),textColor:w.blue.main,hoverBackground:w.blue.transparent3,background:"transparent",width:"130px"})]}),Lf=e=>e.confirmed===void 0?null:t.jsx(pe,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(If,{...e,confirmed:e.confirmed})}),Df=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:d,optional:c=!1,addNew:p=!1,divider:u,collapsed:x,links:m,specialFieldsName:h})=>{const{openArea:g,changeInputArea:b,included:v,setOpenArea:S,setIncluded:_,setChangeInputArea:E,handleRemove:k,handleAddNew:Y,handleLoadFiles:$,handleConfirm:N,handleCheckbox:J}=Ef({documents:a,optionalCheckbox:o,data:s,setData:r,optional:c,collapsed:x,confirmed:d});return t.jsxs(t.Fragment,{children:[t.jsxs(Sf,{openArea:g,children:[t.jsx(Cf,{title:e,included:v,optional:c,confirmed:d,setOpenArea:S,setIncluded:_,collapsed:x}),t.jsxs("div",{className:"inputs",children:[t.jsx(re,{type:"alert",visible:!!n,icon:t.jsx(vt,{}),children:n}),t.jsx(re,{type:"info",visible:!!i&&(b||d===void 0),title:"Как заполнить",icon:t.jsx(jt,{}),children:i}),Array.isArray(s[0])?s.map((z,Q)=>t.jsxs("div",{className:"data-line",children:[z.map((Oe,De)=>t.jsx(wn,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:Q,indexJ:De,specialFieldsNameConfig:h,...Oe},De)),b&&p&&t.jsx(j,{icon:t.jsx(al,{}),textColor:w.red.main,onClick:()=>k(Q),background:"transparent",isActive:!(o!=null&&o.value)})]},Q)):s.map((z,Q)=>t.jsx(wn,{documents:a,changeInputArea:b&&!(o!=null&&o.value),setData:r,indexI:Q,specialFieldsNameConfig:h,...z},Q)),p&&b&&t.jsx(j,{icon:t.jsx(rl,{}),text:"Добавить",onClick:Y,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&b&&t.jsx(Ks,{files:a.files,setFiles:z=>$(z),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(m==null?void 0:m.length)&&m.map(z=>l.createElement(Cd,{...z,key:z.title})),t.jsx(Ce,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||b,checked:(o==null?void 0:o.value)??!1,setChecked:J}),t.jsx(Lf,{confirmed:d,changeInputArea:b,setData:r,setChangeInputArea:E,handleConfirm:N})]})]}),u&&t.jsx(he,{})]})},zf=f.div`
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
`,Mf=f.div`
    display: flex;
    margin-bottom: -20px;
`,Ff=f.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,Bf=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(d=>({...d,[i]:Xe(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(Mf,{children:e.map((r,d)=>t.jsxs(Ff,{lastElement:d===e.length-1,children:[t.jsx(zf,{current:d===i,onClick:()=>a(d),reached:s[d],children:d+1}),d!==e.length-1&&t.jsx(ld,{direction:"horizontal",reached:s[d],filled:100,distance:40})]},d))}),t.jsx(t.Fragment,{children:e[i].map((r,d)=>l.createElement(Df,{...r.dataForm,setData:r.setDataForm,key:d}))})]})},Uf=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),Hf=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Wf=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Vf=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(p=>{if(o)return wf(p);if(Array.isArray(p.data[0])){const u=p.data.map(m=>Object.assign({},...m==null?void 0:m.map(h=>jn(h)))),x={};return x[e]=JSON.stringify(u),x}else return p.data.map(u=>jn(u))}).flat(),r=i.map(p=>{var x,m;const u={};if((x=p.documents)!=null&&x.fieldName)for(let h=0;h<p.documents.files.length;h++)u[((m=p.documents)==null?void 0:m.fieldName)+`[${h}]`]=p.documents.files[h];return u}),d=i.map(p=>{var x,m;const u={};return(x=p.optionalCheckbox)!=null&&x.fieldName&&(u[(m=p.optionalCheckbox)==null?void 0:m.fieldName]=p.optionalCheckbox.value),u}),c=Object.assign({},...a,...r,...d);try{await tt.postApplicationFx({formId:e,args:c}),n(!1),s(!0)}catch(p){n(!1),V.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${p}`,type:"failure",time:3e4})}},jn=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=Gf(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},Gf=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,Yf=f.div`
    display: flex;
    align-items: ${({isDone:e})=>e?"center":"flex-start"};
    justify-content: center;
    width: 100%;
    height: ${({isDone:e})=>e&&"100%"};
    padding: 10px;
    color: var(--text);
`;var ra=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.ACCOMMODATION_FOR_GRADUATES="accommodation_for_graduates",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(ra||{}),qf=(e=>(e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e))(qf||{});const Kf=[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}],Xf=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],Jf=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:Xf},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:Kf}]}},Qf=()=>{var z;const[e,i]=l.useState(null),[n,s]=l.useState(Ct.kvdCert),[o,a]=l.useState(Ct.fluorographyCert),[r,d]=l.useState(Ct.vichRwCert),[c,p]=l.useState(Ct.graftCert),{data:{dataUserApplication:u}}=Ot.useApplications(),{data:{user:x}}=ne.useUser(),[m,h]=l.useState(!1),[g,b]=l.useState(!1),[v,S]=l.useState(null),[_,E]=l.useState(null),[k,Y]=l.useState(null),$=m??!1;if((x==null?void 0:x.educationForm)!=="Недоступен")return t.jsx(ce,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const N=!!e&&!!_&&!!v&&!!k;if(l.useEffect(()=>{u&&(i(Jf(u)),S(Hf()),E(Wf()),Y(Uf()))},[u]),!N)return null;const J=[[{dataForm:e,setDataForm:i}],[{dataForm:_,setDataForm:E}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:d}],[{dataForm:c,setDataForm:p}]];return t.jsx(Yf,{isDone:$,children:t.jsxs(Ad,{children:[t.jsx(K,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(Bf,{stagesConfig:J}),t.jsx(Ss,{text:"Отправить",action:()=>Vf(ra.USG_GETHOSTEL_OOZ,[e,_,v,k,n,o,r,c],b,h),isLoading:g,completed:m,setCompleted:h,repeatable:!1,buttonSuccessText:"Отправлено",isDone:$,isActive:(((z=e.optionalCheckbox)==null?void 0:z.value)??!0)&&Xe(e)&&Xe(o)&&Xe(r)&&Xe(c)&&Xe(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Zf=l.lazy(()=>y(()=>import("./index-1ef8a3a5.js"),["assets/index-1ef8a3a5.js","assets/vendor-9cc634b6.js"])),ex=l.lazy(()=>y(()=>import("./index-bf443ddc.js"),["assets/index-bf443ddc.js","assets/vendor-9cc634b6.js"])),tx=l.lazy(()=>y(()=>import("./index-0ebccb9d.js"),["assets/index-0ebccb9d.js","assets/vendor-9cc634b6.js"])),ix=l.lazy(()=>y(()=>import("./index-81afca94.js"),["assets/index-81afca94.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-87d406e2.js"),["assets/index-87d406e2.js","assets/vendor-9cc634b6.js"]));const nx=l.lazy(()=>y(()=>import("./index-c75106ec.js"),["assets/index-c75106ec.js","assets/vendor-9cc634b6.js","assets/get-method-obtaining-fields-2f28254a.js","assets/find-current-in-select-ba4611d5.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),sx=l.lazy(()=>y(()=>import("./index-473665f9.js"),["assets/index-473665f9.js","assets/vendor-9cc634b6.js","assets/get-method-obtaining-fields-2f28254a.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),ox=l.lazy(()=>y(()=>import("./index-ab8a77b1.js"),["assets/index-ab8a77b1.js","assets/vendor-9cc634b6.js","assets/get-method-obtaining-fields-2f28254a.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),ax=l.lazy(()=>y(()=>import("./index-64d0c78b.js"),["assets/index-64d0c78b.js","assets/vendor-9cc634b6.js"])),rx=l.lazy(()=>y(()=>import("./index-a6045b99.js"),["assets/index-a6045b99.js","assets/vendor-9cc634b6.js","assets/index-4a152e55.js"])),lx=l.lazy(()=>y(()=>import("./index-9434a510.js"),["assets/index-9434a510.js","assets/vendor-9cc634b6.js"])),cx=l.lazy(()=>y(()=>import("./index-ddf6e879.js"),["assets/index-ddf6e879.js","assets/vendor-9cc634b6.js"])),dx=l.lazy(()=>y(()=>import("./index-b6f35692.js"),["assets/index-b6f35692.js","assets/vendor-9cc634b6.js"])),px=l.lazy(()=>y(()=>import("./index-6b1ee3c9.js"),["assets/index-6b1ee3c9.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-bdd4510a.js"),["assets/index-bdd4510a.js","assets/vendor-9cc634b6.js"]));const ux=l.lazy(()=>y(()=>import("./index-6198a9fd.js"),["assets/index-6198a9fd.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-62452f90.js"),["assets/index-62452f90.js","assets/vendor-9cc634b6.js"]));const hx=l.lazy(()=>y(()=>import("./index-cc242d63.js"),["assets/index-cc242d63.js","assets/vendor-9cc634b6.js"])),gx=l.lazy(()=>y(()=>import("./index-dd49afdf.js"),["assets/index-dd49afdf.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-c966fc2f.js"),["assets/index-c966fc2f.js","assets/vendor-9cc634b6.js"]));const fx=l.lazy(()=>y(()=>import("./index-09a54f23.js"),["assets/index-09a54f23.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-9cd9c7b0.js"),["assets/index-9cd9c7b0.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-29edd7fe.js"),["assets/index-29edd7fe.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-583bcec3.js"),["assets/index-583bcec3.js","assets/vendor-9cc634b6.js"]));const xx=l.lazy(()=>y(()=>import("./index-e2117c26.js"),["assets/index-e2117c26.js","assets/vendor-9cc634b6.js"])),mx=l.lazy(()=>y(()=>import("./index-c519c45e.js"),["assets/index-c519c45e.js","assets/vendor-9cc634b6.js","assets/get-method-obtaining-fields-2f28254a.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),bx=l.lazy(()=>y(()=>import("./index-28bed7e7.js"),["assets/index-28bed7e7.js","assets/vendor-9cc634b6.js","assets/get-method-obtaining-fields-2f28254a.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),vx=l.lazy(()=>y(()=>import("./index-a26ffb9f.js"),["assets/index-a26ffb9f.js","assets/vendor-9cc634b6.js"])),_x=l.lazy(()=>y(()=>import("./index-de9e132b.js"),["assets/index-de9e132b.js","assets/vendor-9cc634b6.js"])),yx=l.lazy(()=>y(()=>import("./index-1495b10d.js"),["assets/index-1495b10d.js","assets/vendor-9cc634b6.js"])),wx=l.lazy(()=>y(()=>import("./index-f40785a4.js"),["assets/index-f40785a4.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-6874bd64.js"),["assets/index-6874bd64.js","assets/vendor-9cc634b6.js"]));const jx=l.lazy(()=>y(()=>import("./index-9da6cc6e.js"),["assets/index-9da6cc6e.js","assets/vendor-9cc634b6.js"])),kx=l.lazy(()=>y(()=>import("./index-8ccaad19.js"),["assets/index-8ccaad19.js","assets/vendor-9cc634b6.js"])),Tx=l.lazy(()=>y(()=>import("./index-3aa06e99.js"),["assets/index-3aa06e99.js","assets/vendor-9cc634b6.js","assets/get-divisions-96cfa1b1.js"])),T="/applications",Ex="/application-for-superior-room",Sx="/acad-performance",$x="/dormitory",la=T+"/clarification-of-passport-data",ca=T+"/arbitrary-request",da=T+"/social-scollarship",pa=T+"/certificate-of-attendance",ua=T+"/social-agencies",ha=T+"/paper-call",ga=T+"/regular-accommodation",fa=T+"/full-time-part-time-form",xa=T+"/accommodation-correspondence-form",ma=T+"/academic-leave-accommodation",ba=T+"/preferential-accommodation",va=T+"/family-room",_a=T+"/termination-of-employment-contract",ya=T+"/relocation-inside-hostel",wa=T+"/relocation-to-another-hostel",ja=T+"/accommodation-for-graduates",_i=T+"/payment-recipient",ka=T+"/restoring-the-magnetic-pass",Ta=T+"/retake-for-diploma",Ea=T+"/military-registration-documents",Sa=T+"/financial-support",$a=T+"/financial-assistance",Pa=T+"/increased-state-academic-scholarship",Oa=T+"/changing-personal-data",Aa=T+"/student-status",Ra=T+"/state-accreditation",Px=T+"/military-registration-card",Na=T+"/holidays-after-training",Ca=T+"/provision-academic-leave",Ia=T+"/independently-deducted",La=T+"/extension-attestation",Ke=()=>ue({oldVersionUrl:"/sprav"}),Je=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(C,{}),path:T,Component:rx,color:"red",isTemplate:!1,group:"OTHER",pageSize:"big",keywords:["справки","справка","заявления","заявление"]},...Rr,dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(Vi,{}),path:$x,Component:tx,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(ll,{}),path:Sx,Component:ex,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(es,{}),path:$r,Component:lx,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(cl,{}),path:Ar,Component:Ii,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(Vi,{}),path:Ex,Component:Zf,color:"blue",isTemplate:!1,group:"GENERAL",show:!1}}),yi=e=>{var i,n,s;return{...Nr,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(Ft,{}),path:la,Component:ix,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(Ft,{}),path:ca,Component:Tx,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(F,{}),path:da,Component:Ke,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(F,{}),path:pa,Component:nx,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(F,{}),path:ua,Component:sx,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(F,{}),path:ha,Component:ox,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:t.jsx(F,{}),path:ga,Component:ax,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:t.jsx(F,{}),path:fa,Component:Qf,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:t.jsx(F,{}),path:xa,Component:jx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:t.jsx(F,{}),path:ma,Component:cx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:t.jsx(F,{}),path:ba,Component:dx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:t.jsx(F,{}),path:va,Component:kx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:t.jsx(F,{}),path:_a,Component:px,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:t.jsx(F,{}),path:ya,Component:()=>t.jsx(ue,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение внутри общежития будет осуществляться с 01.10.2023"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие",icon:t.jsx(F,{}),path:wa,Component:()=>t.jsx(ue,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение в другое общежитие завершен 15.06.2023"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"accommodation-for-graduates":{id:"accommodation-for-graduates",title:"Предоставление права проживания в каникулярный период",icon:F,path:ja,Component:["4","5","6"].includes((e==null?void 0:e.course)??"")||(n=(i=e==null?void 0:e.status)==null?void 0:i.toLocaleLowerCase())!=null&&n.includes("окончил")||((s=e==null?void 0:e.degreeLevel)==null?void 0:s.toLocaleLowerCase())==="магистратура"&&(e==null?void 0:e.course)==="2"?ux:()=>t.jsx(ue,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:t.jsx(F,{}),path:_i,Component:hx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:t.jsx(F,{}),path:ka,Component:gx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:t.jsx(F,{}),path:Ea,Component:Ke,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:t.jsx(F,{}),path:Ta,Component:fx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:t.jsx(F,{}),path:Pa,Component:Ke,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:t.jsx(F,{}),path:Sa,Component:Ke,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:t.jsx(F,{}),path:$a,Component:Ke,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:t.jsx(F,{}),path:Oa,Component:xx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:t.jsx(F,{}),path:Aa,Component:mx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:t.jsx(F,{}),path:Ra,Component:bx,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(F,{}),path:Na,Component:vx,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(F,{}),path:Ca,Component:_x,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(F,{}),path:Ia,Component:yx,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(F,{}),path:La,Component:wx,color:"blue",isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:T},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(F,{}),path:Px,Component:Ke,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:T}}},kn=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),Ox=["settings","profile","chat","schedule","payments","project-activity","all-students"],Ax=["home","schedule","acad-performance","all","profile"],Rx=["home","schedule","hr-applications","all","profile"],Nx=e=>{var a;if(!e)return[];const n=((a=JSON.parse(localStorage.getItem("new-settings")||"{}")[e.id]["settings-customize-menu"])==null?void 0:a.property.pages)??Vt,s=as.filter(r=>!n.includes(r));return(e==null?void 0:e.user_status)==="staff"&&n.some(r=>!s.includes(r))?[...n,...s]:n},Tn={allRoutes:null,visibleRoutes:null,leftsideBarRoutes:null,homeRoutes:null,currentPage:null,isOpen:!1},Cx=()=>I(Lx),Da=O(),za=O(),Ma=O(),Fa=O(),Ix=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},dt=e=>{if(!e)return bi();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",d=Object.entries(bi()).filter(([c])=>c!==r||c===r&&a);return Object.fromEntries(d)},Lx=ie(Tn).on(Da,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(za,()=>({...Tn})).on(Ma,(e,{user:i,adminLinks:n,homeRoutes:s})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?dt(n)[window.location.hash.slice(2,window.location.hash.length)]:Je()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...dt(n),...vi()}:{...Je(),...yi(i)},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?dt(n):Je(),leftsideBarRoutes:kn(Nx(i),(i==null?void 0:i.user_status)==="staff"?dt(n):Je()),homeRoutes:kn(s??JSON.parse(localStorage.getItem("home-routes")??JSON.stringify(Ox)),(i==null?void 0:i.user_status)==="staff"?{...dt(n),...vi()}:{...Je(),...yi(i)})})).on(Fa,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:Ix(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),Ee={useMenu:Cx},ve={changeOpen:Da,clearStore:za,defineMenu:Ma,changeNotifications:Fa},Dx=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:Pr,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:rt,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:$i,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:$i,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:Wt,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:te,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:jo,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:Di,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:T,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:_r,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},zx={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},Jt=H(async({settings:e})=>{try{const{data:i}=await kc(),n={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"};return i.filter(({type:s})=>e[n[s]]).map(({id:s,type:o,title:a,text:r})=>Dx(o,s,a,r))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),Mx=H(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&ve.changeNotifications({page:i,notifications:1})})}),Fx=H(({notifications:e})=>{const{pageId:i}=e[0];i&&ve.changeNotifications({page:i,notifications:1})}),Qt=H(async({id:e,pageId:i})=>{try{return await Tc(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),Zt=H(async()=>{try{await Ec()}catch{throw new Error("Не удалось скрыть все уведомления")}}),Bx=e=>{e&&ve.changeNotifications({page:e,notifications:0})},Ba=O(),Ua=O(),Ha=O(),Wa=O(),Va=O(),Ga=O(),Ya=O(),X=ie(zx).reset(Ya);Se({from:Ua,to:Jt});ge({clock:Jt.pending,source:X,fn:(e,i)=>({...e,loading:i}),target:X});ge({clock:Jt.failData,source:X,fn:(e,i)=>({...e,error:i.message}),target:X});ge({clock:Jt.doneData,source:X,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[X,Mx]});ge({clock:Ba,source:X,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[X,Fx]});Se({from:Wa,to:Qt});ge({clock:Qt.doneData,source:X,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(Bx(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:X});ge({clock:Qt.failData,source:X,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:X});ge({clock:Qt.pending,source:X,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:X});Se({from:Va,to:Zt});ge({clock:Zt.pending,source:X,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:X});ge({clock:Zt.failData,source:X,fn:(e,i)=>({...e,clearAllError:i.message}),target:X});ge({clock:Zt.doneData,source:X,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:X});ge({clock:Ha,source:X,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:X});ge({clock:Ga,source:X,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:X});const Ux=()=>Vn(X),Ve={initialize:Ua,add:Ba,clearById:Wa,clearVisibleById:Ha,clearAll:Va,clearAllVisible:Ga,clearStore:Ya},we={useLkNotifications:Ux},Hx=Object.freeze(Object.defineProperty({__proto__:null,events:Ve,selectors:we},Symbol.toStringTag,{value:"Module"})),En={messages:null,error:null},Wx=()=>({data:I(Sn).messages,loading:I(ht.pending),error:I(Sn).error}),ht=H(async()=>{try{return(await ic("1")).data}catch(e){throw new Error(e)}}),qa=O(),Sn=ie(En).on(ht,e=>({...e,error:null})).on(ht.doneData,(e,i)=>({...e,messages:i})).on(ht.failData,(e,i)=>({...e,error:i.message})).on(qa,()=>({...En})),Vx={useMessages:Wx},Gx={getMessagesFx:ht},Yx={clearStore:qa},qx=Object.freeze(Object.defineProperty({__proto__:null,effects:Gx,events:Yx,selectors:Vx},Symbol.toStringTag,{value:"Module"})),$n={type:null,personalNotifications:null,error:null,completed:!1},Kx=()=>({data:I(et).personalNotifications,loading:I(Ze.pending),error:I(et).error,completed:I(et).completed}),Xx=()=>I(et).type,Ka=O(),Xa=H(e=>e),Ze=H(async()=>{const{type:e}=et.getState();if(e==="notifications")try{return(await gs()).data}catch(i){throw new Error(i)}try{return{docs:(await fs()).data}}catch(i){throw new Error(i)}}),Ht=H(async e=>{const{type:i}=et.getState(),n=i==="notifications"?gc:xc;try{return await n.view(e),"ok"}catch{throw new Error("Ошибка загрузки данных")}}),Ja=O(),et=ie($n).on(Xa,(e,i)=>({...e,type:i})).on(Ze,e=>({...e,error:null})).on(Ze.doneData,(e,i)=>({...e,personalNotifications:i})).on(Ze.failData,(e,i)=>({...e,error:i.message})).on(Ht.doneData,e=>({...e})).on(Ht.failData,(e,i)=>({...e,error:i.message})).on(Ka,(e,i)=>({...e,completed:i.completed})).on(Ja,()=>({...$n}));Ht.doneData.watch(()=>Ze());const Jx={usePersonalNotifications:Kx,useType:Xx},Qx={setNotificationsType:Xa,getPersonalNotificationsFx:Ze,viewPersonalNotificationsFx:Ht},Zx={changeCompleted:Ka,clearStore:Ja},em=Object.freeze(Object.defineProperty({__proto__:null,effects:Qx,events:Zx,selectors:Jx},Symbol.toStringTag,{value:"Module"})),tm=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},Pn={payments:null,error:null},im=()=>({data:I(On).payments,loading:I(gt.pending),error:I(On).error}),gt=H(async()=>{const e=await Zl();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),wi=H(async e=>{try{return await ec(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}}),Qa=O(),On=ie(Pn).on(gt,e=>({...e,error:null})).on(gt.doneData,(e,i)=>({...e,payments:i})).on(gt.failData,(e,i)=>({...e,error:i.message})).on(wi.doneData,(e,i)=>({...e,payments:tm(e.payments,i,!1)})).on(wi.failData,(e,i)=>({...e,error:i.message})).on(Qa,()=>({...Pn})),nm={usePayments:im},sm={getPaymentsFx:gt,signContractFx:wi},om={clearStore:Qa},am=Object.freeze(Object.defineProperty({__proto__:null,effects:sm,events:om,selectors:nm},Symbol.toStringTag,{value:"Module"})),rm=Pt({api:{get:uc}}),lm=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s]=e.split(" - "),[o,a]=s.split(":");return+o*60+ +a-(n.getHours()*60+n.getMinutes());case"days":const r=new Date(e);return Math.ceil(Math.floor((r.getTime()-new Date().getTime())/1e3/60/60)/24)}},An=e=>e&&Object.keys(e).length?Object.keys(e).findIndex(n=>{const s=lm(n,"days");return s>=0&&s<30})+1:0,cm=(e,i)=>e&&e[0]?Object.keys(e[0]).find((n,s)=>s+1===i)||"sunday":e&&e[2]?"":"sunday";function ji({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}var ki=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(ki||{});const Za=e=>new Date(e.setHours(0,0,0,0)),Qe=new Date,Rn=1,Nn=Qe.getDay(),Ti=Za(new Date(Qe.valueOf()-(Nn<=0?7-Rn:Nn-Rn)*864e5)),dm=Za(new Date(Ti.valueOf()+6*864e5)),pm=e=>{const[i,n]=e.dateInterval.split("-").map(x=>x.trim()),[s,o]=i.split(" "),[a,r]=(n==null?void 0:n.split(" "))??[null,null],d=ki[o],c=ki[r]||d,p=new Date(`${d}/${s}/${c>=d?Qe.getFullYear():Qe.getFullYear()-1}`),u=a&&c?new Date(`${c}/${a}/${c>=d?Qe.getFullYear():Qe.getFullYear()+1}`):null;return!!(p<=dm&&(!u&&Ti<=p||u&&u>=Ti))},um=e=>e.filter(i=>pm(i)),hm=async(e,i)=>{const n=typeof e=="string",s=!n&&!(e!=null&&e.subdivisions)||!!(i!=null&&i.length),o=s?await Jl(i??e.group??""):n?await Yi(e):await Yi(ji({name:e.name,surname:e.surname,patronymic:e.patronymic})),a=s?await Ql():n?await qi(e):await qi(ji({name:(e==null?void 0:e.name)??"",surname:(e==null?void 0:e.surname)??"",patronymic:(e==null?void 0:e.patronymic)??""})),r={},d={},c={monday:{lessons:[]},tuesday:{lessons:[]},wednesday:{lessons:[]},thursday:{lessons:[]},friday:{lessons:[]},saturday:{lessons:[]}};if(o.data.status!=="error"){for(const p in o.data)if(p!=="Sunday"){const u=p.charAt(0).toLowerCase()+p.slice(1);d[u]=s?o.data[p]:{lessons:o.data[p]}}for(const[p,u]of Object.entries(d))c[p].lessons=um(u.lessons)}if(a.data.status!=="error")for(const p in a.data)s?r[p]=a.data[p]:a.data[p].length&&(r[p]={lessons:a.data[p]});return{0:Object.keys(o.data).length&&o.data.status!=="error"?c:null,1:Object.keys(o.data).length&&o.data.status!=="error"?d:null,2:Object.keys(a.data).length&&Object.values(r).find(p=>!!p.lessons.length)&&a.data.status!=="error"?r:null,3:null}},Cn={schedule:null,currentModule:"0",currentDay:new Date().getDay(),currentDayString:"",currentChosenDay:new Date().getDay(),view:"full",error:null},gm=()=>({data:I(In),loading:I(ft.pending),error:I(In).error}),ft=H(async({user:e,group:i})=>{try{return hm(e,i)}catch{throw new Error("Не удалось загрузить расписание")}}),er=O(),tr=O(),ir=O(),nr=O(),In=ie(Cn).on(ft,e=>({...e,schedule:null,error:null})).on(ft.doneData,(e,i)=>({...e,schedule:i,currentModule:i[0]?"0":i[1]?"1":i[2]?"2":i[3]?"3":"0",currentDayString:cm(i,e.currentDay),currentChosenDay:An(i[2]),currentDay:i[0]?new Date().getDay():An(i[2])})).on(ft.failData,e=>({...e,error:"Не удалось загрузить расписание"})).on(er,(e,i)=>({...e,currentModule:i.currentModule.toString()})).on(tr,(e,i)=>({...e,view:i.view})).on(ir,(e,i)=>({...e,currentChosenDay:i.day})).on(nr,()=>({...Cn})),fm={useSchedule:gm},xm={changeCurrentModule:er,changeView:tr,changeCurrentChosenDay:ir,clearStore:nr},mm={getScheduleFx:ft},bm=Object.freeze(Object.defineProperty({__proto__:null,effects:mm,events:xm,selectors:fm},Symbol.toStringTag,{value:"Module"})),Ln={superiorRoom:null,error:null},vm=()=>({data:I(Dn).superiorRoom,loading:I(xt.pending),error:I(Dn).error}),sr=O(),_m=H(async e=>{});Se({from:sr,to:_m});const xt=H(async()=>{try{return(await ac()).data}catch{throw new Error("Не удалось загрузить раздел")}}),or=O(),Dn=ie(Ln).on(xt,e=>({...e,error:null})).on(xt.doneData,(e,i)=>({...e,superiorRoom:i})).on(xt.failData,(e,i)=>({...e,error:i.message})).on(or,()=>({...Ln})),ym={useSuperiorRoom:vm},wm={getSuperiorRoomFx:xt},jm={postSuperiorRoom:sr,clearStore:or},km=Object.freeze(Object.defineProperty({__proto__:null,effects:wm,events:jm,selectors:ym},Symbol.toStringTag,{value:"Module"})),zn={teacherDataVerification:null,error:null,completed:!1},Tm=()=>({data:I(ci).teacherDataVerification,loading:I(mt.pending),error:I(ci).error,completed:I(ci).completed}),ar=O(),rr=O(),Em=H(async e=>{try{return(await _c(e)).data}catch{throw new Error("Не удалось загрузить раздел")}});Se({from:ar,to:Em});const mt=H(async()=>{try{return(await vc()).data}catch{throw new Error("Не удалось войти")}}),lr=O(),ci=ie(zn).on(mt,e=>({...e,error:null})).on(mt.doneData,(e,i)=>({...e,teacherDataVerification:i})).on(mt.failData,(e,i)=>({...e,error:i.message})).on(rr,(e,i)=>({...e,completed:i.completed})).on(lr,()=>({...zn})),Sm={useTeacherDataVerification:Tm},$m={getTeacherDataVerificationFx:mt},Pm={postTeacherDataVerification:ar,changeCompleted:rr,clearStore:lr},Om=Object.freeze(Object.defineProperty({__proto__:null,effects:$m,events:Pm,selectors:Sm},Symbol.toStringTag,{value:"Module"})),Am=[$c,hi,Cc,Dc,Wc,qx,em,am,qc,rm,bm,km,Om,Uc,Oc,Hx],Rm=()=>{Am.forEach(e=>{e.events.clearStore()})},Ae=JSON.parse(localStorage.getItem("token")??"null"),Re=()=>JSON.parse(localStorage.getItem("savePassword")??"true"),ei=H(async e=>{try{const i=await ql(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await kt.post("/old",n)}catch{}return Re()?(localStorage.setItem("token",JSON.stringify(i.data)),localStorage.setItem("jwt",JSON.stringify(i.data.jwt))):(sessionStorage.setItem("token",JSON.stringify(i.data)),sessionStorage.setItem("jwt",JSON.stringify(i.data.jwt))),i.data}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),Be=H(async e=>{try{const n=(await Kl(e.token)).data.user,{name:s,surname:o,patronymic:a}=n;return{currentUser:{...n,fullName:ji({name:s,surname:o,patronymic:a})},isAuthenticated:!!e,error:null,savePassword:Re()}}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),Ei=H(async e=>{try{return(await Xl(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),Nm=()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=I(Im);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:I(ei.pending),error:i}},cr=H(()=>{Re()?localStorage.removeItem("token"):sessionStorage.removeItem("token"),Rm()}),dr=e=>{const i=localStorage.getItem("savePassword"),n=e??JSON.parse(i??"true");return localStorage.setItem("savePassword",n.toString()),n},pr=O(),Fi=O(),ur=O(),hr=O(),gr=O();Se({from:pr,to:ei});Se({from:ei.doneData,to:Be});Se({from:Fi,to:cr});Ae&&Re()?Be(Ae):cr();var Bn;const Cm={currentUser:null,error:null,isAuthenticated:!!((Bn=Ae==null?void 0:Ae.token)!=null&&Bn.length),savePassword:Re(),loginEuz:""};dr();const Im=ie(Cm).on(Be,e=>({...e,error:null})).on(Be.doneData,(e,i)=>i).on(Be.failData,(e,i)=>{var n;return{error:i.message,currentUser:null,isAuthenticated:!!((n=Ae==null?void 0:Ae.token)!=null&&n.length),savePassword:Re()}}).on(ei.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:Re()})).on(Fi,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:Re()})).on(gr,(e,{savePassword:i})=>({...e,savePassword:dr(i)})).on(Ei,e=>({...e,error:null})).on(Ei.doneData,(e,i)=>({...e,loginEuz:i})).on(Be.failData,(e,i)=>({...e,error:i.message})).on(hr,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(ur,e=>({...e,currentUser:null})),ne={useUser:Nm},Si={login:pr,logout:Fi,changeSavePassword:gr,clear:ur,update:hr},Lm={getUserFx:Be,getLoginEuzFx:Ei},Dm=()=>t.jsx("div",{className:"left",children:t.jsxs(pe,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(qt,{width:"50px",short:!0,className:"logo first"}),t.jsxs(pe,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(Z,{to:Ui,tabIndex:-1,children:t.jsx(j,{padding:"0",icon:t.jsx(yt,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:Tr,tabIndex:-1,children:t.jsx(j,{padding:"0",icon:t.jsx(dl,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:kr,tabIndex:-1,children:t.jsx(j,{padding:"0",icon:t.jsx(vt,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:Er,tabIndex:-1,children:t.jsx(j,{padding:"0",icon:t.jsx(vt,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(he,{}),t.jsx(Z,{to:jr,tabIndex:-1,children:t.jsx(j,{padding:"0",icon:t.jsx(pl,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(Ps,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx(Jn,{}),align:"left",padding:"0",width:"100%",href:`${P}/index.php`})]})}),zm=()=>{const{search:e}=Qn();return se.useMemo(()=>new URLSearchParams(e),[e])},Mm=()=>{const e=zm(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[d,c]=l.useState(!1),p=!!a&&!!s,u=Si.login,x=g=>{c(g.getModifierState("CapsLock")),g.key==="Enter"&&u({login:s,password:a})},m=g=>{Si.changeSavePassword({savePassword:g})},h=()=>u({login:s,password:a});return l.useEffect(()=>{i&&n&&u({login:i,password:n})},[i,n]),{isSubmitActive:p,handleSavePassword:m,handleKeyPress:x,handleLogin:h,password:a,setPassword:r,capsLock:d,login:s,setLogin:o}},Fm=()=>{const{loading:e,error:i,data:n}=ne.useUser(),{isSubmitActive:s,handleKeyPress:o,handleSavePassword:a,handleLogin:r,password:d,setPassword:c,capsLock:p,login:u,setLogin:x}=Mm();return t.jsx("div",{className:"right",onKeyDown:o,children:t.jsxs(pe,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(qt,{width:"50px",short:!0,className:"logo second"}),t.jsx(R,{jc:"space-between",children:t.jsx(K,{size:3,align:"left",children:"Личный кабинет"})}),t.jsxs(pe,{gap:16,scroll:!1,children:[t.jsx(K,{size:4,align:"left",children:"Вход"}),t.jsx(ee,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(re,{type:"failure",visible:!!i,children:i}),t.jsx(re,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(Te,{value:u,setValue:x,title:"Логин",placeholder:"Введите логин"}),t.jsx(Te,{value:d,setValue:c,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:p?"Включен Capslock":void 0}),t.jsx(Ce,{text:"Оставаться в системе",checked:n.savePassword,setChecked:a})]}),t.jsx(Ss,{text:"Вход",action:r,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},Bm=f(Pe)`
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
`,Um=()=>{const{data:{isAuthenticated:e}}=ne.useUser();return t.jsxs(Bm,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(Dm,{}),t.jsx(Fm,{})]})},Hm=f.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme);
    flex-direction: column;

    @media (max-width: ${Cl}) {
        justify-content: flex-start;
        align-items: flex-start;
    }
`,Wm=()=>t.jsx(Hm,{children:t.jsx(Um,{})}),Vm=l.lazy(()=>y(()=>import("./index-0d8d5b98.js"),["assets/index-0d8d5b98.js","assets/vendor-9cc634b6.js"])),fr=l.lazy(()=>y(()=>import("./index-f326c9ea.js"),["assets/index-f326c9ea.js","assets/vendor-9cc634b6.js","assets/index-c12761ac.js","assets/index-71955de0.js"])),xr=l.lazy(()=>y(()=>import("./index-1a018cb2.js"),["assets/index-1a018cb2.js","assets/vendor-9cc634b6.js","assets/index-c12761ac.js","assets/index-71955de0.js"])),Gm=l.lazy(()=>y(()=>import("./index-b4dfbfd0.js"),["assets/index-b4dfbfd0.js","assets/vendor-9cc634b6.js"]));l.lazy(()=>y(()=>import("./index-1bd6a72e.js"),["assets/index-1bd6a72e.js","assets/vendor-9cc634b6.js","assets/index.esm-c297f790.js"]));const Ym=l.lazy(()=>y(()=>import("./index-4abd80ac.js"),["assets/index-4abd80ac.js","assets/vendor-9cc634b6.js","assets/index-7902c547.js"])),mr=l.lazy(()=>y(()=>import("./index-1a5db242.js"),["assets/index-1a5db242.js","assets/vendor-9cc634b6.js","assets/help-links-2f44c283.js"])),qm=l.lazy(()=>y(()=>import("./index-fce4dd66.js"),["assets/index-fce4dd66.js","assets/vendor-9cc634b6.js"])),Km=l.lazy(()=>y(()=>import("./index-6d912c13.js"),["assets/index-6d912c13.js","assets/vendor-9cc634b6.js"])),Xm=l.lazy(()=>y(()=>import("./index-0fead91d.js"),["assets/index-0fead91d.js","assets/vendor-9cc634b6.js","assets/week-schedule-91508e86.js","assets/index-ce139e30.js","assets/debt-62f04d3c.js"])),Jm=l.lazy(()=>y(()=>import("./index-369c3882.js"),["assets/index-369c3882.js","assets/vendor-9cc634b6.js"])),Qm=l.lazy(()=>y(()=>import("./index-1b216540.js"),["assets/index-1b216540.js","assets/vendor-9cc634b6.js","assets/index-7902c547.js","assets/debt-62f04d3c.js","assets/index-ce139e30.js"])),Zm=l.lazy(()=>y(()=>import("./index-34b15f68.js"),["assets/index-34b15f68.js","assets/vendor-9cc634b6.js"])),e0=l.lazy(()=>y(()=>import("./index-831f0e71.js"),["assets/index-831f0e71.js","assets/vendor-9cc634b6.js","assets/index-821068db.js","assets/week-schedule-91508e86.js","assets/index-ce139e30.js","assets/index-71955de0.js"])),t0=l.lazy(()=>y(()=>import("./index-a3a24a7b.js"),["assets/index-a3a24a7b.js","assets/vendor-9cc634b6.js","assets/customize-leftside-bar-item-ddffd88f.js","assets/index.esm-c297f790.js","assets/index-ce139e30.js"])),i0=l.lazy(()=>y(()=>import("./index-50a46d05.js"),["assets/index-50a46d05.js","assets/vendor-9cc634b6.js"])),n0=l.lazy(()=>y(()=>import("./index-60a0fb17.js"),["assets/index-60a0fb17.js","assets/vendor-9cc634b6.js"])),s0=l.lazy(()=>y(()=>import("./index-c0aba3be.js"),["assets/index-c0aba3be.js","assets/vendor-9cc634b6.js","assets/customize-leftside-bar-item-ddffd88f.js","assets/index.esm-c297f790.js"])),o0=l.lazy(()=>y(()=>import("./index-327ac9e6.js"),["assets/index-327ac9e6.js","assets/vendor-9cc634b6.js"])),a0=l.lazy(()=>y(()=>import("./index-8bfad804.js"),["assets/index-8bfad804.js","assets/vendor-9cc634b6.js","assets/index-821068db.js","assets/week-schedule-91508e86.js","assets/index-ce139e30.js","assets/index-71955de0.js"])),r0=l.lazy(()=>y(()=>import("./index-7161d896.js"),["assets/index-7161d896.js","assets/vendor-9cc634b6.js","assets/index-4f65cfc0.js"])),l0=l.lazy(()=>y(()=>import("./index-8e168ea4.js"),["assets/index-8e168ea4.js","assets/vendor-9cc634b6.js"])),c0=l.lazy(()=>y(()=>import("./index-4806a511.js"),["assets/index-4806a511.js","assets/vendor-9cc634b6.js","assets/help-links-2f44c283.js"])),d0=l.lazy(()=>y(()=>import("./index-c1a25261.js"),["assets/index-c1a25261.js","assets/vendor-9cc634b6.js","assets/help-links-2f44c283.js"])),p0=l.lazy(()=>y(()=>import("./index-ff002e0b.js"),["assets/index-ff002e0b.js","assets/vendor-9cc634b6.js"])),u0=()=>{const{notifications:e,clearAllError:i,clearAllLoading:n}=we.useLkNotifications(),s=()=>{je.evokeConfirm({message:"Вы уверены, что хотите очистить все уведомления?",onConfirm:()=>Ve.clearAll()})};return l.useEffect(()=>{i&&V.evokePopUpMessage({type:"failure",message:i})},[i]),t.jsx(Mi,{padding:"10px",children:t.jsxs(ea,{topRightCornerElement:t.jsx(Z,{to:Sr,children:t.jsx(j,{icon:t.jsx(Ri,{}),height:"35px",width:"35px"})}),children:[t.jsx(eo,{}),e.length>0?n?t.jsx(R,{jc:"center",children:t.jsx(Le,{width:"40px",height:"40px"})}):t.jsx(j,{text:"Очистить все",onClick:s,width:"100%"}):null]})})},br="/login",h0="/forgot-password",g0="/medical-certificate",bt="/all",Bi="/home",vr="/profile",Wt="/chat",Cb=Wt+"/:chatId",_r="/electronic-interaction-agreement",$i="/payments",rt="/schedule",yr="/all-students",f0="/all-students/:filter",x0="/all-teachers/:filter",wr="/all-teachers",Ui="/feedback",jr="/cant-access",kr="/memo-freshmen",Tr="/get-your-login",Er="/memo-teacher",ae="/settings",Ib=ae+"/:id",m0=ae+"/appearance",b0=ae+"/personal",v0=ae+"/security",_0=ae+"/home-page",y0=ae+"/customize-menu",Sr=ae+"/notifications",w0="/instructions",$r="/project-activity",Pr="/alerts",Or="/lk-notifications",Ar="/helpful-information",j0=rt+"/:filter",k0=Ar+"/:infoType";var T0=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Финансы и документы",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(T0||{});const E0=[{id:0,title:"",icon:"",path:br,Component:Wm},{id:1,title:"",icon:"",path:h0,Component:qm},{id:2,title:"Обратная связь",icon:t.jsx(yt,{}),path:Ui,Component:mr},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(Ue,{}),path:jr,Component:Gm},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:Tr,Component:l0},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:kr,Component:c0},{id:6,title:"Вниманию сотрудников!",icon:"",path:Er,Component:d0}],Rr={all:{id:"all",title:"Все разделы",icon:t.jsx(ul,{}),path:bt,Component:Vm,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0},settings:{id:"settings",title:"Настройки",icon:t.jsx(Ri,{}),path:ae,Component:t0,color:"grey",isTemplate:!0,show:!0,group:"GENERAL"},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(Xn,{}),path:_r,Component:Ym,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"small"},payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(di,{}),path:$i,Component:Qm,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},doclist:{id:"doclist",title:"Ознакомление с документами",shortTitle:"Ознакомление с док...",icon:t.jsx(C,{}),path:Di,Component:()=>t.jsx(r0,{}),color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(Oi,{}),path:Pr,Component:Km,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(is,{}),path:Bi,Component:Xm,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},profile:{id:"profile",title:"Профиль",icon:t.jsx(hl,{}),path:vr,Component:Zm,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(Ai,{}),path:Or,Component:u0,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"],isNew:!0},chat:{id:"chat",title:"Сообщения",icon:t.jsx(gl,{}),path:Wt,Component:()=>ue({oldVersionUrl:Wt}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(fl,{}),path:rt,Component:e0,color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["экзамены","зачеты","сессия","пересдача"],planeHeader:!0},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(Bt,{}),path:yr,Component:fr,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(ts,{}),path:wr,Component:xr,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"]},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(yt,{}),path:Ui,Component:mr,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(xl,{}),path:w0,Component:Jm,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(ml,{}),path:g0,Component:p0,color:"blue",isTemplate:!1,group:"GENERAL"}},Nr={"teachers-schedule":{id:"teachers-schedule",title:"Расписание преподавателя",icon:t.jsx(F,{}),path:j0,Component:a0,color:"blue",isTemplate:!1,show:!1,group:"OTHER",planeHeader:!0},"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(Bt,{}),path:f0,Component:fr,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(Bt,{}),path:x0,Component:xr,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(bl,{}),path:m0,Component:n0,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:ae,backButtonText:"Настройки"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx(vl,{}),path:b0,Component:i0,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:ae,backButtonText:"Настройки"},"settings-security":{id:"settings-security",title:"Настройки. Безопасность",icon:t.jsx(_l,{}),path:v0,Component:o0,color:"green",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Безопасность",fallbackPrevPage:ae,backButtonText:"Настройки"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная",icon:t.jsx(is,{}),path:_0,Component:s0,color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная",fallbackPrevPage:ae,backButtonText:"Настройки"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(yl,{}),path:y0,Component:()=>t.jsx(t.Fragment,{}),color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:ae,backButtonText:"Настройки"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(Ai,{}),path:Sr,Component:()=>t.jsx(t.Fragment,{}),color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:ae,backButtonText:"Настройки"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:k0,Component:Ii,color:"grey",isTemplate:!0,show:!1}},S0=()=>{const{allRoutes:e}=Ee.useMenu();return e?t.jsxs(ns,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx(ss,{path:i,component:n,exact:!s},i)),t.jsx(os,{exact:!0,to:Bi})]}):null},$0=se.memo(S0),P0=f.div`
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
`,O0=()=>{const{open:e,content:i,position:n}=Md.useContextMenu(),s=l.useRef(null);return ot(s,()=>be.close()),t.jsx(Xt,{isOpen:e,children:t.jsx(P0,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},Cr=200,A0=5e3,R0=()=>{const{visibleNotifications:e}=we.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{Ve.clearVisibleById(a)},Cr)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??A0))},[e]),{handleClose:o,closing:i}},N0=f.div`
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
`,C0=f.div`
    border-radius: var(--brLight);
    background: var(--schedule);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${Cr/1e3}s forwards;

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
`;f.div`
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
`;const I0=()=>{const{visibleNotifications:e}=we.useLkNotifications(),{closing:i,handleClose:n}=R0();return t.jsx(N0,{children:e.map(s=>t.jsx(C0,{onClick:n(s.id),open:i!==s.id,children:t.jsx(Js,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},Mn=f.div`
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
    animation: ${({loading:e})=>!e&&"load_finished 1.2s forwards ease-in-out reverse"};
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
        animation: ${({loading:e})=>!e&&"logo 0.7s forwards ease-in-out"};
        animation-delay: ${({loading:e})=>e?"0s":"1s"};
        width: 100px;
    }
`,L0=({loading:e})=>{const{data:{user:i},error:n}=ne.useUser(),s=i?me(i==null?void 0:i.fullName):w.blue.main,o=()=>Lm.getUserFx(JSON.parse(localStorage.getItem("token")??""));return n?t.jsx(Mn,{loading:!0,color:s,children:t.jsx(ce,{text:"Нет подключения к интернету",children:t.jsx(j,{onClick:o,text:"Попробовать снова",icon:t.jsx(Wn,{})})})}):t.jsxs(Mn,{color:s,loading:e,children:[t.jsx(qt,{short:!0,width:"100px"}),e&&t.jsx(Le,{})]})},D0=f.div`
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
`,z0=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=zi.useStory();return t.jsx(D0,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():Fe.changeCurrentPage({value:o+1})})})},M0=f(At)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,F0=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=zi.useStory();return t.jsxs(M0,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(z0,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(jl,{}):t.jsx(wl,{}),t.jsx(j,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx($e,{}),onClick:n})]})},B0=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,U0=f(Pe)`
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
`,H0=f.div`
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
    transform: ${({align:e})=>B0(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,W0=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:d,link:c,imageAlign:p,imageSize:u={width:"auto",height:"100%"},textAlign:x="left"})=>{const m=St();return t.jsxs(U0,{imageAlign:p,onClick:()=>d(h=>!h),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx(Es,{src:n,loading:!1,width:u.width,height:u.height}),t.jsxs(H0,{imageAlign:p,onClick:()=>d(h=>!h),background:e,align:i,color:s,children:[t.jsx(K,{size:2,align:x,children:o}),t.jsx(ee,{fontSize:"1.1em",align:x,children:a}),!!(c!=null&&c.text)&&t.jsx(j,{onClick:()=>{m.push(c.to),Fe.close()},text:c.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},V0=f.div`
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
`,Fn=f.div`
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
`,G0=()=>{const{pages:e,isOpen:i,currentPage:n}=zi.useStory(),s=l.useRef(null);ot(s,()=>Fe.close());const[o,a]=l.useState(!0),r=e[n];return t.jsx(Xt,{isOpen:i,children:t.jsx(V0,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(F0,{pages:e.length,onClose:()=>Fe.close(),playing:o}),t.jsx(Fn,{left:"15px",onClick:()=>{n!==0&&Fe.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx(Et,{})}),t.jsx(W0,{setPlaying:a,currentPage:n,...r}),t.jsx(Fn,{right:"15px",onClick:()=>{n!==e.length-1?Fe.changeCurrentPage({value:n+1}):Fe.close(),a(!0)},children:t.jsx(nt,{})})]})})})},Y0=()=>{const{data:{user:e}}=ne.useUser(),{notifications:i,loading:n,loaded:s}=we.useLkNotifications(),{settings:o}=st.useSettings(),a=l.useMemo(()=>o==null?void 0:o["settings-notifications"].property,[o==null?void 0:o["settings-notifications"]]);l.useEffect(()=>{e&&a&&a.all!==!1&&!s&&!n&&Ve.initialize({settings:a})},[e,a,n,s]),l.useEffect(()=>{ve.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},q0=()=>{const{data:{user:e}}=ne.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date(Ol);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},K0=()=>{const{data:{user:e}}=ne.useUser(),{currentPage:i,exactCurrentPage:n}=Zo(),{open:s}=G(),o=q0();return l.useEffect(()=>{e&&Ml.getLocalSettingsFx(e.id)},[e]),Y0(),Gt(),l.useEffect(()=>{o&&o&&s(t.jsx(uo,{}),"Что нового")},[o]),{currentPage:i,exactCurrentPage:n}},X0=f.div`
    display: flex;
    background: var(--theme);
    height: 100dvh;
`,J0=f.div`
    width: 100%;
    height: 100%;
    z-index: 3;
    background: var(--theme);
    overflow: hidden;
    position: relative;

    @media (max-width: 1000px) {
        font-size: 0.9em;
    }
`,Q0=f.div`
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
`,Z0=()=>{var d;const{data:{user:e}}=ne.useUser(),{currentPage:i,exactCurrentPage:n}=K0(),[s,o]=l.useState(!1),a=l.useRef(null),r=c=>{o(c.currentTarget.scrollTop>0)};return t.jsxs(X0,{children:[t.jsx(L0,{loading:!e}),t.jsx(G0,{}),t.jsx(Xu,{}),t.jsxs(J0,{children:[t.jsx(Lu,{headerVisible:s,currentPagePair:{currentPage:i,exactCurrentPage:n}}),t.jsx(Q0,{ref:a,onScroll:r,withHeader:!((d=n??i)!=null&&d.withoutHeader),children:t.jsx(l.Suspense,{fallback:null,children:t.jsx($0,{})})}),t.jsx(Wh,{})]}),t.jsx(nh,{}),t.jsx(Qu,{}),t.jsx(oh,{}),t.jsx(O0,{}),t.jsx(Jh,{}),t.jsx(I0,{})]})},eb=()=>{const{data:{isAuthenticated:e,user:i}}=ne.useUser(),{data:n}=hi.selectors.useData(),{settings:s}=st.useSettings(),[o,a]=l.useState(e);return l.useEffect(()=>(e?(setTimeout(()=>{a(!0)},1e3),hi.effects.getFx(),tt.getUserDataApplicationsFx(),tt.getWorkerPosts()):a(!1),()=>{a(!1)}),[e]),l.useEffect(()=>{i&&s&&ve.defineMenu({user:i,adminLinks:n,homeRoutes:s["settings-home-page"].property.pages})},[i,n,s]),e&&o?t.jsx(Z0,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(ns,{children:[E0.map(({path:r,Component:d},c)=>t.jsx(ss,{path:r,component:d,exact:!0},c)),t.jsx(os,{exact:!0,to:br})]})})},tb=f.div`
    background: var(--theme);
    overflow-y: auto;
    height: 100vh;
`,ib=()=>(Gt(),t.jsx(Fl,{children:t.jsx(kl,{basename:"/",children:t.jsx(tb,{children:t.jsx(eb,{})})})})),nb=Tl`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Montserrat", sans-serif;
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
`;El.render(t.jsxs(se.StrictMode,{children:[t.jsx(nb,{}),t.jsx(ib,{})]}),document.getElementById("root"));export{L as $,qf as A,Pe as B,Ce as C,Up as D,ce as E,Ad as F,Nu as G,Li as H,Df as I,mc as J,Me as K,Ps as L,re as M,bc as N,Vs as O,ea as P,Tp as Q,Gp as R,Ss as S,K as T,Ee as U,kp as V,$s as W,Ar as X,k0 as Y,Rb as Z,Ot as _,V as a,Ed as a$,Yf as a0,Vf as a1,Qi as a2,Sb as a3,Qx as a4,Ve as a5,Jx as a6,R as a7,Te as a8,Tb as a9,be as aA,Kt as aB,ot as aC,Wc as aD,nc as aE,ca as aF,$i as aG,Dh as aH,Oc as aI,ye as aJ,nm as aK,fm as aL,st as aM,Ci as aN,Pr as aO,mu as aP,me as aQ,Zs as aR,$u as aS,mm as aT,sm as aU,lm as aV,rt as aW,ob as aX,Nb as aY,yr as aZ,xm as a_,j as aa,G as ab,tt as ac,Ob as ad,Ms as ae,Ds as af,kb as ag,po as ah,Bl as ai,Yt as aj,$b as ak,Yl as al,T0 as am,cp as an,fb as ao,up as ap,pp as aq,yc as ar,wc as as,wd as at,_h as au,oe as av,Cb as aw,Wt as ax,Rt as ay,D as az,$m as b,$h as b$,gb as b0,Es as b1,P as b2,ai as b3,ub as b4,zs as b5,it as b6,Ie as b7,xb as b8,dh as b9,uh as bA,Ks as bB,lb as bC,bo as bD,cb as bE,Ib as bF,At as bG,tn as bH,Tu as bI,hm as bJ,Lm as bK,Nt as bL,hb as bM,ym as bN,wm as bO,Sc as bP,rb as bQ,ab as bR,$c as bS,Cd as bT,Eb as bU,Kf as bV,Ct as bW,Hf as bX,Wf as bY,Uf as bZ,Bf as b_,_b as ba,yb as bb,wb as bc,vb as bd,bb as be,at as bf,mb as bg,ae as bh,yu as bi,io as bj,b0 as bk,je as bl,Si as bm,eg as bn,Ws as bo,Gt as bp,as as bq,Vt as br,ip as bs,tp as bt,pb as bu,db as bv,Bs as bw,Fs as bx,$t as by,ju as bz,Uc as c,rm as c0,hi as d,Pm as e,w as f,he as g,Mi as h,jb as i,ue as j,Pb as k,We as l,ra as m,M as n,zc as o,wf as p,Le as q,Xe as r,Sm as s,Pt as t,ee as u,wt as v,pe as w,Ab as x,Hs as y,ne as z};
