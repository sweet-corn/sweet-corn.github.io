import{d as k,dU as H,r as Q,K as F,c as W,dV as X,a as g,b as Y,o as Z,e as ee,g as r,f as e,w as t,u as d,b4 as te,ef as oe,b6 as x,eg as le,eh as ae,i as o,t as D,p as ne,j as ue,_ as se}from"./index.7006beae.js";import{E as ie}from"./el-row.9e3de8b9.js";import{E as ce}from"./el-pagination.58242a6d.js";/* empty css                 *//* empty css               */import{E as re,a as de}from"./el-select.c051c043.js";import{E as _e,a as pe}from"./el-table-column.b489eee5.js";/* empty css                    */import{E as me}from"./el-link.6244f8ba.js";import{E as fe}from"./el-date-picker.27d61e34.js";import{E as he}from"./el-text.01c1db59.js";import{E as Ee}from"./el-col.c2c3ccdf.js";/* empty css                */import{f as ge}from"./index.49595ae6.js";import{E as be}from"./index.cb5fa4e8.js";import{E as ye}from"./index.bfa5536e.js";import{E as ve}from"./index.bd815bb4.js";import{E as Be}from"./index.b92c0819.js";import{E as Ce}from"./index.7b159d68.js";import"./isEqual.57f99950.js";import"./_Uint8Array.18199458.js";import"./strings.f6901f8b.js";import"./event.776e7e11.js";import"./scroll.4eabaed8.js";import"./_baseIteratee.96933136.js";import"./hasIn.33793410.js";import"./index.2d2aac23.js";import"./validator.d91f66e6.js";import"./_initCloneObject.c804f636.js";import"./isArrayLikeObject.57fd72bc.js";import"./index.8844491f.js";import"./flatten.6e8ce978.js";import"./_commonjsHelpers.712cc82f.js";import"./request.21d5eda1.js";import"./index.4c1eaae7.js";const w=p=>(ne("data-v-8cef92ad"),p=p(),ue(),p),Fe={class:"container"},xe=o("\u5458\u5DE5\u7BA1\u7406"),De=w(()=>r("div",{style:{height:"10px"}},null,-1)),ke={class:"handle-box"},we=o("\u641C\u7D22: "),Ve=o("\u72B6\u6001:"),Le=o("\u6700\u540E\u767B\u5F55:"),Ae=w(()=>r("div",{style:{height:"10px"}},null,-1)),Ie=o("\u804C\u52A1:"),Se=o("\u67E5\u8BE2"),Te=o("\u91CD\u7F6E"),Ue=o("\u65B0\u5EFA\u5458\u5DE5"),ze=o("\u4FEE\u6539\u90E8\u95E8"),Re=o(" \u4FEE\u6539\u804C\u52A1 "),Ne=o("\u8BBE\u7F6E\u72B6\u6001"),Pe=o(" \u91CD\u7F6E\u5BC6\u7801"),$e={style:{display:"flex","align-items":"center","Justify-content":"flex-end",flex:"1",gap:"10px"}},Me=o("\u7F16\u8F91\u8868\u683C"),je=o(" | "),qe=o("\u5237\u65B0"),Ge=o(" | "),Je=o("\u5BFC\u5165\u6570\u636E"),Ke=o("\u8BE6\u60C5"),Oe=o("\u7F16\u8F91"),He=o("\u8BBE\u7F6E"),Qe=o("\u5220\u9664"),We={class:"pagination"},Xe=k({name:"basetable"}),Ye=k({...Xe,setup(p){const b=H(),V=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],L=n=>{console.log(n)},a=Q({date:"",name:"",pageIndex:1,pageSize:10}),m=F([]),y=F(0),h=()=>{ge().then(n=>{m.value=[...n.data.list,...n.data.list,...n.data.list],y.value=m.value.length})};h();const A=()=>{a.pageIndex=1,h()},I=()=>{},S=n=>{a.pageIndex=n,h()},T=n=>{Be.confirm("\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F","\u5220\u9664\u63D0\u793A",{type:"warning"}).then(()=>{Ce.success("\u5220\u9664\u6210\u529F"),m.value.splice(n,1)}).catch(()=>{})},U=()=>{b.push("/platform/staff/staffAdd")},z=n=>{console.log(n),b.push("/platform/staff/staffDetail")};return(n,s)=>{const R=be,v=Ee,_=he,N=ye,f=re,B=de,P=fe,i=W,$=X,M=g("Document"),E=Y,c=me,j=g("RefreshRight"),q=g("Upload"),u=_e,C=ve,G=pe,J=ce,K=ie;return Z(),ee("div",null,[r("div",Fe,[e(K,null,{default:t(()=>[e(v,{span:5},{default:t(()=>[e(R,{data:V,onNodeClick:L})]),_:1}),e(v,{span:19},{default:t(()=>[e(_,{class:"big_title",size:"large"},{default:t(()=>[xe]),_:1}),De,r("div",ke,[e(_,{class:"mx-1 mr10"},{default:t(()=>[we]),_:1}),e(N,{modelValue:a.name,"onUpdate:modelValue":s[0]||(s[0]=l=>a.name=l),placeholder:"\u59D3\u540D/\u8D26\u53F7/\u624B\u673A",class:"handle-input mr10"},null,8,["modelValue"]),e(_,{class:"mx-1 ml20 mr10"},{default:t(()=>[Ve]),_:1}),e(B,{modelValue:a.type,"onUpdate:modelValue":s[1]||(s[1]=l=>a.type=l),placeholder:"\u9009\u62E9\u72B6\u6001",class:"mr10"},{default:t(()=>[e(f,{key:"1",label:"\u7C7B\u578B1",value:"1"}),e(f,{key:"2",label:"\u7C7B\u578B2",value:"2"})]),_:1},8,["modelValue"]),e(_,{class:"mx-1 ml20 mr10"},{default:t(()=>[Le]),_:1}),e(P,{modelValue:a.date,"onUpdate:modelValue":s[2]||(s[2]=l=>a.date=l),"end-placeholder":"\u9009\u62E9\u6700\u540E\u767B\u5F55\u65F6\u95F4",class:"mr10"},null,8,["modelValue"]),Ae,e(_,{class:"mx-1 mr10"},{default:t(()=>[Ie]),_:1}),e(B,{modelValue:a.type,"onUpdate:modelValue":s[3]||(s[3]=l=>a.type=l),placeholder:"\u9009\u62E9\u804C\u52A1",class:"mr10"},{default:t(()=>[e(f,{key:"1",label:"\u7C7B\u578B1",value:"1"}),e(f,{key:"2",label:"\u7C7B\u578B2",value:"2"})]),_:1},8,["modelValue"]),e(i,{type:"primary",icon:d(te),onClick:A,class:"ml20"},{default:t(()=>[Se]),_:1},8,["icon"]),e(i,{onClick:I},{default:t(()=>[Te]),_:1})]),r("div",null,[e(i,{class:"mt-4 mr10",type:"primary",icon:d(oe),onClick:U},{default:t(()=>[Ue]),_:1},8,["icon"]),e($,{style:{"margin-left":"30px"}},{default:t(()=>[e(i,{type:"info",icon:d(x)},{default:t(()=>[ze]),_:1},8,["icon"]),e(i,{type:"info",icon:d(x)},{default:t(()=>[Re]),_:1},8,["icon"]),e(i,{type:"info",icon:d(le)},{default:t(()=>[Ne]),_:1},8,["icon"]),e(i,{type:"info",icon:d(ae)},{default:t(()=>[Pe]),_:1},8,["icon"])]),_:1}),r("div",$e,[e(c,{type:"info"},{default:t(()=>[e(E,null,{default:t(()=>[e(M)]),_:1}),Me]),_:1}),je,e(c,{type:"info"},{default:t(()=>[e(E,null,{default:t(()=>[e(j)]),_:1}),qe]),_:1}),Ge,e(c,{type:"info"},{default:t(()=>[e(E,null,{default:t(()=>[e(q)]),_:1}),Je]),_:1})])]),e(G,{data:m.value,border:"",class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:t(()=>[e(u,{type:"selection",width:"55"}),e(u,{prop:"name",label:"\u59D3\u540D",align:"center",fixed:""}),e(u,{prop:"id",label:"\u90E8\u95E8",align:"center",sortable:""}),e(u,{prop:"id",label:"\u804C\u52A1",align:"center",sortable:""}),e(u,{prop:"name",label:"\u8D26\u53F7\u72B6\u6001",sortable:""},{default:t(l=>[e(C,{type:l.row.type==="\u6210\u529F"?"success":l.row.state==="\u5931\u8D25"?"danger":""},{default:t(()=>[o(D(l.row.state),1)]),_:2},1032,["type"])]),_:1}),e(u,{prop:"id",label:"\u624B\u673A",align:"center",sortable:""}),e(u,{prop:"name",label:"\u5728\u7EBF\u72B6\u6001",sortable:""},{default:t(l=>[e(C,{type:l.row.type==="\u6210\u529F"?"success":l.row.state==="\u5931\u8D25"?"danger":""},{default:t(()=>[o(D(l.row.state),1)]),_:2},1032,["type"])]),_:1}),e(u,{prop:"date",label:"\u6700\u540E\u767B\u5F55",align:"center"}),e(u,{label:"\u64CD\u4F5C",width:"220",align:"center",fixed:"right"},{default:t(l=>[e(c,{type:"info",style:{color:"#409EFF","margin-right":"10px"},onClick:O=>z(l)},{default:t(()=>[Ke]),_:2},1032,["onClick"]),e(c,{type:"info",style:{color:"#409EFF","margin-right":"10px"}},{default:t(()=>[Oe]),_:1}),e(c,{type:"info",style:{color:"#409EFF","margin-right":"10px"}},{default:t(()=>[He]),_:1}),e(c,{type:"info",style:{color:"#F56C6C"},onClick:O=>T(l.$index)},{default:t(()=>[Qe]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),r("div",We,[e(J,{background:"",layout:"total, prev, pager, next","current-page":a.pageIndex,"page-size":a.pageSize,total:y.value,onCurrentChange:S,"page-sizes":[8,16,24]},null,8,["current-page","page-size","total"])])]),_:1})]),_:1})])])}}});const Tt=se(Ye,[["__scopeId","data-v-8cef92ad"]]);export{Tt as default};