import{j as n}from"./vendor-3c67dcca.js";import{bz as d,cb as a}from"./index-15ca9195.js";import{T as u}from"./index-52fd0f81.js";const m=()=>{var e;const{data:{schedule:o,externalSchedule:s,view:l},loading:r}=d.useSchedule(),t=r?a.schedule:(e=s!=null?s:o)!==null&&e!==void 0?e:a.schedule;return n.jsx(u,{events:t.session.data,startDate:t.session.startDate,endDate:t.session.endDate,view:l,showDates:!1})};export{m as SessionSchedule,m as default};
