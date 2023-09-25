import{j as e,r as c,s as l,L as g}from"./vendor-198a3a64.js";import{ab as p,aF as y,aG as n,aH as _,aI as k,a7 as h,as as b,z as v,p as F}from"./index-7ac35755.js";import{U as d}from"./help-links-4c054a35.js";const P=()=>{const s=[n()["structure-of-the-university"],n()["social-environment"],n()["psychological-help"],n()["health-care"],n()["wifi-at-the-university"],n().brandbook,n()["addresses-and-contacts"]];return e.jsx(p,{gap:"8px",$wrap:!0,children:s.map(r=>e.jsx(y,{...r},r.id))})},T=({title:s,collapsed:r,children:t})=>{const[a,m]=c.useState(!r),[u,f]=c.useState(!1);return e.jsxs(_,{openArea:a,children:[e.jsx(k,{title:s,included:u,optional:!1,setOpenArea:m,setIncluded:f,collapsed:!1,openArea:a}),e.jsx("div",{className:"inputs",children:t})]})},w=l.div`
    flex-grow: 1;
    min-width: 20px;
    max-width: 100px;
`,o=({title:s,content:r})=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:s}),e.jsxs(p,{children:[e.jsx("div",{children:Object.keys(r).map(t=>e.jsx("p",{children:t},t))}),e.jsx(w,{}),e.jsx("div",{children:Object.keys(r).map(t=>e.jsx("p",{children:r[t]},t))})]})]}),i=l.p`
    font-style: italic;
`,L=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Для получения постоянного электронного пропуска Вам необходимо явиться в Бюро пропусков и предъявить паспорт."}),e.jsx(o,{title:"Режим работы и контакты Бюро пропусков:",content:{"Понедельник – Четверг":"9:00-18:00",Пятница:"9:00 – 17:00","Суббота, Воскресенье":"Выходной"}}),e.jsxs(i,{children:["г. Москва, ул. Большая Семеновская, д. 38, каб. Н-514",e.jsx("br",{}),e.jsx("a",{href:"tel:+74952230523,1520",children:"Тел. : +7 (495) 223-05-23 доб. 1520"})]})]}),x=l.span`
    font-weight: bold;
`,O=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Для получения доступа к внутренним системам Московского Политеха направьте письмо на электронный адрес"," ",e.jsx("a",{href:"mailto:help@mospolytech.ru",children:"help@mospolytech.ru"})," c указанием следующей информации:",e.jsx("br",{}),e.jsx(x,{children:"Тема письма:"})," Доступ к внутренним системам университета",e.jsx("br",{}),e.jsx(x,{style:{fontWeight:"bold"},children:"Содержание:"})," Указать необходимые системы, ФИО, должность, подразделение"]}),e.jsx("p",{children:"При осуществлении внутренней и внешней переписки посредством электронной почты, связанной с деятельностью университета, все работники обязаны использовать корпоративную электронную почту."}),e.jsxs(i,{children:["По всем дополнительным вопросам, связанным с обеспечением технической поддержки на рабочем месте, обращаться по телефону ",e.jsx("a",{href:"tel:+74952230523,1111",children:"+7 (495) 223-05-23 доб. 1111"})," или на адрес электронной почты"," ",e.jsx("a",{href:"mailto:help@mospolytech.ru",children:"help@mospolytech.ru"}),"."]})]}),j=l.span`
    color: ${({color:s})=>h[s]?h[s].main:s};
