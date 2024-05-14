import{p as E,s as u,r as l,j as t,F as ot,a as Ni,b as Ft,c as En,H as us,d as kt,e as F,S as at,x as S,h as V,u as ce,f as vt,o as mi,g as iu,i as Po,k as $o,l as He,m as nu,v as La,n as K,q as rt,t as su,w as Ra,I as ou,y as au,z as ru,A as lu,B as As,C as Pn,D as I,E as cu,G as ii,J as lt,R as pe,K as Mt,L as Bi,M as ct,N as as,O as du,P as pu,Q as uu,T as hu,U as za,V as Fa,W as Ma,X as Ze,Y as Ao,Z as xu,_ as gu,$ as fu,a0 as mu,a1 as $n,a2 as dt,a3 as Yt,a4 as Ba,a5 as xn,a6 as bu,a7 as Z,a8 as vu,a9 as jt,aa as Ha,ab as Wa,ac as Ns,ad as yu,ae as wu,af as ju,ag as _u,ah as ku,ai as Ua,aj as St,ak as Ga,al as Va,am as Tt,an as An,ao as Ds,ap as gn,aq as nt,ar as ni,as as Su,at as Tu,au as Cu,av as Eu,aw as Pu,ax as $u,ay as J,az as Au,aA as Ya,aB as Qa,aC as Nu,aD as Du,aE as Di,aF as Os,aG as qa,aH as No,aI as Ou,aJ as Iu,aK as Lu,aL as ji,aM as Ru,aN as Xa,aO as ne,aP as Ka,aQ as Ja,aR as Do,aS as Za,aT as zu,aU as Fu,aV as Mu,aW as Nn,aX as er,aY as Is,aZ as tr,a_ as cn,a$ as Bu,b0 as Hu,b1 as Wu,b2 as Uu,b3 as Gu,b4 as Vu,b5 as Yu,b6 as Qu,b7 as qu,b8 as Xu,b9 as Ku,ba as Ju,bb as Zu,bc as eh,bd as th,be as ih,bf as nh,bg as sh,bh as oh,bi as ah,bj as rh,bk as lh,bl as ch,bm as dh,bn as ph,bo as uh,bp as hh,bq as xh,br as gh,bs as Ls,bt as ir,bu as fh,bv as mh,bw as bh,bx as vh,by as yh,bz as wh,bA as jh,bB as _h,bC as kh,bD as Rs,bE as Sh,bF as zs,bG as hs,bH as Th,bI as Ch,bJ as Eh,bK as Ph,bL as $h,bM as Ah,bN as Nh,bO as nr,bP as sr,bQ as Dh,bR as Oh,bS as Fs,bT as fn,bU as Ih,bV as or,bW as Lh,bX as Rh,bY as zh,bZ as Fh,b_ as Mh,b$ as Bh,c0 as Hh,c1 as Wh,c2 as Uh}from"./vendor-ab783af7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Gh=E(),Vh=u.div`
    display: grid;
    grid-template-rows: ${({isOpen:e})=>e?"1fr":"0fr"};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({bottomMargin:e,isOpen:i})=>e&&i?"12px":"0"};
`,Yh=u.div``,Qh=u.div`
    min-height: 0;
    min-width: 0;
    transform: scale(${({isOpen:e})=>e?"1":"0.98"});
    transition: 0.2s transform;
    opacity: ${({isOpen:e})=>e?"1":"0"};
`,ar=({title:e,children:i,bottomMargin:n,forceState:s=!1})=>{const[o,a]=l.useState(s);l.useEffect(()=>{a(s)},[s]);const r=()=>a(c=>!c);return t.jsxs(Vh,{isOpen:o,bottomMargin:n,onClick:r,children:[e&&t.jsx(Yh,{children:e}),t.jsx(Qh,{isOpen:o,children:i})]})},me=u.div`
    width: ${({direction:e="horizontal",width:i})=>e==="horizontal"?i??"90%":"0.5px"};
    height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    min-height: ${({direction:e="horizontal",width:i})=>e==="horizontal"?"0.5px":i??"90%"};
    background: var(--almostTransparentOpposite);
    margin: ${({margin:e})=>e??"5px auto"};
`,qh="/assets/sad-emoji-0c60bf90.gif",te=u.span`
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
`,Xh=u.div`
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
`;function ge({text:e,image:i,size:n,children:s}){return t.jsxs(Xh,{size:n,children:[t.jsx("div",{className:"image",children:typeof i=="string"||!i?t.jsx("img",{src:i||qh,alt:"груфтим("}):i}),t.jsx(te,{fontSize:"1rem",align:"center",maxWidth:"500px",width:"auto",children:e}),s&&t.jsx("div",{className:"error-content",children:s})]})}const P=u.div`
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
`;var ye=(e=>(e.Dark="dark",e.Light="light",e))(ye||{});const Kh="Не удалось загрузить информацию. Проверьте соединение и попробуйте ещё раз",rr=8,Ms=["home","settings","all"],lr=["all"],Bs=["home","settings","all"],cr="https://lk.eseur.ru/signup",Jh="https://mospolytech.ru/obuchauschimsya/izmenenie-uslovij-obucheniya-i-vosstanovlenie",j={green:{dark3:"#106c3f",dark2:"#188851",dark1:"#27b56e",main:"#3cd288",light1:"#49e698",light2:"#58f3a6",light3:"#a1ffd1",transparent1:"#a7ffd38a",transparent2:"#a7ffd35c",transparent3:"#4ad18e1f"},lightGreen:{dark3:"#166363",dark2:"#207878",dark1:"#2e9b9b",main:"#40c5c5",light1:"#66dfdf",light2:"#8bf1f1",light3:"#a3fbfb",transparent1:"#98e8e899",transparent2:"#a3fbfb59",transparent3:"#a3fbfb29"},blue:{dark3:"#3d4695",dark2:"#3742b1",dark1:"#4552c9",main:"#5f6dec",light1:"#7c88f5",light2:"#99a3ff",light3:"#bac0ff",transparent1:"#bac0ffa3",transparent2:"#bac0ff42",transparent3:"#bac0ff17"},lightBlue:{dark3:"#5278cd",dark2:"#668de4",dark1:"#789ff6",main:"#9cbbff",light1:"#b9cfff",light2:"#ceddff",light3:"#e0e9ff",transparent1:"#e0e9ffba",transparent2:"#e0e9ff6b",transparent3:"#e0e9ff29"},darkBlue:{dark3:"#211d69",dark2:"#272279",dark1:"#2e2891",main:"#3831a5",light1:"#443cc5",light2:"#5850d4",light3:"#beb9ff",transparent1:"#7f77ff78",transparent2:"#7f77ff78",transparent3:"#7f77ff12"},purple:{dark3:"#5c3381",dark2:"#7434af",dark1:"#8b4ac7",main:"#a85fec",light1:"#bd7cfa",light2:"#ce99ff",light3:"#dcb7ff",transparent1:"#dcb7ff99",transparent2:"#dcb7ff5c",transparent3:"#dcb7ff2b"},pink:{dark3:"#8d4370",dark2:"#a62b77",dark1:"#c34191",main:"#ec5fb6",light1:"#fd84cf",light2:"#ffa8de",light3:"#ffbce5",transparent1:"#ffbce59e",transparent2:"#ffbce561",transparent3:"#ffbce530"},red:{dark3:"#8f454b",dark2:"#bf3641",dark1:"#cf4b56",main:"#ec5f6b",light1:"#ff7b86",light2:"#ff98a1",light3:"#ffbbc1",transparent1:"#ffbbc194",transparent2:"#ffbbc159",transparent3:"#ffbbc133"},orange:{dark3:"#815b32",dark2:"#a76821",dark1:"#ca8231",main:"#ee9e44",light1:"#fcb566",light2:"#ffc686",light3:"#ffd7ab",transparent1:"#ffd7ab99",transparent2:"#ffd7ab54",transparent3:"#ffd7ab4a"},grey:{dark3:"#353535",dark2:"#484848",dark1:"#646464",main:"#797979",light1:"#979797",light2:"#bdbdbd",light3:"#d5d5d5",transparent1:"#d5d5d5a3",transparent2:"#d5d5d559",transparent3:"#d5d5d521"},white:{dark3:"",dark2:"",dark1:"",main:"#fff",light1:"",light2:"",light3:"",transparent1:"",transparent2:"#80808014",transparent3:"#ffffff17"}},Zt={monday:{full:"Понедельник",short:"Пн"},tuesday:{full:"Вторник",short:"Вт"},wednesday:{full:"Среда",short:"Ср"},thursday:{full:"Четверг",short:"Чт"},friday:{full:"Пятница",short:"Пт"},saturday:{full:"Суббота",short:"Сб"}},xE={Зачтено:j.green,"Не зачтено":j.red,Отлично:j.green,Хорошо:j.blue,Удовлетворительно:j.orange,Неудовлетворительно:j.red,"Не явился":j.red,default:j.red},gE={Зачтено:5,"Не зачтено":2,Отлично:5,Хорошо:4,Удовлетворительно:3,"Не явился":2,Неудовлетворительно:2},R="https://e.mospolytech.ru/old",Zh="2023-10-03T10:43:43",Bt={info:{icon:ot,color:"blue",title:"Информация"},alert:{icon:Ni,color:"orange",title:"Внимание!"},failure:{icon:Ft,color:"red",title:"Ошибка"},success:{icon:En,color:"green",title:"Успешно"},tip:{icon:us,color:"grey",title:"Подсказка"},hint:{icon:us,color:"white",title:"Подсказка"},hrFailure:{icon:Ft,color:"red",title:"Ошибка"}},ex={"-":"red",А:"lightGreen",Б:"purple",В:"green",Г:"pink",Д:"blue",Е:"blue",Ё:"red",Ж:"blue",З:"lightGreen",И:"pink",Й:"lightBlue",К:"lightGreen",Л:"green",М:"red",Н:"green",О:"purple",П:"blue",Р:"lightBlue",С:"orange",Т:"pink",У:"lightGreen",Ф:"blue",Х:"green",Ч:"purple",Ц:"green",Ш:"red",Щ:"red",Ъ:"purple",Ы:"green",Ь:"blue",Э:"red",Ю:"orange",Я:"green",A:"lightGreen",B:"purple",C:"green",D:"pink",E:"purple",F:"blue",G:"red",H:"blue",I:"lightGreen",J:"pink",K:"lightGreen",L:"green",M:"red",N:"green",O:"purple",P:"blue",Q:"lightBlue",R:"orange",S:"blue",T:"lightGreen",U:"blue",V:"green",W:"purple",X:"red",Y:"red",Z:"purple"},tx=["image/jpeg","image/jpg","image/png","application/pdf"],ix=10,dr="(max-width: 766px)",nx="(min-width: 767px)",pr="(max-width: 1000px)",ur="(max-width: 1380px)",hr="(min-width: 1381px)",W={isMobile:`@media ${dr}`,isNotMobile:`@media ${nx}`,isTablet:`@media ${pr}`,isSmallTesktop:`@media ${ur}`,isMiddleTesktop:`@media ${hr}`},sx=[{query:dr,title:"isMobile",value:"mobile"},{query:pr,title:"isTablet",value:"tablet"},{query:ur,title:"isSmallDesktop",value:"smallDesktop"},{query:hr,title:"isMiddleDesktop",value:"middleDesktop"}],Hs={minute:6e4,ten_seconds:1e4,thirty_seconds:3e4},D=!window.location.port||window.location.port==="80"||window.location.port==="4001"||window.location.port==="4002";console.log("Running on production",D);const ox=u.button`
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

    ${W.isTablet} {
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
`;var H=(e=>(e.OldSettings="NewSettings",e.Settings="SettingsV2",e.HomeRoutes="HomeRoutes",e.Token="Token",e.JWT="JWT",e.JWTRefresh="JWTRefresh",e.Version="Version",e.SavePassword="SavePassword",e.SearchHistory="SearchHistory",e))(H||{});const pt=()=>localStorage.getItem(H.JWT)||sessionStorage.getItem(H.JWT),di=e=>{const n=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(window.atob(n).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(s)},ax=()=>JSON.parse(localStorage.getItem(H.SavePassword)??"true"),Oi=e=>async i=>{var s,o,a,r,c,d,p;const n=(i==null?void 0:i.config)??{};if(i.request.status===401||((a=(o=(s=i==null?void 0:i.data)==null?void 0:s.errors)==null?void 0:o[0].extensions)==null?void 0:a.code)==="AUTH_NOT_AUTHENTICATED"||((p=(d=(c=(r=i==null?void 0:i.response)==null?void 0:r.data)==null?void 0:c.errors)==null?void 0:d[0].extensions)==null?void 0:p.code)==="AUTH_NOT_AUTHENTICATED")if(n._retry)Le.logout();else{n._retry=!0;const h=localStorage.getItem(H.JWTRefresh);try{const{accessToken:g,refreshToken:x}=await mx(h??"");return ax()?(localStorage.setItem(H.JWT,g),localStorage.setItem(H.JWTRefresh,x)):(sessionStorage.setItem(H.JWT,g),sessionStorage.setItem(H.JWTRefresh,x)),e(n)}catch{Le.logout()}}return Promise.reject(i)},Ws=e=>(e.headers||(e.headers={}),e.headers.Authorization=`Bearer ${pt()}`,e),rx=`${R}/lk_api.php`,lx="https://api.mospolytech.ru/serviceforfrontpersonnelorders",ee=kt.create({baseURL:rx,withCredentials:!0}),we=kt.create({baseURL:lx});we.interceptors.request.use(Ws);!D&&we.interceptors.response.use(e=>e,Oi(we));function Us(e){return e.isAxiosError}function ie(){return localStorage.getItem(H.Token)??sessionStorage.getItem(H.Token)??""}const cx=({login:e,password:i})=>ee.post("",`ulogin=${encodeURIComponent(e)}&upassword=${encodeURIComponent(i)}`),dx=e=>ee.get(`?getUser&token=${e}`),px=e=>ee.get(`?getADName&fio=${e.fio}&pn=${e.pn}`),Oo=async e=>{const i=new FormData;return i.set("avatar",e??""),i.set("token",ie()),ee.post("?changeAvatar=1",i,{headers:{"Content-Type":"multipart/form-data"}})},ux=async(e,i)=>{const n=new FormData;return n.set("old_pass",e),n.set("new_pass",i),ee.post(`?changeADPass=1&token=${ie()}`,n,{headers:{"Content-Type":"multipart/form-data"}})},hx=async e=>{const i=new FormData;return i.set("email",e),i.set("token",ie()),ee.post("?changeEmail=1",i,{headers:{"Content-Type":"multipart/form-data"}})},xx=async e=>{const i=new FormData;return i.set("phone",e),i.set("token",ie()),ee.post("?changePhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},gx=async e=>{var n,s;const i=new FormData;return i.set("token",ie()),i.set("phone",e.phone_staff||""),i.set("allow_mobphone_in",((n=e.allow_mobphone_in)==null?void 0:n.toString())??"false"),i.set("allow_mobphone_out",((s=e.allow_mobphone_out)==null?void 0:s.toString())??"false"),ee.post("?changeStaffPhone=1",i,{headers:{"Content-Type":"multipart/form-data"}})},fx=async e=>{const i=new FormData;return i.set("token",ie()),i.set("guid",e.guid_staff),i.set("room",e.room),i.set("address",e.address),ee.post("?changeStaffAddress=1",i,{headers:{"Content-Type":"multipart/form-data"}})},mx=async e=>{const{data:i}=await kt.post("https://api.mospolytech.ru/frontendtokenservice/Token/Refresh",{refreshToken:e});return i},bx=e=>ee.get(`?getSchedule&group=${e}&token=${ie()}`),vx=e=>ee.get(`?getScheduleTeacher&fio=${e}&token=${ie()}`),yx=()=>ee.get(`?getSchedule&session=1&token=${ie()}`),wx=e=>ee.get(`?getScheduleTeacher&fio=${e}&session=1&token=${ie()}`),jx=()=>ee.get(`?getPayments&token=${ie()}`),_x=e=>ee.get(`?signAgreement=${e}&token=${ie()}`),kx=e=>ee.get(`?signContract=${e}&token=${ie()}`),Sx=async()=>(await ee.get(`?getPEPStatus&token=${ie()}`)).data,Tx=async()=>(await ee.get(`?setPEPAccept&token=${ie()}`)).data,Cx=()=>ee.get(`?getAppRequests&token=${ie()}`),xr=()=>ee.get(`?getAppData&token=${ie()}`),Ex=async()=>await we.get(`/Dismissal.GetAllHistory?employeeGuid=${di(pt()??"").IndividualGuid}`),Px=async()=>{const{data:e}=await we.get("/AnotherPlaceWork.GetDivisions");return e.divisions},$x=async e=>{const{formId:i,args:n}=e,s=new FormData;s.set("token",ie()),s.set("saveAppData",i);for(const[a,r]of Object.entries(n))s.set(a,r);const{data:o}=await ee.post(`?saveAppData=${i}`,s,{headers:{"Content-Type":"multipart/form-data"}});return o},Ax=()=>we.get(`?getAppRequests&token=${ie()}`),Nx=()=>we.get(`?getAppData&token=${ie()}`),Dx=e=>we.post("Dismissal.Post",e),Ox=async()=>(await ee.get(`?getAdminLinks&token=${ie()}`)).data,Ix=()=>ee.get(`?getPhoneBookDivisions&token=${ie()}`),gr=(e,i,n,s)=>ee.get(`?getStaff&search=${e}&division=${i}&page=${n}&perpage=${s}&token=${ie()}`),Gs=e=>ee.get(`?getDivs=${e}&page=1&token=${ie()}`),Lx=(e,i,n,s)=>ee.get(`?getStudents&search=${e}&group=${i}&page=${n}&perpage=${s}&token=${ie()}`),Rx=async e=>await ee.get(`?getGroups=${e}&perpage=30&page=1&token=${ie()}`),zx=()=>ee.get(`?getNotifications&token=${ie()}`),Fx=e=>ee.get(`?clearNotificationById=${e}&token=${ie()}`),Mx=()=>ee.get(`?clearAllNotifications&token=${ie()}`);function Bx({name:e,surname:i,patronymic:n}){return`${i} ${e} ${n}`}const Hx=()=>{localStorage.removeItem(H.Token),localStorage.removeItem(H.JWT),localStorage.removeItem(H.JWTRefresh),sessionStorage.removeItem(H.Token),sessionStorage.removeItem(H.JWT),localStorage.removeItem(H.JWTRefresh)},yt=localStorage.getItem(H.Token)??"",wt=()=>JSON.parse(localStorage.getItem(H.SavePassword)??"true"),Dn=F(async e=>{try{const{data:i}=await cx(e),n=new FormData;n.set("ulogin",e.login),n.set("upassword",e.password),n.set("auth_action","userlogin");try{await kt.post("/old",n)}catch{}return Hx(),wt()?(localStorage.setItem(H.Token,i.token),localStorage.setItem(H.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(H.JWTRefresh,i.jwt_refresh??"")):(sessionStorage.setItem(H.Token,i.token),sessionStorage.setItem(H.JWT,(i==null?void 0:i.jwt)??""),localStorage.setItem(H.JWTRefresh,i.jwt_refresh??"")),i}catch{throw new Error(navigator.onLine?"Неверный логин или пароль":"Потеряно соединение с интернетом")}}),Lt=F(async e=>{try{const[i,n]=await Promise.all([dx(e.token),xr()]),s=i.data.user,{name:o,surname:a,patronymic:r}=s;return{currentUser:{...s,guid:n.data.guid_person,fullName:Bx({name:o,surname:a,patronymic:r})},isAuthenticated:!!e,error:null,savePassword:wt()}}catch(i){throw console.log(i),new Error(`Возникла какая-то ошибка: ${i.message}`)}}),xs=F(async e=>{try{return(await px(e)).data}catch(i){throw console.log(i),new Error("Возникла какая-то ошибка")}}),fr=F(()=>{wt()?(localStorage.removeItem(H.Token),localStorage.removeItem(H.JWT),localStorage.removeItem(H.JWTRefresh)):(sessionStorage.removeItem(H.Token),sessionStorage.removeItem(H.JWT),sessionStorage.removeItem(H.JWTRefresh))}),mr=e=>{const i=localStorage.getItem(H.SavePassword),n=e??JSON.parse(i??"true");return localStorage.setItem(H.SavePassword,n.toString()),n},br=E(),Vs=E(),vr=E(),yr=E(),wr=E(),jr=E();at({from:br,to:Dn});S({clock:Dn.doneData,target:Lt});at({from:Vs,to:fr});yt&&wt()?Lt({token:yt,jwt:localStorage.getItem(H.JWT)}):fr();const Wx={currentUser:null,error:null,isAuthenticated:!!(yt!=null&&yt.length),savePassword:wt(),loginEuz:""};mr();const Ys=V(Wx).on(Lt,e=>({...e,error:null})).on(Lt.doneData,(e,i)=>i).on(Lt.failData,(e,i)=>({error:i.message,currentUser:null,isAuthenticated:!!(yt!=null&&yt.length),savePassword:wt()})).on(Dn.failData,(e,i)=>({error:i.message,isAuthenticated:null,currentUser:null,savePassword:wt()})).on(Vs,()=>({error:"",isAuthenticated:null,currentUser:null,savePassword:wt()})).on(jr,(e,{savePassword:i})=>({...e,savePassword:mr(i)})).on(xs,e=>({...e,error:null})).on(xs.doneData,(e,i)=>({...e,loginEuz:i})).on(Lt.failData,(e,i)=>({...e,error:i.message})).on(yr,(e,{key:i,value:n})=>({...e,currentUser:e.currentUser?{...e.currentUser,[i]:n}:null})).on(wr,(e,i)=>({...e,currentUser:e.currentUser?{...e.currentUser,...i}:null})).on(vr,e=>({...e,currentUser:null})),Ux=Ys.map(({currentUser:e})=>(e==null?void 0:e.guid)??null),be={useUser:()=>{const{currentUser:e,error:i,isAuthenticated:n,savePassword:s,loginEuz:o}=ce(Ys);return{data:{user:e,isAuthenticated:n,savePassword:s,loginEuz:o},loading:ce(Dn.pending),error:i}}},Le={login:br,logout:Vs,changeSavePassword:jr,clear:vr,update:yr,updateBulk:wr},Gx={getUserFx:Lt,getLoginEuzFx:xs},ae={user:Ys,userGuid:Ux},Io={message:"",type:"success",isOpen:!1,time:2e3},Vx=()=>vt(Yx),_r=E(),kr=E(),Yx=V(Io).on(_r,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(kr,(e,{isOpen:i})=>({...e,isOpen:i})).on(ae.userGuid,()=>({...Io})),Qx={usePopUpMessage:Vx},G={evokePopUpMessage:_r,openPopUpMessage:kr},Sr="/assets/loading-c8041cd3.gif",qx=()=>t.jsx(Xx,{src:Sr,alt:"loading",className:"loading-circle"}),Xx=u.img`
    position: relative;
    transform: none;
    left: auto;
    top: auto;
    width: 30px;
    height: 30px;
`;function y(e){const{icon:i,text:n,onClick:s,width:o,minWidth:a,background:r,textColor:c,hoverBackground:d,align:p,isChosen:h,padding:g,shrinkTextInMobile:x,fixedInMobile:f,direction:m="horizontal",isActive:b=!0,height:v,notActiveClickMessage:T,flipped:k,loading:_,...C}=e,O=N=>{b?s==null||s(N):T&&G.evokePopUpMessage({type:"failure",message:T,time:1e4})};return t.jsx(ox,{text:!!n,onClick:O,isChosen:h,width:o,minWidth:a,background:r,padding:g,textColor:c,shrinkTextInMobile:x,hoverBackground:d,align:p,direction:m,isActive:_?!1:b,fixedInMobile:f,height:v,flipped:k,...C,children:_?t.jsx(qx,{}):t.jsxs(t.Fragment,{children:[!!i&&t.jsx("div",{className:"icon",children:i}),t.jsx("span",{className:"text",children:n})]})})}const gs=e=>{switch(e){case"center":return"center";case"right":return"flex-end";case"evenly":return"space-evenly"}return"flex-start"},Lo=e=>{switch(e){case"center":return"center";case"bottom":return"flex-end";case"space-between":return"space-between"}return"flex-start"},Kx=u.div`
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
`,Jx=["wrap","horizontalAlign","verticalAlign","innerPadding","scroll","wrapOnMobile"],On=u.div.withConfig({shouldForwardProp:e=>!Jx.includes(e)})`
    display: flex;
    flex-direction: ${({direction:e})=>(e??"vertical")==="vertical"&&"column"};
    max-height: 100%;
    align-items: center;
    height: ${({height:e})=>e??"fit-content"};
    justify-content: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?Lo(n):gs(i)};
    align-items: ${({direction:e,horizontalAlign:i,verticalAlign:n})=>(e??"vertical")==="vertical"?gs(i):Lo(n)};
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
`,Zx=u.div`
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
`;function q({shape:e,size:i,margin:n="10px 0",pulse:s=!0}){return t.jsx(Zx,{pulse:s,size:i,shape:e,margin:n})}const eg=u(On)`
    height: 100%;
`,tg=({direction:e,shapes:i,horizontalAlign:n,verticalAlign:s})=>t.jsx(eg,{direction:e,horizontalAlign:n,verticalAlign:s,children:i.map((o,a)=>l.createElement(q,{...o,key:a}))}),Nt=e=>({display:"flex",alignItems:"center",justifyContent:"center",width:e});function ig({size:e,children:i,width:n}){switch(e){case 1:return t.jsx("h1",{className:"title",style:Nt(n),children:i});case 2:return t.jsx("h2",{className:"title",style:Nt(n),children:i});case 3:return t.jsx("h3",{className:"title",style:Nt(n),children:i});case 4:return t.jsx("h4",{className:"title",style:Nt(n),children:i});case 5:return t.jsx("h5",{className:"title",style:Nt(n),children:i});case 6:return t.jsx("h6",{className:"title",style:Nt(n),children:i});default:return t.jsx("h1",{className:"title",style:Nt(n),children:i})}}const ng=u.div`
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
`,sg=u.span`
    color: var(--red);
    margin-right: 5px;
`,og=u.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({width:e})=>e};
`;function z(e){const{icon:i,iconColor:n,children:s,size:o=1,required:a,width:r,style:c,align:d="center",bottomGap:p=!1,visible:h=!0}=e;return h?t.jsxs(ng,{style:c,size:o,className:"title-wrapper",align:d,bottomGap:p,iconColor:n,children:[i,t.jsxs(ig,{size:o,width:r,children:[a&&t.jsx(sg,{children:"*"}),t.jsx(og,{width:r,children:s})]})]}):null}const ag=(e,i,n)=>n?"#fff":e?j[Bt[i].color].dark3:j[Bt[i].color].light3,rg=u.div`
    width: ${({width:e})=>e??"100%"};
    max-width: ${({maxWidth:e})=>e??"none"};
    color: ${({type:e,isLightTheme:i,solidBackground:n})=>ag(i,e,n)};
    background: ${({type:e,solidBackground:i})=>j[Bt[e].color][i?"main":"transparent3"]};
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
        color: ${({type:e,isLightTheme:i})=>j[Bt[e].color][i?"main":"light2"]};
    }
`,lg=e=>({appearance:{theme:window.matchMedia("(prefers-color-scheme: dark)").matches?ye.Dark:ye.Light},customizeMenu:{pages:e?Bs:Ms},homePage:{pages:["settings","profile","chat","schedule","payments","project-activity","all-students"],hasSchedule:!0,hasPayment:!0,hasNews:!0},notifications:{all:!0,messages:!0,applications:!0,doclist:!0,newVersion:!0,news:!0,schedule:!0},syncAcrossAllDevices:!1}),Tr=e=>`${H.Settings}-${e}`,cg="http://docker.mospolytech.ru:3992/api/config",ei=kt.create({baseURL:cg});ei.interceptors.request.use(Ws);ei.interceptors.response.use(async e=>{var i,n,s,o;return((o=(s=(n=(i=e==null?void 0:e.data)==null?void 0:i.errors)==null?void 0:n[0])==null?void 0:s.extensions)==null?void 0:o.code)==="AUTH_NOT_AUTHENTICATED"?await Oi(ei)(e):e},Oi(ei));const dg=mi({appearance:mi({theme:iu([ye.Light,ye.Dark])}),customizeMenu:mi({pages:Po($o())}),homePage:mi({pages:Po($o()),hasSchedule:He(),hasPayment:He(),hasNews:He()}),notifications:mi({all:He(),messages:He(),newVersion:He(),schedule:He(),news:He(),applications:He(),doclist:He()}),syncAcrossAllDevices:He()}),pg=async()=>{const{data:e}=await ei.get("",{signal:AbortSignal.timeout(1e3)});return dg.parse(e)},ug=async e=>{const{data:i}=await ei.post("",e);return i},In=nu({handler:pg});S({clock:ae.user,filter:({currentUser:e})=>!!e,target:In.start});const Qs=E(),hg=F(({settings:e,userId:i})=>{localStorage.setItem(Tr(i),JSON.stringify(e))}),Cr=F(e=>ug(e)),Er=La({source:{userStore:ae.user,serverSettingsQueryData:In.$data},effect:({userStore:{currentUser:e},serverSettingsQueryData:i})=>{var r;const n=e==null?void 0:e.guid,s=localStorage.getItem(Tr(n??"")),o=lg((e==null?void 0:e.user_status)==="staff");if(i!=null&&i.syncAcrossAllDevices)return i;if(!s){const c=localStorage.getItem(H.OldSettings);if(!c)return o;const p=JSON.parse(c)[(e==null?void 0:e.id)??""];return p?{homePage:{pages:(p==null?void 0:p["settings-home-page"].property.pages)??o.homePage.pages,hasNews:(p==null?void 0:p["settings-home-page"].property.news)??o.homePage.hasNews,hasSchedule:(p==null?void 0:p["settings-home-page"].property.widgetSchedule)??o.homePage.hasPayment,hasPayment:(p==null?void 0:p["settings-home-page"].property.widgetPayment)??o.homePage.hasPayment},appearance:((r=p==null?void 0:p["settings-appearance"])==null?void 0:r.property)??o.appearance,customizeMenu:(p==null?void 0:p["settings-customize-menu"].property)??o.customizeMenu,notifications:(p==null?void 0:p["settings-notifications"].property)??o.notifications,syncAcrossAllDevices:o.syncAcrossAllDevices}:o}return{...JSON.parse(s),syncAcrossAllDevices:!1}}});S({source:{userStore:ae.user,isServerSettingsLoaded:In.$finished},filter:({userStore:e,isServerSettingsLoaded:i})=>!!(e.currentUser&&i),fn:({userStore:e})=>e,target:Er});const Ht=V(null).on(Er.doneData,(e,i)=>i).reset(ae.userGuid),Pr=Ht.map(e=>e==null?void 0:e.appearance.theme),xg=F(e=>{document.documentElement.setAttribute("data-theme",e)});S({clock:Pr,filter:Boolean,target:xg});S({source:{settings:Ht,userStore:ae.user},filter:({userStore:e,settings:i})=>!!e.currentUser&&!!i,fn:({settings:e,userStore:i})=>{var n;return{settings:e,userId:((n=i.currentUser)==null?void 0:n.guid)??""}},target:hg});S({source:{settings:Ht,userStore:ae.user,isSettingsLoadedFromServer:In.$succeeded},filter:({userStore:e,settings:i,isSettingsLoadedFromServer:n})=>!!(e.currentUser&&(i!=null&&i.syncAcrossAllDevices)&&n),fn:({settings:e})=>e,target:Cr});S({clock:Qs,source:Ht,filter:Boolean,fn:(e,i)=>({...e,...i}),target:Ht});S({clock:Qs,source:Ht,filter:(e,i)=>"syncAcrossAllDevices"in i&&!!e,fn:(e,i)=>({...e,...i}),target:Cr});const de={userSettings:Ht,theme:Pr},Ce={update:Qs},gg=()=>t.jsx(tg,{shapes:[{shape:"rect",size:{width:"200px",height:"13px"},margin:"0"},{shape:"rect",size:{width:"100px",height:"12px"},margin:"5px 0"},{shape:"rect",size:{width:"120px",height:"12px"},margin:"0"}],direction:"vertical",horizontalAlign:"left"});function X({type:e,children:i,icon:n,width:s,maxWidth:o,title:a,onClose:r,padding:c,fontSize:d,gap:p,lineHeight:h,solidBackground:g=!1,align:x="left",visible:f=!0,loading:m=!1}){if(!f)return null;const b=K(de.userSettings);return t.jsxs(rg,{isLightTheme:(b==null?void 0:b.appearance.theme)===ye.Light,className:"message",closable:!!r,type:e,align:x,width:s,maxWidth:o,padding:c,fontSize:d,gap:p,lineHeight:h,solidBackground:g,children:[t.jsx(z,{size:4,align:x,icon:n===null?null:n??Bt[e].icon({}),children:a??Bt[e].title}),r&&t.jsx(y,{onClick:r,icon:t.jsx(rt,{}),className:"close-button"}),i&&t.jsx("div",{className:"info-text",children:i}),m&&t.jsx(gg,{})]})}const fg=u.div`
    max-height: 400px;
    overflow-y: auto;
`,mg=({error:e})=>t.jsx(t.Fragment,{children:t.jsx(ge,{text:e.message,image:t.jsx(su,{}),children:t.jsxs(P,{mw:"500px",d:"column",gap:"16px",children:[t.jsx(me,{}),t.jsx(ar,{title:t.jsx(X,{type:"failure",fontSize:"0.95rem",title:t.jsxs(P,{children:[t.jsx("span",{children:"Суть ошибки"}),t.jsx(Ra,{})]})}),children:t.jsx(X,{type:"failure",fontSize:"0.95rem",title:"",icon:"",children:t.jsx(fg,{children:e.stack})})})]})})}),bg=/Cannot access 'get' before initialization/,vg=/Failed to fetch dynamically imported module/,yg=2,Ro="reloadCount";class $r extends l.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,n){console.error("Uncaught error:",i,n);const s=Number(sessionStorage.getItem("reloadCount"))??0;s<yg&&(i!=null&&i.message)&&(vg.test(i.message)||bg.test(i.message))&&(sessionStorage.setItem(Ro,`${s+1}`),window.location.reload())}render(){return this.state.hasError?t.jsx(mg,{error:this.state.error}):(sessionStorage.setItem(Ro,"0"),this.props.children)}}const Ar=E(),Nr=E(),wg=V(!1).on(Nr,()=>!0).on(Ar,()=>!1),zo={close:Ar,open:Nr},jg={$isModalOpen:wg},qs=l.createContext({isOpen:!1,component:void 0,back:()=>{},close:()=>{},open:()=>{},title:void 0,canBack:!1}),_g=({children:e})=>{const[i,n]=l.useState(!1),[s,o]=l.useState([]),[a,r]=l.useState([]),c=K(jg.$isModalOpen),d=a.length>1,p=l.useCallback(()=>{d&&(a.pop(),s.pop(),r([...a]),o([...s]))},[a,r]),h=l.useCallback((b,v)=>{b&&(i?(r(()=>[...a,b]),o(()=>[...s,v??""])):(r(()=>[b]),o(v?[v]:[])),n(()=>!0),zo.open())},[r,n,a,i]),g=l.useCallback(()=>{n(()=>!1),zo.close()},[r,n]),x=l.useMemo(()=>a[a.length-1],[a]),f=l.useMemo(()=>s[s.length-1],[s]),m=l.useCallback(b=>{b&&r([...a,b])},[]);return l.useEffect(()=>{c!==i&&n(c)},[c]),t.jsx(qs.Provider,{value:{back:p,open:h,close:g,isOpen:i,canBack:d,component:x,title:f,setComponent:m},children:e})},M=()=>{const{open:e,isOpen:i,...n}=l.useContext(qs);return{open:e,isOpen:i,...n}},ut=u.div`
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

    ${W.isMobile} {
        flex-direction: column;
        box-shadow: ${({noAppearanceInMobile:e})=>e&&"none"};
        border-radius: ${({noAppearanceInMobile:e})=>e&&"none"};
        padding: ${({noAppearanceInMobile:e})=>e&&"6px"};
        background: ${({noAppearanceInMobile:e})=>e&&"transparent"};
    }
`,kg=u.img`
    width: 40px;
`;function et(e){return t.jsx(kg,{...e,src:Sr,alt:"loading",className:"loading-circle"})}const Sg="/assets/logo-4d9aa449.png",Tg="/assets/mospolytech-logo-white-b1e4f630.png",Cg=u.div`
    width: ${({width:e})=>e??"100%"};
    height: fit-content;
    display: flex;
    justify-content: center;

    img {
        filter: invert(var(--invert));
        width: 100%;
    }
`;function Ln({width:e,className:i,short:n=!1}){return t.jsx(Cg,{width:e,className:i??"logo",children:t.jsx("img",{src:n?Tg:Sg,alt:"Logo"})})}const Eg=u.img``;function Xs({loading:e,src:i,height:n,width:s,alt:o=""}){return e?t.jsx(q,{shape:"rect",size:{width:s,height:n},margin:"0"}):t.jsx(Eg,{src:i,alt:o,height:n,width:s})}const Pg=u.div`
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
`;function Ks({size:e,color:i}){return t.jsx(Pg,{size:e,color:i?j[i].main:void 0,children:t.jsxs("div",{className:"wrapper",children:[t.jsx("div",{className:"circle-blue",children:t.jsx("div",{className:"circle-white"})}),t.jsx("div",{className:"circle-blue-shadow"}),t.jsx("svg",{className:"check-svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,children:t.jsx("polyline",{className:"check-poly",points:"26 37 34 43 47 27",strokeLinecap:"round"})})]})})}const $g=u.div`
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
`;function Ag(e){const{value:i,setValue:n,width:s,placeholder:o,required:a,title:r,textAreaAppearance:c=!0,isActive:d=!0}=e;return t.jsxs($g,{isActive:d,width:s,textAreaAppearance:c,children:[t.jsx(z,{size:5,required:a,align:"left",bottomGap:"5px",visible:!!r,children:r}),t.jsx("textarea",{onChange:p=>n(p.target.value),placeholder:o,required:a,value:i})]})}const Ng=u.button`
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
`,Me=({text:e,action:i,width:n,height:s,setCompleted:o,background:a,buttonSuccessText:r="Готово",popUpSuccessMessage:c="Успешно",popUpFailureMessage:d="Nope",pulsing:p,isDone:h=!1,isActive:g=!0,isLoading:x=!1,completed:f=!1,repeatable:m=!0,alerts:b=!0})=>{l.useEffect(()=>{f&&b&&(G.evokePopUpMessage({message:c,type:"success"}),m&&setTimeout(()=>{o(!1)},2e3))},[f,o]);const v=()=>{if(g&&!h&&!x)return i();b&&G.evokePopUpMessage({message:d,type:"failure"})};return t.jsx(Ng,{isLoading:x,background:a,className:"submit-button",completed:f,isActive:g&&!h&&!f,onClick:v,isDone:h,width:n,height:s,repeatable:m,tabIndex:g&&!h?0:-1,pulsing:p&&!h,children:t.jsx("div",{className:"inner-button",children:f?t.jsxs("div",{className:"inner-button-success",children:[t.jsx(ou,{})," ",r]}):x?t.jsx(et,{}):t.jsx("div",{className:"inner-button-text",children:e})})})},mn={small:"32px",middle:"36px",big:"44px"},Ke=e=>({size:i})=>e[i],dn=(e,i)=>(i==null?void 0:i.length)===0?null:e.find(n=>n.title===i)??null,Dg=[{id:"0",title:"ул. Большая Семёновская, 38"},{id:"1",title:"ул. Прянишникова, 2А"},{id:"2",title:"ул. Автозаводская, 16"},{id:"3",title:"ул. Павла Корчагина, 22"},{id:"4",title:"ул. Михалковская, 7"},{id:"5",title:"ул. Садовая-Спасская, 6"},{id:"6",title:"ул. Малая Семеновская, 12"},{id:"7",title:"ул. Лефортовский вал, 26"},{id:"8",title:"ул. 1-я Дубровская, 16а"},{id:"9",title:"ул. 7-я Парковая, 9/26"},{id:"10",title:"ул. 800-летия Москвы, 28 корп. 1"},{id:"11",title:"ул. Михалковская, 7, корп. 3"},{id:"12",title:"ул. Бориса Галушкина, 9"},{id:"13",title:"ул. Павла Корчагина, 20А, корп. 3"},{id:"14",title:"Рижский проезд, 15, корп. 1"},{id:"15",title:"Рижский проезд, 15, корп. 2"},{id:"16",title:"1-й Балтийский переулок, 6/21, корп. 3"}],he=[...Dg],fE=(e,i)=>({title:"Актуализируйте контактные данные",data:[{fieldName:"guid_staff",title:"Подразделение/должность",value:i.guid_staff,width:"100",required:!0,type:"text",visible:!1},{fieldName:"",title:`${i.subdivision} (${i.post})`,value:`${i.subdivision} (${i.post})`,width:"100",required:!0,type:"text-header",visible:!0},{fieldName:"site",title:"Адрес рабочего места",type:"select",value:dn(he,e.site),items:he,width:"100",editable:!0,required:!0},{fieldName:"aud_number",title:"Номер кабинета",type:"cabinet",mask:!0,value:e.aud_number,editable:!0,required:!0},{fieldName:"email_staff",title:"Корпоративная электронная почта",type:"email",value:e.email_staff,required:!0},{title:"Показывать рабочий email внутри Личного кабинета",fieldName:"show_email_inner",type:"checkbox",value:e.show_email_inner??!0},{title:"Показывать рабочий email на сайте",fieldName:"show_email_outer",type:"checkbox",value:e.show_email_outer??!0},{title:"Служебный мобильный телефон",type:"tel",value:e==null?void 0:e.tel_mob_staff,fieldName:"tel_mob_staff",mask:!0},{title:"Показывать служебный мобильный телефон внутри Личного кабинета",fieldName:"show_tel_mob_staff_inner",type:"checkbox",value:e.show_tel_mob_staff_inner??!0},{title:"Показывать служебный мобильный телефон на сайте",fieldName:"show_tel_mob_staff_outer",type:"checkbox",value:e.show_tel_mob_staff_outer??!0},{title:"Внутренний телефон",type:"innerPhone",value:e==null?void 0:e.tel_staff,mask:!0,fieldName:"tel_staff",minValueLength:4},{title:"Показывать внутренний телефон внутри Личного кабинета",fieldName:"show_tel_staff_inner",type:"checkbox",value:e.show_tel_staff_inner??!0},{title:"Показывать внутренний телефон на сайте",fieldName:"show_tel_staff_outer",type:"checkbox",value:e.show_tel_staff_outer??!0}]}),Og={БС:"БС",ПР:"ПР",АВ:"АВ",ПК:"ПК",МИХ:"МИХ",СС:"СС",РП:"РП",БАЛТ:"БАЛТ",Д:"Д",ПАРК:"ПАРК",ВЛМ:"ВЛМ",БГ:"БГ",МС:"МС","":""},fs=e=>{const i=()=>e===he[0].title,n=()=>e===he[1].title,s=()=>e===he[2].title,o=()=>e===he[3].title||e===he[13].title,a=()=>e===he[4].title,r=()=>e===he[5].title,c=()=>e===he[16].title,d=()=>e===he[14].title||e===he[15].title,p=()=>e===he[8].title,h=()=>e===he[9].title,g=()=>e===he[10].title,x=()=>e===he[12].title,f=()=>e===he[6].title;return i()?"БС":n()?"ПР":s()?"АВ":o()?"ПК":a()?"МИХ":r()?"СС":d()?"РП":c()?"БАЛТ":p()?"Д":h()?"ПАРК":g()?"ВЛМ":x()?"БГ":f()?"МС":""},mE=e=>{const i=fs(e);return i?i+" ":""},Ig=(e,i)=>e.length>8?e.substring(0,8):e.length===3&&(i==null?void 0:i.length)===2?e+"-":e.length===3&&(i==null?void 0:i.length)===4?e.substring(0,2):e,Lg=e=>{const i=e.target.selectionStart;let n=e.target.value.replace(/\D/g,""),s="";return n.length?e.target.value.length!==i?/\D/g.test(e.nativeEvent.data??"")?n:e.target.value:(n[0]!=="7"&&(n="7"+n),s="+7"+" ",n.length&&(s+="("+n.substring(1,4)),n.length>=5&&(s+=") "+n.substring(4,7)),n.length>=8&&(s+="-"+n.substring(7,9)),n.length>=10&&(s+="-"+n.substring(9,11)),s):""},Fo=(e,i,n,s,o,a=4)=>{var r,c;return i+=n.substring(0,a),!s||!((c=(r=s[0])==null?void 0:r.toLowerCase())!=null&&c.match(/[а-я]/))?i:(i+=s[0].toLowerCase(),i.substring(0,o.length+a+2))},Rg=(e,i)=>{var a,r,c,d;const n=e.replace(/\D/g,""),s=e.match(new RegExp("(?<=\\d)[а-яА-Я]"));let o=i+" ";switch(i){case"БС":const p=e.substring(3).match(/^[а-яА-Я]{1,2}/);return!p||!((r=(a=p[0])==null?void 0:a.toUpperCase())!=null&&r.match(/^(А|Б|В|НД?D?)$/))?o:(o+=p[0].toUpperCase(),(p[0].length===1?e[3]&&!e[5]&&e[4]===" ":e[4]&&!e[6]&&e[5]===" ")?o+" ":(n.length>0&&(o+=" "),o+=n.substring(0,3),!s||!((d=(c=s[0])==null?void 0:c.toLowerCase())!=null&&d.match(/[а-я]/))?o:(o+=s[0].toLowerCase(),o.substring(0,10))));case"ПК":return Fo(e,o,n,s,i,3);case"АВ":case"ПР":case"СС":case"МИХ":return Fo(e,o,n,s,i);case"":return e;default:return o+e.substring(i.length+1)}},zg=e=>e.replace(/\D/g,"").substring(0,4),_i={groupMask:Ig,phoneMask:Lg,cabinetMask:Rg,innerPhoneMask:zg},Fg=(e,i,n,s,o,a,r,c)=>{const[d,p]=l.useState(n),[h,g]=l.useState(s??!1);l.useEffect(()=>{p(n)},[n]);const x=l.useCallback(v=>v.replace(/@\.*/,"@mospolytech.ru").replace(/mospolytech.ru?/,""),[n]);return{inputType:d,danger:h,phoneMaskKeyDown:v=>{v.key==="Backspace"&&(e[1]==="7"&&e.length<=4||e[0]==="8"&&e.length<=3)&&i("")},buttonOnClick:()=>p(v=>v==="password"?"text":"password"),handleOnChange:v=>{if(c)if(r)i(r(v.target.value,e));else if(n==="tel")i(_i.phoneMask(v));else if(n==="email")i(x(v.target.value));else if(n==="cabinet"){const k=Object.keys(Og).find(_=>v.target.value.startsWith(_));i(_i.cabinetMask(v.target.value,k||""))}else i(n==="innerPhone"?_i.innerPhoneMask(v.target.value):v.target.value);else i(v.target.value);if(n==="date"&&(o||a)){const T=new Date(v.target.value);let k=!1;if(o){const _=new Date(o);k=T<_}if(a&&!k){const _=new Date(a);k=T>_}g(k)}}}},Mg=u.div`
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
        height: ${Ke(mn)};
        max-height: ${Ke(mn)};
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
`,Ae=l.forwardRef(function(i,n){const{value:s,setValue:o,leftIcon:a,title:r,required:c,width:d,minWidth:p,customMask:h,placeholder:g="Введите сюда",type:x="text",danger:f,alertMessage:m,loading:b=!1,isActive:v=!0,inputAppearance:T=!0,mask:k=!1,autocomplete:_=!1,minValue:C=void 0,maxValue:O=void 0,minLength:N=void 0,maxLength:L=void 0,hideCross:se=!1,stepSize:B=.1,size:Y="middle"}=i,{inputType:ue,buttonOnClick:Re,danger:Ne,handleOnChange:it,phoneMaskKeyDown:De}=Fg(s,o,x,f,C,O,h,k),je=s&&x==="date"?au(new Date(s),"yyyy-MM-dd"):s??"";return t.jsxs(Mg,{leftIcon:!!a,isActive:v,inputAppearance:T,width:d,danger:Ne,minWidth:p,size:Y,children:[t.jsx(z,{size:5,align:"left",visible:!!r,bottomGap:"5px",required:c,children:r}),t.jsx(X,{type:"alert",visible:!!m,icon:t.jsx(ru,{}),title:m??""}),a&&t.jsx("span",{className:"left-icon",children:a}),t.jsx("input",{id:g,min:C,max:O,minLength:N,maxLength:L,step:B??void 0,type:ue,placeholder:g,value:je,autoComplete:_?"on":"off",onKeyDown:Xt=>x==="tel"&&De(Xt),onChange:it,required:c,readOnly:!v,ref:n}),x!=="password"?!!(s!=null&&s.length)&&T&&(b?t.jsx(et,{}):!se&&t.jsx(y,{icon:t.jsx(rt,{}),onClick:()=>o(""),tabIndex:-1})):t.jsx(y,{icon:ue==="password"?t.jsx(lu,{}):t.jsx(As,{}),tabIndex:-1,onClick:Re})]})}),Bg=u.div`
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
`,Hg="/assets/thinking-emoji-f3c10f79.gif",Wg=["loading"],Ug=u.div.withConfig({shouldForwardProp:e=>!Wg.includes(e)})`
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
`,Qe=({children:e,load:i,error:n,data:s,deps:o=[],noDataCheck:a=!1,loadEveryVisit:r=!1})=>(l.useEffect(()=>{(!s||r)&&i()},o),t.jsxs(Ug,{loading:!!n||!s,children:[t.jsx("span",{className:"loading",children:n?t.jsx("div",{className:"reload",children:t.jsx(ge,{text:n,image:a&&Hg,children:!a&&t.jsx(y,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(Pn,{})})})}):t.jsx(et,{})}),t.jsx("div",{className:"content",children:e})]})),Gg=u.a`
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
`,Vg=({icon:e,text:i,onClick:n,width:s,background:o,textColor:a,align:r,href:c,height:d,minHeight:p,padding:h,isActive:g=!0,isChosen:x=!1})=>t.jsxs(Gg,{text:!!i,onClick:f=>g&&n&&n(f),isChosen:x,width:s,background:o,textColor:a,href:c,align:r,isActive:g,height:d,padding:h,minHeight:p,children:[!!e&&e,i&&t.jsx("span",{children:i})]}),Hi=l.memo(Vg),Rn=u.div`
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
`,Yg=u.a`
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
`,Qg=({title:e,link:i,type:n})=>t.jsxs(Yg,{href:i,target:"_blank",children:[t.jsx("div",{className:"icon",children:n==="document"?t.jsx(I,{}):t.jsx(cu,{})}),t.jsx("div",{className:"title",children:e})]}),qg=u.label`
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
`,Xg=u.div`
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
`,Be=({text:e,checked:i,setChecked:n,fontSize:s,visible:o=!0,isActive:a=!0,invisibleOnFalse:r=!1})=>{if(!o)return null;const c=()=>{a&&n(!i)};return t.jsxs(qg,{checked:i,invisibleOnFalse:r,fontSize:s,isActive:a,className:"checkbox",children:[t.jsx("input",{className:"checkbox",type:"checkbox",checked:i,onChange:c}),t.jsx(Xg,{tabIndex:0,className:"checkbox-square",children:i&&t.jsx(En,{})}),e&&t.jsx("div",{className:"checkbox-text",children:e})]})},Wt=u.span`
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
`,ms=e=>e.split(" ").map(i=>i[0]),Ue=(e,i)=>{const n=ms(e),s=j[ex[n[0]]];return s==null?void 0:s[i??"main"]},Kg=(e,i=265,n=200)=>(e.preventDefault(),{x:e.clientX<window.innerWidth/2?e.clientX:e.clientX-i,y:e.clientY<window.innerHeight/2?e.clientY:e.clientY-n}),Jg={open:!1,content:null,type:"left-click",position:{x:0,y:0}},Zg=()=>ce(ef),Dr=E(),Or=E(),Ir=E(),ef=V(Jg).on(Dr,(e,{content:i,e:n,height:s,type:o="left-click"})=>({position:Kg(n,220,s),open:!0,content:i,type:o})).on(Or,e=>({...e,open:!1})).on(Ir,(e,{position:i})=>({...e,position:i})),Fe={open:Dr,close:Or,changePosition:Ir},tf={useContextMenu:Zg},nf=()=>{const e=navigator.userAgent;return/iPad|iPhone|iPod/.test(e)?"iOS":e.search("Mac")!==-1?"MacOS":e.search("X11")!==-1&&e.search("Linux")===-1?"UNIX":e.search("Linux")!==-1&&e.search("X11")!==-1?"Linux":/android/i.test(e)?"Android":"Windows"},rs=new Set,Lr=(e,i)=>{l.useEffect(()=>{const n=o=>{rs.add(o.which),!e.slice(0,e.length-1).find(r=>!rs.has(r))&&e[e.length-1]===o.which&&(o.preventDefault(),i())},s=o=>{rs.delete(o.which)};return window.addEventListener("keydown",n),window.addEventListener("keyup",s),()=>{window.removeEventListener("keydown",n),window.removeEventListener("keyup",s)}},[])},Ee=(e,i)=>{if(!e.length)return"";const n=i??!0,s=e.replace(/\s/g,"").replace(/\$/g,"s").replace(/-/g,"").toLowerCase();return n?s.replace(/[,'._/]/g,""):s},Rr=e=>{const i={a:"ф",b:"и",c:"с",d:"в",e:"у",f:"а",g:"п",h:"р",i:"ш",j:"о",k:"л",l:"д",m:"ь",n:"т",o:"щ",p:"з",q:"й",r:"к",s:"ы",t:"е",u:"г",v:"м",w:"ц",x:"ч",y:"н",z:"я","[":"х","{":"Х","]":"ъ","}":"Ъ","'":"э",";":"ж",",":"б",".":"ю","<":"Б",">":"Ю",":":"Ж",'"':"Э"};let n="";for(let s=0;s<e.length;s++){const o=Ee(e.charAt(s),!1),a=i[o]?s===0?i[o].toUpperCase():i[o]:o;n+=a}return n},zr=e=>/[A-Za-z]/.test(e),sf=u.span`
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
`,Fr=({value:e,setValue:i,visible:n=!0})=>{if(e.length===0||!n||!zr(e))return null;const s=Rr(e),o=()=>i(s);return t.jsxs(te,{width:"100%",maxWidth:"100%",onClick:o,children:["Возможно, вы имели в виду ",t.jsx(sf,{tabIndex:10,children:s})]})};function pi(e,i){l.useEffect(()=>{const n=s=>{const o=e==null?void 0:e.current;!o||o.contains(s.target)||i(s)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,i])}function _t(e,i,n=0){return e>i?n:e<n?i:e}const of=u.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: ${({width:e})=>e??"100%"};
    position: relative;
`,af=u(ut)`
    position: absolute;
    top: 45px;
    z-index: 10;
    height: auto;
    width: 100%;
    left: 0;
    overflow-y: auto;
`,rf=u.div`
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
`,Wi=({value:e,width:i,placeholder:n,inputAppearance:s,loading:o,hints:a,leftIcon:r,focusOn:c,setValue:d,customMask:p,onHintClick:h,validationCheck:g=!1,size:x="middle"})=>{const[f,m]=l.useState(0),[b,v]=l.useState(!1),T=l.useRef(null),k=l.useRef(null),_=l.useRef(null);pi(T,()=>v(!1)),l.useEffect(()=>{c&&setTimeout(()=>{var L;return(L=_.current)==null?void 0:L.focus()},50)},[c]);const C=L=>{var se,B;(((a==null?void 0:a.length)??0)>0||o)&&v(!0),L.key==="ArrowDown"?((se=k.current)==null||se.scrollIntoView({block:"start",behavior:"smooth"}),typeof f=="number"&&m(_t(f+1,((a==null?void 0:a.length)??1)-1,0))):L.key==="ArrowUp"?((B=k.current)==null||B.scrollIntoView({block:"end",behavior:"smooth"}),typeof f=="number"&&m(_t(f-1,((a==null?void 0:a.length)??1)-1,0))):L.key==="Enter"?(a!=null&&a[f??0].title&&d(a==null?void 0:a[f??0].title),v(!1),h==null||h(a==null?void 0:a[f??0])):m(0)},O=L=>()=>{m(L),d((a==null?void 0:a[L].title)??""),v(!1),h==null||h(a==null?void 0:a[L])},N=()=>{a!=null&&a.length&&v(!0)};return t.jsxs(of,{width:i,onKeyDown:C,onMouseDown:N,ref:T,children:[t.jsx(Ae,{size:x,value:e,placeholder:n,leftIcon:r??t.jsx(ii,{}),inputAppearance:s,setValue:d,loading:o,width:i,mask:!0,customMask:p,ref:_}),t.jsx(Fr,{setValue:d,value:e,visible:g}),b&&t.jsx(af,{height:"fit-content",maxWidth:"100%",maxHeight:"250px",width:"100%",onKeyDown:C,padding:"0",orientation:"vertical",children:a==null?void 0:a.map(({title:L,icon:se},B)=>{const Y=f===B;return t.jsxs(rf,{onClick:O(B),ref:Y?k:null,selected:Y,children:[se&&t.jsx("div",{className:"icon",children:se}),t.jsx("span",{children:L})]},L+B)})})]})},zn=()=>{const[e,i]=l.useState({width:0,height:0}),n=()=>{i({width:window.innerWidth,height:window.innerHeight})};return l.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),e},Mo={small:"30px",middle:"44px",big:"68px"},Mr={small:"8px",middle:"10px",big:"16px"},lf={small:"0.8rem",middle:"0.9rem",big:"1rem"},cf={small:"0.65rem",middle:"0.75rem",big:"0.85rem"},df=u.div`
    max-width: ${({sliderWidth:e})=>e??"100%"};
    width: 100%;
    min-height: calc(${Ke(Mo)} + 6px);
    padding: ${({appearance:e})=>e&&"3px"};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({appearance:e})=>e&&"var(--almostTransparent)"};
    border-radius: ${Ke(Mr)};
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: ${Ke(Mo)};
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &:active .currentPage {
        transform: scale(0.9);
    }

    ${W.isTablet} {
        font-size: 11px;
        min-height: 40px;

        .slider-body {
            height: 34px;
        }
    }
`,pf=u.div`
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
        font-size: ${Ke(lf)};
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

    ${W.isMobile} {
        & > b {
            font-size: ${Ke(cf)};
        }
    }
`,uf=({id:e,currentPage:i,setCurrentPage:n,pageTitle:s,elementsVisible:o,condition:a=!0,size:r})=>t.jsx(pf,{size:r,className:`SliderItem ${e===i?"active":""}`,onClick:()=>a&&n(e),elementsVisible:o,condition:a,children:t.jsx("b",{children:s})}),hf=l.memo(uf),xf=u.span`
    height: calc(100% - 0px);
    background: ${({appearance:e})=>e?"var(--theme)":"var(--theme-1)"};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(${Ke(Mr)} - 3px);
    scroll-snap-align: center;
    left: ${({currentPage:e,moreThanNeeded:i,pages:n,elementsVisible:s})=>`calc(${e*100/(i?s:n.length)}%)`};
    width: ${({moreThanNeeded:e,pages:i,elementsVisible:n})=>`calc(100% / ${e?n:i.length} - ${i.length>n?3:0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`,gf=({currentPage:e,pages:i,elementsVisible:n,appearance:s,size:o})=>{const a=l.useMemo(()=>i.length>n,[i.length,n]);return t.jsx(xf,{currentPage:e,appearance:s,moreThanNeeded:a,pages:i,elementsVisible:n,size:o})},ff=l.memo(gf),mf=({pages:e,currentPage:i,setCurrentPage:n,sliderWidth:s,appearance:o=!0,size:a="middle"})=>{const[r,c]=l.useState(5),d=l.useRef(null),{width:p}=zn();return l.useEffect(()=>{var g;const h=((g=d==null?void 0:d.current)==null?void 0:g.offsetWidth)??p;h>800?c(5):h>600&&h<=800||h>400&&h<=600?c(4):h<=400&&c(3)},[p,d.current]),t.jsx(df,{ref:d,elementsVisible:r,sliderWidth:s,appearance:o,size:a,children:t.jsxs("div",{className:"slider-body",children:[t.jsx(ff,{size:a,appearance:o,pages:e,currentPage:i,elementsVisible:r}),e.map((h,g)=>t.jsx(hf,{size:a,id:g,currentPage:i,setCurrentPage:n,pageTitle:h.title,condition:h.condition,elementsVisible:r},g))]})})},Js=l.memo(mf),bf=300,Fn=({defaultValue:e,onDebounce:i,onClear:n,triggerOn:s,triggerDelay:o,deps:a=[],delay:r=bf})=>{const[c,d]=l.useState(e??""),[p,h]=l.useState(""),[g,x]=l.useState(!1);return l.useEffect(()=>{if(c!==null)if(c.length){x(!0);const f=setTimeout(async()=>{await i(c),h(c),x(!1)},r);return()=>clearTimeout(f)}else p.length!==0&&(n==null||n(c),d(""),x(!1))},[c]),l.useEffect(()=>{if(a.length&&((s==null?void 0:s(c))??!0)){x(!0);const f=setTimeout(async()=>{await i(c),x(!1)},o??r);return()=>clearTimeout(f)}},[...a]),[c,d,g]},vf="Sep 07 2023 12:00:00 GMT+0300",Br="Sep 08 2023 12:00:00 GMT+0300",bE=e=>{const i=new Date;return i<new Date(vf)?"Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!":i>new Date(Br)?"Подача заявок закрыта":""},Bo={message:"",type:"success",isOpen:!1,time:2e3},Hr=E(),Wr=E(),Ur=E();V(Bo).on(Hr,(e,{message:i,type:n,time:s=2e3,onClick:o})=>({isOpen:!0,message:i,type:n,time:s,onClick:o})).on(Wr,(e,{isOpen:i})=>({...e,isOpen:i})).on(Ur,()=>({...Bo}));const Ct={evokePopUpMessage:Hr,openPopUpMessage:Wr,clearStore:Ur},Ho={listApplication:null,error:null,dataUserApplication:null},ki=F(async()=>{const e=await Ax();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),pn=F(async()=>{const e=await Nx();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Mn=F(async e=>await Dx(e));S({clock:Mn.doneData,fn:e=>{const i=e.data.dismissalResponse;return i.isError?{message:i.errorString,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Ct.evokePopUpMessage});S({clock:Mn.fail,fn:()=>({message:"Не удалось отправить форму. Попробуйте позже",type:"hrFailure",time:3e5}),target:Ct.evokePopUpMessage});const yf=E();at({from:Mn.doneData,to:ki});V(Ho).on(pn,e=>({...e,error:null})).on(pn.doneData,(e,i)=>({...e,dataUserApplication:i})).on(pn.failData,(e,i)=>({...e,error:i.message})).on(ki,e=>({...e,error:null})).on(ki.doneData,(e,i)=>({...e,listApplication:i})).on(ki.failData,(e,i)=>({...e,error:i.message})).on(yf,()=>({...Ho}));const wf={getApplicationsFx:ki,getUserDataApplicationsFx:pn,postApplicationFx:Mn},Wo={listApplication:null,error:null,dataUserApplication:null,dataWorkerApplication:null},bn=F(async()=>{const e=await Ex();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Si=F(async()=>{const e=await Cx();try{return e.data.reverse()}catch{throw new Error("Не удалось загрузить заявления")}}),Ti=F(async()=>{const e=await xr();try{return e.data}catch{throw new Error("Не удалось загрузить информацию о пользователе")}}),Zs=F(async e=>{const i=await $x(e);if(i.result==="ok")return"ok";throw new Error(i.error_text)}),jf=()=>{const{listApplication:e,dataUserApplication:i,dataWorkerApplication:n,error:s}=vt(_f);return{data:{listApplication:e,dataUserApplication:i,dataWorkerApplication:n},loading:vt(Ti.pending),workerLoading:vt(lt(bn.pending,wf.postApplicationFx.pending,(o,a)=>o||a)),error:s}};at({from:Zs.doneData,to:Si});S({clock:Zs.failData,fn:e=>({message:`Не удалось отправить форму. Ошибка: ${e.message}`,type:"failure",time:3e4}),target:G.evokePopUpMessage});const _f=V(Wo).on(Ti,e=>({...e,error:null})).on(Ti.doneData,(e,i)=>({...e,dataUserApplication:i})).on(Ti.failData,(e,i)=>({...e,error:i.message})).on(Si,e=>({...e,error:null})).on(Si.doneData,(e,i)=>({...e,listApplication:i})).on(Si.failData,(e,i)=>({...e,error:i.message})).on(bn,e=>({...e,error:null})).on(bn.doneData,(e,i)=>({...e,dataWorkerApplication:i})).on(ae.userGuid,()=>({...Wo})),Pe={useApplications:jf},st={getApplicationsFx:Si,getUserDataApplicationsFx:Ti,postApplicationFx:Zs,getWorkerPosts:bn},oe=(e,i="long")=>{if(!e)return"";switch(i){case"long":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"});case"short":return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"});case"numeric":return new Date(Date.parse(e)).toLocaleDateString("ru",{year:"numeric",month:"2-digit",day:"2-digit"});case"weird":const n=e.getMonth()<10?`0${e.getMonth()+1}`:`${e.getMonth()+1}`;return`${e.getFullYear()}-${n}-${e.getDate()}`;case"extraWeird":const s=e.getMonth()<9?`0${e.getMonth()+1}`:`${e.getMonth()+1}`,o=e.getDate()<10?`0${e.getDate()}`:`${e.getDate()}`;return`${e.getFullYear()}-${s}-${o}`;default:return new Date(Date.parse(e)).toLocaleDateString("ru",{month:"short",day:"numeric"})}},Uo=(e,i)=>{if(i){const n=new Date(Date.parse(i));return n.setDate(n.getDate()+e),oe(n,"extraWeird")}else{const n=new Date;return n.setDate(n.getDate()+e),oe(n,"extraWeird")}},mt=({config:e})=>({title:e.title,data:[{title:"Дата выдачи",type:"date",value:"",editable:!0,fieldName:e.issueDateFieldName,required:!0,minValueInput:Uo(-30*11),maxValueInput:Uo(0)},{title:"Организация, выдавшая справку",type:"textarea",fieldName:e.organizationFieldName,value:"",editable:!0,required:!0}],documents:{files:[],fieldName:e.docsFieldName,required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),sn={kvdCert:mt({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}}),fluorographyCert:mt({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}}),vichRwCert:mt({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}}),graftCert:mt({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}})},ve=(e,i)=>{var o;const n=!((o=e.documents)!=null&&o.required)||!!e.documents.files.length,s=!e.addNew||!!e.data.length;return!e.data.find(a=>{var c,d,p;if(a.type==="date"&&(a.maxValueInput||a.minValueInput)){const h=new Date(((c=a.value)==null?void 0:c.toString())??0);if(a.minValueInput){const g=new Date(a.minValueInput);if(h<g)return!0}if(a.maxValueInput){const g=new Date(a.maxValueInput);if(h>g)return!0}}const r=(p=(d=a.value)==null?void 0:d.toString())==null?void 0:p.length;return a.minValueLength&&r&&r<a.minValueLength?!0:i&&a.specialType&&!Object.values(i).includes(a.specialType)?null:a.type!=="checkbox-docs"?!a.value&&a.required:a.required&&!a.items.find(h=>!!h.files.length)})&&n&&s};u.div`
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
`;const kf=u.div`
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
`,Sf=({distance:e,filled:i,reached:n,direction:s})=>t.jsx(kf,{direction:s,distance:e,reached:n,filled:i,children:t.jsx("div",{className:"inside-line"})}),eo=({whereToSearch:e,searchEngine:i,setResult:n,inputAppearance:s,setExternalValue:o,hints:a,width:r,loadingOnType:c=!1,placeholder:d="Поиск по меню",validationCheck:p=!1})=>{const h=v=>{n(i(v,e))},g=()=>{n(null)},[x,f,m]=Fn({onDebounce:h,onClear:g}),b=v=>{f(v),o&&o(v)};return t.jsx(Wi,{value:x??"",setValue:b,inputAppearance:s,placeholder:d,validationCheck:p,loading:c?m:!1,hints:a,width:r})},Tf=({id:e,isToggled:i,setIsToggled:n})=>t.jsxs(Bg,{children:[t.jsx("input",{type:"checkbox",name:e,id:e,className:"checkbox",checked:i,onChange:n}),t.jsx("label",{className:"toggle-body",htmlFor:e,children:t.jsx("span",{className:"toggle-circle"})})]}),Gr=u.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 3px;
`,Cf=u(Gr)`
    background: var(--almostTransparentOpposite);
`,Ef=u(Gr)`
    transition: 0.2s;
    left: 0;
    position: absolute;
    background: ${({color:e})=>j[e??"blue"].main};
    transform: ${({current:e})=>`translateX(${e*16}px)`};
`,Vr=({amount:e,current:i,color:n,direction:s="horizontal"})=>e<=1?null:t.jsxs(_e,{direction:s,gap:2,width:"fit-content",minWidth:"fit-content",verticalAlign:"center",horizontalAlign:"center",children:[Array(e).fill(0).map((o,a)=>t.jsx(Cf,{},a)),t.jsx(Ef,{color:n,current:i})]}),Pf=u.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`,$f=({checkbox:e,loadfile:i,docVisible:n})=>t.jsxs(Pf,{children:[t.jsx(Be,{...e}),n&&t.jsx(to,{...i})]}),Af=u.div`
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
`,Yr=({title:e,required:i,dates:n,setDates:s,valid:o,setValid:a,diff:r,minValue:c})=>{if(l.useEffect(()=>{a(new Date(n[0])<=new Date(n[1])||!n[0].length||!n[1].length)},[n]),r!=null){const d=new Date(n[0]),p=new Date(d);p.setDate(d.getDate()+r),n[1]=oe(p,"extraWeird")}return t.jsxs(Af,{children:[t.jsx(z,{size:5,align:"left",visible:!!e,required:i,children:e}),t.jsx(X,{title:"Внимание",type:"alert",icon:t.jsx(Ni,{}),visible:!o,children:"Дата начала не может быть больше даты конца"}),t.jsxs("div",{className:"date-interval-inputs",children:[t.jsx(Ae,{value:n[0],danger:!o,setValue:d=>s([d,n[1]]),type:"date",minValue:c}),t.jsx(Ae,{value:n[1],setValue:d=>s([n[0],d]),type:"date",danger:!o})]})]})},Nf=(e,i)=>{var b,v,T;const{width:n}=zn(),s=l.useRef(null),[o,a]=l.useState(!1),[r,c]=l.useState(!1),[d,p]=l.useState(0),[h,g]=l.useState(0),x=((b=s.current)==null?void 0:b.clientWidth)??1,f=Math.ceil((((v=s.current)==null?void 0:v.scrollWidth)??0)/(x+(e??0)));return l.useEffect(()=>{s.current&&(s.current.scrollLeft=d,s.current.clientWidth<s.current.scrollWidth?(a(!0),c(!0)):(c(!1),a(!1)))},[d,(T=s.current)==null?void 0:T.clientWidth,n,i]),{listRef:s,leftArrow:o,rightArrow:r,setScrollLeft:p,pageOffset:x,amountOfPages:f,currentPage:h,setCurrentPage:g,handleScroll:k=>{g(Math.ceil(k.currentTarget.scrollLeft/(x+(e??0))))}}},Df=e=>{const{title:i,children:n,gap:s,width:o,height:a,padding:r,fontSize:c,wrap:d,onAdd:p,onWatchMore:h,onDelete:g,showPages:x,innerPadding:f,minWidth:m,wrapOnMobile:b,position:v,direction:T="vertical",verticalAlign:k="top",horizontalAlign:_="left",scroll:C=!0,visible:O=!0,...N}=e;if(!O)return null;const{listRef:L,leftArrow:se,rightArrow:B,handleScroll:Y,setScrollLeft:ue,pageOffset:Re,amountOfPages:Ne,currentPage:it}=Nf(s,n);return t.jsxs(Kx,{padding:r,position:v,width:o,minWidth:m,height:a,children:[t.jsxs(z,{size:4,align:"left",bottomGap:!0,visible:!!i,width:"calc(fit-content + 50px)",children:[i,p&&t.jsx(y,{icon:t.jsx(Mt,{}),width:"35px",height:"15px",background:j.grey.transparent3,textColor:"var(--reallyBlue)",onClick:p}),h&&t.jsx(y,{width:"50px",height:"15px",background:j.blue.transparent3,textColor:j.blue.light1,onClick:h,text:"Ещё"}),g&&t.jsx(y,{width:"fit-content",height:"15px",background:j.grey.transparent3,textColor:"var(--reallyBlue)",onClick:g,text:"Удалить"})]}),t.jsx(On,{verticalAlign:k,horizontalAlign:_,direction:T,ref:L,gap:s,width:o,height:a,fontSize:c,wrap:d,innerPadding:f,scroll:C,wrapOnMobile:b,onScroll:Y,...N,children:n}),(B||se)&&t.jsxs("div",{className:"bottom-wrapper",children:[se&&t.jsx(y,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(Bi,{}),className:"left-button",textColor:j.grey.main,onClick:()=>{ue(De=>{var je;return _t(De-Re-(s??0),((je=L.current)==null?void 0:je.scrollWidth)??0)})}}),x&&t.jsx(Vr,{direction:"horizontal",current:it,amount:Ne}),B&&t.jsx(y,{background:"transparent",minWidth:"40px",height:"25px",icon:t.jsx(ct,{}),className:"right-button",textColor:j.grey.main,onClick:()=>{ue(De=>{var je;return _t(De+Re+(s??0),((je=L.current)==null?void 0:je.scrollWidth)??0)})}})]})]})},_e=pe.memo(Df),Qr=e=>e.split("/")[1],Of=e=>e*1024*1024,If=(e,i)=>(i??tx).indexOf(e.type)!==-1,Go=(e,i,n,s,o=ix)=>{if(n&&i.length+e.length>n)return G.evokePopUpMessage({message:`Нельзя загрузить больше ${n} файлов`,type:"failure"}),i;for(let a=0;a<e.length;a++)return If(e[a],s)?e[a].size>Of(o)?(G.evokePopUpMessage({message:`Размер файла слишком большой. Максимальный размер файла: ${o} MB`,type:"failure",time:1e4}),i):[...i,e[a]]:(console.log(e[a]),G.evokePopUpMessage({message:`Неверный формат файла. Доступные форматы: ${s==null?void 0:s.map(r=>Qr(r))}`,type:"failure",time:5e3}),i)},Lf=u.label`
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
`,Ge=({words:e})=>{const i=e.filter(n=>n.length!==0);return t.jsx(t.Fragment,{children:i.map((n,s)=>n+(s===i.length-1?"":" • "))})},Rf=({files:e,maxFiles:i,setFiles:n,isActive:s,formats:o,maxFileSizeInMegaBytes:a})=>{const r=l.useRef(null),[c,d]=l.useState(!1),p=m=>{const b=m.target.files;b!=null&&b.length&&n(Go(b,e,i,o,a))},h=m=>{m.preventDefault()},g=m=>{m.preventDefault(),d(!1);const b=m.dataTransfer.files;b.length&&n(Go(b,e,i,o,a))},x=m=>{m.preventDefault(),d(!0)},f=m=>{m.preventDefault(),d(!1)};return t.jsxs(Lf,{isActive:s,showPulse:c,onDragOver:m=>s&&h(m),onDragEnter:m=>s&&x(m),onDragLeave:m=>s&&f(m),onDrop:m=>s&&g(m),topPadding:!!i,children:[t.jsx("input",{type:"file",name:"",id:"",ref:r,onChange:p}),t.jsxs("div",{className:"message",children:[t.jsx(as,{className:"front-icon"}),t.jsxs("div",{className:"icons-behind",children:[t.jsx(as,{className:"icon-1"}),t.jsx(as,{className:"icon-2"})]}),t.jsx("b",{children:"Нажмите сюда или перетащите файл"}),t.jsx(te,{align:"center",children:t.jsx(Ge,{words:[`Форматы: ${o?o.map(m=>Qr(m)).join(", "):"jpg, png, pdf"}`,i?`Макс. файлов: ${i}`:""]})})]})]})},Vo={isOpen:!1,message:null,onConfirm:()=>null,onReject:()=>null},zf=()=>vt(Ff),qr=E(),Xr=E(),Ff=V(Vo).on(qr,(e,{message:i,onReject:n,onConfirm:s,isSubmitSuccess:o})=>({isOpen:!0,message:i,onConfirm:s,onReject:n,isSubmitSuccess:o})).on(Xr,e=>({...e,isOpen:!1})).on(ae.userGuid,()=>({...Vo})),Mf={useConfirm:zf},Ve={evokeConfirm:qr,closeConfirm:Xr},Bf=e=>{if(e===0)return"0 Bytes";const i=1024,n=["Bytes","KB","MB","GB","TB"],s=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,s)).toFixed(2))+" "+n[s]},Hf=(e,i,n)=>(e.preventDefault(),e.stopPropagation(),[...n.filter(o=>o.name!==i)]),Wf=u.div`
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
`,Uf=({file:e,files:i,setFiles:n})=>{const{open:s}=M(),o=(r,c)=>{r.preventDefault(),r.stopPropagation();const d=new FileReader;d.onloadend=()=>{s(t.jsx(Xs,{src:d.result,loading:!1,width:"500px",height:""}))},c&&d.readAsDataURL(c)},a=r=>Ve.evokeConfirm({message:"Вы уверены, что хотите удалить файл?",onConfirm:()=>n(Hf(r,e.name,i))});return t.jsxs(Wf,{onClick:r=>r.preventDefault(),children:[t.jsxs("div",{className:"file-body",onClick:r=>e.type.includes("image")&&o(r,e),children:[t.jsx("div",{className:"image-container",children:e.type.includes("image")?t.jsx(du,{}):t.jsx(pu,{})}),t.jsxs("div",{className:"name-and-size",children:[t.jsx("b",{className:"file-name",children:e.name}),t.jsx(te,{fontSize:"0.7em",children:Bf(e.size)})]})]}),t.jsx(y,{icon:t.jsx(rt,{}),height:"30px",width:"30px",background:"transparent",onClick:a})]})},Gf=({files:e,setFiles:i})=>t.jsx(_e,{title:"Список файлов",visible:!!e.length,onDelete:()=>Ve.evokeConfirm({message:"Вы уверены, что хотите удалить все файлы?",onConfirm:()=>i([])}),children:e.map(n=>t.jsx(Uf,{file:n,files:e,setFiles:i},n.name))}),to=e=>t.jsxs(_e,{gap:12,children:[t.jsx(Rf,{...e}),t.jsx(Gf,{files:e.files,setFiles:e.setFiles})]}),Vf=({documents:e,optionalCheckbox:i,data:n,setData:s,optional:o,collapsed:a,confirmed:r,defaultOpenArea:c})=>{const[d,p]=l.useState(r===void 0),[h,g]=l.useState(!a),[x,f]=l.useState(!1),m=()=>{if(n[0]===void 0&&!(i!=null&&i.value)&&(i!=null&&i.required))return G.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3});Array.isArray(n[0])?e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(_=>(_.confirmed=!0,{..._})),p(!1),g(!1)):G.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой",type:"failure",time:5e3}):!d&&!n.find(_=>!!_.find(C=>!C.value&&C.required))||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(_=>(_.confirmed=!0,{..._})),p(!1),g(!1)):G.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.length||!n.find(_=>!!_.find(C=>!C.value&&C.required))&&!n.find(_=>!!_.find(C=>{var O;return C.value.id==="not-chosen"&&!!((O=C.items)!=null&&O.length)}))?(s(_=>(_.confirmed=!0,{..._})),p(!1),g(!1)):G.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3}):e?i!=null&&i.required?e.files.length&&e.required||i.value?(s(_=>(_.confirmed=!0,{..._})),p(!1),g(!1)):G.evokePopUpMessage({message:"Необходимо загрузить файл. Если у вас нет соответствующего документа, отметьте это галочкой",type:"failure",time:5e3}):!d&&!n.find(_=>!_.value&&_.required)||i!=null&&i.value&&!e.required||e.files.length||!e.required?(s(_=>(_.confirmed=!0,{..._})),p(!1),g(!1)):G.evokePopUpMessage({message:"Необходимо загрузить файл",type:"failure",time:5e3}):i!=null&&i.value&&i.required||!n.find(_=>!_.value&&_.required)&&!n.find(_=>{var C;return _.value===null&&!!((C=_.items)!=null&&C.length)})?(s(_=>(_.confirmed=!0,{..._})),p(!1),g(!1)):G.evokePopUpMessage({message:"Не все необходимые поля заполнены",type:"failure",time:5e3})},b=()=>{s(_=>{const C=_.default[0].map(O=>({fieldName:O.fieldName??"",title:O.title,value:O.type==="select"&&(O!=null&&O.items)?null:"",type:O.type,items:O.items,width:O.width,required:O.required}));return{..._,data:[..._.data,C]}})},v=_=>{s(C=>{const O=C.data.filter((N,L)=>_!==L);return{...C,data:O}})},T=_=>{s(C=>(C.documents&&(C.documents.files=[..._]),{...C}))},k=()=>{i&&(i.value=!i.value),s(_=>({..._,optionalCheckbox:i}))};return l.useEffect(()=>{g(!x&&o?!1:a?!a:!!c)},[x,a]),{openArea:h,changeInputArea:d,included:x,setOpenArea:g,setIncluded:f,setChangeInputArea:p,handleRemove:v,handleAddNew:b,handleLoadFiles:T,handleConfirm:m,handleCheckbox:k}},Yf=u.div`
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
`,bs=(e,i)=>{const n=e.find(s=>s.id.toString()===i[0]);return i.length&&(n!=null&&n.children)?(i.shift(),bs(n.children,i)):n?n.children:e},Qf=e=>{const{items:i,setSelected:n,onClick:s,selected:o,appearance:a=!0,multiple:r=!1}=e,[c,d]=l.useState(!1),p=l.useRef(null),h=l.useRef(null),[g,x]=l.useState([]),[f,m]=l.useState(i),[b,v]=l.useState("");l.useEffect(()=>{m(i)});const T=l.useCallback(()=>{d(C=>!C)},[d]),k=l.useCallback(C=>{if(C.children)g.push(C.id.toString()),m(bs(i,[...g])??[]),x([...g]);else{if(r)if(o)if(o.find(O=>O.id===C.id)){const O=o.filter(N=>N.id!==C.id);O.length?n(O):n(null)}else n([...o,C]);else n([C]);else n(C);!r&&T(),v(g.join("/"))}s==null||s(C)},[n,g]),_=l.useCallback(()=>{g.pop(),x([...g]),g.length===0?m(i):m(bs(i,g)??[])},[g,m]);return pi(p,()=>{c&&T()}),{handleOpen:T,refElement:p,isOpen:c,multiple:r,handleSelect:k,selectedRoute:b,currentItems:f,route:g,goBack:_,refItems:h,appearance:a}},qf=u.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: ${Ke(mn)};

    padding: ${({multiple:e})=>e?"5px 10px 5px 5px":"5px 10px"};
    box-shadow: ${({appearance:e})=>e&&"var(--block-content-shadow)"};
    position: relative;
    background: var(--block-content);
    border-radius: 6px;
    overflow: hidden;

    &:hover {
        filter: brightness(0.98);
    }
`,Xf=u.div`
    max-width: ${({width:e})=>e??"155px"};
    width: 100%;
    min-width: 50px;

    min-height: ${Ke(mn)};

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
`,Kf=u.header`
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
`,Jf=u.ul`
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
`,Yo=u.li`
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
`,Zf=["isOpen"],em=u(uu).withConfig({shouldForwardProp:e=>!Zf.includes(e)})`
    transition: 0.3s;
    min-width: 15px;
    transform: rotateZ(${({isOpen:e})=>e?"0deg":"180deg"});
`,tm=e=>{const{handleOpen:i,refElement:n,isOpen:s,multiple:o,handleSelect:a,selectedRoute:r,currentItems:c,route:d,goBack:p,refItems:h,appearance:g}=Qf(e),{isActive:x,width:f,title:m,required:b,selected:v,placeholder:T,size:k="middle"}=e;return t.jsxs(Xf,{onClick:i,appearance:g,ref:n,isOpen:s,isActive:x??!0,width:f,size:k,children:[t.jsx(z,{size:4,align:"left",bottomGap:"5px",visible:!!m,required:b,children:m}),t.jsxs(qf,{multiple:o,appearance:g,size:k,children:[t.jsx(Kf,{appearance:g,children:o?v?v.map(_=>t.jsxs("div",{className:"header-item",children:[!!_.icon&&t.jsx("span",{className:"icon",children:_.icon}),t.jsx("span",{className:"header-title",children:_.title})]},_.id)):t.jsx("span",{className:"not-chosen multi",children:T??"Не выбрано"}):t.jsx("div",{className:"single-header",children:v?t.jsxs(t.Fragment,{children:[!!v.icon&&t.jsx("span",{className:"icon",children:v.icon}),t.jsx("span",{className:"header-title",children:v.title})]}):t.jsx("span",{className:"not-chosen",children:T??"Не выбрано"})})}),t.jsx(em,{isOpen:s})]}),t.jsxs(Jf,{width:f,ref:h,isOpen:s,className:s?"open":"close",itemsAmount:c.length+(d.length?1:0),title:m,children:[!!d.length&&t.jsx(Yo,{isSelected:!1,onClick:_=>{_.stopPropagation(),p()},children:t.jsxs("span",{className:"back-button",children:[t.jsx(Bi,{}),"Назад"]})},-1),c.map(({id:_,icon:C,title:O,children:N,data:L})=>t.jsxs(Yo,{onClick:se=>{se.stopPropagation(),a({id:_,icon:C,title:O,children:N,data:L})},isSelected:!o&&!!v&&v.title.includes(O),leadingToSelected:r.includes(_.toString()),children:[!!C&&t.jsx("span",{className:"icon",children:C}),t.jsx("span",{className:"select-item-title",children:O}),!!N&&t.jsx("span",{className:"right-icon",children:t.jsx(ct,{})}),o&&!!v&&!!v.find(se=>se.title.includes(O))&&t.jsx("span",{className:"right-icon",children:t.jsx(En,{})})]},O))]})]})},io=l.memo(tm),im=u.div`
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
`,Te=({title:e,state:i,action:n,icon:s,disabled:o})=>{const a=()=>{n(!i)};return t.jsxs(im,{disabled:o,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs("label",{children:[t.jsx("b",{children:e}),t.jsx(Tf,{id:e,isToggled:i,setIsToggled:a},e)]})]},e)};u.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`;const nm=u.div``,sm=({title:e,items:i,setChecked:n,setFiles:s})=>t.jsxs(nm,{children:[t.jsx(z,{size:5,align:"left",bottomGap:!0,children:e}),i.map(({value:o,title:a,files:r,maxFiles:c,checkboxCondition:d,maxFileSizeInMegaBytes:p},h)=>t.jsx($f,{checkbox:{checked:o,setChecked:()=>n(o,h),text:a},loadfile:{files:r,maxFiles:c,maxFileSizeInMegaBytes:p,isActive:!0,setFiles:g=>s(g,h)},docVisible:d==="straight"?o:!o},a))]}),om=({title:e,buttons:i,required:n=!1,current:s,setCurrent:o,isSpecificRadio:a=!1})=>t.jsxs("div",{children:[t.jsx(z,{visible:!!e,size:5,align:"left",bottomGap:!0,required:n,children:e}),t.jsxs(_e,{children:[!a&&t.jsx(Be,{text:"Не выбрано",checked:s===null,setChecked:()=>o(null)},-1),i.map(r=>{const{id:c,title:d}=r;return t.jsx(Be,{text:d,checked:c===(s==null?void 0:s.id),setChecked:()=>o({id:c,title:a?c.toString():d})},c)})]})]}),am=u.div`
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
`,rm=({title:e,value:i,visible:n})=>n?t.jsxs(am,{children:[t.jsxs("span",{className:"title",children:[e,":"]})," ",t.jsx("span",{className:"value",children:i})]}):null,lm=u.div`
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
`,cm=({text:e,checked:i,setChecked:n,visible:s=!0,isActive:o=!0,invisibleOnFalse:a=!1})=>s?t.jsxs(lm,{checked:i,invisibleOnFalse:a,onClick:()=>{o&&n(!i)},isActive:o,className:"checkbox",children:[t.jsx(y,{width:"25px",height:"25px",onClick:()=>null,icon:i||a?t.jsx(hu,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}):t.jsx(za,{style:{maxWidth:"20px",width:"20px",height:"20px",maxHeight:"20px"}}),background:"transparent"}),e&&t.jsx("div",{className:"hr-checkbox-text",children:e})]}):null,dm=u.div`
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
`,pm=({title:e,visible:i})=>i?t.jsx(dm,{children:t.jsx("span",{className:"title",children:e})}):null,um=u.div`
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
`,hm=u.ul`
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
`,xm=u.li`
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
`,gm=({value:e,setValue:i,leftIcon:n,title:s,required:o,width:a,minWidth:r,placeholder:c="Начните ввод...",danger:d,isActive:p=!0,inputAppearance:h=!0,suggestions:g})=>{const[x,f]=l.useState([]),[m,b]=l.useState(!0);return l.useEffect(()=>{if(e){const v=g.filter(T=>T.toLowerCase().includes(e.toLowerCase()));f(v)}else f([])},[e,g]),t.jsxs(um,{leftIcon:!!n,isActive:p,inputAppearance:h,width:a,danger:d,minWidth:r,children:[t.jsx(z,{size:5,align:"left",visible:!!s,bottomGap:"5px",required:o,children:s}),t.jsxs("div",{children:[t.jsx("input",{type:"text",value:e,onChange:v=>{i(v.target.value),b(!0)},placeholder:c}),x.length>0&&t.jsx(hm,{width:"100%",isOpen:m,className:m?"open":"close",itemsAmount:x.length,title:s,children:x.map((v,T)=>t.jsx(xm,{isSelected:!1,onClick:()=>{i(v),f([]),b(!1)},children:v},T))})]})]})},fm=u.div`
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
`,mm=({title:e,visible:i})=>i?t.jsx(fm,{children:t.jsx("span",{className:"title",children:e})}):null,Qo=e=>{const{value:i,required:n,width:s,indexI:o,indexJ:a,type:r,suggestions:c,items:d,title:p,documents:h,changeInputArea:g,setData:x,mask:f,editable:m,placeholder:b,autocomplete:v,isSpecificRadio:T,specialType:k,specialFieldsNameConfig:_,minValueInput:C,maxValueInput:O,minValueLength:N,maxValueLength:L,diff:se,visible:B=!0,onChange:Y,onKeyPress:ue,onBlur:Re,onKeyDown:Ne,onKeyUp:it,onFocus:De}=e,je=m??(g&&!h),[Xt,fi]=l.useState(!0),Xe=(U,fe,Kt)=>{Y==null||Y(U),x($e=>(Array.isArray($e.data[0])?$e.data[fe][Kt??0].value=U:$e.data[fe].type==="checkbox-docs"?$e.data[fe].items[Kt??0].value=!!U:$e.data[fe].value=U,{...$e}))},Eo=(U,fe,Kt)=>{Y==null||Y(U),x($e=>(Array.isArray($e.data[0])?$e.data[fe][Kt??0].value=U:$e.data[fe].value=U,{...$e}))},tn=(U,fe,Kt)=>{x($e=>($e.data[fe].items[Kt??0].files=U,{...$e}))},nn=U=>{Y==null||Y(U),x(fe=>(fe.data[o].value=U,{...fe}))},tu=U=>{Y==null||Y(U),ue==null||ue(U),Re==null||Re(U),Ne==null||Ne(U),it==null||it(U),De==null||De(U),x(fe=>(fe.data[o].value=U,{...fe}))};return _&&k&&!Object.values(_).includes(k)?null:r!=="select"&&r!=="multiselect"||!d?r==="checkbox"?t.jsx(Be,{text:p,isActive:je,checked:i,setChecked:U=>Xe(U,o,a)}):r==="hr-checkbox"?t.jsx(cm,{text:p,isActive:je,checked:i,setChecked:U=>Xe(U,o,a)}):r==="auto-complete-input"?t.jsx(gm,{title:p,suggestions:c??[],required:n,value:i,placeholder:b??p,setValue:U=>Xe(U,o,a)}):r==="textarea"?t.jsx(Ag,{value:i,title:p,setValue:U=>Xe(U,o,a),isActive:je,textAreaAppearance:je,placeholder:b??p,required:n,width:s}):r==="checkbox-docs"?t.jsx(sm,{title:p,items:d,setChecked:(U,fe)=>Xe(!U,o,fe),setFiles:(U,fe)=>tn(U,o,fe)}):r==="date-interval"?B?t.jsx(Yr,{title:p,required:n,dates:i,setDates:U=>tu(U),valid:Xt,setValid:fi,minValue:C,diff:se}):null:r==="simple-text"?t.jsx(rm,{title:p,value:i,visible:B}):r==="text-warning"?t.jsx(mm,{title:p,visible:B}):r==="text-header"?t.jsx(pm,{title:p,visible:B}):r==="radio"?t.jsx(om,{buttons:d,title:p,required:n,current:i,setCurrent:nn,isSpecificRadio:T}):B?t.jsx(Ae,{value:i,title:p,minValue:C,maxValue:O,minLength:N,maxLength:L,setValue:U=>Xe(U,o,a),type:r,isActive:je,inputAppearance:je,placeholder:b??p,required:n,mask:f,width:s,autocomplete:v}):null:B?t.jsx(io,{items:d,setSelected:U=>Eo(U,o,a),selected:i,isActive:je,title:p,width:s,multiple:r==="multiselect",required:n}):null},bm=u.div`
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
`,vm=({title:e,included:i,optional:n,confirmed:s,setOpenArea:o,setIncluded:a,collapsed:r,openArea:c})=>t.jsxs(bm,{onClick:()=>!r&&(i||!n)&&o(d=>!d),children:[t.jsxs("div",{className:"title-and-icon",children:[t.jsx(z,{size:3,align:"left",icon:s!==void 0?s?t.jsx(Fa,{}):t.jsx(Ma,{}):void 0,iconColor:s?"var(--green)":"var(--red)",children:e}),n&&t.jsx(Be,{checked:i,setChecked:a})]}),t.jsx(y,{icon:t.jsx(Ze,{}),onClick:()=>null,background:"transparent",flipped:c})]}),ym=({confirmed:e,changeInputArea:i,setData:n,setChangeInputArea:s,handleConfirm:o})=>e?t.jsx(y,{onClick:()=>{n(a=>(a.confirmed=!1,{...a})),s(!0)},text:"Изменить",icon:t.jsx(Ao,{}),textColor:j.blue.main,hoverBackground:j.blue.transparent3,background:"transparent",width:"130px"}):i?t.jsxs(t.Fragment,{children:[t.jsx(y,{onClick:o,text:"Сохранить",icon:t.jsx(xu,{}),textColor:j.blue.main,hoverBackground:j.blue.transparent3,background:"transparent",width:"130px"}),t.jsx(y,{onClick:()=>s(!1),text:"Отменить",icon:t.jsx(Ft,{}),textColor:j.red.main,hoverBackground:j.red.transparent3,background:"transparent",width:"130px"})]}):t.jsxs(t.Fragment,{children:[t.jsx(y,{onClick:o,text:"Подтвердить",icon:t.jsx(gu,{}),textColor:j.green.main,hoverBackground:j.green.transparent3,background:"transparent",width:"130px"}),t.jsx(y,{onClick:()=>s(!0),text:"Изменить",icon:t.jsx(Ao,{}),textColor:j.blue.main,hoverBackground:j.blue.transparent3,background:"transparent",width:"130px"})]}),wm=e=>e.confirmed===void 0?null:t.jsx(_e,{direction:"horizontal",horizontalAlign:"right",children:t.jsx(ym,{...e,confirmed:e.confirmed})}),Dt=({title:e,hint:i,alert:n,data:s,optionalCheckbox:o,documents:a,setData:r,confirmed:c,optional:d=!1,addNew:p=!1,divider:h,collapsed:g,links:x,specialFieldsNameConfig:f,defaultOpenArea:m=!0})=>{const{openArea:b,changeInputArea:v,included:T,setOpenArea:k,setIncluded:_,setChangeInputArea:C,handleRemove:O,handleAddNew:N,handleLoadFiles:L,handleConfirm:se,handleCheckbox:B}=Vf({documents:a,optionalCheckbox:o,data:s.filter(Boolean),setData:r,optional:d,collapsed:g,confirmed:c,defaultOpenArea:m});return t.jsxs(t.Fragment,{children:[t.jsxs(Yf,{openArea:b,children:[t.jsx(vm,{title:e,included:T,optional:d,confirmed:c,setOpenArea:k,setIncluded:_,collapsed:g}),t.jsxs("div",{className:"inputs",children:[t.jsx(X,{type:"alert",visible:!!n,icon:t.jsx(Ni,{}),children:n}),t.jsx(X,{type:"info",visible:!!i&&(v||c===void 0),title:"Как заполнить",icon:t.jsx(ot,{}),children:i}),Array.isArray(s[0])?s.map((Y,ue)=>t.jsxs("div",{className:"data-line",children:[Y.map((Re,Ne)=>t.jsx(Qo,{documents:a,changeInputArea:v&&!(o!=null&&o.value),setData:r,indexI:ue,indexJ:Ne,specialFieldsNameConfig:f,...Re},Ne)),v&&p&&t.jsx(y,{icon:t.jsx(fu,{}),textColor:j.red.main,onClick:()=>O(ue),background:"transparent",isActive:!(o!=null&&o.value)})]},ue)):s.map((Y,ue)=>t.jsx(Qo,{documents:a,changeInputArea:v&&!(o!=null&&o.value),setData:r,indexI:ue,specialFieldsNameConfig:f,...Y},ue)),p&&v&&t.jsx(y,{icon:t.jsx(mu,{}),text:"Добавить",onClick:N,background:"transparent",isActive:!(o!=null&&o.value)}),!!a&&v&&a.visible!==!1&&t.jsx(to,{files:a.files,setFiles:Y=>L(Y),maxFileSizeInMegaBytes:a.maxFileSizeInMegaBytes,maxFiles:a.maxFiles,formats:a.allowedTypes,isActive:a.checkboxCondition?a.checkboxCondition==="straight"?!!(o!=null&&o.value):!(o!=null&&o.value):!0}),(x==null?void 0:x.length)&&x.map(Y=>l.createElement(Qg,{...Y,key:Y.title})),t.jsx(Be,{visible:!!o&&(o.visible??!0),text:o==null?void 0:o.title,isActive:(o==null?void 0:o.editable)||v,checked:(o==null?void 0:o.value)??!1,setChecked:B}),t.jsx(wm,{confirmed:c,changeInputArea:v,setData:r,setChangeInputArea:C,handleConfirm:se})]})]}),h&&t.jsx(me,{})]})},jm=u.div`
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
`,_m=u.div`
    display: flex;
    margin-bottom: -20px;
`,km=u.div`
    width: ${({lastElement:e})=>e?"42px":"100%"};
    display: flex;
    align-items: center;
`,Kr=({stagesConfig:e})=>{const[i,n]=l.useState(0),[s,o]=l.useState({});l.useEffect(()=>{a(0)},[]);const a=r=>{o(c=>({...c,[i]:ve(e[i][0].dataForm)})),n(r)};return t.jsxs(t.Fragment,{children:[t.jsx(_m,{children:e.map((r,c)=>t.jsxs(km,{lastElement:c===e.length-1,children:[t.jsx(jm,{current:c===i,onClick:()=>a(c),reached:s[c],children:c+1}),c!==e.length-1&&t.jsx(Sf,{direction:"horizontal",reached:s[c],filled:100,distance:40})]},c))}),t.jsx(t.Fragment,{children:e[i].map((r,c)=>l.createElement(Dt,{...r.dataForm,setData:r.setDataForm,key:c}))})]})},Sm=()=>({title:"Дополнительно",data:[{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),Tm=()=>({title:"Период предоставления льготы",hint:"Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа",data:[{title:"Начало периода соответствия льготной категории",type:"date",value:"",fieldName:"beginning_of_benefit_period",editable:!0,required:!0},{title:"Окончание периода соответствия льготной категории",type:"date",value:"",fieldName:"end_of_benefit_period",editable:!0,required:!0},{title:"Отсутствует срок действия документа (бессрочный)",type:"checkbox",value:"",fieldName:"is_indefinite",editable:!0,required:!1}],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Cm=()=>({title:"Адрес регистрации",data:[],hint:"Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.",documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:1,allowedTypes:["application/pdf"]}}),Em=e=>({...e.data.reduce((s,o)=>{var a;if(!o.value)return s;if(o.type==="checkbox-docs"){const r=(a=o.items)==null?void 0:a.reduce((c,d)=>{for(let p=0;p<d.files.length;p++)c[(d==null?void 0:d.fieldName)+`[${p}]`]=d.files[p];return c},{});s=Object.assign({},s,r)}else if(o.type==="select")s[o.fieldName]=o.isSpecificSelect?o.value.id:o.value.title||null;else{const r=!o.value||typeof o.value!="object";s[o.fieldName]=r?o==null?void 0:o.value:o.value.title}return s},{}),...(()=>{var o,a;const s={};if((o=e.documents)!=null&&o.fieldName)for(let r=0;r<e.documents.files.length;r++)s[((a=e.documents)==null?void 0:a.fieldName)+`[${r}]`]=e.documents.files[r];return s})()}),Bn=async(e,i,n,s,o=!1)=>{n(!0);const a=i.map(p=>{if(o)return Em(p);if(Array.isArray(p.data[0])){const h=p.data.map(x=>Object.assign({},...x==null?void 0:x.map(f=>qo(f)))),g={};return g[e]=JSON.stringify(h),g}else return p.data.map(h=>qo(h))}).flat(),r=i.map(p=>{var g,x;const h={};if((g=p.documents)!=null&&g.fieldName)for(let f=0;f<p.documents.files.length;f++)h[((x=p.documents)==null?void 0:x.fieldName)+`[${f}]`]=p.documents.files[f];return h}),c=i.map(p=>{var g,x;const h={};return(g=p.optionalCheckbox)!=null&&g.fieldName&&(h[(x=p.optionalCheckbox)==null?void 0:x.fieldName]=p.optionalCheckbox.value),h}),d=Object.assign({},...a,...r,...c);try{await st.postApplicationFx({formId:e,args:d}),n(!1),s(!0)}catch{n(!1)}},qo=e=>{var n;const i={};return i[(e==null?void 0:e.fieldName)??""]=Pm(e),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify((e==null?void 0:e.value).map(s=>s.title))),e.type==="checkbox-docs"?(n=e.items)==null?void 0:n.reduce((s,o)=>{for(let a=0;a<o.files.length;a++)s[(o==null?void 0:o.fieldName)+`[${a}]`]=o.files[a];return s},{}):i},Pm=e=>!e.value||typeof e.value!="object"?e==null?void 0:e.value:e.value.title,Hn=u.div`
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
`;var Ui=(e=>(e.USG_GETHOSTEL_O="usg_gethostel_o",e.USG_GETHOSTEL_OOZ="usg_gethostel_ooz",e.USG_GETHOSTEL_Z="usg_gethostel_z",e.USG_GETHOSTEL_AO="usg_gethostel_ao",e.USG_GETHOSTEL_BENEFIT="usg_gethostel_benefit",e.USG_GETHOSTEL_FAMILY="usg_gethostel_family",e.USG_CONTR_TERMINATION="usg_contr_termination",e.USG_RELOCATION_INNER="usg_relocation_inner",e.USG_RELOCATION="usg_relocation",e.ACCOMMODATION_FOR_GRADUATES="accommodation_for_graduates",e.OBUCH="obuch",e.STATUS_SOBES="status_sobes",e.SPRVIZOV="sprvizov",e.PERS_DATA="pers_data",e.PROPUSK_RESTORE="propusk_restore",e.PASSPORT_DATA="passport_data",e.DIPL_OTL="dipl_otl",e.STATUS_REGULAR="status_regular",e.OKID_LICAKKRED="okid_licakkred",e.MILDOCS="mildocs",e.MIL_REG="mil_reg",e.VOEN_UCH="voen_uch",e.PR_DONATE="pr_donate",e.PR_MATPOM="pr_matpom",e.PR_SOCSTIP="pr_socstip",e.HIGH_SCHOLARSHIP="high_scholarship",e.DOP_SOGL="dop_sogl",e.SEND_PAYMENT_EDU="send_payment_edu",e.FREE_REQUEST="free_request",e.CRS_VACATIONS="crs_vacations",e.CRS_ACADEMVAC="crs_academvac",e.CRS_EXTACADEMVAC="crs_extacademvac",e.CRS_EXPULSION="crs_expulsion",e.CRS_ATTESTAT="crs_attestat",e.MEDICAL_CERT="postRequestMedicalCertificate",e.STUD_EMPLOYMENT="stud_employment",e.WORK_TRANSFER="",e.EXTRA_HOLIDAY_COLL="",e.HOLIDAY_PLANNING="",e.HOLIDAY_WORK="",e.DISMISSAL="",e.HOLIDAY_POSTPONED="",e.PART_TIME_EMPLOYMENT="",e))(Ui||{}),$m=(e=>(e.EDIT_PHONEBOOK_SUBDIVISION="edit-phonebook-subdivision",e.EDIT_PHONEBOOK_INNER_PHONE="edit-phonebook-inner-phone",e.EDIT_PHONEBOOK_EMAIL="edit-phonebook-email",e.CONTACT_INFO_ACTUALIZATION="contact-info-actualization",e.DATA_VERIFICATION_ROUTE="data-verification",e.ISSUANCE_OF_LICENSES="issuance-of-licenses",e.GETTING_COMPUTER_EQUIPMENT="getting-computer-equipment",e.CONNECTING_COMPUTER="connecting-computer",e.PRINTER_MAINTENANCE="printer-maintenance",e.QUESTION_SED="question-sed",e.QUESTION_PERSONAL_ACCOUNT="question-personal-account",e.OTHER_IT_SERVICES="other-it-services",e.CERTIFICATE_FROM_PLACE_OF_WORK="certificate-from-the-place-of-work",e.VISA_CERTIFICATE="visa-certificate",e.CERTIFICATE_OF_WORK_EXPERIENCE="certificate-of-work-experience",e.NUMBER_OF_UNUSED_VACATION_DAYS="number-of-unused-vacation-days",e.COPY_OF_EMPLOYMENT_RECORD="copy-of-the-employment-record",e.COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE="copies-of-documents-from-the-personal-file",e.WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY="work-on-the-terms-of-external-concurrency",e.CERTIFICATE_TIME_PARENTAL_LEAVE="certificate-time-parental-leave",e.COURIER="courier",e.PERSONA_INCOME_TAX_REFERENCE="persona-income-tax-reference",e.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE="payment-of-child-birth-allowance",e.PAYMENT_FOR_CHILD_CARE="payment-for-child-care",e.LIVING_IN_RESIDENTIAL_PREMISES="living-in-residential-premises",e.GUESTS_ACCOMODATION_ON_CAMPUS="guests-accomodation-on-campus",e.GUESTS_PASSAGE_TO_CAMPUS="guests-passage-to-campus",e.RELOCATION="relocation",e.TERMINATION_OF_AGREEMENT="termination-of-agreement",e.ISSUANCE_OF_PASS="issuance-of-pass",e.GUEST_PASS="guest-pass",e.CERTIFICATION_AND_ISSUANCE_OF_DOCS="certification-and-issuance-of-documents",e.DEFERMENT_FROM_CONSCRIPTION="deferment-from-conscription",e.CERTIFIED_COPIES_OF_MILITARY_DOCS="certified-copies-of-military-docs",e))($m||{});const Am=[{id:0,title:"1 общежитие"},{id:1,title:"2 общежитие"},{id:2,title:"3 общежитие"},{id:3,title:"4 общежитие"},{id:4,title:"5 общежитие"},{id:5,title:"6 общежитие"},{id:6,title:"7 общежитие"},{id:7,title:"8 общежитие"},{id:8,title:"9 общежитие"},{id:9,title:"10 общежитие"}],Nm=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],Dm=e=>{const{surname:i,name:n,patronymic:s,group:o,email:a,phone:r}=e;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:i+" "+n+" "+s,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:a,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:Nm},{title:"Приоритетное общежитие",fieldName:"priority_hostel",value:null,type:"select",width:"100%",editable:!0,required:!0,items:Am}]}},Om=()=>{var B;const[e,i]=l.useState(null),[n,s]=l.useState(sn.kvdCert),[o,a]=l.useState(sn.fluorographyCert),[r,c]=l.useState(sn.vichRwCert),[d,p]=l.useState(sn.graftCert),{data:{dataUserApplication:h}}=Pe.useApplications(),{data:{user:g}}=be.useUser(),[x,f]=l.useState(!1),[m,b]=l.useState(!1),[v,T]=l.useState(null),[k,_]=l.useState(null),[C,O]=l.useState(null),N=x??!1;if((g==null?void 0:g.educationForm)!=="Недоступен")return t.jsx(ge,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});const L=!!e&&!!k&&!!v&&!!C;if(l.useEffect(()=>{h&&(i(Dm(h)),T(Tm()),_(Cm()),O(Sm()))},[h]),!L)return null;const se=[[{dataForm:e,setDataForm:i}],[{dataForm:k,setDataForm:_}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:p}]];return t.jsx(Hn,{isDone:N,children:t.jsxs(Rn,{children:[t.jsx(z,{size:4,align:"left",children:"Предоставление права проживания (очно-заочная форма)"}),t.jsx(Kr,{stagesConfig:se}),t.jsx(Me,{text:"Отправить",action:()=>Bn(Ui.USG_GETHOSTEL_OOZ,[e,k,v,C,n,o,r,d],b,f),isLoading:m,completed:x,setCompleted:f,repeatable:!1,buttonSuccessText:"Отправлено",isDone:N,isActive:(((B=e.optionalCheckbox)==null?void 0:B.value)??!0)&&ve(e)&&ve(o)&&ve(r)&&ve(d)&&ve(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Im=[{id:0,title:"Холост"},{id:1,title:"Женат"},{id:2,title:"Замужем"},{id:3,title:"Не замужем"}],Lm=[{id:0,title:"Мать"},{id:1,title:"Отец"},{id:2,title:"Жена"},{id:3,title:"Муж"},{id:2,title:"Ребенок"}],Rm=[{id:0,title:"Военнослужащий"},{id:1,title:"Военнообязанный"},{id:2,title:"Невоеннообязанный"},{id:3,title:"Призывник"}],zm=[{id:0,title:"Адмирал"},{id:1,title:"Адмирал флота"},{id:2,title:"Вице-адмирал"},{id:3,title:"Генерал армии"},{id:4,title:"Генерал-лейтенант"},{id:5,title:"Генерал-майор"},{id:6,title:"Генерал-полковник"},{id:7,title:"Главный корабельный старшина"},{id:8,title:"Главный старшина"},{id:9,title:"Ефрейтор"},{id:10,title:"Капитан"},{id:11,title:"Капитан 1 ранга"},{id:12,title:"Капитан 2 ранга"},{id:13,title:"Капитан 3 ранга"},{id:14,title:"Капитан юстиции"},{id:15,title:"Капитан-лейтенант"},{id:16,title:"Контр-адмирал"},{id:17,title:"Лейтенант"},{id:18,title:"Майор"},{id:19,title:"Маршал Российской Федерации"},{id:20,title:"Матрос"},{id:21,title:"Мичман"},{id:22,title:"Младший лейтенант"},{id:23,title:"Младший сержант"},{id:24,title:"Подполковник"},{id:25,title:"Полковник"},{id:26,title:"Прапорщик"},{id:27,title:"Рядовой"},{id:28,title:"Сержант"},{id:29,title:"Старший лейтенант"},{id:30,title:"Старший матрос"},{id:31,title:"Старший мичман"},{id:32,title:"Старший прапорщик"},{id:33,title:"Старший сержант"},{id:34,title:"Старшина"},{id:35,title:"Старшина 1 статьи"},{id:36,title:"Старшина 2 статьи"}],Fm=[{id:0,title:"Ветеринарный"},{id:1,title:"Военно-гуманитарный"},{id:2,title:"Высшие офицеры"},{id:3,title:"Инженерно-технический"},{id:4,title:"Командный"},{id:5,title:"Медицинский"},{id:6,title:"Младшие офицеры"},{id:7,title:"Педагогический"},{id:8,title:"Прапорщики и мичманы"},{id:9,title:"Сержанты"},{id:10,title:"Солдаты"},{id:11,title:"Солдаты, матросы, сержанты, старшины"},{id:12,title:"Старшие офицеры"},{id:13,title:"Юридический"}],Mm=[{id:0,title:"1"},{id:1,title:"2"}],Bm=[{id:0,title:"А - годен к военной службе"},{id:1,title:"Б - годен к военной службе с незначительными ограничениями"},{id:2,title:"В - ограниченно годен к военной службе"},{id:3,title:"Г - временно не годен к военной службе"},{id:4,title:"Д - не годен к военной службе"}],Hm=[{id:0,title:"Военный билет офицера запаса"},{id:1,title:"Военный билет солдата (матроса, сержанта, старшины)"},{id:2,title:"Временное удостоверение, выданное взамен военного билета"},{id:3,title:"Временное удостоверение, выданное взамен военного билета офицера запасам"},{id:4,title:"Персональная электронная карта"},{id:5,title:"Справка взамен военного билета"},{id:6,title:"Удостоверение гражданина, подлежащего призыву на военную службу"},{id:7,title:"Удостоверение личности военнослужащего Российской Федерации"},{id:8,title:"Удостоверение личности офицера"}],Wm=[{id:0,title:"A (мотоциклы)"},{id:1,title:"B (легковые автомобили)"},{id:2,title:"C (грузовые автомобили)"},{id:3,title:"D (автобусы)"},{id:4,title:"M (мопеды)"},{id:5,title:"Tb (троллейбусы)"},{id:6,title:"Tm (трамваи)"}],Um=e=>({title:"Персональные данные",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",value:e.phone,required:!0},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Фамилия",type:"text",fieldName:"surname",value:e.surname,editable:!0,required:!0},{title:"Имя",type:"text",fieldName:"name",value:e.name,editable:!0,required:!0},{title:"Отчество",type:"text",fieldName:"patronimyc",value:e.patronymic,editable:!0,required:!0}]}),Gm=()=>({title:"Семейное положение",data:[{title:"Состояние в браке",value:null,fieldName:"maritalStatus",type:"select",items:Im,width:"100%",editable:!0,required:!0}]}),Vm=()=>({title:"Состав семьи",data:[],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:Lm,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:!1,required:!0}}),Ym=()=>({title:"Сведения воинского учета",data:[{fieldName:"militaryObligationCategory",title:"Отношение к воинской обязанности",value:null,type:"select",items:Rm,width:"100%",required:!0},{fieldName:"military id details",title:"Данные военного билета",type:"text-header",visible:!0,value:"Данные военного билета"},{fieldName:"militaryRank",title:"Воинское звание",value:null,type:"select",items:zm,width:"100%",required:!0},{fieldName:"specialization",title:"Состав (профиль)",value:null,type:"select",items:Fm,width:"100%",required:!0},{fieldName:"reserveCategory",title:"Категория запаса",value:null,type:"select",items:Mm,width:"100%",required:!0},{fieldName:"moc",title:"ВУС",value:"",required:!0,width:"40%"},{fieldName:"militaryServiceFitness",title:"Годность к воинской службе",value:null,type:"select",items:Bm,width:"100%",required:!0},{fieldName:"militaryEnlistmentOffice",title:"Военкомат",value:"",width:"40%",required:!0}]}),Qm=()=>({title:"Документ воинского учета",data:[{fieldName:"documentType",title:"Вид документа",value:null,type:"select",items:Hm,width:"100%",required:!0,editable:!0},{fieldName:"series",title:"Серия",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"number",title:"Номер",value:"",required:!0,editable:!0,width:"40%"},{fieldName:"issuedBy",title:"Кем выдан",value:"",width:"100%",required:!0,editable:!0},{fieldName:"dateOfIssue",title:"Дата выдачи",value:"",type:"date",required:!0,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Документ воинского учета",required:!0,maxFiles:1,allowedTypes:["application/pdf"]}}),Xo=e=>{var n,s,o,a,r,c,d;const i=e&&((s=(n=e[0])==null?void 0:n.value)==null?void 0:s.id)!==0||!1;return{title:"Данные водительского удостоверения",data:[{fieldName:"driversDocumentType",title:"Вид документа",value:(e&&((o=e[0])==null?void 0:o.value))??{id:0,title:"Не выбрано"},type:"select",items:[{id:0,title:"Не выбрано"},{id:1,title:"Водительское удостоверение"}],width:"100%",required:!1,editable:!0},{fieldName:"driversSeries",title:"Серия",value:(e&&((a=e[1])==null?void 0:a.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"driversSumber",title:"Номер",value:(e&&((r=e[2])==null?void 0:r.value))??"",required:i,visible:i,editable:!0,width:"40%"},{fieldName:"vehicleCategory",title:"Категория ТС",value:(e&&((c=e[3])==null?void 0:c.value))??null,type:"select",items:Wm,width:"100%",required:i,visible:i,editable:!0},{fieldName:"driversDateOfIssue",title:"Дата выдачи",value:(e&&((d=e[4])==null?void 0:d.value))??"",type:"date",required:i,visible:i,editable:!0,width:"30%"}],documents:{files:[],fieldName:"Водительское удостоверение",required:i,visible:i,maxFiles:1,allowedTypes:["application/pdf"]}}},Jr=()=>{var O;const[e,i]=l.useState(null),[n,s]=l.useState(Gm()),[o,a]=l.useState(Vm()),[r,c]=l.useState(Ym()),[d,p]=l.useState(Qm()),[h,g]=l.useState(Xo(null)),[x,f]=l.useState(!1),[m,b]=l.useState(!1),[v,T]=l.useState(!1),{data:{dataUserApplication:k}}=Pe.useApplications();l.useEffect(()=>{k&&i(Um(k))},[k]);const _=l.useMemo(()=>{var N,L;return((L=(N=h==null?void 0:h.data[0])==null?void 0:N.value)==null?void 0:L.id)!==0},[(O=h==null?void 0:h.data[0])==null?void 0:O.value]);if(l.useEffect(()=>{h&&g(Xo(h.data))},[_]),!e)return null;const C=[[{dataForm:e,setDataForm:i}],[{dataForm:n,setDataForm:s}],[{dataForm:o,setDataForm:a}],[{dataForm:r,setDataForm:c}],[{dataForm:d,setDataForm:p}],[{dataForm:h,setDataForm:g}]];return t.jsx(Hn,{isDone:!1,children:t.jsxs(Rn,{children:[t.jsx(z,{size:3,align:"left",children:"Воинский учет"}),t.jsx(Kr,{stagesConfig:C}),t.jsx(Be,{checked:x,setChecked:f,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(Me,{text:m?"Отправлено":"Отправить",action:()=>Bn(Ui.MIL_REG,[e,n,o,r,d,h],T,b),isLoading:v,completed:m,setCompleted:b,repeatable:!1,buttonSuccessText:"Отправлено",isDone:m,isActive:!!x&&!!e&&!!n&&!!r&&!!d&&!!h&&!!o&&ve(e)&&ve(n)&&ve(r)&&ve(d)&&ve(h)&&ve(o),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},qm=Object.freeze(Object.defineProperty({__proto__:null,default:Jr},Symbol.toStringTag,{value:"Module"})),Xm=[{id:0,title:"заключение врачебной комиссии медицинской организации"},{id:1,title:"копия военного билета с отметками о прохождении военной службы"}],Km=e=>({title:"Выход из академического отпуска",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Дата выхода из академического отпуска:",type:"date",fieldName:"time-exit",value:"",editable:!0,required:!0},{fieldName:"",title:"Приказ о предоставлении академического отпуска:",type:"text-header",visible:!0,value:"Данные военного билета"},{title:"от:",type:"date",fieldName:"order-time",value:"",editable:!0,required:!0},{title:"№:",fieldName:"order-number",type:"text",value:null,editable:!0,required:!0},{title:"Приложения:",type:"select",fieldName:"attachments",width:"100",value:null,required:!0,editable:!0,items:Xm},{title:"от:",type:"date",fieldName:"medical-report-time",value:"",specialType:"medicalReport",editable:!0,required:!0},{title:"№:",type:"text",fieldName:"medical-report-number",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Количество листов подтверждающих документов:",type:"text",fieldName:"num_sheets",value:null,specialType:"medicalReport",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!0}}),Jm=e=>{const i=e.find(s=>s.fieldName==="attachments");let n=null;return i!=null&&i.value&&(i==null?void 0:i.value).title==="заключение врачебной комиссии медицинской организации"&&(n="medicalReport"),{reason_academic:n}},Zr=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(!1),[o,a]=l.useState(!1),[r,c]=l.useState({}),d=n??!1,{data:{dataUserApplication:p}}=Pe.useApplications();return l.useEffect(()=>{p&&i(Km(p))},[p]),l.useEffect(()=>{e&&p&&c(Jm(e.data))},[e]),t.jsx(Hn,{isDone:d,children:!!e&&!!i&&t.jsxs(Rn,{children:[t.jsx(Dt,{...e,collapsed:d,setData:i,specialFieldsNameConfig:r}),t.jsx(Me,{text:d?"Отправлено":"Отправить",action:()=>Bn(Ui.CRS_EXTACADEMVAC,[e],a,s),isLoading:o,completed:n,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:d,isActive:ve(e,r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},Zm=Object.freeze(Object.defineProperty({__proto__:null,default:Zr},Symbol.toStringTag,{value:"Module"})),Se=({oldVersionUrl:e,errorText:i="Страница еще находится в разработке. Если вам она нужна, вернитесь к старому дизайну",buttonText:n="Перейти к старому дизайну",forceForward:s=!1,isRedirectButtonVisible:o=!0})=>(l.useEffect(()=>{s&&(window.location.href=`/old/?p=${e==null?void 0:e.slice(1,e.length)}`)},[]),t.jsx(ge,{text:i,children:o&&t.jsx("a",{href:`${R}/?p=${e==null?void 0:e.slice(1,e.length)}`,children:t.jsx(y,{text:n,icon:t.jsx($n,{}),width:"100%",background:"var(--reallyBlue)",textColor:"#fff",align:"left",padding:"10px"})})})),e0=(e,i,n)=>{if(!e)return null;const s=e.dormitory.map(o=>o.id===i?{...o,can_sign:n}:o);return{...e,dormitory:s}},el=E(),tl=E(),il=E(),si=F(async()=>{const e=await jx();if(!e.data.contracts.education&&!e.data.contracts.dormitory)throw new Error("У вас нет данных по оплате");try{return e.data.contracts}catch{throw new Error("Не удалось загрузить оплату")}}),no=F(async e=>{try{return await kx(e),e}catch(i){throw new Error("Не удалось подписать конкракт. Причина: "+i)}}),Gi=F(async e=>{const i=await _x(e);if(!i.data.contracts.education&&!i.data.contracts.dormitory)throw new Error});S({clock:Gi.doneData,fn:()=>({message:"Успешно подписано",type:"success"}),target:G.evokePopUpMessage});S({clock:Gi.doneData,fn:()=>!0,target:tl});S({clock:Gi.failData,fn:()=>({message:"У вас нет данных по оплате",type:"failure"}),target:G.evokePopUpMessage});S({clock:el,target:Gi});const nl=E(),t0=lt(Gi.pending,si.pending,Boolean),i0=V(!1).on(il,(e,i)=>i),n0=V(!1).on(tl,(e,i)=>i),s0=V(null).on(si,()=>null).on(si.failData,(e,i)=>i.message).on(no.failData,(e,i)=>i.message),o0=V(null).on(si.doneData,(e,i)=>i).on(no.doneData,(e,i)=>e0(e,i,!1)).on(ae.userGuid,()=>null),Rt={$loading:t0,$completed:i0,$done:n0,$error:s0,$paymentsStore:o0};at({from:nl,to:si});const sl={getPaymentsFx:si,signContractFx:no},Ko={signAgreement:el,setCompleted:il,getPayments:nl},Jo=(e,i)=>{const n=e.split("/");return i[e.slice(1,e.length)]??Object.values(i).find(s=>{var a;const o=s.path.split("/");for(let r=0;r<n.length;r++)if(o[r]!==n[r]&&((a=o[r])==null?void 0:a[0])!==":")return!1;return!0})},ol=()=>{const e=dt(),{allRoutes:i}=Ye.useMenu(),n=Yt(),s=i??{},[o,a]=l.useState(Jo(e.location.pathname,s));return l.useEffect(()=>{a(Jo(n.pathname,s))},[n,s]),o},a0={small:"600px",middle:"700px",big:"963px",large:"100%"},al=e=>a0[(e==null?void 0:e.pageSize)??"middle"],r0=u(ut)`
    position: relative;

    ${W.isNotMobile} {
        padding-top: ${({titleLen:e})=>e===0?"20px":e<60?"70px":"140px"};
    }

    ${W.isMobile} {
        padding-top: ${({hasCenterEl:e})=>e?"90px":"45px"};
    }
`,l0=u.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    ${W.isMobile} {
        top: -4px;
        right: 7px;
    }
`,c0=u.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-end;

    ${W.isMobile} {
        top: 40px;
    }
`,ht=l.forwardRef(({children:e,topRightCornerElement:i,topCenterElement:n,padding:s},o)=>{var c;const a=ol(),r=al(a);return t.jsx(Ki,{padding:"0 0 10px 0",children:t.jsxs(r0,{hasCenterEl:!!n,titleLen:((c=a==null?void 0:a.subPageHeaderTitle)==null?void 0:c.length)??(a==null?void 0:a.title.length)??0,justifyContent:"flex-start",height:"100%",orientation:"vertical",maxWidth:r,gap:"24px",ref:o,alignItems:"flex-start",noAppearanceInMobile:!0,padding:s,children:[i&&t.jsx(l0,{children:i}),n&&t.jsx(c0,{children:n}),e]})})});ht.displayName="PageBlock";const d0=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`,p0=u.div`
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
`,xt=({children:e,color:i,borderRadius:n,badge:s,size:o=38})=>{const a=s?isNaN(+s)?!0:+s>0:!1;return t.jsxs(p0,{borderRadius:n,backgroud:i,size:o,className:"icon",children:[t.jsx(Wt,{outline:"4px solid var(--block)",color:"red",top:"93%",left:"93%",visible:a,className:"notification-circle",children:s}),e]})},ls={data:null,preparedData:null,loading:!1,error:null},u0=({initialStore:e,api:i,prepareData:n,errorMessage:s=()=>Kh})=>{const o=e??ls,a=()=>({data:ce(p).data,preparedData:ce(p).preparedData,loading:ce(r.pending),error:ce(p).error}),r=F(async h=>{try{const g=await i.get(h);return{data:g,preparedData:n?n(g):g}}catch(g){throw new Error(s(g))}}),c=F(async h=>{var g;try{const x=await((g=i.post)==null?void 0:g.call(i,h));return{data:x,preparedData:n?n(x):x}}catch(x){throw new Error(s(x))}}),d=E(),p=V(o).on(r,h=>({...h,error:null})).on(c.pending,h=>({...h,loading:!0})).on(c.failData,(h,{message:g})=>({...h,error:g,loading:!1})).on(c.doneData,h=>({...h,error:null,loading:!1})).on(r.doneData,(h,{data:g,preparedData:x})=>({...h,data:g,preparedData:x})).on(r.failData,(h,g)=>({...h,error:g.message})).on(d,()=>({...ls})).on(ae.userGuid,()=>({...ls}));return{selectors:{useData:a},effects:{getFx:r,postFx:c},events:{clearStore:d},store:p}},qe=u0({api:{get:Ox}}),Wn=E(),Ii=E(),h0=lt(de.userSettings,e=>Array.from(new Set([...lr,...(e==null?void 0:e.homePage.pages)??[]])));S({clock:Wn,source:de.userSettings,filter:e=>!!e,fn:(e,{pageId:i})=>({homePage:{...e.homePage,pages:[...e.homePage.pages,i]}}),target:Ce.update});S({clock:Ii,source:de.userSettings,filter:e=>!!e,fn:(e,{pageId:i})=>({homePage:{...e.homePage,pages:e.homePage.pages.filter(n=>n!==i)}}),target:Ce.update});const Un=E(),vn=E(),oi=lt(ae.user,qe.store,({currentUser:e},{data:i})=>{if((e==null?void 0:e.status)==="")return Ms;const n=Bs;return Object.values(i??{}).some(s=>s.length)?[...n,"download-agreements"]:n}),so=lt(oi,de.userSettings,(e,i)=>Array.from(new Set([...e,...(i==null?void 0:i.customizeMenu.pages)||[]])));S({clock:Un,source:so,filter:e=>e.length>=rr,fn:()=>({message:"Вы достигли максимального количества страниц в боковом меню",type:"failure",time:3e3}),target:G.evokePopUpMessage});S({clock:Un,source:{settings:de.userSettings,sidebarItems:so,requiredSidebarItems:oi},filter:({settings:e,sidebarItems:i,requiredSidebarItems:n},{pageId:s})=>!!e&&i.length<rr&&!n.includes(s),fn:({settings:e},{pageId:i})=>({customizeMenu:{...e.customizeMenu,pages:[...e.customizeMenu.pages,i]}}),target:Ce.update});S({clock:vn,source:{settings:de.userSettings,requiredSidebarItems:oi},filter:({settings:e,requiredSidebarItems:i},{pageId:n})=>!!e&&!i.includes(n),fn:({settings:e},{pageId:i})=>({customizeMenu:{...e.customizeMenu,pages:e.customizeMenu.pages.filter(n=>n!==i)}}),target:Ce.update});const x0=e=>{const{id:i,icon:n,title:s,color:o}=e,[a,r,c]=K([h0,so,oi]),d=a.includes(i),p=r.includes(i),h=c.includes(i),g=lr.includes(i),x=()=>{Wn({pageId:i}),Fe.close()},f=()=>{Un({pageId:i}),Fe.close()};return t.jsxs(g0,{children:[t.jsxs("div",{className:"top",children:[t.jsx(xt,{color:o,size:22,children:n}),t.jsx(f0,{children:s})]}),t.jsx(me,{}),!g&&(d?t.jsx(y,{text:"Убрать с главной",icon:t.jsx(Ft,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>{Ii({pageId:i}),Fe.close()}}):t.jsx(y,{text:"Добавить на главную",icon:t.jsx(Mt,{}),width:"100%",align:"left",background:"var(--block)",onClick:x})),!h&&(p?t.jsx(y,{text:"Убрать из меню",icon:t.jsx(Ft,{}),width:"100%",align:"left",background:"var(--block)",onClick:()=>{vn({pageId:i}),Fe.close()}}):t.jsx(y,{text:"Добавить в меню",icon:t.jsx(Mt,{}),width:"100%",align:"left",background:"var(--block)",onClick:f}))]})},g0=u.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`,f0=u.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`,rl=({route:e})=>{var s;const i=j[(s=e==null?void 0:e.color)!=null&&s.length?e.color:"blue"].main,n=o=>{o.preventDefault(),o.stopPropagation(),Fe.open({e:o,height:105,content:t.jsx(x0,{...e})})};return t.jsx(y,{icon:t.jsx(Ba,{}),textColor:i,className:"more-button",background:"transparent",onClick:n})},ll=(e,i)=>{if(e>=10&&e<=19)return i.fiveToNine;const n=e%10;return n===0?i.zero:n===1?i.one:n>=2&&n<=4?i.twoToFour:i.fiveToNine},cl=u(ut)`
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

    &[data-selected='true'] {
        .outside {
            .more-button {
                opacity: 1;
                visibility: visible;
            }
            .notification-circle {
                opacity: 0;
            }

            .icon {
                box-shadow: 0 20px 210px 60px ${({color:e})=>j[e].main};
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
`,m0=u.div`
    position: absolute;
    top: 12px;
    left: 12px;
    opacity: 0.7;
`,vs=e=>{const{color:i,shadow:n,notifications:s,title:o,isNew:a,icon:r,isExternalPage:c,isOldLkPage:d,mode:p,id:h,orientation:g="vertical"}=e,x=g==="vertical",f=K(de.userSettings);if(!f)return null;const m=f.homePage.pages.find(b=>b===h);return t.jsxs(cl,{padding:"0",width:"100%",maxWidth:"100%",height:x?"135px":"60px",isVertical:x,justifyContent:"center",shadow:n,color:i.length?i:"blue",hasNotifications:!!s,"data-selected":e.isActive,children:[(d||c)&&x&&t.jsxs(m0,{children:[d&&t.jsx($n,{title:"Раздел в старом ЛК"}),c&&t.jsx(xn,{title:"Раздел на внешнем ресурсе"})]}),t.jsxs("div",{className:"outside",children:[t.jsx(xt,{badge:s==null?void 0:s.toString(),color:i.length?i:"blue",children:r??t.jsx(bu,{})}),t.jsx("b",{title:o,children:o}),!!s&&t.jsxs("span",{className:"notifications-title",children:[s," ",ll(s,{one:"уведомление",zero:"уведомлений",twoToFour:"уведомления",fiveToNine:"уведомлений"})]})]}),p==="use"&&t.jsx(rl,{route:e}),p==="add"?m?t.jsx(y,{icon:t.jsx(rt,{}),width:"80px",align:"center",textColor:"var(--red)",background:"var(--block)",onClick:()=>Ii({pageId:h})}):t.jsx(y,{icon:t.jsx(Mt,{}),width:"80px",textColor:"var(--green)",align:"center",background:"var(--block)",onClick:()=>Wn({pageId:h})}):null,a&&t.jsx("span",{className:"new",children:"New"})]})},b0=u(cl)`
    box-shadow: none;
    color: var(--blue);
    background: transparent;
`,vE=()=>t.jsx(Z,{to:$i,onClick:()=>{Pt.changeOpen({isOpen:!1,currentPage:$i.slice(1,$i.length)})},children:t.jsx(b0,{padding:"0",width:"125px",height:"135px",isVertical:!0,justifyContent:"center",color:"blue",hasNotifications:!1,children:t.jsxs("div",{className:"outside",children:[t.jsx(xt,{color:"blue",children:t.jsx(vu,{})}),t.jsx("b",{children:"Все разделы"})]})})}),v0=u(Z)`
    width: ${({width:e})=>typeof e=="number"?`calc((700px / 5) * ${e} - ${e===2?22:15}px)`:e};
    border-radius: var(--brLight);

    @media (max-width: 500px) {
        width: ${({width:e})=>typeof e=="number"?`calc(33vw * ${e} - ${e===2?22:15}px)`:e};
    }
`,y0=u.div`
    width: ${({width:e})=>typeof e=="number"?`calc(125px * ${e} + ${(e-1)*10}px)`:e};
`,dl=e=>{const{close:i}=M(),{menuPath:n,path:s,orientation:o="vertical",mode:a="use"}=e,r=o==="vertical"?17:50,c=1;if(a==="add")return t.jsx(y0,{width:o==="vertical"?c:"100%",children:t.jsx(vs,{...e,mode:a,maxWordLength:r})});const d=()=>{i(),Pt.changeOpen({isOpen:!1,currentPage:s.slice(1,s.length)})};return t.jsx(v0,{to:n??s,onClick:d,width:o==="vertical"?c:"100%",children:t.jsx(vs,{...e,maxWordLength:r,mode:a})})},w0=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`,j0=({pages:e,showNotFound:i=!0})=>!e||!i&&Object.keys(e).length===0?null:!Object.keys(e).length&&i?t.jsx(ge,{text:"Ничего не было найдено"}):t.jsx(w0,{children:Object.values(e).map(n=>(n==null?void 0:n.show)!==!1&&l.createElement(dl,{...n,orientation:"horizontal",shadow:!1,key:n.id}))}),_0=u.div`
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
`,k0=({date:e,value:i})=>t.jsxs(_0,{children:[t.jsxs(P,{gap:"16px",children:[t.jsx(xt,{color:"grey",size:33,children:t.jsx(jt,{})}),t.jsxs(P,{d:"column",ai:"flex-start",children:[t.jsx("span",{className:"payment-item-date",children:"Платеж"}),t.jsx(te,{children:oe(e)})]})]}),t.jsxs("span",{className:"payment-item-money",children:["+",i," ",t.jsx(jt,{})," "]})]}),S0=u.div`
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
`,pl=({children:e,size:i,color:n,fontWeight:s})=>{const o=i==="small"?"1rem":i==="big"?"1.5rem":"1.2rem",a=i==="small"?"17px":i==="big"?"22px":"18px";return t.jsxs(S0,{color:n,fontSize:o,iconSize:a,fontWeight:s,children:[e,t.jsx(jt,{})]})},T0=e=>Number(e.replace(/,/g,".").replace(/\s/g,"")),C0=u.div`
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
`,E0=({payments:e})=>{const i=e==null?void 0:e.reduce((n,s)=>n+T0(s.value),0).toFixed(1);return t.jsxs(C0,{children:[t.jsxs(P,{jc:"space-between",children:[t.jsx(z,{icon:t.jsx(Ha,{}),size:4,align:"left",width:"fit-content",children:"Поступившие платежи"}),t.jsx(te,{fontSize:"1rem",width:"fit-content",children:t.jsx(pl,{size:"small",children:i})})]}),t.jsxs("div",{className:"payment-list",children:[!e.length&&t.jsx(ge,{size:"50px",text:"Нет платежей",image:t.jsx(Wa,{})}),e.map((n,s)=>l.createElement(k0,{...n,key:s}))]})]})},P0=u.div`
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
`,Ot=({keyStr:e,value:i,fontSize:n,visible:s=!0,direction:o="horizontal"})=>s?t.jsxs(P0,{direction:o,fontSize:n,children:[t.jsxs("strong",{children:[e,":"]}),t.jsx("span",{className:"value",children:i})]}):null,ul=()=>t.jsx(X,{type:"tip",lineHeight:"1.7rem",maxWidth:"700px",fontSize:"0.83rem",children:t.jsxs("p",{children:["По возникновении технических проблем при подписании договоров и дополнительных соглашений обращайтесь на почту ",t.jsx("a",{href:"mailto:info@mospolytech.ru",children:"info@mospolytech.ru"})]})}),$0=e=>e.replace(/\B(?=(\d{3})+(?!\d))/g," "),A0=u.div`
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
`,N0=({contract:e})=>{if(!e)return null;const{number:i,startDate:n,endDatePlan:s,contragent:o,sum:a,can_sign:r,file:c,student:d,signed_user_date:p}=e,{open:h}=M(),[g,x]=l.useState(!1),[f,m]=l.useState(!1),[b,v]=l.useState(!1),T=K(Rt.$error),k=[{text:"Номер договора",info:i??""},{text:"Начало действия",info:oe(n)},{text:"Действует до",info:oe(s)},{text:"Подписан",info:oe(p)},{text:"Заказчик",info:o||"Московский политех"},{text:"Обучающийся",info:d??""},{text:"Сумма к оплате",info:$0(a)??""},{text:"Статус",info:""}],_=()=>{navigator.clipboard.writeText((e==null?void 0:e.number)??""),x(!0)},C=()=>{e&&(m(!0),sl.signContractFx(e.id),m(!1),v(!0))},O=()=>{h(t.jsx(ul,{}),"Не получается подписать")};return t.jsxs(A0,{children:[t.jsx("div",{className:"contract-info",children:k.map(({info:N,text:L})=>t.jsx(Ot,{keyStr:L,value:N},N))}),r&&t.jsxs(P,{d:"column",gap:"8px",children:[t.jsx(Me,{text:"Подписать договор",buttonSuccessText:"Подписан",action:C,isLoading:f,completed:b,repeatable:!1,popUpFailureMessage:T??"Не удалось подписать договор",setCompleted:v,popUpSuccessMessage:"Договор подписан",isActive:!0,pulsing:!0}),t.jsx(y,{onClick:O,text:"Не получается подписать?",background:"transparent",textColor:j.grey.main})]}),!r&&t.jsxs(P,{gap:"8px",children:[t.jsx(Me,{text:"Скопировать номер договора",action:_,isLoading:!1,completed:g,setCompleted:x,popUpSuccessMessage:"Номер договора скопирован в буфер",isActive:!0}),c&&t.jsx(Hi,{onClick:()=>null,href:c??"",icon:t.jsx(Ns,{}),width:"45px"})]})]})},D0=u.div`
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
`,O0=({title:e,confirmed:i,setOpenArea:n})=>t.jsxs(D0,{onClick:()=>n(s=>!s),children:[t.jsxs("div",{className:"title-and-icon",children:[i?t.jsx(Fa,{style:{color:"var(--green)"}}):t.jsx(Ma,{style:{color:"var(--red)"}}),t.jsx("b",{children:e})]}),t.jsx(y,{icon:t.jsx(Ze,{}),onClick:()=>null,background:"transparent"})]}),I0=u.div`
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
`,L0=e=>{const{children:i,title:n,height:s,confirmed:o=!1,show:a=!1}=e,[r,c]=l.useState(a);return t.jsxs(I0,{height:s,open:r,children:[t.jsx(O0,{title:n,confirmed:o,setOpenArea:c}),t.jsx("div",{className:"inputs",children:i})]})},R0=u.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,z0=({data:e,isContractSigned:i})=>{const{id:n,signed_user:s,name:o,can_sign:a,date:r}=e,[c,d,p]=K([Rt.$done,Rt.$completed,Rt.$loading]),h=s||c?140:100,g=()=>Ko.signAgreement(n),x=Ko.setCompleted;return t.jsxs(L0,{height:h,title:o,confirmed:s||c,children:[t.jsxs(R0,{children:[t.jsxs(P,{d:"column",ai:"flex-start",gap:"4px",children:[t.jsx(z,{size:5,align:"left",children:o}),t.jsx(te,{children:oe(r)})]}),t.jsxs(P,{gap:"8px",w:"100%",jc:"flex-end",children:[t.jsx(Hi,{href:e.file,onClick:()=>null,width:"40px",icon:t.jsx(Ns,{}),isActive:!!e.file}),!(s||c)&&t.jsx(Me,{text:s||c?"Подписано":"Подписать",action:g,isLoading:p,completed:d,isDone:s||c,width:"160px",setCompleted:x,isActive:!(s||c)&&a,popUpFailureMessage:a?"Согласие уже подписано":i?"Необходимо сначала подписать соглашение об электронном взаимодейтсвии":"Необходимо сначала подписать договор",popUpSuccessMessage:"Согласие успешно подписано"}),t.jsx(X,{type:"success",title:"Подписано",icon:t.jsx(En,{}),align:"center",width:"130px",visible:s||c})]})]}),(c||s)&&t.jsxs(te,{children:["Дата подписания: ",oe(e.signed_user_date||new Date),","," ",e.signed_user_time||`${new Date().getHours()}:${new Date().getMinutes()}`]})]})},F0=({isDormitory:e,electronicAgreements:i=[],isContractSigned:n})=>t.jsxs(_e,{width:"100%",children:[t.jsx(z,{size:4,align:"left",icon:t.jsx(yu,{}),bottomGap:!0,children:"Доп. соглашения"}),t.jsx(ul,{}),t.jsx(X,{type:"info",title:"Информация",visible:!e,children:"Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено"}),i.map((s,o)=>t.jsx(z0,{data:s,isContractSigned:n},o))]}),M0=u.div`
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
`,on=({qrCode:e})=>{const[i,n]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>{n(!1)},500)},[]),t.jsx(M0,{children:t.jsx(Xs,{loading:i,width:"300px",height:"300px",src:e??""})})},B0=u.div`
    @media (min-width: 1001px) {
        width: 300px;
    }
`,H0=({qr_current:e,qr_total:i,currentPage:n})=>n===0?t.jsx(on,{qrCode:e}):n===1?t.jsx(on,{qrCode:i}):t.jsx(B0,{children:t.jsx(ss,{pages:[{title:"Текущая задолженность",content:t.jsx(on,{qrCode:e})},{title:"Общая задолженность",content:t.jsx(on,{qrCode:i})}],appearance:!1,currentPage:n})}),W0=({type:e="horizontal",...i})=>{const{open:n}=M(),s="Оплатить через QR-code",o=`linear-gradient(45deg, ${j.green.main}, ${j.green.dark1})`,a=()=>{n(t.jsx(H0,{...i}),s)};return e==="vertical"?t.jsx(y,{onClick:a,width:"68px",height:"60px",direction:"vertical",text:"QR",icon:t.jsx(wu,{}),textColor:"#fff",background:o}):t.jsx(y,{text:s,onClick:a,width:"100%",textColor:"#fff",background:o})},U0=({debt:e,size:i="big"})=>{const n=e>0?j.red.main:j.green.main;return t.jsx(pl,{size:i,color:n,fontWeight:"600",children:e>=0?e:`+${-e}`})},cs=e=>e.reduce((i,n)=>(i[n.title]=n.mql.matches,i),{}),Et=()=>{const e=sx.map(({query:s,title:o})=>({mql:matchMedia(s),title:o})),[i,n]=l.useState(cs(e));return l.useLayoutEffect(()=>(e.forEach(({mql:s})=>s.addEventListener("change",()=>{n(cs(e))})),()=>e.forEach(({mql:s})=>s.removeEventListener("change",()=>{n(cs(e))}))),[]),{...i,currentDevice:Object.keys(i).find(s=>i[s]===!0)??"desktop"}},G0=u.div`
    width: 100%;
`,V0=u.div`
    width: 100%;
    padding: 16px;
    background: var(--block-content);
    border-radius: 6px;
    box-shadow: var(--block-shadow);
`,Y0=u.div`
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
`,Q0=u.div`
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
`,q0=u.div`
    position: relative;
`,X0=e=>{const{data:i}=e,{balance_currdate:n,balance:s,endDatePlan:o,can_sign:a,bill:r,qr_current:c,qr_total:d}=i,{isMobile:p}=Et(),{open:h}=M(),[g,x]=l.useState(0),f=g===0?+n:+s,m=f>0,b=m?g===0?"Долг по договору":"Остаток по договору":f<0?"Переплата по договору":"У вас нет долга",v=g===0?`На ${oe(new Date)}`:`До ${oe(o)}`,T=()=>{h(t.jsx(N0,{contract:i}),"Реквизиты договора")};return t.jsxs(G0,{children:[t.jsx(z,{icon:t.jsx(ju,{}),size:4,align:"left",bottomGap:!0,children:"Задолженность"}),t.jsxs(V0,{children:[t.jsx(Js,{pages:[{title:"Текущая"},{title:"Общая"}],currentPage:g,setCurrentPage:x,appearance:!1}),t.jsxs(Y0,{children:[t.jsxs(P,{d:"column",gap:"12px",ai:"flex-start",children:[t.jsx(U0,{debt:f}),t.jsxs(P,{d:"column",gap:"4px",ai:"flex-start",children:[t.jsx(z,{size:3,align:"left",children:b}),t.jsx(te,{children:v})]})]}),m?t.jsx(W0,{currentPage:g,type:p?"horizontal":"vertical",qr_current:c,qr_total:d}):t.jsx(Ks,{color:"green",size:"40px"})]}),t.jsxs(Q0,{children:[r&&t.jsx(Hi,{text:"Квитанция на оплату",background:"transparent",textColor:j.grey.main,align:"left",width:"fit-content",href:r,padding:"0"}),t.jsxs(q0,{children:[t.jsx(y,{onClick:T,text:"Реквизиты договора",background:"transparent",textColor:j.grey.main,width:"fit-content",padding:"0",align:"left"}),t.jsx(Wt,{right:"-25px",top:"10px",visible:a,pulsing:!0,children:"1"})]})]})]})]})},hl=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,ai=(e,i)=>{switch(i){case"date":return oe(e,"numeric");case"rub":return e+" руб.";default:return e===void 0?"-":e}},K0=(e,i)=>{const n=Number(i==null?void 0:i.sum)||Number(i==null?void 0:i.sum_price),s=Number(i==null?void 0:i.sum_pay);if(!n&&n!==0||!s&&s!==0)return"-";const o=n-s;return o<=0?"Оплачено":`Ожидает оплаты (${ai(String(o),"rub")})`},J0=()=>[{title:"Год",field:"year",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;return n?new Date(n).toLocaleDateString("ru",{year:"numeric"}):"-"}},{title:"Месяц",field:"month",width:"25%",render:(e,i)=>{const n=i==null?void 0:i.date_start;if(!n)return"-";const s=new Date(n).toLocaleDateString("ru",{month:"long"});return hl(s)}},{title:"Оплатить до",field:"date_plan",type:"date",width:"25%",sort:!0},{title:"Статус",field:"sum_pay",width:"25%",render:K0}],Z0=(e,i)=>{const[n,s]=l.useState(!1),[o,a]=l.useState(null);return l.useEffect(()=>{n&&setTimeout(()=>{s(!1),i==null||i(null)},200)},[n]),l.useEffect(()=>{setTimeout(()=>{o!==null&&(a(null),i==null||i(r=>(r&&delete r[o],{...r})))},500)},[o]),{removeAll:n,removeOne:o,setRemoveAll:s,setRemoveOne:a}},ds=u.div`
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
`,eb=u.div`
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
`,oo=({list:e,onAddElement:i,onRemoveAll:n,onRemoveOne:s,padding:o,height:a,setList:r,hideWithEmpty:c})=>{const d=Object.keys(e??{}),{removeAll:p,removeOne:h,setRemoveAll:g,setRemoveOne:x}=Z0(d,r);return!d.length&&c?null:t.jsxs(eb,{removeAll:p||closed,padding:o,height:a,children:[!!i&&t.jsxs(ds,{onClick:i,background:"var(--reallyBlue)",color:"#fff",children:[t.jsx(Mt,{}),"Добавить"]}),Object.values(e??{}).map(f=>{if(f!=null&&f.id)return t.jsxs(ds,{background:f.background,remove:h===f.id,children:[t.jsx("div",{className:"element-text",children:f.title}),t.jsx("div",{className:"remove",onClick:()=>{d.length===1?(g(!0),n==null||n()):x(f.id),s(f.id)},children:t.jsx(rt,{})})]},f.id)}),!!d.length&&!!n&&t.jsx(ds,{background:"var(--reallyBlue)",color:"#fff",onClick:()=>{n(),g(!0)},children:t.jsx("div",{className:"element-text",children:"Убрать все"})})]})},tb=(e,i)=>e?Object.keys(e).find(n=>e[n].title===i):null,ib=e=>{const[i,n]=l.useState(null),[s,o]=l.useState(null),[a,r]=l.useState(null),[c,d]=l.useState(null),[p,h]=l.useState(e),g=l.useCallback(f=>{var m,b;o(v=>(v&&v[f]&&delete v[f],{...v})),f===((m=i==null?void 0:i.column)==null?void 0:m.field)&&n(null),f===((b=a==null?void 0:a.column)==null?void 0:b.field)&&r(null)},[i,s,a]),x=l.useCallback(()=>{o(null),n(null),r(null)},[]);return l.useEffect(()=>{if(s)if(!c)d(f=>{const m=Object.values(s)[0].column;return f={[(m==null?void 0:m.field)??""]:{id:(m==null?void 0:m.field)??"",title:"Фильтр: "+(m==null?void 0:m.title)}},{...f}});else{const f=Object.values(s).find(m=>{var b;return!c[((b=m.column)==null?void 0:b.field)??""]});f&&d(m=>{var T,k;const b=((T=f.column)==null?void 0:T.field)??"",v="Фильтр: "+((k=f.column)==null?void 0:k.title);return m&&(m[b]={id:b,title:v}),{...m}})}i&&d(f=>{var v;const m=((v=i.column)==null?void 0:v.field)??"",b="Поиск";return f?f[m]={id:m,title:b}:f={[m]:{id:m,title:b}},{...f}}),a&&d(f=>{var v;const m=((v=a.column)==null?void 0:v.field)??"",b="Сортировка";return f?f[m]={id:m,title:b}:f={[m]:{id:m,title:b}},{...f}})},[i,s,a]),l.useEffect(()=>{var b;const f=i==null?void 0:i.column,m=(b=i==null?void 0:i.column)==null?void 0:b.field;if(i&&m){const v=e==null?void 0:e.filter(T=>Ee(ai(T[m],f==null?void 0:f.type)).includes(Ee(ai(i.value,f==null?void 0:f.type))));h(v)}else h(e)},[i]),l.useEffect(()=>{if(s){const f=e==null?void 0:e.filter(m=>!Object.values(s).find(b=>{var v;return m[((v=b.column)==null?void 0:v.field)??""]!==b.value.title}));h(f)}else d(f=>({...f})),h(e)},[s]),l.useEffect(()=>{var m;const f=((m=a==null?void 0:a.column)==null?void 0:m.field)??"";a?h(b=>{const v=[...b??[]];return v==null||v.sort((T,k)=>k[f]<T[f]?a.value==="asc"?1:-1:k[f]>T[f]?a.value==="asc"?-1:1:0),v}):(d(b=>{const v=tb(b,"Сортировка");return b&&v&&delete b[v],{...b}}),h(e))},[a==null?void 0:a.value]),l.useEffect(()=>{h(e)},[e]),{sort:a,setSort:r,search:i,setSearch:n,resultData:p,filter:s,setFilter:o,filterList:c,setFilterList:d,onRemoveOne:g,onRemoveAll:x}},nb=e=>{switch(e){case"desc":return G.evokePopUpMessage({message:"Таблица отсортирована по убыванию",type:"info",time:5e3});case"asc":return G.evokePopUpMessage({message:"Таблица отсортирована по возрастанию",type:"info",time:5e3});default:return G.evokePopUpMessage({message:"Сортировка отключена",type:"info",time:5e3})}},sb=u.div`
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
`,xl=u.div`
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
`,ob=u.div`
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
`,ab=u.div`
    display: flex;
    align-items: center;
`,rb=({columns:e,search:i,setSearch:n,filter:s,setFilter:o,sort:a,setSort:r})=>{const c=d=>()=>{d.search&&n({value:"",column:d}),d.sort&&r(p=>{const h=p!=null&&p.value?p.value==="desc"?"asc":null:"desc";return nb(h),h?{column:d,value:h}:null})};return t.jsx(ob,{children:e.map(d=>{var p,h,g,x;return t.jsxs(xl,{overflow:d.catalogs?"visible":"hidden",width:d.width,title:d.title,clickable:d.search,align:d.search?"space-between":d.align,showFull:d.showFull,className:((p=d.priority)==null?void 0:p.toString())??"one",onClick:c(d),children:[!d.catalogs&&d.title,!d.catalogs&&!d.sort&&d.search&&t.jsx(ii,{className:"icon",style:{color:d.field===((h=i==null?void 0:i.column)==null?void 0:h.field)?"var(--reallyBlue)":"var(--text)"}}),d.sort&&t.jsx(_u,{className:"icon",style:{color:d.field===((g=a==null?void 0:a.column)==null?void 0:g.field)?"var(--reallyBlue)":"var(--text)"}}),d.catalogs&&t.jsx(ab,{children:t.jsx(io,{appearance:!1,items:d.catalogs??[],setSelected:f=>o(m=>(f&&(m={...m,[d.field]:{column:d,value:f}}),m)),selected:(x=s==null?void 0:s[d.field])==null?void 0:x.value,placeholder:d.title})})]},d.title)})})},lb=({pages:e,condition:i,currentPage:n,setCurrentPage:s,align:o="center"})=>{const[a,r]=l.useState(n.toString());l.useEffect(()=>{a.length&&s(+a)},[a]),l.useEffect(()=>{r(n.toString())},[n]);const c=d=>{d.length?+d>=1&&+d<=e+1&&r((+d-1).toString()):r("")};return i?t.jsxs(P,{gap:"10px",jc:o==="left"?"flex-start":o==="right"?"flex-end":o,children:[t.jsx(y,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(Bi,{}),onClick:()=>r(_t(n-1,e).toString())}),t.jsxs(P,{w:"fit-content",gap:"6px",children:[t.jsx(Ae,{width:"12px",placeholder:"",value:a.length?(+a+1).toString():"",setValue:c,inputAppearance:!1}),"/"," ",t.jsx(te,{width:"fit-content",fontSize:"0.85rem",children:e+1})]}),t.jsx(y,{minWidth:"42px",height:"42px",background:"var(--theme)",icon:t.jsx(ct,{}),onClick:()=>r(_t(n+1,e).toString())})]}):null},cb=u.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`,db=({obj:e,columns:i})=>t.jsx(cb,{children:i.map(n=>t.jsx(Ot,{keyStr:n.title,value:n.render?n.render(e[n.field],e):ai(e[n.field],n.type)},n.title))}),gl=({columns:e,columnsExtended:i,el:n,index:s,onRowClick:o})=>{const{open:a}=M(),r=()=>a(t.jsx(db,{obj:n,columns:i||e}),"Информация");return t.jsx(sb,{even:s%2===0,onClick:()=>o?o(n):r(),children:e.map(c=>{var d;return t.jsx(t.Fragment,{children:t.jsx(xl,{showFull:c.showFull,width:c.width,className:((d=c.priority)==null?void 0:d.toString())??"one",align:c.align,onClick:p=>{c.onClick&&(p.stopPropagation(),c.onClick(n))},children:c.render?c.render(ai(n[c.field],c.type),n):ai(n[c.field],c.type)},c.field)})})})},pb=u.div`
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
`,ub=u.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`,hb=u.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,xb=({data:e,loading:i,columns:n,columnsExtended:s,maxOnPage:o,onRowClick:a,filter:r})=>{const[c,d]=l.useState(0),p=Math.ceil(((e==null?void 0:e.length)??0)/(o??1))-1,h=o?e==null?void 0:e.slice(c*o,(c+1)*o):e;return l.useEffect(()=>{d(0)},[r]),i?t.jsx(ub,{children:t.jsx(et,{})}):t.jsxs(pb,{children:[h==null?void 0:h.map((g,x)=>t.jsx(gl,{onRowClick:a,columns:n,columnsExtended:s,el:g,index:x},x)),!(h!=null&&h.length)&&t.jsx(ge,{text:"Нет данных"}),p>0&&t.jsx(me,{margin:"0",width:"100%"}),t.jsx(hb,{children:t.jsx(lb,{pages:p,condition:!!o&&!!(h!=null&&h.length),currentPage:c,setCurrentPage:d})})]})},gb=u.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({closed:e})=>e?"0px":"10px"};
    width: 100%;
    height: ${({closed:e})=>e?"0px":"60px"};
    opacity: ${({closed:e})=>e?"0":"1"};
    visibility: ${({closed:e})=>e?"hidden":"visible"};
`,fb=e=>{switch(e){case"date":return"date";case"rub":return"number";default:return"text"}},mb=({search:e,setSearch:i})=>{var n,s;return t.jsx(gb,{closed:!(e!=null&&e.column),children:t.jsx(Ae,{value:(e==null?void 0:e.value)??"",setValue:o=>i(a=>a?(a.value=o,{...a}):null),width:"100%",type:fb((n=e==null?void 0:e.column)==null?void 0:n.type),placeholder:(s=e==null?void 0:e.column)==null?void 0:s.title,leftIcon:t.jsx(ii,{}),minWidth:"auto"})})},bb=(e,i)=>{if(!e)return{};const n=i.reduce((s,{field:o})=>(s[o]=[],s),{});return e==null||e.forEach(s=>{Object.entries(s).forEach(([o,a])=>{n[o]&&a&&n[o].push(a)})}),n};function vb(e){return Object.keys(e).map(i=>({title:"",field:i}))}const yb=({footer:e,columns:i,data:n})=>{if(!e)return null;const s=e(bb(n,i));return t.jsxs(t.Fragment,{children:[t.jsx(me,{}),t.jsx(gl,{onRowClick:()=>null,columns:vb(s),el:s,index:1})]})},wb=u.div`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`,gt=({columns:e,columnsExtended:i,data:n,maxOnPage:s,onRowClick:o,footer:a,loading:r=!1})=>{const{sort:c,setSort:d,search:p,setSearch:h,resultData:g,filter:x,setFilter:f,filterList:m,setFilterList:b,onRemoveOne:v,onRemoveAll:T}=ib(n);return t.jsxs(wb,{children:[t.jsx(oo,{hideWithEmpty:!0,setList:b,padding:"0 10px",list:m,onRemoveOne:v,onRemoveAll:T}),t.jsx(mb,{search:p,setSearch:h}),t.jsx(rb,{sort:c,setSort:d,columns:e,search:p,setSearch:h,filter:x,setFilter:f}),t.jsx(xb,{loading:r,onRowClick:o,filter:x,columns:e,columnsExtended:i,data:g,maxOnPage:s}),t.jsx(yb,{footer:a,data:n,columns:e})]})},jb=({paygraph:e})=>t.jsxs(P,{d:"column",children:[t.jsx(z,{icon:t.jsx(ku,{}),size:4,align:"left",bottomGap:!0,children:"График платежей"}),t.jsx(gt,{columns:J0(),data:e??[],maxOnPage:3})]}),an=({contracts:e})=>e?t.jsx(d0,{children:e.map((i,n)=>{const{agreements:s,number:o,type:a,paygraph:r,payments:c,signed_user_date:d}=i,p=a==="Общежитие",h=!0,g=s.filter(x=>new Date(x==null?void 0:x.date)>new Date("2022-02-1"));return t.jsxs(pe.Fragment,{children:[t.jsx(P,{gap:"8px",children:t.jsx(P,{w:"fit-content",children:t.jsxs(z,{size:3,align:"left",children:["Договор № ",o," от ",oe(d,"numeric")]})})}),t.jsx(X0,{data:i}),t.jsx(E0,{payments:c??[]}),t.jsx(jb,{paygraph:r}),t.jsx(F0,{isDormitory:p,isContractSigned:h,electronicAgreements:g}),n!==e.length-1&&t.jsx(me,{margin:"0",width:"100%"})]},o)})}):null,ao=()=>{const[e,i,n]=K([Rt.$error,Rt.$loading,Rt.$paymentsStore]),s=n!=null&&n.dormitory.length&&(n!=null&&n.education.length)?"both":n!=null&&n.dormitory.length?"dormitory":n!=null&&n.education.length?"education":"none";return l.useEffect(()=>{G.evokePopUpMessage({type:"alert",time:1e4,message:"В связи с техническими работами отображение данных по произведенным оплатам может быть не полным"})},[]),t.jsx(Qe,{loading:i,load:sl.getPaymentsFx,error:e,data:n,noDataCheck:!(n!=null&&n.dormitory.length),children:t.jsxs(ht,{children:[t.jsx(X,{type:"alert",title:"Внимание!",children:"Ведутся доработки по информации о долге по оплате и суммам оплат"}),s==="none"&&t.jsx(ge,{text:"Нет данных"}),s==="both"&&t.jsx(ss,{pages:[{title:"Общежитие",content:t.jsx(an,{contracts:n==null?void 0:n.dormitory})},{title:"Обучение",content:t.jsx(an,{contracts:n==null?void 0:n.education})}],appearance:!1}),s==="dormitory"&&t.jsx(an,{contracts:n==null?void 0:n.dormitory}),s==="education"&&t.jsx(an,{contracts:n==null?void 0:n.education})]})})},_b=Object.freeze(Object.defineProperty({__proto__:null,default:ao},Symbol.toStringTag,{value:"Module"})),kb="modulepreload",Sb=function(e){return"/"+e},Zo={},w=function(i,n,s){if(!n||n.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=Sb(a),a in Zo)return;Zo[a]=!0;const r=a.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const g=o[h];if(g.href===a&&(!r||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":kb,r||(p.as="script",p.crossOrigin=""),p.href=a,document.head.appendChild(p),r)return new Promise((h,g)=>{p.addEventListener("load",h),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>i())},Tb=l.lazy(()=>w(()=>import("./index-4fbb20ce.js"),["assets/index-4fbb20ce.js","assets/vendor-ab783af7.js"])),Cb=l.lazy(()=>w(()=>import("./index-98140088.js"),["assets/index-98140088.js","assets/vendor-ab783af7.js"])),Eb=l.lazy(()=>w(()=>import("./index-8518d104.js"),["assets/index-8518d104.js","assets/vendor-ab783af7.js"])),Pb=l.lazy(()=>w(()=>import("./index-607611e5.js"),["assets/index-607611e5.js","assets/vendor-ab783af7.js"])),$b=l.lazy(()=>w(()=>import("./index-635b0480.js"),["assets/index-635b0480.js","assets/vendor-ab783af7.js"])),Ab=l.lazy(()=>w(()=>import("./index-315c1076.js"),["assets/index-315c1076.js","assets/vendor-ab783af7.js","assets/ui-a5deeacb.js"])),Nb=l.lazy(()=>w(()=>import("./index-7ad54496.js"),["assets/index-7ad54496.js","assets/vendor-ab783af7.js","assets/get-method-obtaining-fields-23987746.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Db=l.lazy(()=>w(()=>import("./index-5dba9153.js"),["assets/index-5dba9153.js","assets/vendor-ab783af7.js","assets/get-method-obtaining-fields-23987746.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Ob=l.lazy(()=>w(()=>import("./index-d40040a5.js"),["assets/index-d40040a5.js","assets/vendor-ab783af7.js","assets/get-method-obtaining-fields-23987746.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Ib=l.lazy(()=>w(()=>import("./index-1aeabbdf.js"),["assets/index-1aeabbdf.js","assets/vendor-ab783af7.js"])),Lb=l.lazy(()=>w(()=>import("./index-95af4e18.js"),["assets/index-95af4e18.js","assets/vendor-ab783af7.js","assets/index-3aef13f3.js"])),Rb=l.lazy(()=>w(()=>import("./index-ed17f326.js"),["assets/index-ed17f326.js","assets/vendor-ab783af7.js","assets/is-valid-url-08a91344.js"])),zb=l.lazy(()=>w(()=>import("./index-b3bea43e.js"),["assets/index-b3bea43e.js","assets/vendor-ab783af7.js"])),Fb=l.lazy(()=>w(()=>import("./index-04eab2ab.js"),["assets/index-04eab2ab.js","assets/vendor-ab783af7.js"])),Mb=l.lazy(()=>w(()=>import("./index-4e603e42.js"),["assets/index-4e603e42.js","assets/vendor-ab783af7.js"])),Bb=l.lazy(()=>w(()=>import("./index-3c43c193.js"),["assets/index-3c43c193.js","assets/vendor-ab783af7.js"])),Hb=l.lazy(()=>w(()=>import("./index-9f66825f.js"),["assets/index-9f66825f.js","assets/vendor-ab783af7.js"])),Wb=l.lazy(()=>w(()=>import("./index-dbd25ee6.js"),["assets/index-dbd25ee6.js","assets/vendor-ab783af7.js"])),Ub=l.lazy(()=>w(()=>import("./index-786f2188.js"),["assets/index-786f2188.js","assets/vendor-ab783af7.js"])),Gb=l.lazy(()=>w(()=>import("./index-a383dd20.js"),["assets/index-a383dd20.js","assets/vendor-ab783af7.js"])),Vb=l.lazy(()=>w(()=>import("./index-ae3f24c6.js"),["assets/index-ae3f24c6.js","assets/vendor-ab783af7.js"])),Yb=l.lazy(()=>w(()=>import("./index-ec6ad190.js"),["assets/index-ec6ad190.js","assets/vendor-ab783af7.js","assets/BoldText-379a2baf.js"])),Qb=l.lazy(()=>w(()=>import("./index-d8ea506b.js"),["assets/index-d8ea506b.js","assets/vendor-ab783af7.js"]));l.lazy(()=>w(()=>Promise.resolve().then(()=>qm),void 0));const qb=l.lazy(()=>w(()=>import("./index-b073d11d.js"),["assets/index-b073d11d.js","assets/vendor-ab783af7.js"])),Xb=l.lazy(()=>w(()=>import("./index-4131ca7f.js"),["assets/index-4131ca7f.js","assets/vendor-ab783af7.js"])),Kb=l.lazy(()=>w(()=>import("./index-0c13cd83.js"),["assets/index-0c13cd83.js","assets/vendor-ab783af7.js"])),Jb=l.lazy(()=>w(()=>import("./index-13871e65.js"),["assets/index-13871e65.js","assets/vendor-ab783af7.js","assets/get-method-obtaining-fields-23987746.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),Zb=l.lazy(()=>w(()=>import("./index-f62dc407.js"),["assets/index-f62dc407.js","assets/vendor-ab783af7.js","assets/get-method-obtaining-fields-23987746.js","assets/get-student-subdivisions-5a2f2c8d.js","assets/get-divisions-96cfa1b1.js","assets/get-method-obstaing-c0726de9.js"])),ev=l.lazy(()=>w(()=>import("./index-c2b7fe00.js"),["assets/index-c2b7fe00.js","assets/vendor-ab783af7.js"])),tv=l.lazy(()=>w(()=>import("./index-2c7bd85c.js"),["assets/index-2c7bd85c.js","assets/vendor-ab783af7.js"]));l.lazy(()=>w(()=>Promise.resolve().then(()=>Zm),void 0));const iv=l.lazy(()=>w(()=>import("./index-00c72cc1.js"),["assets/index-00c72cc1.js","assets/vendor-ab783af7.js"])),nv=l.lazy(()=>w(()=>import("./index-5016b837.js"),["assets/index-5016b837.js","assets/vendor-ab783af7.js"])),sv=l.lazy(()=>w(()=>import("./index-41657311.js"),["assets/index-41657311.js","assets/vendor-ab783af7.js"])),ov=l.lazy(()=>w(()=>import("./index-3788a98c.js"),["assets/index-3788a98c.js","assets/vendor-ab783af7.js"])),av=l.lazy(()=>w(()=>import("./index-fb0058ff.js"),["assets/index-fb0058ff.js","assets/vendor-ab783af7.js"])),rv=l.lazy(()=>w(()=>import("./index-637c2a8d.js"),["assets/index-637c2a8d.js","assets/vendor-ab783af7.js","assets/get-divisions-96cfa1b1.js"])),lv=l.lazy(()=>w(()=>import("./index-0c33db36.js"),["assets/index-0c33db36.js","assets/vendor-ab783af7.js"])),cv=l.lazy(()=>w(()=>import("./index-1e25171c.js"),["assets/index-1e25171c.js","assets/vendor-ab783af7.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js"])),dv=l.lazy(()=>w(()=>import("./index-84a2e6f1.js"),["assets/index-84a2e6f1.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-23987746.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),pv=l.lazy(()=>w(()=>import("./index-3e56bc15.js"),["assets/index-3e56bc15.js","assets/vendor-ab783af7.js","assets/create-form-store-054586ed.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js"])),uv=l.lazy(()=>w(()=>import("./index-34fde660.js"),["assets/index-34fde660.js","assets/vendor-ab783af7.js","assets/form-2467d2fb.js","assets/send-form-fbb7c4bd.js","assets/create-form-store-054586ed.js"])),hv=l.lazy(()=>w(()=>import("./form-2467d2fb.js"),["assets/form-2467d2fb.js","assets/vendor-ab783af7.js","assets/send-form-fbb7c4bd.js","assets/create-form-store-054586ed.js"])),fl=l.lazy(()=>w(()=>import("./index-88902e09.js"),["assets/index-88902e09.js","assets/vendor-ab783af7.js"]));l.lazy(()=>w(()=>Promise.resolve().then(()=>H1),void 0));const xv=l.lazy(()=>w(()=>import("./index-55d1371a.js"),["assets/index-55d1371a.js","assets/vendor-ab783af7.js","assets/index-279f2132.js"])),gv=l.lazy(()=>w(()=>import("./index-02bb8504.js"),["assets/index-02bb8504.js","assets/vendor-ab783af7.js","assets/index-3aef13f3.js"])),fv=l.lazy(()=>w(()=>import("./index-5cea7e35.js"),["assets/index-5cea7e35.js","assets/vendor-ab783af7.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),mv=l.lazy(()=>w(()=>import("./index-cd49fa91.js"),["assets/index-cd49fa91.js","assets/vendor-ab783af7.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-23987746.js","assets/get-teacher-subdivisions-5cd556a9.js"])),bv=l.lazy(()=>w(()=>import("./index-822be2fd.js"),["assets/index-822be2fd.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-23987746.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),vv=l.lazy(()=>w(()=>import("./index-b10e48d9.js"),["assets/index-b10e48d9.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),yv=l.lazy(()=>w(()=>import("./index-90146553.js"),["assets/index-90146553.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-23987746.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),wv=l.lazy(()=>w(()=>import("./index-741a46d0.js"),["assets/index-741a46d0.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),jv=l.lazy(()=>w(()=>import("./index-31502a55.js"),["assets/index-31502a55.js","assets/vendor-ab783af7.js","assets/ui-a5deeacb.js"])),_v=l.lazy(()=>w(()=>import("./index-315c1076.js"),["assets/index-315c1076.js","assets/vendor-ab783af7.js","assets/ui-a5deeacb.js"])),kv=l.lazy(()=>w(()=>import("./index-0fbbc198.js"),["assets/index-0fbbc198.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),Sv=l.lazy(()=>w(()=>import("./index-d19bc048.js"),["assets/index-d19bc048.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-23987746.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),Tv=l.lazy(()=>w(()=>import("./index-5c1c64c4.js"),["assets/index-5c1c64c4.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),Cv=l.lazy(()=>w(()=>import("./index-2abd895c.js"),["assets/index-2abd895c.js","assets/vendor-ab783af7.js"])),Ev=l.lazy(()=>w(()=>import("./index-1dd22b0f.js"),["assets/index-1dd22b0f.js","assets/vendor-ab783af7.js","assets/get-default-subdivision-17957fb0.js"])),Pv=l.lazy(()=>w(()=>import("./index-e123fbd8.js"),["assets/index-e123fbd8.js","assets/vendor-ab783af7.js","assets/get-default-subdivision-17957fb0.js"])),$v=l.lazy(()=>w(()=>import("./index-dc9a9131.js"),["assets/index-dc9a9131.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),Av=l.lazy(()=>w(()=>import("./index-b9e5a9b5.js"),["assets/index-b9e5a9b5.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-23987746.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),Nv=l.lazy(()=>w(()=>import("./index-0c8f5385.js"),["assets/index-0c8f5385.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-23987746.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),Dv=l.lazy(()=>w(()=>import("./index-f8d42636.js"),["assets/index-f8d42636.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-23987746.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/get-last-year-for-period-e1de6b16.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),Ov=l.lazy(()=>w(()=>import("./index-1256bc7d.js"),["assets/index-1256bc7d.js","assets/vendor-ab783af7.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js"])),Iv=l.lazy(()=>w(()=>import("./index-001dcfda.js"),["assets/index-001dcfda.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),Lv=l.lazy(()=>w(()=>import("./index-a308b0aa.js"),["assets/index-a308b0aa.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-site-and-topic-a96b5f53.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),Rv=l.lazy(()=>w(()=>import("./index-e69571c3.js"),["assets/index-e69571c3.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-default-subdivision-17957fb0.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),zv=l.lazy(()=>w(()=>import("./index-e99594b7.js"),["assets/index-e99594b7.js","assets/vendor-ab783af7.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-method-obtaining-fields-23987746.js","assets/get-teacher-subdivisions-5cd556a9.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js"])),Fv=l.lazy(()=>w(()=>import("./index-8c1832c1.js"),["assets/index-8c1832c1.js","assets/vendor-ab783af7.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Mv=l.lazy(()=>w(()=>import("./index-acd19fbb.js"),["assets/index-acd19fbb.js","assets/vendor-ab783af7.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Bv=l.lazy(()=>w(()=>import("./index-9d403b51.js"),["assets/index-9d403b51.js","assets/vendor-ab783af7.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Hv=l.lazy(()=>w(()=>import("./index-efafe6c3.js"),["assets/index-efafe6c3.js","assets/vendor-ab783af7.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Wv=l.lazy(()=>w(()=>import("./index-f1902e0c.js"),["assets/index-f1902e0c.js","assets/vendor-ab783af7.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Uv=l.lazy(()=>w(()=>import("./index-328f4145.js"),["assets/index-328f4145.js","assets/vendor-ab783af7.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Gv=l.lazy(()=>w(()=>import("./index-35edc87f.js"),["assets/index-35edc87f.js","assets/vendor-ab783af7.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Vv=l.lazy(()=>w(()=>import("./index-fb92f4cd.js"),["assets/index-fb92f4cd.js","assets/vendor-ab783af7.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Yv=l.lazy(()=>w(()=>import("./index-7f06d9ac.js"),["assets/index-7f06d9ac.js","assets/vendor-ab783af7.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js"])),Qv=l.lazy(()=>w(()=>import("./index-d0b8ec89.js"),["assets/index-d0b8ec89.js","assets/vendor-ab783af7.js","assets/index-680f8be4.js","assets/create-form-store-054586ed.js","assets/index-19b1dcaf.js","assets/send-form-fbb7c4bd.js","assets/get-method-obstaing-c0726de9.js","assets/get-basic-fields-application-teacher-53f7b63c.js","assets/get-default-subdivision-17957fb0.js","assets/get-teacher-subdivisions-5cd556a9.js"])),qv=l.lazy(()=>w(()=>import("./index-09980cdf.js"),["assets/index-09980cdf.js","assets/vendor-ab783af7.js"]));l.lazy(()=>w(()=>Promise.resolve().then(()=>Nc),void 0));const ro=l.lazy(()=>w(()=>import("./index-a98a15aa.js"),["assets/index-a98a15aa.js","assets/vendor-ab783af7.js"])),Xv=l.lazy(()=>w(()=>import("./index-81774c35.js"),["assets/index-81774c35.js","assets/vendor-ab783af7.js"])),Kv=l.lazy(()=>w(()=>import("./index-5981ce03.js"),["assets/index-5981ce03.js","assets/vendor-ab783af7.js"])),Jv=l.lazy(()=>w(()=>import("./index-a4689102.js"),["assets/index-a4689102.js","assets/vendor-ab783af7.js"])),Zv=l.lazy(()=>w(()=>import("./index-956e3b27.js"),["assets/index-956e3b27.js","assets/vendor-ab783af7.js"])),ey=l.lazy(()=>w(()=>import("./index-00374426.js"),["assets/index-00374426.js","assets/vendor-ab783af7.js"])),ty=l.lazy(()=>w(()=>import("./index-f58c1af3.js"),["assets/index-f58c1af3.js","assets/vendor-ab783af7.js","assets/get-default-subdivision-17957fb0.js"])),iy=l.lazy(()=>w(()=>import("./index-0904d00a.js"),["assets/index-0904d00a.js","assets/vendor-ab783af7.js","assets/get-default-subdivision-17957fb0.js"])),ny=l.lazy(()=>w(()=>import("./index-03927f4b.js"),["assets/index-03927f4b.js","assets/vendor-ab783af7.js"])),sy=l.lazy(()=>w(()=>import("./index-2b206edc.js"),["assets/index-2b206edc.js","assets/vendor-ab783af7.js","assets/send-hr-form-work-transfer-84f68b02.js"])),oy=l.lazy(()=>w(()=>import("./index-8e898d6f.js"),["assets/index-8e898d6f.js","assets/vendor-ab783af7.js","assets/send-hr-form-work-transfer-84f68b02.js"]));l.lazy(()=>w(()=>Promise.resolve().then(()=>Ey),void 0));l.lazy(()=>w(()=>import("./index-34f213f3.js"),["assets/index-34f213f3.js","assets/vendor-ab783af7.js","assets/BoldText-379a2baf.js","assets/help-links-48b4d79e.js"]));const ay=()=>ee.get(`?getRequestMedicalCertificate&token=${ie()}`),ml=E(),bl=F(async()=>(await ay()).data);S({clock:ml,target:bl});Ua(bl,null);const ry={load:ml},ly=[{id:0,title:"г. Москва, ул. Малая Семеновская, д. 12"},{id:1,title:"г. Москва, ул. 7-я Парковая, д. 9/26"},{id:2,title:"г. Москва, ул. 1-я Дубровская, д. 16А, стр. 2"},{id:3,title:"г. Москва, ул. 800-летия Москвы, д. 28, к."},{id:4,title:"г. Москва, ул. Михалковская, д. 7, корп. 3"},{id:5,title:"г. Москва, ул. Бориса Галушкина, д. 9"},{id:6,title:"г. Москва, ул. Павла Корчагина, д. 20А, к. 3"},{id:7,title:"г. Москва, Рижский проезд, д. 15, к. 2"},{id:8,title:"г. Москва, Рижский проезд, д. 15, к. 1"},{id:9,title:"г. Москва, 1-й Балтийский переулок, д. 6/21, к. 3"}],cy=e=>{const{phone:i,email:n}=e;return{title:"Предоставление медицинских справок",data:[{title:"ФИО",value:`${e.surname} ${e.name} ${e.patronymic}`,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:i,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:n,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:null,fieldName:"address",type:"select",items:ly,width:"100%",editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",editable:!0,required:!0}]}},vl=()=>{const[e,i]=l.useState(null),[n,s]=l.useState(null),[o,a]=l.useState(null),[r,c]=l.useState(null),[d,p]=l.useState(!1),[h,g]=l.useState(null),[x,f]=l.useState(!1),[m,b]=l.useState(!1),v=x??!1,{data:{dataUserApplication:T}}=Pe.useApplications();return l.useEffect(()=>{T&&i(cy(T))},[T]),l.useEffect(()=>{ry.load(),s(mt({config:{title:"Справка из кожно-венерологического диспансера",issueDateFieldName:"kvd_date_of_issue",organizationFieldName:"kvd_organization",docsFieldName:"kvd_docs"}})),a(mt({config:{title:"Флюорография",issueDateFieldName:"fluorography_date_of_issue",organizationFieldName:"fluorography_organization",docsFieldName:"fluorography_docs"}})),c(mt({config:{title:"Результаты лабораторного исследования на ВИЧ, RW",issueDateFieldName:"vichrw_date_of_issue",organizationFieldName:"vichrw_organization",docsFieldName:"vichrw_docs"}})),g(mt({config:{title:"Сертификат о профилактических прививках",issueDateFieldName:"graft_date_of_issue",organizationFieldName:"graft_organization",docsFieldName:"graft_docs"}}))},[]),t.jsx(Hn,{isDone:!1,children:t.jsxs(Rn,{children:[e&&i&&t.jsx(Dt,{...e,setData:i}),n&&s&&t.jsx(Dt,{...n,setData:s}),o&&a&&t.jsx(Dt,{...o,setData:a}),r&&c&&t.jsx(Dt,{...r,setData:c}),h&&g&&t.jsx(Dt,{...h,setData:g}),t.jsx(Be,{checked:d,setChecked:p,text:"Я подтверждаю подлинность предоставленных документов"}),t.jsx(Me,{text:v?"Отправлено":"Отправить",action:()=>{Bn(Ui.MEDICAL_CERT,[e,n,o,r,h],b,f)},isLoading:m,completed:x,setCompleted:f,repeatable:!1,buttonSuccessText:"Отправлено",isDone:v,isActive:!!d&&!!e&&!!o&&!!r&&!!h&&!!n&&ve(e)&&ve(o)&&ve(r)&&ve(h)&&ve(n),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})},dy=Object.freeze(Object.defineProperty({__proto__:null,default:vl},Symbol.toStringTag,{value:"Module"})),py=u.div`
    width: 100%;
`,uy=()=>t.jsxs(py,{children:[t.jsx(q,{shape:"rect",size:{width:"50%",height:"24px"},margin:"0 0 30px 0"}),t.jsx(q,{shape:"rect",size:{width:"100%",height:"17px"},margin:"0.8rem 0"}),t.jsx(q,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(q,{shape:"rect",size:{width:"90%",height:"17px"},margin:"0.8rem 0"}),t.jsx(q,{shape:"rect",size:{width:"80%",height:"17px"},margin:"0.8rem 0"}),t.jsx(q,{shape:"rect",size:{width:"45%",height:"17px"},margin:"2rem 0 0.8rem 0"}),t.jsx(q,{shape:"rect",size:{width:"40%",height:"17px"},margin:"0.8rem 0"}),t.jsx(q,{shape:"rect",size:{width:"60%",height:"17px"},margin:"0.8rem 0"})]}),tt=e=>{const{children:i,skeleton:n=t.jsx(uy,{}),loading:s=!1,...o}=e;return t.jsx(ut,{...o,className:"block",children:s?n:i})},yE={ready:"Готово",pending:"В работе",rejected:"Отклонено"},Gn={agreeding:"На согласовании",notAgreed:"Не согласовано",agreed:"Согласовано",empty:"Не создано",rejected:"Отклонено"},lo={signed:"Подписан",agreeding:"На согласовании",fixing:"На доработке",empty:"Не создан"},wE=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],jE=[{id:0,title:"На электронную почту"},{id:1,title:"Лично"}],hy=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Gn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(X,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(lo).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(X,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],xy=({historyIsEmpty:e,historyDataWorkerApplication:i})=>{const[n,s]=l.useState(!1);return t.jsxs(tt,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(gy,{children:["История должностей:",t.jsx(y,{icon:n?t.jsx(St,{}):t.jsx(Ze,{}),onClick:()=>!e&&s(o=>!o),background:"transparent"})]}),n&&i.map((o,a)=>o.dismissalApplications.length?t.jsx(fy,{columns:hy(),data:o.dismissalApplications.map(r=>({...r,...o,jobDivision:o.jobTitle+", "+o.subDivision})),maxOnPage:10},a):null),t.jsx(y,{onClick:()=>{!e&&s(o=>!o)},text:e?"История пуста":n?"Скрыть":"Подробнее",background:"transparent"})]})},gy=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,fy=u(gt)`
    width: 100%;
`,my=async e=>{const i=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.DownloadFile?guid=${e}`,n={Authorization:`Bearer ${pt()}`},s=await kt({url:i,method:"GET",responseType:"blob",headers:n}),o=window.URL.createObjectURL(new Blob([s.data])),a=document.createElement("a");a.href=o,a.setAttribute("download","order.pdf"),document.body.appendChild(a),a.click()},by=()=>[{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Gn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(X,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",type:"date",priority:"one",align:"center",render:e=>oe(e.orderDate,"numeric")},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"200px",catalogs:[...Object.values(lo).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(X,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"150px"})}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{if(e)return t.jsx(y,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:()=>{my(i.applicationGuid)}})}}],vy=({jobTitleInfo:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o,canBeRepeated:a,dismissalApplications:r}=e,[c,d]=l.useState(!1);return t.jsxs(tt,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(wy,{children:[t.jsx("span",{children:n}),t.jsx(y,{icon:c?t.jsx(St,{}):t.jsx(Ze,{}),onClick:()=>{d(p=>!p)},background:"transparent"})]}),t.jsxs(yy,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),c&&t.jsxs(_y,{children:[a&&t.jsx(Z,{to:`/hr-applications/dismissal/${i}`,children:t.jsx(y,{text:"Уволиться с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),!!r.length&&t.jsx(jy,{columns:by(),data:r,maxOnPage:10})]}),t.jsx(y,{onClick:()=>{d(p=>!p)},text:c?"Скрыть":"Подробнее",background:"transparent"})]})},yy=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,wy=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,jy=u(gt)`
    width: 100%;
`,_y=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,ky=()=>{const{data:{dataWorkerApplication:e}}=Pe.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(Sy,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(vy,{jobTitleInfo:s,index:o},s.jobGuid)),t.jsx(xy,{historyIsEmpty:i,historyDataWorkerApplication:e.filter(({isDismissal:s})=>s)})]}):null},Sy=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,Vn=u.div`
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
`,Yn=()=>t.jsx(X,{type:"info",title:"Информация",icon:t.jsx(ot,{}),children:"Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом."}),yl=()=>{const{data:{listApplication:e},error:i}=Pe.useApplications();return t.jsx(Qe,{load:()=>st.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(Ty,{children:t.jsxs(Vn,{maxWidth:"1500px",children:[t.jsxs(Cy,{children:[t.jsx(z,{size:2,align:"left",children:"Заявление на увольнение"}),t.jsx(Yn,{})]}),t.jsx(ky,{})]})})})},Ty=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Cy=u.div`
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
`,Ey=Object.freeze(Object.defineProperty({__proto__:null,default:yl},Symbol.toStringTag,{value:"Module"})),wl=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"orderRegistrationStatus",priority:"one",width:"200px",catalogs:[...Object.values(Gn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(X,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"weekends",priority:"one",align:"center",render:e=>e[0].type},{title:"Дата выхода",field:"weekends",priority:"one",align:"center",render:e=>oe(e[0].dates[0].date,"numeric")},{title:"Количество часов",field:"weekends",priority:"one",align:"center",render:e=>e[0].dates[0].hours},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],jl=E(),_l=E(),kl=F(async()=>{const{data:e}=await we.get(`Weekend.GetAllHistory?PersonalGuid=${di(pt()??"").IndividualGuid}`);return e.orders});S({clock:jl,target:kl});const Vi=F(async e=>(await we.post("Weekend.AddWeekend",e)).data);S({clock:_l,target:Vi});const Sl=V([]),Py=Vi.pending;S({clock:kl.doneData,target:Sl});S({clock:Vi.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Ct.evokePopUpMessage});S({clock:Vi.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Ct.evokePopUpMessage});const $y={loadBufferHolidayWork:jl,sendBufferHolidayWork:_l},_E={sendBufferHolidayWorkFx:Vi},Ay={useBufferHolidayWork:()=>({data:ce(Sl),loading:ce(Py)})},Ny=()=>{const[e,i]=l.useState(!1);l.useEffect($y.loadBufferHolidayWork,[]);const{data:n}=Ay.useBufferHolidayWork(),s=!!n.every(o=>!o);return t.jsxs(tt,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Dy,{children:["История заявлений на выход в выходной день:",t.jsx(y,{icon:e?t.jsx(St,{}):t.jsx(Ze,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(Oy,{columns:wl(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},Dy=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Oy=u(gt)`
    width: 100%;
`,Iy=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(tt,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Ry,{children:[t.jsx("span",{children:n}),t.jsx(y,{icon:a?t.jsx(St,{}):t.jsx(Ze,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(Ly,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsx(zy,{children:t.jsx(Z,{to:`/hr-applications/holiday-work/${i}`,children:t.jsx(y,{text:"Выйти в выходной день",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})}),t.jsx(y,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},Ly=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,Ry=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,zy=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,Fy=()=>{const{data:{dataWorkerApplication:e}}=Pe.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(My,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(Iy,{info:s,index:o})),t.jsx(Ny,{})]}):null},My=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,By=()=>{const{data:{listApplication:e},error:i}=Pe.useApplications();return t.jsx(Qe,{load:()=>st.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(Hy,{children:t.jsxs(Vn,{maxWidth:"1500px",children:[t.jsxs(Wy,{children:[t.jsx(z,{size:2,align:"left",children:"Заявление на выход в выходной день"}),t.jsx(Yn,{})]}),t.jsx(Fy,{})]})})})},Hy=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,Wy=u.div`
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
`,Tl=E(),Cl=E(),Yi=F(async()=>{const{data:e}=await we.get(`Vacation.GetAllHistory?personalGuid=${di(pt()??"").IndividualGuid}`);return e});S({clock:Tl,target:Yi});const Qt=F(async e=>(await we.post("Vacation.AddVacation",e)).data);S({clock:Cl,target:Qt});const yn=V(null);S({clock:Yi.doneData,fn:({employeeVacations:e})=>e,target:yn});S({clock:Qt.doneData,fn:e=>{if(e.isError)throw new Error(e.error);return{message:"Форма отправлена успешно",type:"success"}},target:G.evokePopUpMessage});S({clock:Qt.failData,fn:({message:e})=>({message:e,type:"hrFailure"}),target:G.evokePopUpMessage});S({clock:Qt.doneData,source:yn,fn:(e,{employeeVacations:i})=>[...e,...i],target:yn});S({clock:Yi.failData,fn:e=>{var n;return{message:Us(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure"}},target:G.evokePopUpMessage});S({clock:Qt.doneData,target:Yi});const Uy={loadBufferHolidayPlanning:Tl,sendBufferHolidayPlanning:Cl},kE={sendBufferHolidayPlanningFx:Qt},Gy={useBufferHolidayPlanning:()=>({data:ce(yn),loading:ce(Qt.pending),getDataLoading:ce(Yi.pending)})},Qn=async(e,i)=>{const n=`https://api.mospolytech.ru/serviceforfrontpersonnelorders/Vacation.DownloadFile?DocumentGuid=${e}&Type=${i}`,s={Authorization:`Bearer ${pt()}`},o=await kt({url:n,method:"GET",responseType:"blob",headers:s}),a=window.URL.createObjectURL(new Blob([o.data])),r=document.createElement("a");r.href=a,r.setAttribute("download","order.pdf"),document.body.appendChild(r),r.click()};var El=(e=>(e[e["Ежегодный (основной) оплачиваемый отпуск"]=1]="Ежегодный (основной) оплачиваемый отпуск",e[e["Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)"]=2]="Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)",e[e["Отпуск без сохранения заработной платы"]=3]="Отпуск без сохранения заработной платы",e[e["Отпуск по коллективному договору"]=4]="Отпуск по коллективному договору",e))(El||{});const co=()=>[{title:"Дата",field:"creationDate",type:"date",sort:!0},{title:"Статус",field:"vacation",width:"150px",render:e=>t.jsx(X,{type:e.status.orderStatus==="Согласовано"?"success":e.status.orderStatus==="На регистрации"?"info":e.status.orderStatus==="Не утвержден"||e.status.orderStatus==="Не создано"?"failure":"alert",title:e.status.orderStatus||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",width:"250px",sort:!0},{title:"Вид отпуска",field:"vacation",render:e=>El[e==null?void 0:e.typeOfVacation]||"-"},{title:"Период",field:"vacation",align:"center",width:"200px",render:e=>{var i,n;return`${oe((i=e==null?void 0:e.period)==null?void 0:i.startDate,"numeric")} - ${oe((n=e==null?void 0:e.period)==null?void 0:n.endDate,"numeric")}`}},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(y,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),Qn(i.documentGuid,"0")}}):"-"}}],Vy=()=>[...co(),{title:"Дней",field:"vacation",align:"center",render:e=>{var i;return(i=e==null?void 0:e.period)==null?void 0:i.totalDays}},{title:"Статус приказа",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.orderApprovalStatus)||"-"}},{title:"Статус заявления",field:"vacation",align:"center",render:e=>{var i;return((i=e==null?void 0:e.status)==null?void 0:i.applicationApporvalStatus)||"-"}},{title:"Категория",field:"vacation",align:"center",render:()=>"Тут должна быть категория"},{title:"Перенесен",field:"vacation",align:"center",render:(e,i)=>{var n,s,o,a;return i!=null&&i.isCarriedOver?`Перенесен с ${oe((s=(n=i==null?void 0:i.carriedOver)==null?void 0:n.period)==null?void 0:s.startDate,"numeric")} - ${oe((a=(o=i==null?void 0:i.carriedOver)==null?void 0:o.period)==null?void 0:a.endDate,"numeric")}`:"-"}},{title:"Файл приказа",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>{var n;return(n=i==null?void 0:i.status)!=null&&n.downloadApplication?t.jsx(y,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:s=>{s.stopPropagation(),Qn(i.documentGuid,"1")}}):"-"}}],Yy=()=>{const{data:e,getDataLoading:i}=Gy.useBufferHolidayPlanning(),n=()=>Uy.loadBufferHolidayPlanning(),s=e&&e.map(o=>[...o.notTaken.map(a=>({...a,jobTitle:o.jobTitle,creationDate:a.vacation.status.creationDate}))]).flat().sort((o,a)=>Ga(new Date(o.vacation.period.startDate),new Date(a.vacation.period.startDate)));return t.jsx(Qe,{load:n,error:null,data:e,children:t.jsxs(t.Fragment,{children:[t.jsxs(P,{jc:"space-between",m:"10px 0",children:[t.jsx(Qy,{children:"История заявлений на отпуск:"}),t.jsx(Z,{to:"/hr-applications/holiday-planning",children:t.jsx(y,{text:"Отпуск",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(Mt,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx(P,{w:"100%",jc:"center",ai:"center",children:t.jsx(et,{})}):t.jsx(tt,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(gt,{columns:co(),columnsExtended:Vy(),data:s,maxOnPage:10})})]})})},Qy=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,qy=()=>{const{data:{dataWorkerApplication:e},error:i}=Pe.useApplications(),n=dt();return t.jsx(Qe,{load:st.getWorkerPosts,error:i,data:e,children:t.jsxs(ht,{topRightCornerElement:t.jsx(y,{onClick:()=>{n.replace("/vacation")},text:"График отпусков",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(Va,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0}),children:[t.jsx(X,{type:"info",title:"Информация",icon:t.jsx(ot,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на отпуск и согласовать их."}),t.jsx(Yy,{})]})})},Xy=()=>[{title:"Должность, Подразделение",field:"jobDivision",priority:"one",width:"200px"},{title:"Статус заявления",field:"status",priority:"one",width:"200px",catalogs:[...Object.values(Gn).map((e,i)=>({id:i.toString(),title:e}))??[]],render:e=>t.jsx(X,{type:e==="Согласовано"?"success":e==="Не согласовано"||e==="Не создано"?"failure":"alert",title:e,align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Дата заявления",field:"creationDate",type:"date",priority:"one",align:"center"},{title:"Номер приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.orderNumber},{title:"Дата приказа",field:"dismissalOrder",priority:"one",align:"center",render:e=>e.formatedOrderDate},{title:"Статус приказа",field:"dismissalOrder",priority:"one",width:"220px",catalogs:[...Object.values(lo).map((e,i)=>({id:i.toString(),title:e}))??[]],render:(e,i)=>{if(!e.orderStatus)return null;const n=e.orderStatus+i.dismissalOrder.registrationStatus;return t.jsx(X,{type:e.orderStatus==="Подписан"?"success":e.orderStatus==="Не создан"?"failure":"alert",title:n,align:"center",width:"100%",icon:null,maxWidth:"220px"})}},{title:"Файл заявления",priority:"one",field:"file",type:"file"}],Pl=E(),$l=E(),po=F(async()=>{const{data:e}=await we.get(`CarryForwardVacation.GetAllHistory?personalGuid=${di(pt()??"").IndividualGuid}`);return e});S({clock:Pl,target:po});const ui=F(async e=>(await we.post("CarryForwardVacation.AddCarryForwardVacation",e)).data);S({clock:$l,target:ui});const wn=V([]);S({clock:po.doneData,fn:({employeeVacations:e})=>e,target:wn});S({clock:ui.doneData,fn:e=>e.isError?{message:e.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0},target:Ct.evokePopUpMessage});S({clock:ui.doneData,source:wn,fn:(e,{employeeVacations:i})=>[...e,...i],target:wn});S({clock:po.failData,fn:e=>{var n;return{message:Us(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось загрузить данные",type:"failure",time:3e5}},target:G.evokePopUpMessage});S({clock:ui.failData,fn:e=>{var n;return{message:Us(e)?((n=e.response)==null?void 0:n.data).error:"Не удалось отправить данные",type:"hrFailure",time:3e5}},target:Ct.evokePopUpMessage});const ea={loadBufferHolidayTransfer:Pl,sendBufferHolidayTransfer:$l},SE={sendBufferHolidayTransferFx:ui},uo={useBufferHolidayTransfer:()=>({data:ce(wn),loading:ce(ui.pending)})},Ky=()=>{const[e,i]=l.useState(!1),{data:n}=uo.useBufferHolidayTransfer(),s=!!n.every(o=>!o);return t.jsxs(tt,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(Jy,{children:["История заявлений отпуск:",t.jsx(y,{icon:e?t.jsx(St,{}):t.jsx(Ze,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&n.map((o,a)=>t.jsx(Zy,{columns:Xy(),data:[],maxOnPage:10},a)),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},Jy=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,Zy=u(gt)`
    width: 100%;
`,e1=({info:e,index:i,data:n})=>{const{jobTitle:s,subDivision:o,rate:a}=e,[r,c]=l.useState(!1);return t.jsxs(tt,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(i1,{children:[t.jsx("span",{children:s}),t.jsx(y,{icon:r?t.jsx(St,{}):t.jsx(Ze,{}),onClick:()=>{c(d=>!d)},background:"transparent"})]}),t.jsxs(t1,{children:["Подразделение: ",o,t.jsx("br",{}),"Ставка: ",a,t.jsx("br",{})]}),r&&t.jsxs(s1,{children:[t.jsx(Z,{to:`/hr-applications/holiday-transfer/${i}`,children:t.jsx(y,{text:"Перенос отпуска",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),n.map((d,p)=>{if(d.employeeGuid==e.jobGuid){const h=n[p].notTaken.filter(g=>{if(g.vacation.status.orderStatus!="false"&&g.vacation.status.orderStatus!="")return g.vacation.status.orderStatus});return t.jsx(n1,{columns:co(),data:h,maxOnPage:10},d.jobTitle)}})]}),t.jsx(y,{onClick:()=>{c(d=>!d)},text:r?"Скрыть":"Подробнее",background:"transparent"})]})},t1=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,i1=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,n1=u(gt)`
    width: 100%;
`,s1=u.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`,o1=()=>{const{data:{dataWorkerApplication:e}}=Pe.useApplications(),{data:i}=uo.useBufferHolidayTransfer(),[n,s]=l.useState(!0);return!i||!e?null:t.jsxs(a1,{children:[e.map((o,a)=>o.isDismissal?(n&&s(!1),null):t.jsx(e1,{info:o,index:a,data:i})),t.jsx(Ky,{})]})},a1=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,r1=()=>{const{data:e,loading:i}=uo.useBufferHolidayTransfer();return l.useEffect(()=>{ea.loadBufferHolidayTransfer()},[]),t.jsx(Qe,{load:ea.loadBufferHolidayTransfer,loading:i,error:null,data:e,children:t.jsx(l1,{children:t.jsxs(Vn,{maxWidth:"1500px",children:[t.jsxs(c1,{children:[t.jsx(z,{size:2,align:"left",children:"Заявление на перенос отпуска"}),t.jsx(Yn,{}),t.jsxs("p",{children:["График отпусков вы можете посмотреть по"," ",t.jsx("a",{target:"_blank",href:"#/vacation",rel:"noreferrer",children:"ссылке"}),"."]})]}),t.jsx(o1,{})]})})})},l1=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,c1=u.div`
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
`,d1=e=>localStorage.setItem("age",e.toString()),TE=e=>localStorage.getItem(e),p1=e=>e.map(i=>{localStorage.setItem(i.employeeGuid,i.tutor.toString())}),u1={listMedicalExamination:null,error:null},ti=F(async()=>{const e=await we.get(`MedicalExamination.GetAllHistory?PersonalGuid=${di(pt()??"").IndividualGuid}`);try{return d1(e.data.age),p1(e.data.employeeMedicalExaminations.map(({employeeGuid:i,tutor:n})=>({employeeGuid:i,tutor:n}))),e.data.employeeMedicalExaminations}catch{throw new Error("Не удалось загрузить информацию. Попробуйте позже")}}),Qi=F(async e=>{try{const i=await we.post("MedicalExamination.AddMedicalExamination",e);if(i.data.isError)throw new Error;return i.data}catch(i){throw new Error(i)}}),h1=()=>{const{listMedicalExamination:e,error:i}=ce(x1);return{data:e,loading:ce(Qi.pending),getDataLoading:ce(ti.pending),error:i}};E();at({from:Qi.doneData,to:ti});S({clock:Qi.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:G.evokePopUpMessage});S({clock:Qi.failData,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure"}),target:G.evokePopUpMessage});const x1=V(u1).on(ti,e=>({...e,error:null})).on(ti.doneData,(e,i)=>({...e,listMedicalExamination:i})).on(ti.failData,(e,i)=>({...e,error:i.message})),g1={loadBufferMedicalExaminationFx:ti,sendBufferMedicalExaminationFx:Qi},f1={useBufferMedicalExamination:h1},Al=()=>[{title:"Дата",field:"creationDate",width:"100px",sort:!0,type:"date"},{title:"Статус",field:"orderStatus",width:"150px",render:e=>t.jsx(X,{type:e==="Согласовано"?"success":e==="На регистрации"?"info":e==="Не утвержден"||e==="Не создано"?"failure":"alert",title:e||"-",align:"center",width:"100%",icon:null,maxWidth:"150px"})},{title:"Должность",field:"jobTitle",sort:!0},{title:"Период",field:"medicalExamination",align:"center",width:"200px",render:(e,i)=>`${oe(i==null?void 0:i.startDate,"numeric")} - ${oe(i==null?void 0:i.endDate,"numeric")}`},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(y,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),Qn(i==null?void 0:i.documentGuid,"0")}}):"-"}],m1=()=>[...Al(),{title:"Статус приказа",field:"orderApprovalStatus",align:"center",render:e=>e||"-"},{title:"Статус заявления",field:"applicationApporvalStatus",align:"center",render:e=>e||"-"},{title:"Файл заявления",priority:"one",field:"downloadable",type:"file",width:"200px",align:"center",render:(e,i)=>i!=null&&i.downloadApplication?t.jsx(y,{text:"Скачать файл",background:"rgb(60,210,136)",textColor:"#fff",id:"downloadButton",width:"150px",align:"center",minWidth:"150px",height:"30px",onClick:n=>{n.stopPropagation(),Qn(i==null?void 0:i.documentGuid,"1")}}):"-"}],b1=()=>{const{data:e,getDataLoading:i}=f1.useBufferMedicalExamination(),{data:{dataWorkerApplication:n}}=Pe.useApplications(),s=n&&e&&e.map(o=>{const a=n.find(r=>r.jobGuid===o.employeeGuid);return[...o.notTaken.map(r=>({...r,jobTitle:a==null?void 0:a.jobTitle}))]}).flat().sort((o,a)=>Ga(new Date(o.startDate),new Date(a.startDate)));return t.jsxs(Qe,{load:g1.loadBufferMedicalExaminationFx,error:null,data:e,children:[t.jsxs(P,{jc:"space-between",m:"10px 0",children:[t.jsx(v1,{children:"История заявлений на диспансеризацию:"}),t.jsx(Z,{to:"/hr-applications/medical-examination",children:t.jsx(y,{text:"Диспансеризация",background:"var(--reallyBlue)",textColor:"#fff",icon:t.jsx(Mt,{}),minWidth:"35px",height:"36px",shrinkTextInMobile:!0})})]}),i?t.jsx(P,{w:"100%",jc:"center",ai:"center",children:t.jsx(et,{})}):t.jsx(tt,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:t.jsx(gt,{columns:Al(),columnsExtended:m1(),data:s,maxOnPage:10})})]})},v1=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,y1=()=>{const{data:{dataWorkerApplication:e},error:i}=Pe.useApplications();return t.jsx(Qe,{load:st.getWorkerPosts,error:i,data:e,children:t.jsxs(ht,{children:[t.jsx(X,{type:"info",title:"Информация",icon:t.jsx(ot,{}),lineHeight:"1.4rem",fontSize:"0.85rem",children:"Тут можно посмотреть свои заявления на диспансеризацию и согласовать их."}),t.jsx(b1,{})]})})},Nl=E(),Dl=E(),Ol=F(async()=>{const{data:e}=await we.get(`AnotherPlaceWork.GetAllHistory?PersonalGuid=${di(pt()??"").IndividualGuid}`);return e.employeeHistories});S({clock:Nl,target:Ol});const qi=F(async e=>(await we.post("AnotherPlaceWork.AddAnotherPlaceOfWork",e)).data);S({clock:Dl,target:qi});const Il=V([]),w1=qi.pending;S({clock:Ol.doneData,target:Il});S({clock:qi.doneData,fn:e=>{const i=e;return i.isError?{message:i.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:Ct.evokePopUpMessage});S({clock:qi.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:Ct.evokePopUpMessage});const j1={loadBufferWorkTransfer:Nl,sendBufferWorkTransfer:Dl},CE={sendBufferWorkTransferFx:qi},_1={useBufferWorkTransfer:()=>({data:ce(Il),loading:ce(w1)})},k1=()=>{const[e,i]=l.useState(!1);l.useEffect(j1.loadBufferWorkTransfer,[]);const{data:n}=_1.useBufferWorkTransfer(),s=!!n.every(o=>!o);return t.jsxs(tt,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(S1,{children:["История заявлений на перевод:",t.jsx(y,{icon:e?t.jsx(St,{}):t.jsx(Ze,{}),onClick:()=>!s&&i(o=>!o),background:"transparent"})]}),e&&t.jsx(T1,{columns:wl(),data:n.map(o=>({...o})),maxOnPage:5}),t.jsx(y,{onClick:()=>{!s&&i(o=>!o)},text:s?"История пуста":e?"Скрыть":"Подробнее",background:"transparent"})]})},S1=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,T1=u(gt)`
    width: 100%;
`,C1=({info:e,index:i})=>{const{jobTitle:n,subDivision:s,rate:o}=e,[a,r]=l.useState(!1);return t.jsxs(tt,{orientation:"vertical",alignItems:"flex-start",justifyContent:"flex-start",gap:"10px",width:"100%",maxWidth:"100%",height:"fit-content",children:[t.jsxs(P1,{children:[t.jsx("span",{children:n}),t.jsx(y,{icon:a?t.jsx(St,{}):t.jsx(Ze,{}),onClick:()=>{r(c=>!c)},background:"transparent"})]}),t.jsxs(E1,{children:["Подразделение: ",s,t.jsx("br",{}),"Ставка: ",o,t.jsx("br",{})]}),a&&t.jsxs($1,{children:[t.jsx(Z,{to:`/hr-applications/work-transfer/${i}`,children:t.jsx(y,{text:"Перевестись с этой должности",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})}),t.jsx(Z,{to:`/hr-applications/work-transfer-change-rate/${i}`,children:t.jsx(y,{text:"Изменить ставку",background:"rgb(236,95,107)",textColor:"#fff",width:"250px",minWidth:"150px",height:"36px"})})]}),t.jsx(y,{onClick:()=>{r(c=>!c)},text:a?"Скрыть":"Подробнее",background:"transparent",padding:"0px"})]})},E1=u.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`,P1=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`,$1=u.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`,A1=()=>{const{data:{dataWorkerApplication:e}}=Pe.useApplications(),[i,n]=l.useState(!0);return e?t.jsxs(N1,{children:[e.map((s,o)=>s.isDismissal?(i&&n(!1),null):t.jsx(C1,{info:s,index:o})),t.jsx(k1,{})]}):null},N1=u.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`,D1=()=>{const{data:{listApplication:e},error:i}=Pe.useApplications();return t.jsx(Qe,{load:()=>st.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsx(O1,{children:t.jsxs(Vn,{maxWidth:"1500px",children:[t.jsxs(I1,{children:[t.jsx(z,{size:2,align:"left",children:"Заявление на перевод"}),t.jsx(Yn,{})]}),t.jsx(A1,{})]})})})},O1=u.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`,I1=u.div`
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
`,L1=e=>{if(!e[0].length&&e[1].length)return`За весь период до ${oe(e[1])} включительно`;if(e[0].length&&!e[1].length)return`За весь период начиная с ${oe(e[0])} включительно`;if(!e[0].length&&!e[1].length)return"За все время";if(e[0].length&&e[1].length)return`За период с ${oe(e[0])} по ${oe(e[1])}`},R1=u.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`,qn=({title:e,links:i})=>{const[n,s]=l.useState(["",""]),[o,a]=l.useState(!0),{data:r}=qe.selectors.useData();return r?t.jsxs(R1,{children:[t.jsx(z,{size:3,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"content",children:[t.jsx(Yr,{dates:n,setDates:s,valid:o,setValid:a}),t.jsx(X,{type:"info",title:L1(n)??"",icon:t.jsx(ot,{})}),i==null?void 0:i.map((c,d)=>{const p=c.url+"&date_from="+n[0]+"&date_to="+n[1];return t.jsxs(pe.Fragment,{children:[t.jsxs("section",{children:[t.jsx(z,{size:4,align:"left",children:c.title}),t.jsx(Hi,{onClick:()=>null,href:p,text:"Загрузить",icon:t.jsx(Ns,{}),width:"170px",background:j.blue.main,textColor:"#fff",isActive:o})]}),d!==(i==null?void 0:i.length)-1&&t.jsx(me,{})]},c.title)})]})]}):null},z1=()=>{const{data:e}=qe.selectors.useData();return t.jsx(qn,{title:"Скачать отчеты по акцептам",links:e==null?void 0:e.accepts})},F1=()=>{const{data:e}=qe.selectors.useData();return t.jsx(qn,{title:"Скачать отчеты по доп.соглашениям",links:e==null?void 0:e.agreements})},M1=()=>{const{data:e}=qe.selectors.useData();return t.jsx(qn,{title:"Скачать отчеты по анкете",links:e==null?void 0:e.checkdata})},B1=()=>{const{data:e}=qe.selectors.useData();return t.jsx(qn,{title:"Скачать отчеты по телефонному справочнику",links:e==null?void 0:e.phonebook})},Ll=()=>{var i;const{data:e}=qe.selectors.useData();return t.jsx(Ki,{padding:"10px",children:t.jsx(ht,{children:t.jsx(ss,{appearance:!1,pages:[{title:"Анкета",content:t.jsx(M1,{}),condition:!!(e!=null&&e.checkdata.length)},{title:"Акцепт",content:t.jsx(z1,{}),condition:!!(e!=null&&e.accepts.length)},{title:"Доп. соглашения",content:t.jsx(F1,{}),condition:!!(e!=null&&e.agreements.length)},{title:"Телефонный справочник",content:t.jsx(B1,{}),condition:!!(e!=null&&e.phonebook.length)},{title:"Логины студентов",content:t.jsx(Se,{oldVersionUrl:zw}),condition:!!((i=e==null?void 0:e.studLogins)!=null&&i.length)}]})})})},H1=Object.freeze(Object.defineProperty({__proto__:null,default:Ll},Symbol.toStringTag,{value:"Module"})),W1=l.lazy(()=>w(()=>import("./index-b6c3abc1.js"),["assets/index-b6c3abc1.js","assets/vendor-ab783af7.js"])),Rl=l.lazy(()=>w(()=>import("./index-4f0a4edc.js"),["assets/index-4f0a4edc.js","assets/vendor-ab783af7.js"])),U1=l.lazy(()=>w(()=>Promise.resolve().then(()=>Nc),void 0));l.lazy(()=>w(()=>Promise.resolve().then(()=>Rw),void 0));const G1=l.lazy(()=>w(()=>import("./index-853fbfdf.js"),["assets/index-853fbfdf.js","assets/vendor-ab783af7.js"]));l.lazy(()=>w(()=>import("./index-a99173f3.js"),["assets/index-a99173f3.js","assets/vendor-ab783af7.js"]));const V1=l.lazy(()=>w(()=>import("./index-91bf35b3.js"),["assets/index-91bf35b3.js","assets/vendor-ab783af7.js"])),zl=l.lazy(()=>w(()=>import("./index-a11f0aa9.js"),["assets/index-a11f0aa9.js","assets/vendor-ab783af7.js","assets/help-links-48b4d79e.js","assets/create-form-store-054586ed.js"])),Y1=l.lazy(()=>w(()=>import("./index-f4a234a7.js"),["assets/index-f4a234a7.js","assets/vendor-ab783af7.js"])),Q1=l.lazy(()=>w(()=>import("./index-16345230.js"),["assets/index-16345230.js","assets/vendor-ab783af7.js","assets/alert-item-bf814bd4.js","assets/is-valid-url-08a91344.js"])),q1=l.lazy(()=>w(()=>import("./index-78e6f93e.js"),["assets/index-78e6f93e.js","assets/vendor-ab783af7.js","assets/index-9298ab17.js","assets/alert-item-bf814bd4.js","assets/is-valid-url-08a91344.js"])),X1=l.lazy(()=>w(()=>import("./index-77f4ec35.js"),["assets/index-77f4ec35.js","assets/vendor-ab783af7.js"]));l.lazy(()=>w(()=>Promise.resolve().then(()=>_b),void 0));const K1=l.lazy(()=>w(()=>import("./index-35ffd614.js"),["assets/index-35ffd614.js","assets/vendor-ab783af7.js"])),Fl=l.lazy(()=>w(()=>import("./index-5386a074.js"),["assets/index-5386a074.js","assets/vendor-ab783af7.js","assets/index-9298ab17.js"])),J1=l.lazy(()=>w(()=>import("./index-c004a2ab.js"),["assets/index-c004a2ab.js","assets/vendor-ab783af7.js","assets/index-c2b05a44.js"])),Z1=l.lazy(()=>w(()=>import("./index-2917e909.js"),["assets/index-2917e909.js","assets/vendor-ab783af7.js","assets/index-c2b05a44.js"])),ew=l.lazy(()=>w(()=>import("./index-9ec61796.js"),["assets/index-9ec61796.js","assets/vendor-ab783af7.js","assets/index-c2b05a44.js"])),tw=l.lazy(()=>w(()=>import("./index-526a69fd.js"),["assets/index-526a69fd.js","assets/vendor-ab783af7.js"])),iw=l.lazy(()=>w(()=>import("./index-e40e4be7.js"),["assets/index-e40e4be7.js","assets/vendor-ab783af7.js","assets/index-279f2132.js"])),nw=l.lazy(()=>w(()=>import("./index-6f77b41b.js"),["assets/index-6f77b41b.js","assets/vendor-ab783af7.js"])),sw=l.lazy(()=>w(()=>import("./index-fdb0b65b.js"),["assets/index-fdb0b65b.js","assets/vendor-ab783af7.js","assets/help-links-48b4d79e.js"])),ow=l.lazy(()=>w(()=>import("./index-1c241670.js"),["assets/index-1c241670.js","assets/vendor-ab783af7.js","assets/help-links-48b4d79e.js"]));l.lazy(()=>w(()=>Promise.resolve().then(()=>dy),void 0));const aw=l.lazy(()=>w(()=>import("./index-34f213f3.js"),["assets/index-34f213f3.js","assets/vendor-ab783af7.js","assets/BoldText-379a2baf.js","assets/help-links-48b4d79e.js"])),rw=l.lazy(()=>w(()=>import("./index-425ed6c3.js"),["assets/index-425ed6c3.js","assets/vendor-ab783af7.js"])),lw=u.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 12px;
    width: 100%;
    height: 100%;

    color: var(--text);
`,EE=u.div`
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: row;
`,PE=u.div`
    width: 100%;
`,cw=u.div`
    position: relative;
    width: 100%;
    padding: 10px;
    min-height: 100px;
    height: 100%;

    @media (max-width: 550px) {
        padding: 10px;
    }
`,dw=u.div`
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
`,pw=u.div`
    transition: 0.2s;
    height: 100%;
`,uw=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text);

    & > * + * {
        margin-top: 10px;
    }
`,hw=({children:e,load:i,loading:n,error:s,data:o,deps:a=[],couldBeReloaded:r})=>(l.useEffect(()=>{!o&&!n&&i()},a),t.jsx(cw,{children:o?!s&&t.jsx(pw,{children:e}):t.jsx(dw,{$loading:!!s||!o,children:s?t.jsx(uw,{children:t.jsx(ge,{text:s,children:r&&t.jsx(y,{onClick:()=>i(),text:"Загрузить снова",icon:t.jsx(Pn,{})})})}):t.jsx(et,{})})})),Ml=E(),Bl=E(),Li=F(async()=>{let e=0;for(;e<3;){const{data:i}=await Ix(),n=!(i!=null&&i.map);if(i&&!n)return i;e++}throw new Error("Не удалось загрузить подразделения")});S({clock:Bl,target:Li});const xw=Li.pending,gw=E(),fw=V(null).on(Ml,(e,i)=>i),mw=V(null).on(Li.doneData,(e,i)=>i),bw=V(null).on(Li.failData,(e,i)=>i.message).on(Li,()=>null),Xn={setSubdivisionPath:Ml,getSubdivisions:Bl,clearSubdivisionData:gw},Je={subdivisionPath:fw,subdivisions:mw,error:bw,pedningGetSubdividions:xw},Kn=()=>{const{search:e}=Yt();return pe.useMemo(()=>new URLSearchParams(e),[e])},Hl=({item:e,parents:i})=>{var p;const n=dt(),o=Kn().get("fio")||"",a=e.subdivs,r=K(Je.subdivisionPath),[c,d]=l.useState(!1);return l.useEffect(()=>{d(!!(r&&r.some(h=>h.name===e.name)))},[r]),t.jsxs(P,{p:`5px 0 5px ${i.length*15}px`,d:"column",children:[t.jsx(vw,{$chosen:!!(r&&((p=r[0])==null?void 0:p.name)===e.name),onClick:()=>{Xn.setSubdivisionPath([e,...i]),n.push({search:new URLSearchParams({subdivision:e.name,fio:o}).toString()})},children:t.jsxs(P,{ai:"center",jc:"space-between",w:"100%",gap:"5px",children:[e.name,a.length>0&&t.jsx(y,{icon:c?t.jsx(Ra,{size:20}):t.jsx(ct,{size:20}),width:"20px",height:"20px",background:"transparent",onClick:h=>{h.stopPropagation(),d(g=>!g)}})]})}),c&&a.map(h=>t.jsx(Hl,{item:h,parents:[e,...i]},h.name))]})},vw=u.div`
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
`,yw=u.div`
    display: flex;
    flex-direction: column-reverse;
    color: #fff;
    min-height: 110px;
    width: 100%;
    padding-left: ${({isEmployee:e})=>e?"125px":"20px"};

    ${W.isNotMobile} {
        padding-left: ${({isEmployee:e})=>e?"180px":"0"};
    }

    @media (max-width: 800px) {
        padding-bottom: 0;
    }
`,ww=u.div`
    width: 700px;
    padding-bottom: 20px;
    /* padding: 40px 35px 20px 35px; */

    @media (max-width: 800px) {
        width: 100%;
        /* padding: 20px 16px 10px 36px; */
    }
`,jw=u.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-width: 100%;
    padding: 60px 20px 10px 20px;

    ${W.isNotMobile} {
        padding: 35px 20px 10px ${({isEmployee:e})=>e?"180px":"0"};
    }
`,_w=u.h3`
    font-size: 1.17rem;
    line-height: 28px;
`,kw=u.h4`
    opacity: 0.7;
    font-weight: 400;
    font-size: 1.17rem;
    line-height: 28px;
`,Sw=u.div`
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
`,Tw=u.div`
    position: absolute;
    top: 100px;
    left: 25px;
    z-index: 50;

    ${W.isMobile} {
        top: 95px;
        left: 10px;
    }
`,ys=u(P)`
    overflow-x: hidden;
    padding-right: 10px;
    ${W.isNotMobile} {
        overflow-y: scroll;
        height: calc(100vh - 240px);
    }
    ${W.isTablet} {
        height: calc(100vh - 300px);
    }
`,Cw=u(Z)`
    width: 100%;
`,Ew=()=>{const{subdivisions:e}=K({subdivisions:Je.subdivisions});return e?t.jsx(ys,{d:"column",children:e.map(i=>t.jsx(Hl,{item:i,parents:[]},i.name))}):null},jn=(e,i)=>e==="horizontal"?i==="small"?"15px":i==="middle"?"30px":"45px":i==="small"?"30px":i==="middle"?"35px":"45px",rn=({title:e,items:i,action:n})=>t.jsxs(P,{d:"column",ai:"flex-start",gap:"7px",children:[t.jsx(te,{children:e}),i.length>0?i.map(s=>t.jsxs(Pw,{onClick:()=>n("fio"in s?s:null),children:["fio"in s&&t.jsx(At,{name:s.fio,avatar:s.avatar,width:jn("horizontal","middle"),height:jn("horizontal","middle"),marginRight:"7px"}),"fio"in s?s.fio:s.name]},"fio"in s?s.fio+s.post:s.name)):t.jsx(ge,{size:"60px",text:"Ничего не было найдено",image:t.jsx(As,{})})]}),Pw=u.button`
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
`,$w=({title:e,children:i})=>i?t.jsxs(P,{d:"column",ai:"flex-start",jc:"flex-start",gap:"10px",children:[t.jsx(te,{fontSize:"0.9rem",children:e}),t.jsx(Aw,{children:i})]}):null,Aw=u.p`
    padding-left: 14px;
`,Nw=u.div`
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
`,Wl=({fullName:e,width:i,height:n,baseScale:s=1,baseScaleDelta:o=1})=>t.jsx(Nw,{width:i,height:n,color:Ue(e,"dark1"),color2:Ue(e,"light1"),baseScale:s,baseScaleDelta:o,children:t.jsxs(t.Fragment,{children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Ue(e,"main")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Ue(e,"light1")})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:Ue(e,"light2")})})]})}),Xi=(e,i)=>e.split("/").reduce((o,a)=>{if(a[0]===":"){const r=i[a.slice(1,a.length)];r&&o.push(r)}else o.push(a);return o},[]).join("/"),ho=e=>[{attributes:[{id:"head",title:"Руководитель",text:e.head.fio},{title:"Корпоративная электронная почта подразделения",text:e.email},{id:"innerPhone",title:"Внутренний телефон",text:e.phone_inner},{id:"mobile",title:"Прямой телефон",text:e.phone_direct},{id:"address",title:"Адрес рабочего места",text:e.address},{title:"Номер кабинета",text:e.room}]}],Ul=(e,i)=>{const n=i.toLowerCase();if(e.length===0)return null;let s=null;return e.forEach(o=>{o.name.toLowerCase()===n&&(s=o);const a=Ul(o.subdivs,i);a&&(s=a)}),s},Jn=(e,i)=>{const n=i.toLowerCase();if(e.length===0)return[];const s=[];return e.forEach(o=>{var r,c;(c=(r=o.head)==null?void 0:r.fio)!=null&&c.toLowerCase().includes(n)&&s.push(o.head),o.staff.forEach(d=>{d.fio.toLowerCase().includes(n)&&s.push(d)});const a=Jn(o.subdivs,n);s.push(...a)}),s.filter((o,a,r)=>a===r.findIndex(c=>c.fio===o.fio))},Ci=e=>e.job.map(i=>({subdivision:i.subdivision,post:i.post,attributes:[{id:"jobType",title:"Тип работы",text:i.jobType},{id:"email",title:"Корпоративная электронная почта",text:i.email},{id:"innerPhone",title:"Внутренний телефон",text:i.phone_inner},{id:"mobile",title:"Служебный мобильный телефон",text:i.phone_mobile},{id:"address",title:"Адрес рабочего места",text:i.address},{title:"Номер кабинета",text:i.room}]})),Dw=({place:e})=>t.jsx(Ow,{children:e==="ул. Большая Семёновская, 38"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/bolshaya_semyonovskaya_ulitsa_38/Z04YcQZhTEQPQFtvfXt5cH5qZQ==/?indoorLevel=1&ll=37.711518%2C55.781292&utm_medium=mapframe&utm_source=maps&z=17.13",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Большая Семёновская улица, 38 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.711518%2C55.781292&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjczNzkxORJQ0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCR0L7Qu9GM0YjQsNGPINCh0LXQvNGR0L3QvtCy0YHQutCw0Y8g0YPQu9C40YbQsCwgMzgiCg2Y2BZCFQsgX0I%2C&z=17.13",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="ул. Прянишникова, 2А"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.543757%2C55.833709&utm_medium=mapframe&utm_source=maps&z=17.13",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Прянишникова, 2А — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?ll=37.543757%2C55.833709&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc3NTQ0MhJE0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0J_RgNGP0L3QuNGI0L3QuNC60L7QstCwLCAy0JAiCg3QLBZCFbhVX0I%2C&z=17.13",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="ул. Автозаводская, 16"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/obshchezhitiye_10_moskovskogo_politekhnicheskogo_universiteta/1230540819/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Общежитие № 10 Московского политехнического университета"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/category/dormitory/184106316/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Общежитие в Москве"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?ll=37.520728%2C55.809720&mode=search&oid=1230540819&ol=biz&z=17.56",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="ул. Павла Корчагина, 22"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pavla_korchagina_22/Z04YcAFjSkAGQFtvfXRweHhgbQ==/?ll=37.663350%2C55.819439&utm_medium=mapframe&utm_source=maps&z=17.13",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Павла Корчагина, 22 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?ll=37.663350%2C55.819439&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc2NzgxOBJI0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0J_QsNCy0LvQsCDQmtC-0YDRh9Cw0LPQuNC90LAsIDIyIgoNRacWQhUbR19C&z=17.13",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="ул. Михалковская, 7"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/mikhalkovskaya_ulitsa_7/Z04YcwRjTUcAQFtvfXRydnhmbQ==/?ll=37.533427%2C55.837460&utm_medium=mapframe&utm_source=maps&z=17.13",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Михалковская улица, 7 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?ll=37.533427%2C55.837460&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc3NzM2NBJC0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCc0LjRhdCw0LvQutC-0LLRgdC60LDRjyDRg9C70LjRhtCwLCA3IgoNOyIWQhWPWV9C&z=17.13",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="ул. Садовая-Спасская, 6"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/sadovaya_spasskaya_ulitsa_6s1/Z04YcARpT0UPQFtvfXt2cH1lYQ==/?ll=37.639608%2C55.771165&utm_medium=mapframe&utm_source=maps&z=17.13",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Садовая-Спасская улица, 6с1 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?ll=37.639608%2C55.771165&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjczMDczMxJM0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCh0LDQtNC-0LLQsNGPLdCh0L_QsNGB0YHQutCw0Y8g0YPQu9C40YbQsCwgNtGBMSIKDfaOFkIVrRVfQg%2C%2C&z=17.13",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="ул. Малая Семеновская, 12"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/malaya_semyonovskaya_ulitsa_12/Z04YcQZhSUMHQFtvfXt5dX9lbQ==/?indoorLevel=1&ll=37.711060%2C55.784370&utm_medium=mapframe&utm_source=maps&z=17.13",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Малая Семёновская улица, 12 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.711060%2C55.784370&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc0MDE3MRJM0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCc0LDQu9Cw0Y8g0KHQtdC80ZHQvdC-0LLRgdC60LDRjyDRg9C70LjRhtCwLCAxMiIKDSDYFkIVMSNfQg%2C%2C&z=17.13",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="ул. Лефортовский вал, 26"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_lefortovskiy_val_26/Z04YcA5mSkEBQFtvfXt0dHtrZw==/?ll=37.696346%2C55.755783&utm_medium=mapframe&utm_source=maps&z=17.13",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Лефортовский Вал, 26 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?ll=37.696346%2C55.755783&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcxNTk1OBJK0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0JvQtdGE0L7RgNGC0L7QstGB0LrQuNC5INCS0LDQuywgMjYiCg0QyRZCFesFX0I%2C&z=17.13",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="ул. 1-я Дубровская, 16а"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/1_ya_dubrovskaya_ulitsa_16a/Z04YcABiSEYBQFtvfXtzc3VrbQ==/?ll=37.672136%2C55.722989&utm_medium=mapframe&utm_source=maps&z=17.13",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"1-я Дубровская улица, 16А — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?ll=37.672136%2C55.722989&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjY4OTcwMRJG0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsIDEt0Y8g0JTRg9Cx0YDQvtCy0YHQutCw0Y8g0YPQu9C40YbQsCwgMTbQkCIKDUSwFkIVV-ReQg%2C%2C&z=17.13",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="ул. 7-я Парковая, 9/26"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/7_ya_parkovaya_ulitsa_9_26/Z04YcQ5jTEwAQFtvfXt4d31jZQ==/?ll=37.793597%2C55.796102&utm_medium=mapframe&utm_source=maps&z=17.13",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"7-я Парковая улица, 9/26 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?ll=37.793597%2C55.796102&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc0OTA1NhJC0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsIDct0Y8g0J_QsNGA0LrQvtCy0LDRjyDRg9C70LjRhtCwLCA5LzI2IgoNpCwXQhU2L19C&z=17.13",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="ул. 800-летия Москвы, 28 корп. 1"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_800_letiya_moskvy_28k1/Z04YcwFiQUABQFtvfXR2eHllZQ==/?ll=37.562856%2C55.879561&utm_medium=mapframe&utm_source=maps&z=17.13",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица 800-летия Москвы, 28к1 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?ll=37.562856%2C55.879561&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc5NjI4NhJJ0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAgODAwLdC70LXRgtC40Y8g0JzQvtGB0LrQstGLLCAyONC6MSIKDV5AFkIVrIRfQg%2C%2C&z=17.13",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="ул. Михалковская, 7, корп. 3"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/mikhalkovskaya_ulitsa_7k3/Z04YcwRkTUMHQFtvfXRydn1jYg==/?ll=37.534452%2C55.837175&utm_medium=mapframe&utm_source=maps&z=19.53",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Михалковская улица, 7к3 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?ll=37.534452%2C55.837175&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc3NzIxORJF0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCc0LjRhdCw0LvQutC-0LLRgdC60LDRjyDRg9C70LjRhtCwLCA30LozIgoNSSMWQhUzWV9C&z=19.53",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="ул. Бориса Галушкина, 9"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_borisa_galushkina_9/Z04YcAJlSEAPQFtvfXRzdXpgYw==/?ll=37.655158%2C55.824637&utm_medium=mapframe&utm_source=maps&z=17.13",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Бориса Галушкина, 9 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?ll=37.655158%2C55.824637&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc3MDA4MRJJ0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0JHQvtGA0LjRgdCwINCT0LDQu9GD0YjQutC40L3QsCwgOSIKDeGeFkIVbkxfQg%2C%2C&z=17.13",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="ул. Павла Корчагина, 20А, корп. 3"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pavla_korchagina_22/Z04YcAFjSkAGQFtvfXRweHhgbQ==/?ll=37.663350%2C55.819439&utm_medium=mapframe&utm_source=maps&z=17.13",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Павла Корчагина, 22 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?ll=37.663350%2C55.819439&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc2NzgxOBJI0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0J_QsNCy0LvQsCDQmtC-0YDRh9Cw0LPQuNC90LAsIDIyIgoNRacWQhUbR19C&z=17.13",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Рижский проезд, 15, корп. 1"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/rizhskiy_proyezd_15k1/Z04YcAFkT0AEQFtvfXRweXRgYw==/?ll=37.664718%2C55.818864&utm_medium=mapframe&utm_source=maps&z=18.93",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Рижский проезд, 15к1 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?ll=37.664718%2C55.818864&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc2NzM0NBI-0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCg0LjQttGB0LrQuNC5INC_0YDQvtC10LfQtCwgMTXQujEiCg2aqBZCFX1GX0I%2C&z=18.93",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Рижский проезд, 15, корп. 2"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/rizhskiy_proyezd_15k2/Z04YcAFkS0wDQFtvfXRweX9kZg==/?ll=37.664464%2C55.818480&utm_medium=mapframe&utm_source=maps&z=18.53",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Рижский проезд, 15к2 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?ll=37.664464%2C55.818480&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNDkxOTU3MDUwEj7QoNC-0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0KDQuNC20YHQutC40Lkg0L_RgNC-0LXQt9C0LCAxNdC6MiIKDT2oFkIVA0ZfQg%2C%2C&z=18.53",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="1-й Балтийский переулок, 6/21, корп. 3"&&t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/1_y_baltiyskiy_pereulok_6_21k3/Z04YcwVgSkYHQFtvfXRxeHphYg==/?ll=37.520330%2C55.809626&utm_medium=mapframe&utm_source=maps&z=17.13",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"1-й Балтийский переулок, 6/21к3 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/?ll=37.520330%2C55.809626&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc2MTUxMBJP0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsIDEt0Lkg0JHQsNC70YLQuNC50YHQutC40Lkg0L_QtdGA0LXRg9C70L7QuiwgNi8yMdC6MyIKDdIUFkIVDz1fQg%2C%2C&z=17.13",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]})}),Ow=u.div`
    ${W.isNotMobile} {
        width: 500px;
    }

    height: 200px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: var(--theme-2);
`,bt=({title:e,info:i,isEmployee:n,avatar:s})=>{const{open:o,close:a}=M(),{isMobile:r}=Et(),c=K(Je.subdivisions);return t.jsxs(P,{d:"column",children:[t.jsxs(yw,{isEmployee:!!n,children:[t.jsx(Wl,{fullName:e,height:"200px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),n&&t.jsx(Tw,{children:t.jsx(At,{avatarModal:!0,border:!0,name:e,avatar:s,width:r?"110px":"150px",height:r?"110px":"150px",marginRight:"0"})}),t.jsx(_w,{children:e})]}),t.jsx(ww,{children:t.jsx(_e,{minWidth:"100%",direction:"horizontal",showPages:!0,gap:20,children:i.map(({subdivision:d,post:p,attributes:h})=>{const g=d&&p,x=h.find(f=>f.id==="jobType");return t.jsxs(jw,{isEmployee:!!n,children:[g&&t.jsx(Iw,{onClick:()=>{if(a(),!c)return;const f=Ul(c,d);f&&o(t.jsx(bt,{title:d,info:ho(f)}))},children:d+" • "+p}),h.map(({title:f,text:m,id:b})=>t.jsx($w,{title:f,children:m?b==="email"?t.jsx("a",{href:`mailto:${m}`,children:m}):b==="head"?t.jsx(ta,{onClick:()=>{if(a(),!c)return;const v=Jn(c,m)[0];v&&o(t.jsx(bt,{title:v.fio,info:Ci(v),avatar:v.avatar,isEmployee:!0}))},children:m}):b==="innerPhone"?m.split("; ").map((v,T,k)=>t.jsx("a",{href:`tel:+7(495) 223-05-23,${v}`,children:T===k.length-1?v:`${v}; `},v)):b==="mobile"?t.jsx("a",{href:`tel:${m}`,children:m}):b==="address"?t.jsx(ta,{onClick:()=>{a(),o(t.jsx(Dw,{place:m}),m)},children:m}):t.jsx(t.Fragment,{children:m}):"-"},f))]},g?e+g+(x==null?void 0:x.text):e)})},e)}),n?t.jsxs(Sw,{children:[t.jsx(Z,{to:Xi(gi,{page:"current",filter:e}),children:t.jsx(y,{icon:t.jsx(Tt,{}),text:"Расписание",onClick:()=>{a()},background:"var(--theme-4)",width:"100%"})}),t.jsx(y,{icon:t.jsx(An,{}),text:"Написать",onClick:()=>a(),width:"100%",background:"var(--theme-4)",isActive:!1})]}):r?t.jsx(Cw,{to:`${Zi}/${e}`,onClick:a,children:t.jsx(y,{icon:t.jsx(Ds,{}),width:"100%",text:"Список"})}):null]})},Iw=u(kw)`
    cursor: pointer;
`,ta=u.div`
    cursor: pointer;
`,Lw=()=>{var d;const e=Kn(),i=e.get("fio")||"",n=e.get("subdivision")||"",{subdivisionPath:s,subdivisions:o}=K({subdivisionPath:Je.subdivisionPath,subdivisions:Je.subdivisions}),a=s==null?void 0:s[0],{open:r}=M(),c=l.useMemo(()=>i&&o?Jn(a?[a]:o,i):[],[i,n,o]);return i&&o?t.jsx(ys,{d:"column",ai:"flex-start",jc:"flex-start",gap:"20px",children:t.jsx(rn,{title:"Сотрудники",items:c,action:p=>{r(t.jsx(bt,{title:p.fio,info:Ci(p),avatar:p.avatar,isEmployee:!0}))}})}):a?t.jsxs(ys,{d:"column",ai:"flex-start",jc:"flex-start",gap:"20px",children:[t.jsx(rn,{title:"Информация",items:[a],action:()=>{r(t.jsx(bt,{title:a.name,info:ho(a)}))}}),((d=a==null?void 0:a.head)==null?void 0:d.fio)&&t.jsx(rn,{title:"Руководитель",items:[a.head],action:p=>{r(t.jsx(bt,{title:p.fio,info:Ci(p),avatar:p.avatar,isEmployee:!0}))}}),a.staff.filter(p=>p.fio!==a.head.fio).length>0&&t.jsx(rn,{title:"Сотрудники",items:a.staff,action:p=>{r(t.jsx(bt,{title:p.fio,info:Ci(p),avatar:p.avatar,isEmployee:!0}))}})]}):null},ia=u.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${({columns:e})=>e};
    grid-template-rows: ${({rows:e})=>e};
    row-gap: ${({rowGap:e})=>e};
    column-gap: ${({columnGap:e})=>e};
    padding: ${({padding:e})=>e};
`,Gl=({value:e,placeholder:i,loading:n,hintIcon:s,leftIcon:o,focusOn:a,width:r,transformRequest:c,setValue:d,request:p,onValueEmpty:h,customMask:g,onHintClick:x,size:f})=>{const[m,b]=l.useState([]),[v,T]=l.useState(!1);return l.useEffect(()=>{e.length>0?(T(!0),p(e).then(k=>{b(k.data.items.map(_=>{const C=c?c(_):_;return{id:C,title:C,value:C,icon:s}})),T(!1)}).catch(()=>{T(!1),b([])})):(T(!1),b([]),h==null||h())},[e]),t.jsx(Wi,{value:e,setValue:d,placeholder:i,hints:m,width:r??"180px",focusOn:a,leftIcon:o,loading:v&&n,onHintClick:x,customMask:g,size:f})},xo=(e,i)=>{if(i==="")return null;const n=[],s=e.find(o=>o.name===i);if(s)n.push(s);else{for(const o of e){const a=xo(o.subdivs,i);a&&a.length>0&&n.push(...a,o)}return n}return n},na=(e,i)=>{const n=xo(e,i)||null;Xn.setSubdivisionPath(n)},Vl=()=>{const e=Kn(),i=e.get("subdivision")||"",n=e.get("fio")||"",s=dt(),[o,a,r]=K([Je.subdivisions,Je.error,Je.pedningGetSubdividions]);l.useEffect(()=>{i&&(o!=null&&o.find)&&c({id:i,value:i,title:i})},[o]);const c=b=>{o&&na(o,(b==null?void 0:b.value)??"")},{isMobile:d}=Et(),[p,h]=l.useState(""),g=b=>{s.push({search:new URLSearchParams({subdivision:i,fio:b}).toString()})},[x,f,m]=Fn({onDebounce:g,delay:400,defaultValue:n,triggerDelay:200,triggerOn:b=>(h(b),p!==b),onClear:g});return d&&s.push(`${Zi}/${i}`),t.jsx(lw,{children:t.jsx(ht,{children:t.jsxs(P,{d:"column",gap:"15px",children:[t.jsxs(ia,{columns:d?"1fr":"4fr 7fr",rows:"1fr",columnGap:"20px",children:[t.jsx(Gl,{width:"100%",value:i,setValue:b=>{s.push({search:new URLSearchParams({subdivision:b,fio:n}).toString()}),b===""&&o&&na(o,b)},onHintClick:c,placeholder:"Структура",request:Gs}),!d&&t.jsx(Wi,{value:x,setValue:f,loading:m,placeholder:"Сотрудник"})]}),t.jsx(hw,{data:o,error:a,load:()=>{Xn.getSubdivisions()},loading:r,couldBeReloaded:!0,children:t.jsxs(ia,{columns:d?"1fr":"4fr 7fr",rows:"1fr",columnGap:"20px",children:[t.jsx(Ew,{}),!d&&t.jsx(Lw,{})]})})]})})})},Rw=Object.freeze(Object.defineProperty({__proto__:null,default:Vl},Symbol.toStringTag,{value:"Module"})),$="/applications",le="/hr-applications",sa="/staff_orders",oa="/staff_blanks",zw="/ad_logins",go="/doclist",aa="/pps_vote2020",Fw="/children",Yl="/pps_contest",Mw="/electronic-statements",ke="/onboarding",Bw="/structure-of-the-university",Hw="/addresses-and-contacts",Ww="/brandbook",Uw="/wifi-at-the-university",Gw="/health-care",Vw="/psychological-help",Yw="/social-environment",Qw="/vacation",bi="/kpi_pps",vi="/kpi_admin",ra="/sc_news",la="/oop",ca="/centers",qw="/helpful-information",Xw="/download-agreements",da="/physical-education/main",Ql="/all-staff",Kw="/physical-education/student/:studentId",ql=$+"/contact-info-actualization",Jw=$+"/contact-info-actualization-test",Xl=$+"/data-verification",Kl=$+"/issuance-of-licenses",Jl=$+"/getting-computer-equipment",Zl=$+"/connecting-computer",ec=$+"/printer-maintenance",tc=$+"/question-sed",ic=$+"/question-personal-account",nc=$+"/other-it-services",sc=$+"/certificate-from-the-place-of-work",oc=$+"/visa-certificate",ac=$+"/certificate-of-work-experience",rc=$+"/number-of-unused-vacation-days",pa=$+"/contact-details",Zw=$+"/contact-details/:guid",lc=$+"/edit-phonebook-subdivision",cc=$+"/edit-phonebook-inner-phone",dc=$+"/edit-phonebook-email",pc=$+"/copy-of-the-employment-record",uc=$+"/copies-of-documents-from-the-personal-file",hc=$+"/work-on-the-terms-of-external-concurrency",xc=$+"/certificate-time-parental-leave",gc=$+"/arbitrary-request",fc=$+"/courier",mc=$+"/persona-income-tax-reference",bc=$+"/payment-of-child-birth-allowance",vc=$+"/payment-for-child-care",yc=le+"/part-time-employment/",ej=le+"/dismissal/:id",tj=le+"/work-transfer/:id",ij=le+"/extra-holiday-coll",nj=le+"/holiday-planning",sj=le+"/holiday-transfer/:id",oj=le+"/holiday-work/:id",aj=le+"/work-transfer-change-rate/:id",rj=le+"/medical-examination",ws=le+"/buffer-dismissal",js=le+"/buffer-holiday-planning",_s=le+"/buffer-holiday-transfer",ks=le+"/buffer-holiday-work",Ss=le+"/buffer-medical-examination",un=le+"/buffer-work-transfer",wc=$+"/living-in-residential-premises",jc=$+"/guests-accomodation-on-campus",_c=$+"/guests-passage-to-campus",kc=$+"/relocation",Sc=$+"/termination-of-agreement",Tc=$+"/issuance-of-pass",Cc=$+"/guest-pass",Ec=$+"/certification-and-issuance-of-docs",Pc=$+"/deferment-from-conscription",$c=$+"/certified-copies-of-military-docs",Q=()=>Se({oldVersionUrl:"/sprav"}),ua=()=>({onboarding:{id:"onboarding",title:"Новому работнику",icon:t.jsx(J,{}),path:ke,Component:aw,color:"orange",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big"},...Hp,"contact-details":{id:"contact-details",title:"Контактные данные",icon:t.jsx(I,{}),color:"blue",path:pa,Component:D?()=>Se({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):uv,isTemplate:!1,group:"GENERAL",show:!D},"contact-details-form":{id:"contact-details-form",title:"Контактные данные",hiddenTitle:!0,icon:t.jsx(I,{}),color:"blue",path:Zw,Component:D?()=>Se({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):hv,isTemplate:!1,group:"GENERAL",isSubPage:!0,show:!1,backButtonText:"Назад",fallbackPrevPage:pa},"download-agreements":{id:"download-agreements",title:"Админ панель",icon:t.jsx(Ha,{}),path:Xw,Component:Ll,color:"blue",isTemplate:!1,group:"GENERAL",isAdmin:!0},children:{id:"children",title:"Дети и внуки",icon:t.jsx(Au,{}),path:Fw,Component:()=>(pe.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[]),null),color:"green",isTemplate:!1,group:"GENERAL",pageSize:"big",isOldLkPage:!0,keywords:["Ltnb b dyerb"],show:!D},"electronic-statements":{id:"electronic-statements",title:"Электронные ведомости",icon:t.jsx(J,{}),path:Mw,Component:()=>(pe.useEffect(()=>{window.location.replace(`${R}/stats.php?m=items&act=st_list`)},[]),null),isOldLkPage:!0,color:"blue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Ya,{}),path:Rp,Component:()=>(pe.useEffect(()=>{window.location.replace(`${R}/?p=proj_main`)},[]),null),isOldLkPage:!0,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES"},payments:{id:"payments",title:"Оплата общежития",icon:t.jsx(jt,{}),path:Cn,Component:ao,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},"pps-contest":{id:"pps-contest",title:"Конкурс ППС",icon:t.jsx(J,{}),path:Yl,Component:()=>(pe.useEffect(()=>{window.location.replace("https://mospolytech.ru/contest-pps/")},[]),null),isExternalPage:!0,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},"kpi-pps":{id:"kpi-pps",title:"Рейтинговая система ППС",icon:t.jsx(Qa,{}),path:bi,Component:()=>(pe.useEffect(()=>{window.location.replace(`${R}/?p=${bi==null?void 0:bi.slice(1,bi.length)}`)},[]),null),isOldLkPage:!0,color:"pink",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"kpi-admin":{id:"kpi-admin",title:"Экспертиза рейтинговой системы ППС",icon:t.jsx(Nu,{}),path:vi,Component:()=>(pe.useEffect(()=>{window.location.replace(`${R}/?p=${vi==null?void 0:vi.slice(1,vi.length)}`)},[]),null),isOldLkPage:!0,color:"lightBlue",isTemplate:!1,group:"LEARNING_ACTIVITIES"},"sc-news":{id:"sc-news",title:"Анонсы научных мероприятий",icon:t.jsx(Du,{}),path:ra,isOldLkPage:!0,Component:()=>Se({oldVersionUrl:ra}),color:"orange",isTemplate:!1,group:"OTHER",show:!1},orders:{id:"orders",title:"Приказы",icon:t.jsx(I,{}),path:sa,isOldLkPage:!0,Component:()=>Se({oldVersionUrl:sa}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"document-blanks":{id:"document-blanks",title:"Бланки документов",icon:t.jsx(ni,{}),path:oa,isOldLkPage:!0,Component:()=>Se({oldVersionUrl:oa}),color:"blue",isTemplate:!1,show:!1,group:"OTHER"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(I,{}),path:go,Component:xv,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},calendar:{id:"calendar",title:"График отпусков",icon:t.jsx(Va,{}),path:Qw,Component:qv,color:"purple",isTemplate:!1,group:"FINANCES_DOCS"},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(I,{}),color:"lightGreen",path:da,pageSize:"big",Component:jv,getIsVisibleForCurrentUser:e=>{var i;return!!((i=e==null?void 0:e.permissions)!=null&&i.length)},isTemplate:!1,group:"LEARNING_ACTIVITIES"},"physical-education-student":{id:"physical-education-student",title:"Физическая культура",icon:t.jsx(I,{}),color:"pink",show:!1,path:Kw,Component:_v,isTemplate:!1,fallbackPrevPage:da,backButtonText:"Физическая культура",isSubPage:!0},oop:{id:"oop",title:"Образовательные программы",icon:t.jsx(Di,{}),path:la,isOldLkPage:!0,Component:()=>Se({oldVersionUrl:la}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},centers:{id:"centers",title:"Многофункциональный центр",icon:t.jsx(Di,{}),path:ca,isOldLkPage:!0,Component:()=>Se({oldVersionUrl:ca}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},info:{id:"info",title:"Полезная информация",icon:t.jsx(I,{}),path:qw,Component:ro,color:"blue",isTemplate:!1,group:"GENERAL"},applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(I,{}),path:$,Component:gv,color:"red",isTemplate:!1,pageSize:"big",group:"FINANCES_DOCS",keywords:["заявления","справки","заявление","справка"]},"hr-applications":{id:"hr-applications",title:"Кадровые заявления",icon:t.jsx(I,{}),path:le,Component:D?()=>Se({errorText:"Страница еще находится в разработке.",isRedirectButtonVisible:!1}):Xv,color:"green",isTemplate:!1,group:"FINANCES_DOCS"},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(I,{}),color:"blue",path:Xl,Component:fl,isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Назад к цифровым сервисам"},"all-staff":{id:"all-staff",title:"Сотрудники",icon:t.jsx(gn,{}),path:Ql,Component:Vl,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"],pageSize:"big"}}),fo=()=>({...Wp,"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(gn,{}),path:Zi,Component:mo,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"],show:!1},"pps-vote":{id:"pps-vote",title:"Опрос для проверки уровня цифровой грамотности",icon:t.jsx(gn,{}),path:aa,isOldLkPage:!0,Component:()=>Se({oldVersionUrl:aa}),color:"blue",isTemplate:!1,group:"OTHER",show:!1},"issuance-of-licenses-page":{id:"issuance-of-licenses-page",title:"Выдача лицензий",path:Kl,icon:t.jsx(I,{}),color:"blue",Component:D?Q:Sv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"buffer-dismissal":{id:"buffer-dismissal",title:"Заявление на увольнение",path:ws,icon:t.jsx(I,{}),color:"blue",Component:D?Q:yl,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:le,pageSize:"large"},"buffer-holiday-work":{id:"buffer-holiday-work",title:"Заявление о привлечении к работе в выходной день",path:ks,icon:t.jsx(I,{}),color:"blue",Component:D?Q:By,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:le,pageSize:"large"},"buffer-medical-examination":{id:"buffer-medical-examination",title:"Заявление о диспансеризации",path:Ss,icon:t.jsx(I,{}),color:"blue",Component:D?Q:y1,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:le,pageSize:"large"},"buffer-holiday-planning":{id:"buffer-holiday-planning",title:"Заявление о предоставлении отпуска",path:js,icon:t.jsx(I,{}),color:"blue",Component:D?Q:qy,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",fallbackPrevPage:le,pageSize:"large",subPageHeaderTitle:"Заявление на отпуск"},"buffer-holiday-transfer":{id:"buffer-holiday-transfer",title:"Заявление о переносе отпуска",path:_s,icon:t.jsx(I,{}),color:"blue",Component:D?Q:r1,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:le,pageSize:"large"},"buffer-work-transfer":{id:"buffer-work-transfer",title:"Заявление на перевод",path:un,icon:t.jsx(I,{}),color:"blue",Component:D?Q:D1,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:le,pageSize:"large"},"part-time-employment":{id:"part-time-employment",title:"Заявление на трудоустройство по совместительству",path:yc,icon:t.jsx(I,{}),color:"blue",Component:D?Q:Kv,isTemplate:!1,group:"OTHER",isSubPage:!0,backButtonText:"Назад к кадровым заявлениям",subPageHeaderTitle:"",fallbackPrevPage:le},"holiday-work":{id:"holiday-work",title:"Заявление о привлечении к работе в выходной день",path:oj,icon:t.jsx(I,{}),color:"blue",Component:D?Q:ey,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:ks},"medical-examination":{id:"medical-examination",title:"Заявление о диспансеризации",path:rj,icon:t.jsx(I,{}),color:"blue",Component:D?Q:ty,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:Ss},"holiday-planning":{id:"holiday-planning",title:"Заявление о предоставлении отпуска",path:nj,icon:t.jsx(I,{}),color:"blue",Component:D?Q:iy,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:js},"holiday-transfer":{id:"holiday-transfer",title:"Заявление о переносе отпуска",path:sj,icon:t.jsx(I,{}),color:"blue",Component:D?Q:ny,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:_s},"work-transfer":{id:"work-transfer",title:"Заявление на перевод",path:tj,icon:t.jsx(I,{}),color:"blue",Component:D?Q:sy,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:un},"work-transfer-change-rate":{id:"work-transfer-change-rate",title:"Заявление на изменение ставки",path:aj,icon:t.jsx(I,{}),color:"blue",Component:D?Q:oy,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",fallbackPrevPage:un},"extra-holiday-coll":{id:"dismissal",title:"Заявление о предоставлении дополнительного отпуска по коллективному договору",path:ij,icon:t.jsx(I,{}),color:"blue",Component:D?Q:Zv,isTemplate:!1,group:"OTHER"},dismissal:{id:"dismissal",title:"Заявление на увольнение",path:ej,icon:t.jsx(I,{}),color:"blue",Component:D?Q:Jv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад",subPageHeaderTitle:"",fallbackPrevPage:ws},"getting-computer-equipment":{id:"getting-computer-equipment",title:"Получение нового компьютерного оборудования",icon:t.jsx(I,{}),color:"blue",path:Jl,Component:kv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"connecting-computer":{id:"connecting-computer",title:"Подключение компьютера, МФУ, телефона, WiFi",icon:t.jsx(I,{}),color:"blue",path:Zl,Component:vv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"printer-maintenance":{id:"printer-maintenance",title:"Обслуживание принтеров, МФУ",icon:t.jsx(I,{}),color:"blue",path:ec,Component:Ov,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"question-sed":{id:"question-sed",title:"Вопрос по СЭД Directum и 1С",icon:t.jsx(I,{}),color:"blue",path:tc,Component:Lv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"question-personal-account":{id:"question-personal-account",title:"Вопрос по Личному кабинету",icon:t.jsx(I,{}),color:"blue",path:ic,Component:Iv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"other-it-services":{id:"other-it-services",title:"Прочее ИТ-обслуживание",icon:t.jsx(I,{}),color:"blue",path:nc,Component:$v,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"certificate-form-place-of-work":{id:"certificate-form-place-of-work",title:"Справка с места работы",icon:t.jsx(I,{}),color:"blue",path:sc,Component:cv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"visa-certificate":{id:"visa-certificate",title:"Справка с места работы для предоставления в визовый центр",icon:t.jsx(I,{}),color:"blue",path:oc,Component:Rv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"certificate-of-work-experience":{id:"certificate-of-work-experience",title:"Справка о стаже работы",icon:t.jsx(I,{}),color:"blue",path:ac,Component:D?Q:mv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"number-of-unused-vacation-days":{id:"number-of-unused-vacation-days",title:"Справка о количестве неиспользованных дней отпуска",icon:t.jsx(I,{}),color:"blue",path:rc,Component:Tv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"edit-phonebook-subdivision":{id:"edit-phonebook-subdivision",title:"Внесение изменений данных подразделения в телефонном справочнике",hiddenTitle:!0,icon:t.jsx(I,{}),color:"blue",path:lc,Component:Cv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$,keywords:["изменение данных подразделения в телефонном справочнике"]},"edit-phonebook-inner-phone":{id:"edit-phonebook-inner-phone",hiddenTitle:!0,title:"Запрос на изменение внутреннего телефона",icon:t.jsx(I,{}),color:"blue",path:cc,Component:Ev,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"edit-phonebook-email":{id:"edit-phonebook-email",hiddenTitle:!0,title:"Запрос на изменение корпоративной электронной почты",icon:t.jsx(I,{}),color:"blue",path:dc,Component:Pv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"copy-of-employment-record":{id:"copy-of-employment-record",title:"Копия трудовой книжки",icon:t.jsx(I,{}),color:"blue",path:pc,Component:D?Q:yv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"copies-of-documents-from-personal-file":{id:"copies-of-documents-from-personal-file",title:"Копии документов из личного дела",icon:t.jsx(I,{}),color:"blue",path:uc,Component:D?Q:dv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"work-on-terms-of-external-concurrency":{id:"work-on-terms-of-external-concurrency",title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку",icon:t.jsx(I,{}),color:"blue",path:hc,Component:D?Q:zv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"certificate-time-parental-leave":{id:"certificate-time-parental-leave",title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет",icon:t.jsx(I,{}),color:"blue",path:xc,Component:D?Q:bv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(I,{}),color:"blue",path:gc,Component:D?Q:fv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},courier:{id:"courier",title:"Курьер",icon:t.jsx(I,{}),color:"blue",path:fc,Component:D?Q:wv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"personal-income-tax-reference":{id:"personal-income-tax-reference",title:"Справка по форме 2-НДФЛ",icon:t.jsx(I,{}),color:"blue",path:mc,Component:D?Q:Dv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"payment-of-child-birth-allowance":{id:"payment-of-child-birth-allowance",title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",icon:t.jsx(I,{}),color:"blue",path:bc,Component:D?Q:Nv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"payment-for-child-care":{id:"payment-for-child-care",title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)",icon:t.jsx(I,{}),color:"blue",path:vc,Component:D?Q:Av,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"contact-info-actualization":{id:"contact-info-actualization",title:"Актуализация контактных данных",icon:t.jsx(I,{}),color:"blue",path:ql,Component:pv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,show:!1,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"data-verification":{id:"data-verification",title:"Анкета для сверки данных",icon:t.jsx(I,{}),color:"blue",path:Xl,Component:fl,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"living-in-residential-premises":{id:"living-in-residential-premises",title:"Предоставление права проживания в жилом помещении",icon:t.jsx(I,{}),color:"blue",path:wc,Component:D?Q:Fv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"guests-accomodation-on-campus":{id:"guests-accomodation-on-campus",title:"Временное размещение гостей в студгородке",icon:t.jsx(I,{}),color:"blue",path:jc,Component:D?Q:Mv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"guests-passage-to-campus":{id:"guests-passage-to-campus",title:"Проход гостей на территорию студенческого городка",icon:t.jsx(I,{}),color:"blue",path:_c,Component:D?Q:Bv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},relocation:{id:"relocation",title:"Переселение",icon:t.jsx(I,{}),color:"blue",path:kc,Component:D?Q:Hv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"termination-of-agreement":{id:"termination-of-agreement",title:"Расторжение договора найма жилого помещения",icon:t.jsx(I,{}),color:"blue",path:Sc,Component:D?Q:Wv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"issuance-of-pass":{id:"issuance-of-pass",title:"Выдача пропуска (повторная)",icon:t.jsx(I,{}),color:"blue",path:Tc,Component:D?Q:Uv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"guest-pass":{id:"guest-pass",title:"Заказ гостевого пропуска",icon:t.jsx(I,{}),color:"blue",path:Cc,Component:D?Q:Gv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"certification-and-issuance-of-docs":{id:"certification-and-issuance-of-docs",title:"Заверение и выдача копий внутренних документов",icon:t.jsx(I,{}),color:"blue",path:Ec,Component:D?Q:Vv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"deferment-from-conscription":{id:"deferment-from-conscription",title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(I,{}),color:"blue",path:Pc,Component:D?Q:Yv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"certified-copies-of-military-docs":{id:"certified-copies-of-military-docs",title:"Заверенные копии документов по воинскому учету из личного дела",icon:t.jsx(I,{}),color:"blue",path:$c,Component:D?Q:Qv,isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:$},"social-environment":{id:"Социальная среда",title:"Социальная среда",color:"pink",Component:()=>(window.location.href="https://profkommospolytech.ru/",t.jsx(nt,{to:ke})),icon:t.jsx(ni,{}),isTemplate:!1,path:Yw,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ke,isExternalPage:!0},"psychological-help":{id:"Психологическая помощь",title:"Психологическая помощь",color:"green",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/",t.jsx(nt,{to:ke})),icon:t.jsx(Su,{}),isTemplate:!1,path:Vw,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ke,isExternalPage:!0},"health-care":{id:"Медицинская помощь",title:"Медицинская помощь",color:"red",Component:()=>(window.location.href="https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/",t.jsx(nt,{to:ke})),icon:t.jsx(Tu,{}),isTemplate:!1,path:Gw,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ke,isExternalPage:!0},"wifi-at-the-university":{id:"WI-FI  в университете",title:"WI-FI  в университете",color:"purple",Component:()=>(window.location.href="https://e.mospolytech.ru/old/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",t.jsx(nt,{to:ke})),icon:t.jsx(Cu,{}),isTemplate:!1,path:Uw,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ke,isExternalPage:!0},brandbook:{id:"Брендбук",title:"Брендбук",color:"orange",Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/brandbook/",t.jsx(nt,{to:ke})),icon:t.jsx(Eu,{}),isTemplate:!1,path:Ww,backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ke,isExternalPage:!0},"addresses-and-contacts":{id:"addresses-and-contacts",title:"Адреса и контакты",icon:t.jsx(Pu,{}),path:Hw,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/adresa-i-kontakty/",t.jsx(nt,{to:ke})),color:"darkBlue",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ke,isExternalPage:!0},"structure-of-the-university":{id:"structure-of-the-university",title:"Структура университета",icon:t.jsx($u,{}),path:Bw,Component:()=>(window.location.href="https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/",t.jsx(nt,{to:ke})),color:"lightGreen",isTemplate:!1,group:"FINANCES_DOCS",backButtonText:"Новому работнику",isSubPage:!0,fallbackPrevPage:ke,isExternalPage:!0}}),lj=50;function cj(e){const{getFx:i,limit:n=lj,reset:s=[]}=e,o=E(),a=E(),r=V(null),c=V(null);c.on(i.doneData,(x,f)=>[...x||[],...f.results||[]]),c.reset([o,...s]);const d=V(1);d.on(i.doneData,x=>++x),d.reset([o,...s]);const p=i.pending,h=V(!1);h.reset([o,...s]);const g=lt(c,h,(x,f)=>!!(x!=null&&x.length)&&!f);return S({clock:o,fn:x=>({...x,limit:x.limit||n,page:x.page??1}),target:[i,r]}),S({clock:a,source:{lastArgs:r,page:d},fn:({lastArgs:x={},page:f})=>({...x,limit:n,page:f}),target:i}),S({clock:i.doneData,source:r,fn:(x,f)=>!!x&&(f.results||[]).length<x.limit,target:h}),{$items:c,$isPending:p,$hasNext:g,next:a,load:o}}const dj=F(async e=>{const{search:i,page:n,limit:s,filter:o}=e,a=(o==null?void 0:o.title)==="Все"?"":(o==null?void 0:o.title)??"",{data:r}=await gr(i??"",a,n,s);return{results:r.items}}),ha=cj({getFx:dj,limit:50}),pj=({setExternalValue:e,inputAppearance:i,placeholder:n,validationCheck:s,searchApi:o,triggerSearchOn:a,hints:r})=>{const c=async x=>{await o(x)},[d,p,h]=Fn({onDebounce:c,onClear:c,delay:1e3,triggerDelay:0,deps:a}),g=x=>{p(x),e&&e(x)};return t.jsx(Wi,{value:d??"",setValue:g,inputAppearance:i,placeholder:n,validationCheck:s,loading:h,hints:r})},uj=u.div`
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
`,hj=50;function xj({items:e,renderItem:i,hasNext:n,isPending:s,handleNext:o,filter:a,showAlphabetLetters:r,noResultContent:c,offset:d=hj}){const{data:{user:p}}=be.useUser();let h="";const g=l.useCallback(x=>{const f=x.currentTarget.clientHeight,m=x.currentTarget.scrollHeight,b=x.currentTarget.scrollTop;m-d<b+f&&n&&!s&&(o==null||o(a??null))},[o,n,s,a]);return!s&&(!e||(e==null?void 0:e.length)===0)?t.jsx(ge,{text:"Нет результатов",children:c}):t.jsxs(uj,{onScroll:g,children:[t.jsx("div",{className:"scrolable-content",children:(e||[]).map((x,f)=>{var b,v;const m=r?h!==((b=x.fio)==null?void 0:b.charAt(0)):!1;return m&&(h=((v=x.fio)==null?void 0:v.charAt(0))??"-"),t.jsxs(t.Fragment,{children:[m&&t.jsxs("div",{className:"alpabet-letter",children:[t.jsx(z,{size:4,align:"left",children:h}),t.jsx(me,{})]}),i(x,(p==null?void 0:p.id.toString())===x.id,f)]})})}),n&&s&&t.jsx(et,{width:"40px",height:"40px"}),n&&!s&&t.jsx(y,{onClick:()=>o==null?void 0:o(a??null),text:"Загрузить еще"})]})}const xa=e=>{switch(e){case"small":return"0.65em";case"middle":return"0.77em";default:return"1em"}},Ac=(e,i,n,s)=>{const o=[e?"Я":i==="staff"?"Сотрудник":"Студент"];return e||(n&&o.push(n),s&&o.push(`${s}`)),o},gj=e=>{switch(e){case"small":return"82px";case"middle":return"90px";default:return"100px"}},fj=u.div`
    display: flex;
    align-items: center;
    flex-direction: ${({orientation:e})=>e==="vertical"&&"column"};
    padding: ${({orientation:e})=>e==="vertical"?"10px":"8px"};
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;
    width: ${({orientation:e,size:i})=>e==="vertical"?gj(i):"100%"};

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
            font-size: ${({size:e})=>xa(e)};
            width: ${({orientation:e})=>e==="vertical"&&"70px"};
            white-space: ${({orientation:e})=>e==="vertical"&&"nowrap"};
            overflow: ${({orientation:e})=>e==="vertical"&&"hidden"};
            text-overflow: ${({orientation:e})=>e==="vertical"&&"ellipsis"};
            font-weight: 500;
        }

        .status {
            font-size: ${({size:e})=>`calc(${xa(e)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
            font-weight: 500;
        }
    }
`,Zn=e=>{const{open:i}=M(),{type:n,avatar:s,name:o,checked:a,onClick:r,indexNumber:c,division:d,group:p,isMe:h=!1,loading:g=!1,orientation:x="horizontal",size:f="middle"}=e,m=Ac(h,n,d,p);if(g)return t.jsx(QS,{});const b=v=>{r?r(v):h||(Fe.close(),i(n==="staff"?t.jsx(KS,{...e}):t.jsx(qS,{...e})))};return t.jsxs(fj,{orientation:x,size:f,onClick:b,children:[c&&t.jsx("div",{className:"index",children:c}),t.jsx(At,{name:o,avatar:s,width:jn(x,f),height:jn(x,f),marginRight:x==="horizontal"?"7px":"0px",checked:a}),t.jsxs("div",{className:"name-and-status",children:[t.jsx("span",{className:"name",children:o}),t.jsx("span",{className:"status",children:t.jsx(Ge,{words:m})})]})]})},mj=({filter:e,paginationList:i,noResultContent:n})=>{const{$items:s,$isPending:o,$hasNext:a,next:r,load:c}=i,d=ce(o),p=ce(a),h=()=>{r({filter:e})},g=()=>{c({filter:e})};return t.jsx(xj,{items:s.getState(),renderItem:bj,handleNext:h,isPending:d,hasNext:p,filter:e,handleReload:g,showAlphabetLetters:!0,noResultContent:n})};function bj(e,i,n){return t.jsx(Zn,{name:e.fio,type:e.division?"staff":"stud",avatar:e.avatar,faculty:e.faculty,group:e.group,isMe:i,division:e.division,indexNumber:(n??0)+1},n)}const vj=u.div`
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
`,yj=({title:e,searchPlaceholder:i,paginationList:n,defaultFilter:s,noResultContent:o,filterPlaceholder:a,filterRequest:r,underSearchText:c,customMask:d,search:p=!0})=>{const{load:h}=n,[g,x]=l.useState(s),[f,m]=l.useState({id:g,value:g,title:g}),b=c==null?void 0:c(f),v=async _=>{await h({filter:f,search:_})},T=_=>{m(_??null)},k=()=>{m(null)};return t.jsxs(vj,{children:[e&&t.jsx(z,{size:2,align:"left",bottomGap:!0,children:e}),t.jsxs("div",{className:"search-and-filter",children:[p&&t.jsx(pj,{triggerSearchOn:[(f==null?void 0:f.id)??""],placeholder:i??"Поиск",searchApi:v,validationCheck:!0}),r&&t.jsx(Gl,{value:g,setValue:x,onHintClick:T,onValueEmpty:k,customMask:d,placeholder:a??"Поиск",request:r})]}),t.jsx(te,{visible:!!b,children:b}),t.jsx(mj,{paginationList:n,noResultContent:o,filter:f})]})},wj=u.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`,mo=()=>{var g;const{data:{user:e}}=be.useUser(),{$isPending:i,$items:n}=ha,s=Os(),o=dt(),a=ce(i),r=ce(n),c=s.params.filter??((g=e==null?void 0:e.subdivisions)==null?void 0:g[0].subdivision)??"",d=x=>x!=null&&x.title?`Кафедра: ${x==null?void 0:x.title} • Всего: ${(r==null?void 0:r.length)??0}`:null,{isMobile:p}=Et(),h=(e==null?void 0:e.user_status)==="staff";return!p&&h&&o.push(`${Ql}?subdivision=${c}`),t.jsx(Qe,{load:function(){},loading:a,error:null,data:r,children:t.jsx(wj,{children:t.jsx(ht,{children:t.jsx(yj,{searchPlaceholder:"Поиск сотрудников",paginationList:ha,filterRequest:Gs,defaultFilter:c,filterPlaceholder:"Подразделения",underSearchText:d})})})})},Nc=Object.freeze(Object.defineProperty({__proto__:null,default:mo},Symbol.toStringTag,{value:"Module"})),A="/applications",jj="/application-for-superior-room",_j="/acad-performance",kj="/dormitory",Dc=A+"/clarification-of-passport-data",Oc=A+"/arbitrary-request",Ic=A+"/student-employment",Lc=A+"/social-scollarship",Rc=A+"/certificate-of-attendance",zc=A+"/social-agencies",Fc=A+"/paper-call",Mc=A+"/regular-accommodation",Bc=A+"/full-time-part-time-form",Hc=A+"/accommodation-correspondence-form",Wc=A+"/academic-leave-accommodation",Uc=A+"/preferential-accommodation",Gc=A+"/family-room",Vc=A+"/termination-of-employment-contract",Yc=A+"/relocation-inside-hostel",Qc=A+"/relocation-to-another-hostel",qc=A+"/accommodation-for-graduates",Ts=A+"/payment-recipient",Xc=A+"/restoring-the-magnetic-pass",Kc=A+"/retake-for-diploma",Jc=A+"/military-registration-documents",Zc=A+"/military-registration",ed=A+"/financial-support",td=A+"/financial-assistance",id=A+"/increased-state-academic-scholarship",nd=A+"/changing-personal-data",sd=A+"/student-status",od=A+"/state-accreditation",Sj=A+"/military-registration-card",ad=A+"/holidays-after-training",rd=A+"/provision-academic-leave",ld=A+"/exit-academic-leave",cd=A+"/independently-deducted",dd=A+"/extension-attestation",Tj="/physical-education/student",ft=()=>Se({oldVersionUrl:"/sprav"}),Ei=()=>({applications:{id:"applications",title:"Цифровые сервисы",icon:t.jsx(I,{}),path:A,Component:Lb,color:"red",isTemplate:!1,group:"FINANCES_DOCS",pageSize:"big",keywords:["справки","справка","заявления","заявление"]},...Hp,"medical-certificate":{id:"medical-certificate",title:"Предоставление медицинских справок",icon:t.jsx(qa,{}),path:nC,Component:vl,color:"blue",isTemplate:!1,group:"GENERAL"},payments:{id:"payments",title:"Договоры и оплаты",icon:t.jsx(jt,{}),path:Cn,Component:ao,color:"green",isTemplate:!1,group:"FINANCES_DOCS",keywords:["оплата"]},dormitory:{id:"dormitory",title:"Список ожидания на заселение в общежитие",icon:t.jsx(No,{}),path:kj,Component:Eb,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",show:!0},softskills:{id:"softskills",title:"Паспорт компетенций",icon:t.jsx(Ou,{}),path:xC,Component:()=>(pe.useEffect(()=>{window.location.replace("https://softskills.rsv.ru/")},[]),null),color:"orange",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",isExternalPage:!0,keywords:["рсв","россия страна возможностей","софтскиллс","навыки"],isNew:!0},"acad-performance":{id:"acad-performance",title:"Успеваемость",icon:t.jsx(Iu,{}),path:_j,Component:Cb,color:"green",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["оценки","экзамены","зачеты"]},"physical-education":{id:"physical-education",title:"Физическая культура",icon:t.jsx(I,{}),color:"lightGreen",path:Tj,pageSize:"big",Component:Ab,isTemplate:!1,isNew:!0,group:"LEARNING_ACTIVITIES",keywords:["физра","физическая культура"]},"project-activity":{id:"project-activity",title:"Проектная деятельность",icon:t.jsx(Ya,{}),path:Rp,Component:Rb,color:"orange",isTemplate:!1,group:"LEARNING_ACTIVITIES",keywords:["пд"]},"helpful-information":{id:"helpful-information",title:"Полезная информация",icon:t.jsx(Lu,{}),path:Mp,Component:ro,color:"blue",isTemplate:!0,group:"GENERAL"},"application-for-superior-room":{id:"application-for-superior-room",title:"Заявка на комнату повышенной комфортности",icon:t.jsx(No,{}),path:jj,Component:Tb,color:"blue",isTemplate:!1,group:"GENERAL",show:!(new Date>new Date(Br))},"all-teachers":{id:"all-teachers",title:"Сотрудники",icon:t.jsx(gn,{}),path:Zi,Component:mo,color:"orange",isTemplate:!1,group:"COMMUNICATION",keywords:["преподаватели","преподы"]}}),bo=e=>{var i,n,s;return{...Wp,"clarification-of-passport-data":{id:"clarification-of-passport-data",title:"Уточнение паспортных данных",icon:t.jsx(ji,{}),path:Dc,Component:Pb,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"arbitrary-request":{id:"arbitrary-request",title:"Произвольный запрос",icon:t.jsx(ji,{}),path:Oc,Component:rv,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"student-employment":{id:"student-employment",title:"Трудоустройство студентов",icon:t.jsx(ji,{}),path:Ic,Component:D?ft:lv,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"social-scollarship":{id:"social-scollarship",title:"Социальная стипендия",icon:t.jsx(J,{}),path:Lc,Component:D?ft:$b,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"certificate-of-attendance":{id:"certificate-of-attendance",title:"Сертификат об обучении",icon:t.jsx(J,{}),path:Rc,Component:Nb,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"social-agencies":{id:"social-agencies",title:"Справка в социальные учреждения",icon:t.jsx(J,{}),path:zc,Component:Db,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"paper-call":{id:"paper-call",title:"Справка-вызов",icon:t.jsx(J,{}),path:Fc,Component:Ob,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"regular-accommodation":{id:"regular-accommodation",title:"Предоставление права проживания (очная форма)",icon:t.jsx(J,{}),path:Mc,Component:Ib,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"full-time-part-time-form":{id:"full-time-part-time-form",title:"Предоставление права проживания (очно-заочная форма)",icon:t.jsx(J,{}),path:Bc,Component:Om,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"accommodation-correspondence-form":{id:"accommodation-correspondence-form",title:"Предоставление права проживания (заочная форма)",icon:t.jsx(J,{}),path:Hc,Component:ov,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"academic-leave-accommodation":{id:"academic-leave-accommodation",title:"Предоставление права проживания в период академического отпуска",icon:t.jsx(J,{}),path:Wc,Component:zb,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"preferential-accommodation":{id:"preferential-accommodation",title:"Предоставление права проживания льготной категории граждан",icon:t.jsx(J,{}),path:Uc,Component:Fb,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"family-room":{id:"family-room",title:"Предоставление права проживания в семейной комнате",icon:t.jsx(J,{}),path:Gc,Component:av,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"termination-of-employment-contract":{id:"termination-of-employment-contract",title:"Расторжение договора найма",icon:t.jsx(J,{}),path:Vc,Component:Mb,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"relocation-inside-hostel":{id:"relocation-inside-hostel",title:"Переселение внутри общежития",icon:t.jsx(J,{}),path:Yc,Component:Bb,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"relocation-to-another-hostel":{id:"relocation-to-another-hostel",title:"Переселение в другое общежитие",icon:t.jsx(J,{}),path:Qc,Component:Date.now()>new Date("2024-07-01").getTime()?()=>t.jsx(Se,{isRedirectButtonVisible:!1,errorText:"Прием заявок на переселение в другое общежитие завершен 30.06.2024"}):Wb,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"accommodation-for-graduates":{id:"accommodation-for-graduates",title:"Предоставление права проживания в каникулярный период",icon:J,path:qc,Component:["4","5","6"].includes((e==null?void 0:e.course)??"")||(n=(i=e==null?void 0:e.status)==null?void 0:i.toLocaleLowerCase())!=null&&n.includes("окончил")||((s=e==null?void 0:e.degreeLevel)==null?void 0:s.toLocaleLowerCase())==="магистратура"&&(e==null?void 0:e.course)==="2"?Hb:()=>t.jsx(Se,{isRedirectButtonVisible:!1,errorText:"Сервис доступен только выпускникам университета, проживающих в общежитии"}),color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"payment-recipient":{id:"payment-recipient",title:"Отправка квитанции об оплате",icon:t.jsx(J,{}),path:Ts,Component:Ub,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:A},"restoring-the-magnetic-pass":{id:"restoring-the-magnetic-pass",title:"Запрос на восстановление магнитного пропуска",icon:t.jsx(J,{}),path:Xc,Component:Gb,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:A},"military-registration-documents":{id:"military-registration-documents",title:"Отправить документы воинского учета",icon:t.jsx(J,{}),path:Jc,Component:D?ft:Qb,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:A},"military-registration":{id:"military-registration",title:"Воинский учет",icon:t.jsx(Ru,{}),path:Zc,Component:D?ft:Jr,color:"red",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"Воинский учет",fallbackPrevPage:A},"retake-for-diploma":{id:"retake-for-diploma",title:"Заявление на пересдачу для получения диплома с отличием",icon:t.jsx(J,{}),path:Kc,Component:Yb,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:A},"increased-state-academic-scholarship":{id:"increased-state-academic-scholarship",title:"Получение повышенной государственной академической стипендии",icon:t.jsx(J,{}),path:id,Component:D?ft:Vb,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:A},"financial-support":{id:"financial-support",title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)",icon:t.jsx(J,{}),path:ed,Component:D?ft:qb,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:A},"financial-assistance":{id:"financial-assistance",title:"Финансовая поддержка",icon:t.jsx(J,{}),path:td,Component:D?ft:Xb,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:A},"changing-personal-data":{id:"changing-personal-data",title:"Запрос на изменение персональных данных",icon:t.jsx(J,{}),path:nd,Component:Kb,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:A},"student-status":{id:"student-status",title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",icon:t.jsx(J,{}),path:sd,Component:Jb,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:A},"state-accreditation":{id:"state-accreditation",title:"Выдача лицензий и свидетельств о государственной аккредитации",icon:t.jsx(J,{}),path:od,Component:Zb,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:A},"holidays-after-training":{id:"holidays-after-training",title:"Предоставление каникул",icon:t.jsx(J,{}),path:ad,Component:ev,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"provision-academic-leave":{id:"provision-academic-leave",title:"Предоставление академического отпуска",icon:t.jsx(J,{}),path:rd,Component:tv,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"exit-academic-leave":{id:"exit-academic-leave",title:"Выход из академического отпуска",icon:t.jsx(J,{}),path:ld,Component:Zr,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"independently-deducted":{id:"independently-deducted",title:"Отчисление по инициативе обучающегося",icon:t.jsx(J,{}),path:cd,Component:iv,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"extension-attestation":{id:"extension-attestation",title:"Продление промежуточной аттестации ",icon:t.jsx(J,{}),path:dd,Component:nv,color:"blue",isTemplate:!1,group:"FINANCES_DOCS",isSubPage:!0,backButtonText:"Назад к цифровым сервисам",subPageHeaderTitle:"",fallbackPrevPage:A},"military-registration-card":{id:"military-registration-card",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу",icon:t.jsx(J,{}),path:Sj,Component:D?ft:sv,color:"blue",isTemplate:!1,isSubPage:!0,backButtonText:"Назад к заявлениям",subPageHeaderTitle:"",fallbackPrevPage:A}}},pd=(e,i)=>e.reduce((n,s)=>(n[s]=i[s],n),{}),Cj=["settings","profile","chat","schedule","payments","project-activity","all-students"],Ej=["home","schedule","acad-performance","all","profile"],Pj=["home","schedule","alerts","all","profile"],$j=["home","doclist","alerts","all","profile"],Aj=(e,i,n)=>{if(!e)return[];const s=i.customizeMenu.pages??Ms,o=Bs.filter(r=>!s.includes(r));return(e==null?void 0:e.user_status)==="staff"?Array.from(new Set([...o,...Object.values(n??{}).some(r=>r.length)?["download-agreements"]:[],...s])):s},ga={allRoutes:null,visibleRoutes:null,currentPage:null,isOpen:!1},Nj=()=>{const e=K(fd),i=K(gd);return{...e,homeRoutes:i}},ud=E(),hd=E(),vo=E(),xd=E(),Dj=(e,i,n)=>{const s={...n};if(s[e])s[e].notifications=i;else return null;return s},Pi=e=>{if(!e)return ua();const{accepts:i,agreements:n,checkdata:s,studLogins:o}=e,a=!!i.length||!!n.length||!!s.length||!!(o!=null&&o.length),r="download-agreements",c=Object.entries(ua()).filter(([d])=>d!==r||d===r&&a);return Object.fromEntries(c)},Oj=lt(ae.user,de.userSettings,qe.store,(e,i,n)=>{var s;return!e||!i?null:pd(Aj(e.currentUser,i,n.data),((s=e.currentUser)==null?void 0:s.user_status)==="staff"?{...Pi(n.data),...fo()}:{...Ei(),...bo(e.currentUser)})}),gd=lt(ae.user,de.userSettings,qe.store,(e,i,n)=>{var s;return!e||!i?null:pd((i==null?void 0:i.homePage.pages)??Cj,((s=e.currentUser)==null?void 0:s.user_status)==="staff"?{...Pi(n.data),...fo()}:{...Ei(),...bo(e.currentUser)})});S({source:{userStore:ae.user,settings:de.userSettings,adminLinks:qe.store},filter:({settings:e,userStore:i})=>!!e&&!!i.currentUser,fn:({settings:e,adminLinks:i,userStore:n})=>({homeRoutes:e.homePage.pages,user:n.currentUser,adminLinks:i.data}),target:vo});const fd=V(ga).on(ud,(e,{isOpen:i,currentPage:n})=>{var s;return{...e,currentPage:e.allRoutes&&n?(s=e.allRoutes)==null?void 0:s[n]:e.currentPage,isOpen:i}}).on(hd,()=>({...ga})).on(vo,(e,{user:i,adminLinks:n})=>({...e,currentPage:(i==null?void 0:i.user_status)==="staff"?Pi(n)[window.location.hash.slice(2,window.location.hash.length)]:Ei()[window.location.hash.slice(2,window.location.hash.length)],allRoutes:(i==null?void 0:i.user_status)==="staff"?{...Pi(n),...fo()}:{...Ei(),...bo(i)},visibleRoutes:(i==null?void 0:i.user_status)==="staff"?Pi(n):Ei()})).on(xd,(e,{page:i,notifications:n})=>{var s;return{...e,visibleRoutes:Dj(i,typeof n=="number"?n:n(((s=e.visibleRoutes)==null?void 0:s[i].notifications)??0),e.visibleRoutes)}}),Ye={useMenu:Nj},Pt={changeOpen:ud,clearStore:hd,defineMenu:vo,changeNotifications:xd},Ri={leftSidebar:Oj,menu:fd,homeRoutes:gd},md=(e,i,n,s)=>{const o={alert:{id:i,title:n??"Новости",text:"Вам пришло оповещение!",type:"alert",goTo:zp,duration:1e4,pageId:"alerts"},schedule:{id:i,type:"schedule",title:n??"Скоро начнется пара",text:s??"",goTo:qt,pageId:"schedule"},info:{id:i,title:n??"Важная информация!",text:s??"",type:"info"},"payment-dorm":{id:i,title:n??"Долг по общежитию",text:s??"Вам необходимо внести платеж ",type:"payment-dorm",goTo:Cn,canClose:!1,pageId:"payments"},"payment-ed":{id:i,title:n??"Долг по образованию",text:s??"Вам необходимо внести платеж",type:"payment-ed",goTo:Cn,canClose:!1,pageId:"payments"},message:{id:i,title:n??"Сообщения",text:s??"Посмотрите сообщения",type:"message",goTo:So,pageId:"chat",canClose:!1},"hr-applications":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"hr-applications",goTo:le,pageId:"hr-applications"},"kpi-pps":{id:i,title:n??"",text:s??"У вашей заявки изменился статус",type:"kpi-pps",goTo:Yl,pageId:"kpi-pps"},"doc-for-review":{id:i,title:n??"Документ для ознакомления",text:s??"",type:"doc-for-review",goTo:go,pageId:"doclist"},"digital-services":{id:i,title:n??"Статус заявки изменен",text:s??"",type:"digital-services",goTo:A,pageId:"applications"},"version-update":{id:i,title:n??"Вышла новая версия",text:"Посмотрите изменения",type:"version-update"},"electronic-interaction":{id:i,title:n??"Документ для подписания",text:"Об электронном взаимодействии",type:"electronic-interaction",goTo:$p,pageId:"electronic-interaction-agreement"}};return o[e]??o.info},Ij={message:"messages","doc-for-review":"doclist","version-update":"newVersion","digital-services":"applications",alert:"news",schedule:"schedule"},bd=(e,i)=>i.filter(({type:n})=>e[Ij[n]]),Lj={notifications:[],visibleNotifications:[],loading:!1,error:null,removeNotificationError:null,removeNotificationLoading:!1,clearAllLoading:!1,clearAllError:null,loaded:!1},es=F(async({settings:e})=>{try{const{data:i}=await zx();return bd(e,i).map(({id:n,type:s,title:o,text:a})=>md(s,n,o,a))}catch(i){throw new Error(`Не удалось загрузить уведомления. Ошибка: ${i}`)}}),Rj=F(({notifications:e})=>{e.forEach(({pageId:i})=>{i&&Pt.changeNotifications({page:i,notifications:1})})}),zj=F(({notifications:e})=>{const{pageId:i}=e[0];i&&Pt.changeNotifications({page:i,notifications:1})}),ts=F(async({id:e,pageId:i})=>{try{return await Fx(e),{id:e,pageId:i}}catch{throw new Error("Не удалось скрыть уведомление")}}),is=F(async()=>{try{await Mx()}catch{throw new Error("Не удалось скрыть все уведомления")}}),Fj=e=>{e&&Pt.changeNotifications({page:e,notifications:0})},vd=E(),yd=E(),wd=E(),jd=E(),_d=E(),kd=E(),re=V(Lj).reset(ae.userGuid);at({from:yd,to:es});S({clock:es.pending,source:re,fn:(e,i)=>({...e,loading:i}),target:re});S({clock:es.failData,source:re,fn:(e,i)=>({...e,error:i.message}),target:re});S({clock:es.doneData,source:re,fn:(e,i)=>({...e,notifications:[...i,...e.notifications],visibleNotifications:[...e.visibleNotifications,...i].slice(0,2),error:null,loaded:!0}),target:[re,Rj]});S({clock:vd,source:re,fn:(e,i)=>({notifications:[...e.notifications,i],visibleNotifications:[...e.visibleNotifications,i]}),target:[re,zj]});at({from:jd,to:ts});S({clock:ts.doneData,source:re,fn:({notifications:e,visibleNotifications:i,...n},{id:s,pageId:o})=>(Fj(o),{...n,notifications:e.filter(a=>a.id!==s),visibleNotifications:i.filter(a=>a.id!==s)}),target:re});S({clock:ts.failData,source:re,fn:(e,i)=>({...e,removeNotificationError:i.message}),target:re});S({clock:ts.pending,source:re,fn:(e,i)=>({...e,removeNotificationLoading:i}),target:re});at({from:_d,to:is});S({clock:is.pending,source:re,fn:(e,i)=>({...e,clearAllLoading:i,clearAllError:null}),target:re});S({clock:is.failData,source:re,fn:(e,i)=>({...e,clearAllError:i.message}),target:re});S({clock:is.doneData,source:re,fn:e=>({...e,notifications:[],visibleNotifications:[]}),target:re});S({clock:wd,source:re,fn:({notifications:e,visibleNotifications:i,...n},s)=>({...n,notifications:e,visibleNotifications:i.filter(o=>o.id!==s)}),target:re});S({clock:kd,source:re,fn:({notifications:e,...i})=>({...i,notifications:e,visibleNotifications:[]}),target:re});const Mj=()=>ce(re),ri={initialize:yd,add:vd,clearById:jd,clearVisibleById:wd,clearAll:_d,clearAllVisible:kd},$t={useLkNotifications:Mj},Sd=(e,i)=>Object.values(i).reduce((n,s)=>{var o;return(Ee(s.title).includes(Ee(e))||(o=s==null?void 0:s.keywords)!=null&&o.find(a=>Ee(a).includes(Ee(e))))&&(n[s.id]=s),n},{}),Bj=u.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,Hj=u(Z)`
    width: 100%;
`,fa=({division:e})=>{const{close:i}=M();return t.jsxs(Bj,{children:[t.jsxs(P,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(xt,{size:120,color:"purple",children:t.jsx(ji,{})}),t.jsx(te,{fontSize:"1.2rem",align:"center",children:e})]}),t.jsx(Hj,{to:`${Zi}/${e}`,onClick:i,children:t.jsx(y,{icon:t.jsx(Ds,{}),width:"100%",text:"Список"})})]})},Wj=({division:e})=>{const{data:{user:i}}=be.useUser(),n=(i==null?void 0:i.user_status)==="staff",{subdivisions:s}=K({subdivisions:Je.subdivisions});if(!n||!s)return t.jsx(fa,{division:e});const o=xo(s,e),a=o&&o[0];return a?t.jsx(bt,{title:a.name,info:ho(a)}):t.jsx(fa,{division:e})},Uj=u.div`
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
`,Gj=({division:e})=>{const{open:i}=M(),n=()=>{i(t.jsx(Wj,{division:e}),"Подразделение")};return t.jsx(Uj,{onClick:n,children:t.jsxs(P,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(P,{gap:"8px",children:[t.jsx(ji,{}),t.jsx(te,{fontSize:"1rem",children:e})]}),t.jsx(ct,{})]})})},Vj=({divisions:e})=>!e||e.length===0?null:t.jsx(P,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(Gj,{division:i},i))}),Yj=u.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`,ma=u(Z)`
    width: 100%;
`,Td=({group:e})=>{const{close:i}=M();return t.jsxs(Yj,{children:[t.jsxs(P,{d:"column",gap:"12px",jc:"center",h:"100%",children:[t.jsx(xt,{size:120,color:"lightBlue",children:t.jsx(Xa,{})}),t.jsx(te,{fontSize:"1.2rem",children:e})]}),t.jsxs(P,{gap:"8px",onClick:i,children:[t.jsx(ma,{to:Xi(gi,{page:"current",filter:e}),children:t.jsx(y,{icon:t.jsx(Tt,{}),width:"100%",text:"Расписание",background:"var(--theme-4)"})}),t.jsx(ma,{to:`${Ap}/${e}`,children:t.jsx(y,{icon:t.jsx(Ds,{}),width:"100%",text:"Список",background:"var(--theme-4)"})})]})]})},Qj=u.div`
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
`,qj=({group:e})=>{const{open:i}=M(),n=()=>{i(t.jsx(Td,{group:e}),"Группа")};return t.jsx(Qj,{onClick:n,children:t.jsxs(P,{gap:"8px",h:"50px",jc:"space-between",w:"100%",children:[t.jsxs(P,{gap:"8px",h:"50px",children:[t.jsx(Xa,{}),t.jsx(te,{fontSize:"1rem",children:e})]}),t.jsx(ct,{})]})})},Xj=({groups:e})=>e?t.jsx(P,{d:"column",gap:"4px",ai:"flex-start",children:e.map(i=>t.jsx(qj,{group:i},i))}):null,ps=[{title:"Инструкции",links:[{link:R+"/storage/files/instruction_business_trip_docs.docx",title:"Инструкция для командируемых работников",icon:""},{link:R+"/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf",title:"Как самостоятельно подключиться к VPN",icon:"https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg"},{link:R+"/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf",title:"Сведения об оснащении аудиторий проекторами и WiFi",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:R+"/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf",title:"Как использовать сервис печати",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf",title:"Как подключиться к WiFi в аудитории",icon:"https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png"},{link:R+"/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf",title:"Как подключиться к проектору",icon:"https://freeiconshop.com/wp-content/uploads/edd/print-flat.png"},{link:R+"/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf",title:"Как внести webinar в расписание",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf",title:"Как изменить контакты ППС в расписании",icon:"https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться курсом в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как дать доступ студентам на курс в LMS",icon:"https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico"},{link:R+"/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1",title:"Доступ к облачным сервисам Microsoft",icon:"https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png"},{link:R+"/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1",title:"Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы",icon:"https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png"},{link:R+"/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1",title:"Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха",icon:"https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png"},{link:"https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf",title:"Как проводить вебинары",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:"https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85",title:"Как использовать вебинар на занятиях (краткая видеоинструкция)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf",title:"Как настроить чат вебинара",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf",title:"Практикумы Webinar - как проводить вебинары (видеоинструкции)",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf",title:"Как получить запись прошедшего webinar",icon:"https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico"},{link:R+"/storage/files/Instruktsiya__videozapis_lektsij.pdf",title:"Как записать видеолекцию",icon:"https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png"},{link:R+"/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf",title:"Как сделать видеозапись экзамена (Webex, Teams)",icon:"https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Как пользоваться внешними ЭБС",icon:"https://cdn-icons-png.flaticon.com/128/2232/2232688.png"},{link:R+"/storage/files/Dostup_k_sisteme_Antiplagiat.pdf",title:"Как получить доступ к системе Антиплагиат",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"},{link:"https://online.mospolytech.ru/enrol/index.php?id=44",title:"Инструкция по работе преподавателя с Антиплагиат (видео)",icon:"https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico"}]},{title:"Приказы",links:[{link:R+"/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf",title:"Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»",icon:ne},{link:R+"/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF",title:"Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF",title:"Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf",title:"Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF",title:"Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF",title:"Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf",title:"Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf",title:"Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf",title:"Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF",title:"Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf",title:"Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF",title:"Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»",icon:ne},{link:R+"/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf",title:"Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»",icon:ne}]},{title:"Положения",links:[{link:R+"/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf",title:"Положение о материальной ответственности работников Московского Политеха",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf",title:"Положение о порядке замещения должностей ППС",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf",title:"Положение о системе отбора кандидатов ППС",icon:ne},{link:R+"/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf",title:"Кодекс этики и служебного поведения работников",icon:ne},{link:R+"/storage/files/stats/polozhenie_o_dk_2017.pdf",title:"Положение о дисциплинарной комиссии по обучающимся",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf",title:"Положение о комиссии по управлению правами на результаты интеллектуальной деятельности",icon:ne},{link:R+"/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf",title:"Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF",title:"Положение об антикоррупционной политике",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf",title:"Положение о порядке проведения аттестации работников",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf",title:"Положение о порядке предоставления отпусков работникам",icon:ne},{link:R+"/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf",title:"Положение об обработке и защите персональных данных",icon:ne},{link:R+"/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF",title:"Положение о процедуре избрания деканов факультетов и заведующих кафедрами",icon:ne},{link:R+"/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF",title:"Положение об Ученом совете",icon:ne},{link:R+"/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf",title:"Локальные нормативные акты, регулирующие социально-трудовые отношения",icon:ne},{link:R+"/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf",title:"Порядок оформления почасовой оплаты",icon:ne}]}];var Oe=(e=>(e.information="information",e.instructions="instructions",e.courses="courses",e.security="security",e.orders="orders",e.regulations="regulations",e))(Oe||{});const Jt={information:"Общая",instructions:"Инструкции",courses:"Курсы",security:"Безопасность",orders:"Приказы",regulations:"Положения"},Kj=[{id:Oe.information,title:Jt[Oe.information],visible:"all",content:[{title:"Учёба",links:[{title:"Промежуточная аттестация",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf"},{title:"Оплата обучения",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027"},{title:"Программы дополнительного профессионального образования",visible:"all",href:"https://study.mospolytech.ru/dpo"},{title:"Международные программы",visible:"student",href:"https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/"},{title:"Дополнительное образование",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/"},{title:"Электронная библиотека Московского Политеха",visible:"staff",href:"https://online.mospolytech.ru/course/view.php?id=7621"},{title:"Библиотечно-информационный центр",visible:"all",href:"https://new.mospolytech.ru/obuchauschimsya/biblioteka/"},{title:"Электронный каталог библиотеки Электростальского института",visible:"all",href:"http://lib.elpol.ru"},{title:"Образовательные программы",visible:"all",href:"https://mospolytech.ru/sveden/education/educationplan/"}]},{title:"Воинский учёт",visible:"student",links:[{title:"Военнообязанным и призывникам",visible:"student",href:"https://mospolytech.ru/obuchauschimsya/voennoobyazannym-i-prizyvnikam/"},{title:"Единый пункт призыва",visible:"student",href:"https://www.mos.ru/city/projects/prizyv/"}]},{title:"Общежития",links:[{title:"Правила внутреннего распорядка в студенческом городке",visible:"all",href:"https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf"}]},{title:"Наука",links:[{title:"Анонсы научных мероприятий",visible:"all",href:"https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/"},{title:"Как получить патент",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx"},{title:"Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации",visible:"all",href:"https://www.elsevier.com"},{title:"Список низкорейтинговых журналов",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx"},{title:"SciVal онлайн-платформа для мониторинга и анализа международных научных исследований",visible:"all",href:"https://www.scival.com/landing"},{title:"Студенческое научно-техническое общество",visible:"staff",href:"http://snto.mospolytech.ru"}]},{title:"Внеучебная деятельность",links:[{title:"Спортивная деятельность",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/"},{title:"Расписание спортивных секций",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf"},{title:"Студенческая жизнь",visible:"student",href:"https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039"},{title:"Профорганизация",visible:"all",href:"https://profkommospolytech.ru"},{title:"Студенческое научно-техническое общество",visible:"student",href:"http://snto.mospolytech.ru"},{title:"Формула Студент",visible:"all",href:"http://fdr.mospolytech.ru"},{title:"Медицинское обслуживание",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/"},{title:"Центр подготовки водителей (автошкола)",visible:"student",href:"https://mospolytech.ru/dop-obrazovanie/avtoshkola/"},{title:"Яхт-клуб",visible:"all",href:"https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/"},{title:"Многофункциональный центр",visible:"all",href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/"}]}]},{id:Oe.security,title:Jt[Oe.security],visible:"all",content:[{title:"Безопасность",links:[{title:"Действия работников и обучающихся при вооруженном нападении на учебный корпус (антитеррористическая защищенность)",visible:"all",href:"https://youtu.be/cH7-sC7kRwc"},{title:"Если оказались на территории вуза в момент наступившей чрезвычайной ситуации",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf"},{title:"Памятка «Подозрительный предмет»",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf"},{title:"Памятка студента по действиям в экстремальных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf"},{title:"Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF"},{title:"Безопасность в экстремальных и чрезвычайных ситуациях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF"},{title:"Как понять, что материал экстремистский, и что с этим делать",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF"},{title:"Последствия и ответственность за ложное сообщение об акте терроризма",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF"},{title:"Последствия участия в несогласованных митингах и протестных акциях",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF"},{title:"Признаки вербовки в экстремистскую организацию и как с этим справиться",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF"},{title:"Что делать, если вы обнаружили бесхозный предмет",visible:"all",href:"https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF"}]}]},{id:Oe.instructions,title:Jt[Oe.instructions],visible:"all",content:[{title:"Инструкции",links:[{title:"Инструкция по получению логина и пароля единой учётной записи студентов первого курса",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1"},{title:"Инструкции",visible:"student",href:"https://e.mospolytech.ru/old/index.php?p=instructions"},{title:"Где найти коворкинги - там есть WiFi, столы, пуфы и розетки",visible:"student",href:"https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf"},...ps[0].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Oe.regulations,title:Jt[Oe.regulations],visible:"staff",content:[{title:"Положения",links:[...ps[2].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Oe.orders,title:Jt[Oe.orders],visible:"staff",content:[{title:"Приказы",links:[...ps[1].links.map(e=>({...e,href:e.link,visible:"staff"}))]}]},{id:Oe.courses,title:Jt[Oe.courses],visible:"student",content:[{title:"Курсы",links:[{title:"Современного курсостроения",visible:"student",href:"https://project.lektorium.tv/howtomooc"}]}]}],Jj=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>Ee(a.title).includes(Ee(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),Zj=u.div`
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
`,e_=({blocks:e,isStaff:i})=>e?t.jsx(t.Fragment,{children:e.map(({title:n,links:s,visible:o},a)=>o==="staff"&&!i||o==="student"&&i?null:t.jsxs(Zj,{children:[t.jsx(z,{size:4,align:"left",bottomGap:"16px",children:n}),t.jsx(_e,{gap:16,children:s.map(({title:r,href:c,visible:d},p)=>d==="staff"&&!i||d==="student"&&i?null:t.jsx("a",{href:c,target:"_blank",rel:"noreferrer",children:r},r+p))})]},n+a))}):null;function Cs(e,i){return e.length>i?`${e.substr(0,i)}...`:e}const t_="2.3.0",Cd=()=>t.jsx(X,{icon:null,type:"info",title:t_,width:"38px",fontSize:"0.65rem",padding:"7px 0px",align:"center"}),We=({color:e,children:i})=>t.jsx(xt,{color:e,children:i}),i_=()=>({info:t.jsx(We,{color:"grey",children:t.jsx(ot,{})}),message:t.jsx(We,{color:"red",children:t.jsx(An,{})}),alert:t.jsx(We,{color:"purple",children:t.jsx(Ka,{})}),"payment-dorm":t.jsx(We,{color:"green",children:t.jsx(jt,{})}),"payment-ed":t.jsx(We,{color:"green",children:t.jsx(jt,{})}),"digital-services":t.jsx(We,{color:"red",children:t.jsx(I,{})}),"doc-for-review":t.jsx(We,{color:"blue",children:t.jsx(I,{})}),"hr-applications":t.jsx(We,{color:"green",children:t.jsx(I,{})}),"kpi-pps":t.jsx(We,{color:"pink",children:t.jsx(Qa,{})}),schedule:t.jsx(We,{color:"pink",children:t.jsx(Tt,{})}),"version-update":t.jsx(Cd,{}),"electronic-interaction":t.jsx(We,{color:"blue",children:t.jsx(Ja,{})})}),n_=u(Z)`
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
`,s_=u.div`
    font-size: ${({fontSize:e})=>e};
    font-weight: 500;
`,o_={small:"0.8rem",middle:"0.83rem",large:"0.85rem",big:"0.86rem"},a_={small:"0.75rem",middle:"0.78rem",large:"0.79rem",big:"0.80rem"},r_={small:"0px",middle:"1px",large:"2px",big:"3px"},Ed=({id:e,title:i,text:n,time:s,date:o,onClick:a,type:r,pageId:c,goTo:d,onClose:p,bottomMargin:h,closeAnimation:g=!0,loadingRemove:x=!1,canClose:f=!0,fullText:m=!0,maxLetters:b=200,size:v="middle"})=>{const T=oe(o,"short"),{close:k}=M(),[_,C]=l.useState(!1),O=L=>{L.stopPropagation(),L.preventDefault(),g?(C(!0),setTimeout(()=>{p==null||p()},300)):p==null||p()},N=()=>{a==null||a(),f&&ri.clearById({id:e,pageId:c}),k()};return t.jsx(ar,{forceState:!_,bottomMargin:h,children:t.jsxs(n_,{to:d??"",onClick:N,children:[t.jsx("span",{className:"left-icon",children:i_()[r]}),t.jsxs("div",{className:"content",children:[t.jsx(te,{fontSize:"0.7rem",children:t.jsx(Ge,{words:[T??"",s??""]})}),t.jsxs(P,{d:"column",gap:r_[v],ai:"flex-start",children:[t.jsx(s_,{fontSize:o_[v],children:m?i:Cs(i,b)}),t.jsx(te,{fontSize:a_[v],children:m?n:Cs(n,b)})]})]}),p&&t.jsx(y,{isActive:!(x&&_),icon:t.jsx(rt,{}),background:"var(--theme-2)",onClick:O,style:{borderRadius:"20px"}})]})})},Pd=({notifications:e,loadingRemove:i})=>{if(!e||e.length===0)return null;const n=(o,a,r)=>()=>{ri.clearById({id:o,pageId:a}),r==null||r()},s=o=>o.canClose!==!1?n(o.id,o.pageId,o.onClose):void 0;return t.jsx(P,{d:"column",children:e.map((o,a)=>l.createElement(Ed,{size:"big",loadingRemove:i,bottomMargin:a!==e.length-1,...o,key:o.id,onClose:s(o)}))})},_n=e=>Array.isArray(e)?e==null?void 0:e.length:Object.keys(e??{}).length,ba=({people:e,type:i})=>!e||e.length===0?null:t.jsx(P,{d:"column",children:e.map(n=>l.createElement(Zn,{name:n.fio,type:i,...n,key:n.id}))}),l_=()=>{const{allRoutes:e}=Ye.useMenu(),{notifications:i,removeNotificationLoading:n}=$t.useLkNotifications(),{data:{user:s}}=be.useUser(),o=(s==null?void 0:s.user_status)==="staff",a=l.useMemo(()=>Kj.flatMap(({visible:N,content:L})=>N==="staff"&&o||N==="student"&&!o||N==="all"?L:[]),[o]),[r,c]=l.useState(null),[d,p]=l.useState(null),[h,g]=l.useState(null),[x,f]=l.useState(null),[m,b]=l.useState(null),[v,T]=l.useState(null),[k,_]=l.useState(null),C=[{title:"Разделы",content:t.jsx(j0,{pages:m,showNotFound:!1}),clear:()=>{b(null)},search:N=>{if(e){const L=Sd(N,e);b(L)}},data:m},{title:"Студенты",content:t.jsx(ba,{people:x,type:"stud"}),data:x,clear:()=>{f(null)},search:async N=>{const{data:L}=await Lx(N,"",1,20);f(L.items)}},{title:"Сотрудники",content:t.jsx(ba,{people:h,type:"staff"}),data:h,clear:()=>{g(null)},search:async N=>{const{data:L}=await gr(N,"",1,20);g(L.items)}},{title:"Группы",content:t.jsx(Xj,{groups:r}),data:r,clear:()=>{c(null)},search:async N=>{const{data:L}=await Rx(N);c(L.items)}},{title:"Подразделения",content:t.jsx(Vj,{divisions:d}),data:d,clear:()=>{p(null)},search:async N=>{const{data:L}=await Gs(N);p(L.items)}},{title:"Уведомления",content:t.jsx(Pd,{notifications:v,loadingRemove:n}),clear:()=>{T(null)},search:N=>{const L=i.filter(se=>Ee(se.title).includes(N));T(L)},data:v},{title:"Полезная информация",content:t.jsx(e_,{blocks:k,isStaff:o}),clear:()=>{_(null)},search:N=>{const L=Jj(N,a);_(L)},data:k}];return[(()=>{const{content:N,clear:L,data:se}=C.reduce((B,Y)=>(_n(Y.data)&&(B.data.push(Y.data),B.content.push(t.jsxs(t.Fragment,{children:[t.jsx(z,{size:4,align:"left",children:Y.title}),Y.content,t.jsx(me,{})]}))),B.clear.push(Y.clear),B),{content:[],clear:[],data:[]});return{title:"Все",content:N,clear:()=>L.map(B=>B()),search:async B=>{B.length<=8&&/\d|[-]/g.test(B)?await C[3].search(B):(C[0].search(B),C[5].search(B),C[6].search(B),_n(C[0].data)===0&&(await C[1].search(B),await C[2].search(B),await C[4].search(B)))},data:se}})(),...C]},c_=()=>JSON.parse(localStorage.getItem(H.SearchHistory)??"[]"),d_=()=>{const e=l_(),[i,n]=l.useState(0),[s,o]=l.useState(""),a=l.useMemo(()=>c_(),[]),r=async x=>{e[i].clear();const f=zr(x)?Rr(x):x;await e[i].search(f),f.length>0&&!a.includes(f)&&(a.unshift(f),a.length>8&&a.pop(),localStorage.setItem(H.SearchHistory,JSON.stringify(a)))},[c,d,p]=Fn({onDebounce:r,delay:400,defaultValue:"",deps:[i.toString()],triggerDelay:200,triggerOn:x=>(o(x),x.length>0&&(s!==x||!e[i].data))}),h=!p&&!c.length,g=!!c.length&&!p&&!!_n(e[i].data);return{showMessage:h,showSearchResult:g,searchValue:c,setSearchValue:d,currentPage:i,setCurrentPage:n,config:e,loading:p,searchHistory:a}},p_=(e,i,n)=>i.length===0?n.map(s=>({id:s,title:s,value:s,icon:t.jsx(Do,{})})):e?n.filter(s=>Ee(s).includes(Ee(i))).map(s=>({id:s,title:s,value:s,icon:t.jsx(Do,{})})):[],u_=()=>t.jsxs(P,{gap:"8px",ai:"flex-start",children:[t.jsx(q,{shape:"circle",size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(P,{gap:"6px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(q,{shape:"rect",size:{width:"300px",height:"13px"},margin:"0"}),t.jsx(q,{shape:"rect",size:{width:"220px",height:"10px"},margin:"0"})]})]}),h_=u.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,x_=()=>{const{showMessage:e,showSearchResult:i,searchValue:n,setSearchValue:s,currentPage:o,setCurrentPage:a,loading:r,config:c,searchHistory:d}=d_(),p=p_(r,n,d),{isOpen:h}=M();return t.jsx(h_,{children:t.jsxs(P,{d:"column",gap:"8px",h:"100%",children:[t.jsx(Wi,{value:n,setValue:s,loading:r,focusOn:h,hints:p}),t.jsx(Js,{pages:c.map(({title:g})=>({title:g})),currentPage:o,setCurrentPage:a}),t.jsx(Fr,{value:n,setValue:s}),e&&t.jsx(P,{h:"100%",children:t.jsx(ge,{size:"60px",text:'Введите что-нибудь. Например, "Цифровые сервисы"',image:t.jsx(ii,{})})}),!r&&n.length!==0&&!e&&!_n(c[o].data)&&t.jsx(P,{h:"100%",children:t.jsx(ge,{size:"60px",text:"Ничего не было найдено",image:t.jsx(As,{})})}),r&&Array(10).fill(0).map((g,x)=>t.jsx(u_,{},x)),i&&t.jsx(t.Fragment,{children:c[o].content})]})})},g_=u(ut)`
    cursor: pointer;
    box-shadow: ${({size:e})=>e==="small"&&"var(--block-shadow-1)"};
    border-radius: 17px;

    ${W.isTablet} {
        align-items: flex-start;
    }

    &:hover {
        filter: brightness(0.96);
    }
`,f_=u.div`
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
`,m_=u(P)`
    @media (max-width: 1000px) {
        display: none;
    }
`,b_=()=>{const e=nf();return{Windows:[{title:"CTRL",key:17},{title:"K",key:75}],Linux:[{title:"CTRL",key:17},{title:"K",key:75}],UNIX:[{title:"CTRL",key:17},{title:"K",key:75}],MacOS:[{title:"CMD",key:91,icon:t.jsx(Za,{})},{title:"K",key:75}],iOS:[],Android:[]}[e]},$d=({size:e="large"})=>{const i=b_(),{open:n}=M(),s=e==="large"?"16px":"8px",o=e==="large"?"100%":"92%",a=()=>n(t.jsx(x_,{}),"Глобальный поиск");return Lr(i.map(({key:r})=>r),a),e==="icon"?t.jsx(y,{direction:"vertical",icon:t.jsx(ii,{}),width:"40px",minWidth:"40px",shrinkTextInMobile:!0,background:"transparent",onClick:a}):t.jsxs(g_,{tabIndex:0,maxWidth:"750px",width:o,size:e,height:"fit-content",padding:s,justifyContent:"space-between",onClick:a,children:[t.jsx(te,{align:"left",fontSize:"0.9rem",children:t.jsxs(P,{gap:"8px",children:[t.jsx(ii,{}),"Поиск"]})}),t.jsx(m_,{w:"fit-content",gap:"4px",children:i.map(r=>t.jsx(f_,{children:(r==null?void 0:r.icon)??r.title??""},r.key))})]})},$E=u.header`
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
`;const AE=u.div`
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
`,v_=u.div`
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
`,NE=u.div`
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
`,DE=u.div`
    margin-top: 50px;
    width: 100%;
`,OE=u.div`
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 750px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`,IE=u(ut)`
    padding: 12px;
    position: relative;

    @media (max-width: 1000px) {
        max-width: 100%;
    }
`,LE=u.div`
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
`,kn=E();S({clock:kn,source:de.userSettings,filter:e=>!!e,fn:(e,{isDark:i})=>({appearance:{...e.appearance,theme:i?ye.Dark:ye.Light}}),target:Ce.update});const Ad=({type:e,onClick:i})=>{const n=K(de.userSettings),o=(n==null?void 0:n.appearance.theme)===ye.Light,a=o?t.jsx(zu,{}):t.jsx(Fu,{}),c=`Тема: ${o?"Светлая":"Темная"}`,d=()=>{kn({isDark:o}),i==null||i()};return e==="toggle"?t.jsx(Te,{title:"Темная тема",state:!o,action:p=>kn({isDark:p})}):e==="h-button"?t.jsx(y,{text:c,background:"var(--block)",icon:a,width:"100%",align:"left",onClick:d}):t.jsx(y,{padding:"0",background:j.white.transparent2,icon:t.jsx(v_,{width:"30px",background:j.green.main,children:a}),onClick:d,text:c,width:"calc(50% - 5px)",height:"73px",direction:"vertical",shrinkTextInMobile:!0})},y_=({quantity:e=1,avatarShape:i="circle"})=>t.jsx(P,{d:"column",gap:"20px",children:Array(e).fill(0).map((n,s)=>t.jsxs(P,{gap:"16px",ai:"center",children:[t.jsx(q,{shape:i,size:{width:"40px",height:"40px"},margin:"0"}),t.jsxs(P,{gap:"8px",d:"column",ai:"flex-start",jc:"center",h:"100%",children:[t.jsx(q,{shape:"rect",size:{width:"90%",height:"13px"},margin:"0"}),t.jsx(q,{shape:"rect",size:{width:"70%",height:"10px"},margin:"0"})]})]},s))}),w_=u.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 100%;

    @media (min-width: 1001px) {
        width: 100%;
        min-width: 400px;
    }
`,j_=({maxNotificationsVisible:e})=>{const{error:i,loading:n,notifications:s,removeNotificationError:o,removeNotificationLoading:a}=$t.useLkNotifications();return l.useEffect(()=>{o&&G.evokePopUpMessage({type:"failure",message:o,time:1e4})},[o]),l.useEffect(()=>{ri.clearAllVisible()},[]),t.jsxs(w_,{children:[s.length===0&&!n&&t.jsx(Ki,{height:"100%",children:t.jsx(ge,{text:i??"Нет новых уведомлений",image:i?t.jsx(Ft,{}):t.jsx(Mu,{}),size:"70px"})}),t.jsxs(P,{d:"column",gap:"16px",children:[t.jsx(X,{lineHeight:"1.2rem",type:"tip",visible:s.length!==0,children:"Вы можете отключить получение каких-либо уведомлений в настройках"}),t.jsx(Pd,{notifications:e?s.slice(0,e):s,loadingRemove:a})]}),n&&t.jsx(y_,{quantity:10})]})},__=u.div`
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
`,Nd=()=>{const{close:e}=M(),{notifications:i}=$t.useLkNotifications(),n=3;return t.jsxs(P,{d:"column",gap:"30px",w:"100%",mw:"400px",children:[t.jsxs(P,{d:"column",gap:"16px",children:[t.jsx(j_,{maxNotificationsVisible:n}),t.jsxs(te,{width:"100%",visible:i.length>n,children:["Еще ",i.length-n," ",ll(i.length-n,{one:"уведомление",twoToFour:"уведомления",fiveToNine:"уведомлений",zero:"уведомлений"}),"..."]})]}),i.length>0&&t.jsx(Z,{to:Fp,style:{width:"100%"},children:t.jsx(y,{width:"100%",text:"Показать все",onClick:e})})]})},k_=()=>{const{notifications:e}=$t.useLkNotifications(),{open:i}=M(),n=()=>{i(t.jsx(Nd,{}),"Уведомления")};return t.jsxs(__,{onClick:n,children:[t.jsx(Wt,{outline:"none","box-shadow":"0px 0px 0px 3px var(--block)",color:"red",top:"14px",left:"30px",visible:e.length>0,pulsing:!0,className:"notification-circle",shadow:!0,children:e.length>10?"10+":e.length}),t.jsx(Nn,{})]})},S_=u.div`
    position: relative;
`,Dd=()=>{const{open:e}=M(),{notifications:i}=$t.useLkNotifications(),n=()=>Fe.close(),s=()=>{Ve.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Le.logout}),n()},o=()=>{Fe.close(),e(t.jsx(ap,{}),"Что нового")},a=()=>{e(t.jsx(Nd,{}),"Уведомления"),Fe.close()};return t.jsxs(t.Fragment,{children:[t.jsx($S,{padding:"8px",size:"small"}),t.jsx(me,{}),t.jsx(Ad,{type:"h-button"}),t.jsx(me,{}),t.jsx(Z,{to:ko,children:t.jsx(y,{text:"Профиль",background:"var(--block)",icon:t.jsx(er,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsxs(S_,{children:[t.jsx(y,{onClick:a,icon:t.jsx(Nn,{}),text:"Уведомления",width:"100%",background:"var(--block)",align:"left",padding:"10px"}),t.jsx(Wt,{visible:i.length>0,top:"50%",right:"0px",pulsing:!0,shadow:!0,children:i.length})]}),t.jsx(Z,{to:Ie,children:t.jsx(y,{text:"Настройки",background:"var(--block)",icon:t.jsx(Is,{}),width:"100%",align:"left",onClick:n,padding:"10px"})}),t.jsx("a",{href:`${R}/index.php`,children:t.jsx(y,{text:"Старый дизайн",icon:t.jsx($n,{}),width:"100%",background:"var(--block)",align:"left",padding:"10px"})}),t.jsx(me,{}),t.jsx(y,{align:"left",icon:t.jsx(tr,{}),onClick:s,text:"Выйти",width:"100%",background:"var(--block)",padding:"10px"}),t.jsx(me,{}),t.jsx(y,{align:"left",icon:t.jsx(Cd,{}),onClick:o,text:"Что нового",width:"100%",background:"var(--block)",padding:"10px"})]})},T_=u.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-1t);
    }
`,C_=({showSearch:e=!1})=>{const{data:{user:i}}=be.useUser();if(!i)return null;const n=s=>{s.preventDefault(),s.stopPropagation(),Fe.open({e:s,height:143,content:t.jsx(Dd,{})})};return t.jsxs(T_,{children:[e&&t.jsx($d,{size:"icon"}),t.jsx(k_,{}),t.jsx(At,{onClick:n,width:"30px",height:"30px",avatar:i.avatar,name:i.fullName,marginRight:"0"})]})},E_=u.header`
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
    ${W.isTablet} {
        & .back-button-wrapper button {
            transform: translateX(${({headerVisible:e})=>e?"-25px":"0"});
        }
    }

    ${W.isMobile} {
        padding: 0 15px;
        width: 100%;
        justify-content: flex-start;

        & .back-button-wrapper button {
            transform: none;
        }
    }
`,P_=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 55px)":`calc(${e} - 40px)`,$_=({maxWidth:e})=>e==="100%"||e==="963px"?"calc(100% - 44px)":`calc(${e} - 40px)`,A_=u.div`
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
        max-width: ${P_};
    }

    @media (min-width: 1001px) {
        transform: ${({headerVisible:e})=>`translate(${e?"-20px, 0":"0px, 75px"})`};
    }

    ${W.isTablet} {
        max-width: ${$_};
        transform: ${({headerVisible:e})=>`translate(${e?"-14px, 0":"6px, 75px"})`};
    }

    ${W.isMobile} {
        transform: ${({headerVisible:e,noButton:i})=>`translate(${e?i?"0, 0":"25px, 0":"0px, 50px"})`};
        width: ${({headerVisible:e})=>e?"180px":"calc(100% - 30px)"};
    }
`,N_=()=>{const{pathname:e}=Yt(),[i,n]=l.useState([e]),{action:s}=dt();return l.useEffect(()=>{switch(s){case"POP":n(i.length>1?i.slice(0,i.length-1):i);break;case"PUSH":n([...i,e]);break;case"REPLACE":n([...i.slice(0,i.length-1),e])}},[e,s]),i},D_=({visible:e=!0,text:i="Назад",fullWidth:n=!0})=>{if(!e)return null;const s=dt();return t.jsx(y,{text:i,onClick:()=>s.goBack(),icon:t.jsx(cn,{}),textColor:"var(--blue)",background:"transparent",width:n?"100%":void 0,padding:"0",height:"20px",align:"left"})},O_=({headerVisible:e,currentPage:i})=>{const n=dt(),s=N_(),o=e||!!(i!=null&&i.planeHeader),a=al(i),r=(p=$i)=>()=>{Pt.changeOpen({isOpen:!1,currentPage:p.slice(1,p.length)}),n.push(p)},c=pe.useMemo(()=>i?i.isSubPage&&i.subPageHeaderTitle||i.title:"Не известная страница",[i]);return{backButton:pe.useMemo(()=>i!=null&&i.withoutBackButton?null:i!=null&&i.isSubPage?s.length>1?t.jsx(D_,{text:o?"":i==null?void 0:i.backButtonText,fullWidth:!1}):i.fallbackPrevPage?t.jsx(y,{direction:"vertical",icon:t.jsx(cn,{}),onClick:r(i.fallbackPrevPage),background:"transparent"}):t.jsx(y,{direction:"vertical",icon:t.jsx(cn,{}),onClick:r(),background:"transparent"}):t.jsx(y,{icon:t.jsx(cn,{}),onClick:r(),background:"transparent",text:o?void 0:"Все разделы",padding:"0",textColor:"var(--blue)"}),[i,s,r]),headerTitle:c,maxWidth:a,currentPage:i,isHeaderVisible:o}},I_=({currentPage:e,headerVisible:i=!1})=>{var d;const{isMobile:n,isTablet:s}=Et(),{headerTitle:o,backButton:a,isHeaderVisible:r,maxWidth:c}=O_({currentPage:e,headerVisible:i});return e!=null&&e.withoutHeader?null:t.jsxs(E_,{headerVisible:r,hidden:(d=e??e)==null?void 0:d.withoutHeader,children:[t.jsx(A_,{maxWidth:c,noButton:e==null?void 0:e.withoutBackButton,headerVisible:r,children:o}),t.jsxs(P,{jc:"space-between",mw:c,children:[t.jsx("div",{className:"back-button-wrapper",children:a??t.jsx("div",{})}),(n||s)&&t.jsx(C_,{showSearch:!0})]})]})},L_=pe.memo(I_),R_=u(Z)`
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
`,z_=({name:e,avatar:i,loading:n,size:s,notifications:o,selected:a})=>{if(n)return t.jsx(q,{shape:"circle",size:{width:"40px",height:"40px"}});const r=c=>{c.preventDefault(),c.stopPropagation(),Fe.open({e:c,height:143,content:t.jsx(Dd,{})})};return t.jsxs(R_,{to:ko,children:[t.jsx(y,{icon:t.jsx(Ba,{}),className:"more-button",background:"transparent",onClick:r}),t.jsx(At,{notifications:o,width:s??"70px",height:s??"70px",avatar:i,name:e,marginRight:"0",selected:a}),t.jsx(z,{size:5,children:e})]})},F_=pe.memo(z_),M_=["isCurrent","color"],B_=u(Z).withConfig({shouldForwardProp:e=>!M_.includes(e)})`
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

    ${W.isTablet} {
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
`,H_=u.div`
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
`,W_=u.div`
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 12px;
`,U_=u.button`
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
`,G_=e=>{const{menuPath:i,path:n,icon:s,title:o,isCurrent:a,isAdmin:r,color:c,notifications:d}=e;return t.jsxs(B_,{to:i??n,className:"leftside-bar-item",color:c,isCurrent:a,title:o,children:[t.jsx(Wt,{className:"notification",top:"50%",visible:r,right:"-20px",color:"pink",children:"A"}),t.jsx(Wt,{className:"notification",top:"50%",visible:!!d,right:r?"0px":"-20px",color:"red",children:d}),s,t.jsx("span",{className:"title",children:o}),t.jsx(rl,{route:e})]})},Od=pe.memo(G_),V_=()=>{const{isOpen:e}=Ye.useMenu();return t.jsx(t.Fragment,{children:t.jsx(y,{icon:t.jsx(rt,{}),onClick:()=>Pt.changeOpen({isOpen:!e}),text:"Закрыть меню",width:"100%"})})},Y_=({icon:e,title:i})=>{const n=()=>{const s=e;return t.jsx(s,{})};return t.jsxs(U_,{className:"leftside-bar-item",children:[n(),t.jsx("strong",{children:i})]})};pe.memo(Y_);u.section`
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
`;const Q_=()=>{const e=K(Ri.leftSidebar),i=Yt();return e?t.jsx(W_,{children:Object.values(e).filter(Boolean).map(n=>l.createElement(Od,{...n,key:n==null?void 0:n.id,isCurrent:i.pathname.includes(n.path)}))}):t.jsxs(P,{d:"column",children:[t.jsxs(P,{gap:"8px",children:[t.jsx(q,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(q,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(P,{gap:"8px",children:[t.jsx(q,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(q,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(P,{gap:"8px",children:[t.jsx(q,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(q,{shape:"rect",size:{width:"160px",height:"18px"}})]}),t.jsxs(P,{gap:"8px",children:[t.jsx(q,{shape:"rect",size:{width:"30px",height:"30px"}}),t.jsx(q,{shape:"rect",size:{width:"160px",height:"18px"}})]})]})},q_=pe.memo(Q_),X_=()=>{const{isOpen:e}=Ye.useMenu(),{width:i,height:n}=zn(),{data:{user:s}}=be.useUser(),{visibleRoutes:o}=Ye.useMenu(),a=Yt();return t.jsxs(H_,{isOpen:e,height:n,children:[t.jsxs("div",{className:"top-wrapper",children:[t.jsx(Z,{to:_o,children:t.jsx(Ln,{width:"165px"})}),t.jsx(F_,{notifications:o==null?void 0:o.profile.notifications,avatar:s==null?void 0:s.avatar,name:(s==null?void 0:s.fullName)??"",loading:!s,selected:a.pathname==="/profile"}),t.jsx($d,{size:"small"}),t.jsx(q_,{})]}),t.jsx(Ad,{type:"toggle"}),i<1e3&&t.jsx(V_,{})]})},K_=u.div`
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
`,J_=()=>{const{isOpen:e,message:i,type:n,time:s,onClick:o}=Qx.usePopUpMessage();l.useEffect(()=>{e&&setTimeout(()=>{G.openPopUpMessage({isOpen:!e})},s)},[e]);const a=l.useCallback(()=>{o&&(o(),G.openPopUpMessage({isOpen:!e}))},[o]);return t.jsx(K_,{isOpen:e,isClickable:!!o,color:Bt[n].color,onClick:a,children:t.jsx(X,{type:n,fontSize:"1em",lineHeight:"1.4rem",onClose:()=>G.openPopUpMessage({isOpen:!1}),children:i})})},ns=u.div`
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
`;const Z_=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=l.useContext(qs);return{back:s,close:o,isOpen:e,canBack:n,component:i,title:a}},ek=u.div`
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
`,tk=u.div`
    padding-top: 30px;
`,ik=()=>{const{isOpen:e,component:i,canBack:n,back:s,close:o,title:a}=Z_(),r=l.useRef(null),c=l.useMemo(()=>e&&!!i,[e,i]);return Lr([27],o),pi(r,()=>{o()}),t.jsx(ns,{isOpen:c,children:t.jsxs(ek,{isOpen:c,ref:r,hasBack:n,hasTitle:!!a,children:[n&&t.jsx(y,{onClick:s,icon:t.jsx(Bi,{}),text:a?"":"Назад",background:"transparent",textColor:"var(--theme-opposite)",width:"fit-content",align:"left",padding:"8px",height:"fit-content",className:"back-button"}),a&&t.jsx(z,{size:3,align:"left",children:a}),t.jsx(y,{onClick:o,icon:t.jsx(rt,{}),className:"close-button",height:"35px",minWidth:"35px",width:"35px",background:"var(--almostTransparent)"}),t.jsx(tk,{children:i})]})})},nk=pe.memo(ik),sk=u.div`
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
`,ok=()=>{const{isOpen:e,message:i,onConfirm:n,onReject:s,isSubmitSuccess:o}=Mf.useConfirm(),a=l.useRef(null);pi(a,()=>Ve.closeConfirm());const r=()=>{n(),Ve.closeConfirm()},c=()=>{Ve.closeConfirm()};return t.jsx(ns,{isOpen:e,children:t.jsxs(sk,{isOpen:e,ref:a,children:[t.jsx(z,{size:3,align:"left",children:i??"Хотите продолжить?"}),t.jsxs(_e,{width:"100%",scroll:!1,direction:"horizontal",gap:5,padding:"10px 0 0 0",horizontalAlign:"right",children:[t.jsx(y,{text:"Да",onClick:r,width:"90px",textColor:o?j.green.main:j.red.main,background:"transparent",hoverBackground:o?j.green.transparent3:j.red.transparent3}),t.jsx(y,{text:"Нет",onClick:s??c,width:"90px",textColor:o?j.blue.light1:j.blue.main,background:"transparent",hoverBackground:j.blue.transparent3})]})]})})},ak=u.div`
    display: flex;
    align-items: ${({align:e})=>gs(e)};
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
`,rk=({pages:e,currentPage:i=0,width:n,className:s,maxWidth:o,sliderWidth:a,onChangePage:r,align:c="center",appearance:d=!0})=>{const[p,h]=l.useState(i),{width:g}=zn(),x=l.useRef(null),f=()=>{var b,v;x!=null&&x.current&&h(Math.round(((b=x.current)==null?void 0:b.scrollLeft)/((v=x.current)==null?void 0:v.clientWidth)))},m=b=>{var v;h(b),r==null||r((v=e[b])==null?void 0:v.id),x!=null&&x.current&&(x.current.scrollLeft=x.current.clientWidth*b)};return l.useEffect(()=>{m(p)},[i,g]),t.jsxs(ak,{width:n,align:c,maxWidth:o,children:[t.jsx(Js,{pages:e.map(({title:b,condition:v})=>({title:b,condition:v})),currentPage:p,setCurrentPage:m,sliderWidth:a,appearance:d}),t.jsx("div",{className:s??"slider-content",ref:x,onScroll:f,children:e.map(b=>b.condition!==void 0&&b.condition||b.condition===void 0?t.jsx("div",{className:"slider-page",children:b.content},b.title):t.jsx("div",{className:"slider-page",children:t.jsx(ge,{text:"Нет данных"})},b.title))})]})},ss=rk,Sn=e=>{const i=Ee(e),s=[{keys:["распознаван"],icon:t.jsx(Hu,{})},{keys:["принт"],icon:t.jsx(Wu,{})},{keys:["химич"],icon:t.jsx(Uu,{})},{keys:["сервер"],icon:t.jsx(Gu,{})},{keys:["игр"],icon:t.jsx(Vu,{})},{keys:["жизнед"],icon:t.jsx(Yu,{})},{keys:["web","веб"],icon:t.jsx(Qu,{})},{keys:["истор"],icon:t.jsx(qu,{})},{keys:["информат"],icon:t.jsx(Xu,{})},{keys:["информации"],icon:t.jsx(ot,{})},{keys:["мобильн"],icon:t.jsx(Ku,{})},{keys:["безопасн"],icon:t.jsx(Ju,{})},{keys:["автоматиз"],icon:t.jsx(Zu,{})},{keys:["линейн"],icon:t.jsx(eh,{})},{keys:["обработ"],icon:t.jsx(th,{})},{keys:["презентац"],icon:t.jsx(ih,{})},{keys:["операционн"],icon:t.jsx(Za,{})},{keys:["эконом"],icon:t.jsx(jt,{})},{keys:["информацион","программир","сайт"],icon:t.jsx(nh,{})},{keys:["анализ"],icon:t.jsx(sh,{})},{keys:["компьют","алгоритм","электрон"],icon:t.jsx(oh,{})},{keys:["сети","сетей"],icon:t.jsx(ah,{})},{keys:["матем"],icon:t.jsx(rh,{})},{keys:["вероятн"],icon:t.jsx(lh,{})},{keys:["философ"],icon:t.jsx(za,{})},{keys:["данны"],icon:t.jsx(ch,{})},{keys:["язык"],icon:t.jsx(dh,{})},{keys:["спорт","физичес"],icon:t.jsx(ph,{})},{keys:["проектная"],icon:t.jsx(us,{})},{keys:["интеллект"],icon:t.jsx(uh,{})},{keys:["научн"],icon:t.jsx(hh,{})},{keys:["предприним"],icon:t.jsx(xh,{})},{keys:["коммуникац"],icon:t.jsx(gh,{})},{keys:["управлени"],icon:t.jsx(Ls,{})},{keys:["вкр","итоговая","аттестация"],icon:t.jsx(ir,{})},{keys:["переработ"],icon:t.jsx(fh,{})},{keys:["машин","инжен"],icon:t.jsx(mh,{})},{keys:["проектир","расчет"],icon:t.jsx(bh,{})},{keys:["производ"],icon:t.jsx(Wa,{})},{keys:["эколог"],icon:t.jsx(vh,{})},{keys:["защит"],icon:t.jsx(yh,{})},{keys:["патент"],icon:t.jsx(wh,{})},{keys:["материал"],icon:t.jsx(jh,{})},{keys:["физик"],icon:t.jsx(_h,{})},{keys:["тайм"],icon:t.jsx(kh,{})},{keys:["практика"],icon:t.jsx(Rs,{})}].find(o=>o.keys.find(a=>i.includes(a)));return s?s.icon:t.jsx(Bu,{})},Es={"9:00 - 10:30":j.green,"10:40 - 12:10":j.lightGreen,"12:20 - 13:50":j.blue,"14:30 - 16:00":j.purple,"16:10 - 17:40":j.pink,"17:50 - 19:20":j.red,"18:20 - 19:40":j.orange,"19:30 - 21:00":j.orange,"19:50 - 21:10":j.orange},Id=({deps:e,getScrollTopValue:i,condition:n=!0})=>{const s=l.useRef(null);return l.useLayoutEffect(()=>{if(s.current&&n){const o=i(s.current);s.current.scrollTop=o}},[s,...e??[]]),s},lk=u.div`
    padding-left: var(--time-width);
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
`,os=(e,i="minutes")=>{switch(i){case"minutes":const n=new Date,[s,o]=e.split(":");return+s*60+ +o-(n.getHours()*60+n.getMinutes());case"days":const a=new Date(e);return Math.ceil(Math.floor((a.getTime()-new Date().getTime())/1e3/60/60)/24)}},ck=e=>{if(!e)return 1/0;const i=e.reduce((n,s)=>{const o=os(s.startTime);return o>0&&n.push(o),n},[]);return Math.min(...i)},Ld=(e,i,n)=>ck(e)===os(i.startTime)&&n,zi=e=>e<=9?"0"+e:e,dk=e=>`${zi(Math.floor(e/60))}:${zi(e%60)}`,va=(e=new Date,i,n)=>{const s=e.getHours()*60+e.getMinutes();return i&&s<i?i:n&&s>n?n:s},pk=u.div`
    background: ${({background:e})=>e};
    position: absolute;
    width: calc(100% + 45px);
    height: calc(100% + 25px);
    left: ${({noPadding:e})=>e?"-25px":0};
    top: ${({noPadding:e})=>e?"-55px":0};
    z-index: -1;
    overflow: hidden;

    ${W.isMobile} {
        width: calc(100% + 40px);
    }
`,uk=u.div`
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
`,hk=u(P)`
    font-size: ${({shortInfo:e})=>`${e?.92:1}rem`};
    cursor: ${({onClick:e})=>e&&"pointer"};

    &:hover {
        background: ${({onClick:e})=>e&&"var(--theme-1t)"};
    }

    ${W.isMobile} {
        font-size: ${({shortInfo:e})=>`${e?.6:.95}rem`};
    }
`,ya=u.div`
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

    ${W.isMobile} {
        svg {
            width: 16px;
            height: 16px;
        }
    }
`,xk=u(te)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: auto;
`,gk=u.div`
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
`,fk=u.div`
    color: ${j.red.main};
    font-weight: 500;
    background: var(--block);
    position: absolute;
    font-size: 0.82rem;
    width: var(--time-width);
    left: calc(var(--time-width) * -1);
    box-shadow: -26px 0 26px 26px var(--block);

    ${W.isMobile} {
        background: var(--theme);
        box-shadow: -26px 0 26px 26px var(--theme);
        font-size: 0.7rem;
    }
`,mk=({isVisible:e=!0,shift:i,scale:n,interval:s,showTime:o=!0})=>{const[a,r]=l.useState(va(new Date,s[0]*60,s[1]*60)),c=l.useRef(null);return l.useEffect(()=>(c.current=setInterval(()=>{r(va(new Date,s[0]*60,s[1]*60))},Hs.minute),()=>clearInterval(c.current)),[e]),t.jsx(gk,{currentTime:(a-i)*n,children:o&&t.jsx(fk,{children:dk(a)})})},Rd=e=>{if(e.includes("https://")){const i=e.split(" "),n=i.findIndex(o=>o.includes("https")),s=i.splice(n,n+1)[0];return{name:i.join(" "),link:s}}return{name:e}},ze=({icon:e,text:i,onClick:n,rightIcon:s,shortInfo:o=!1})=>t.jsxs(hk,{onClick:n,shortInfo:o,gap:"7px",mw:"100%",w:"fit-content",children:[t.jsx(ya,{shortInfo:o,children:e}),t.jsx(xk,{width:"100%",className:"text",children:i}),t.jsx(ya,{shortInfo:o,children:s})]}),bk=u.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 400px;
        height: 400px;
    }
`,vk=u(Z)`
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
`,yk=({groups:e})=>{const{close:i}=M();return t.jsx(bk,{children:e.map(n=>t.jsxs(vk,{to:Xi(gi,{page:"current",filter:n.trim()}),onClick:i,children:[t.jsxs("div",{className:"start",children:[t.jsx(ni,{}),n]}),t.jsx(ct,{})]},n))})},wk=({icon:e,background:i,noPadding:n=!1})=>t.jsx(pk,{background:i,noPadding:n,children:t.jsxs(uk,{children:[t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e}),t.jsx("div",{children:e})]})}),jk=({subjectName:e,color:i,noPadding:n})=>{const s=Sn(e),o=K(de.userSettings),a=o==null?void 0:o.appearance.theme,r=a===ye.Light?i.dark3:i.light3,c=a===ye.Light?i.light3:i.dark3,d=a===ye.Light?i.light3:i.dark3;return t.jsxs(_k,{noPadding:n,textColor:r,iconBackground:d,children:[t.jsx(wk,{noPadding:n,icon:s,background:c}),t.jsx(xt,{color:i.main,size:70,borderRadius:"19px",children:s})]})},_k=u.div`
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
`,kk=Sh`
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
`,Sk=({color:e,start:i})=>`
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
}`,zd=({timeInterval:e,color:i,isCurrentEvent:n})=>{const s=K(de.userSettings),a=(s==null?void 0:s.appearance.theme)===ye.Light?i.main:i.light2;return t.jsxs(Ck,{children:[t.jsx(Tk,{start:n,color:a}),e&&t.jsx(Ek,{children:e})]})},Tk=u.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({color:e})=>e};
    position: relative;

    ${Sk}
`,Ck=u.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 6px;
`,Ek=u.span`
    font-weight: 500;
    font-size: 0.8rem;

    ${W.isMobile} {
        font-size: 0.7rem;
    }
`,Pk=u.div`
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
`,$k=u(P)`
    padding: ${({noPadding:e})=>e?"24px 0 0 0":"24px"};
    hyphens: auto;
    height: calc(100% - 154px);
`,Ak=e=>{const{timeInterval:i,name:n,place:s,teachers:o,dateInterval:a,link:r,rooms:c,groups:d,color:p,weekday:h,isNextEvent:g,isCurrentEvent:x,noPadding:f=!1}=e,m=(d==null?void 0:d.split(","))??[],{open:b}=M(),v=()=>{m.length===1?b(t.jsx(Td,{group:m[0]})):b(t.jsx(yk,{groups:m}),"Группы")},T=()=>{b(t.jsx(Dk,{place:s,link:r,name:n}))},k=Rd(n);return t.jsxs(Pk,{children:[t.jsx(jk,{subjectName:n,color:p,noPadding:f}),t.jsxs($k,{noPadding:f,d:"column",gap:"20px",ai:"flex-start",children:[t.jsxs(P,{jc:"space-between",ai:"flex-start",d:"column",gap:"6px",children:[t.jsxs(P,{gap:"8px",children:[t.jsx(zd,{isCurrentEvent:x,color:p,timeInterval:i}),t.jsx(Fd,{timeLeft:os(i.split(" - ")[0],"minutes"),isNext:g,color:p,isCurrentEvent:x})]}),t.jsx(z,{size:3,align:"left",width:"fit-content",children:k.name})]}),t.jsx(me,{margin:"0",width:"100%"}),t.jsx(ze,{icon:t.jsx(zs,{}),text:t.jsx(Ge,{words:[h??"",a]})}),((r==null?void 0:r.length)||k.link)&&t.jsx("a",{href:r??k.link,target:"_blank",rel:"noreferrer",children:t.jsx(ze,{icon:t.jsx(xn,{}),text:r?s:"Ссылка"})}),!(r!=null&&r.length)&&t.jsx(ze,{icon:t.jsx(Rs,{}),text:s}),!!c.length&&t.jsx(ze,{icon:t.jsx(hs,{}),text:t.jsx(Ge,{words:c})}),!!m.length&&t.jsx(ze,{onClick:v,icon:t.jsx(Ls,{}),text:t.jsx(Ge,{words:m}),rightIcon:t.jsx(ct,{})}),t.jsx(P,{d:"column",ai:"flex-start",children:!!o[0].length&&t.jsxs(t.Fragment,{children:[t.jsx(z,{size:4,align:"left",bottomGap:!0,children:"Преподаватели"}),o.map(_=>t.jsx(Zn,{type:"staff",name:_},_))]})}),!r&&t.jsx(me,{margin:"0",width:"100%"}),!r&&t.jsx(y,{text:"Посмотреть на карте",width:"100%",onClick:T})]})]})};u.span`
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
`;const Nk=u.a`
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
`,ln=({title:e,link:i,image:n})=>i?t.jsxs(Nk,{href:i,children:[t.jsx("img",{src:n,alt:"",loading:"lazy"}),t.jsx(z,{size:3,children:e})]}):null,wa=u.div`
    ${W.isNotMobile} {
        width: 500px;
    }

    height: 200px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: var(--theme-2);
`,Dk=({place:e,link:i,name:n})=>{const[s,o]=l.useState(!1);return l.useEffect(()=>{o(!0),setTimeout(()=>o(!1),500)},[n]),s?t.jsx(wa,{children:t.jsx(P,{jc:"center",children:t.jsx(et,{})})}):t.jsx(wa,{children:e==="Webex"?t.jsx(ln,{title:e,link:i,image:"https://lh3.googleusercontent.com/-IR3NTxu_EJY/YMB7bMtdDOI/AAAAAAAAAmA/57OhYSNULo0ICfc3Q4TWAoRM7ohUFLJmwCLcBGAsYHQ/s220-w220-h140-nd/220x140%2BCisco%2BWebex%25281%2529.png"}):e==="Zoom"?t.jsx(ln,{title:e,link:i,image:"https://yogaworks.ru/wp-content/uploads/2020/04/zoom-banner-600x300-600x300.jpg"}):e==="Обучение LMS"?t.jsx(ln,{title:e,link:i,image:"https://online.mospolytech.ru/pluginfile.php/1/theme_opentechnology/settings_setpolytech_header_backgroundimage/1638781183/01.jpg"}):e==="Webinar"?t.jsx(ln,{title:e,link:i,image:"https://apix-drive.com/ru/img/webinar_ru.png"}):e==="Прянишникова"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_pryanishnikova_2a/Z04YcwNjTkAPQFtvfXRycntjbA==/?ll=37.545032%2C55.833931&utm_medium=mapframe&utm_source=maps&z=17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Улица Прянишникова, 2А на карте Москвы, ближайшее метро Коптево — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPA0PC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Автозаводская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Москва"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/house/avtozavodskaya_ulitsa_16/Z04YcANlSEwBQFtvfXtxdX5hZA==/?ll=37.646696%2C55.704260&utm_medium=mapframe&utm_source=maps&z=18.17",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"Автозаводская улица, 16 — Яндекс Карты"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPsXDC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Павла Корчагина"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1743307891/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский Политехнический университет"}),t.jsx("a",{href:"https://yandex.ru/maps/213/moscow/category/university_college/184106140/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"},children:"ВУЗ в Москве"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBAPtC9A",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Большая Семеновская"?t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/moskovskiy_politekhnicheskiy_universitet/1113152789/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Московский политехнический университет"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBATAEkC",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]}):e==="Михалковская "&&t.jsxs("div",{style:{position:"relative",overflow:"hidden"},children:[t.jsx("a",{href:"https://yandex.ru/maps/org/sportivny_klub_sektsiya/1699871922/?utm_medium=mapframe&utm_source=maps",style:{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"},children:"Спортивный клуб, секция"}),t.jsx("iframe",{src:"https://yandex.ru/map-widget/v1/-/CCUBA-FspD",width:"560",height:"400",frameBorder:"1",allowFullScreen:!0,style:{position:"relative"}})]})})},ja=u.div`
    border-radius: var(--brSemi);
    background: ${({background:e})=>e};
    color: ${({color:e})=>e};
    padding: 3px 8px;
    white-space: nowrap;
    font-size: 0.65rem;
    font-weight: 500;
`,Fd=({timeLeft:e,isNext:i,color:n,isCurrentEvent:s})=>{const o=Math.floor(e/60),a=K(de.userSettings),r=a==null?void 0:a.appearance.theme,c=r===ye.Light?n.dark3:n.light3,d=r===ye.Light?n.transparent1:n.transparent3;return!i&&!s?null:s?t.jsx(ja,{background:d,color:c,children:"Сейчас"}):t.jsxs(ja,{background:d,color:c,children:["через ",!!o&&o+"ч."," ",e%60,"мин."]})},Ok=u.div`
    width: 100%;
    background: var(--block);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;

    .horizontal {
        display: flex;
        align-items: center;
    }
`,RE=()=>t.jsxs(Ok,{children:[t.jsxs("div",{className:"horizontal",children:[t.jsx(q,{shape:"rect",size:{width:"86px",height:"20px"},margin:"0"}),t.jsx(q,{shape:"rect",size:{width:"60px",height:"14px"},margin:"0 5px"})]}),t.jsx(q,{shape:"rect",size:{width:"200px",height:"17px"},margin:"16px 0"}),t.jsxs("div",{className:"horizontal",children:[t.jsx(q,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0"}),t.jsx(q,{shape:"rect",size:{width:"120px",height:"13px"},margin:"0 10px"})]}),t.jsx(q,{shape:"rect",size:{width:"80px",height:"12px"},margin:"5px 0"})]}),Md="/assets/sleep-54d590c1.gif";var Bd=(e=>(e[e.day=0]="day",e[e.week=1]="week",e[e.month=2]="month",e))(Bd||{});const Ik=[{title:"День",condition:!0},{title:"Неделя",condition:!0}],zE=[...Ik,{title:"Месяц",condition:!0}],zt=Object.keys(Zt).reduce((e,i)=>(e[i]=[],e),{}),Lk={schedule:{today:[],week:{...zt},semestr:{data:{...zt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)},session:{data:{...zt},startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)}},teachers:[]},Rk=e=>{const i=new Date(e),n=i.getDay(),s=i.getDate()-n+(n==0?-6:1);return new Date(i.setDate(s))},Fi=e=>{const[i,n]=e.split(":");return+i*60+ +n};var Tn=(e=>(e[e.Янв=1]="Янв",e[e.Фев=2]="Фев",e[e.Мар=3]="Мар",e[e.Апр=4]="Апр",e[e.Май=5]="Май",e[e.Июн=6]="Июн",e[e.Июл=7]="Июл",e[e.Авг=8]="Авг",e[e.Сен=9]="Сен",e[e.Окт=10]="Окт",e[e.Ноя=11]="Ноя",e[e.Дек=12]="Дек",e))(Tn||{});const Hd=e=>{const[i,n]=e.split(" "),s=Tn[n],o=new Date().getFullYear();return new Date(`${s}/${i}/${o}`)},Wd=(e,i)=>{const[n,s]=(e==null?void 0:e.split(" "))??[null,null],o=i.split(" ")[1],a=Tn[o],r=Tn[s]||a;return n&&r?new Date(`${r}/${n}/${r>=a?new Date().getFullYear():new Date().getFullYear()+1}`):null},wi=(e,i)=>e?e==null?void 0:e.map(({place:s,name:o,teachers:a,timeInterval:r,link:c,dateInterval:d,rooms:p,groups:h})=>{const[g,x]=r.split(" - "),f=Fi(x)-Fi(g),[m,b]=d.split("-").map(k=>k.trim()),v=Hd(m),T=Wd(b,m);return{title:o,people:a,startTime:g,duration:f,startDate:v,endDate:T,placeIcon:t.jsx(Th,{}),dateInterval:d,color:Es[r],place:s,link:c,groups:h,weekday:i,rooms:p,icon:Sn(o)}}):[],zk=e=>new Date(e.setHours(0,0,0,0)),_a=(e,i)=>(e??[]).filter(n=>{const s=zk(i),[o,a]=n.dateInterval.split("-").map(d=>d.trim()),r=Hd(o),c=Wd(a,o);return s>=r&&s<=(c??r)}),Ud=e=>e.toLocaleDateString("en-US",{weekday:"long"}).toLocaleLowerCase(),Ps=e=>e instanceof Date&&isFinite(+e),Fk=e=>{const i={...zt},n=new Date(Object.keys(e)[0]),s=new Date(Object.keys(e)[Object.keys(e).length-1]);if(!Ps(n)||!Ps(s))return{schedule:i,startDate:new Date(new Date().getFullYear(),new Date().getMonth(),1),endDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0)};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const a=new Date(o),r=Ud(a);if(r==="sunday")continue;i[r]=[...i[r],...wi(e[o].lessons,Zt[r].short)]}return{schedule:i,startDate:n,endDate:s}},Gd=(e,i)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+i),Vd=(e,i)=>{let n=new Date(new Date().getFullYear(),new Date().getMonth(),1),s=new Date(new Date().getFullYear(),new Date().getMonth()+1,0);if(typeof e=="object"&&"status"in e){const g=`Не удалось загрузить расписание. Причина: ${e.message??"-"}`;return G.evokePopUpMessage({message:g,type:"failure",time:Hs.ten_seconds}),{schedule:Lk.schedule,errorInData:g}}const o=new Date;let a=Rk(o);o.getDay()===0&&(a=Gd(o,1));const r={...zt},c={...zt};for(const g in e)if(g!=="Sunday"){const x=g.toLocaleLowerCase(),m=e[g];"lessons"in m?(r[x]=wi(_a(m.lessons,a),Zt[x].short),c[x]=wi(m.lessons,Zt[x].short)):(r[x]=wi(_a(m,a),Zt[x].short),c[x]=wi(m,Zt[x].short)),n=new Date(Math.min(...c[x].map(b=>b.startDate.getTime()),n.getTime())),s=new Date(Math.max(...c[x].map(b=>(b.endDate??b.startDate).getTime()),s.getTime())),a.setDate(a.getDate()+1)}const d=new Date().toLocaleDateString("en-EN",{weekday:"long"}).toLocaleLowerCase(),p=r[d],h=Fk(i);return{schedule:{today:p,week:r,semestr:{data:c,startDate:n,endDate:s},session:{data:h.schedule,startDate:h.startDate,endDate:h.endDate}}}},Yd=async e=>{const i=await bx(e),n=await yx();return Vd(i.data,n.data)},Qd=async e=>{const i=await vx(e),n=await wx(e);return Vd(i.data,n.data)},ka={data:{schedule:null,externalSchedule:null,view:Bd.day,filter:"",searchValue:"",hasNoSchedule:!1},loading:!1,error:null},Mk=()=>vt(xe),Ut=F(async e=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указан пользователь");const{group:i,fullName:n,user_status:s}=e;if(n&&s==="staff")return await Qd(n);if(i&&s==="stud")return await Yd(i);throw new Error("Невозможно получить расписание, так как не указан ни один из параметров")}catch(i){throw new Error(i.message)}}),hi=F(async({group:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указана группа");return await Yd(e)}catch(i){throw new Error(i.message)}}),xi=F(async({fullName:e})=>{try{if(!e)throw new Error("Невозможно получить расписание, так как не указано имя сотрудника");return await Qd(e)}catch(i){throw new Error(i.message)}}),Bk=E(),qd=E(),Xd=E(),Kd=E(),Jd=E(),Zd=E(),xe=V(ka).on(Ut,e=>({...e,data:{...e.data,schedule:null,hasNoSchedule:!1},error:null})).on(Ut.failData,(e,i)=>({...e,error:`${i.cause}, ${i.message}, ${i.stack}, ${i.name}`})).on(qd,(e,i)=>({...e,data:{...e.data,view:i}})).on(Xd,(e,i)=>({...e,currentChosenDay:i.day})).on(ae.userGuid,()=>({...ka}));S({clock:Ut.doneData,source:xe,fn:(e,i)=>({...e,data:{...e.data,...i,hasNoSchedule:i.errorInData?!1:JSON.stringify(i.schedule.semestr.data)===JSON.stringify(zt)}}),target:xe});S({clock:Kd,source:xe,fn:(e,i)=>({...e,data:{...e.data,filter:i}}),target:xe});S({clock:Jd,source:xe,fn:(e,i)=>({...e,data:{...e.data,searchValue:i}}),target:xe});S({clock:xi.doneData,source:xe,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:xe});S({clock:hi.doneData,source:xe,fn:(e,i)=>({...e,data:{...e.data,externalSchedule:i.schedule,errorInData:i.errorInData}}),target:xe});S({clock:[hi,xi,Ut],source:xe,fn:e=>({...e,loading:!0}),target:xe});S({clock:[hi,xi],source:xe,fn:e=>({...e,data:{...e.data,externalSchedule:null}}),target:xe});S({clock:[hi.doneData,xi.doneData,Ut.doneData],source:xe,fn:e=>({error:null,loading:!1,data:{...e.data}}),target:xe});S({clock:[hi.failData,xi.failData,Ut.failData],source:xe,fn:(e,i)=>({...e,error:i.message,loading:!1}),target:xe});S({clock:Zd,source:xe,fn:e=>({...e,data:{...e.data,externalSchedule:null,externalStartDate:null,externalEndDate:null}}),target:xe});const ep={useSchedule:Mk},FE={changeCurrentModule:Bk,changeView:qd,changeCurrentChosenDay:Xd,resetExternalSchedule:Zd,setSearchValue:Jd,setFilter:Kd},ME={getScheduleFx:Ut,getGroupScheduleFx:hi,getTeacherScheduleFx:xi},Hk=(e,i)=>{const[n,s]=e.split(":"),o=+n*60+ +s+i;return`${zi(Math.floor(o/60))}:${zi(o%60)}`},tp=(e,i)=>e?`${e} - ${Hk(e,i)}`:"9:00",$s=e=>!e||!Ps(e)?0:e.getHours()*60+e.getMinutes(),yo=(e,i)=>Fi(e.startTime)<=$s(new Date)&&$s(new Date)<=Fi(e.startTime)+e.duration&&i,ip=()=>{const{open:e}=M();return n=>{const s=tp(n.startTime,n.duration);e(t.jsx(Ak,{link:n.link,isNextEvent:!1,timeInterval:s,name:n.title,teachers:n.people,rooms:n.rooms??[],groups:n.groups,isCurrentEvent:yo(n,!0),noPadding:!0,...n}))}},Sa={isMiddleDesktop:1.35,isSmallDesktop:1.35,isTablet:1.5,isMobile:1.2},Wk=()=>{const{currentDevice:e}=Et(),[i,n]=l.useState(Sa[e]);return l.useEffect(()=>{n(Sa[e])},[e]),i},Uk=u.div`
    --time-width: 55px;

    ${W.isNotMobile} {
        width: 500px;
        height: 500px;
    }

    ${W.isMobile} {
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
`,Gk=({dayEvents:e,day:i,isCurrentDay:n})=>{const s=Wk(),o=ip(),a=[9,22];return e!=null&&e.length?t.jsx(Uk,{children:t.jsx(op,{events:e,interval:a,scale:s,weekday:0,isCurrentDay:n,currentDay:0,shift:a[0]*60,onEventClick:o})},i):t.jsx(ge,{text:"В этот день пар нет",image:Md})},np=()=>{const{data:{schedule:e}}=ep.useSchedule(),{open:i}=M(),n=Gd(new Date,1),s=hl(n.toLocaleDateString("ru-RU",{weekday:"long",day:"2-digit",month:"long"})),o=Ud(n),a=o==="sunday"?[]:e==null?void 0:e.week[o];if(!(e!=null&&e.week))return null;const r=()=>i(t.jsx(Gk,{isCurrentDay:!1,dayEvents:a,day:s}),s);return t.jsx(y,{text:"Посмотреть следующий",onClick:r,textColor:"var(--blue)",background:"transparent"})},Vk=u.div`
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
`,BE=({errorInData:e})=>t.jsxs(Vk,{children:[t.jsx("img",{src:Md}),t.jsx("span",{children:"В этот день пар нет"}),!e&&t.jsx(np,{})]});u.div`
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
`;const Yk=(e,i,n)=>i?e?1:.8:n?1:0,Qk=e=>e?1:.9;u.div`
    display: flex;
    flex-direction: column;
    min-width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6 - 9px)":"400px"};
    width: ${({width:e,isFull:i})=>e?e+"px":i?"calc(100% / 6)":"400px"};
    height: ${({height:e})=>e?e+"px":"fit-content"};
    transition: 0.2s;
    color: var(--text);
    opacity: ${({isCurrent:e,isFull:i,isVisible:n})=>Yk(e,i,n)};
    transform: scale(${({isVisible:e})=>Qk(e)});
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
`;const qk=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 144px;
    background: var(--block);
    border-radius: var(--brLight);
    row-gap: 10px;
`,HE=()=>t.jsxs(qk,{children:[t.jsx(Ks,{size:"38px"}),t.jsx(z,{size:4,children:"Учебный день завершился"}),t.jsx(np,{})]});u.div`
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
`;const Xk=e=>{const[i,n]=e.split(":");return+i*60+ +n},sp=(e,i,n)=>e?(Xk(e)-i)*n:0,Kk=u.div`
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

    ${W.isMobile} {
        padding: ${({shortInfo:e,scale:i})=>e?"4px":`${i*10}px`};
    }
`;u.div`
    min-width: 35px;
    height: 100%;

    svg {
        width: 22px;
        height: 22px;
    }

    ${W.isMobile} {
        min-width: 28px;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`;const Jk=u(P)`
    gap: ${({shortInfo:e})=>e?"6px":"10px"};
    height: 100%;

    ${W.isMobile} {
        gap: ${({shortInfo:e})=>e?"6px":"8px"};
    }
`,Zk=u.span`
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

    ${W.isMobile} {
        word-break: break-all;
        font-size: ${({shortInfo:e})=>e?"0.7rem":"0.8rem"};
    }
`,eS=u.div`
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
`,tS=u(P)`
    height: 100%;
    z-index: 1;
    position: relative;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
`,iS=e=>{const{title:i,duration:n,icon:s,startTime:o,place:a,people:r,shift:c,color:d,scale:p,onClick:h,link:g,rooms:x,dateInterval:f,leftShift:m,quantity:b,groups:v,isCurrentEvent:T=!1,nameInOneRow:k=!0,isNextEvent:_=!1,listView:C=!1,shortInfo:O=!1}=e,N=K(de.userSettings),{isMobile:L}=Et(),se=(N==null?void 0:N.appearance.theme)===ye.Light?d.dark3:d.light3,B=(N==null?void 0:N.appearance.theme)===ye.Light?d.transparent1:d.transparent2,Y=()=>h(e),ue=(L||b>1)&&O,Re=L&&b>=2&&O,Ne=r==null?void 0:r.map(fi=>{var tn,nn;const Xe=fi.split(" ");return`${Xe[0]??""} ${((tn=Xe[1])==null?void 0:tn[0])??""}.${((nn=Xe[2])==null?void 0:nn[0])??""}.`}),it=sp(o,c,p),De=Rd(i),je=Re?i.split(" ").map(fi=>fi[0].toUpperCase()):Cs(De.name,O?ue?43:35:k?300:64),Xt=(v==null?void 0:v.split(","))??[];return t.jsxs(Kk,{background:B,textColor:se,listView:C,leftShift:100*m,quantity:100/b,duration:n,scale:p,top:it,onClick:Y,shortInfo:O,children:[t.jsx(eS,{children:s}),t.jsx(P,{className:"event-body",gap:"0px",ai:"flex-start",children:t.jsxs(Jk,{scale:p,d:"column",ai:"flex-start",shortInfo:O,children:[t.jsxs(P,{d:"column",gap:"2px",children:[!O&&t.jsxs(P,{gap:"8px",children:[t.jsx(zd,{timeInterval:tp(o,n),color:d,isCurrentEvent:T}),t.jsx(Fd,{timeLeft:os(o,"minutes"),isNext:_,color:d,isCurrentEvent:T}),!!(x!=null&&x.length)&&t.jsx(ze,{shortInfo:O,icon:L&&b>1?void 0:t.jsx(hs,{}),text:t.jsx(Ge,{words:x})}),(!!g||De.link)&&t.jsx("a",{href:g??De.link,target:"_blank",rel:"noreferrer",children:t.jsx(ze,{shortInfo:O,icon:t.jsx(xn,{}),text:g?a:"Cсылка"})}),!!Xt.length&&t.jsx(ze,{icon:t.jsx(Ls,{}),text:t.jsx(Ge,{words:Xt})})]}),t.jsx(Zk,{listView:C,nameInOneRow:k,scale:p,shortInfo:O,children:je})]}),!!r.length&&!ue&&t.jsx(ze,{shortInfo:O,text:t.jsx(Ge,{words:O?[Ne[0]]:Ne}),icon:t.jsx(Ch,{})}),!!(x!=null&&x.length)&&O&&!ue&&t.jsx(ze,{shortInfo:O,icon:t.jsx(hs,{}),text:t.jsx(Ge,{words:x})}),!!g&&O&&!ue&&t.jsx("a",{href:g,target:"_blank",rel:"noreferrer",children:t.jsx(ze,{shortInfo:O,icon:t.jsx(xn,{}),text:a})}),!!f&&!ue&&t.jsx(P,{gap:"5px",children:t.jsx(ze,{shortInfo:O,icon:t.jsx(zs,{}),text:f})})]})})]})},nS=e=>{const i={};if(!e)return i;for(let n=0;n<e.length;n++){const s=e[n];i[s.startTime]||(i[s.startTime]=[]),s.startTime==="18:20"?(i["17:50"]||(i["17:50"]=[]),i["17:50"].push(s)):s.startTime==="19:50"&&i["19:30"]?(i["19:30"]||(i["19:30"]=[]),i["19:30"].push(s)):s.startTime==="19:30"&&i["19:50"]?(i["19:50"]||(i["19:50"]=[]),i["19:50"].push(s)):i[s.startTime].push(s)}return i},sS=({events:e,shift:i,scale:n,shortInfo:s,weekDay:o,interval:a,showTime:r,onClick:c,currentDay:d,isCurrentDay:p})=>{const h=nS(e),g=p??new Date().getDay()===o,x=d!==void 0?d+1===o:void 0;return t.jsxs(tS,{h:"100%",d:"column",children:[g&&t.jsx(mk,{isVisible:x,showTime:r,scale:n,shift:i,interval:a}),Object.keys(h).map((f,m)=>h[f].map((b,v)=>l.createElement(iS,{leftShift:v,quantity:h[f].length,scale:n,isCurrentEvent:yo(b,g),isNextEvent:Ld(e,b,g),...b,onClick:c,shift:i,key:b.startTime+b.title+m+v,shortInfo:s})))]})},oS=u(P)`
    position: absolute;
    left: 0;
    z-index: 0;
    height: ${({scale:e,timesLen:i})=>`${i*e*60+20}px`};
`,aS=u.div`
    width: 100%;
    pointer-events: none;
    position: relative;
`,rS=u.div`
    position: absolute;
    width: calc(100% - var(--time-width));
    left: var(--time-width);
    top: 50%;
    transform: translateY(-50%);
    background: var(--theme-4);
    height: 1px;
`,lS=u(te)`
    font-size: 0.82rem;
    opacity: 0.5;

    ${W.isMobile} {
        font-size: 0.65rem;
    }
`,cS=Array(24).fill(0).map((e,i)=>`${zi(i)}:00`),dS=({interval:e,scale:i,shortTimes:n=!1})=>{const s=n?Array(24).fill(0).map((o,a)=>`${a}`).slice(e[0],e[1]+1):cS.slice(e[0],e[1]+1);return t.jsx(oS,{timesLen:s.length-1,scale:i,d:"column",w:"100%",h:"100%",jc:"space-between",ai:"flex-end",children:s.map(o=>t.jsxs(aS,{children:[t.jsx(lS,{children:o}),t.jsx(rS,{})]},o))})},op=({interval:e,events:i,scale:n,weekday:s,shift:o,onEventClick:a,currentDay:r,isCurrentDay:c})=>{const d=Id({deps:[i==null?void 0:i.length],getScrollTopValue:()=>{var p;return sp((p=i==null?void 0:i[0])==null?void 0:p.startTime,o,n)}});return t.jsxs(lk,{className:"calendar-wrapper",ref:d,children:[t.jsx(dS,{interval:e,scale:n}),t.jsx(sS,{currentDay:r,weekDay:s,isCurrentDay:c,events:i??[],shift:o,currentEvent:null,scale:n,onClick:a,interval:e})]})},pS=u.div`
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
`,uS=({icon:e,title:i,color:n,goTo:s,visible:o=!0})=>{const{close:a}=M();return o?t.jsxs(pS,{color:n,children:[t.jsx("div",{className:"icon",children:e}),t.jsx("span",{className:"title",children:i}),!!s&&t.jsx(Z,{to:s,children:t.jsx(y,{text:"Перейти",onClick:a,background:"var(--almostTransparent)",width:"100%"})})]}):null},hS=u.div`
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
`,xS=u.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`,gS=u(te)`
    margin-bottom: 20px;
`,fS=({image:e,list:i,text:n})=>{const{isMobile:s}=Et();return t.jsxs(hS,{children:[!!e&&t.jsxs(t.Fragment,{children:[t.jsx(z,{size:3,align:"center",bottomGap:!0,children:e.title}),t.jsx("div",{className:"image",children:e.component??t.jsx("img",{src:s&&e.mobile?e.mobile:e.desktop,alt:""})})]}),t.jsx(gS,{lineHeight:"1.6rem",width:"100%",align:"center",fontSize:"1rem",visible:!!n,children:n}),!!i&&t.jsx(xS,{children:i==null?void 0:i.map(o=>l.createElement(uS,{...o,key:o.title}))})]})},mS=u.div`
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
`,bS=u.div`
    --time-width: 55px;
    height: 300px;
    width: 100%;
`,vS=()=>t.jsx(bS,{children:t.jsx(op,{scale:1.35,weekday:1,events:[{title:"Нечеткое моделирование",duration:90,startTime:"16:10",startDate:new Date("September 1, 2023"),endDate:null,color:Es["16:10 - 17:40"],icon:Sn("Нечеткое моделирование"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"},{title:"Математика",duration:90,startTime:"17:50",startDate:new Date("September 1, 2023"),endDate:null,color:Es["17:50 - 19:20"],icon:Sn("Математика"),place:"Прянишникова",rooms:["Пр2202"],weekday:"Ср",people:["Норин Владимир Павлович"],dateInterval:"1 сен - 30 окт"}],interval:[16,19],currentDay:0,shift:16*60,onEventClick:()=>null})}),ap=()=>{const[e,i]=l.useState(0),{close:n}=M(),s=[t.jsx(fS,{text:"Стало проще видеть свое расписание целиком",image:{title:"Новое расписание! В виде календаря",component:t.jsx(vS,{})}},"schedule")];return t.jsxs(mS,{children:[t.jsx("div",{className:"content",children:s[e]}),t.jsx(Vr,{amount:s.length,current:e}),t.jsxs("div",{className:"buttons",children:[t.jsx(y,{onClick:()=>i(o=>_t(o-1,s.length-1)),text:"Назад",width:"100%",isActive:e!==0}),e===s.length-1?t.jsx(y,{onClick:n,text:"Готово",width:"100%",background:j.blue.light1,textColor:"#fff"}):t.jsx(y,{onClick:()=>i(o=>_t(o+1,s.length-1)),text:"Далее",width:"100%"})]})]})},yS=e=>{if(e&&e[e.length-1]){const i=e[e.length-1];return Fi(i.startTime)+i.duration<$s(new Date)}},wS=()=>{var p,h;const{data:{schedule:e,hasNoSchedule:i,errorInData:n},loading:s}=ep.useSchedule(),o=ip(),a=((p=e==null?void 0:e.today)==null?void 0:p.length)===0||!(e!=null&&e.today),r=yS(e==null?void 0:e.today),c=Id({deps:[e==null?void 0:e.today],condition:(((h=e==null?void 0:e.today)==null?void 0:h.length)??0)>1,getScrollTopValue:g=>{var x,f;return g.clientHeight*(r?((x=e==null?void 0:e.today)==null?void 0:x.length)??0:((f=e==null?void 0:e.today)==null?void 0:f.findIndex(m=>yo(m,!0)||Ld(e.today,m,!0)))??0)}}),d=()=>G.evokePopUpMessage({message:n??"",type:"failure",time:Hs.ten_seconds});return{listRef:c,noSchedule:a,loading:s,schedule:e==null?void 0:e.today,isEnded:r,hasNoSchedule:i,errorInData:n,handleOpenModal:o,handleErrorClick:d}},Ta=u(On)`
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

    ${W.isTablet} {
        display: flex;
    }
`,yi=()=>t.jsxs(P,{d:"column",gap:"8px",children:[t.jsx(q,{shape:"circle",size:{width:"20px",height:"20px"},margin:"0"}),t.jsx(q,{shape:"rect",size:{width:"35px",height:"10px"},margin:"0"})]}),jS=()=>{const{allRoutes:e}=Ye.useMenu(),{data:{user:i}}=be.useUser(),{hasNoSchedule:n,loading:s}=wS(),o=Yt();if(!e||!i||s)return t.jsxs(Ta,{direction:"horizontal",horizontalAlign:"evenly",verticalAlign:"center",children:[t.jsx(yi,{}),t.jsx(yi,{}),t.jsx(yi,{}),t.jsx(yi,{}),t.jsx(yi,{})]});const a=(i==null?void 0:i.user_status)==="stud"?Ej:n?$j:Pj;return t.jsx(Ta,{direction:"horizontal",horizontalAlign:"evenly",children:a.map(r=>{const c=e[r]?o.pathname.includes(e[r].path):!1;return t.jsx(Od,{...e[r],isCurrent:c},r)})})},_S=(e,i,n)=>({isOpen:i,message:e,position:n}),Ca={hints:[]},kS=()=>vt(SS),rp=E(),lp=E(),cp=E(),SS=V(Ca).on(rp,(e,{message:i,position:n})=>({hints:[...e.hints,_S(i,e.hints.length===0,n)]})).on(lp,e=>({hints:e.hints.splice(1,e.hints.length)})).on(cp,()=>({...Ca})),TS={useHint:kS},CS={evoke:rp,close:lp,clearStore:cp},ES=u.div`
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
`,PS=()=>{const{hints:e}=TS.useHint(),i=e[0];return i?t.jsx(ES,{open:i.isOpen,left:i.position.x,top:i.position.y,children:t.jsx(X,{type:"hint",title:i.message,onClose:()=>CS.close(),width:"100%",icon:null})}):null};u.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`;const $S=({padding:e,size:i="middle"})=>{var s,o;const{data:{user:n}}=be.useUser();return M(),t.jsxs(_e,{visible:!!(n!=null&&n.accounts),padding:e,title:"Аккаунты",direction:"horizontal",gap:0,showPages:!0,horizontalAlign:"left",onAdd:void 0,children:[!((s=n==null?void 0:n.accounts)!=null&&s.length)&&t.jsx(te,{children:"Нет доступных аккаунтов"}),(o=n==null?void 0:n.accounts)==null?void 0:o.map(a=>t.jsx(Zn,{type:a.user_status,size:i,name:a.fio??n.fullName,token:a.token,division:a.work_place,group:a.group,degreeLevel:a.degreeLevel,orientation:"vertical"},a.fio))]})};function AS(e){switch(e){case"up":return"translate(0, -45px)";case"down":return"translate(0, 45px)";case"left":return"translate(-45px, 0)";case"right":return"translate(135px, 0)"}}const WE=u.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: ${({direction:e})=>e==="left"?"row-reverse":"row"};

    &:hover > div {
        transform: ${({direction:e})=>AS(e)};
        opacity: 1;
    }
`,UE=u.div`
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
`,dp=(e,i)=>i.reduce((n,s)=>{const o=s.links.filter(a=>Ee(a.title).includes(Ee(e)));return o.length&&n.push({title:s.title,links:o}),n},[]),NS=()=>{const e=D?" (Сервис временно недоступен)":"";return[{title:"Многофункциональный центр",links:[{link:Rc,title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)"},{link:sd,title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования"},{link:zc,title:"Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)"},{link:Fc,title:"Справка-вызов"},{link:Kc,title:"Заявление на пересдачу для получения диплома с отличием"},{link:nd,title:"Запрос на изменение персональных данных"},{link:Xc,title:"Запрос на восстановление магнитного пропуска"},{link:Dc,title:"Уточнение паспортных данных"},{link:od,title:"Выдача лицензий и свидетельств о государственной аккредитации"},{link:ad,title:"Предоставление каникул в связи с окончанием университета"},{link:rd,title:"Предоставление академического отпуска"},{link:ld,title:"Выход из академического отпуска"},{link:cd,title:"Отчисление по инициативе обучающегося"},{link:dd,title:"Продление промежуточной аттестации или ГИА"}]},{title:"Управление студенческим городком",links:[{link:Mc,title:"Предоставление права проживания (очная форма)",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Bc,title:"Предоставление права проживания (очно-заочная форма)",exceptionalFormEducationList:["Очная","Заочная"]},{link:Hc,title:"Предоставление права проживания (заочная форма)",exceptionalFormEducationList:["Очная","Очно-заочная"]},{link:Uc,title:"Предоставление права проживания льготной категории граждан"},{link:Wc,title:"Предоставление права проживания в период академического отпуска",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Gc,title:"Предоставление права проживания в семейной комнате",exceptionalFormEducationList:["Очно-заочная","Заочная"]},{link:Yc,title:"Переселение внутри общежития",exceptionalFormEducationList:["Заочная"]},{link:Qc,title:"Переселение в другое общежитие",exceptionalFormEducationList:["Заочная"]},{link:Vc,title:"Расторжение договора найма"},{link:qc,title:"Предоставление права проживания в период каникул"}]},{title:"Профсоюзная организация",links:[{link:cr,title:"Вступить в Профсоюз",isExternalLink:!0,isOpenInNewWindow:!0},{link:ed,title:"Оформить материальную поддержку остронуждающимся студентам (Дотацию)"},{link:td,title:"Заявка на материальную помощь"},{link:Lc,title:"Оформить социальную стипендию"},{link:id,title:"Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии"}]},{title:"Мобилизационный отдел"+e,disabled:D,links:[{link:Jc,title:"Отправить документы воинского учета"},{link:Zc,title:"Воинский учет"},{link:"",title:"Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу"}]},{title:"Отдел платных образовательных услуг"+e,disabled:D,links:[{link:Ts,title:"Оформить дополнительное соглашение к договору об обучении"},{link:Ts,title:"Отправить квитанцию об оплате обучения или пени"}]},{title:"Приемная комиссия",links:[{link:Jh,isExternalLink:!0,title:"Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное"}]},{title:"Прочее",links:[{link:Oc,title:"Произвольный запрос"}]},{title:"Прочее (в разработке)",disabled:D,links:[{link:Ic,title:"Трудоустройство студентов"}]}]},DS=e=>[{title:"Цифровые сервисы",links:[{link:sc,title:"Справка с места работы"},{link:oc,title:"Справка с места работы для предоставления в визовый центр"},{link:rc,title:"Справка о количестве неиспользованных дней отпуска"}]},{title:"Телефонный справочник",links:[...LS(e),{link:cc,title:"Запрос на изменение внутреннего телефона"},{link:dc,title:"Запрос на изменение корпоративной электронной почты"}]},...OS()],OS=()=>[{title:"Цифровые сервисы (в разработке)",disabled:D,links:[{link:ac,title:"Справка о стаже работы"},{link:pc,title:"Копия трудовой книжки"},{link:uc,title:"Копии документов из личного дела"},{link:hc,title:"Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку"}]},{disabled:D,title:"Общее",links:[{link:ql,title:"Актуализация контактных данных"}]},{title:"Общее (в разработке)",disabled:D,links:[{link:Jw,title:"Актуализация контактных данных (тест)"}]},{title:"ИТ-обслуживание",links:[{link:Jl,title:"Получение нового компьютерного оборудования"},{link:Zl,title:"Подключение компьютера, МФУ, телефона, WiFi"},{link:ec,title:"Обслуживание принтеров, МФУ"},{link:tc,title:"Вопрос по СЭД Directum и 1С"},{link:ic,title:"Вопрос по Личному кабинету"},{link:nc,title:"Прочее ИТ-обслуживание"}]},{title:"Бухгалтерия",disabled:D,links:[{link:mc,title:"Справка по форме 2-НДФЛ"},{link:bc,title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка"},{link:xc,title:"Справка об отпуске по уходу за ребенком до 1,5 и 3 лет"},{link:vc,title:"Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)"}]},{title:"Управление студенческого городка",disabled:D,links:[{link:wc,title:"Предоставление права проживания в жилом помещении"},{link:jc,title:"Временное размещение гостей в студгородке"},{link:_c,title:"Проход гостей на территорию студенческого городка"},{link:kc,title:"Переселение"},{link:Sc,title:"Расторжение договора найма жилого помещения"}]},{title:"Бюро пропусков",disabled:D,links:[{link:Tc,title:"Выдача пропуска (повторная)"},{link:Cc,title:"Заказ гостевого пропуска"}]},{title:"Отдел контроля и делопроизводства",disabled:D,links:[{link:Ec,title:"Заверение и выдача копий внутренних документов"}]},{title:"Многофункциональный центр",disabled:D,links:[{link:Kl,title:"Выдача лицензий и свидетельств о государственной аккредитации"}]},{title:"Экспедиция отдела контроля и делопроизводства",disabled:D,links:[{link:fc,title:"Курьер"}]},{title:"Мобилизационный отдел",disabled:D,links:[{link:Pc,title:"Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу"},{link:$c,title:"Заверенные копии документов по воинскому учету из личного дела"}]},{title:"Прочее",disabled:D,links:[{link:gc,title:"Произвольный запрос"},{link:cr,title:"Вступить в Профсоюз",isExternalLink:!0}]}],IS=()=>[{title:"",links:[{link:yc,title:"Заявление на трудоустройство по совместительству"},{link:ws,title:"Заявление на увольнение"},{link:ks,title:"Заявление о привлечении к работе в выходной день"},{link:js,title:"Заявление о предоставлении отпуска"},{link:_s,title:"Заявление о переносе отпуска"},{link:Ss,title:"Заявление о диспансеризации"},{link:un,title:"Заявление на перевод"}]}],LS=e=>e.head_div&&e.head_div.length>0?[{link:lc,title:"Внесение изменений данных подразделения в телефонном справочнике"}]:[],RS=(e,i)=>!(i!=null&&i.length)||!e?!0:!(i!=null&&i.includes(e)),zS=u.div`
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
`,GE=({isTeachers:e=!1,currentFormEducation:i})=>{const{close:n}=M(),{data:{user:s}}=be.useUser(),o=e&&s?DS(s):NS(),[a,r]=l.useState(""),[c,d]=l.useState(o);return t.jsxs(zS,{children:[t.jsx(eo,{whereToSearch:o,searchEngine:dp,setResult:d,placeholder:"Поиск заявок",setExternalValue:r}),t.jsx("div",{className:"list",children:t.jsxs("div",{className:"links-wrapper",children:[(c??o).map(p=>{if(!p.disabled)return t.jsxs("div",{className:"link-list",children:[t.jsx(z,{size:4,align:"left",bottomGap:!0,children:p.title}),t.jsx("div",{className:"links",children:p.links.map((h,g)=>{if(!(h.disabled||!RS(i,h.exceptionalFormEducationList)))return h.isExternalLink?t.jsx("a",{href:h.link,target:h.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:h.title},h.link+g):t.jsx(Z,{to:h.link,onClick:n,children:h.title},h.link+g)})})]},p.title)}),!(c!=null&&c.length)&&!!a.length&&t.jsx(ge,{text:`По запросу ${a} ничего не найдено`})]})})]})},FS=u.div`
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
`,MS=u.div`
    padding: 12px;
    box-shadow: var(--block-shadow);
    border-radius: 8px;
    margin: 10px 0;

    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`,VE=({})=>{const{data:{listApplication:e},error:i}=Pe.useApplications(),{close:n}=M(),s=IS(),[o,a]=l.useState(""),[r,c]=l.useState(s);return t.jsx(Qe,{load:()=>st.getApplicationsFx(),loading:!e,error:i,data:e,children:t.jsxs(ht,{children:[t.jsx(X,{type:"info",title:"Информация",icon:t.jsx(ot,{}),children:"Данный сервис создан для упрощения оборота кадровых документов внутри Университета."}),t.jsxs(FS,{children:[t.jsx(z,{size:3,align:"left",bottomGap:!0,children:"Создать заявление"}),t.jsx(eo,{whereToSearch:s,searchEngine:dp,setResult:c,placeholder:"Поиск заявления",setExternalValue:a}),t.jsxs(MS,{children:[(r??s).map(d=>t.jsx("div",{className:"link-list",children:!d.disabled&&t.jsx("div",{className:"links",children:d.links.map(p=>p.isExternalLink?t.jsx("a",{href:p.link,target:p.isOpenInNewWindow?"_blank":"_self",rel:"noreferrer",children:p.title},p.title):t.jsx(Z,{to:p.link,onClick:n,children:p.title},p.link))})},d.title)),!(r!=null&&r.length)&&!!o.length&&t.jsx(ge,{text:`По запросу ${o} ничего не найдено`})]})]})]})})},Ea={isOpen:!1,pages:[],currentPage:0},BS=()=>vt(HS),pp=E(),up=E(),hp=E(),xp=E(),HS=V(Ea).on(pp,(e,{pages:i})=>({isOpen:!0,pages:i,currentPage:0})).on(up,e=>({pages:e.pages,currentPage:e.currentPage,isOpen:!1})).on(hp,(e,{value:i})=>({...e,currentPage:i})).on(xp,()=>({...Ea})),wo={useStory:BS},It={open:pp,close:up,clearStore:xp,changeCurrentPage:hp};u(ut)`
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
`;const WS=u.div`
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
`,US=u.img`
    width: 100%;
    height: 100%;
    border-radius: ${({round:e})=>e&&"100%"};

    object-fit: cover;
    object-position: center;
`;function At({selected:e,name:i,avatar:n,width:s,height:o,marginRight:a,notifications:r,checked:c,boxShadow:d,border:p,icon:h,avatarModal:g,onClick:x,borderRadius:f,background:m}){const[b,v]=l.useState(!0),T=ms(i)[0]+(ms(i)[1]??""),{open:k}=M(),_=C=>{g?k(t.jsx(At,{name:i,width:"400px",height:"400px",marginRight:"0",avatar:n})):x==null||x(C)};return t.jsxs(WS,{selected:e,width:s,height:o,marginRight:a,background:m??Ue(i),boxShadow:d,border:p,onClick:_,borderRadius:f,children:[n&&b?t.jsx(US,{loading:"lazy",round:!0,onLoadedData:()=>v(!0),onError:()=>v(!1),src:n}):t.jsx("div",{className:"name",children:T}),h&&t.jsx("span",{className:"icon",children:h}),t.jsx(Be,{invisibleOnFalse:!0,checked:c??!1,visible:c!==void 0,setChecked:()=>null}),t.jsx(Wt,{left:"80%",top:"90%",outline:"4px solid var(--block)",visible:!!r,children:r})]})}const GS=u.div`
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
`,gp=({avatar:e,name:i,type:n,division:s,group:o,finance:a,educationForm:r,faculty:c,degreeLevel:d,course:p,isMe:h=!1,noInfo:g=!1})=>{const x=g?"140px":"110px",f=Ac(h,n,s,o);return t.jsxs(GS,{children:[t.jsx(Wl,{fullName:i,height:"136px",width:"calc(100% + 16px)",baseScale:1,baseScaleDelta:.5}),t.jsx(At,{avatarModal:!0,border:!0,name:i,avatar:e,width:x,height:x,marginRight:"0"}),!g&&t.jsxs("div",{className:"info",children:[t.jsx("b",{children:i}),t.jsx(te,{fontSize:"0.9rem",children:t.jsx(Ge,{words:f})}),t.jsx(Ot,{fontSize:"0.9rem",visible:!!a,keyStr:"Уровень финансирование",value:a}),t.jsx(Ot,{fontSize:"0.9rem",visible:!!c,keyStr:"Факультет",value:c}),t.jsx(Ot,{fontSize:"0.9rem",visible:!!d,keyStr:"Уровень образования",value:d}),t.jsx(Ot,{fontSize:"0.9rem",visible:!!p,keyStr:"Курс",value:p}),t.jsx(Ot,{fontSize:"0.9rem",visible:!!r,keyStr:"Форма образования",value:r})]})]})},VS=u.div`
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

    ${W.isMobile} {
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
`,fp=e=>{const{children:i}=e;return t.jsxs(VS,{children:[t.jsx(gp,{...e}),t.jsx("div",{className:"buttons",children:i})]})},YS=u.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`,QS=()=>t.jsxs(YS,{children:[t.jsx(q,{shape:"circle",size:{width:"30px",height:""},margin:"8px 0px 8px 0 "}),t.jsxs("div",{className:"name-and-status",children:[t.jsx(q,{shape:"rect",size:{width:"130px",height:"10px"},margin:"1px 10px"}),t.jsx(q,{shape:"rect",size:{width:"70px",height:"8px"},margin:"0px 10px"})]})]}),mp=e=>{if(e)return()=>{Ve.evokeConfirm({message:"Вы уверены, что хотите сменить аккаунт?",onConfirm:()=>{localStorage.setItem(H.Token,e),location.reload()}})}},qS=e=>{const{close:i}=M(),{token:n,name:s,group:o}=e,a=`linear-gradient(45deg, ${Ue(s,"main")}, ${Ue(s,"dark1")})`;return t.jsxs(fp,{...e,type:"stud",children:[!n&&t.jsxs(t.Fragment,{children:[o&&t.jsx(Z,{to:Xi(gi,{page:"current",filter:o}),children:t.jsx(y,{icon:t.jsx(Tt,{}),text:"Расписание",onClick:()=>i(),width:"100%",background:"var(--theme-4)"})}),t.jsx(y,{icon:t.jsx(An,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(y,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:a,onClick:mp(n)})]})},XS=e=>{const{close:i}=M(),{token:n,name:s}=e,o=`linear-gradient(45deg, ${Ue(s,"dark1")}, ${Ue(s,"main")})`;return t.jsxs(fp,{type:"staff",...e,children:[!n&&t.jsxs(t.Fragment,{children:[t.jsx(Z,{to:Xi(gi,{page:"current",filter:s}),children:t.jsx(y,{icon:t.jsx(Tt,{}),text:"Расписание",onClick:()=>{i()},background:"var(--theme-4)",width:"100%"})}),t.jsx(y,{icon:t.jsx(An,{}),text:"Написать",onClick:()=>i(),width:"100%",background:"var(--theme-4)",isActive:!1})]}),n&&t.jsx(y,{text:"Войти в аккаунт",width:"100%",textColor:"#fff",background:o,onClick:mp(n)})]})},KS=({name:e,...i})=>{const{data:{user:n}}=be.useUser(),s=(n==null?void 0:n.user_status)==="staff",{subdivisions:o}=K({subdivisions:Je.subdivisions});if(!s||!o)return t.jsx(XS,{name:e,...i});const a=Jn(o,e)[0];return t.jsx(bt,{title:a.fio,info:Ci(a),avatar:a.avatar,isEmployee:!0})};u.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;const JS=u.div`
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
`,Ki=JS,ZS=()=>t.jsx("div",{className:"left",children:t.jsxs(_e,{scroll:!1,height:"100%",verticalAlign:"space-between",position:"static",children:[t.jsx(Ln,{width:"50px",short:!0,className:"logo first"}),t.jsxs(_e,{gap:12,scroll:!1,height:"100%",verticalAlign:"center",children:[t.jsx(Z,{to:To,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(Di,{}),text:"Обратная связь",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:Op,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(Eh,{}),text:"Узнать свой логин ЕУЗ",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:Dp,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(Ni,{}),text:"Вниманию студентов 1 курса!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(Z,{to:Ip,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(Ni,{}),text:"Вниманию сотрудников!",height:"25px",background:"transparent",textColor:"var(--theme-mild-opposite)"})}),t.jsx(me,{}),t.jsx(Z,{to:Np,tabIndex:-1,children:t.jsx(y,{padding:"0",icon:t.jsx(Ph,{}),text:"Не получается войти",height:"25px",align:"left",background:"transparent",textColor:"var(--red)"})})]}),t.jsx(Hi,{text:"Перейти к старому дизайну",onClick:()=>{localStorage.setItem("useOldVersion","true")},background:"transparent",textColor:"var(--reallyBlue)",icon:t.jsx($n,{}),align:"left",padding:"0",width:"100%",href:`${R}/index.php`})]})}),eT=()=>{const e=Kn(),i=e.get("login"),n=e.get("password"),[s,o]=l.useState(i??""),[a,r]=l.useState(n??""),[c,d]=l.useState(!1),p=!!a&&!!s,h=Le.login,g=new Date().getMonth()>=6&&new Date().getMonth()<=8,x=b=>{d(b.getModifierState("CapsLock")),b.key==="Enter"&&h({login:s,password:a})},f=b=>{Le.changeSavePassword({savePassword:b})},m=()=>h({login:s,password:a});return l.useEffect(()=>{i&&n&&h({login:i,password:n})},[i,n]),{isSubmitActive:p,password:a,capsLock:c,login:s,showAbiturientMessage:g,handleSavePassword:f,handleKeyPress:x,handleLogin:m,setPassword:r,setLogin:o}},tT=()=>{const{loading:e,error:i,data:n}=be.useUser(),{isSubmitActive:s,password:o,capsLock:a,login:r,showAbiturientMessage:c,handleKeyPress:d,handleSavePassword:p,handleLogin:h,setPassword:g,setLogin:x}=eT();return t.jsx("div",{className:"right",onKeyDown:d,children:t.jsxs(_e,{gap:16,horizontalAlign:"center",position:"static",verticalAlign:"space-between",height:"100%",scroll:!1,children:[t.jsx(Ln,{width:"50px",short:!0,className:"logo second"}),t.jsx(P,{jc:"space-between",children:t.jsx(z,{size:3,align:"left",children:"Личный кабинет"})}),c&&t.jsx(X,{type:"info",title:"Уважаемые абитуриенты!",children:t.jsxs("p",{children:["Личный кабинет абитуриента находится по ссылке"," ",t.jsx("a",{href:"https://lk.mospolytech.ru/",target:"_blank",rel:"noreferrer",children:t.jsx("strong",{children:"lk.mospolytech.ru"})})]})}),t.jsxs(_e,{gap:16,scroll:!1,children:[t.jsx(z,{size:4,align:"left",children:"Вход"}),t.jsx(te,{children:"Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)"}),t.jsx(X,{type:"failure",visible:!!i,children:i}),t.jsx(X,{type:"success",visible:(n==null?void 0:n.isAuthenticated)??!1,children:"Вы вошли в аккаунт"}),t.jsx(Ae,{value:r,setValue:x,title:"Логин",placeholder:"Введите логин"}),t.jsx(Ae,{value:o,setValue:g,title:"Пароль",placeholder:"Введите пароль",type:"password",alertMessage:a?"Включен Capslock":void 0}),t.jsx(Be,{text:"Оставаться в системе",checked:n.savePassword,setChecked:p})]}),t.jsx(Me,{text:"Вход",action:h,isLoading:e,completed:!1,setCompleted:()=>null,isActive:s})]})})},iT=u(ut)`
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
`,nT=()=>{const{data:{isAuthenticated:e}}=be.useUser();return t.jsxs(iT,{isAuthenticated:e??!1,height:"fit-content",orientation:"horizontal",gap:"4px",maxWidth:"fit-content",padding:"0",children:[t.jsx(ZS,{}),t.jsx(tT,{})]})},sT=u.div`
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme);
    flex-direction: column;

    ${W.isMobile} {
        justify-content: flex-start;
        align-items: flex-start;
    }
`,oT=()=>t.jsx(sT,{children:t.jsx(nT,{})}),aT=u.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 700;
    width: 100%;
    padding: 10px 0;
    cursor: pointer;
    position: relative;
    user-select: none;
    text-decoration: none;

    .icon-and-title {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    svg {
        width: 22px;
        height: 22px;
    }

    .buttons {
        display: flex;
        align-items: center;
        column-gap: 5px;

        svg {
            margin: 0;
        }
    }

    &:hover::before {
        width: 5px;
        background: var(--red);
    }
`,rT=({chosen:e,onClick:i})=>t.jsx(y,{minWidth:"35px",background:"transparent",icon:e?t.jsx($h,{style:{color:"var(--blue)"}}):t.jsx(Ah,{}),onClick:i}),lT=e=>{const{id:i,chosen:n,switchMenuItem:s}=e;return t.jsxs(aT,{chosen:n,onClick:()=>s(i),children:[t.jsx(vs,{background:"transparent",maxWordLength:100,orientation:"horizontal",shadow:!1,...e}),t.jsx("div",{className:"buttons",children:t.jsx(rT,{chosen:n,onClick:()=>{s(i)}})})]})},cT=u.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`,bp=({enabledListStore:e,add:i,remove:n,requiredListStore:s})=>{const[o,a]=K([e,s]),{visibleRoutes:r}=Ye.useMenu(),[c,d]=l.useState(null);if(!o||!r)return null;const p=h=>{o[h]?n(h):i(h)};return t.jsxs(cT,{children:[t.jsx(eo,{placeholder:"Поиск",whereToSearch:r,searchEngine:Sd,setResult:d}),Object.values(c??r).filter(h=>!a.includes(h.id)).map((h,g)=>l.createElement(lT,{...h,key:g,chosen:!!o[h.id],switchMenuItem:p}))]})},Gt={size:4,align:"left",bottomGap:"12px",style:{marginLeft:"8px"}},hn=E();S({clock:hn,source:de.userSettings,fn:(e,i)=>({homePage:{...e.homePage,...i}}),target:Ce.update});const jo=u.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`,dT=()=>{const[e,i]=K([de.userSettings,Ri.menu]),{open:n}=M(),s=e==null?void 0:e.homePage.pages.reduce((o,a)=>{var r;return{...o,[a]:(r=i.allRoutes)==null?void 0:r[a]}},{});return t.jsxs(jo,{children:[t.jsxs("div",{children:[t.jsx(z,{...Gt,children:"Разделы домашней страницы"}),t.jsx(oo,{padding:"0 10px 10px 10px",list:s,onRemoveOne:o=>{Ii({pageId:o})},onAddElement:()=>{n(t.jsx(bp,{enabledListStore:Ri.homeRoutes,requiredListStore:V([]),remove:o=>Ii({pageId:o}),add:o=>Wn({pageId:o})}),"Разделы домашней страницы")}})]}),t.jsxs("div",{children:[t.jsx(z,{...Gt,bottomGap:"4px",children:"Виджеты"}),t.jsx(Te,{title:"Новости",action:o=>{hn({hasNews:o})},state:!!(e!=null&&e.homePage.hasNews)}),t.jsx(Te,{title:"Оплаты",action:o=>hn({hasPayment:o}),state:!!(e!=null&&e.homePage.hasPayment)}),t.jsx(Te,{title:"Расписание",action:o=>{hn({hasSchedule:o})},state:!!(e!=null&&e.homePage.hasSchedule)})]})]})},pT=()=>{const[e,i,n]=K([de.userSettings,Ri.menu,oi]),{open:s}=M(),o=e==null?void 0:e.customizeMenu.pages.filter(a=>!n.includes(a)).reduce((a,r)=>{var c;return{...a,[r]:(c=i.allRoutes)==null?void 0:c[r]}},{});return t.jsxs(t.Fragment,{children:[t.jsx(z,{...Gt,children:"Разделы меню"}),t.jsx(oo,{padding:"0 10px 10px 10px",list:o,onRemoveOne:a=>{vn({pageId:a})},onAddElement:()=>{s(t.jsx(bp,{enabledListStore:Ri.leftSidebar,requiredListStore:oi,remove:a=>vn({pageId:a}),add:a=>Un({pageId:a})}),"Настройка меню")}})]})},vp=E(),yp=E();S({clock:vp,fn:()=>({notifications:{all:!0,messages:!0,newVersion:!0,schedule:!0,news:!0,applications:!0,doclist:!0}}),target:Ce.update});S({clock:yp,fn:()=>({notifications:{all:!1,messages:!1,newVersion:!1,schedule:!1,news:!1,applications:!1,doclist:!1}}),target:Ce.update});const uT=u.div`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100%;
    margin-left: 8px;
    padding-left: 6px;

    &::before {
        content: '';
        position: absolute;
        display: block;
        width: 3px;
        background-color: var(--blue);
        height: 100%;
        border-radius: 2px;
    }
`,hT=()=>{const e=K(de.userSettings);if(!e)return null;const i=e.notifications,n=Object.values(i).every(Boolean);return t.jsxs(jo,{style:{gap:"0"},children:[t.jsx(z,{...Gt,bottomGap:"4px",children:"Уведомления"}),t.jsxs("div",{children:[t.jsx(Te,{title:"Все",state:n,action:s=>{s?vp():yp()}}),t.jsxs(uT,{children:[t.jsx(Te,{title:"Сообщения",state:i.messages,action:s=>{Ce.update({notifications:{...i,messages:s}})}}),t.jsx(Te,{title:"Новая версия",state:i.newVersion,action:s=>{Ce.update({notifications:{...i,newVersion:s}})}}),t.jsx(Te,{title:"Расписание",state:i.schedule,action:s=>{Ce.update({notifications:{...i,schedule:s}})}}),t.jsx(Te,{title:"Новости",state:i.news,action:s=>{Ce.update({notifications:{...i,news:s}})}}),t.jsx(Te,{title:"Цифровые сервисы",state:i.applications,action:s=>{Ce.update({notifications:{...i,applications:s}})}}),t.jsx(Te,{title:"Документы для ознакомления",state:i.doclist,action:s=>{Ce.update({notifications:{...i,doclist:s}})}})]})]})]})},Pa=e=>!e||e.length===0?"Не указан":e,xT=u.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
    padding: 0px 12px;
    min-height: 45px;
    border-radius: var(--brLight);

    &:hover {
        background: var(--theme-4);
    }

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

    span {
        opacity: 0.8;
    }
`,gT=u.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    b {
        opacity: 0.8;
        font-weight: 500;
        font-size: 0.85rem;
    }

    span {
        opacity: 0.6;
        font-size: 0.8rem;
        margin-top: 2px;
    }
`,Ji=({title:e,description:i,onClick:n,icon:s,rightIcon:o,editable:a=!0})=>t.jsxs(xT,{onClick:n,children:[s&&t.jsx("div",{className:"icon",children:s}),t.jsxs(gT,{children:[t.jsx("b",{children:e}),t.jsx("span",{children:i})]}),o??(a?t.jsx(Nh,{}):null)]}),wp=(e,i)=>{const n=e.find(({test:a})=>!a(...i)),s=!n,o=!i.find(a=>a.length===0)&&s;return{allChecked:s,isActive:o,validationError:n}},fT=u.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 1001px) {
        width: 350px;
    }
`,mT=u.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,bT=[{text:"Необходимо изменить строку",test:(e,i)=>e!==i}],vT=e=>{const{value:i,message:n,action:s,type:o,title:a,additionalActions:r}=e,[c,d]=l.useState(i),[p,h]=l.useState(!1),[g,x]=l.useState(""),[f,m]=l.useState(!1),{close:b}=M(),{isActive:v,validationError:T}=wp(bT,[c,i]),k=async()=>{var _;try{h(!0),await(s==null?void 0:s(c)),(_=r==null?void 0:r.onSuccess)==null||_.call(r,c),h(!1),m(!0)}catch(C){x("Возникла ошибка: "+C.message),h(!1)}};return l.useEffect(()=>{d(i),x(null)},[a]),t.jsxs(fT,{children:[t.jsx(z,{size:3,align:"left",children:a}),n&&t.jsx(X,{type:n.type??"",title:n.title,children:n.body}),t.jsx(X,{type:"failure",visible:!!g,children:g}),t.jsx(Ae,{value:c,setValue:d,type:o,mask:!0}),t.jsx(me,{}),t.jsxs(mT,{children:[t.jsx(y,{text:"Отменить",width:"100%",onClick:b}),t.jsx(Me,{isLoading:p,completed:f,isActive:v,text:"Обновить",action:k,setCompleted:m,popUpFailureMessage:T==null?void 0:T.text,height:"38px"})]})]},a)},$a=e=>{const{open:i}=M(),n=()=>{e.disabled||i(t.jsx(vT,{...e}))};return t.jsx(Ji,{...e,onClick:n})},Aa=e=>{const i=l.useState(!1),n=l.useState(!1),s=l.useState(null);return{loading:i,error:s,completed:n,isActive:e}},yT=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    @media (min-width: 1001px) {
        width: 400px;
    }
`,wT=()=>{const{data:{user:e}}=be.useUser();if(!e)return null;const[i,n]=l.useState([]),[s,o]=l.useState(null),{completed:[a,r],loading:[c,d],error:[p,h],isActive:g}=Aa(!!(e!=null&&e.avatar)),{completed:[x,f],loading:[m,b],error:[v,T],isActive:k}=Aa(i.length===1);l.useEffect(()=>{const N=new FileReader;N.onloadend=()=>{o(N.result)},i[0]?N.readAsDataURL(i[0]):o(null)},[i]);const _=async()=>{try{b(!0),f(!1);const N=await Oo(i[0]);if(N.data.result!=="ok")throw new Error(N.data.errors);f(!0),b(!1),n([]),Le.update({key:"avatar",value:s})}catch(N){T("Ошибка: "+N.message)}},C=async()=>{try{d(!0),r(!1);const N=await Oo();if(N.data.result!=="ok")throw new Error(N.data.errors);r(!0),d(!1),Le.update({key:"avatar",value:""})}catch(N){h("Ошибка: "+N.message)}},O=()=>Ve.evokeConfirm({message:"Вы уверены, что хотите удалить фото профиля?",onConfirm:C});return t.jsxs(yT,{children:[t.jsx(gp,{avatar:s??(e==null?void 0:e.avatar),name:(e==null?void 0:e.fullName)??"",isMe:!1,type:e==null?void 0:e.user_status,noInfo:!0}),t.jsx(X,{type:"failure",visible:!!v||!!p,children:v||p}),t.jsx(to,{files:i,maxFiles:1,formats:["image/jpeg"],setFiles:n,isActive:!0}),t.jsxs(_e,{direction:"horizontal",children:[(e==null?void 0:e.avatar)&&t.jsx(Me,{isLoading:c,background:j.red.main,completed:a,isActive:g,text:"Удалить фото профиля",action:O,setCompleted:r}),t.jsx(Me,{isLoading:m,completed:x,isActive:k,text:"Обновить",popUpSuccessMessage:"Фото профиля успешно обновлено!",popUpFailureMessage:"Фото не загружено",action:_,setCompleted:f})]})]})},jT=e=>{const{open:i}=M(),n=()=>{i(t.jsx(wT,{}))};return t.jsx(Ji,{...e,onClick:n})},jp=e=>e===0?"grey":e<=40?"red":e<=60?"orange":e<=80?"blue":"green",_p={small:4,middle:9,large:12,big:14},_T=u.div`
    width: 100%;
    h5 {
        color: ${({coloring:e,value:i})=>e?j[jp(i)].main:"var(--text)"};
    }
`,kT=u.div`
    width: ${({value:e})=>e+"%"};
    border-radius: var(--brLight);
    height: ${({size:e})=>_p[e]}px;
    transition: 0.2s;
    background: ${({coloring:e,value:i})=>e?j[jp(i)].main:"var(--block)"};
`,ST=u.div`
    width: 100%;
    border-radius: var(--brLight);
    background-color: var(--theme-2);
    height: ${({size:e})=>_p[e]}px;
    overflow: hidden;
`,TT=({title:e,value:i,size:n="middle",coloring:s=!0})=>t.jsxs(_T,{value:i,coloring:s,children:[t.jsx(z,{size:5,align:"left",visible:!!e,bottomGap:!0,children:e}),t.jsx(ST,{size:n,children:t.jsx(kT,{size:n,coloring:s,value:i})})]}),li=7,kp=new RegExp(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{${li+3},})`),Sp=new RegExp(`((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${li},}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{${li+3},}))`),Na=[{text:`Минимальная длина ${li} знаков`,test:e=>e.length>=li},{text:"Не повторяет старый пароль",test:(e,i,n)=>n.length>0&&e.length>0&&e!==n},{text:"Состоит из латинских заглавных, строчных букв, цифр",test:e=>Sp.test(e)},{text:"Пароли совпадают",visible:!1,test:(e,i)=>e.length>0&&i.length>0&&e===i}],CT=[{text:"Содержит спец. знаки (например, !, $, #, %)",test:e=>kp.test(e)}],ET=e=>{const i="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";let n="";for(let s=0;s<e;s++)n+=i.charAt(Math.floor(Math.random()*i.length));return n},PT=e=>kp.test(e)?{title:"надежный",value:100}:Sp.test(e)?{title:"средний",value:60}:e.length===0?{title:"нет",value:0}:e.length<li?{title:"очень слабый",value:10}:{title:"слабый",value:20},$T=u.div`
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1001px) {
        flex-direction: row;
        width: 620px;
        height: 400px;
    }
`,AT=u.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    min-height: 100%;
    max-width: 280px;
    width: 100%;
`,NT=u.div`
    height: 100%;
    background: var(--theme-1t);
    border-radius: var(--brLight);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`,DT=u.div`
    height: 100%;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`,OT=u.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,IT=u.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transform: scale(0.9);
`,LT=u.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;

    @media (max-width: 1001px) {
        height: fit-content;
    }
`,RT=()=>{const[e,i]=l.useState(""),[n,s]=l.useState(""),[o,a]=l.useState(""),[r,c]=l.useState(null),[d,p]=l.useState(!1),[h,g]=l.useState(!1),{isActive:x,validationError:f}=wp(Na,[n,o,e]),m=PT(n),{close:b}=M(),v=()=>{const k=ET(12);s(k),a(k)},T=async()=>{try{p(!0);const k=await ux(e,n);if(k.data.result!=="ok")throw new Error(k.data.errors);g(!0),p(!1),s(""),a(""),i("")}catch(k){const _=k.message??k;c("Возникла ошибка: "+_),p(!1)}};return t.jsxs($T,{children:[t.jsxs(NT,{children:[t.jsxs(DT,{children:[t.jsx(z,{size:3,align:"left",children:"Смена пароля"}),t.jsx(te,{width:"100%",align:"left",fontSize:"0.9rem",children:"Обязательные требования"}),t.jsx(_e,{gap:8,direction:"vertical",children:Na.map(k=>t.jsx(Be,{fontSize:"0.85rem",setChecked:()=>null,text:k.text,checked:k.test(n,o,e)},k.text))}),t.jsx(te,{width:"100%",align:"left",fontSize:"0.9rem",children:"Необязательные требования"}),t.jsx(_e,{gap:8,direction:"vertical",children:CT.map(k=>t.jsx(Be,{fontSize:"0.85rem",setChecked:()=>null,text:k.text,checked:k.test(n,o,e)},k.text))})]}),!x&&t.jsx(y,{width:"100%",text:"Сгенерировать пароль",onClick:v,background:"var(--theme-2)"}),x&&t.jsxs(IT,{children:[t.jsx(Ks,{size:"40px"}),t.jsx(z,{size:5,children:"Отличный пароль!"})]})]}),t.jsxs(AT,{children:[t.jsxs(LT,{children:[t.jsx(X,{title:"Ошибка",type:"failure",visible:!!r,children:r}),t.jsx(Ae,{type:"password",title:"Введите старый пароль",placeholder:"Введите пароль",value:e,setValue:i,required:!0}),t.jsx(Ae,{type:"password",title:"Придумайте пароль",placeholder:"Введите пароль",value:n,setValue:s,required:!0}),t.jsx(Ae,{type:"password",title:"Повторите пароль",placeholder:"Введите тот же пароль",value:o,setValue:a,required:!0}),t.jsx(TT,{value:m.value,size:"small",title:`Сложность пароля: ${m.title}`})]}),t.jsxs(OT,{children:[t.jsx(y,{text:"Отменить",width:"100%",onClick:b}),t.jsx(Me,{isLoading:d,completed:h,text:"Обновить",popUpFailureMessage:`Требование к паролю: ${f==null?void 0:f.text}`,action:T,setCompleted:g,height:"38px",isActive:x})]})]})]})},zT=e=>{const{open:i}=M(),n=()=>i(t.jsx(RT,{}));return t.jsx(Ji,{...e,onClick:n})},Tp=E(),ci=nr({handler:gx});S({clock:Tp,target:ci.start});S({clock:ci.$succeeded,source:ci.__.$latestParams,filter:Boolean,target:Le.updateBulk});S({clock:ci.$succeeded,fn:()=>({message:"Данные о служебном мобильном телефоне успешно изменены",type:"success",time:3e3}),target:G.evokePopUpMessage});S({clock:ci.$failed,fn:()=>({message:"Не удалось изменить данные о служебном мобильном телефоне",type:"failure",time:3e3}),target:G.evokePopUpMessage});const FT=u.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 1001px) {
        min-width: 350px;
    }
`,MT=u.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
`,BT=()=>{const{close:e,isOpen:i}=M(),{loading:n,user:{currentUser:s}}=K({loading:ci.$pending,user:ae.user}),[o,a]=l.useState((s==null?void 0:s.phone_staff)??""),[r,c]=l.useState((s==null?void 0:s.allow_mobphone_in)??!1),[d,p]=l.useState((s==null?void 0:s.allow_mobphone_out)??!1),h=()=>{Tp({phone_staff:o,allow_mobphone_in:r,allow_mobphone_out:d})};return l.useEffect(()=>{i&&(a((s==null?void 0:s.phone_staff)??""),c((s==null?void 0:s.allow_mobphone_in)??!1),p((s==null?void 0:s.allow_mobphone_out)??!1))},[i]),t.jsxs(FT,{children:[t.jsx(Ae,{value:o,setValue:a,type:"tel",mask:!0}),t.jsx(Te,{title:"Показывать мобильный телефон внутри Личного кабинета",state:r,action:c}),t.jsx(Te,{title:"Показывать мобильный телефон на сайте",state:d,action:p}),t.jsx(me,{}),t.jsxs(MT,{children:[t.jsx(y,{text:"Отменить",onClick:e}),t.jsx(y,{height:"38px",text:n?void 0:"Обновить",onClick:h,loading:n,background:j.blue.main,minWidth:"10ch",textColor:j.white.main})]})]})},HT=()=>{const{user:{currentUser:e}}=K({user:ae.user}),{open:i}=M();if(!e)return null;const n=()=>{i(t.jsx(BT,{}),"Служебный мобильный телефон")};return t.jsx(Ji,{icon:t.jsx(sr,{}),title:"Служебный мобильный телефон",description:e.phone_staff,onClick:n})},Cp=E(),Vt=nr({handler:fx});S({clock:Cp,target:Vt.start});S({clock:Vt.$succeeded,source:{user:ae.user,mutationParams:Vt.__.$latestParams},fn:({user:{currentUser:e},mutationParams:i})=>{var n;return{subdivisions:(n=e==null?void 0:e.subdivisions)==null?void 0:n.map(s=>s.guid_staff===(i==null?void 0:i.guid_staff)?{...s,...i}:s)}},target:Le.updateBulk});S({clock:Vt.$succeeded,source:{user:ae.user,mutationParams:Vt.__.$latestParams},fn:({user:{currentUser:e},mutationParams:i})=>{var n,s;return{message:`Данные об адресе рабочего места (${(s=(n=e==null?void 0:e.subdivisions)==null?void 0:n.find(o=>o.guid_staff===(i==null?void 0:i.guid_staff)))==null?void 0:s.post}) успешно изменены`,type:"success",time:3e3}},target:G.evokePopUpMessage});S({clock:Vt.$failed,fn:()=>({message:"Не удалось изменить данные об адресе рабочего места",type:"failure",time:3e3}),target:G.evokePopUpMessage});const WT=u.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (min-width: 1001px) {
        min-width: 350px;
    }
`,UT=u.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
`,GT=({subDivisionGuidStaff:e})=>{var b,v,T;const{close:i,isOpen:n}=M(),{loading:s,user:{currentUser:o}}=K({loading:Vt.$pending,user:ae.user}),[a,r]=l.useState(()=>{var k,_;return e||(((_=(k=o==null?void 0:o.subdivisions)==null?void 0:k[0])==null?void 0:_.guid_staff)??"")}),c=(b=o==null?void 0:o.subdivisions)==null?void 0:b.find(k=>k.guid_staff===a),d=((v=o==null?void 0:o.subdivisions)==null?void 0:v.length)||0,[p,h]=l.useState(()=>dn(he,(c==null?void 0:c.address)??"")),[g,x]=l.useState(c==null?void 0:c.room),f=()=>{Cp({guid_staff:a,address:p==null?void 0:p.title,room:g??"",post:(c==null?void 0:c.post)??""})};l.useEffect(()=>{h(dn(he,(c==null?void 0:c.address)??"")),x(c==null?void 0:c.room)},[c]),l.useEffect(()=>{if((p==null?void 0:p.title)!==(c==null?void 0:c.address)){x(_i.cabinetMask("",fs((p==null?void 0:p.title)||"")));return}x(c==null?void 0:c.room)},[p]);const m=((T=o==null?void 0:o.subdivisions)==null?void 0:T.map(k=>({id:k.guid_staff,title:k.post??"",content:t.jsx(t.Fragment,{})})))??[];return l.useEffect(()=>{n&&(h(dn(he,(c==null?void 0:c.address)??"")),x(c==null?void 0:c.room))},[n]),t.jsxs(WT,{children:[(e||d===1)&&t.jsx(z,{size:4,align:"left",children:c==null?void 0:c.post}),!e&&d>1&&t.jsx(ss,{pages:m,onChangePage:k=>r(k||""),appearance:!1,currentPage:m.findIndex(({id:k})=>k===a)||0}),t.jsx(io,{width:"99%",title:"Адрес рабочего места",items:he,setSelected:h,selected:p}),t.jsx(Ae,{title:"Кабинет",value:g??"",type:"cabinet",setValue:k=>x(_i.cabinetMask(k,fs((p==null?void 0:p.title)||""))),mask:!0}),t.jsx(me,{}),t.jsxs(UT,{children:[t.jsx(y,{text:"Отменить",onClick:i}),t.jsx(y,{height:"38px",text:s?void 0:"Обновить",onClick:f,loading:s,background:j.blue.main,minWidth:"10ch",textColor:j.white.main})]})]})},VT=({subDivisionGuidStaff:e})=>{var o;const{user:{currentUser:i}}=K({user:ae.user}),{open:n}=M();if(!i)return null;const s=()=>{n(t.jsx(GT,{subDivisionGuidStaff:e}),"Адрес места работы")};return t.jsx(Ji,{icon:t.jsx(Rs,{}),title:"Адрес места работы",description:(o=i.subdivisions)==null?void 0:o.map(a=>a.room).join(", "),onClick:s})},YT=()=>{const{user:{currentUser:e},settings:i}=K({user:ae.user,settings:de.userSettings});if(!i)return null;const n=i.syncAcrossAllDevices;return t.jsxs(jo,{children:[t.jsxs("div",{children:[t.jsx(z,{...Gt,children:"Данные"}),t.jsx(jT,{title:"Фото профиля",value:e==null?void 0:e.avatar,icon:t.jsx(At,{avatar:e==null?void 0:e.avatar,name:(e==null?void 0:e.fullName)??"",width:"22px",height:"22px",marginRight:"0"}),description:"Смена аватара"}),t.jsx($a,{icon:t.jsx(Dh,{}),type:"text",title:"Email",description:Pa(e==null?void 0:e.email),value:e==null?void 0:e.email,action:s=>hx(s??""),additionalActions:{onSuccess:s=>{Le.update({key:"email",value:s})}}}),t.jsx($a,{icon:t.jsx(sr,{}),type:"tel",title:"Телефон",description:Pa(e==null?void 0:e.phone),value:e==null?void 0:e.phone,action:s=>xx(s??""),additionalActions:{onSuccess:s=>{Le.update({key:"phone",value:s})}}}),(e==null?void 0:e.user_status)==="staff"&&t.jsxs(t.Fragment,{children:[t.jsx(HT,{}),t.jsx(VT,{})]}),t.jsx(zT,{icon:t.jsx(Oh,{}),type:"password",title:"Пароль",description:"Смена пароля"})]}),!D&&t.jsxs("div",{children:[t.jsx(z,{...Gt,children:"Синхронизация"}),t.jsx(Te,{title:"Сохранить для всех устройств",state:n,action:s=>{const o=s?"Вы точно хотите синхронизировать настройки? Текущие настройки будут использоваться на всех устройствах.":"Вы точно хотите отключить синхронизацию настроек на всех устройствах? Настройки на текущем устройстве не изменятся.";Ve.evokeConfirm({message:o,isSubmitSuccess:s,onConfirm:()=>{Ce.update({syncAcrossAllDevices:s}),Ve.closeConfirm()}})}})]})]})},QT=()=>{const e=K(de.userSettings),n=(e==null?void 0:e.appearance.theme)===ye.Light;return t.jsxs(t.Fragment,{children:[t.jsx(z,{...Gt,children:"Вид"}),t.jsx(Te,{title:"Темная тема",state:!n,action:s=>kn({isDark:s})})]})},Ep=["settings-personal","settings-customize-menu","settings-appearance","settings-home-page","settings-notifications"],qT=()=>{var n;const{allRoutes:e}=Ye.useMenu(),i=(n=Os(Lp))==null?void 0:n.params;return e?t.jsx(XT,{"data-is-base-settings-page":!(i!=null&&i.id),children:t.jsx(KT,{children:t.jsxs(Fs,{children:[Ep.map(s=>t.jsx(fn,{path:e[s].path,component:e[s].Component},s)),t.jsx(fn,{path:"/",children:t.jsx(Ki,{height:"100%",children:t.jsx(ge,{text:"Ничего не выбрано",image:t.jsx(xt,{color:"grey",size:50,children:t.jsx(Is,{})})})})})]})})}):null},XT=u.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    display: flex;

    ${W.isMobile} {
        &[data-is-base-settings-page='false'] {
            flex: 1;
        }

        &[data-is-base-settings-page='true'] {
            display: none;
        }
    }
`,KT=u.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow: hidden;
    padding: 0 32px;

    ${W.isMobile} {
        padding: 0;
    }
`,JT=()=>{var n;const{allRoutes:e}=Ye.useMenu(),i=(n=Os(Lp))==null?void 0:n.params;return e?t.jsx(ZT,{"data-is-base-settings-page":!(i!=null&&i.id),children:Ep.map(s=>l.createElement(dl,{...e[s],title:e[s].title.slice(11,e[s].title.length),key:s,orientation:"horizontal",shadow:!1,isActive:s===(i==null?void 0:i.id)}))}):null},ZT=u.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    ${W.isMobile} {
        &[data-is-base-settings-page='false'] {
            display: none;
        }

        &[data-is-base-settings-page='true'] {
            flex: 1;
        }
    }
`,eC=()=>t.jsx(Ki,{padding:"10px",children:t.jsx(ht,{topRightCornerElement:t.jsx(tC,{icon:t.jsx(tr,{}),text:"Выйти из аккаунта",onClick:()=>{Ve.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Le.logout})},textColor:"var(--red)",background:"var(--block)"}),children:t.jsxs(P,{ai:"flex-start",children:[t.jsx(JT,{}),t.jsx(qT,{})]})})}),tC=u(y)`
    ${W.isMobile} {
        .text {
            display: none;
        }
        .icon {
            margin-right: 0;
        }
    }
`,Pp="/login",iC="/forgot-password",nC="/medical-certificate",sC="/vaccination",$i="/all",_o="/home",ko="/profile",So="/chat",oC="/messages",YE=So+"/:chatId",$p="/electronic-interaction-agreement",Cn="/payments",qt="/schedule",Ap="/all-students",aC="/all-students/:filter",Zi="/all-teachers",rC="/all-teachers/:filter",To="/feedback",Np="/cant-access",Dp="/memo-freshmen",Op="/get-your-login",Ip="/memo-teacher",Ie="/configurations",Lp=Ie+"/:id",lC=Ie+"/settings-appearance",cC=Ie+"/settings-personal",dC=Ie+"/settings-home-page",pC=Ie+"/settings-customize-menu",uC=Ie+"/settings-notifications",hC="/instructions",Rp="/project-activity",xC="/softskills",zp="/alerts",Fp="/lk-notifications",Mp="/helpful-information",gi=qt+"/:page/:filter",Bp=qt+"/current",gC=qt+"/semestr",fC=qt+"/session",mC=qt+"/retake",bC=Mp+"/:infoType";var vC=(e=>(e.GENERAL="Основное",e.FINANCES_DOCS="Кадровая среда",e.LEARNING_ACTIVITIES="Учебная деятельность",e.OTHER="Находится в разработке",e.COMMUNICATION="Коммуникация",e))(vC||{});const yC=[{id:0,title:"",icon:"",path:Pp,Component:oT},{id:1,title:"",icon:"",path:iC,Component:Y1},{id:2,title:"Обратная связь",icon:t.jsx(Di,{}),path:To,Component:zl},{id:3,title:"Не получается войти в Личный кабинет",icon:t.jsx(Ft,{}),path:Np,Component:G1},{id:4,title:"Узнать свой логин ЕУЗ",icon:"",path:Op,Component:nw},{id:5,title:"Вниманию студентов 1 курса!",icon:"",path:Dp,Component:sw},{id:6,title:"Вниманию сотрудников!",icon:"",path:Ip,Component:ow}],Hp={all:{id:"all",title:"Все разделы",icon:t.jsx(Ih,{}),path:$i,Component:W1,color:"lightGreen",isTemplate:!1,show:!1,group:"GENERAL",withoutBackButton:!0,pageSize:"big"},doclist:{id:"doclist",title:"Ознакомление с документами",icon:t.jsx(I,{}),path:go,Component:iw,color:"blue",isTemplate:!1,group:"FINANCES_DOCS"},alerts:{id:"alerts",title:"Новости",icon:t.jsx(Ka,{}),path:zp,Component:Q1,color:"purple",isTemplate:!1,group:"COMMUNICATION",keywords:["Оповещения"]},home:{id:"home",title:"Главная",icon:t.jsx(or,{}),path:_o,Component:q1,color:"blue",isTemplate:!1,group:"GENERAL",keywords:["домой"],withoutHeader:!0},settings:{id:"settings",title:"Настройки",icon:t.jsx(Is,{}),path:Ie,Component:eC,color:"lightGreen",isTemplate:!0,show:!0,group:"GENERAL"},profile:{id:"profile",title:"Профиль",icon:t.jsx(er,{}),path:ko,Component:K1,color:"purple",isTemplate:!1,group:"GENERAL",withoutHeader:!0},"lk-notifications":{id:"lk-notifications",title:"Уведомления",icon:t.jsx(Nn,{}),path:Fp,Component:rw,color:"orange",isTemplate:!1,group:"GENERAL",keywords:["Оповещения"]},"electronic-interaction-agreement":{id:"electronic-interaction-agreement",title:"Соглашение об электронном взаимодействии",shortTitle:"Соглашение об электр...",icon:t.jsx(Ja,{}),path:$p,Component:V1,color:"blue",isTemplate:!1,group:"GENERAL",pageSize:"small"},chat:{id:"chat",title:"Сообщения",icon:t.jsx(Lh,{}),path:So,isOldLkPage:!0,Component:()=>Se({oldVersionUrl:oC}),color:"red",isTemplate:!0,group:"OTHER",keywords:["чат"],planeHeader:!0},schedule:{id:"schedule",title:"Расписание",icon:t.jsx(Tt,{}),path:qt,menuPath:Bp,Component:Fl,color:"pink",isTemplate:!0,show:!0,group:"LEARNING_ACTIVITIES",pageSize:"large"},"all-students":{id:"all-students",title:"Студенты",icon:t.jsx(ni,{}),path:Ap,Component:Rl,color:"lightBlue",isTemplate:!1,group:"COMMUNICATION",keywords:["одногруппники","ученики"]},feedback:{id:"feedback",title:"Обратная связь",icon:t.jsx(Di,{}),path:To,Component:zl,color:"blue",isTemplate:!1,group:"COMMUNICATION"},instructions:{id:"instructions",title:"Полезная информация",icon:t.jsx(Rh,{}),path:hC,Component:X1,color:"blue",isTemplate:!1,group:"GENERAL",show:!1},vaccination:{id:"vaccination",title:"Вакцинация",icon:t.jsx(qa,{}),path:sC,Component:()=>(pe.useEffect(()=>{window.location.replace("https://e.mospolytech.ru/old/index.php?p=vaccination")},[]),null),color:"blue",isTemplate:!1,group:"GENERAL",keywords:["медицинская","справка","грипп","dfrwbyfwbz"],isOldLkPage:!0,show:!D}},wC={"schedule-current":{id:"schedule-current",title:"Текущее расписание",shortTitle:"Текущее",icon:t.jsx(Tt,{}),path:Bp,Component:J1,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},"schedule-semestr":{id:"schedule-semestr",title:"Расписание на семестр",shortTitle:"Семестр",icon:t.jsx(zs,{}),path:gC,Component:Z1,color:"orange",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-session":{id:"schedule-session",title:"Расписание сессии",shortTitle:"Сессия",icon:t.jsx(ir,{}),path:fC,Component:ew,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"},"schedule-retake":{id:"schedule-retake",title:"Пересдачи",icon:t.jsx(Pn,{}),path:mC,Component:tw,color:"red",isTemplate:!1,show:!0,group:"OTHER",pageSize:"large"}},Wp={"schedule-filter":{id:"schedule-filter",title:"Расписание",icon:t.jsx(Tt,{}),path:gi,Component:Fl,color:"pink",isTemplate:!1,show:!1,group:"OTHER",pageSize:"large"},...wC,"filtered-all-students":{id:"filtered-all-students",title:"Все студенты",icon:t.jsx(ni,{}),path:aC,Component:Rl,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"filtered-all-teachers":{id:"filtered-all-teachers",title:"Все сотрудники",icon:t.jsx(ni,{}),path:rC,Component:U1,color:"blue",isTemplate:!1,show:!1,group:"OTHER"},"settings-appearance":{id:"settings-appearance",title:"Настройки. Внешний вид",icon:t.jsx(zh,{}),path:lC,Component:QT,color:"purple",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Внешний вид",fallbackPrevPage:Ie,backButtonText:"Настройки"},"settings-personal":{id:"settings-personal",title:"Настройки. Аккаунт",icon:t.jsx(Fh,{}),path:cC,Component:YT,color:"pink",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Аккаунт",fallbackPrevPage:Ie,backButtonText:"Настройки"},"settings-home-page":{id:"settings-home-page",title:"Настройки. Главная страница",icon:t.jsx(or,{}),path:dC,Component:dT,color:"blue",isTemplate:!0,show:!0,group:"OTHER",isSubPage:!0,subPageHeaderTitle:"Главная страница",fallbackPrevPage:Ie,backButtonText:"Настройки"},"settings-customize-menu":{id:"settings-customize-menu",title:"Настройки. Меню",icon:t.jsx(Mh,{}),path:pC,Component:pT,color:"red",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Меню",fallbackPrevPage:Ie,backButtonText:"Настройки"},"settings-notifications":{id:"settings-notifications",title:"Настройки. Уведомления",icon:t.jsx(Nn,{}),path:uC,Component:hT,color:"orange",isTemplate:!0,show:!0,isSubPage:!0,subPageHeaderTitle:"Уведомления",fallbackPrevPage:Ie,backButtonText:"Настройки"},"useful-info-template":{id:"useful-info-template",title:"Полезная информация",icon:"",path:bC,Component:ro,color:"grey",isTemplate:!0,show:!1}},jC=D?"https://api.mospolytech.ru/physedjournal/graphql/":"https://api.mospolytech.ru/physedjournal/stage/graphql/",Ai=kt.create({baseURL:jC}),_C={headers:{"Content-Type":"application/json"}};Ai.interceptors.request.use(Ws);Ai.interceptors.response.use(async e=>{var i,n,s,o;return((o=(s=(n=(i=e==null?void 0:e.data)==null?void 0:i.errors)==null?void 0:n[0])==null?void 0:s.extensions)==null?void 0:o.code)==="AUTH_NOT_AUTHENTICATED"?await Oi(Ai)(e):e},Oi(Ai));const kC=async e=>{var n;const i=await Ai.post("",{query:e},_C);if(Up(i.data))throw new Error("Request error");return(n=i==null?void 0:i.data)==null?void 0:n.data};function Up(e){if(typeof e=="object"&&e){if(e.hasOwnProperty("errors")&&e.errors)return!0;for(const i in e)if(Up(e[i]))return!0}return!1}const SC=e=>`query {
        teacher(guid: "${e}") {
          permissions
          fullName
        }
      }`,Gp=E(),Co=La({effect:async({currentUser:e})=>({...(await kC(SC((e==null?void 0:e.guid)??""))).teacher,id:(e==null?void 0:e.guid)??""}),source:ae.user}),TC=Ua(Co,null);S({clock:Gp,target:Co});const CC=Co.pending,EC={load:Gp},QE={peTeacher:TC,isLoading:CC},Vp=E(),Yp=F(Px);S({clock:Vp,target:Yp});const Qp=V([]),qE=lt(Qp,e=>e.map(i=>i.divisionName));S({clock:Yp.doneData,target:Qp});function qp(e){const{pathname:i}=Yt();l.useEffect(()=>{e==null||e.scrollTo(0,0)},[i])}const PC=()=>{const{allRoutes:e}=Ye.useMenu();return e?t.jsxs(Fs,{children:[Object.values(e).map(({path:i,Component:n,isTemplate:s})=>t.jsx(fn,{path:i,component:n,exact:!s},i)),t.jsx(nt,{exact:!0,to:_o})]}):null},$C=pe.memo(PC),AC=u.div`
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
`,NC=()=>{const{open:e,content:i,position:n}=tf.useContextMenu(),s=l.useRef(null);return pi(s,()=>Fe.close()),t.jsx(ns,{isOpen:e,children:t.jsx(AC,{isVisible:e,ref:s,left:n.x,top:n.y,onClick:o=>{o.stopPropagation()},children:i})})},Xp=200,DC=5e3,OC=()=>{const{visibleNotifications:e}=$t.useLkNotifications(),[i,n]=l.useState(null),s=l.useRef(),o=a=>(s.current=void 0,()=>{n(a),setTimeout(()=>{ri.clearVisibleById(a)},Xp)});return l.useEffect(()=>{var a,r;e.length&&s.current===void 0&&(s.current=setTimeout(o((a=e[0])==null?void 0:a.id),((r=e[0])==null?void 0:r.duration)??DC))},[e]),{handleClose:o,closing:i}},IC=u.div`
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
`,LC=u.div`
    border-radius: var(--brLight);
    background: var(--block);
    color: var(--text);
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 50px #00000521;
    transition: 0.2s;

    animation: ${({open:e})=>e?"open":"close"} ${Xp/1e3}s forwards;

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
`;const RC=()=>{const{visibleNotifications:e}=$t.useLkNotifications(),{closing:i,handleClose:n}=OC();return t.jsx(IC,{children:e.map(s=>t.jsx(LC,{onClick:n(s.id),open:i!==s.id,children:t.jsx(Ed,{...s,fullText:!1,maxLetters:19,closeAnimation:!1,onClose:n(s.id)})},s.id))})},Da=u.div`
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
`,zC=({loading:e})=>{const{data:{user:i},error:n}=be.useUser(),s=i?Ue(i==null?void 0:i.fullName):j.blue.main,o=()=>Gx.getUserFx(JSON.parse(localStorage.getItem(H.Token)??"")),a=()=>Le.logout();return n?t.jsx(Da,{$loading:!0,color:s,children:t.jsx(ge,{text:n,children:t.jsxs(P,{d:"column",gap:"8px",children:[t.jsx(y,{onClick:o,text:"Попробовать снова",icon:t.jsx(Pn,{}),width:"200px"}),t.jsx(y,{onClick:a,textColor:"var(--theme-mild-opposite)",text:"Выйти",width:"200px",background:"var(--theme)"})]})})}):t.jsxs(Da,{color:s,$loading:e,children:[t.jsx(Ln,{short:!0,width:"100px"}),e&&t.jsx(et,{})]})},FC=u.div`
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
`,MC=({filled:e,playing:i,isLast:n,onClose:s})=>{const{currentPage:o}=wo.useStory();return t.jsx(FC,{filled:e,playing:i,children:t.jsx("div",{className:"inner-line",onAnimationEnd:()=>n?s():It.changeCurrentPage({value:o+1})})})},BC=u(On)`
    position: absolute;
    top: 30px;
    left: 0;
    padding: 0px 30px;
    z-index: 2;

    svg {
        min-width: 20px;
        height: 20px;
    }
`,HC=({playing:e,pages:i,onClose:n})=>{const{currentPage:s}=wo.useStory();return t.jsxs(BC,{height:"10px",verticalAlign:"center",direction:"horizontal",width:"100%",children:[Array(i).fill(0).map((o,a)=>t.jsx(MC,{onClose:n,isLast:a+1===i,playing:s===a?e:null,filled:s>a?100:s===a?void 0:0},a)),e?t.jsx(Hh,{}):t.jsx(Bh,{}),t.jsx(y,{minWidth:"25px",width:"25px",height:"25px",icon:t.jsx(rt,{}),onClick:n})]})},WC=e=>`translate(${e.horizontal==="center"?"-50%":"0px"}, ${e.vertical==="center"?"-50%":"0px"})})`,UC=u(ut)`
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
`,GC=u.div`
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
    transform: ${({align:e})=>WC(e)};
    text-align: ${({textAlign:e})=>e??"left"};
`,VC=({background:e,align:i,image:n,color:s,title:o,text:a,children:r,setPlaying:c,link:d,imageAlign:p,imageSize:h={width:"auto",height:"100%"},textAlign:g="left"})=>{const x=dt();return t.jsxs(UC,{imageAlign:p,onClick:()=>c(f=>!f),background:e,align:i,padding:"0",height:"100%",color:s,children:[n&&t.jsx(Xs,{src:n,loading:!1,width:h.width,height:h.height}),t.jsxs(GC,{imageAlign:p,onClick:()=>c(f=>!f),background:e,align:i,color:s,children:[t.jsx(z,{size:2,align:g,children:o}),t.jsx(te,{fontSize:"1.1em",align:g,children:a}),!!(d!=null&&d.text)&&t.jsx(y,{onClick:()=>{x.push(d.to),It.close()},text:d.text}),r&&t.jsx("div",{className:"content-children",children:r})]})]})},YC=u.div`
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
`,Oa=u.div`
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
`,QC=()=>{const{pages:e,isOpen:i,currentPage:n}=wo.useStory(),s=l.useRef(null);pi(s,()=>It.close());const[o,a]=l.useState(!0),r=e[n];return e.length===0?null:t.jsx(ns,{isOpen:i,children:t.jsx(YC,{isOpen:i,ref:s,children:e.length!==0&&t.jsxs(t.Fragment,{children:[t.jsx(HC,{pages:e.length,onClose:()=>It.close(),playing:o}),t.jsx(Oa,{left:"15px",onClick:()=>{n!==0&&It.changeCurrentPage({value:n-1}),a(!0)},children:t.jsx(Bi,{})}),t.jsx(VC,{setPlaying:a,currentPage:n,...r}),t.jsx(Oa,{right:"15px",onClick:()=>{n!==e.length-1?It.changeCurrentPage({value:n+1}):It.close(),a(!0)},children:t.jsx(ct,{})})]})})})},Kp=E(),Jp=E(),Zp=E(),eu=E(),en=F(async()=>{const i=(await Tx())[0];if((i==null?void 0:i.result)!=="ok")throw new Error});S({clock:en.doneData,fn:()=>({message:"Форма отправлена успешно",type:"success"}),target:G.evokePopUpMessage});S({clock:en.doneData,fn:()=>!0,target:Zp});S({clock:en.failData,fn:()=>({message:"Не удалось подписать",type:"failure"}),target:G.evokePopUpMessage});const Mi=F(async()=>{try{return(await Sx())[0]}catch(e){throw new Error(e)}});S({clock:Jp,target:en});S({clock:Kp,target:Mi});const qC=Mi.pending,XC=en.pending,KC=V(!1).on(eu,(e,i)=>i),JC=V(!1).on(Zp,(e,i)=>i),ZC=V(null).on(Mi,()=>null).on(Mi.failData,(e,i)=>i.message),eE=V(null).on(Mi.doneData,(e,i)=>i).on(ae.userGuid,()=>null),tE={$error:ZC,$electronicInteractionStore:eE,$completed:KC,$done:JC,$loading:qC,$workerLoading:XC},Ia={getElectronicInteraction:Kp,postElectronicInteraction:Jp,changeCompleted:eu},iE=()=>{const{data:{user:e}}=be.useUser(),{notifications:i,loading:n,loaded:s}=$t.useLkNotifications(),o=K(de.userSettings),[a]=K([tE.$electronicInteractionStore]),r=o==null?void 0:o.notifications;l.useEffect(()=>{Ia.getElectronicInteraction(),a&&!a.status&&ri.add(md("electronic-interaction","electronic-interaction"))},[a==null?void 0:a.status]),l.useEffect(()=>{a||Ia.getElectronicInteraction()},[a]),l.useEffect(()=>{e&&r&&r.all!==!1&&!s&&!n&&(bd(r,[{id:"schedule",type:"schedule",title:"Скоро пара!",text:"Осталось меньше 15 мин."}]).length,ri.initialize({settings:r}))},[e,r,n,s]),l.useEffect(()=>{Pt.changeNotifications({page:"lk-notifications",notifications:i.length})},[i])},nE=()=>{const{data:{user:e}}=be.useUser(),[i,n]=l.useState(!1),s=o=>{const a=localStorage.getItem("lastLocalAccess")||o,r=new Date(Zh);new Date(o)<r&&new Date(a)<r&&(localStorage.setItem("lastLocalAccess",new Date().toISOString()),n(!0))};return l.useEffect(()=>{e&&s(e.lastaccess)},[e]),i},sE=()=>{const e=ol(),{open:i}=M(),n=nE();return iE(),l.useEffect(()=>{n&&n&&i(t.jsx(ap,{}),"Что нового")},[n]),{currentPage:e}},oE=u.div`
    display: flex;
    flex: 1;
    background: var(--theme);
    width: 100%;
`,aE=u.div`
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
`,rE=u.div`
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
`,lE=()=>{const{data:{user:e}}=be.useUser(),i=l.useRef(null),{allRoutes:n}=Ye.useMenu(),{currentPage:s}=sE(),[o,a]=l.useState(!1),r=c=>{a(c.currentTarget.scrollTop>0)};return qp(i.current),t.jsxs(oE,{children:[t.jsx(zC,{loading:!e||!n}),t.jsx(QC,{}),t.jsx(X_,{}),t.jsxs(aE,{children:[t.jsx(L_,{headerVisible:(s==null?void 0:s.hiddenTitle)||o,currentPage:s}),t.jsx(rE,{ref:i,onScroll:r,withHeader:!(s!=null&&s.withoutHeader),children:t.jsx($r,{children:t.jsx(l.Suspense,{fallback:null,children:t.jsx($C,{})})})}),t.jsx(jS,{})]}),t.jsx(nk,{}),t.jsx(J_,{}),t.jsx(ok,{}),t.jsx(NC,{}),t.jsx(PS,{}),t.jsx(RC,{})]})},cE=pe.memo(lE),dE=()=>{const{data:{isAuthenticated:e,user:i}}=be.useUser();return qp(window),l.useEffect(()=>{window.location.href==="https://e.mospolytech.ru/?p=children#/home"&&window.location.replace("https://e.mospolytech.ru/old/index.php?p=children")},[window.location.href]),l.useEffect(()=>{e&&(st.getUserDataApplicationsFx(),(i==null?void 0:i.user_status)==="staff"&&(qe.effects.getFx(),st.getWorkerPosts(),Xn.getSubdivisions(),Vp()),EC.load())},[e,i]),e?t.jsx(cE,{}):t.jsx(l.Suspense,{fallback:null,children:t.jsxs(Fs,{children:[yC.map(({path:n,Component:s},o)=>t.jsx(fn,{path:n,component:s,exact:!0},o)),t.jsx(nt,{exact:!0,to:Pp})]})})},pE=u.div`
    background: var(--theme);
    overflow-y: auto;
    flex: 1;
    display: flex;
    width: 100%;
`,uE=()=>(l.useEffect(()=>{Gh()},[]),t.jsx(_g,{children:t.jsx(Wh,{basename:"/",children:t.jsx(pE,{children:t.jsx($r,{children:t.jsx(dE,{})})})})}));Uh.render(t.jsxs(pe.StrictMode,{children:[t.jsx(kk,{}),t.jsx(uE,{})]}),document.getElementById("root"));export{ee as $,$m as A,Hn as B,pa as C,W as D,P as E,Rn as F,me as G,Kw as H,Dt as I,j as J,Ot as K,lb as L,X as M,et as N,te as O,ht as P,Ve as Q,Ki as R,Me as S,Ji as T,Js as U,QE as V,Qe as W,Ag as X,ge as Y,EE as Z,PE as _,fE as a,At as a$,he as a0,mE as a1,be as a2,Bn as a3,D_ as a4,Em as a5,jE as a6,Hi as a7,ri as a8,ss as a9,g1 as aA,TE as aB,f1 as aC,kE as aD,Gy as aE,SE as aF,uo as aG,_1 as aH,Qp as aI,CE as aJ,dl as aK,Yf as aL,vm as aM,le as aN,Oc as aO,Cn as aP,vC as aQ,vE as aR,Sd as aS,j0 as aT,cj as aU,Lx as aV,yj as aW,tt as aX,Ee as aY,YE as aZ,So as a_,WE as aa,UE as ab,yE as ac,GE as ad,u0 as ae,ut as af,Cs as ag,_e as ah,ll as ai,eo as aj,Jj as ak,e_ as al,Ye as am,Kj as an,Mp as ao,bC as ap,VE as aq,Ct as ar,we as as,di as at,pt as au,_E as av,qE as aw,wf as ax,Uo as ay,Ay as az,ae as b,Lk as b$,q as b0,Fe as b1,zn as b2,pi as b3,Zn as b4,tE as b5,Ia as b6,Ge as b7,xt as b8,Rt as b9,DE as bA,NE as bB,AE as bC,Ie as bD,v_ as bE,Ad as bF,cC as bG,Le as bH,dc as bI,cc as bJ,HT as bK,VT as bL,Kn as bM,$S as bN,gr as bO,wC as bP,mC as bQ,fC as bR,gC as bS,Bd as bT,FE as bU,Xi as bV,gi as bW,Hs as bX,zE as bY,Ik as bZ,Bp as b_,U0 as ba,W0 as bb,wS as bc,BE as bd,RE as be,iS as bf,Ld as bg,yo as bh,HE as bi,de as bj,Et as bk,zp as bl,y_ as bm,Ue as bn,ep as bo,Ko as bp,ME as bq,$d as br,C_ as bs,R as bt,ps as bu,$E as bv,Wl as bw,OE as bx,IE as by,LE as bz,ve as c,Rk as c0,Gd as c1,Zt as c2,Wk as c3,ip as c4,Hk as c5,op as c6,Ak as c7,lk as c8,dS as c9,sS as ca,ye as cb,zd as cc,Ud as cd,hl as ce,zi as cf,Gk as cg,cl as ch,Gx as ci,$t as cj,uC as ck,j_ as cl,bE as cm,gE as cn,xE as co,Sn as cp,jk as cq,Xs as cr,Qg as cs,wE as ct,Am as cu,sn as cv,Tm as cw,Cm as cx,Sm as cy,Kr as cz,G as d,st as e,dn as f,ie as g,z as h,Be as i,Ui as j,D as k,oe as l,zo as m,Ae as n,y as o,kC as p,Wi as q,io as r,Pe as s,gt as t,M as u,Gl as v,_i as w,Rx as x,Te as y,EC as z};
