import{g as _,c as E}from"./index-DjDASo7g.js";function w(a,d){for(var u=0;u<d.length;u++){const l=d[u];if(typeof l!="string"&&!Array.isArray(l)){for(const o in l)if(o!=="default"&&!(o in a)){const f=Object.getOwnPropertyDescriptor(l,o);f&&Object.defineProperty(a,o,f.get?f:{enumerable:!0,get:()=>l[o]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var z={exports:{}};(function(a,d){(function(u){u(E)})(function(u){u.defineMode("go",function(l){var o=l.indentUnit,f={break:!0,case:!0,chan:!0,const:!0,continue:!0,default:!0,defer:!0,else:!0,fallthrough:!0,for:!0,func:!0,go:!0,goto:!0,if:!0,import:!0,interface:!0,map:!0,package:!0,range:!0,return:!0,select:!0,struct:!0,switch:!0,type:!0,var:!0,bool:!0,byte:!0,complex64:!0,complex128:!0,float32:!0,float64:!0,int8:!0,int16:!0,int32:!0,int64:!0,string:!0,uint8:!0,uint16:!0,uint32:!0,uint64:!0,int:!0,uint:!0,uintptr:!0,error:!0,rune:!0,any:!0,comparable:!0},v={true:!0,false:!0,iota:!0,nil:!0,append:!0,cap:!0,close:!0,complex:!0,copy:!0,delete:!0,imag:!0,len:!0,make:!0,new:!0,panic:!0,print:!0,println:!0,real:!0,recover:!0},g=/[+\-*&^%:=<>!|\/]/,i;function p(e,r){var t=e.next();if(t=='"'||t=="'"||t=="`")return r.tokenize=b(t),r.tokenize(e,r);if(/[\d\.]/.test(t))return t=="."?e.match(/^[0-9_]+([eE][\-+]?[0-9_]+)?/):t=="0"?e.match(/^[xX][0-9a-fA-F_]+/)||e.match(/^[0-7_]+/):e.match(/^[0-9_]*\.?[0-9_]*([eE][\-+]?[0-9_]+)?/),"number";if(/[\[\]{}\(\),;\:\.]/.test(t))return i=t,null;if(t=="/"){if(e.eat("*"))return r.tokenize=x,x(e,r);if(e.eat("/"))return e.skipToEnd(),"comment"}if(g.test(t))return e.eatWhile(g),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var n=e.current();return f.propertyIsEnumerable(n)?((n=="case"||n=="default")&&(i="case"),"keyword"):v.propertyIsEnumerable(n)?"atom":"variable"}function b(e){return function(r,t){for(var n=!1,c,h=!1;(c=r.next())!=null;){if(c==e&&!n){h=!0;break}n=!n&&e!="`"&&c=="\\"}return(h||!(n||e=="`"))&&(t.tokenize=p),"string"}}function x(e,r){for(var t=!1,n;n=e.next();){if(n=="/"&&t){r.tokenize=p;break}t=n=="*"}return"comment"}function m(e,r,t,n,c){this.indented=e,this.column=r,this.type=t,this.align=n,this.prev=c}function s(e,r,t){return e.context=new m(e.indented,r,t,null,e.context)}function y(e){if(e.context.prev){var r=e.context.type;return(r==")"||r=="]"||r=="}")&&(e.indented=e.context.indented),e.context=e.context.prev}}return{startState:function(e){return{tokenize:null,context:new m((e||0)-o,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,r){var t=r.context;if(e.sol()&&(t.align==null&&(t.align=!1),r.indented=e.indentation(),r.startOfLine=!0,t.type=="case"&&(t.type="}")),e.eatSpace())return null;i=null;var n=(r.tokenize||p)(e,r);return n=="comment"||(t.align==null&&(t.align=!0),i=="{"?s(r,e.column(),"}"):i=="["?s(r,e.column(),"]"):i=="("?s(r,e.column(),")"):i=="case"?t.type="case":(i=="}"&&t.type=="}"||i==t.type)&&y(r),r.startOfLine=!1),n},indent:function(e,r){if(e.tokenize!=p&&e.tokenize!=null)return u.Pass;var t=e.context,n=r&&r.charAt(0);if(t.type=="case"&&/^(?:case|default)\b/.test(r))return e.context.type="}",t.indented;var c=n==t.type;return t.align?t.column+(c?0:1):t.indented+(c?0:o)},electricChars:"{}):",closeBrackets:"()[]{}''\"\"``",fold:"brace",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}),u.defineMIME("text/x-go","go")})})();var k=z.exports;const C=_(k),S=w({__proto__:null,default:C},[k]);export{S as g};
