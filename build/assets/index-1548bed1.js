import{j as l}from"./vendor-0d3de025.js";import{bT as n,cu as s}from"./index-0ac1f95c.js";import{T as d}from"./index-723f2465.js";const h=()=>{const{data:{schedule:t,externalSchedule:a,view:o},loading:r}=n.useSchedule(),e=r?s.schedule:a??t??s.schedule;return l.jsx(d,{events:e.session.data,startDate:e.session.startDate,endDate:e.session.endDate,view:o,showDates:!1})};export{h as SessionSchedule,h as default};
