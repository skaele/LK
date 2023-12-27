import{u as a,y as l,x as s,p as i,bR as j,bJ as q,bU as De,bT as Ee,m as O,r as L,Z as xe,bX as Re,bY as we,j as M}from"./vendor-f1fdae2f.js";import{f as G,a as c,p as u,y as Fe,r as he,g as Ce,B as Ve,l as W,E as Y}from"./index-9240f5bc.js";var F=(e=>(e.AdminAccess="AdminAccess",e.DefaultAccess="DefaultAccess",e.OnlineCourseAccess="OnlineCourseAccess",e.SecretaryAccess="SecretaryAccess",e.SuperUser="SuperUser",e))(F||{}),be=(e=>(e.AdminAccess="ADMIN_ACCESS",e.DefaultAccess="DEFAULT_ACCESS",e.OnlineCourseAccess="ONLINE_COURSE_ACCESS",e.SecretaryAccess="SECRETARY_ACCESS",e.SuperUser="SUPER_USER",e))(be||{});const Te=({studentGuid:e,date:t})=>`mutation IncreaseStudentVisits {
    increaseStudentVisits(input: { studentGuid: "${e}", date: "${t}" }) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }  
`,Ue=e=>`mutation RemoveStudentVisits {
  deleteStudentVisit(input: { historyId: ${e} }) {
    success
    errors {
      ... on Error {
        message
      }
    }
  }
}`,ee=a(),te=a(),f=l(async e=>(await u(Te(e)),e)),S=l(async({id:e})=>(await u(Ue(e)),e)),Ie=S.pending,Ne=f.pending;s({clock:ee,target:f});s({clock:f.doneData,target:G.close});s({clock:f.failData,fn:()=>({message:"Не удалось добавить посещение",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:f.doneData,fn:()=>({message:"Посещение добавлено",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:te,target:S});s({clock:S.doneData,fn:()=>({message:"Посещение удалено",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:S.failData,fn:()=>({message:"Не удалось удалить посещение",type:"failure",time:3e3}),target:c.evokePopUpMessage});const Me={addVisit:ee,removeVisit:te},h={addVisitFx:f,removeVisitFx:S},je={pendingRemoveVisit:Ie,pendingAddVisit:Ne},se=a(),_e=i("").on(se,(e,t)=>t),qe={update:se},Oe={$search:_e},ne=a(),z=a(),oe=i({}).on(Oe.$search,(e,t)=>({...e,fullName:{value:t}})).on(ne,(e,{name:t,value:n,strict:o})=>{const r={...e};return n?{...r,[t]:{value:n,strict:o}}:(delete r[t],r)});s({clock:z,target:oe.reinit});s({clock:z,fn:()=>"",target:qe.update});const y={$filters:oe},it={addFilter:ne,resetFilters:z},ae=a(),Ge=i(!1).on(ae,(e,t)=>t),ct={$isExam:Ge},dt={setIsExam:ae};function re(e){var{source:t,timeout:n,target:o}=e;if(!j.unit(t))throw new TypeError("source must be unit from effector");if(j.domain(t,{sid:"k76nst"}))throw new TypeError("source cannot be domain");var r=ze(n),m=a({name:"saveTimeoutId",sid:"vsg63k"}),p=i(null,{and:{serialize:"ignore"},name:"$timeoutId",sid:"lhz3ie"}).on(m,(g,d)=>d),v=a({name:"saveReject",sid:"qddkx3"}),E=i(null,{and:{serialize:"ignore"},name:"$rejecter",sid:"-o8m8p2"}).on(v,(g,d)=>d),$=o??a({name:"tick",sid:"a51tok"}),x=l(g=>{var{timeout:d,timeoutId:R,rejectPromise:w}=g;return R&&clearTimeout(R),w&&w(),new Promise((Pe,Ae)=>{v(Ae),m(setTimeout(Pe,d))})},{name:"timerBaseFx",sid:"-6dos97"}),k=q({and:{source:{timeoutId:p,rejectPromise:E},mapParams:(g,d)=>{var{timeoutId:R,rejectPromise:w}=d;return{timeout:g,timeoutId:R,rejectPromise:w}},effect:x},or:{name:"timerFx",sid:"ca9mop"}});E.reset(k.done),p.reset(k.done);var Se=i([],{and:{serialize:"ignore"},name:"$payload",sid:"jthvlw"}).on(t,(g,d)=>[d]),Q=i(!0,{and:{serialize:"ignore"},name:"$canTick",sid:"-rehy9s"}),N=a({name:"triggerTick",sid:"31ed0l"});Q.on(N,()=>!1).on([$,r,k],()=>!0);var ye=De([t,r],{name:"requestTick",sid:"7xoh8q"});return Ee({and:[{clock:ye,filter:Q,target:N}],or:{sid:"-1mcdjn"}}),s({and:[{source:r,clock:N,target:k}],or:{sid:"-1j1lzh"}}),s({and:[{source:Se,clock:k.done,fn:g=>{var[d]=g;return d},target:$}],or:{sid:"-1475yq"}}),$}function ze(e){if(j.store(e,{sid:"-mlqvq"}))return e;if(typeof e=="number"){if(e<0||!Number.isFinite(e))throw new Error('timeout must be positive number or zero. Received: "'.concat(e,'"'));return i(e,{and:{name:"$timeout"},sid:"-6oihcx"})}throw new TypeError('timeout parameter in interval method should be number or Store. "'.concat(typeof e,'" was passed'))}const ie=e=>{const t=[];for(const[n,{value:o,strict:r}]of Object.entries(e))if(n.includes(".")){const[m,p]=n.split(".");typeof o=="number"?t.push({[m]:{[p]:{eq:o}}}):t.push({[m]:{[p]:{[r?"eq":"contains"]:`${o}`}}})}else typeof o=="number"?t.push({[n]:{eq:o}}):t.push({[n]:{contains:`${o}`}});return{and:t}},C=(e,t=[])=>{let n=JSON.stringify(e);return t.forEach(o=>{const r=new RegExp(`"${String(o)}":"([^"]+)"`,"g");n=n.replace(r,`${String(o)}: $1`)}),n.replace(/"([^"]+)":/g,"$1:")},Z=40,Be=(e,t=null)=>{const n=C(t,["course"]);return`query {
      students (take:${Z}, skip: ${Z*e}, where: ${n}, order: [{fullName:ASC}]){
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
    }`},He=e=>`{
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
}`,Je=(e=null)=>`{
      students(where: ${C(e,["course"])}) {
        totalCount
      }
    }`,V=a(),ce=a(),B=i(0).on(ce,(e,t)=>t).on(y.$filters,()=>0),H=q({source:{page:B,filters:y.$filters},effect:async({filters:e,page:t})=>{const{students:n}=await u(Be(t,ie(e)));return n}});re({source:O(B,y.$filters),timeout:200,target:V});const b=q({source:{filters:y.$filters},effect:async({filters:e})=>{const{students:t}=await u(Je(ie(e)));return t.totalCount}});re({source:y.$filters,timeout:200,target:b});s({clock:V,target:H});s({clock:V,target:b});const _=i([]).on(H.doneData,(e,t)=>t.items),Qe=i(0).on(b.doneData,(e,t)=>t),Le=O(b.pending,H.pending,Boolean);s({clock:h.addVisitFx.doneData,source:_,filter:(e,{studentGuid:t})=>e.some(n=>n.studentGuid===t),fn:(e,t)=>{const n=JSON.parse(JSON.stringify(e)),o=n.find(r=>r.studentGuid===t.studentGuid);return++o.visits,n},target:_});const ut={load:V,setPage:ce},lt={$loading:Le,$pEStudents:_,$pEStudentsPage:B,$pEStudentsTotalCount:Qe},We=e=>`mutation addPointsToStudent{
        addPointsToStudent(
          input: ${C(e,["workType"])}
        ) {
          success
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,Ye=e=>`mutation removePointsFromStudent {
      deletePoints(input: {historyId : ${e}}) {
        success
        errors {
          ... on Error {
            message
          }
        }
          
      }
    }`,de=a(),ue=a(),P=l(async({id:e})=>{await u(Ye(e))});s({clock:ue,target:P});const Ze=P.pending,A=l(async e=>(await u(We(e)),e));s({clock:de,target:A});s({clock:A.doneData,target:G.close});s({clock:A.doneData,fn:()=>({message:"Не удалось добавить баллы",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:A.failData,fn:()=>({message:"Не удалось добавить баллы",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:P.doneData,fn:()=>({message:"Баллы удалены",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:P.failData,fn:()=>({message:"Не удалось удалить баллы",type:"failure",time:3e3}),target:c.evokePopUpMessage});const mt={addAdditionPoints:de,removeAdditionPoints:ue},K={addAdditionPointsFx:A,removeAdditionPointsFx:P},gt={pendingRemoveAdditionPoints:Ze},Ke=e=>`mutation addRegulationPointsToStudent{
        addPointsForStandardToStudent(
          input: ${C(e,["standardType"])}
        ) {
          success
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,Xe=e=>`mutation RemoveStudentRegulationPoints {
      deleteStandardPoints(input: { historyId: ${e} }) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,le=a(),me=a(),D=l(async({id:e})=>{await u(Xe(e))});s({clock:me,target:D});const et=D.pending,T=l(async e=>(await u(Ke(e)),e));s({clock:le,target:T});s({clock:T.doneData,target:G.close});s({clock:T.failData,fn:()=>({message:"Не удалось добавить норматив",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:D.doneData,fn:()=>({message:"Норматив удален",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:D.failData,fn:()=>({message:"Не удалось удалить норматив",type:"failure"}),target:c.evokePopUpMessage});const pt={addRegulationPoints:le,removeRegulationPoints:me},X={addRegulationPointsFx:T,removeRegulationPointsFx:D},ft={pendingRemoveRegulationPoints:et},ge=a(),pe=a(),fe=a(),U=l(async e=>{const{student:t}=await u(He(e));return t});s({clock:ge,target:U});const J=i(null).reset(pe),tt=O(h.addVisitFx.pending,U.pending,Boolean);s({clock:[h.addVisitFx.doneData,h.removeVisitFx.doneData,K.addAdditionPointsFx.doneData,K.removeAdditionPointsFx.doneData,X.addRegulationPointsFx.doneData,X.removeRegulationPointsFx.doneData],target:fe});s({clock:fe,source:J,filter:e=>!!e,fn:e=>e.studentGuid,target:U});s({clock:U.doneData,target:J});const vt={$selectedStudent:J,$loading:tt},$t={setCurrentStudentId:ge,resetStudentId:pe},st=()=>`query loadComp {
        competitions
      }`,nt=e=>`mutation removeComp {
      deleteCompetition(input: { competitionName: "${e}" }) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,ve=a(),$e=a(),ke=l(async()=>{const{competitions:e}=await u(st());return e}),I=l(async e=>(await u(nt(e)),e));s({clock:$e,target:I});s({clock:I.failData,fn:()=>({message:"Не удалось удалить соревнование",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:I.doneData,fn:()=>({message:"Соревнование удалено",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:ve,target:ke});const ot=i([]).on(ke.doneData,(e,t)=>t).on(I.doneData,(e,t)=>e.filter(n=>n!==t)),kt={load:ve,remove:$e},St={$competitions:ot},yt=({group:e,visits:t,additionalPoints:n,pointsForStandards:o})=>Math.round(e.visitValue*t+n+o),Pt=({studentGuid:e})=>{const[t,n]=L.useState(new Date().toISOString()),[o,r]=xe([je.pendingAddVisit,Fe.peTeacher]),m=new Date(t),p=[F.AdminAccess,F.SuperUser,F.SecretaryAccess].some($=>{var x;return(x=r==null?void 0:r.permissions)==null?void 0:x.includes($)}),v=(Re(m,{start:we(new Date,1),end:new Date})||p)&&m.getDay()!==0&&m.getDay()!==1;L.useEffect(()=>{n(new Date().toISOString())},[e]);const E=()=>{Me.addVisit({studentGuid:e,date:W(t,"numeric")})};return M.jsxs(he,{gap:"4px",ai:"flex-start",children:[M.jsx(Ce,{alertMessage:v?"":"Не допустимая дата",type:"date",setValue:n,value:t,hideCross:!0}),M.jsx(Ve,{isActive:v&&!o,text:`Добавить посещение ${W(t,"numeric")}`,onClick:E,width:"100%",background:Y.blue.main,textColor:Y.white.main})]})};export{Pt as A,be as P,Z as S,y as a,ct as b,it as c,re as d,kt as e,dt as f,ut as g,yt as h,lt as i,C as j,Oe as k,qe as l,F as m,Me as n,je as o,vt as p,mt as q,gt as r,St as s,pt as t,ft as u,$t as v};
