import{j as l}from"./vendor-905eebdf.js";import{bj as n,bX as s}from"./index-dc093c1d.js";import{T as d}from"./index-8e88068e.js";const h=()=>{const{data:{schedule:t,externalSchedule:a,view:o},loading:r}=n.useSchedule(),e=r?s.schedule:a??t??s.schedule;return l.jsx(d,{events:e.session.data,startDate:e.session.startDate,endDate:e.session.endDate,view:o,showDates:!1})};export{h as SessionSchedule,h as default};
