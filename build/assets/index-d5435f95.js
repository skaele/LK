import{s as n,j as r,q as d,F as v}from"./vendor-84bdec13.js";import{h as j,M as b,ag as _,ac as g,cy as u,u as k,W as y,P as w,O as m,o as S,G as p,J as h,b1 as I}from"./index-2258ba16.js";import{i as M}from"./is-valid-url-08a91344.js";import{B as o}from"./BoldText-995ec82b.js";const C=n.div.withConfig({componentId:"sc-19bjbnv-0"})(["width:100%;display:flex;justify-content:space-between;padding:8px 0;box-sizing:border-box;border-radius:var(--brLight);font-size:0.9rem;font-weight:",";span{font-weight:bold;color:",";}"],({bold:e})=>e?600:400,({color:e})=>e),l=({score:e,title:s,bold:t,scoreText:i,color:c})=>r.jsxs(C,{bold:t,color:c??(e>=60?"var(--green)":"var(--red)"),children:[r.jsx("div",{children:s}),r.jsxs("div",{children:[r.jsx("span",{children:e}),i&&r.jsxs("span",{children:[" (",i,")"]})]})]}),z=n.div.withConfig({componentId:"sc-19nk7rm-0"})([""]),P=({data:e})=>{const[s,t,i]=[Number.parseInt((e==null?void 0:e.current_att1)??"0"),Number.parseInt((e==null?void 0:e.current_att2)??"0"),Number.parseInt((e==null?void 0:e.current_att_mid)??"0")],c=Number.parseInt((e==null?void 0:e.last_semestr_balls)??"0");return r.jsxs(z,{children:[r.jsx(j,{size:4,align:"left",bottomGap:!0,children:"Результат аттестации за текущий семестр"}),r.jsxs(b,{type:"failure",visible:(e==null?void 0:e.arrear_result)==="не зачтено",title:"Внимание",icon:null,children:["Перенос баллов с прошлого семестра: ",c,". Для закрытия задолженности необходимо в этом семестре набрать дополнительно ",e==null?void 0:e.arrear," баллов."]}),r.jsx(l,{title:"Первая аттестация",score:s,color:"var(--text)"}),r.jsx(l,{title:"Вторая аттестация",score:t,color:"var(--text)"}),r.jsx(l,{title:"Промежуточная аттестация",score:i,color:"var(--text)"})]})},N=n.div.withConfig({componentId:"sc-4hfwok-0"})([""]),T=({data:e})=>r.jsxs(N,{children:[r.jsx(j,{size:4,align:"left",bottomGap:!0,children:"Результат аттестации за прошлый семестр"}),r.jsx(l,{title:"Набрано баллов",score:Number.parseInt((e==null?void 0:e.last_semestr_balls)??"0"),scoreText:(e==null?void 0:e.last_semestr_result)??""})]}),F=n.div.withConfig({componentId:"sc-1drw3nr-0"})(["max-width:400px;line-height:1.6rem;"]),G=({data:e})=>{const s=e==null?void 0:e.project_info.split(" ");return r.jsx(F,{children:s==null?void 0:s.map(t=>M(t)?r.jsx("a",{href:t,children:_(t,30)}):t+" ")})},L=({data:e})=>{const s=Number.parseInt((e==null?void 0:e.arrear_balls)??"0"),t=Number.parseInt((e==null?void 0:e.current_semestr_balls)??"0");return r.jsxs("div",{children:[r.jsx(j,{size:4,align:"left",bottomGap:!0,children:"Итог"}),(e==null?void 0:e.arrear)!=="0"&&r.jsx(l,{title:"Баллы в счет погашения долга ",score:s,scoreText:(e==null?void 0:e.arrear_result)??"",color:(e==null?void 0:e.arrear_result)==="зачтено"?"var(--green)":"var(--red)"}),r.jsx(l,{title:"За текущий семестр баллов ",score:t,scoreText:(e==null?void 0:e.current_semestr_result)??""})]})},B=()=>r.jsxs("p",{children:[r.jsx("br",{}),"Стартовала регистрация на проекты 2024/25 года обучения! График:",r.jsx("br",{}),"28.06 – публикация витрины проектов;",r.jsx("br",{}),"01.07…05.07 – собеседование на приоритетные проекты;",r.jsx("br",{}),"08.07…12.07 – запись на все проекты.",r.jsx("br",{}),r.jsx("br",{}),r.jsx(o,{children:"1. Знакомство с проектами"}),r.jsx("br",{}),"С 12:00 28.06 открыты:",r.jsx("br",{}),"– наш основной"," ",r.jsx("a",{href:"http://projects.mospolytech.ru",target:"_blank",rel:"noreferrer",children:"сайт-витрина"}),";",r.jsx("br",{}),"– вспомогательный"," ",r.jsx("a",{href:"https://t.me/+EFpB2aSMFbk5YzYy",target:"_blank",rel:"noreferrer",children:"ТГ-канал-витрина"}),";",r.jsx("br",{}),"–"," ",r.jsx("a",{href:"https://t.me/cpd_projects",target:"_blank",rel:"noreferrer",children:"ТГ-канал для общения"})," ","с инициаторами проектов и потенциальными участниками.",r.jsx("br",{}),r.jsx("br",{}),r.jsx(o,{children:"2. Ответственность за выбор"}),r.jsx("br",{}),"Внимательно посмотрите описания и видеовизитки проектов. Сделайте осознанный выбор! Именно выбранный проект Вы будете реализовывать весь следующий учебный год. Изменить этот выбор будет нельзя!",r.jsx("br",{}),r.jsx("br",{}),r.jsx(o,{children:"3. Регистрация на проекты"}),r.jsx("br",{}),"Регистрация доступна только в"," ",r.jsx("a",{href:"https://e.mospolytech.ru/old/index.php?p=projects",target:"_blank",rel:"noreferrer",children:"старой версии ЛК"})," ","в разделе «Проектная деятельность».",r.jsx("br",{}),"Запись будет проходить пофакультетно, с 9:30 до 18:30:",r.jsx("br",{}),"пн, 08.07: транспортный факультет;",r.jsx("br",{}),"вт, 09.07: факультет машиностроения;",r.jsx("br",{}),"ср, 10.07: факультет информационных технологий;",r.jsx("br",{}),"чт, 11.07: факультет урбанистики и городского хозяйства + полиграфический институт + факультет химической технологии и биотехнологии;",r.jsx("br",{}),"пт, 12.07: факультет экономики и управления + институт графики и искусства книги + институт издательского дела и журналистики.",r.jsx("br",{}),r.jsx("br",{}),r.jsx(o,{children:"4. Приоритетные проекты"}),r.jsx("br",{}),"Приоритетные проекты отличаются высокой степенью участия индустриальных партнёров, что повышает шансы на прохождение производственной практики, стажировку и трудоустройство.",r.jsx("br",{})," К приоритетным относятся все проекты тематик «Стратегические» и «Научные», а также 37 проектов приоритетных направлений развития университета: электромобилестроение, технологии сенсорики, програмное обеспечение технических систем, интеллектуальные системы управления, высокоавтоматизированное машиностроение. Запись на эти 37 проектов будет осуществляться только после анкетирования."," ",r.jsx("a",{href:"https://forms.gle/j3fuYf5rzDi4Q9cU6",target:"_blank",rel:"noreferrer",children:"Форма для анкетирования"})," ","будет разблокирована с 01.07 по 05.07. Результат будет выслан на электронную почту, которую Вы укажете при анкетировании. Приоритет будет у студентов с рейтингом «две звезды».",r.jsx("br",{}),r.jsx("br",{}),r.jsx(o,{children:"Желаем удачи!"})]}),D=()=>r.jsx(b,{lineHeight:"1.5rem",fontSize:"0.86rem",type:"info",title:r.jsx(o,{children:"Уважаемые студенты!"}),children:r.jsx(B,{})}),x=g(({forwardedRef:e,children:s})=>r.jsx("div",{ref:e,children:s})),A=n.div.withConfig({componentId:"sc-1cht09s-0"})(["width:100%;height:","vh;transition:height 0.2s ease-out;"],({height:e})=>e),H=()=>{const{data:e,loading:s,error:t}=u.selectors.useData(),[i]=d([I.currentModule]),{open:c}=k(),f=()=>{c(r.jsx(G,{data:e}),"Информация")};return r.jsx(y,{load:()=>u.effects.getFx("1"),loading:s||!1,error:t||null,data:e,children:r.jsx(q,{children:r.jsxs(w,{children:[r.jsx(D,{}),r.jsxs(R,{tutorialModule:{id:"stud-project-activity",step:0,params:{position:"top"}},children:[r.jsxs(x,{tutorialModule:{id:"stud-project-activity",step:1,params:{position:"top"}},children:[r.jsx(m,{fontSize:"0.85rem",children:"Вам назначен проект"}),r.jsx(j,{size:3,align:"left",bottomGap:!0,children:(e==null?void 0:e.project)??"-"}),r.jsxs(m,{children:["Тематика проекта: ",(e==null?void 0:e.project_theme)??"-",r.jsx("br",{}),"Подпроект: ",e!=null&&e.subproject.length?e==null?void 0:e.subproject:"-",r.jsx("br",{}),"Куратор: ",(e==null?void 0:e.curator.length)===0?"-":e==null?void 0:e.curator]}),r.jsx(S,{icon:r.jsx(v,{}),onClick:f,text:"Подробнее",background:"transparent",padding:"12px 0 0 0",height:"30px"})]}),r.jsx(p,{width:"100%",margin:"16px 0"}),r.jsx(x,{tutorialModule:{id:"stud-project-activity",step:2,params:{position:"top"}},children:r.jsx(P,{data:e})}),(e==null?void 0:e.last_semestr_result)!=="Данные отсутствуют"&&r.jsxs(r.Fragment,{children:[r.jsx(p,{width:"100%",margin:"16px 0"}),r.jsx(x,{tutorialModule:{id:"stud-project-activity",step:3,params:{position:"top"}},children:r.jsx(T,{data:e})})]}),r.jsx(p,{width:"100%",margin:"16px 0"}),r.jsx(x,{tutorialModule:{id:"stud-project-activity",step:(e==null?void 0:e.last_semestr_result)!=="Данные отсутствуют"?4:3,params:{position:"top"}},children:r.jsx(L,{data:e})})]}),r.jsx(A,{height:i!=null&&i.completed?0:10})]})})})},q=n.div.withConfig({componentId:"sc-1kqiekm-0"})(["h3{background:",";background:linear-gradient(to right,"," 0%,"," 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}@media (max-width:1000px){padding:0px;}"],h.blue.main,h.blue.main,h.pink.main),E=n.div.withConfig({componentId:"sc-1kqiekm-1"})(["width:100%;"]),R=g(({forwardedRef:e,children:s})=>r.jsx(E,{ref:e,children:s}));export{H as default};
