var m=(t,e,s)=>new Promise((l,i)=>{var n=c=>{try{r(s.next(c))}catch(T){i(T)}},h=c=>{try{r(s.throw(c))}catch(T){i(T)}},r=c=>c.done?l(c.value):Promise.resolve(c.value).then(n,h);r((s=s.apply(t,e)).next())});import{d as G,j as M,al as N,p as a,h as u,e as J,m as W,a4 as X,x as d,n as _}from"./vendor-3c67dcca.js";import{aR as ee,aS as Q,aT as k,e as j}from"./index-7ed94462.js";import{c as P}from"./create-checkbox-field-690e451f.js";const te="https://api.mospolytech.ru/lk/science/",p=G.create({baseURL:te});p.interceptors.request.use(ee);p.interceptors.response.use(t=>m(void 0,null,function*(){var e;return(t==null||(e=t.data)===null||e===void 0||(e=e.errors)===null||e===void 0||(e=e[0])===null||e===void 0||(e=e.extensions)===null||e===void 0?void 0:e.code)==="AUTH_NOT_AUTHENTICATED"?yield Q(p)(t):t}),Q(p));const se=s=>m(void 0,[s],function*({scopusFile:t,wosFile:e}){const l=new FormData;l.append("scopusFile",t),l.append("wosFile",e);const{data:i}=yield p.post("/data",l,{headers:{"Content-Type":"multipart/form-data"}});return i}),ie=t=>m(void 0,null,function*(){const{data:e}=yield p.post("/article/all",t);return e}),le=t=>m(void 0,null,function*(){const{data:e}=yield p.get(`/article/${t}`);return e.data}),ae=t=>m(void 0,null,function*(){const{data:e}=yield p.get(`/article/${t}/details`);return{titles:{scopus:A(e.titles.scopus),wos:A(e.titles.wos)},data:{scopus:A(e.data.scopus),wos:A(e.data.wos)}}});function A(t){return Object.keys(t).reduce((e,s)=>(e[s.toLowerCase()]=t[s],e),{})}const oe=()=>[{title:"Название публикации",field:"articleTitle",width:"150px",showFull:!0,align:"center"},{title:"Авторы",field:"authors",width:"130px",showFull:!0,align:"center"},{title:"Год",field:"publicationYear",width:"100px",align:"center",sort:!0,search:!0},{title:"Издательство",field:"publisher",showFull:!0,align:"center",sort:!0,search:!0},{title:"Номер страницы",field:"pageNumber",width:"120px",render:t=>t||"-",showFull:!0,align:"center"},{title:"Scopus",field:"isScopus",width:"115px",align:"center",render:t=>t&&M.jsx(N,{}),sort:!0,search:!0},{title:"WoS",field:"isWoS",width:"110px",align:"center",render:t=>t&&M.jsx(N,{}),sort:!0,search:!0},{title:"Тип",showFull:!0,field:"publicationType",align:"center"},{title:"Количество цитирований",field:"quotesCount",showFull:!0,width:"165px",align:"center",sort:!0,search:!0},{title:"DOI",field:"doi",showFull:!0,align:"center"},{title:"Источник финансирования",field:"fundingSource",showFull:!0,width:"170px",align:"center"}],ne=30,re={publicationYear:"PublicationYear",publisher:"SourceTitle",isScopus:"IsScopus",isWoS:"IsWoS",quotesCount:"QuotesCount"},o=a({name:"pageMounted",sid:"-nyvv9i"}),U=a({name:"tableOpened",sid:"-9d12pl"}),S=a({name:"modalOpened",sid:"-1o83cr"}),R=a({name:"setScopusFile",sid:"-bh0ron"}),Y=a({name:"setWosFile",sid:"-c50cvc"}),O=a({name:"uploadFiles",sid:"bzqn36"}),V=a({name:"selectArticle",sid:"92mkkj"}),z=a({name:"setColumns",sid:"eksrx7"}),ce=a({name:"getArticles",sid:"z9fdq4"}),H=a({name:"fetchArticles",sid:"-jq4br7"}),B=a({name:"sortPressed",sid:"qkj2ye"}),w=a({name:"filtersApplied",sid:"-gztca8"}),C=a({name:"filtersReset",sid:"-78ambh"}),L=u(!1,{name:"$filtersApplied",sid:"-cy6sv"}).on(w,()=>!0).on(C,()=>!1).reset([o]),f=J(l=>m(void 0,[l],function*({offset:t,sorts:e,filters:s}){return yield ie({limit:ne,offset:t,sorts:e?e.map(({field:i,order:n})=>({field:re[i],order:n})):null,filters:s})}),{name:"fetchArticlesFx",sid:"fo0r6b"}),F=k({reset:o}),b=k({reset:o}),$=k({reset:o}),x=k({reset:o}),y=P({reset:o}),q=P({reset:o}),g=W({sid:"pssul1",fn:()=>X({handler:se}),name:"uploadArticleMutation",method:"createMutation"}),v=u(null,{name:"$sorts",sid:"-npterm"}).on(B,(t,e)=>{if(!t)return[{field:e,order:"ASC"}];const s=t.find(i=>i.field===e),l=t.filter(i=>i.field!==e);return s?s.order==="ASC"?[...l,{field:e,order:"DESC"}]:l.length?l:null:[...t,{field:e,order:"ASC"}]}).reset(o),ue=u([],{name:"$articles",sid:"-p3q035"}).on(f.doneData,(t,{data:e})=>[...t,...e]).reset([v,w,C]),E=u(0,{name:"$totalCount",sid:"-yplae5"}).on(f.doneData,(t,{totalCount:e})=>e);d({and:[{clock:f.doneData,source:E,filter:(t,{totalCount:e})=>t!==e,fn:(t,{totalCount:e})=>e,target:E}],or:{sid:"-byl6hx"}});const de=u(new Set,{name:"$selectedArticles",sid:"-ymt6xl"}).on(V,(t,e)=>{const s=new Set(t);return s.has(e)?s.delete(e):s.add(e),s}).reset(o),pe=u([],{name:"$scopusFile",sid:"-dcqa4h"}).on(R,(t,e)=>e).reset([g.finished.success,S]),fe=u([],{name:"$wosFile",sid:"-3rupqm"}).on(Y,(t,e)=>e).reset(g.finished.success,S),he=u(!1,{name:"$filesUploaded",sid:"is0o9i"}).on(g.finished.success,()=>!0).reset(S),me=u(oe(),{name:"$columns",sid:"9yu9hx"}).on(z,(t,e)=>e).reset(o);d({and:[{clock:U,fn:()=>({offset:0,sorts:null,filters:null}),target:f}],or:{sid:"kxgcev"}});d({and:[{clock:H,source:{pending:f.inFlight,filtersApplied:L,sorts:v,isWoSCheck:q.value,isScopusCheck:y.value,articleTitle:F.value,publicationYear:b.value,publisher:$.value,quotesCount:x.value},filter:({pending:t})=>!t,fn:({sorts:t,filtersApplied:e,isWoSCheck:s,isScopusCheck:l,articleTitle:i,publicationYear:n,publisher:h,quotesCount:r},{startIndex:c})=>({offset:c,sorts:t,filters:e?[...i?[{field:"ArticleTitle",operation:"Like",value:i}]:[],...s?[{field:"IsWoS",operation:"Eq",value:s}]:[],...l?[{field:"IsScopus",operation:"Eq",value:l}]:[],...n?[{field:"PublicationYear",operation:"Eq",value:Number(n)}]:[],...h?[{field:"SourceTitle",operation:"Like",value:h}]:[],...r?[{field:"QuotesCount",operation:"Eq",value:Number(r)}]:[]]:null}),target:f}],or:{sid:"ldy67p"}});d({and:[{clock:[v,w,C],source:{sorts:v,filtersApplied:L,isWoSCheck:q.value,isScopusCheck:y.value,articleTitle:F.value,publicationYear:b.value,publisher:$.value,quotesCount:x.value},fn:({sorts:t,filtersApplied:e,isWoSCheck:s,isScopusCheck:l,publicationYear:i,publisher:n,quotesCount:h,articleTitle:r})=>({offset:0,sorts:t,filters:e?[...r?[{field:"ArticleTitle",operation:"Like",value:r}]:[],...s?[{field:"IsWoS",operation:"Eq",value:s}]:[],...l?[{field:"IsScopus",operation:"Eq",value:l}]:[],...i?[{field:"PublicationYear",operation:"Eq",value:Number(i)}]:[],...n?[{field:"SourceTitle",operation:"Like",value:n}]:[],...h?[{field:"QuotesCount",operation:"Eq",value:Number(h)}]:[]]:null}),target:f}],or:{sid:"o87wkv"}});d({and:[{clock:O,target:g.start}],or:{sid:"-ygmdyh"}});d({and:[{clock:g.finished.success,fn:()=>({message:"Статья успешно загружена",type:"success"}),target:j.evokePopUpMessage}],or:{sid:"-yef7l1"}});d({and:[{clock:g.finished.failure,fn:()=>({message:"Произошла ошибка",type:"failure"}),target:j.evokePopUpMessage}],or:{sid:"-xyh6dk"}});const Se={articles:ue,articlesLoading:f.inFlight,totalCount:E,selectedArticles:de,filesUploaded:he,scopusFile:pe,wosFile:fe,uploadLoading:g.$pending,columns:me,sorts:v,filtersApplied:L,articleTitle:F.value,publicationYear:b.value,publisher:$.value,quotesCount:x.value,isScopusCheck:y.value,isWoSCheck:q.value},we={tableOpened:U,pageMounted:o,selectArticle:V,uploadFiles:O,modalOpened:S,setScopusFile:R,setWosFile:Y,setColumns:z,getArticles:ce,fetchArticles:H,sortPressed:B,setArticleTitle:F.setValue,setPublicationYear:b.setValue,setPublisher:$.setValue,setQuotesCount:x.setValue,setIsScopusCheck:y.setValue,setIsWoSCheck:q.setValue,filtersApplied:w,filtersReset:C},K=a({name:"getDetailsClicked",sid:"xxk06l"}),Z=a({name:"pageMounted",sid:"-5pxjrw"}),D=W({sid:"k0ppeo",fn:()=>_({handler:le}),name:"getArticleQuery",method:"createQuery"}),I=W({sid:"-vdnnzx",fn:()=>_({handler:ae}),name:"getArticleDetailsQuery",method:"createQuery"});d({and:[{clock:Z,target:D.start}],or:{sid:"hiv5ll"}});d({and:[{clock:K,target:I.start}],or:{sid:"hl2bz1"}});const Ce={pageMounted:Z,getDetailsClicked:K},Fe={article:D.$data,details:I.$data,loading:D.$pending,detailsLoading:I.$pending};export{ne as T,Fe as a,Ce as b,we as e,oe as g,Se as s};
