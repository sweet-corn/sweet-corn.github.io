import{d as F,dU as A,r as z,K as p,c as I,Y as T,o as c,e as S,g as i,f as e,w as o,u as E,p as M,j as N,dZ as P,ea as R,a1 as b,Z as v,i as s,_ as V}from"./index.1d217137.js";import{E as Z}from"./el-pagination.dd2e61c8.js";/* empty css                 *//* empty css               */import"./el-select.059e5ae3.js";import{E as $,a as j}from"./el-table-column.95901fa4.js";/* empty css                    */import{E as q}from"./el-text.3696b5c5.js";import{f as K}from"./index.49595ae6.js";import{E as U}from"./index.2fdcd11d.js";import{E as Y}from"./index.570a5942.js";import"./isEqual.6c06b711.js";import"./_Uint8Array.c9a01e9e.js";import"./index.92a8df7b.js";import"./event.776e7e11.js";import"./index.517b5042.js";import"./strings.a52aca86.js";import"./_baseIteratee.15aecd01.js";import"./hasIn.e82d5dd8.js";import"./index.2470b070.js";import"./validator.0c079793.js";import"./_initCloneObject.dbcbbc42.js";import"./isArrayLikeObject.a1b0afab.js";import"./index.b44c9ee3.js";import"./flatten.abf4a111.js";import"./request.21d5eda1.js";import"./_commonjsHelpers.712cc82f.js";import"./index.6a9b972d.js";const G=l=>(M("data-v-6303680e"),l=l(),N(),l),H={class:"container"},J=G(()=>i("div",{class:"handle-box"},null,-1)),L=s("\u6295\u653E\u62A5\u544A"),O=s("\u4E0A\u4F20"),Q=s("\u6211\u7684\u6587\u4EF6\u540D\u79F0 "),W=s(" \u4E0B\u8F7D "),X=s(" \u5220\u9664 "),ee={class:"pagination"},te=F({name:"basetable"}),ae=F({...te,setup(l){const x=A(),u=z({date:"",name:"",type:"",pageIndex:1,pageSize:10}),n=p([]),_=p(0);p(!1);const d=()=>{K().then(t=>{n.value=[...t.data.list,...t.data.list],_.value=n.value.length})};d();const C=(t,m)=>{x.push({path:m})},y=t=>{u.pageIndex=t,d()},B=t=>{U.confirm("\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F","\u5220\u9664\u63D0\u793A",{type:"warning"}).then(()=>{Y.success("\u5220\u9664\u6210\u529F"),n.value.splice(t,1)}).catch(()=>{})};return(t,m)=>{const D=q,r=I,a=$,w=j,k=Z,g=T("permiss");return c(),S("div",null,[i("div",H,[J,i("div",null,[e(D,{class:"big_title",size:"large"},{default:o(()=>[L]),_:1}),e(r,{type:"primary",icon:E(P)},{default:o(()=>[O]),_:1},8,["icon"])]),e(w,{data:n.value,class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:o(()=>[e(a,{type:"index",label:"\u5E8F\u53F7",width:"80"}),e(a,{prop:"name",label:"\u6587\u4EF6\u540D\u79F0",align:"center"},{default:o(h=>[e(E(R),{style:{width:"1em",height:"1em","margin-right":"8px"}}),Q]),_:1}),e(a,{prop:"id",label:"\u6587\u4EF6\u7C7B\u578B",align:"center"}),e(a,{prop:"id",label:"\u6587\u4EF6\u5927\u5C0F",align:"center"}),e(a,{prop:"date",label:"\u4E0A\u4F20\u65F6\u95F4",align:"center"}),e(a,{prop:"bz",label:"\u4E0A\u4F20\u4EBA"}),e(a,{label:"\u64CD\u4F5C",width:"220",align:"center",fixed:"right"},{default:o(h=>[b((c(),v(r,{text:"",style:{color:"#409EFF"},onClick:f=>C(f,"/orderManage/closeCase/caseEdit")},{default:o(()=>[W]),_:2},1032,["onClick"])),[[g,16]]),b((c(),v(r,{text:"",class:"red",onClick:f=>B(h.$index)},{default:o(()=>[X]),_:2},1032,["onClick"])),[[g,16]])]),_:1})]),_:1},8,["data"]),i("div",ee,[e(k,{background:"",layout:"total, prev, pager, next","current-page":u.pageIndex,"page-size":u.pageSize,total:_.value,onCurrentChange:y,"page-sizes":[8,16,24]},null,8,["current-page","page-size","total"])])])])}}});const Ie=V(ae,[["__scopeId","data-v-6303680e"]]);export{Ie as default};