var x=Object.defineProperty,h=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var p=(l,e,t)=>e in l?x(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,m=(l,e)=>{for(var t in e||(e={}))S.call(e,t)&&p(l,t,e[t]);if(c)for(var t of c(e))F.call(e,t)&&p(l,t,e[t]);return l},f=(l,e)=>h(l,H(e));import{r as a,j as r}from"./vendor-00bea631.js";import{b7 as s,s as g,B as k,F as q,I,S as j,aj as A,j as E,c as C}from"./index-ed5dff92.js";const T=l=>{const{surname:e,name:t,patronymic:i}=l;return{title:"Заявление о предоставлении дополнительного оплачиваемого отпуска",data:[{title:"ФИО",value:e+" "+t+" "+i,fieldName:"fio",mask:!0,editable:!0,required:!0},{title:"Должность",value:null,fieldName:"post",editable:!0,mask:!0,required:!0},{title:"Наименование структурного подразделения",value:null,fieldName:"structure",editable:!0,mask:!0,required:!0},{title:"Основание для получения дополнительного отпуска",type:"select",fieldName:"reason",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Двое и более детей в возрасте до 14 лет"},{id:1,title:"Ребенок-инвалид в возрасте до 18 лет"},{id:2,title:"Одиноким матерям/отцам"},{id:3,title:"В случаях рождения ребенка, регистрации брака, смерти близких родственников"},{id:4,title:"Сопровождение детей младшего школьного возраста в школу в первый день учебного года"},{id:5,title:"Стаж работы в Университете от 20 до 25 лет"},{id:6,title:"Стаж работы в Университете от 25 до 30 лет"},{id:7,title:"Стаж работы в Университете от 30 до 35 лет"},{id:8,title:"Стаж работы в Университете свыше 35 лет"}]},{title:"Период отпуска",type:"date-interval",value:["",""],fieldName:"coll-holiday1",editable:!0,mask:!0,required:!0,diff:0,specialType:"collHoliday1",minValueInput:s(14)},{title:"Период отпуска",type:"date-interval",value:["",""],fieldName:"coll-holiday2",editable:!0,mask:!0,required:!0,diff:1,specialType:"collHoliday2",minValueInput:s(14)},{title:"Период отпуска",type:"date-interval",value:["",""],fieldName:"coll-holiday3",editable:!0,mask:!0,required:!0,diff:2,specialType:"collHoliday3",minValueInput:s(14)},{title:"Период отпуска",type:"date-interval",value:["",""],fieldName:"coll-holiday4",editable:!0,mask:!0,required:!0,diff:3,specialType:"collHoliday4",minValueInput:s(14)},{title:"Период отпуска",type:"date-interval",value:["",""],fieldName:"coll-holiday5",editable:!0,mask:!0,required:!0,diff:4,specialType:"collHoliday5",minValueInput:s(14)},{title:"Место работы",type:"select",fieldName:"employment",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"Основное"},{id:1,title:"По внутреннему совместительству"}]}],documents:{files:[],required:!0,fieldName:"holidayCollFiles",maxFiles:10}}},D=l=>{const e=l.find(i=>i.fieldName==="reason");let t=null;if(e!=null&&e.value){const i=e==null?void 0:e.value;i.title==="Сопровождение детей младшего школьного возраста в школу в первый день учебного года"||i.title==="Стаж работы в Университете от 20 до 25 лет"?t="collHoliday1":i.title==="Стаж работы в Университете от 25 до 30 лет"?t="collHoliday2":i.title==="Двое и более детей в возрасте до 14 лет"||i.title==="В случаях рождения ребенка, регистрации брака, смерти близких родственников"||i.title==="Стаж работы в Университете от 30 до 35 лет"?t="collHoliday3":i.title==="Стаж работы в Университете свыше 35 лет"?t="collHoliday4":(i.title==="Одиноким матерям/отцам"||i.title==="Ребенок-инвалид в возрасте до 18 лет")&&(t="collHoliday5")}return{reasonExtraHoliday:t}},M=()=>{var o,n;const[l,e]=a.useState(null),{data:{dataUserApplication:t}}=g.useApplications(),[i,d]=a.useState(!1),[y,v]=a.useState(!1),[b,N]=a.useState({}),u=i!=null?i:!1;return a.useEffect(()=>{t&&e(T(t))},[t]),a.useEffect(()=>{l&&t&&N(D(l.data))},[l]),r.jsx(k,{isDone:u,children:!!l&&!!e&&r.jsxs(q,{children:[r.jsx(I,f(m({},l),{collapsed:u,setData:e,specialFieldsNameConfig:b})),r.jsx(j,{text:"Отправить",action:()=>A(E.DISMISSAL,[l],v,d),isLoading:y,completed:i,setCompleted:d,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:C(l)&&((n=(o=l.optionalCheckbox)==null?void 0:o.value)!=null?n:!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{M as default};
