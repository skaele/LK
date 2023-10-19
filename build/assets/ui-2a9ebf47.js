import{d as yt,u as a,y as g,x as n,p as i,bO as q,bM as N,bR as kt,bQ as vt,m as R,r as H,j as b}from"./vendor-831b4923.js";import{y as ht,z as B,f as I,a as p,p as St,g as xt,B as Pt,l as Q,x as J}from"./index-774d803f.js";const wt="https://api.mospolytech.ru/physedjournal/graphql/",$=yt.create({baseURL:wt}),Et={headers:{"Content-Type":"application/json"}};$.interceptors.request.use(ht);$.interceptors.response.use(async t=>{var e,s,o,r;return((r=(o=(s=(e=t==null?void 0:t.data)==null?void 0:e.errors)==null?void 0:s[0])==null?void 0:o.extensions)==null?void 0:r.code)==="AUTH_NOT_AUTHENTICATED"?await B($)(t):t},B($));const l=async t=>{var s;const e=await $.post("",{query:t},Et);if(K(e.data))throw new Error("Request error");return(s=e==null?void 0:e.data)==null?void 0:s.data};function K(t){if(typeof t=="object"&&t){if(t.hasOwnProperty("errors")&&t.errors)return!0;for(const e in t)if(K(t[e]))return!0}return!1}const Tt=({studentGuid:t,date:e})=>`mutation IncreaseStudentVisits {
    increaseStudentVisits(input: { studentGuid: "${t}", date: "${e}" }) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }  
`,W=a(),y=g(async t=>(await l(Tt(t)),t));n({clock:W,target:y});n({clock:y.doneData,target:I.close});n({clock:y.failData,fn:()=>({message:"Не удалось добавить посещение",type:"failure",time:3e3}),target:p.evokePopUpMessage});n({clock:y.doneData,fn:()=>({message:"Посещение добавлено",type:"success",time:3e3}),target:p.evokePopUpMessage});const Dt={addVisit:W},V={addVisitFx:y},Z=a(),Ft=i("").on(Z,(t,e)=>e),Ct={update:Z},bt={$search:Ft},X=a(),j=a(),Y=i({}).on(bt.$search,(t,e)=>({...t,fullName:{value:e}})).on(X,(t,{name:e,value:s,strict:o})=>{const r={...t};return s?{...r,[e]:{value:s,strict:o}}:(delete r[e],r)});n({clock:j,target:Y.reinit});n({clock:j,fn:()=>"",target:Ct.update});const k={$filters:Y},Lt={addFilter:X,resetFilters:j},tt=a(),qt=i(!1).on(tt,(t,e)=>e),Kt={$isExam:qt},Wt={setIsExam:tt};function et(t){var{source:e,timeout:s,target:o}=t;if(!q.unit(e))throw new TypeError("source must be unit from effector");if(q.domain(e,{sid:"k76nst"}))throw new TypeError("source cannot be domain");var r=At(s),d=a({name:"saveTimeoutId",sid:"vsg63k"}),m=i(null,{and:{serialize:"ignore"},name:"$timeoutId",sid:"lhz3ie"}).on(d,(u,c)=>c),U=a({name:"saveReject",sid:"qddkx3"}),z=i(null,{and:{serialize:"ignore"},name:"$rejecter",sid:"-o8m8p2"}).on(U,(u,c)=>c),F=o??a({name:"tick",sid:"a51tok"}),mt=g(u=>{var{timeout:c,timeoutId:v,rejectPromise:h}=u;return v&&clearTimeout(v),h&&h(),new Promise((ft,$t)=>{U($t),d(setTimeout(ft,c))})},{name:"timerBaseFx",sid:"-6dos97"}),f=N({and:{source:{timeoutId:m,rejectPromise:z},mapParams:(u,c)=>{var{timeoutId:v,rejectPromise:h}=c;return{timeout:u,timeoutId:v,rejectPromise:h}},effect:mt},or:{name:"timerFx",sid:"ca9mop"}});z.reset(f.done),m.reset(f.done);var gt=i([],{and:{serialize:"ignore"},name:"$payload",sid:"jthvlw"}).on(e,(u,c)=>[c]),G=i(!0,{and:{serialize:"ignore"},name:"$canTick",sid:"-rehy9s"}),C=a({name:"triggerTick",sid:"31ed0l"});G.on(C,()=>!1).on([F,r,f],()=>!0);var pt=kt([e,r],{name:"requestTick",sid:"7xoh8q"});return vt({and:[{clock:pt,filter:G,target:C}],or:{sid:"-1mcdjn"}}),n({and:[{source:r,clock:C,target:f}],or:{sid:"-1j1lzh"}}),n({and:[{source:gt,clock:f.done,fn:u=>{var[c]=u;return c},target:F}],or:{sid:"-1475yq"}}),F}function At(t){if(q.store(t,{sid:"-mlqvq"}))return t;if(typeof t=="number"){if(t<0||!Number.isFinite(t))throw new Error('timeout must be positive number or zero. Received: "'.concat(t,'"'));return i(t,{and:{name:"$timeout"},sid:"-6oihcx"})}throw new TypeError('timeout parameter in interval method should be number or Store. "'.concat(typeof t,'" was passed'))}const st=t=>{const e=[];for(const[s,{value:o,strict:r}]of Object.entries(t))if(s.includes(".")){const[d,m]=s.split(".");typeof o=="number"?e.push({[d]:{[m]:{eq:o}}}):e.push({[d]:{[m]:{[r?"eq":"contains"]:`${o}`}}})}else typeof o=="number"?e.push({[s]:{eq:o}}):e.push({[s]:{contains:`${o}`}});return{and:e}},S=(t,e=[])=>{let s=JSON.stringify(t);return e.forEach(o=>{const r=new RegExp(`"${String(o)}":"([^"]+)"`,"g");s=s.replace(r,`${String(o)}: $1`)}),s.replace(/"([^"]+)":/g,"$1:")},L=40,Nt=(t,e=null)=>{const s=S(e,["course"]);return`query {
      students (take:${L}, skip: ${L*t}, where: ${s}, order: [{fullName:ASC}]){
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
    }`},Rt=t=>`{
    student(guid: "${t}") {
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
          teacher{
            fullName
          }
        }
      }
}`,It=(t=null)=>`{
      students(where: ${S(t,["course"])}) {
        totalCount
      }
    }`,x=a(),nt=a(),_=i(0).on(nt,(t,e)=>e).on(k.$filters,()=>0),M=N({source:{page:_,filters:k.$filters},effect:async({filters:t,page:e})=>{const{students:s}=await l(Nt(e,st(t)));return s}});et({source:R(_,k.$filters),timeout:200,target:x});const P=N({source:{filters:k.$filters},effect:async({filters:t})=>{const{students:e}=await l(It(st(t)));return e.totalCount}});et({source:k.$filters,timeout:200,target:P});n({clock:x,target:M});n({clock:x,target:P});const A=i([]).on(M.doneData,(t,e)=>e.items),Vt=i(0).on(P.doneData,(t,e)=>e),jt=R(P.pending,M.pending,Boolean);n({clock:V.addVisitFx.doneData,source:A,filter:(t,{studentGuid:e})=>t.some(s=>s.studentGuid===e),fn:(t,e)=>{const s=JSON.parse(JSON.stringify(t)),o=s.find(r=>r.studentGuid===e.studentGuid);return++o.visits,s},target:A});const Zt={load:x,setPage:nt},Xt={$loading:jt,$pEStudents:A,$pEStudentsPage:_,$pEStudentsTotalCount:Vt},_t=t=>`mutation addPointsToStudent{
        addPointsToStudent(
          input: ${S(t,["workType"])}
        ) {
          success
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,ot=a(),w=g(async t=>(await l(_t(t)),t));n({clock:ot,target:w});n({clock:w.doneData,target:I.close});n({clock:w.failData,fn:()=>({message:"Не удалось добавить баллы",type:"failure",time:3e3}),target:p.evokePopUpMessage});const Yt={addAdditionPoints:ot},Mt={addAdditionPointsFx:w},Ot=t=>`mutation addRegulationPointsToStudent{
        addPointsForStandardToStudent(
          input: ${S(t,["standardType"])}
        ) {
          success
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,rt=a(),E=g(async t=>(await l(Ot(t)),t));n({clock:rt,target:E});n({clock:E.doneData,target:I.close});n({clock:E.failData,fn:()=>({message:"Не удалось добавить норматив",type:"failure",time:3e3}),target:p.evokePopUpMessage});const te={addRegulationPoints:rt},Ut={addRegulationPointsFx:E},at=a(),it=a(),ct=a(),T=g(async t=>{const{student:e}=await l(Rt(t));return e});n({clock:at,target:T});const O=i(null).reset(it),zt=R(V.addVisitFx.pending,T.pending,Boolean);n({clock:[V.addVisitFx.doneData,Mt.addAdditionPointsFx.doneData,Ut.addRegulationPointsFx.doneData],target:ct});n({clock:ct,source:O,filter:t=>!!t,fn:t=>t.studentGuid,target:T});n({clock:T.doneData,target:O});const ee={$selectedStudent:O,$loading:zt},se={setCurrentStudentId:at,resetStudentId:it},Gt=()=>`query loadComp {
        competitions
      }`,Ht=t=>`mutation removeComp {
      deleteCompetition(input: { competitionName: "${t}" }) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,dt=a(),ut=a(),lt=g(async()=>{const{competitions:t}=await l(Gt());return t}),D=g(async t=>(await l(Ht(t)),t));n({clock:ut,target:D});n({clock:D.failData,fn:()=>({message:"Не удалось удалить соревнование",type:"failure",time:3e3}),target:p.evokePopUpMessage});n({clock:D.doneData,fn:()=>({message:"Соревнование удалено",type:"success",time:3e3}),target:p.evokePopUpMessage});n({clock:dt,target:lt});const Bt=i([]).on(lt.doneData,(t,e)=>e).on(D.doneData,(t,e)=>t.filter(s=>s!==e)),ne={load:dt,remove:ut},oe={$competitions:Bt},re=({group:t,visits:e,additionalPoints:s,pointsForStandards:o})=>Math.round(t.visitValue*e+s+o),ae=({studentGuid:t})=>{const[e,s]=H.useState(new Date().toISOString()),o=new Date,r=new Date(e),d=r<=o&&r.getDay()!==0&&r.getDay()!==1;H.useEffect(()=>{s(new Date().toISOString())},[t]);const m=()=>{Dt.addVisit({studentGuid:t,date:Q(e,"numeric")})};return b.jsxs(St,{gap:"4px",ai:"flex-start",children:[b.jsx(xt,{alertMessage:d?"":"Не допустимая дата",type:"date",setValue:s,value:e,hideCross:!0}),b.jsx(Pt,{isActive:d,text:`Добавить посещение ${Q(e,"numeric")}`,onClick:m,width:"100%",background:J.blue.main,textColor:J.white.main})]})};export{ae as A,L as S,k as a,Kt as b,Lt as c,et as d,ne as e,Wt as f,Zt as g,re as h,Xt as i,S as j,bt as k,Ct as l,ee as m,Yt as n,te as o,l as p,se as q,oe as s};
