import{ax as m,b8 as y,d as u,P as h,M as b,o as a,e as i,Z as r,w as v,ay as C,u as o,b as E,am as t,n as c,ak as d,X as _,av as g}from"./index.1d217137.js";const w=m({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:y}}),B={click:l=>l instanceof MouseEvent},L=["href"],P=u({name:"ElLink"}),$=u({...P,props:w,emits:B,setup(l,{emit:p}){const s=l,n=h("link"),f=b(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function k(e){s.disabled||p("click",e)}return(e,I)=>(a(),i("a",{class:c(o(f)),href:e.disabled||!e.href?void 0:e.href,onClick:k},[e.icon?(a(),r(o(E),{key:0},{default:v(()=>[(a(),r(C(e.icon)))]),_:1})):t("v-if",!0),e.$slots.default?(a(),i("span",{key:1,class:c(o(n).e("inner"))},[d(e.$slots,"default")],2)):t("v-if",!0),e.$slots.icon?d(e.$slots,"icon",{key:2}):t("v-if",!0)],10,L))}});var S=_($,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const N=g(S);export{N as E};