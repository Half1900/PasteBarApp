import{g as S,c as U}from"./index-G4hHUzwE.js";function z(a,d){for(var o=0;o<d.length;o++){const f=d[o];if(typeof f!="string"&&!Array.isArray(f)){for(const l in f)if(l!=="default"&&!(l in a)){const c=Object.getOwnPropertyDescriptor(f,l);c&&Object.defineProperty(a,l,c.get?c:{enumerable:!0,get:()=>f[l]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var O={exports:{}};(function(a,d){(function(o){o(U)})(function(o){o.registerHelper("wordChars","r",/[\w.]/),o.defineMode("r",function(f){function l(e){for(var n={},r=0;r<e.length;++r)n[e[r]]=!0;return n}var c=["NULL","NA","Inf","NaN","NA_integer_","NA_real_","NA_complex_","NA_character_","TRUE","FALSE"],g=["list","quote","bquote","eval","return","call","parse","deparse"],k=["if","else","repeat","while","function","for","in","next","break"],E=["if","else","repeat","while","function","for"];o.registerHelper("hintWords","r",c.concat(g,k));var A=l(c),w=l(g),N=l(k),I=l(E),y=/[+\-*\/^<>=!&|~$:]/,i;function s(e,n){i=null;var r=e.next();if(r=="#")return e.skipToEnd(),"comment";if(r=="0"&&e.eat("x"))return e.eatWhile(/[\da-f]/i),"number";if(r=="."&&e.eat(/\d/))return e.match(/\d*(?:e[+\-]?\d+)?/),"number";if(/\d/.test(r))return e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number";if(r=="'"||r=='"')return n.tokenize=L(r),"string";if(r=="`")return e.match(/[^`]+`/),"variable-3";if(r=="."&&e.match(/.(?:[.]|\d+)/))return"keyword";if(/[a-zA-Z\.]/.test(r)){e.eatWhile(/[\w\.]/);var t=e.current();return A.propertyIsEnumerable(t)?"atom":N.propertyIsEnumerable(t)?(I.propertyIsEnumerable(t)&&!e.match(/\s*if(\s+|$)/,!1)&&(i="block"),"keyword"):w.propertyIsEnumerable(t)?"builtin":"variable"}else return r=="%"?(e.skipTo("%")&&e.next(),"operator variable-2"):r=="<"&&e.eat("-")||r=="<"&&e.match("<-")||r=="-"&&e.match(/>>?/)?"operator arrow":r=="="&&n.ctx.argList?"arg-is":y.test(r)?r=="$"?"operator dollar":(e.eatWhile(y),"operator"):/[\(\){}\[\];]/.test(r)?(i=r,r==";"?"semi":null):null}function L(e){return function(n,r){if(n.eat("\\")){var t=n.next();return t=="x"?n.match(/^[a-f0-9]{2}/i):(t=="u"||t=="U")&&n.eat("{")&&n.skipTo("}")?n.next():t=="u"?n.match(/^[a-f0-9]{4}/i):t=="U"?n.match(/^[a-f0-9]{8}/i):/[0-7]/.test(t)&&n.match(/^[0-7]{1,2}/),"string-2"}else{for(var u;(u=n.next())!=null;){if(u==e){r.tokenize=s;break}if(u=="\\"){n.backUp(1);break}}return"string"}}}var h=1,x=2,v=4;function p(e,n,r){e.ctx={type:n,indent:e.indent,flags:0,column:r.column(),prev:e.ctx}}function m(e,n){var r=e.ctx;e.ctx={type:r.type,indent:r.indent,flags:r.flags|n,column:r.column,prev:r.prev}}function b(e){e.indent=e.ctx.indent,e.ctx=e.ctx.prev}return{startState:function(){return{tokenize:s,ctx:{type:"top",indent:-f.indentUnit,flags:x},indent:0,afterIdent:!1}},token:function(e,n){if(e.sol()&&(n.ctx.flags&3||(n.ctx.flags|=x),n.ctx.flags&v&&b(n),n.indent=e.indentation()),e.eatSpace())return null;var r=n.tokenize(e,n);return r!="comment"&&!(n.ctx.flags&x)&&m(n,h),(i==";"||i=="{"||i=="}")&&n.ctx.type=="block"&&b(n),i=="{"?p(n,"}",e):i=="("?(p(n,")",e),n.afterIdent&&(n.ctx.argList=!0)):i=="["?p(n,"]",e):i=="block"?p(n,"block",e):i==n.ctx.type?b(n):n.ctx.type=="block"&&r!="comment"&&m(n,v),n.afterIdent=r=="variable"||r=="keyword",r},indent:function(e,n){if(e.tokenize!=s)return 0;var r=n&&n.charAt(0),t=e.ctx,u=r==t.type;return t.flags&v&&(t=t.prev),t.type=="block"?t.indent+(r=="{"?0:f.indentUnit):t.flags&h?t.column+(u?0:1):t.indent+(u?0:f.indentUnit)},lineComment:"#"}}),o.defineMIME("text/x-rsrc","r")})})();var _=O.exports;const j=S(_),$=z({__proto__:null,default:j},[_]);export{$ as r};
