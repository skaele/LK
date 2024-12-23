var _=Object.defineProperty;var c=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var a=(s,n,r)=>n in s?_(s,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[n]=r,h=(s,n)=>{for(var r in n||(n={}))k.call(n,r)&&a(s,r,n[r]);if(c)for(var r of c(n))b.call(n,r)&&a(s,r,n[r]);return s};import{j as e,r as d,s as t,aa as v}from"./vendor-00bea631.js";import{aJ as F,G as u,bj as P,a_ as w,a$ as C,L as x,bk as T,_ as I,P as L}from"./index-ed5dff92.js";import{B as j}from"./BoldText-d23d2586.js";import{U as p}from"./help-links-398092b6.js";const O=()=>{const{allRoutes:s}=F.useMenu();if(!s)return null;const n=[s["structure-of-the-university"],s["social-environment"],s["psychological-help"],s["health-care"],s["wifi-at-the-university"],s.brandbook,s["addresses-and-contacts"]];return e.jsx(u,{gap:"8px",$wrap:!0,children:n.map(r=>e.jsx(P,h({},r),r.id))})},A=({title:s,collapsed:n,children:r})=>{const[i,f]=d.useState(!n),[g,y]=d.useState(!1);return e.jsxs(w,{openArea:i,children:[e.jsx(C,{title:s,included:g,optional:!1,setOpenArea:f,setIncluded:y,collapsed:!1,openArea:i}),e.jsx("div",{className:"inputs",children:r})]})},R=t.div.withConfig({componentId:"sc-1pfv9nz-0"})(["flex-grow:1;min-width:20px;max-width:100px;"]),l=({title:s,content:n})=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:s}),e.jsxs(u,{children:[e.jsx("div",{children:Object.keys(n).map(r=>e.jsx("p",{children:r},r))}),e.jsx(R,{}),e.jsx("div",{children:Object.keys(n).map(r=>e.jsx("p",{children:n[r]},r))})]})]}),o=t.p.withConfig({componentId:"sc-2a4nif-0"})(["font-style:italic;"]),S=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Для получения постоянного электронного пропуска Вам необходимо явиться в Бюро пропусков и предъявить паспорт."}),e.jsx(l,{title:"Режим работы и контакты Бюро пропусков:",content:{"Понедельник – Четверг":"9:00-18:00",Пятница:"9:00 – 17:00","Суббота, Воскресенье":"Выходной"}}),e.jsxs(o,{children:["г. Москва, ул. Большая Семеновская, д. 38, каб. Н-514",e.jsx("br",{}),e.jsx("a",{href:"tel:+74952230523,1520",children:"Тел. : +7 (495) 223-05-23 доб. 1520"})]})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Для получения доступа к внутренним системам Московского Политеха направьте письмо на электронный адрес"," ",e.jsx("a",{href:"mailto:help@mospolytech.ru",children:"help@mospolytech.ru"})," c указанием следующей информации:",e.jsx("br",{}),e.jsx(j,{children:"Тема письма:"})," Доступ к внутренним системам университета",e.jsx("br",{}),e.jsx(j,{children:"Содержание:"})," Указать необходимые системы, ФИО, должность, подразделение"]}),e.jsx("p",{children:"При осуществлении внутренней и внешней переписки посредством электронной почты, связанной с деятельностью университета, все работники обязаны использовать корпоративную электронную почту."}),e.jsxs(o,{children:["По всем дополнительным вопросам, связанным с обеспечением технической поддержки на рабочем месте, обращаться по телефону ",e.jsx("a",{href:"tel:+74952230523,1111",children:"+7 (495) 223-05-23 доб. 1111"})," или на адрес электронной почты"," ",e.jsx("a",{href:"mailto:help@mospolytech.ru",children:"help@mospolytech.ru"}),"."]})]}),m=t.span.withConfig({componentId:"sc-1jj5uht-0"})(["color:",";"],({color:s})=>x[s]?x[s].main:s),B=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Выплата заработной платы за первую половину месяца производится"," ",e.jsx(m,{color:"green",children:"до 20 числа"})," текущего месяца, за вторую половину –"," ",e.jsx(m,{color:"green",children:"до 5 числа"})," следующего месяца. Перечисление заработной платы в университете производится на банковскую карту платежной системы «МИР». В случае отсутствия действующей карты платежной системы «МИР», оформите ее, обратившись в Расчетный отдел университета."]}),e.jsx(l,{title:"Режим работы и контакты Расчетного отдела:",content:{"Понедельник – Четверг":"9:30-18:30",Пятница:"9:30 – 17:15","Обеденный перерыв":"13:00-13:45","Суббота, Воскресенье":"Выходной"}}),e.jsxs(o,{children:["г. Москва, ул. Большая Семеновская, д. 38, каб. А-311",e.jsx("br",{}),e.jsx("a",{href:"tel:+74952230523,1410",children:"Тел. : +7 (495) 223-05-23 доб. 1410"}),","," ",e.jsx("a",{href:"tel:+74952230523,1322",children:"1322"}),", ",e.jsx("a",{href:"tel:+74952230523,1236",children:"1236"})]})]}),D=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Для оформления кадровых заявлений перейдите в раздел"," ",e.jsx(v,{to:T,children:"«Кадровые заявления»"})," или обратитесь в Отдел кадров университета. По всем дополнительным вопросам, связанным с работой, также обращайтесь в Отдел кадров университета."]}),e.jsx(l,{title:"Приемные часы и контакты Отдела кадров:",content:{"Понедельник - Вторник":"10:30-17:00",Среда:"неприемный день",Четверг:"10:30-17:00",Пятница:"10:30- 16:00","Обеденный перерыв":"13:00- 13:45","Суббота, Воскресенье":"Выходной"}}),e.jsxs("p",{children:["Для подачи заявления на выдачу документов, связанных с работой, а также справок, связанных с выплатой заработной платы, перейдите в раздел"," ",e.jsx("a",{href:"https://e.mospolytech.ru/old/?p=sprav",target:"_blank",rel:"noreferrer",children:"«Цифровые сервисы»"})," ","или обратитесь в одно из отделений"," ",e.jsx("a",{href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/",target:"_blank",rel:"noreferrer",children:"Многофункционального центра университета (МФЦ)"}),"."]})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"https://e.mospolytech.ru/old/storage/files/Kollektivnyj_dogovor_na_2020-2023_gg.pdf",target:"_blank",rel:"noreferrer",children:"Коллективный договор на 2020-2023 гг."}),e.jsx("a",{href:"https://e.mospolytech.ru/old/storage/files/Lokalnye_normativnye_akty__regulirujuschie_sotsialno-trudovye_otnosheniya.pdf",target:"_blank",rel:"noreferrer",children:"Локальные нормативные акты, регулирующие социально-трудовые отношения"}),e.jsx("a",{href:"https://e.mospolytech.ru/old/storage/files/Polozhenie_o_kadrovom_elektronnom_dokumentooborote_Moskovskogo_Politeha.pdf",target:"_blank",rel:"noreferrer",children:"Положение о кадровом электронном документообороте Московского Политеха"})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsx("h4",{children:"Столовые"}),e.jsxs(p,{children:[e.jsx("li",{children:"Большая Семеновская, 40а (корпус Б, 1 этаж)"}),e.jsx("li",{children:"Павла Корчагина, 22 стр. 2 (1 этаж)"})]}),e.jsx("h4",{children:"Буфеты"}),e.jsxs(p,{children:[e.jsx("li",{children:"Прянишникова, 2а (3 этаж). Коворкинг-зоны с вендинговым аппаратом с готовым питанием и кофейным аппаратом"}),e.jsx("li",{children:"Автозаводская, 16, стр. 5 (4 корпус)"}),e.jsx("li",{children:"Большая Семеновская 38, стр. 12 (корпус Н, 4 этаж)"})]})]}),U=[{title:"Оформление пропуска",content:S},{title:"Организация рабочего места",content:z},{title:"Питание",content:N},{title:"Выплата заработной платы",content:B},{title:"Кадровый документооборот",content:D},{title:"Документы",content:E}],W=()=>e.jsx(e.Fragment,{children:U.map(({title:s,content:n},r)=>e.jsx(A,{title:s,collapsed:r!==0,children:e.jsx(n,{})},s))}),K=()=>e.jsx(I,{padding:"10px",children:e.jsxs(L,{children:[e.jsx(W,{}),e.jsx(O,{})]})});export{K as default};
