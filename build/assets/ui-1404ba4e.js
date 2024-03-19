import{u as a,y as m,x as s,p as i,bS as j,bK as q,bV as Ae,bU as Ee,m as O,r as L,Z as xe,bY as he,bZ as we,j as M}from"./vendor-561dac3a.js";import{o as G,j as c,p as l,Y as Re,H as Fe,q as Ve,r as Ce,m as W,N as Y}from"./index-7cc4f467.js";var R=(e=>(e.AdminAccess="AdminAccess",e.DefaultAccess="DefaultAccess",e.OnlineCourseAccess="OnlineCourseAccess",e.SecretaryAccess="SecretaryAccess",e.SuperUser="SuperUser",e))(R||{}),be=(e=>(e.AdminAccess="ADMIN_ACCESS",e.DefaultAccess="DEFAULT_ACCESS",e.OnlineCourseAccess="ONLINE_COURSE_ACCESS",e.SecretaryAccess="SECRETARY_ACCESS",e.SuperUser="SUPER_USER",e))(be||{});const Ue=({studentGuid:e,date:t})=>`mutation IncreaseStudentVisits {
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
}`,ee=a(),te=a(),f=m(async e=>(await l(Ue(e)),e)),k=m(async({id:e})=>(await l(Ie(e)),e)),Te=k.pending,Ne=f.pending;s({clock:ee,target:f});s({clock:f.doneData,target:G.close});s({clock:f.failData,fn:()=>({message:"Не удалось добавить посещение",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:f.doneData,fn:()=>({message:"Посещение добавлено",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:te,target:k});s({clock:k.doneData,fn:()=>({message:"Посещение удалено",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:k.failData,fn:()=>({message:"Не удалось удалить посещение",type:"failure",time:3e3}),target:c.evokePopUpMessage});const Me={addVisit:ee,removeVisit:te},F={addVisitFx:f,removeVisitFx:k},je={pendingRemoveVisit:Te,pendingAddVisit:Ne},se=a(),_e=i("").on(se,(e,t)=>t),qe={update:se},Oe={$search:_e},oe=a(),z=a(),ne=i({}).on(Oe.$search,(e,t)=>({...e,fullName:{value:t}})).on(oe,(e,{name:t,value:o,strict:n})=>{const r={...e};return o?{...r,[t]:{value:o,strict:n}}:(delete r[t],r)});s({clock:z,target:ne.reinit});s({clock:z,fn:()=>"",target:qe.update});const y={$filters:ne},it={addFilter:oe,resetFilters:z},ae=a(),Ge=i(!1).on(ae,(e,t)=>t),ct={$isExam:Ge},dt={setIsExam:ae};function re(e){var{source:t,timeout:o,target:n}=e;if(!j.unit(t))throw new TypeError("source must be unit from effector");if(j.domain(t,{sid:"k76nst"}))throw new TypeError("source cannot be domain");var r=ze(o),d=a({name:"saveTimeoutId",sid:"vsg63k"}),p=i(null,{and:{serialize:"ignore"},name:"$timeoutId",sid:"lhz3ie"}).on(d,(g,u)=>u),v=a({name:"saveReject",sid:"qddkx3"}),E=i(null,{and:{serialize:"ignore"},name:"$rejecter",sid:"-o8m8p2"}).on(v,(g,u)=>u),$=n??a({name:"tick",sid:"a51tok"}),x=m(g=>{var{timeout:u,timeoutId:h,rejectPromise:w}=g;return h&&clearTimeout(h),w&&w(),new Promise((Pe,De)=>{v(De),d(setTimeout(Pe,u))})},{name:"timerBaseFx",sid:"-6dos97"}),S=q({and:{source:{timeoutId:p,rejectPromise:E},mapParams:(g,u)=>{var{timeoutId:h,rejectPromise:w}=u;return{timeout:g,timeoutId:h,rejectPromise:w}},effect:x},or:{name:"timerFx",sid:"ca9mop"}});E.reset(S.done),p.reset(S.done);var ke=i([],{and:{serialize:"ignore"},name:"$payload",sid:"jthvlw"}).on(t,(g,u)=>[u]),J=i(!0,{and:{serialize:"ignore"},name:"$canTick",sid:"-rehy9s"}),N=a({name:"triggerTick",sid:"31ed0l"});J.on(N,()=>!1).on([$,r,S],()=>!0);var ye=Ae([t,r],{name:"requestTick",sid:"7xoh8q"});return Ee({and:[{clock:ye,filter:J,target:N}],or:{sid:"-1mcdjn"}}),s({and:[{source:r,clock:N,target:S}],or:{sid:"-1j1lzh"}}),s({and:[{source:ke,clock:S.done,fn:g=>{var[u]=g;return u},target:$}],or:{sid:"-1475yq"}}),$}function ze(e){if(j.store(e,{sid:"-mlqvq"}))return e;if(typeof e=="number"){if(e<0||!Number.isFinite(e))throw new Error('timeout must be positive number or zero. Received: "'.concat(e,'"'));return i(e,{and:{name:"$timeout"},sid:"-6oihcx"})}throw new TypeError('timeout parameter in interval method should be number or Store. "'.concat(typeof e,'" was passed'))}const ie=e=>{const t=[];for(const[o,{value:n,strict:r}]of Object.entries(e))if(o.includes(".")){const[d,p]=o.split(".");typeof n=="number"?t.push({[d]:{[p]:{eq:n}}}):t.push({[d]:{[p]:{[r?"eq":"contains"]:`${n}`}}})}else typeof n=="number"?t.push({[o]:{eq:n}}):t.push({[o]:{contains:`${n}`}});return{and:t}},V=(e,t=[])=>{let o=JSON.stringify(e);return t.forEach(n=>{const r=new RegExp(`"${String(n)}":"([^"]+)"`,"g");o=o.replace(r,`${String(n)}: $1`)}),o.replace(/"([^"]+)":/g,"$1:")},Z=40,Be=(e,t=null,o=Z)=>{const n=V(t,["course"]);return`query {
      students (take:${Z}, skip: ${o*e}, where: ${n}, order: [{fullName:ASC}]){
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
    }`},He=e=>`{
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
}`,Qe=(e=null)=>`{
      students(where: ${V(e,["course"])}) {
        totalCount
      }
    }`,C=a(),ce=a(),B=i(0).on(ce,(e,t)=>t).on(y.$filters,()=>0),H=q({source:{page:B,filters:y.$filters},effect:async({filters:e,page:t})=>{const{students:o}=await l(Be(t,ie(e)));return o}});re({source:O(B,y.$filters),timeout:200,target:C});const b=q({source:{filters:y.$filters},effect:async({filters:e})=>{const{students:t}=await l(Qe(ie(e)));return t.totalCount}});re({source:y.$filters,timeout:200,target:b});s({clock:C,target:H});s({clock:C,target:b});const _=i([]).on(H.doneData,(e,t)=>t.items),Je=i(0).on(b.doneData,(e,t)=>t),Le=O(b.pending,H.pending,Boolean);s({clock:F.addVisitFx.doneData,source:_,filter:(e,{studentGuid:t})=>e.some(o=>o.studentGuid===t),fn:(e,t)=>{const o=JSON.parse(JSON.stringify(e)),n=o.find(r=>r.studentGuid===t.studentGuid);return++n.visits,o},target:_});const ut={load:C,setPage:ce},lt={$loading:Le,$pEStudents:_,$pEStudentsPage:B,$pEStudentsTotalCount:Je},We=e=>`mutation addPointsToStudent{
        addPointsToStudent(
          input: ${V(e,["workType"])}
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
    }`,de=a(),ue=a(),P=m(async({id:e})=>{await l(Ye(e))});s({clock:ue,target:P});const Ze=P.pending,D=m(async e=>(await l(We(e)),e));s({clock:de,target:D});s({clock:D.doneData,target:G.close});s({clock:D.doneData,fn:()=>({message:"Не удалось добавить баллы",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:D.failData,fn:()=>({message:"Не удалось добавить баллы",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:P.doneData,fn:()=>({message:"Баллы удалены",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:P.failData,fn:()=>({message:"Не удалось удалить баллы",type:"failure",time:3e3}),target:c.evokePopUpMessage});const mt={addAdditionPoints:de,removeAdditionPoints:ue},K={addAdditionPointsFx:D,removeAdditionPointsFx:P},gt={pendingRemoveAdditionPoints:Ze},Ke=e=>`mutation addRegulationPointsToStudent{
        addPointsForStandardToStudent(
          input: ${V(e,["standardType"])}
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
    `,le=a(),me=a(),A=m(async({id:e})=>{await l(Xe(e))});s({clock:me,target:A});const et=A.pending,U=m(async e=>(await l(Ke(e)),e));s({clock:le,target:U});s({clock:U.doneData,target:G.close});s({clock:U.failData,fn:()=>({message:"Не удалось добавить норматив",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:A.doneData,fn:()=>({message:"Норматив удален",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:A.failData,fn:()=>({message:"Не удалось удалить норматив",type:"failure"}),target:c.evokePopUpMessage});const pt={addRegulationPoints:le,removeRegulationPoints:me},X={addRegulationPointsFx:U,removeRegulationPointsFx:A},ft={pendingRemoveRegulationPoints:et},ge=a(),pe=a(),fe=a(),I=m(async e=>{const{student:t}=await l(He(e));return t});s({clock:ge,target:I});const Q=i(null).reset(pe),tt=O(F.addVisitFx.pending,I.pending,Boolean);s({clock:[F.addVisitFx.doneData,F.removeVisitFx.doneData,K.addAdditionPointsFx.doneData,K.removeAdditionPointsFx.doneData,X.addRegulationPointsFx.doneData,X.removeRegulationPointsFx.doneData],target:fe});s({clock:fe,source:Q,filter:e=>!!e,fn:e=>e.studentGuid,target:I});s({clock:I.doneData,target:Q});const vt={$selectedStudent:Q,$loading:tt},$t={setCurrentStudentId:ge,resetStudentId:pe},st=()=>`query loadComp {
        competitions
      }`,ot=e=>`mutation removeComp {
      deleteCompetition(input: { competitionName: "${e}" }) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,ve=a(),$e=a(),Se=m(async()=>{const{competitions:e}=await l(st());return e}),T=m(async e=>(await l(ot(e)),e));s({clock:$e,target:T});s({clock:T.failData,fn:()=>({message:"Не удалось удалить соревнование",type:"failure",time:3e3}),target:c.evokePopUpMessage});s({clock:T.doneData,fn:()=>({message:"Соревнование удалено",type:"success",time:3e3}),target:c.evokePopUpMessage});s({clock:ve,target:Se});const nt=i([]).on(Se.doneData,(e,t)=>t).on(T.doneData,(e,t)=>e.filter(o=>o!==t)),St={load:ve,remove:$e},kt={$competitions:nt},yt=({hasDebtFromPreviousSemester:e,archivedVisitValue:t,group:o,visits:n,additionalPoints:r,pointsForStandards:d})=>Math.round(e?t*n+r+d:o.visitValue*n+r+d),Pt=({studentGuid:e})=>{const[t,o]=L.useState(new Date().toISOString()),[n,r]=xe([je.pendingAddVisit,Re.peTeacher]),d=new Date(t),p=[R.AdminAccess,R.SuperUser,R.SecretaryAccess].some($=>{var x;return(x=r==null?void 0:r.permissions)==null?void 0:x.includes($)}),v=(he(d,{start:we(new Date,1),end:new Date})||p)&&d.getDay()!==0&&d.getDay()!==1;L.useEffect(()=>{o(new Date().toISOString())},[e]);const E=()=>{Me.addVisit({studentGuid:e,date:W(t,"numeric")})};return M.jsxs(Fe,{gap:"4px",ai:"flex-start",children:[M.jsx(Ve,{alertMessage:v?"":"Не допустимая дата",type:"date",setValue:o,value:t,hideCross:!0}),M.jsx(Ce,{isActive:v&&!n,text:`Добавить посещение ${W(t,"numeric")}`,onClick:E,width:"100%",background:Y.blue.main,textColor:Y.white.main})]})};export{Pt as A,be as P,Z as S,y as a,ct as b,it as c,re as d,St as e,dt as f,ut as g,yt as h,lt as i,V as j,Oe as k,qe as l,Be as m,ie as n,R as o,Me as p,je as q,vt as r,kt as s,mt as t,gt as u,pt as v,ft as w,$t as x};