`,A=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Выплата заработной платы за первую половину месяца производится"," ",e.jsx(j,{color:"green",children:"до 20 числа"})," текущего месяца, за вторую половину –"," ",e.jsx(j,{color:"green",children:"до 5 числа"})," следующего месяца. Перечисление заработной платы в университете производится на банковскую карту платежной системы «МИР». В случае отсутствия действующей карты платежной системы «МИР», оформите ее, обратившись в Расчетный отдел университета."]}),e.jsx(o,{title:"Режим работы и контакты Расчетного отдела:",content:{"Понедельник – Четверг":"9:30-18:30",Пятница:"9:30 – 17:15","Обеденный перерыв":"13:00-13:45","Суббота, Воскресенье":"Выходной"}}),e.jsxs(i,{children:["г. Москва, ул. Большая Семеновская, д. 38, каб. А-311",e.jsx("br",{}),e.jsx("a",{href:"tel:+74952230523,1410",children:"Тел. : +7 (495) 223-05-23 доб. 1410"}),","," ",e.jsx("a",{href:"tel:+74952230523,1322",children:"1322"}),", ",e.jsx("a",{href:"tel:+74952230523,1236",children:"1236"})]})]}),C=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Для оформления кадровых заявлений перейдите в раздел"," ",e.jsx(g,{to:b,children:"«Кадровые заявления»"})," или обратитесь в Отдел кадров университета. По всем дополнительным вопросам, связанным с работой, также обращайтесь в Отдел кадров университета."]}),e.jsx(o,{title:"Приемные часы и контакты Отдела кадров:",content:{"Понедельник - Вторник":"10:30-17:00",Среда:"неприемный день",Четверг:"10:30-17:00",Пятница:"10:30- 16:00","Обеденный перерыв":"13:00- 13:45","Суббота, Воскресенье":"Выходной"}}),e.jsxs("p",{children:["Для подачи заявления на выдачу документов, связанных с работой, а также справок, связанных с выплатой заработной платы, перейдите в раздел"," ",e.jsx("a",{href:"https://e.mospolytech.ru/old/?p=sprav",target:"_blank",rel:"noreferrer",children:"«Цифровые сервисы»"})," ","или обратитесь в одно из отделений"," ",e.jsx("a",{href:"https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/",target:"_blank",rel:"noreferrer",children:"Многофункционального центра университета (МФЦ)"}),"."]})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"https://e.mospolytech.ru/old/storage/files/Kollektivnyj_dogovor_na_2020-2023_gg.pdf",target:"_blank",rel:"noreferrer",children:"Коллективный договор на 2020-2023 гг."}),e.jsx("a",{href:"https://e.mospolytech.ru/old/storage/files/Lokalnye_normativnye_akty__regulirujuschie_sotsialno-trudovye_otnosheniya.pdf",target:"_blank",rel:"noreferrer",children:"Локальные нормативные акты, регулирующие социально-трудовые отношения"}),e.jsx("a",{href:"https://e.mospolytech.ru/old/storage/files/Polozhenie_o_kadrovom_elektronnom_dokumentooborote_Moskovskogo_Politeha.pdf",target:"_blank",rel:"noreferrer",children:"Положение о кадровом электронном документообороте Московского Политеха"})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx("h4",{children:"Столовые"}),e.jsxs(d,{children:[e.jsx("li",{children:"Большая Семеновская, 40а (корпус Б, 1 этаж)"}),e.jsx("li",{children:"Павла Корчагина, 22 стр. 2 (1 этаж)"})]}),e.jsx("h4",{children:"Буфеты"}),e.jsxs(d,{children:[e.jsx("li",{children:"Прянишникова, 2а (3 этаж). Коворкинг-зоны с вендинговым аппаратом с готовым питанием и кофейным аппаратом"}),e.jsx("li",{children:"Автозаводская, 16, стр. 5 (4 корпус)"}),e.jsx("li",{children:"Большая Семеновская 38, стр. 12 (корпус Н, 4 этаж)"})]})]}),S=[{title:"Оформление пропуска",content:L},{title:"Организация рабочего места",content:O},{title:"Питание",content:I},{title:"Выплата заработной платы",content:A},{title:"Кадровый документооборот",content:C},{title:"Документы",content:R}],H=()=>e.jsx(e.Fragment,{children:S.map(({title:s,content:r},t)=>e.jsx(T,{title:s,collapsed:t!==0,children:e.jsx(r,{})},s))}),E=()=>e.jsx(v,{padding:"10px",children:e.jsxs(F,{children:[e.jsx(H,{}),e.jsx(P,{})]})});export{E as default};
