import{y as we,z as W,$ as Re,f as M,a as c,p as Fe,g as Ce,B as Te,l as J,x as X}from"./index-c25f9d36.js";import{d as Ve,u as a,bS as D,bV as be,x as s,y as l,p as i,bO as q,bR as Ie,bQ as Ne,m as U,r as K,X as qe,bW as _e,bX as Me,j as N}from"./vendor-4af360a6.js";const Ue="https://api.mospolytech.ru/physedjournal/graphql/",$=Ve.create({baseURL:Ue}),je={headers:{"Content-Type":"application/json"}};$.interceptors.request.use(we);$.interceptors.response.use(async e=>{var t,o,n,r;return((r=(n=(o=(t=e==null?void 0:e.data)==null?void 0:t.errors)==null?void 0:o[0])==null?void 0:n.extensions)==null?void 0:r.code)==="AUTH_NOT_AUTHENTICATED"?await W($)(e):e},W($));const d=async e=>{var o;const t=await $.post("",{query:e},je);if(te(t.data))throw new Error("Request error");return(o=t==null?void 0:t.data)==null?void 0:o.data};function te(e){if(typeof e=="object"&&e){if(e.hasOwnProperty("errors")&&e.errors)return!0;for(const t in e)if(te(e[t]))return!0}return!1}const Oe=e=>`query {
        teacher(guid: "${e}") {
          permissions
          fullName
        }
      }`,se=a(),j=D({effect:async({currentUser:e})=>({...(await d(Oe((e==null?void 0:e.guid)??""))).teacher,id:(e==null?void 0:e.guid)??""}),source:Re}),Ge=be(j,null);s({clock:se,target:j});const ze=j.pending,St={load:se},Pt={peTeacher:Ge,isLoading:ze};var He=(e=>(e.AdminAccess="AdminAccess",e.DefaultAccess="DefaultAccess",e.OnlineCourseAccess="OnlineCourseAccess",e.SecretaryAccess="SecretaryAccess",e.SuperUser="SuperUser",e))(He||{}),Le=(e=>(e.AdminAccess="ADMIN_ACCESS",e.DefaultAccess="DEFAULT_ACCESS",e.OnlineCourseAccess="ONLINE_COURSE_ACCESS",e.SecretaryAccess="SECRETARY_ACCESS",e.SuperUser="SUPER_USER",e))(Le||{});const Be=({studentGuid:e,date:t})=>`mutation IncreaseStudentVisits {
    increaseStudentVisits(input: { studentGuid: "${e}", date: "${t}" }) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }  
`,Qe=e=>`mutation RemoveStudentVisits {
  deleteStudentVisit(input: { historyId: ${e} }) {
    success
    errors {
      ... on Error {
        message
      }
    }
  }
}`,oe=a(),ne=a(),f=l(async e=>(await d(Be(e)),e)),y=l(async({id:e})=>(await d(Qe(e)),e)),We=y.pending,Je=f.pending;s({clock:oe,target:f});s({clock:f.doneData,target:M.close});s({clock:f.failData,fn:()=>({message:"Не удалось добавить посещение",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:f.doneData,fn:()=>({message:"Посещение добавлено",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:ne,target:y});s({clock:y.doneData,fn:()=>({message:"Посещение удалено",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:y.failData,fn:()=>({message:"Не удалось удалить посещение",type:"failure",time:3e3}),target:c.evokePopUpMessage});const Xe={addVisit:oe,removeVisit:ne},x={addVisitFx:f,removeVisitFx:y},Ke={pendingRemoveVisit:We,pendingAddVisit:Je},ae=a(),Ye=i("").on(ae,(e,t)=>t),Ze={update:ae},et={$search:Ye},re=a(),O=a(),ie=i({}).on(et.$search,(e,t)=>({...e,fullName:{value:t}})).on(re,(e,{name:t,value:o,strict:n})=>{const r={...e};return o?{...r,[t]:{value:o,strict:n}}:(delete r[t],r)});s({clock:O,target:ie.reinit});s({clock:O,fn:()=>"",target:Ze.update});const k={$filters:ie},Et={addFilter:re,resetFilters:O},ce=a(),tt=i(!1).on(ce,(e,t)=>t),At={$isExam:tt},ht={setIsExam:ce};function de(e){var{source:t,timeout:o,target:n}=e;if(!q.unit(t))throw new TypeError("source must be unit from effector");if(q.domain(t,{sid:"k76nst"}))throw new TypeError("source cannot be domain");var r=st(o),g=a({name:"saveTimeoutId",sid:"vsg63k"}),p=i(null,{and:{serialize:"ignore"},name:"$timeoutId",sid:"lhz3ie"}).on(g,(m,u)=>u),L=a({name:"saveReject",sid:"qddkx3"}),B=i(null,{and:{serialize:"ignore"},name:"$rejecter",sid:"-o8m8p2"}).on(L,(m,u)=>u),b=n??a({name:"tick",sid:"a51tok"}),Ee=l(m=>{var{timeout:u,timeoutId:A,rejectPromise:h}=m;return A&&clearTimeout(A),h&&h(),new Promise((xe,De)=>{L(De),g(setTimeout(xe,u))})},{name:"timerBaseFx",sid:"-6dos97"}),v=D({and:{source:{timeoutId:p,rejectPromise:B},mapParams:(m,u)=>{var{timeoutId:A,rejectPromise:h}=u;return{timeout:m,timeoutId:A,rejectPromise:h}},effect:Ee},or:{name:"timerFx",sid:"ca9mop"}});B.reset(v.done),p.reset(v.done);var Ae=i([],{and:{serialize:"ignore"},name:"$payload",sid:"jthvlw"}).on(t,(m,u)=>[u]),Q=i(!0,{and:{serialize:"ignore"},name:"$canTick",sid:"-rehy9s"}),I=a({name:"triggerTick",sid:"31ed0l"});Q.on(I,()=>!1).on([b,r,v],()=>!0);var he=Ie([t,r],{name:"requestTick",sid:"7xoh8q"});return Ne({and:[{clock:he,filter:Q,target:I}],or:{sid:"-1mcdjn"}}),s({and:[{source:r,clock:I,target:v}],or:{sid:"-1j1lzh"}}),s({and:[{source:Ae,clock:v.done,fn:m=>{var[u]=m;return u},target:b}],or:{sid:"-1475yq"}}),b}function st(e){if(q.store(e,{sid:"-mlqvq"}))return e;if(typeof e=="number"){if(e<0||!Number.isFinite(e))throw new Error('timeout must be positive number or zero. Received: "'.concat(e,'"'));return i(e,{and:{name:"$timeout"},sid:"-6oihcx"})}throw new TypeError('timeout parameter in interval method should be number or Store. "'.concat(typeof e,'" was passed'))}const ue=e=>{const t=[];for(const[o,{value:n,strict:r}]of Object.entries(e))if(o.includes(".")){const[g,p]=o.split(".");typeof n=="number"?t.push({[g]:{[p]:{eq:n}}}):t.push({[g]:{[p]:{[r?"eq":"contains"]:`${n}`}}})}else typeof n=="number"?t.push({[o]:{eq:n}}):t.push({[o]:{contains:`${n}`}});return{and:t}},w=(e,t=[])=>{let o=JSON.stringify(e);return t.forEach(n=>{const r=new RegExp(`"${String(n)}":"([^"]+)"`,"g");o=o.replace(r,`${String(n)}: $1`)}),o.replace(/"([^"]+)":/g,"$1:")},Y=40,ot=(e,t=null)=>{const o=w(t,["course"]);return`query {
      students (take:${Y}, skip: ${Y*e}, where: ${o}, order: [{fullName:ASC}]){
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
            course
            department
            pointsHistory(where: {workType: {eq: ONLINE_WORK}}) {
              points
            }
        }
        totalCount
      }
    }`},nt=e=>`{
    student(guid: "${e}") {
        fullName
        groupNumber
        studentGuid
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
}`,at=(e=null)=>`{
      students(where: ${w(e,["course"])}) {
        totalCount
      }
    }`,R=a(),le=a(),G=i(0).on(le,(e,t)=>t).on(k.$filters,()=>0),z=D({source:{page:G,filters:k.$filters},effect:async({filters:e,page:t})=>{const{students:o}=await d(ot(t,ue(e)));return o}});de({source:U(G,k.$filters),timeout:200,target:R});const F=D({source:{filters:k.$filters},effect:async({filters:e})=>{const{students:t}=await d(at(ue(e)));return t.totalCount}});de({source:k.$filters,timeout:200,target:F});s({clock:R,target:z});s({clock:R,target:F});const _=i([]).on(z.doneData,(e,t)=>t.items),rt=i(0).on(F.doneData,(e,t)=>t),it=U(F.pending,z.pending,Boolean);s({clock:x.addVisitFx.doneData,source:_,filter:(e,{studentGuid:t})=>e.some(o=>o.studentGuid===t),fn:(e,t)=>{const o=JSON.parse(JSON.stringify(e)),n=o.find(r=>r.studentGuid===t.studentGuid);return++n.visits,o},target:_});const xt={load:R,setPage:le},Dt={$loading:it,$pEStudents:_,$pEStudentsPage:G,$pEStudentsTotalCount:rt},ct=e=>`mutation addPointsToStudent{
        addPointsToStudent(
          input: ${w(e,["workType"])}
        ) {
          success
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,dt=e=>`mutation removePointsFromStudent {
      deletePoints(input: {historyId : ${e}}) {
        success
        errors {
          ... on Error {
            message
          }
        }
          
      }
    }`,ge=a(),me=a(),S=l(async({id:e})=>{await d(dt(e))});s({clock:me,target:S});const ut=S.pending,P=l(async e=>(await d(ct(e)),e));s({clock:ge,target:P});s({clock:P.doneData,target:M.close});s({clock:P.doneData,fn:()=>({message:"Не удалось добавить баллы",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:P.failData,fn:()=>({message:"Не удалось добавить баллы",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:S.doneData,fn:()=>({message:"Баллы удалены",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:S.failData,fn:()=>({message:"Не удалось удалить баллы",type:"failure",time:3e3}),target:c.evokePopUpMessage});const wt={addAdditionPoints:ge,removeAdditionPoints:me},Z={addAdditionPointsFx:P,removeAdditionPointsFx:S},Rt={pendingRemoveAdditionPoints:ut},lt=e=>`mutation addRegulationPointsToStudent{
        addPointsForStandardToStudent(
          input: ${w(e,["standardType"])}
        ) {
          success
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,gt=e=>`mutation RemoveStudentRegulationPoints {
      deleteStandardPoints(input: { historyId: ${e} }) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,pe=a(),fe=a(),E=l(async({id:e})=>{await d(gt(e))});s({clock:fe,target:E});const mt=E.pending,C=l(async e=>(await d(lt(e)),e));s({clock:pe,target:C});s({clock:C.doneData,target:M.close});s({clock:C.failData,fn:()=>({message:"Не удалось добавить норматив",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:E.doneData,fn:()=>({message:"Норматив удален",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:E.failData,fn:()=>({message:"Не удалось удалить норматив",type:"failure"}),target:c.evokePopUpMessage});const Ft={addRegulationPoints:pe,removeRegulationPoints:fe},ee={addRegulationPointsFx:C,removeRegulationPointsFx:E},Ct={pendingRemoveRegulationPoints:mt},ve=a(),$e=a(),ye=a(),T=l(async e=>{const{student:t}=await d(nt(e));return t});s({clock:ve,target:T});const H=i(null).reset($e),pt=U(x.addVisitFx.pending,T.pending,Boolean);s({clock:[x.addVisitFx.doneData,x.removeVisitFx.doneData,Z.addAdditionPointsFx.doneData,Z.removeAdditionPointsFx.doneData,ee.addRegulationPointsFx.doneData,ee.removeRegulationPointsFx.doneData],target:ye});s({clock:ye,source:H,filter:e=>!!e,fn:e=>e.studentGuid,target:T});s({clock:T.doneData,target:H});const Tt={$selectedStudent:H,$loading:pt},Vt={setCurrentStudentId:ve,resetStudentId:$e},ft=()=>`query loadComp {
        competitions
      }`,vt=e=>`mutation removeComp {
      deleteCompetition(input: { competitionName: "${e}" }) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,ke=a(),Se=a(),Pe=l(async()=>{const{competitions:e}=await d(ft());return e}),V=l(async e=>(await d(vt(e)),e));s({clock:Se,target:V});s({clock:V.failData,fn:()=>({message:"Не удалось удалить соревнование",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:V.doneData,fn:()=>({message:"Соревнование удалено",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:ke,target:Pe});const $t=i([]).on(Pe.doneData,(e,t)=>t).on(V.doneData,(e,t)=>e.filter(o=>o!==t)),bt={load:ke,remove:Se},It={$competitions:$t},Nt=({group:e,visits:t,additionalPoints:o,pointsForStandards:n})=>Math.round(e.visitValue*t+o+n),qt=({studentGuid:e})=>{const[t,o]=K.useState(new Date().toISOString()),[n]=qe([Ke.pendingAddVisit]),r=new Date(t),g=_e(r,{start:Me(new Date,1),end:new Date})&&r.getDay()!==0&&r.getDay()!==1;K.useEffect(()=>{o(new Date().toISOString())},[e]);const p=()=>{Xe.addVisit({studentGuid:e,date:J(t,"numeric")})};return N.jsxs(Fe,{gap:"4px",ai:"flex-start",children:[N.jsx(Ce,{alertMessage:g?"":"Не допустимая дата",type:"date",setValue:o,value:t,hideCross:!0}),N.jsx(Te,{isActive:g&&!n,text:`Добавить посещение ${J(t,"numeric")}`,onClick:p,width:"100%",background:X.blue.main,textColor:X.white.main})]})};export{qt as A,Le as P,Y as S,k as a,At as b,Et as c,de as d,bt as e,ht as f,xt as g,St as h,Nt as i,w as j,Dt as k,et as l,Ze as m,He as n,Pt as o,d as p,Xe as q,Ke as r,It as s,Tt as t,wt as u,Rt as v,Ft as w,Ct as x,Vt as y};
