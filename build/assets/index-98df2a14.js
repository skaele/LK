import{j as d}from"./vendor-91dd51cf.js";import{bZ as c,cA as a}from"./index-2caaee2c.js";import{T as i}from"./index-95b43903.js";const h=()=>{var t;const{data:{schedule:o,externalSchedule:s,view:r},loading:n}=c.useSchedule(),e=n?a.schedule:(t=s!=null?s:o)!=null?t:a.schedule;return d.jsx(i,{events:e.session.data,startDate:e.session.startDate,endDate:e.session.endDate,view:r,showDates:!1})};export{h as SessionSchedule,h as default};
