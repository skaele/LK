import{j as d}from"./vendor-9c916fad.js";import{bA as u,cc as t}from"./index-707d58cb.js";import{T as n}from"./index-e8bbdb12.js";const S=()=>{const{data:{schedule:s,externalSchedule:a,view:r},loading:l}=u.useSchedule(),e=l?t.schedule:a??s??t.schedule,o=e.semestr.startDate,c=e.semestr.endDate;return d.jsx(n,{showDates:!1,events:e.semestr.data,view:r,startDate:o,endDate:c})};export{S as default};
