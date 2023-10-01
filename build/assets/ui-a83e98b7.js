import{d as pt,u as r,y as l,x as o,p as a,bM as q,bQ as b,bP as gt,bO as ft,m as R,r as G,j as F}from"./vendor-2bd70a0f.js";import{x as $t,y as yt,f as V,a as m,p as kt,g as vt,B as St,l as B}from"./index-bc77f324.js";const ht="https://api.mospolytech.ru/physedjournal/graphql/",j=pt.create({baseURL:ht}),Pt={headers:{"Content-Type":"application/json"}};j.interceptors.request.use($t);j.interceptors.response.use(t=>t,yt);const u=async t=>{const e=await j.post("",{query:t},Pt);if(Q(e.data))throw new Error("Request error");return e.data.data};function Q(t){if(typeof t=="object"&&t){if(t.hasOwnProperty("errors")&&t.errors)return!0;for(const e in t)if(Q(t[e]))return!0}return!1}const xt=({studentGuid:t,date:e})=>`mutation IncreaseStudentVisits {
    increaseStudentVisits(input: { studentGuid: "${t}", date: "${e}" }) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }  
`,J=r(),f=l(async t=>(await u(xt(t)),t));o({clock:J,target:f});o({clock:f.doneData,target:V.close});o({clock:f.failData,fn:()=>({message:"Не удалось добавить посещение",type:"failure",time:3e3}),target:m.evokePopUpMessage});o({clock:f.doneData,fn:()=>({message:"Посещение добавлено",type:"success",time:3e3}),target:m.evokePopUpMessage});const wt={addVisit:J},C={addVisitFx:f},L=r(),Et=a("").on(L,(t,e)=>e),Ht={update:L},Dt={$search:Et},K=r(),Tt=a({}).on(Dt.$search,(t,e)=>({...t,fullName:e})).on(K,(t,{name:e,value:s})=>{const n={...t};return s?{...n,[e]:s}:(delete n[e],n)}),$={$filters:Tt},Qt={addFilter:K},W=r(),Ft=a(!1).on(W,(t,e)=>e),Jt={$isExam:Ft},Lt={setIsExam:W};function Z(t){var{source:e,timeout:s,target:n}=t;if(!q.unit(e))throw new TypeError("source must be unit from effector");if(q.domain(e,{sid:"k76nst"}))throw new TypeError("source cannot be domain");var i=qt(s),p=r({name:"saveTimeoutId",sid:"vsg63k"}),O=a(null,{and:{serialize:"ignore"},name:"$timeoutId",sid:"lhz3ie"}).on(p,(d,c)=>c),M=r({name:"saveReject",sid:"qddkx3"}),U=a(null,{and:{serialize:"ignore"},name:"$rejecter",sid:"-o8m8p2"}).on(M,(d,c)=>c),D=n??r({name:"tick",sid:"a51tok"}),ct=l(d=>{var{timeout:c,timeoutId:y,rejectPromise:k}=d;return y&&clearTimeout(y),k&&k(),new Promise((lt,mt)=>{M(mt),p(setTimeout(lt,c))})},{name:"timerBaseFx",sid:"-6dos97"}),g=b({and:{source:{timeoutId:O,rejectPromise:U},mapParams:(d,c)=>{var{timeoutId:y,rejectPromise:k}=c;return{timeout:d,timeoutId:y,rejectPromise:k}},effect:ct},or:{name:"timerFx",sid:"ca9mop"}});U.reset(g.done),O.reset(g.done);var dt=a([],{and:{serialize:"ignore"},name:"$payload",sid:"jthvlw"}).on(e,(d,c)=>[c]),z=a(!0,{and:{serialize:"ignore"},name:"$canTick",sid:"-rehy9s"}),T=r({name:"triggerTick",sid:"31ed0l"});z.on(T,()=>!1).on([D,i,g],()=>!0);var ut=gt([e,i],{name:"requestTick",sid:"7xoh8q"});return ft({and:[{clock:ut,filter:z,target:T}],or:{sid:"-1mcdjn"}}),o({and:[{source:i,clock:T,target:g}],or:{sid:"-1j1lzh"}}),o({and:[{source:dt,clock:g.done,fn:d=>{var[c]=d;return c},target:D}],or:{sid:"-1475yq"}}),D}function qt(t){if(q.store(t,{sid:"-mlqvq"}))return t;if(typeof t=="number"){if(t<0||!Number.isFinite(t))throw new Error('timeout must be positive number or zero. Received: "'.concat(t,'"'));return a(t,{and:{name:"$timeout"},sid:"-6oihcx"})}throw new TypeError('timeout parameter in interval method should be number or Store. "'.concat(typeof t,'" was passed'))}const X=t=>{const e=[];for(const[s,n]of Object.entries(t))if(s.includes(".")){const[i,p]=s.split(".");typeof n=="number"?e.push({[i]:{[p]:{eq:n}}}):e.push({[i]:{[p]:{contains:`${n}`}}})}else typeof n=="number"?e.push({[s]:{eq:n}}):e.push({[s]:{contains:`${n}`}});return{and:e}},v=(t,e=[])=>{let s=JSON.stringify(t);return e.forEach(n=>{const i=new RegExp(`"${String(n)}":"([^"]+)"`,"g");s=s.replace(i,`${String(n)}: $1`)}),s.replace(/"([^"]+)":/g,"$1:")},H=10,It=(t,e=null)=>{const s=v(e,["course"]);return`query {
      students (take:${H}, skip: ${H*t}, where: ${s}, order: [{fullName:ASC}]){
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
    }`},bt=t=>`{
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
        }
      }
}`,Rt=(t=null)=>`{
      students(where: ${v(t,["course"])}) {
        totalCount
      }
    }`,S=r(),Y=r(),N=a(0).on(Y,(t,e)=>e).on($.$filters,()=>0),A=b({source:{page:N,filters:$.$filters},effect:async({filters:t,page:e})=>{const{students:s}=await u(It(e,X(t)));return s}});Z({source:R(N,$.$filters),timeout:200,target:S});const h=b({source:{filters:$.$filters},effect:async({filters:t})=>{const{students:e}=await u(Rt(X(t)));return e.totalCount}});Z({source:$.$filters,timeout:200,target:h});o({clock:S,target:A});o({clock:S,target:h});const I=a([]).on(A.doneData,(t,e)=>e.items),Vt=a(0).on(h.doneData,(t,e)=>e),jt=R(h.pending,A.pending,Boolean);o({clock:C.addVisitFx.doneData,source:I,filter:(t,{studentGuid:e})=>t.some(s=>s.studentGuid===e),fn:(t,e)=>{const s=JSON.parse(JSON.stringify(t)),n=s.find(i=>i.studentGuid===e.studentGuid);return++n.visits,s},target:I});const Kt={load:S,setPage:Y},Wt={$loading:jt,$pEStudents:I,$pEStudentsPage:N,$pEStudentsTotalCount:Vt},Ct=t=>`mutation addPointsToStudent{
        addPointsToStudent(
          input: ${v(t,["workType"])}
        ) {
          success
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,tt=r(),P=l(async t=>(await u(Ct(t)),t));o({clock:tt,target:P});o({clock:P.doneData,target:V.close});o({clock:P.failData,fn:()=>({message:"Не удалось добавить баллы",type:"failure",time:3e3}),target:m.evokePopUpMessage});const Zt={addAdditionPoints:tt},Nt={addAdditionPointsFx:P},At=t=>`mutation addRegulationPointsToStudent{
        addPointsForStandardToStudent(
          input: ${v(t,["standardType"])}
        ) {
          success
          errors {
            ... on Error {
              message
            }
          }
        }
      }`,et=r(),x=l(async t=>(await u(At(t)),t));o({clock:et,target:x});o({clock:x.doneData,target:V.close});o({clock:x.failData,fn:()=>({message:"Не удалось добавить норматив",type:"failure",time:3e3}),target:m.evokePopUpMessage});const Xt={addRegulationPoints:et},_t={addRegulationPointsFx:x},st=r(),nt=r(),ot=r(),w=l(async t=>{const{student:e}=await u(bt(t));return e});o({clock:st,target:w});const _=a(null).reset(nt),Ot=R(C.addVisitFx.pending,w.pending,Boolean);o({clock:[C.addVisitFx.doneData,Nt.addAdditionPointsFx.doneData,_t.addRegulationPointsFx.doneData],target:ot});o({clock:ot,source:_,filter:t=>!!t,fn:t=>t.studentGuid,target:w});o({clock:w.doneData,target:_});const Yt={$selectedStudent:_,$loading:Ot},te={setCurrentStudentId:st,resetStudentId:nt},Mt=()=>`query loadComp {
        competitions
      }`,Ut=t=>`mutation removeComp {
      deleteCompetition(input: { competitionName: "${t}" }) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `,rt=r(),at=r(),it=l(async()=>{const{competitions:t}=await u(Mt());return t}),E=l(async t=>(await u(Ut(t)),t));o({clock:at,target:E});o({clock:E.failData,fn:()=>({message:"Не удалось удалить соревнование",type:"failure",time:3e3}),target:m.evokePopUpMessage});o({clock:E.doneData,fn:()=>({message:"Соревнование удалено",type:"success",time:3e3}),target:m.evokePopUpMessage});o({clock:rt,target:it});const zt=a([]).on(it.doneData,(t,e)=>e).on(E.doneData,(t,e)=>t.filter(s=>s!==e)),ee={load:rt,remove:at},se={$competitions:zt},ne=({group:t,visits:e,additionalPoints:s,pointsForStandards:n})=>Math.round(t.visitValue*e+s+n),oe=({studentGuid:t})=>{const[e,s]=G.useState(new Date().toISOString()),n=new Date(new Date().getDate()-7*24*60*60*1e3).toISOString(),i=new Date().toISOString();return G.useEffect(()=>{s(new Date().toISOString())},[t]),F.jsxs(kt,{gap:"4px",children:[F.jsx(vt,{type:"date",minValue:n,maxValue:i,setValue:s,value:e}),F.jsx(St,{width:"100%",height:"36px",text:`Добавить посещение ${B(e,"numeric")}`,onClick:()=>wt.addVisit({studentGuid:t,date:B(e,"numeric")})})]})};export{oe as A,H as S,Kt as a,$ as b,Jt as c,Z as d,ee as e,Qt as f,Lt as g,ne as h,Wt as i,v as j,Dt as k,Ht as l,Yt as m,Zt as n,Xt as o,u as p,te as q,se as s};
