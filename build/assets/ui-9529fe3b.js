import{d as at,u as o,y as p,x as r,p as i,b2 as w,b7 as E,b5 as it,b4 as dt,m as b,s as ct,r as ut,j as P}from"./vendor-1d6bafc4.js";import{q as lt,r as mt,m as F,f as pt,B as gt,l as O}from"./index-0f16aa88.js";const B=10,ft="http://45.10.42.218:3333/graphql/",D=at.create({baseURL:ft}),$t={headers:{"Content-Type":"application/json"}};D.interceptors.request.use(lt);D.interceptors.response.use(t=>t,mt);const u=async t=>{const e=await D.post("",{query:t},$t);if(e.data.errors)throw new Error("Request error");return e.data.data},St=({studentGuid:t,date:e})=>`mutation IncreaseStudentVisits {
    increaseStudentVisits(input: { studentGuid: "${t}", date: "${e}" }) {
      success
    }
  }  
`,H=o(),j=p(async t=>(await u(St(t)),t));r({clock:H,target:j});r({clock:j.doneData,target:F.close});const yt={addVisit:H},V={addVisitFx:j},J=o(),vt=i("").on(J,(t,e)=>e),_t={update:J},ht={$search:vt},Q=o(),xt=i({}).on(ht.$search,(t,e)=>({...t,fullName:e})).on(Q,(t,{name:e,value:s})=>{const n={...t};return s?{...n,[e]:s}:(delete n[e],n)}),g={$filters:xt},Ct={addFilter:Q},U=o(),kt=i(!1).on(U,(t,e)=>e),Gt={$isExam:kt},zt={setIsExam:U};function L(t){var{source:e,timeout:s,target:n}=t;if(!w.unit(e))throw new TypeError("source must be unit from effector");if(w.domain(e,{sid:"k76nst"}))throw new TypeError("source cannot be domain");var a=Pt(s),l=o({name:"saveTimeoutId",sid:"vsg63k"}),_=i(null,{and:{serialize:"ignore"},name:"$timeoutId",sid:"lhz3ie"}).on(l,(c,d)=>d),C=o({name:"saveReject",sid:"qddkx3"}),G=i(null,{and:{serialize:"ignore"},name:"$rejecter",sid:"-o8m8p2"}).on(C,(c,d)=>d),x=n??o({name:"tick",sid:"a51tok"}),et=p(c=>{var{timeout:d,timeoutId:f,rejectPromise:$}=c;return f&&clearTimeout(f),$&&$(),new Promise((ot,rt)=>{C(rt),l(setTimeout(ot,d))})},{name:"timerBaseFx",sid:"-6dos97"}),m=E({and:{source:{timeoutId:_,rejectPromise:G},mapParams:(c,d)=>{var{timeoutId:f,rejectPromise:$}=d;return{timeout:c,timeoutId:f,rejectPromise:$}},effect:et},or:{name:"timerFx",sid:"ca9mop"}});G.reset(m.done),_.reset(m.done);var st=i([],{and:{serialize:"ignore"},name:"$payload",sid:"jthvlw"}).on(e,(c,d)=>[d]),z=i(!0,{and:{serialize:"ignore"},name:"$canTick",sid:"-rehy9s"}),k=o({name:"triggerTick",sid:"31ed0l"});z.on(k,()=>!1).on([x,a,m],()=>!0);var nt=it([e,a],{name:"requestTick",sid:"7xoh8q"});return dt({and:[{clock:nt,filter:z,target:k}],or:{sid:"-1mcdjn"}}),r({and:[{source:a,clock:k,target:m}],or:{sid:"-1j1lzh"}}),r({and:[{source:st,clock:m.done,fn:c=>{var[d]=c;return d},target:x}],or:{sid:"-1475yq"}}),x}function Pt(t){if(w.store(t,{sid:"-mlqvq"}))return t;if(typeof t=="number"){if(t<0||!Number.isFinite(t))throw new Error('timeout must be positive number or zero. Received: "'.concat(t,'"'));return i(t,{and:{name:"$timeout"},sid:"-6oihcx"})}throw new TypeError('timeout parameter in interval method should be number or Store. "'.concat(typeof t,'" was passed'))}const M=t=>{const e=[];for(const[s,n]of Object.entries(t))if(s.includes(".")){const[a,l]=s.split(".");typeof n=="number"?e.push({[a]:{[l]:{eq:n}}}):e.push({[a]:{[l]:{contains:`${n}`}}})}else typeof n=="number"?e.push({[s]:{eq:n}}):e.push({[s]:{contains:`${n}`}});return{and:e}},S=(t,e=[])=>{let s=JSON.stringify(t);return e.forEach(n=>{const a=new RegExp(`"${String(n)}":"([^"]+)"`,"g");s=s.replace(a,`${String(n)}: $1`)}),s.replace(/"([^"]+)":/g,"$1:")},wt=(t,e=null)=>{const s=S(e,["course"]);return`{
      students (take:${B}, skip: ${B*t}, where: ${s}, order: [{fullName:ASC}]){
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
        }
        totalCount
      }
    }`},Tt=t=>`{
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
}`,Et=(t=null)=>`{
      students(where: ${S(t,["course"])}) {
        totalCount
      }
    }`,y=o(),W=o(),I=i(0).on(W,(t,e)=>e).on(g.$filters,()=>0),q=E({source:{page:I,filters:g.$filters},effect:async({filters:t,page:e})=>{const{students:s}=await u(wt(e,M(t)));return s}});L({source:b(I,g.$filters),timeout:200,target:y});const v=E({source:{filters:g.$filters},effect:async({filters:t})=>{const{students:e}=await u(Et(M(t)));return e.totalCount}});L({source:g.$filters,timeout:200,target:v});r({clock:y,target:q});r({clock:y,target:v});const T=i([]).on(q.doneData,(t,e)=>e.items),bt=i(0).on(v.doneData,(t,e)=>e),Ft=b(v.pending,q.pending,Boolean);r({clock:V.addVisitFx.doneData,source:T,filter:(t,{studentGuid:e})=>t.some(s=>s.studentGuid===e),fn:(t,e)=>{const s=JSON.parse(JSON.stringify(t)),n=s.find(a=>a.studentGuid===e.studentGuid);return++n.visits,s},target:T});const Ot={load:y,setPage:W},Bt={$loading:Ft,$pEStudents:T,$pEStudentsPage:I,$pEStudentsTotalCount:bt},Dt=t=>`mutation addPointsToStudent{
        addPointsToStudent(
          input: ${S(t,["workType"])}
        ) {
          success
        }
      }`,Z=o(),R=p(async t=>(await u(Dt(t)),t));r({clock:Z,target:R});r({clock:R.doneData,target:F.close});const Ht={addAdditionPoints:Z},jt={addAdditionPointsFx:R},Vt=t=>`mutation addRegulationPointsToStudent{
        addPointsForStandardToStudent(
          input: ${S(t,["standardType"])}
        ) {
          success
          errors {
            __typename
          }
        }
      }`,K=o(),A=p(async t=>(await u(Vt(t)),t));r({clock:K,target:A});r({clock:A.doneData,target:F.close});const Jt={addRegulationPoints:K},It={addRegulationPointsFx:A},X=o(),Y=o(),tt=o(),h=p(async t=>{const{student:e}=await u(Tt(t));return e});r({clock:X,target:h});const N=i(null).reset(Y),qt=b(V.addVisitFx.pending,h.pending,Boolean);r({clock:[V.addVisitFx.doneData,jt.addAdditionPointsFx.doneData,It.addRegulationPointsFx.doneData],target:tt});r({clock:tt,source:N,filter:t=>!!t,fn:t=>t.studentGuid,target:h});r({clock:h.doneData,target:N});const Qt={$selectedStudent:N,$loading:qt},Ut={setCurrentStudentId:X,resetStudentId:Y},Lt=({group:t,visits:e,additionalPoints:s,pointsForStandards:n})=>Math.round(t.visitValue*e+s+n),Rt=ct.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    input {
        height: auto !important;
    }
`,Mt=({studentGuid:t})=>{const[e,s]=ut.useState(new Date().toISOString()),n=new Date(new Date().getDate()-7*24*60*60*1e3).toISOString(),a=new Date().toISOString();return P.jsxs(Rt,{children:[P.jsx(pt,{type:"date",minValue:n,maxValue:a,setValue:s,value:e}),P.jsx(gt,{text:`Добавить посещение ${O(e,"numeric")}`,onClick:()=>yt.addVisit({studentGuid:t,date:O(e,"numeric")})})]})};export{Mt as A,B as S,Gt as a,zt as b,Lt as c,Bt as d,Ct as e,ht as f,Ot as g,_t as h,Qt as i,S as j,Ht as k,Jt as l,Ut as m,u as p,g as s};
