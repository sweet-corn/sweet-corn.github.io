(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52b69472","chunk-fd699fa0"],{"0fea":function(e,t,n){"use strict";n.d(t,"l",(function(){return i})),n.d(t,"n",(function(){return s})),n.d(t,"q",(function(){return l})),n.d(t,"p",(function(){return u})),n.d(t,"o",(function(){return c})),n.d(t,"f",(function(){return d})),n.d(t,"m",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"j",(function(){return m})),n.d(t,"g",(function(){return h})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return g})),n.d(t,"b",(function(){return y})),n.d(t,"k",(function(){return j})),n.d(t,"i",(function(){return O})),n.d(t,"h",(function(){return w}));var a=n("b775"),r=n("0f22"),o={version:"/app/version/page/list",versionAdd:"/app/version/add",versionPublish:"/app/version/publish",versionModify:"/app/version/modify",versionDel:"/app/version/del",fileToken:"/minio/file/token",fileUpload:"/minio/file/upload",areaTree:"/area/code/tree",pointList:"/disaster/point/page/list",option:"/option/page/list",optionAdd:"/option/add",optionItems:"/option/items",optionModify:"/option/modify",optionDel:"/option/del",user:"/user",role:"/role",service:"/service",permission:"/permission",permissionNoPager:"/permission/no-pager",orgTree:"/org/tree"};function i(e){return Object(a["b"])({url:r["a"]+o.version,method:"post",data:e})}function s(e){return Object(a["b"])({url:r["a"]+o.versionAdd,method:"post",data:e})}function l(e){return Object(a["b"])({url:r["a"]+o.versionPublish,method:"post",data:e})}function u(e){return Object(a["b"])({url:r["a"]+o.versionModify,method:"post",data:e})}function c(e){return Object(a["b"])({url:r["a"]+o.versionDel,method:"post",data:e})}function d(e){return Object(a["b"])({url:r["a"]+o.fileToken,method:"post",data:e})}function f(e){return Object(a["b"])({url:r["a"]+o.fileUpload,method:"post",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function p(e){return Object(a["b"])({url:r["a"]+o.areaTree,method:"post",data:e})}function m(e){return Object(a["b"])({url:r["a"]+o.pointList,method:"post",data:e})}function h(e){return Object(a["b"])({url:r["a"]+o.option,method:"post",data:e})}function b(e){return Object(a["b"])({url:r["a"]+o.optionAdd,method:"post",data:e})}function v(e){return Object(a["b"])({url:r["a"]+o.optionItems,method:"post",data:e})}function g(e){return Object(a["b"])({url:r["a"]+o.optionModify,method:"post",data:e})}function y(e){return Object(a["b"])({url:r["a"]+o.optionDel,method:"post",data:e})}function j(e){return Object(a["c"])({url:o.role,method:"get",params:e})}function O(e){return Object(a["c"])({url:o.permissionNoPager,method:"get",params:e})}function w(e){return Object(a["c"])({url:o.orgTree,method:"get",params:e})}},"85c1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{title:e.model&&e.model.versionId>0?"修改版本信息":"添加新版本",width:640,visible:e.visible,confirmLoading:e.loading},on:{ok:function(){e.$emit("ok")},cancel:function(){e.$emit("cancel")}}},[n("a-spin",{attrs:{spinning:e.loading}},[n("a-form",e._b({attrs:{form:e.form}},"a-form",e.formLayout,!1),[n("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"主键ID"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["versionId",{initialValue:0}],expression:"['versionId', { initialValue: 0 }]"}],attrs:{disabled:""}})],1),n("a-form-item",{attrs:{label:"app模块"}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["moduleCode",{rules:[{required:!0,message:"请选择一项！"}]}],expression:"['moduleCode',{rules: [{required: true, message: '请选择一项！'}]}]"}],attrs:{placeholder:"请选择",options:e.options}})],1),n("a-form-item",{attrs:{label:"App版本名称"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["versionName",{rules:[{required:!0,min:1,message:"请输入App版本名称！"}]}],expression:"['versionName', {rules: [{required: true, min: 1, message: '请输入App版本名称！'}]}]"}]})],1),n("a-form-item",{attrs:{label:"App版本号"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["versionNumber",{rules:[{required:!0,min:1,message:"请输入App版本号！"}]}],expression:"['versionNumber', {rules: [{required: true, min: 1, message: '请输入App版本号！'}]}]"}]})],1),n("a-form-item",{attrs:{label:"fileKey"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["fileKey",{rules:[{required:!0,min:1,message:"请上传文件"}]}],expression:"['fileKey', {rules: [{required: true, min: 1, message: '请上传文件'}]}]"}],attrs:{disabled:"",placeholder:"请上传文件"}})],1),n("a-form-item",{attrs:{label:"上传文件"}},[n("a-upload",{attrs:{name:"file",customRequest:e.customRequest,beforeUpload:e.beforeUpload,accept:".apk",fileList:e.fileList,remove:e.handleRemove},on:{change:e.handleChange}},[n("a-button",[n("a-icon",{attrs:{type:"upload"}}),e._v("上传APP ")],1)],1)],1)],1)],1)],1)},r=[],o=(n("b0c0"),n("88bc")),i=n.n(o),s=n("0fea"),l=["versionName","versionNumber","moduleCode","fileKey","versionId"],u={props:{visible:{type:Boolean,required:!0},loading:{type:Boolean,default:function(){return!1}},model:{type:Object,default:function(){return null}}},data:function(){return this.formLayout={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}}},{form:this.$form.createForm(this),options:[{title:"前端",key:"disaster-application-phablet"}],fileKey:"",fileList:[]}},created:function(){var e=this;l.forEach((function(t){return e.form.getFieldDecorator(t)})),this.$watch("model",(function(){e.model&&e.form.setFieldsValue(i()(e.model,l))}))},methods:{getFileKey:function(e){return Object(s["f"])({fileName:e,fileType:1,fileBucket:"apk",suffix:".apk"})},beforeUpload:function(e){this.fileList[0]=e,this.fileList.length=1},handleRemove:function(){this.fileList=[]},customRequest:function(e){var t=this;this.getFileKey(e.file.name).then((function(n){if(1e4===n.code){t.fileKey=n.data.fileKey,t.form.setFieldsValue({fileKey:n.data.fileKey});var a=new FormData;a.append("file",e.file),a.append("fileKey",n.data.fileKey),Object(s["m"])(a).then((function(e){1e4===e.code?t.$message.success(e.info):t.$message.error(e.info)}))}}))},handleChange:function(e){setTimeout((function(){e.file.status="done"}),1e3),e.file.status,"done"===e.file.status?this.$message.success("".concat(e.file.name," file uploaded successfully")):"error"===e.file.status&&this.$message.error("".concat(e.file.name," file upload failed."))}}},c=u,d=n("2877"),f=Object(d["a"])(c,a,r,!1,null,null,null);t["default"]=f.exports},"88bc":function(e,t,n){(function(t){var n=1/0,a=9007199254740991,r="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")();function d(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function f(e,t){var n=-1,a=e?e.length:0,r=Array(a);while(++n<a)r[n]=t(e[n],n,e);return r}function p(e,t){var n=-1,a=t.length,r=e.length;while(++n<a)e[r+n]=t[n];return e}var m=Object.prototype,h=m.hasOwnProperty,b=m.toString,v=c.Symbol,g=m.propertyIsEnumerable,y=v?v.isConcatSpreadable:void 0,j=Math.max;function O(e,t,n,a,r){var o=-1,i=e.length;n||(n=N),r||(r=[]);while(++o<i){var s=e[o];t>0&&n(s)?t>1?O(s,t-1,n,a,r):p(r,s):a||(r[r.length]=s)}return r}function w(e,t){return e=Object(e),x(e,t,(function(t,n){return n in e}))}function x(e,t,n){var a=-1,r=t.length,o={};while(++a<r){var i=t[a],s=e[i];n(s,i)&&(o[i]=s)}return o}function k(e,t){return t=j(void 0===t?e.length-1:t,0),function(){var n=arguments,a=-1,r=j(n.length-t,0),o=Array(r);while(++a<r)o[a]=n[t+a];a=-1;var i=Array(t+1);while(++a<t)i[a]=n[a];return i[t]=o,d(e,this,i)}}function N(e){return I(e)||A(e)||!!(y&&e&&e[y])}function q(e){if("string"==typeof e||K(e))return e;var t=e+"";return"0"==t&&1/e==-n?"-0":t}function A(e){return $(e)&&h.call(e,"callee")&&(!g.call(e,"callee")||b.call(e)==r)}var I=Array.isArray;function D(e){return null!=e&&L(e.length)&&!C(e)}function $(e){return F(e)&&D(e)}function C(e){var t=S(e)?b.call(e):"";return t==o||t==i}function L(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function F(e){return!!e&&"object"==typeof e}function K(e){return"symbol"==typeof e||F(e)&&b.call(e)==s}var P=k((function(e,t){return null==e?{}:w(e,f(O(t,1),q))}));e.exports=P}).call(this,n("c8ba"))},ec64:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-header-wrapper",[n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-page-search-wrapper"},[n("a-form",{attrs:{layout:"inline"}},[n("a-row",{attrs:{gutter:48}},[n("a-col",{attrs:{md:5,sm:24}},[n("a-form-item",{attrs:{label:"账号搜索"}},[n("a-input",{attrs:{placeholder:""},model:{value:e.queryParam.versionNumber,callback:function(t){e.$set(e.queryParam,"versionNumber",t)},expression:"queryParam.versionNumber"}})],1)],1),n("a-col",{attrs:{md:4,sm:24}},[n("a-form-item",{attrs:{label:"审核状态"}},[n("a-select",{attrs:{placeholder:"请选择","default-value":"0"},model:{value:e.queryParam.publishStatus,callback:function(t){e.$set(e.queryParam,"publishStatus",t)},expression:"queryParam.publishStatus"}},[n("a-select-option",{attrs:{value:0}},[e._v("全部")]),n("a-select-option",{attrs:{value:1}},[e._v("未发布")]),n("a-select-option",{attrs:{value:2}},[e._v("已发布")])],1)],1)],1),n("a-col",{attrs:{md:2,sm:24}},[n("span",{staticClass:"table-page-search-submitButtons"},[n("a-button",{attrs:{type:"primary"},on:{click:e.onSearch}},[e._v("搜索")])],1)]),n("a-col",{attrs:{md:4,sm:24}},[n("span",{staticClass:"table-page-search-submitButtons"},[n("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("添加账号")])],1)])],1)],1)],1),n("create-form",{ref:"createModal",attrs:{visible:e.visible,loading:e.confirmLoading,model:e.mdl},on:{cancel:e.handleCancel,ok:e.handleOk}}),n("a-table",{attrs:{columns:e.columns,"data-source":e.loadData,pagination:e.pagination,rowKey:"index",loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"status",fn:function(t){return n("span",{staticStyle:{color:"#007aff"}},[e._v(e._s(2==t?"已发布":"未发布"))])}},{key:"action",fn:function(t,a){return n("span",{},[n("a",{on:{click:function(t){return e.onEdit(a)}}},[e._v("编辑")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-popconfirm",{attrs:{title:"确定要删除该记录?"},on:{confirm:function(){return e.onDelete(a)}}},[n("a",{attrs:{href:"javascript:;"}},[e._v("删除")])])],1)}}])})],1)],1)},r=[],o=n("5530"),i=(n("159b"),n("c1df"),n("0fea")),s=n("85c1"),l=[{title:"编号",dataIndex:"index",scopedSlots:{customRender:"serial"}},{title:"App版本名称",dataIndex:"appVersionName"},{title:"App版本号",dataIndex:"appVersionNumber"},{title:"更新时间",dataIndex:"appUpdateDate",sorter:!0},{title:"发布状态",dataIndex:"appUpdateStatus",scopedSlots:{customRender:"status"}},{title:"操作",dataIndex:"action",width:"150px",scopedSlots:{customRender:"action"}}],u={name:"AccountList",components:{CreateForm:s["default"]},data:function(){return this.columns=l,{visible:!1,confirmLoading:!1,mdl:null,queryParam:{pageIndex:1,pageSize:10,versionNumber:"",publishStatus:0},loadData:[],pagination:{showTotal:function(e){return"共".concat(e,"条记录")}},loading:!1,options:[{title:"前端",key:"disaster-application-phablet"}]}},filters:{},created:function(){this.getData()},computed:{},methods:{getData:function(){var e=this;this.loading=!0,Object(i["l"])(this.queryParam).then((function(t){if(1e4===t.code){e.loading=!1,t.data.forEach((function(e,t){e.index=t+1}));var n=Object(o["a"])({},e.pagination);n.total=t.totalNum,e.loadData=t.data,e.pagination=n}}))},handleTableChange:function(e,t,n){var a=Object(o["a"])({},this.pagination);a.current=e.current,this.pagination=a,this.queryParam.pageIndex=e.current,this.getData()},onSearch:function(){this.getData()},handleAdd:function(){this.mdl=null,this.visible=!0},onEdit:function(e){this.visible=!0,this.mdl={versionName:e.appVersionName,versionNumber:e.appVersionNumber,moduleCode:e.appModuleCode,fileKey:e.appFileKey,versionId:e.appVersionId}},handleOk:function(){var e=this,t=this.$refs.createModal.form;this.confirmLoading=!0,t.validateFields((function(n,a){n?e.confirmLoading=!1:a.versionId>0?Object(i["p"])(a).then((function(n){1e4===n.code?(e.visible=!1,e.confirmLoading=!1,t.resetFields(),e.getData(),e.$message.success("修改成功")):e.$message.error(n.info)})):(delete a.versionId,Object(i["n"])(a).then((function(n){1e4===n.code?(e.visible=!1,e.confirmLoading=!1,t.resetFields(),e.getData(),e.$message.success("添加成功")):e.$message.error(n.info)})))}))},handleCancel:function(){this.visible=!1;var e=this.$refs.createModal.form;e.resetFields()},onDelete:function(e){var t=this;Object(i["o"])({versionId:e.appVersionId}).then((function(e){1e4===e.code?(t.$message.success("删除成功！"),t.getData()):t.$message.error("删除失败！")}))}}},c=u,d=n("2877"),f=Object(d["a"])(c,a,r,!1,null,null,null);t["default"]=f.exports}}]);