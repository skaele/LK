import{r as o,cM as D,j as r}from"./vendor-48260ac4.js";import{$ as m,g,s as j,a as b,W as v,B,F as E,I as C,S as M,c as P}from"./index-167ac109.js";import{s as W}from"./send-form-db1b459c.js";import{c as $}from"./create-form-store-62094d51.js";const T=t=>m.get(`?getPhoneBookData=${t}&token=${g()}`),y=t=>{const s=new FormData;s.set("token",g()),s.set("setPhoneBookData","1");for(const[c,f]of Object.entries(t))s.set(c,f);return m.post("?setPhoneBookData=1",s,{headers:{"Content-Type":"multipart/form-data"}})},n=$({defaultStore:{completed:!1,error:null,loading:!0,data:null},api:{get:T,post:y}}),A=()=>{const[t,s]=o.useState(null),[c,f]=o.useState(!1),[F,x]=o.useState(!1),{guid:l}=D(),i=c??!1,[a,p]=o.useState(l),{data:u,error:S}=n.selectors.useForm(),{data:{dataUserApplication:e}}=j.useApplications();return o.useEffect(()=>{e&&p(l||(e==null?void 0:e.subdivisions[0].guid_staff))},[e]),o.useEffect(()=>{var d;if(u&&a){const h=(d=e==null?void 0:e.subdivisions)==null?void 0:d.find(k=>k.guid_staff===a);s(b(u,h))}},[a,u]),o.useEffect(()=>()=>{n.events.clearStore()},[]),a?r.jsx(v,{load:()=>{n.effects.getFormFx(a)},data:e&&u,error:S,children:r.jsx(B,{isDone:i,children:!!t&&r.jsxs(E,{noHeader:!0,children:[r.jsx(C,{...t,collapsed:i,setData:s}),r.jsx(M,{text:i?"Отправлено":"Отправить",action:()=>W(t,n.effects.postFormFx,x,n.events.changeCompleted),isLoading:F,completed:c,setCompleted:f,repeatable:!1,buttonSuccessText:"Отправлено",isDone:i,isActive:P(t),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})}):null};export{A as default};
