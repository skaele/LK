import{j as u}from"./vendor-fa46c825.js";import{bx as l,c9 as t}from"./index-36ffbe5e.js";import{T as c}from"./index-35540a6b.js";const h=()=>{const{data:{schedule:s,externalSchedule:r,view:a},loading:o}=l.useSchedule(),e=o?t.schedule:r??s??t.schedule;return u.jsx(c,{showDates:!0,events:e.week,view:a,startDate:e.semestr.startDate,endDate:e.semestr.endDate})};export{h as default};
