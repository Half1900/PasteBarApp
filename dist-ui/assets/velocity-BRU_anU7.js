import{g as m,c as $}from"./index-DjDASo7g.js";function W(u,p){for(var l=0;l<p.length;l++){const t=p[l];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in u)){const f=Object.getOwnPropertyDescriptor(t,a);f&&Object.defineProperty(u,a,f.get?f:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var T={exports:{}};(function(u,p){(function(l){l($)})(function(l){l.defineMode("velocity",function(){function t(n){for(var e={},i=n.split(" "),r=0;r<i.length;++r)e[i[r]]=!0;return e}var a=t("#end #else #break #stop #[[ #]] #{end} #{else} #{break} #{stop}"),f=t("#if #elseif #foreach #set #include #parse #macro #define #evaluate #{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}"),h=t("$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent"),b=/[+\-*&%=<>!?:\/|]/;function s(n,e,i){return e.tokenize=i,i(n,e)}function c(n,e){var i=e.beforeParams;e.beforeParams=!1;var r=n.next();if(r=="'"&&!e.inString&&e.inParams)return e.lastTokenWasBuiltin=!1,s(n,e,d(r));if(r=='"'){if(e.lastTokenWasBuiltin=!1,e.inString)return e.inString=!1,"string";if(e.inParams)return s(n,e,d(r))}else{if(/[\[\]{}\(\),;\.]/.test(r))return r=="("&&i?e.inParams=!0:r==")"&&(e.inParams=!1,e.lastTokenWasBuiltin=!0),null;if(/\d/.test(r))return e.lastTokenWasBuiltin=!1,n.eatWhile(/[\w\.]/),"number";if(r=="#"&&n.eat("*"))return e.lastTokenWasBuiltin=!1,s(n,e,y);if(r=="#"&&n.match(/ *\[ *\[/))return e.lastTokenWasBuiltin=!1,s(n,e,g);if(r=="#"&&n.eat("#"))return e.lastTokenWasBuiltin=!1,n.skipToEnd(),"comment";if(r=="$")return n.eat("!"),n.eatWhile(/[\w\d\$_\.{}-]/),h&&h.propertyIsEnumerable(n.current())?"keyword":(e.lastTokenWasBuiltin=!0,e.beforeParams=!0,"builtin");if(b.test(r))return e.lastTokenWasBuiltin=!1,n.eatWhile(b),"operator";n.eatWhile(/[\w\$_{}@]/);var o=n.current();return a&&a.propertyIsEnumerable(o)?"keyword":f&&f.propertyIsEnumerable(o)||n.current().match(/^#@?[a-z0-9_]+ *$/i)&&n.peek()=="("&&!(f&&f.propertyIsEnumerable(o.toLowerCase()))?(e.beforeParams=!0,e.lastTokenWasBuiltin=!1,"keyword"):e.inString?(e.lastTokenWasBuiltin=!1,"string"):n.pos>o.length&&n.string.charAt(n.pos-o.length-1)=="."&&e.lastTokenWasBuiltin?"builtin":(e.lastTokenWasBuiltin=!1,null)}}function d(n){return function(e,i){for(var r=!1,o,k=!1;(o=e.next())!=null;){if(o==n&&!r){k=!0;break}if(n=='"'&&e.peek()=="$"&&!r){i.inString=!0,k=!0;break}r=!r&&o=="\\"}return k&&(i.tokenize=c),"string"}}function y(n,e){for(var i=!1,r;r=n.next();){if(r=="#"&&i){e.tokenize=c;break}i=r=="*"}return"comment"}function g(n,e){for(var i=0,r;r=n.next();){if(r=="#"&&i==2){e.tokenize=c;break}r=="]"?i++:r!=" "&&(i=0)}return"meta"}return{startState:function(){return{tokenize:c,beforeParams:!1,inParams:!1,inString:!1,lastTokenWasBuiltin:!1}},token:function(n,e){return n.eatSpace()?null:e.tokenize(n,e)},blockCommentStart:"#*",blockCommentEnd:"*#",lineComment:"##",fold:"velocity"}}),l.defineMIME("text/velocity","velocity")})})();var v=T.exports;const x=m(v),P=W({__proto__:null,default:x},[v]);export{P as v};
