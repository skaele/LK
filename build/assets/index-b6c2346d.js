import{j as c}from"./vendor-48260ac4.js";import{bB as u,cd as t}from"./index-835bf435.js";import{T as n}from"./index-1b5fa334.js";const S=()=>{const{data:{schedule:s,externalSchedule:a,view:r},loading:l}=u.useSchedule(),e=l?t.schedule:a??s??t.schedule,o=e.semestr.startDate,d=e.semestr.endDate;return c.jsx(n,{showDates:!1,events:e.semestr.data,view:r,startDate:o,endDate:d})};export{S as default};
