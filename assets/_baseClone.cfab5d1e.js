import{k as F,l as C,s as _,f as N,m as K,d as j,n as u,p as E,a as R,S as v,g as q}from"./_Uint8Array.18199458.js";import{aX as m,q as x,k as W,x as X,b2 as Y}from"./index.7006beae.js";import{c as T,k as p,g as H,e as B,d as J,a as Q,b as V,i as Z}from"./_initCloneObject.c804f636.js";function k(t,e){for(var n=-1,o=t==null?0:t.length;++n<o&&e(t[n],n,t)!==!1;);return t}function z(t,e){return t&&T(e,F(e),t)}function tt(t,e){return t&&T(e,p(e),t)}function et(t,e){return T(t,C(t),e)}var rt=Object.getOwnPropertySymbols,nt=rt?function(t){for(var e=[];t;)N(e,C(t)),t=H(t);return e}:_;const M=nt;function at(t,e){return T(t,M(t),e)}function ot(t){return K(t,p,M)}var st=Object.prototype,ct=st.hasOwnProperty;function it(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&ct.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function ft(t,e){var n=e?B(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var gt=/\w*$/;function bt(t){var e=new t.constructor(t.source,gt.exec(t));return e.lastIndex=t.lastIndex,e}var I=m?m.prototype:void 0,O=I?I.valueOf:void 0;function yt(t){return O?Object(O.call(t)):{}}var ut="[object Boolean]",Tt="[object Date]",lt="[object Map]",jt="[object Number]",pt="[object RegExp]",At="[object Set]",dt="[object String]",$t="[object Symbol]",St="[object ArrayBuffer]",mt="[object DataView]",It="[object Float32Array]",Ot="[object Float64Array]",wt="[object Int8Array]",ht="[object Int16Array]",Ft="[object Int32Array]",Ct="[object Uint8Array]",Et="[object Uint8ClampedArray]",xt="[object Uint16Array]",Bt="[object Uint32Array]";function Mt(t,e,n){var o=t.constructor;switch(e){case St:return B(t);case ut:case Tt:return new o(+t);case mt:return ft(t,n);case It:case Ot:case wt:case ht:case Ft:case Ct:case Et:case xt:case Bt:return J(t,n);case lt:return new o;case jt:case dt:return new o(t);case pt:return bt(t);case At:return new o;case $t:return yt(t)}}var Lt="[object Map]";function Ut(t){return x(t)&&j(t)==Lt}var w=u&&u.isMap,Pt=w?E(w):Ut;const Dt=Pt;var Gt="[object Set]";function _t(t){return x(t)&&j(t)==Gt}var h=u&&u.isSet,Nt=h?E(h):_t;const Kt=Nt;var Rt=1,vt=2,qt=4,L="[object Arguments]",Wt="[object Array]",Xt="[object Boolean]",Yt="[object Date]",Ht="[object Error]",U="[object Function]",Jt="[object GeneratorFunction]",Qt="[object Map]",Vt="[object Number]",P="[object Object]",Zt="[object RegExp]",kt="[object Set]",zt="[object String]",te="[object Symbol]",ee="[object WeakMap]",re="[object ArrayBuffer]",ne="[object DataView]",ae="[object Float32Array]",oe="[object Float64Array]",se="[object Int8Array]",ce="[object Int16Array]",ie="[object Int32Array]",fe="[object Uint8Array]",ge="[object Uint8ClampedArray]",be="[object Uint16Array]",ye="[object Uint32Array]",r={};r[L]=r[Wt]=r[re]=r[ne]=r[Xt]=r[Yt]=r[ae]=r[oe]=r[se]=r[ce]=r[ie]=r[Qt]=r[Vt]=r[P]=r[Zt]=r[kt]=r[zt]=r[te]=r[fe]=r[ge]=r[be]=r[ye]=!0;r[Ht]=r[U]=r[ee]=!1;function l(t,e,n,o,g,s){var a,b=e&Rt,y=e&vt,D=e&qt;if(n&&(a=g?n(t,o,g,s):n(t)),a!==void 0)return a;if(!W(t))return t;var A=X(t);if(A){if(a=it(t),!b)return Q(t,a)}else{var f=j(t),d=f==U||f==Jt;if(R(t))return V(t,b);if(f==P||f==L||d&&!g){if(a=y||d?{}:Z(t),!b)return y?at(t,tt(a,t)):et(t,z(a,t))}else{if(!r[f])return g?t:{};a=Mt(t,f,b)}}s||(s=new v);var $=s.get(t);if($)return $;s.set(t,a),Kt(t)?t.forEach(function(c){a.add(l(c,e,n,c,t,s))}):Dt(t)&&t.forEach(function(c,i){a.set(i,l(c,e,n,i,t,s))});var G=D?y?ot:q:y?p:F,S=A?void 0:G(t);return k(S||t,function(c,i){S&&(i=c,c=t[i]),Y(a,i,l(c,e,n,i,t,s))}),a}export{l as b};