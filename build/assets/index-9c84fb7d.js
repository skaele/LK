import{j as u}from"./vendor-b80865ba.js";import{bg as l,bU as t}from"./index-5813d93c.js";import{T as d}from"./index-b8f2015c.js";const h=()=>{const{data:{schedule:s,externalSchedule:r,view:a},loading:o}=l.useSchedule(),e=o?t.schedule:r??s??t.schedule;return u.jsx(d,{showDates:!0,events:e.week,view:a,startDate:e.semestr.startDate,endDate:e.semestr.endDate})};export{h as default};
