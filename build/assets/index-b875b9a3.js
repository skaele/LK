import{j as u}from"./vendor-84bdec13.js";import{bj as c,bX as t}from"./index-2258ba16.js";import{T as n}from"./index-90ec81e9.js";const S=()=>{const{data:{schedule:s,externalSchedule:a,view:r},loading:l}=c.useSchedule(),e=l?t.schedule:a??s??t.schedule,o=e.semestr.startDate,d=e.semestr.endDate;return u.jsx(n,{showDates:!1,events:e.semestr.data,view:r,startDate:o,endDate:d})};export{S as default};
