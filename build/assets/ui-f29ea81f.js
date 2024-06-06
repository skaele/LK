import{p as a,e as l,x as s,h as c,c5 as T,v as _,c9 as Pe,J as I,r as Q,n as Ae,ca as Ee,cb as he,j as N}from"./vendor-c0388033.js";import{n as q,d as i,p as u,X as xe,G as we,o as Ce,q as Re,l as B,L as W}from"./index-93926802.js";const Ve=({studentGuid:e,date:t})=>`mutation IncreaseStudentVisits {
    increaseStudentVisits(input: { studentGuid: "${e}", date: "${t}" }) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }  
`,Fe=e=>`mutation RemoveStudentVisits {
  deleteStudentVisit(input: { historyId: ${e} }) {
    success
    errors {
      ... on Error {
        message
      }
    }
  }
}`,Z=a(),ee=a(),f=l(async e=>(await u(Ve(e)),e)),S=l(async({id:e})=>(await u(Fe(e)),e)),be=S.pending,Ue=f.pending;s({clock:Z,target:f});s({clock:f.doneData,target:q.close});s({clock:f.failData,fn:()=>({message:"Не удалось добавить посещение",type:"failure",time:3e3}),target:i.evokePopUpMessage});s({clock:f.doneData,fn:()=>({message:"Посещение добавлено",type:"success",time:3e3}),target:i.evokePopUpMessage});s({clock:ee,target:S});s({clock:S.doneData,fn:()=>({message:"Посещение удалено",type:"success",time:3e3}),target:i.evokePopUpMessage});s({clock:S.failData,fn:()=>({message:"Не удалось удалить посещение",type:"failure",time:3e3}),target:i.evokePopUpMessage});const Ne={addVisit:Z,removeVisit:ee},x={addVisitFx:f,removeVisitFx:S},Te={pendingRemoveVisit:be,pendingAddVisit:Ue},te=a(),Me=c("").on(te,(e,t)=>t),_e={update:te},Ie={$search:Me},se=a(),j=a(),ne=c({}).on(Ie.$search,(e,t)=>({...e,fullName:{value:t}})).on(se,(e,{name:t,value:n,strict:o})=>{const r={...e};return n?{...r,[t]:{value:n,strict:o}}:(delete r[t],r)});s({clock:j,target:ne.reinit});s({clock:j,fn:()=>"",target:_e.update});const y={$filters:ne},at={addFilter:se,resetFilters:j},oe=a(),qe=c(!1).on(oe,(e,t)=>t),rt={$isExam:qe},it={setIsExam:oe};function ae(){var e,t=arguments.length===2?{source:arguments.length<=0?void 0:arguments[0],timeout:arguments.length<=1?void 0:arguments[1]}:arguments.length<=0?void 0:arguments[0],{source:n,timeout:o,target:r,name:d}=t;if(!T.unit(n))throw new TypeError("source must be unit from effector");if(T.domain(n,{sid:"jsc7s2"}))throw new TypeError("source cannot be domain");var g=je(o),v=a({name:"saveCancel",sid:"-kec0n3"}),E=c([],{and:{serialize:"ignore"},name:"$canceller",sid:"-tfm9fg"}).on(v,($,p)=>p),k=(e=r)!==null&&e!==void 0?e:a({name:"tick",sid:"-50e2rn"}),m=_({and:{name:d||"debounce(".concat((n==null?void 0:n.shortName)||n.kind,") effect"),source:E,effect($,p){var[J,L]=$;return J&&clearTimeout(J),L&&L(),new Promise((ye,De)=>{v([setTimeout(ye,p),De])})}},or:{name:"timerFx",sid:"-jwso4j"}});E.reset(m.done);var $e=c([],{and:{serialize:"ignore",skipVoid:!1},name:"$payload",sid:"-x9cllg"}).on(n,($,p)=>[p]),H=c(!0,{and:{serialize:"ignore"},name:"$canTick",sid:"8r2952"}),U=a({name:"triggerTick",sid:"-781myl"});H.on(U,()=>!1).on([k,g,m],()=>!0);var Se=Pe([n,s({and:[{clock:g,filter:m.pending}],or:{name:"requestTick",sid:"-khrpxp"}})],{name:"requestTick",sid:"2k0852"});return s({and:[{clock:Se,filter:H,target:U}],or:{sid:"-31h8q8"}}),s({and:[{source:g,clock:U,target:m}],or:{sid:"-2y6h62"}}),s({and:[{source:$e,clock:m.done,fn:$=>{var[p]=$;return p},target:k}],or:{sid:"-2jc15b"}}),k}function je(e){if(T.store(e,{sid:"-21qm2b"}))return e;if(typeof e=="number"){if(e<0||!Number.isFinite(e))throw new Error('timeout must be positive number or zero. Received: "'.concat(e,'"'));return c(e,{and:{name:"$timeout"},sid:"kbepy4"})}throw new TypeError('timeout parameter in interval method should be number or Store. "'.concat(typeof e,'" was passed'))}const re=e=>{const t=[];for(const[n,{value:o,strict:r}]of Object.entries(e))if(n.includes(".")){const[d,g]=n.split(".");typeof o=="number"?t.push({[d]:{[g]:{eq:o}}}):t.push({[d]:{[g]:{[r?"eq":"contains"]:`${o}`}}})}else typeof o=="number"?t.push({[n]:{eq:o}}):t.push({[n]:{contains:`${o}`}});return{and:t}},w=(e,t=[])=>{let n=JSON.stringify(e);return t.forEach(o=>{const r=new RegExp(`"${String(o)}":"([^"]+)"`,"g");n=n.replace(r,`${String(o)}: $1`)}),n.replace(/"([^"]+)":/g,"$1:")},K=40,Oe=(e,t=null,n=K)=>{const o=w(t,["course"]);return`query {
      students (take:${K}, skip: ${n*e}, where: ${o}, order: [{fullName:ASC}]){
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
    }`},Ge=e=>`{
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
}`,ze=(e=null)=>`{
      students(where: ${w(e,["course"])}) {
        totalCount
      }
    }`,C=a(),ie=a(),O=c(0).on(ie,(e,t)=>t).on(y.$filters,()=>0),G=_({source:{page:O,filters:y.$filters},effect:async({filters:e,page:t})=>{const{students:n}=await u(Oe(t,re(e)));return n}});ae({source:I(O,y.$filters),timeout:200,target:C});const R=_({source:{filters:y.$filters},effect:async({filters:e})=>{const{students:t}=await u(ze(re(e)));return t.totalCount}});ae({source:y.$filters,timeout:200,target:R});s({clock:C,target:G});s({clock:C,target:R});const M=c([]).on(G.doneData,(e,t)=>t.items),He=c(0).on(R.doneData,(e,t)=>t),Je=I(R.pending,G.pending,Boolean);s({clock:x.addVisitFx.doneData,source:M,filter:(e,{studentGuid:t})=>e.some(n=>n.studentGuid===t),fn:(e,t)=>{const n=JSON.parse(JSON.stringify(e)),o=n.find(r=>r.studentGuid===t.studentGuid);return++o.visits,n},target:M});const ct={load:C,setPage:ie},dt={$loading:Je,$pEStudents:M,$pEStudentsPage:O,$pEStudentsTotalCount:He},Le=e=>`mutation addPointsToStudent{
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
      }`,Qe=e=>`mutation removePointsFromStudent {
      deletePoints(input: {historyId : ${e}}) {
        success
        errors {
          ... on Error {
            message
          }
        }
          
      }
    }`,ce=a(),de=a(),D=l(async({id:e})=>{await u(Qe(e))});s({clock:de,target:D});const Be=D.pending,P=l(async e=>(await u(Le(e)),e));s({clock:ce,target:P});s({clock:P.doneData,target:q.close});s({clock:P.doneData,fn:()=>({message:"Не удалось добавить баллы",type:"success",time:3e3}),target:i.evokePopUpMessage});s({clock:P.failData,fn:()=>({message:"Не удалось добавить баллы",type:"failure",time:3e3}),target:i.evokePopUpMessage});s({clock:D.doneData,fn:()=>({message:"Баллы удалены",type:"success",time:3e3}),target:i.evokePopUpMessage});s({clock:D.failData,fn:()=>({message:"Не удалось удалить баллы",type:"failure",time:3e3}),target:i.evokePopUpMessage});const ut={addAdditionPoints:ce,removeAdditionPoints:de},X={addAdditionPointsFx:P,removeAdditionPointsFx:D},lt={pendingRemoveAdditionPoints:Be},We=e=>`mutation addRegulationPointsToStudent{
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
    `,ue=a(),le=a(),A=l(async({id:e})=>{await u(Ke(e))});s({clock:le,target:A});const Xe=A.pending,V=l(async e=>(await u(We(e)),e));s({clock:ue,target:V});s({clock:V.doneData,target:q.close});s({clock:V.failData,fn:()=>({message:"Не удалось добавить норматив",type:"failure",time:3e3}),target:i.evokePopUpMessage});s({clock:A.doneData,fn:()=>({message:"Норматив удален",type:"success",time:3e3}),target:i.evokePopUpMessage});s({clock:A.failData,fn:()=>({message:"Не удалось удалить норматив",type:"failure"}),target:i.evokePopUpMessage});const gt={addRegulationPoints:ue,removeRegulationPoints:le},Y={addRegulationPointsFx:V,removeRegulationPointsFx:A},mt={pendingRemoveRegulationPoints:Xe},ge=a(),me=a(),pe=a(),F=l(async e=>{const{student:t}=await u(Ge(e));return t});s({clock:ge,target:F});const z=c(null).reset(me),Ye=I(x.addVisitFx.pending,F.pending,Boolean);s({clock:[x.addVisitFx.doneData,x.removeVisitFx.doneData,X.addAdditionPointsFx.doneData,X.removeAdditionPointsFx.doneData,Y.addRegulationPointsFx.doneData,Y.removeRegulationPointsFx.doneData],target:pe});s({clock:pe,source:z,filter:e=>!!e,fn:e=>e.studentGuid,target:F});s({clock:F.doneData,target:z});const pt={$selectedStudent:z,$loading:Ye},ft={setCurrentStudentId:ge,resetStudentId:me},Ze=()=>`query loadComp {
        competitions
      }`,et=e=>`mutation removeComp {
      deleteCompetition(input: { competitionName: "${e}" }) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,fe=a(),ve=a(),ke=l(async()=>{const{competitions:e}=await u(Ze());return e}),b=l(async e=>(await u(et(e)),e));s({clock:ve,target:b});s({clock:b.failData,fn:()=>({message:"Не удалось удалить соревнование",type:"failure",time:3e3}),target:i.evokePopUpMessage});s({clock:b.doneData,fn:()=>({message:"Соревнование удалено",type:"success",time:3e3}),target:i.evokePopUpMessage});s({clock:fe,target:ke});const tt=c([]).on(ke.doneData,(e,t)=>t).on(b.doneData,(e,t)=>e.filter(n=>n!==t)),vt={load:fe,remove:ve},kt={$competitions:tt},$t=({hasDebtFromPreviousSemester:e,archivedVisitValue:t,group:n,visits:o,additionalPoints:r,pointsForStandards:d})=>Math.round(e?t*o+r+d:n.visitValue*o+r+d);var h=(e=>(e.AdminAccess="AdminAccess",e.DefaultAccess="DefaultAccess",e.OnlineCourseAccess="OnlineCourseAccess",e.SecretaryAccess="SecretaryAccess",e.SuperUser="SuperUser",e))(h||{}),st=(e=>(e.AdminAccess="ADMIN_ACCESS",e.DefaultAccess="DEFAULT_ACCESS",e.OnlineCourseAccess="ONLINE_COURSE_ACCESS",e.SecretaryAccess="SECRETARY_ACCESS",e.SuperUser="SUPER_USER",e))(st||{});const St=({studentGuid:e})=>{const[t,n]=Q.useState(new Date().toISOString()),[o,r]=Ae([Te.pendingAddVisit,xe.peTeacher]),d=new Date(t),g=[h.AdminAccess,h.SuperUser,h.SecretaryAccess].some(k=>{var m;return(m=r==null?void 0:r.permissions)==null?void 0:m.includes(k)}),v=(Ee(d,{start:he(new Date,1),end:new Date})||g)&&d.getDay()!==0&&d.getDay()!==1;Q.useEffect(()=>{n(new Date().toISOString())},[e]);const E=()=>{Ne.addVisit({studentGuid:e,date:B(t,"numeric")})};return N.jsxs(we,{gap:"4px",ai:"flex-start",children:[N.jsx(Ce,{alertMessage:v?"":"Не допустимая дата",type:"date",setValue:n,value:t,hideCross:!0}),N.jsx(Re,{isActive:v&&!o,text:`Добавить посещение ${B(t,"numeric")}`,onClick:E,width:"100%",background:W.blue.main,textColor:W.white.main})]})};export{St as A,st as P,K as S,y as a,rt as b,at as c,ae as d,vt as e,it as f,ct as g,$t as h,dt as i,w as j,Ie as k,_e as l,Oe as m,re as n,h as o,Ne as p,Te as q,pt as r,kt as s,ut as t,lt as u,gt as v,mt as w,ft as x};
