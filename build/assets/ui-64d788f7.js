import{u as a,y as l,x as s,p as i,bR as T,bJ as N,bU as De,bT as Ee,m as M,r as J,Z as xe,bX as Ae,bY as Re,j as I}from"./vendor-f1fdae2f.js";import{f as j,a as c,p as u,r as we,g as Fe,B as he,l as Q,E as L}from"./index-7f2344cd.js";var Ce=(e=>(e.AdminAccess="AdminAccess",e.DefaultAccess="DefaultAccess",e.OnlineCourseAccess="OnlineCourseAccess",e.SecretaryAccess="SecretaryAccess",e.SuperUser="SuperUser",e))(Ce||{}),Ve=(e=>(e.AdminAccess="ADMIN_ACCESS",e.DefaultAccess="DEFAULT_ACCESS",e.OnlineCourseAccess="ONLINE_COURSE_ACCESS",e.SecretaryAccess="SECRETARY_ACCESS",e.SuperUser="SUPER_USER",e))(Ve||{});const be=({studentGuid:e,date:t})=>`mutation IncreaseStudentVisits {
    increaseStudentVisits(input: { studentGuid: "${e}", date: "${t}" }) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }  
`,Ie=e=>`mutation RemoveStudentVisits {
  deleteStudentVisit(input: { historyId: ${e} }) {
    success
    errors {
      ... on Error {
        message
      }
    }
  }
}`,K=a(),X=a(),f=l(async e=>(await u(be(e)),e)),$=l(async({id:e})=>(await u(Ie(e)),e)),Te=$.pending,Ue=f.pending;s({clock:K,target:f});s({clock:f.doneData,target:j.close});s({clock:f.failData,fn:()=>({message:"Не удалось добавить посещение",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:f.doneData,fn:()=>({message:"Посещение добавлено",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:X,target:$});s({clock:$.doneData,fn:()=>({message:"Посещение удалено",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:$.failData,fn:()=>({message:"Не удалось удалить посещение",type:"failure",time:3e3}),target:c.evokePopUpMessage});const Ne={addVisit:K,removeVisit:X},x={addVisitFx:f,removeVisitFx:$},Me={pendingRemoveVisit:Te,pendingAddVisit:Ue},ee=a(),je=i("").on(ee,(e,t)=>t),_e={update:ee},qe={$search:je},te=a(),_=a(),se=i({}).on(qe.$search,(e,t)=>({...e,fullName:{value:t}})).on(te,(e,{name:t,value:n,strict:o})=>{const r={...e};return n?{...r,[t]:{value:n,strict:o}}:(delete r[t],r)});s({clock:_,target:se.reinit});s({clock:_,fn:()=>"",target:_e.update});const k={$filters:se},rt={addFilter:te,resetFilters:_},ne=a(),Oe=i(!1).on(ne,(e,t)=>t),it={$isExam:Oe},ct={setIsExam:ne};function oe(e){var{source:t,timeout:n,target:o}=e;if(!T.unit(t))throw new TypeError("source must be unit from effector");if(T.domain(t,{sid:"k76nst"}))throw new TypeError("source cannot be domain");var r=Ge(n),m=a({name:"saveTimeoutId",sid:"vsg63k"}),p=i(null,{and:{serialize:"ignore"},name:"$timeoutId",sid:"lhz3ie"}).on(m,(g,d)=>d),z=a({name:"saveReject",sid:"qddkx3"}),B=i(null,{and:{serialize:"ignore"},name:"$rejecter",sid:"-o8m8p2"}).on(z,(g,d)=>d),V=o??a({name:"tick",sid:"a51tok"}),$e=l(g=>{var{timeout:d,timeoutId:D,rejectPromise:E}=g;return D&&clearTimeout(D),E&&E(),new Promise((ye,Pe)=>{z(Pe),m(setTimeout(ye,d))})},{name:"timerBaseFx",sid:"-6dos97"}),v=N({and:{source:{timeoutId:p,rejectPromise:B},mapParams:(g,d)=>{var{timeoutId:D,rejectPromise:E}=d;return{timeout:g,timeoutId:D,rejectPromise:E}},effect:$e},or:{name:"timerFx",sid:"ca9mop"}});B.reset(v.done),p.reset(v.done);var ke=i([],{and:{serialize:"ignore"},name:"$payload",sid:"jthvlw"}).on(t,(g,d)=>[d]),H=i(!0,{and:{serialize:"ignore"},name:"$canTick",sid:"-rehy9s"}),b=a({name:"triggerTick",sid:"31ed0l"});H.on(b,()=>!1).on([V,r,v],()=>!0);var Se=De([t,r],{name:"requestTick",sid:"7xoh8q"});return Ee({and:[{clock:Se,filter:H,target:b}],or:{sid:"-1mcdjn"}}),s({and:[{source:r,clock:b,target:v}],or:{sid:"-1j1lzh"}}),s({and:[{source:ke,clock:v.done,fn:g=>{var[d]=g;return d},target:V}],or:{sid:"-1475yq"}}),V}function Ge(e){if(T.store(e,{sid:"-mlqvq"}))return e;if(typeof e=="number"){if(e<0||!Number.isFinite(e))throw new Error('timeout must be positive number or zero. Received: "'.concat(e,'"'));return i(e,{and:{name:"$timeout"},sid:"-6oihcx"})}throw new TypeError('timeout parameter in interval method should be number or Store. "'.concat(typeof e,'" was passed'))}const ae=e=>{const t=[];for(const[n,{value:o,strict:r}]of Object.entries(e))if(n.includes(".")){const[m,p]=n.split(".");typeof o=="number"?t.push({[m]:{[p]:{eq:o}}}):t.push({[m]:{[p]:{[r?"eq":"contains"]:`${o}`}}})}else typeof o=="number"?t.push({[n]:{eq:o}}):t.push({[n]:{contains:`${o}`}});return{and:t}},A=(e,t=[])=>{let n=JSON.stringify(e);return t.forEach(o=>{const r=new RegExp(`"${String(o)}":"([^"]+)"`,"g");n=n.replace(r,`${String(o)}: $1`)}),n.replace(/"([^"]+)":/g,"$1:")},W=40,ze=(e,t=null)=>{const n=A(t,["course"]);return`query {
      students (take:${W}, skip: ${W*e}, where: ${n}, order: [{fullName:ASC}]){
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
    }`},Be=e=>`{
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
}`,He=(e=null)=>`{
      students(where: ${A(e,["course"])}) {
        totalCount
      }
    }`,R=a(),re=a(),q=i(0).on(re,(e,t)=>t).on(k.$filters,()=>0),O=N({source:{page:q,filters:k.$filters},effect:async({filters:e,page:t})=>{const{students:n}=await u(ze(t,ae(e)));return n}});oe({source:M(q,k.$filters),timeout:200,target:R});const w=N({source:{filters:k.$filters},effect:async({filters:e})=>{const{students:t}=await u(He(ae(e)));return t.totalCount}});oe({source:k.$filters,timeout:200,target:w});s({clock:R,target:O});s({clock:R,target:w});const U=i([]).on(O.doneData,(e,t)=>t.items),Je=i(0).on(w.doneData,(e,t)=>t),Qe=M(w.pending,O.pending,Boolean);s({clock:x.addVisitFx.doneData,source:U,filter:(e,{studentGuid:t})=>e.some(n=>n.studentGuid===t),fn:(e,t)=>{const n=JSON.parse(JSON.stringify(e)),o=n.find(r=>r.studentGuid===t.studentGuid);return++o.visits,n},target:U});const dt={load:R,setPage:re},ut={$loading:Qe,$pEStudents:U,$pEStudentsPage:q,$pEStudentsTotalCount:Je},Le=e=>`mutation addPointsToStudent{
        addPointsToStudent(
          input: ${A(e,["workType"])}
        ) {
          success
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,We=e=>`mutation removePointsFromStudent {
      deletePoints(input: {historyId : ${e}}) {
        success
        errors {
          ... on Error {
            message
          }
        }
          
      }
    }`,ie=a(),ce=a(),S=l(async({id:e})=>{await u(We(e))});s({clock:ce,target:S});const Ye=S.pending,y=l(async e=>(await u(Le(e)),e));s({clock:ie,target:y});s({clock:y.doneData,target:j.close});s({clock:y.doneData,fn:()=>({message:"Не удалось добавить баллы",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:y.failData,fn:()=>({message:"Не удалось добавить баллы",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:S.doneData,fn:()=>({message:"Баллы удалены",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:S.failData,fn:()=>({message:"Не удалось удалить баллы",type:"failure",time:3e3}),target:c.evokePopUpMessage});const lt={addAdditionPoints:ie,removeAdditionPoints:ce},Y={addAdditionPointsFx:y,removeAdditionPointsFx:S},mt={pendingRemoveAdditionPoints:Ye},Ze=e=>`mutation addRegulationPointsToStudent{
        addPointsForStandardToStudent(
          input: ${A(e,["standardType"])}
        ) {
          success
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,Ke=e=>`mutation RemoveStudentRegulationPoints {
      deleteStandardPoints(input: { historyId: ${e} }) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,de=a(),ue=a(),P=l(async({id:e})=>{await u(Ke(e))});s({clock:ue,target:P});const Xe=P.pending,F=l(async e=>(await u(Ze(e)),e));s({clock:de,target:F});s({clock:F.doneData,target:j.close});s({clock:F.failData,fn:()=>({message:"Не удалось добавить норматив",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:P.doneData,fn:()=>({message:"Норматив удален",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:P.failData,fn:()=>({message:"Не удалось удалить норматив",type:"failure"}),target:c.evokePopUpMessage});const gt={addRegulationPoints:de,removeRegulationPoints:ue},Z={addRegulationPointsFx:F,removeRegulationPointsFx:P},pt={pendingRemoveRegulationPoints:Xe},le=a(),me=a(),ge=a(),h=l(async e=>{const{student:t}=await u(Be(e));return t});s({clock:le,target:h});const G=i(null).reset(me),et=M(x.addVisitFx.pending,h.pending,Boolean);s({clock:[x.addVisitFx.doneData,x.removeVisitFx.doneData,Y.addAdditionPointsFx.doneData,Y.removeAdditionPointsFx.doneData,Z.addRegulationPointsFx.doneData,Z.removeRegulationPointsFx.doneData],target:ge});s({clock:ge,source:G,filter:e=>!!e,fn:e=>e.studentGuid,target:h});s({clock:h.doneData,target:G});const ft={$selectedStudent:G,$loading:et},vt={setCurrentStudentId:le,resetStudentId:me},tt=()=>`query loadComp {
        competitions
      }`,st=e=>`mutation removeComp {
      deleteCompetition(input: { competitionName: "${e}" }) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,pe=a(),fe=a(),ve=l(async()=>{const{competitions:e}=await u(tt());return e}),C=l(async e=>(await u(st(e)),e));s({clock:fe,target:C});s({clock:C.failData,fn:()=>({message:"Не удалось удалить соревнование",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:C.doneData,fn:()=>({message:"Соревнование удалено",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:pe,target:ve});const nt=i([]).on(ve.doneData,(e,t)=>t).on(C.doneData,(e,t)=>e.filter(n=>n!==t)),$t={load:pe,remove:fe},kt={$competitions:nt},St=({group:e,visits:t,additionalPoints:n,pointsForStandards:o})=>Math.round(e.visitValue*t+n+o),yt=({studentGuid:e})=>{const[t,n]=J.useState(new Date().toISOString()),[o]=xe([Me.pendingAddVisit]),r=new Date(t),m=Ae(r,{start:Re(new Date,1),end:new Date})&&r.getDay()!==0&&r.getDay()!==1;J.useEffect(()=>{n(new Date().toISOString())},[e]);const p=()=>{Ne.addVisit({studentGuid:e,date:Q(t,"numeric")})};return I.jsxs(we,{gap:"4px",ai:"flex-start",children:[I.jsx(Fe,{alertMessage:m?"":"Не допустимая дата",type:"date",setValue:n,value:t,hideCross:!0}),I.jsx(he,{isActive:m&&!o,text:`Добавить посещение ${Q(t,"numeric")}`,onClick:p,width:"100%",background:L.blue.main,textColor:L.white.main})]})};export{yt as A,Ve as P,W as S,k as a,it as b,rt as c,oe as d,$t as e,ct as f,dt as g,St as h,ut as i,A as j,qe as k,_e as l,Ce as m,Ne as n,Me as o,ft as p,lt as q,mt as r,kt as s,gt as t,pt as u,vt as v};
