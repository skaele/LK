import{j as o}from"./vendor-48260ac4.js";import{bT as l,cu as t}from"./index-a313ebce.js";import{T as c}from"./index-4d8ce4a7.js";const h=()=>{const{data:{schedule:s,externalSchedule:r,view:a},loading:u}=l.useSchedule(),e=u?t.schedule:r??s??t.schedule;return o.jsx(c,{showDates:!0,events:e.week,view:a,startDate:e.semestr.startDate,endDate:e.semestr.endDate})};export{h as default};
