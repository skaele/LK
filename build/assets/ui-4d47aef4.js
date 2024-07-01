import{p as i,e as u,x as s,h as l,v as T,m as z,cK as J,J as R,r as I,q as le,cO as me,cP as ge,j as F}from"./vendor-905eebdf.js";import{p as r,m as V,d,R as pe,E as fe,n as ve,o as ke,l as N,J as _}from"./index-7f9bd56f.js";const Se=({studentGuid:e,date:t})=>`mutation IncreaseStudentVisits {
    increaseStudentVisits(input: { studentGuid: "${e}", date: "${t}" }) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }  
`,$e=e=>`mutation RemoveStudentVisits {
  deleteStudentVisit(input: { historyId: ${e} }) {
    success
    errors {
      ... on Error {
        message
      }
    }
  }
}`,H=i({name:"addVisit",sid:"3ybve7"}),Q=i({name:"removeVisit",sid:"w1vlkj"}),m=u(async e=>(await r(Se(e)),e),{name:"addVisitFx",sid:"-lbpib"}),g=u(async({id:e})=>(await r($e(e)),e),{name:"removeVisitFx",sid:"-wpy18p"}),ye=g.pending,Pe=m.pending;s({and:[{clock:H,target:m}],or:{sid:"-tzueuh"}});s({and:[{clock:m.doneData,target:V.close}],or:{sid:"-txn8h1"}});s({and:[{clock:m.failData,fn:()=>({message:"Не удалось добавить посещение",type:"failure",time:3e3}),target:d.evokePopUpMessage}],or:{sid:"-tvg23l"}});s({and:[{clock:m.doneData,fn:()=>({message:"Посещение добавлено",type:"success",time:3e3}),target:d.evokePopUpMessage}],or:{sid:"-tey8ar"}});s({and:[{clock:Q,target:g}],or:{sid:"-sygehx"}});s({and:[{clock:g.doneData,fn:()=>({message:"Посещение удалено",type:"success",time:3e3}),target:d.evokePopUpMessage}],or:{sid:"-skpjnw"}});s({and:[{clock:g.failData,fn:()=>({message:"Не удалось удалить посещение",type:"failure",time:3e3}),target:d.evokePopUpMessage}],or:{sid:"-sfrebn"}});const xe={addVisit:H,removeVisit:Q},y={addVisitFx:m,removeVisitFx:g},Ae={pendingRemoveVisit:ye,pendingAddVisit:Pe},B=i({name:"update",sid:"-tu363b"}),De=l("",{name:"$search",sid:"gw0gkq"}).on(B,(e,t)=>t),Ee={update:B},he={$search:De},L=i({name:"addFilter",sid:"3pahp2"}),C=i({name:"resetFilters",sid:"sk6sju"}),W=l({},{name:"$filters",sid:"im200n"}).on(he.$search,(e,t)=>({...e,fullName:{value:t}})).on(L,(e,{name:t,value:n,strict:o})=>{const a={...e};return n?{...a,[t]:{value:n,strict:o}}:(delete a[t],a)});s({and:[{clock:C,target:W.reinit}],or:{sid:"-drxh28"}});s({and:[{clock:C,fn:()=>"",target:Ee.update}],or:{sid:"-dpqaos"}});const p={$filters:W},Be={addFilter:L,resetFilters:C},K=i({name:"setIsExam",sid:"shha4n"}),Fe=l(!1,{name:"$isExam",sid:"4al1my"}).on(K,(e,t)=>t),Le={$isExam:Fe},We={setIsExam:K},Y=e=>{const t=[];for(const[n,{value:o,strict:a}]of Object.entries(e))if(n.includes(".")){const[c,S]=n.split(".");typeof o=="number"?t.push({[c]:{[S]:{eq:o}}}):t.push({[c]:{[S]:{[a?"eq":"contains"]:`${o}`}}})}else typeof o=="number"?t.push({[n]:{eq:o}}):t.push({[n]:{contains:`${o}`}});return{and:t}},P=(e,t=[])=>{let n=JSON.stringify(e);return t.forEach(o=>{const a=new RegExp(`"${String(o)}":"([^"]+)"`,"g");n=n.replace(a,`${String(o)}: $1`)}),n.replace(/"([^"]+)":/g,"$1:")},we=60,Re=(e,t=null,n=we)=>{const o={...t,isActive:{eq:!0}},a=P(o,["course"]);return`query { students (take:${n}, skip: ${n*e}, where: ${a}, order: [{fullName:ASC}]){
      items {
          fullName
          groupNumber
          studentGuid
          visits
          additionalPoints
          pointsForStandards
          group {
              visitValue
          }
          hasDebtFromPreviousSemester
          archivedVisitValue
          course
          department
          pointsHistory(where: {workType: {eq: ONLINE_WORK}}) {
            points
          }
      }
      totalCount
    }
  }`},Ve=e=>`{
    student(guid: "${e}") {
        fullName
        groupNumber
        studentGuid
        hasDebtFromPreviousSemester
        archivedVisitValue
        visits
        additionalPoints
        pointsForStandards
        course
        department
        standardsHistory {
          id
          points
          standardType
          date
          comment
          teacherGuid
          teacher {
            fullName
          }
        }
        group {
          visitValue
        }
        visitsHistory {
          id
          date
          teacherGuid
          teacher {
            fullName
          }
        }
        pointsHistory{
          id
          workType
          comment
          date
          points
          teacherGuid
          teacher{
            fullName
          }
        }
      }
}`,Ce=(e=null)=>{const t={...e,isActive:{eq:!0}};return`{
    students(where: ${P(t,["course"])}) {
      totalCount
    }
  }`},x=i({name:"load",sid:"-hr257w"}),Z=i({name:"setPage",sid:"34a6f9"}),b=l(0,{name:"$pEStudentsPage",sid:"9d5rx"}).on(Z,(e,t)=>t).on(p.$filters,()=>0),q=T({and:{source:{page:b,filters:p.$filters},effect:async({filters:e,page:t})=>{const{students:n}=await r(Re(t,Y(e)));return n}},or:{name:"loadPageFx",sid:"ckru1p"}});z({sid:"-mk8m28",fn:()=>J({source:R({and:[b,p.$filters],or:{name:"source",sid:"-mg50tn"}}),timeout:200,target:x}),name:"none",method:"debounce"});const A=T({and:{source:{filters:p.$filters},effect:async({filters:e})=>{const{students:t}=await r(Ce(Y(e)));return t.totalCount}},or:{name:"loadTotalCount",sid:"-fapsmo"}});z({sid:"-ln8ygk",fn:()=>J({source:p.$filters,timeout:200,target:A}),name:"none",method:"debounce"});s({and:[{clock:x,target:q}],or:{sid:"-lkhzhr"}});s({and:[{clock:x,target:A}],or:{sid:"-l6r4nq"}});const w=l([],{name:"$pEStudents",sid:"l1hwa7"}).on(q.doneData,(e,t)=>t.items),be=l(0,{name:"$pEStudentsTotalCount",sid:"dj5j8a"}).on(A.doneData,(e,t)=>t),qe=R({and:[A.pending,q.pending,Boolean],or:{name:"$loading",sid:"-11z05w"}});s({and:[{clock:y.addVisitFx.doneData,source:w,filter:(e,{studentGuid:t})=>e.some(n=>n.studentGuid===t),fn:(e,t)=>{const n=JSON.parse(JSON.stringify(e)),o=n.find(a=>a.studentGuid===t.studentGuid);return++o.visits,n},target:w}],or:{sid:"-krcw1m"}});const Ke={load:x,setPage:Z},Ye={$loading:qe,$pEStudents:w,$pEStudentsPage:b,$pEStudentsTotalCount:be},Ue=e=>`mutation addPointsToStudent{
        addPointsToStudent(
          input: ${P(e,["workType"])}
        ) {
          success
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,je=e=>`mutation removePointsFromStudent {
      deletePoints(input: {historyId : ${e}}) {
        success
        errors {
          ... on Error {
            message
          }
        }
          
      }
    }`,X=i({name:"addAdditionPoints",sid:"-gfwajq"}),ee=i({name:"removeAdditionPoints",sid:"s7fafn"}),f=u(async({id:e})=>{await r(je(e))},{name:"removeAdditionPointsFx",sid:"-yz8fw7"});s({and:[{clock:ee,target:f}],or:{sid:"-8u8zpu"}});const Me=f.pending,v=u(async e=>(await r(Ue(e)),e),{name:"addAdditionPointsFx",sid:"htakn7"});s({and:[{clock:X,target:v}],or:{sid:"-8dr5x0"}});s({and:[{clock:v.doneData,target:V.close}],or:{sid:"-8bjzjk"}});s({and:[{clock:v.doneData,fn:()=>({message:"Не удалось добавить баллы",type:"success",time:3e3}),target:d.evokePopUpMessage}],or:{sid:"-7xt4pj"}});s({and:[{clock:v.failData,fn:()=>({message:"Не удалось добавить баллы",type:"failure",time:3e3}),target:d.evokePopUpMessage}],or:{sid:"-7suzda"}});s({and:[{clock:f.doneData,fn:()=>({message:"Баллы удалены",type:"success",time:3e3}),target:d.evokePopUpMessage}],or:{sid:"-7cd5kg"}});s({and:[{clock:f.failData,fn:()=>({message:"Не удалось удалить баллы",type:"failure",time:3e3}),target:d.evokePopUpMessage}],or:{sid:"-6vvbrm"}});const Ze={addAdditionPoints:X,removeAdditionPoints:ee},O={addAdditionPointsFx:v,removeAdditionPointsFx:f},Xe={pendingRemoveAdditionPoints:Me},Ie=e=>`mutation addRegulationPointsToStudent{
        addPointsForStandardToStudent(
          input: ${P(e,["standardType"])}
        ) {
          success
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,Ne=e=>`mutation RemoveStudentRegulationPoints {
      deleteStandardPoints(input: { historyId: ${e} }) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,te=i({name:"addRegulationPoints",sid:"r944lm"}),se=i({name:"removeRegulationPoints",sid:"2sncem"}),k=u(async({id:e})=>{await r(Ne(e))},{name:"removeRegulationPointsFx",sid:"-krrp8n"});s({and:[{clock:se,target:k}],or:{sid:"mz5r9q"}});const _e=k.pending,D=u(async e=>(await r(Ie(e)),e),{name:"addRegulationPointsFx",sid:"-dsdequ"});s({and:[{clock:te,target:D}],or:{sid:"nfnl2k"}});s({and:[{clock:D.doneData,target:V.close}],or:{sid:"nhurg0"}});s({and:[{clock:D.failData,fn:()=>({message:"Не удалось добавить норматив",type:"failure",time:3e3}),target:d.evokePopUpMessage}],or:{sid:"nvlma1"}});s({and:[{clock:k.doneData,fn:()=>({message:"Норматив удален",type:"success",time:3e3}),target:d.evokePopUpMessage}],or:{sid:"o0jrma"}});s({and:[{clock:k.failData,fn:()=>({message:"Не удалось удалить норматив",type:"failure"}),target:d.evokePopUpMessage}],or:{sid:"oh1lf4"}});const et={addRegulationPoints:te,removeRegulationPoints:se},G={addRegulationPointsFx:D,removeRegulationPointsFx:k},tt={pendingRemoveRegulationPoints:_e},ne=i({name:"setCurrentStudentId",sid:"-yz5pfk"}),oe=i({name:"resetStudentId",sid:"aoi2jw"}),ae=i({name:"reload",sid:"v2kf0a"}),E=u(async e=>{const{student:t}=await r(Ve(e));return t},{name:"loadCurrentStudent",sid:"-iasizc"});s({and:[{clock:ne,target:E}],or:{sid:"-e9v3et"}});const U=l(null,{name:"$selectedStudent",sid:"eyejnb"}).reset(oe),Oe=R({and:[y.addVisitFx.pending,E.pending,Boolean],or:{name:"$loading",sid:"3wlmk7"}});s({and:[{clock:[y.addVisitFx.doneData,y.removeVisitFx.doneData,O.addAdditionPointsFx.doneData,O.removeAdditionPointsFx.doneData,G.addRegulationPointsFx.doneData,G.removeRegulationPointsFx.doneData],target:ae}],or:{sid:"-dv0ne2"}});s({and:[{clock:ae,source:U,filter:e=>!!e,fn:e=>e.studentGuid,target:E}],or:{sid:"-dsth0m"}});s({and:[{clock:E.doneData,target:U}],or:{sid:"-ddf8ei"}});const st={$selectedStudent:U,$loading:Oe},nt={setCurrentStudentId:ne,resetStudentId:oe},Ge=()=>`query loadComp {
        competitions
      }`,Te=e=>`mutation removeComp {
      deleteCompetition(input: { competitionName: "${e}" }) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,ie=i({name:"load",sid:"-1nsq63"}),de=i({name:"remove",sid:"wecpac"}),re=u(async()=>{const{competitions:e}=await r(Ge());return e},{name:"loadFx",sid:"-d34r01"}),h=u(async e=>(await r(Te(e)),e),{name:"removeFx",sid:"y5v9by"});s({and:[{clock:de,target:h}],or:{sid:"q9j9ts"}});s({and:[{clock:h.failData,fn:()=>({message:"Не удалось удалить соревнование",type:"failure",time:3e3}),target:d.evokePopUpMessage}],or:{sid:"qna4nt"}});s({and:[{clock:h.doneData,fn:()=>({message:"Соревнование удалено",type:"success",time:3e3}),target:d.evokePopUpMessage}],or:{sid:"r3rygn"}});s({and:[{clock:ie,target:re}],or:{sid:"r8q3sw"}});const ze=l([],{name:"$competitions",sid:"dxwaax"}).on(re.doneData,(e,t)=>t).on(h.doneData,(e,t)=>e.filter(n=>n!==t)),ot={load:ie,remove:de},at={$competitions:ze},it=({hasDebtFromPreviousSemester:e,archivedVisitValue:t,group:n,visits:o,additionalPoints:a,pointsForStandards:c})=>Math.round(e?t*o+a+c:n.visitValue*o+a+c);var $=(e=>(e.AdminAccess="AdminAccess",e.DefaultAccess="DefaultAccess",e.OnlineCourseAccess="OnlineCourseAccess",e.SecretaryAccess="SecretaryAccess",e.SuperUser="SuperUser",e))($||{}),Je=(e=>(e.AdminAccess="ADMIN_ACCESS",e.DefaultAccess="DEFAULT_ACCESS",e.OnlineCourseAccess="ONLINE_COURSE_ACCESS",e.SecretaryAccess="SECRETARY_ACCESS",e.SuperUser="SUPER_USER",e))(Je||{});const dt=({studentGuid:e})=>{const[t,n]=I.useState(new Date().toISOString()),[o,a]=le([Ae.pendingAddVisit,pe.peTeacher]),c=new Date(t),S=[$.AdminAccess,$.SuperUser,$.SecretaryAccess].some(ue=>{var M;return(M=a==null?void 0:a.permissions)==null?void 0:M.includes(ue)}),j=(me(c,{start:ge(new Date,1),end:new Date})||S)&&c.getDay()!==0&&c.getDay()!==1;I.useEffect(()=>{n(new Date().toISOString())},[e]);const ce=()=>{xe.addVisit({studentGuid:e,date:N(t,"numeric")})};return F.jsxs(fe,{gap:"4px",ai:"flex-start",children:[F.jsx(ve,{alertMessage:j?"":"Не допустимая дата",type:"date",setValue:n,value:t,hideCross:!0}),F.jsx(ke,{isActive:j&&!o,text:`Добавить посещение ${N(t,"numeric")}`,onClick:ce,width:"100%",background:_.blue.main,textColor:_.white.main})]})};export{dt as A,Je as P,we as S,p as a,Le as b,Be as c,We as d,ot as e,Ke as f,it as g,Ye as h,he as i,P as j,Ee as k,Re as l,Y as m,$ as n,Ae as o,xe as p,st as q,Xe as r,at as s,Ze as t,et as u,tt as v,nt as w};
