import{d as m,K as i,c as D,o as g,e as v,g as _,f as e,w as r,i as d,_ as y}from"./index.1d217137.js";import{E as B,a as F}from"./el-table-column.95901fa4.js";/* empty css                    *//* empty css               */import{E as w}from"./el-link.d9af68be.js";import{E as C}from"./el-upload.c397a669.js";import"./el-progress.a4ef65f5.js";import{r as S,u as k}from"./xlsx.db07aefa.js";import"./_Uint8Array.c9a01e9e.js";import"./_initCloneObject.dbcbbc42.js";import"./isArrayLikeObject.a1b0afab.js";import"./hasIn.e82d5dd8.js";import"./index.b44c9ee3.js";import"./event.776e7e11.js";import"./isEqual.6c06b711.js";import"./flatten.abf4a111.js";import"./_baseIteratee.15aecd01.js";import"./index.2470b070.js";import"./cloneDeep.1887f93b.js";import"./_baseClone.14375065.js";const A={class:"container"},N={class:"handle-box"},j=d("\u6279\u91CF\u5BFC\u5165"),T=d("\u4E0B\u8F7D\u6A21\u677F"),V=m({name:"import"}),I=m({...V,setup(L){const u=i([]);(()=>{u.value=[{id:1,name:"\u5C0F\u660E",sno:"S001",class:"\u4E00\u73ED",age:"10",sex:"\u7537"},{id:2,name:"\u5C0F\u7EA2",sno:"S002",class:"\u4E00\u73ED",age:"9",sex:"\u5973"}]})();const p=i([]),f=async o=>(p.value=await E(o),!0),E=o=>new Promise(function(t,s){const n=new FileReader;n.onload=function(c){const a=c.target.result;let l=S(a,{type:"binary"});const h=l.SheetNames[0],x=k.sheet_to_json(l.Sheets[h]);t(x)},n.readAsBinaryString(o)}),b=async()=>{const o=p.value.map((t,s)=>({id:s,name:t.\u59D3\u540D,sno:t.\u5B66\u53F7,class:t.\u73ED\u7EA7,age:t.\u5E74\u9F84,sex:t.\u6027\u522B}));u.value.push(...o)};return(o,t)=>{const s=D,n=C,c=w,a=B,l=F;return g(),v("div",null,[_("div",A,[_("div",N,[e(n,{action:"#",limit:1,accept:".xlsx, .xls","show-file-list":!1,"before-upload":f,"http-request":b},{default:r(()=>[e(s,{class:"mr10",type:"success"},{default:r(()=>[j]),_:1})]),_:1}),e(c,{href:"/template.xlsx",target:"_blank"},{default:r(()=>[T]),_:1})]),e(l,{data:u.value,border:"",class:"table","header-cell-class-name":"table-header"},{default:r(()=>[e(a,{prop:"id",label:"ID",width:"55",align:"center"}),e(a,{prop:"name",label:"\u59D3\u540D"}),e(a,{prop:"sno",label:"\u5B66\u53F7"}),e(a,{prop:"class",label:"\u73ED\u7EA7"}),e(a,{prop:"age",label:"\u5E74\u9F84"}),e(a,{prop:"sex",label:"\u6027\u522B"})]),_:1},8,["data"])])])}}});const se=y(I,[["__scopeId","data-v-bcf2fe4a"]]);export{se as default};