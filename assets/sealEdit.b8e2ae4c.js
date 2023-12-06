import{ax as O,ai as U,d as A,P as X,N as V,aj as ee,o as d,e as y,ak as z,n as i,u as e,X as Y,L as Z,b8 as te,K as I,a6 as se,a3 as ue,at as ae,M as v,r as oe,am as x,g as _,al as L,Z as B,w as a,ay as le,b as P,f as t,aE as ne,aF as ie,t as M,i as l,av as re,aw as ce,c as pe,a as de,Y as _e,p as me,j as Fe,eb as G,a1 as H,_ as ve}from"./index.1d217137.js";import{E as fe}from"./el-card.146dba2b.js";import{E as Ee,a as he}from"./el-table-column.95901fa4.js";/* empty css                    *//* empty css               */import{E as Se}from"./el-divider.b3ead839.js";import{E as be,a as ye}from"./el-descriptions-item.0bc7332c.js";import{E as Ce}from"./index.517b5042.js";import{C as q}from"./event.776e7e11.js";import{u as ge}from"./index.4b327572.js";import{E as Be}from"./index.2fdcd11d.js";import{E as Ae}from"./index.570a5942.js";import"./_Uint8Array.c9a01e9e.js";import"./_initCloneObject.dbcbbc42.js";import"./isArrayLikeObject.a1b0afab.js";import"./hasIn.e82d5dd8.js";import"./index.b44c9ee3.js";import"./isEqual.6c06b711.js";import"./flatten.abf4a111.js";import"./_baseIteratee.15aecd01.js";import"./index.2470b070.js";import"./index.92a8df7b.js";import"./index.6a9b972d.js";import"./validator.0c079793.js";const ke=O({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),De={[q]:(m,h)=>[m,h].every(U)},we=A({name:"ElSteps"}),$e=A({...we,props:ke,emits:De,setup(m,{emit:h}){const u=m,r=X("steps"),{children:S,addChild:f,removeChild:o}=ge(Z(),"ElStep");return V(S,()=>{S.value.forEach((n,c)=>{n.setIndex(c)})}),ee("ElSteps",{props:u,steps:S,addStep:f,removeStep:o}),V(()=>u.active,(n,c)=>{h(q,n,c)}),(n,c)=>(d(),y("div",{class:i([e(r).b(),e(r).m(n.simple?"simple":n.direction)])},[z(n.$slots,"default")],2))}});var xe=Y($e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/steps.vue"]]);const ze=O({title:{type:String,default:""},icon:{type:te},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),Ie=A({name:"ElStep"}),Ne=A({...Ie,props:ze,setup(m){const h=m,u=X("step"),r=I(-1),S=I({}),f=I(""),o=se("ElSteps"),n=Z();ue(()=>{V([()=>o.props.active,()=>o.props.processStatus,()=>o.props.finishStatus],([s])=>{R(s)},{immediate:!0})}),ae(()=>{o.removeStep(j.uid)});const c=v(()=>h.status||f.value),p=v(()=>{const s=o.steps.value[r.value-1];return s?s.currentStatus:"wait"}),C=v(()=>o.props.alignCenter),k=v(()=>o.props.direction==="vertical"),E=v(()=>o.props.simple),F=v(()=>o.steps.value.length),D=v(()=>{var s;return((s=o.steps.value[F.value-1])==null?void 0:s.uid)===(n==null?void 0:n.uid)}),b=v(()=>E.value?"":o.props.space),w=v(()=>[u.b(),u.is(E.value?"simple":o.props.direction),u.is("flex",D.value&&!b.value&&!C.value),u.is("center",C.value&&!k.value&&!E.value)]),$=v(()=>{const s={flexBasis:U(b.value)?`${b.value}px`:b.value?b.value:`${100/(F.value-(C.value?0:1))}%`};return k.value||D.value&&(s.maxWidth=`${100/F.value}%`),s}),N=s=>{r.value=s},Q=s=>{const g=s==="wait",T={transitionDelay:`${g?"-":""}${150*r.value}ms`},K=s===o.props.processStatus||g?0:100;T.borderWidth=K&&!E.value?"1px":0,T[o.props.direction==="vertical"?"height":"width"]=`${K}%`,S.value=T},R=s=>{s>r.value?f.value=o.props.finishStatus:s===r.value&&p.value!=="error"?f.value=o.props.processStatus:f.value="wait";const g=o.steps.value[r.value-1];g&&g.calcProgress(f.value)},j=oe({uid:n.uid,currentStatus:c,setIndex:N,calcProgress:Q});return o.addStep(j),(s,g)=>(d(),y("div",{style:L(e($)),class:i(e(w))},[x(" icon & line "),_("div",{class:i([e(u).e("head"),e(u).is(e(c))])},[e(E)?x("v-if",!0):(d(),y("div",{key:0,class:i(e(u).e("line"))},[_("i",{class:i(e(u).e("line-inner")),style:L(S.value)},null,6)],2)),_("div",{class:i([e(u).e("icon"),e(u).is(s.icon||s.$slots.icon?"icon":"text")])},[z(s.$slots,"icon",{},()=>[s.icon?(d(),B(e(P),{key:0,class:i(e(u).e("icon-inner"))},{default:a(()=>[(d(),B(le(s.icon)))]),_:1},8,["class"])):e(c)==="success"?(d(),B(e(P),{key:1,class:i([e(u).e("icon-inner"),e(u).is("status")])},{default:a(()=>[t(e(ne))]),_:1},8,["class"])):e(c)==="error"?(d(),B(e(P),{key:2,class:i([e(u).e("icon-inner"),e(u).is("status")])},{default:a(()=>[t(e(ie))]),_:1},8,["class"])):e(E)?x("v-if",!0):(d(),y("div",{key:3,class:i(e(u).e("icon-inner"))},M(r.value+1),3))])],2)],2),x(" title & description "),_("div",{class:i(e(u).e("main"))},[_("div",{class:i([e(u).e("title"),e(u).is(e(c))])},[z(s.$slots,"title",{},()=>[l(M(s.title),1)])],2),e(E)?(d(),y("div",{key:0,class:i(e(u).e("arrow"))},null,2)):(d(),y("div",{key:1,class:i([e(u).e("description"),e(u).is(e(c))])},[z(s.$slots,"description",{},()=>[l(M(s.description),1)])],2))],2)],6))}});var J=Y(Ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/item.vue"]]);const Te=re(xe,{Step:J}),Pe=ce(J);const W=m=>(me("data-v-fccd123b"),m=m(),Fe(),m),Me={class:"container"},Ve={class:"head-box"},We=l("\u7528\u7AE0\u7533\u8BF7\u6807\u9898 "),je=l("\u5F85\u5904\u7406"),Ke=W(()=>_("div",{style:{flex:"1"}},null,-1)),Le=l("\u901A\u8FC7"),Ge=l("\u9A73\u56DE"),He=W(()=>_("div",null,"20231024098",-1)),Oe={class:"form-progress"},Ue=W(()=>_("div",{class:"title"},"\u5DF2\u7B49\u5F85\u65F6\u95F4:14\u5C0F\u65F638\u5206\u949F",-1)),Xe=l(" \u7533\u8BF7\u8BE6\u60C5 "),Ye=l("kooriookami"),Ze=l("18100000000"),qe=l("Suzhou"),Je=l(" 80000 "),Qe=l("\uFFE5888,888.00"),Re=l("kooriookami"),et=l("18100000000"),tt=l("Suzhou"),st=l(" 80000 "),ut=l("\uFFE5888,888.00"),at=l("\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F."),ot={class:"form_area"},lt=l("\u6211\u7684\u6587\u4EF6\u540D\u79F0 "),nt=l(" \u4E0B\u8F7D "),it=l(" \u5220\u9664 "),rt=A({name:"baseform"}),ct=A({...rt,setup(m){const h=I([{name:"\u9879\u76EE\u4EA4\u4ED8\u7533\u8BF7\u7528\u7AE0.pdf",type:"\u4E00\u822C\u9644\u4EF6",date:"\u4E0A\u4F20\u65F6\u95F4",bz:"\u4E0A\u4F20\u4EBA",size:"20M"},{name:"\u9879\u76EE\u4EA4\u4ED8\u7533\u8BF7\u7528\u7AE0.pdf",type:"\u4E00\u822C\u9644\u4EF6",date:"\u4E0A\u4F20\u65F6\u95F4",bz:"\u4E0A\u4F20\u4EBA",size:"20M"}]),u=r=>{Be.confirm("\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F","\u5220\u9664\u63D0\u793A",{type:"warning"}).then(()=>{Ae.success("\u5220\u9664\u6210\u529F"),h.value.splice(r,1)}).catch(()=>{})};return(r,S)=>{const f=Ce,o=pe,n=Pe,c=Te,p=be,C=ye,k=Se,E=de("WarnTriangleFilled"),F=Ee,D=he,b=fe,w=_e("permiss");return d(),y("div",Me,[_("div",Ve,[We,t(f,{class:"ml-2 ml20",type:"warning"},{default:a(()=>[je]),_:1}),Ke,t(o,{type:"primary"},{default:a(()=>[Le]),_:1}),t(o,null,{default:a(()=>[Ge]),_:1})]),He,_("div",Oe,[Ue,t(c,{active:1,"align-center":""},{default:a(()=>[t(n,{title:"\u66F2\u4E3D\u4E3D",description:"2023-11-1109:15:30",icon:e(G)},null,8,["icon"]),t(n,{title:"\u66F2\u4E3D\u4E3D",icon:e(G)},null,8,["icon"])]),_:1})]),t(b,{title:"\u7533\u8BF7\u8BE6\u60C5"},{header:a(()=>[Xe]),default:a(()=>[t(C,{title:"\u7533\u8BF7\u4FE1\u606F"},{default:a(()=>[t(p,{label:"\u6807\u9898:"},{default:a(()=>[Ye]),_:1}),t(p,{label:"\u6D41\u6C34\u53F7:"},{default:a(()=>[Ze]),_:1}),t(p,{label:"\u63D0\u4EA4\u4EBA:"},{default:a(()=>[qe]),_:1}),t(p,{label:"\u6240\u5C5E\u90E8\u95E8:"},{default:a(()=>[Je]),_:1}),t(p,{label:"\u7533\u8BF7\u65E5\u671F:"},{default:a(()=>[Qe]),_:1}),t(p,{label:"\u7528\u7AE0\u65F6\u95F4:"},{default:a(()=>[Re]),_:1}),t(p,{label:"\u7528\u7AE0\u7C7B\u578B:"},{default:a(()=>[et]),_:1}),t(p,{label:"\u5370\u7AE0\u6240\u5C5E\u516C\u53F8\u5168\u79F0:"},{default:a(()=>[tt]),_:1}),t(p,{label:"\u7528\u7AE0\u57CE\u5E02:"},{default:a(()=>[st]),_:1}),t(p,{label:"\u7528\u7AE0\u5730\u70B9:",span:4},{default:a(()=>[ut]),_:1}),t(p,{label:"\u7528\u7AE0\u4E1A\u52A1\u63CF\u8FF0:",span:4},{default:a(()=>[at]),_:1})]),_:1}),t(k),t(C,{title:"\u9644\u4EF6\u8BB0\u5F55"}),_("div",ot,[t(D,{data:h.value,class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:a(()=>[t(F,{prop:"name",label:"\u6587\u4EF6\u540D\u79F0",align:"center"},{default:a($=>[t(E,{style:{width:"1em",height:"1em","margin-right":"8px"}}),lt]),_:1}),t(F,{prop:"size",label:"\u6587\u4EF6\u5927\u5C0F",align:"center"}),t(F,{prop:"date",label:"\u4E0A\u4F20\u65F6\u95F4",align:"center"}),t(F,{prop:"bz",label:"\u4E0A\u4F20\u4EBA\u5458",align:"center"}),t(F,{prop:"type",label:"\u9644\u4EF6\u7C7B\u578B",align:"center"}),t(F,{label:"\u64CD\u4F5C",width:"220",align:"center",fixed:"right"},{default:a($=>[H((d(),B(o,{text:"",style:{color:"#409EFF"},onClick:N=>{}},{default:a(()=>[nt]),_:2},1032,["onClick"])),[[w,16]]),H((d(),B(o,{text:"",class:"red",style:{color:"#F56C6C"},onClick:N=>u($.$index)},{default:a(()=>[it]),_:2},1032,["onClick"])),[[w,16]])]),_:1})]),_:1},8,["data"])])]),_:1})])}}});const Tt=ve(ct,[["__scopeId","data-v-fccd123b"]]);export{Tt as default};