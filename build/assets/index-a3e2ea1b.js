import{j as l}from"./vendor-b80865ba.js";import{bg as n,bU as s}from"./index-5813d93c.js";import{T as d}from"./index-b8f2015c.js";const h=()=>{const{data:{schedule:t,externalSchedule:a,view:o},loading:r}=n.useSchedule(),e=r?s.schedule:a??t??s.schedule;return l.jsx(d,{events:e.session.data,startDate:e.session.startDate,endDate:e.session.endDate,view:o,showDates:!1})};export{h as SessionSchedule,h as default};
