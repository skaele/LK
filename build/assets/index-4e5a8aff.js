var H=Object.defineProperty,L=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var I=(e,a,t)=>a in e?H(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,g=(e,a)=>{for(var t in a||(a={}))q.call(a,t)&&I(e,t,a[t]);if(E)for(var t of E(a))z.call(a,t)&&I(e,t,a[t]);return e},v=(e,a)=>L(e,U(a));var b=(e,a,t)=>new Promise((o,l)=>{var u=s=>{try{n(t.next(s))}catch(d){l(d)}},i=s=>{try{n(t.throw(s))}catch(d){l(d)}},n=s=>s.done?o(s.value):Promise.resolve(s.value).then(u,i);n((t=t.apply(e,a)).next())});import{p as N,h as G,m as T,I as D,x as y,n as W,r as m,j as c}from"./vendor-91dd51cf.js";import{f as X,g as j,$ as P,d as B,s as Y,B as J,F as K,I as h,S as V,di as Z,j as ee,c as C}from"./index-2caaee2c.js";const R=[{id:0,title:"Брат"},{id:1,title:"Сестра"},{id:2,title:"Бабушка"},{id:3,title:"Дедушка"},{id:4,title:"Тетя"},{id:5,title:"Дядя"},{id:6,title:"Другое"}],te=(e,{email:a,phone:t})=>({title:"Контактные данные",data:[{title:"ФИО",value:`${e.surname} ${e.name} ${e.patronymic}`,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:t,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:a,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0}]}),M=(e,a,{m_fio:t,m_phone:o,m_job:l,f_fio:u,f_phone:i,f_job:n})=>({title:`Контактные данные родителей (${e})`,data:[{title:"Телефон",value:e==="Мать"?o:i,fieldName:a+"phone",type:"tel",width:"100%",editable:!0,mask:!0},{title:"ФИО",value:e==="Мать"?t:u,fieldName:a+"fio",width:"100%",editable:!0},{title:"Место работы",value:e==="Мать"?l:n,fieldName:a+"job",width:"100%",editable:!0}]}),ae=({relative:e,r_phone:a,r_fio:t,r_job:o})=>({title:"Контактные данные родственников",data:[{title:"Член семьи",value:X(R,e),fieldName:"relative",type:"select",items:R,width:"100%",editable:!0},{title:"Телефон",value:a,fieldName:"r_phone",type:"tel",width:"100%",editable:!0,mask:!0},{title:"ФИО",value:t,fieldName:"r_fio",width:"100%",editable:!0},{title:"Место работы",value:o,fieldName:"r_job",width:"100%",editable:!0}]}),se=e=>e.some(a=>a.data.some(t=>Array.isArray(t)?t.some(o=>o.value):typeof t=="boolean"?t:t.value)),oe=e=>b(void 0,null,function*(){const a=new FormData;a.set("token",j());for(const[o,l]of Object.entries(e))a.set(o,l);const{data:t}=yield P.post(`?saveFamilyContacts=1&token=${j()}`,a,{headers:{"Content-Type":"multipart/form-data"}});if(t.result!=="ok")throw new Error(t.error_text);return t}),le=()=>b(void 0,null,function*(){return(yield P.get(`?getFamilyContacts&token=${j()}`)).data}),O=N({name:"getContacts",sid:"-vkg98w"}),Q=N({name:"saveContacts",sid:"zdvs7"}),S=N({name:"formCompleted",sid:"-legib6"}),ie=G(!1,{name:"$completed",sid:"yhj3np"}).on(S,(e,a)=>a),x=T({sid:"-kw7m1y",fn:()=>D({handler:le}),name:"getFamilyContactsQuery",method:"createQuery"}),F=T({sid:"-3lw42o",fn:()=>D({handler:oe}),name:"saveFamilyContactsMutation",method:"createQuery"});y({and:[{clock:O,target:x.start}],or:{sid:"-di6jlk"}});y({and:[{clock:Q,target:F.start}],or:{sid:"-dfzd84"}});y({and:[{clock:F.$succeeded,fn:()=>({message:"Данные успешно сохранены",type:"success"}),target:B.evokePopUpMessage}],or:{sid:"-d28ie3"}});y({and:[{clock:F.$succeeded,target:S}],or:{sid:"-cmah6m"}});y({and:[{clock:F.$failed,fn:()=>({message:"Не удалось сохранить данные. Попробуйте еще раз",type:"failure"}),target:B.evokePopUpMessage}],or:{sid:"-ck3at6"}});const w={contacts:x.$data,completed:ie,loading:x.$pending},$={getContacts:O,saveContacts:Q,formCompleted:S},ne="m_",re="f_",ue=()=>{const[e,a,t,o,l,u]=W([w.contacts,$.getContacts,$.saveContacts,w.loading,w.completed,$.formCompleted]),[i,n]=m.useState(null),[s,d]=m.useState(null),[p,_]=m.useState(null),[f,A]=m.useState(null),r=l!=null?l:!1,{data:{dataUserApplication:k}}=Y.useApplications();return m.useEffect(()=>{a()},[]),m.useEffect(()=>{k&&e&&(n(te(k,e)),d(M("Мать",ne,e)),_(M("Отец",re,e)),A(ae(e)))},[k,e]),c.jsx(J,{isDone:r,children:!!i&&!!s&&!!p&&!!f&&c.jsxs(K,{noHeader:!0,children:[c.jsx(h,v(g({},i),{collapsed:r,setData:n})),c.jsx(h,v(g({},s),{collapsed:r,setData:d})),c.jsx(h,v(g({},p),{collapsed:r,setData:_})),c.jsx(h,v(g({},f),{collapsed:r,setData:A})),c.jsx(V,{text:r?"Отправлено":"Отправить",action:()=>{t(Z(ee.FAMILY_CONTACTS,[i,s,p,f]))},isLoading:o,completed:l,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:r,isActive:C(i)&&C(s)&&C(p)&&C(f)&&se([s,p,f]),popUpFailureMessage:"Для отправки формы необходимо, чтобы хотя бы одно поле было заполнено",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{ue as default};
