import{g as b,c as w,r as S,a as E}from"./index-G4hHUzwE.js";function O(l,v){for(var r=0;r<v.length;r++){const s=v[r];if(typeof s!="string"&&!Array.isArray(s)){for(const u in s)if(u!=="default"&&!(u in l)){const i=Object.getOwnPropertyDescriptor(s,u);i&&Object.defineProperty(l,u,i.get?i:{enumerable:!0,get:()=>s[u]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var T={exports:{}};(function(l,v){(function(r){r(w,S(),E())})(function(r){function s(i,c,a,o){this.state=i,this.mode=c,this.depth=a,this.prev=o}function u(i){return new s(r.copyState(i.mode,i.state),i.mode,i.depth,i.prev&&u(i.prev))}r.defineMode("jsx",function(i,c){var a=r.getMode(i,{name:"xml",allowMissing:!0,multilineTagIndentPastTag:!1,allowMissingTagName:!0}),o=r.getMode(i,c&&c.base||"javascript");function j(e){var n=e.tagName;e.tagName=null;var t=a.indent(e,"","");return e.tagName=n,t}function g(e,n){return n.context.mode==a?x(e,n,n.context):y(e,n,n.context)}function x(e,n,t){if(t.depth==2)return e.match(/^.*?\*\//)?t.depth=1:e.skipToEnd(),"comment";if(e.peek()=="{"){a.skipAttribute(t.state);var f=j(t.state),p=t.state.context;if(p&&e.match(/^[^>]*>\s*$/,!1)){for(;p.prev&&!p.startOfLine;)p=p.prev;p.startOfLine?f-=i.indentUnit:t.prev.state.lexical&&(f=t.prev.state.lexical.indented)}else t.depth==1&&(f+=i.indentUnit);return n.context=new s(r.startState(o,f),o,0,n.context),null}if(t.depth==1){if(e.peek()=="<")return a.skipAttribute(t.state),n.context=new s(r.startState(a,j(t.state)),a,0,n.context),null;if(e.match("//"))return e.skipToEnd(),"comment";if(e.match("/*"))return t.depth=2,g(e,n)}var h=a.token(e,t.state),d=e.current(),k;return/\btag\b/.test(h)?/>$/.test(d)?t.state.context?t.depth=0:n.context=n.context.prev:/^</.test(d)&&(t.depth=1):!h&&(k=d.indexOf("{"))>-1&&e.backUp(d.length-k),h}function y(e,n,t){if(e.peek()=="<"&&!e.match(/^<([^<>]|<[^>]*>)+,\s*>/,!1)&&o.expressionAllowed(e,t.state))return n.context=new s(r.startState(a,o.indent(t.state,"","")),a,0,n.context),o.skipExpression(t.state),null;var f=o.token(e,t.state);if(!f&&t.depth!=null){var p=e.current();p=="{"?t.depth++:p=="}"&&--t.depth==0&&(n.context=n.context.prev)}return f}return{startState:function(){return{context:new s(r.startState(o),o)}},copyState:function(e){return{context:u(e.context)}},token:g,indent:function(e,n,t){return e.context.mode.indent(e.context.state,n,t)},innerMode:function(e){return e.context}}},"xml","javascript"),r.defineMIME("text/jsx","jsx"),r.defineMIME("text/typescript-jsx",{name:"jsx",base:{name:"javascript",typescript:!0}})})})();var m=T.exports;const N=b(m),M=O({__proto__:null,default:N},[m]);export{M as j};
