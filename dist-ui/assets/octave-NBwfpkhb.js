import{g as k,c as E}from"./main-BSh5dXDA.js";function w(u,a){for(var t=0;t<a.length;t++){const r=a[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in u)){const c=Object.getOwnPropertyDescriptor(r,i);c&&Object.defineProperty(u,i,c.get?c:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var y={exports:{}};(function(u,a){(function(t){t(E)})(function(t){t.defineMode("octave",function(){function r(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var i=new RegExp("^[\\+\\-\\*/&|\\^~<>!@'\\\\]"),c=new RegExp("^[\\(\\[\\{\\},:=;\\.]"),s=new RegExp("^((==)|(~=)|(<=)|(>=)|(<<)|(>>)|(\\.[\\+\\-\\*/\\^\\\\]))"),d=new RegExp("^((!=)|(\\+=)|(\\-=)|(\\*=)|(/=)|(&=)|(\\|=)|(\\^=))"),m=new RegExp("^((>>=)|(<<=))"),g=new RegExp("^[\\]\\)]"),h=new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*"),x=r(["error","eval","function","abs","acos","atan","asin","cos","cosh","exp","log","prod","sum","log10","max","min","sign","sin","sinh","sqrt","tan","reshape","break","zeros","default","margin","round","ones","rand","syn","ceil","floor","size","clear","zeros","eye","mean","std","cov","det","eig","inv","norm","rank","trace","expm","logm","sqrtm","linspace","plot","title","xlabel","ylabel","legend","text","grid","meshgrid","mesh","num2str","fft","ifft","arrayfun","cellfun","input","fliplr","flipud","ismember"]),v=r(["return","case","switch","else","elseif","end","endif","endfunction","if","otherwise","do","for","while","try","catch","classdef","properties","events","methods","global","persistent","endfor","endwhile","printf","sprintf","disp","until","continue","pkg"]);function l(e,n){return!e.sol()&&e.peek()==="'"?(e.next(),n.tokenize=o,"operator"):(n.tokenize=o,o(e,n))}function b(e,n){return e.match(/^.*%}/)?(n.tokenize=o,"comment"):(e.skipToEnd(),"comment")}function o(e,n){if(e.eatSpace())return null;if(e.match("%{"))return n.tokenize=b,e.skipToEnd(),"comment";if(e.match(/^[%#]/))return e.skipToEnd(),"comment";if(e.match(/^[0-9\.+-]/,!1)){if(e.match(/^[+-]?0x[0-9a-fA-F]+[ij]?/))return e.tokenize=o,"number";if(e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?[ij]?/)||e.match(/^[+-]?\d+([EeDd][+-]?\d+)?[ij]?/))return"number"}if(e.match(r(["nan","NaN","inf","Inf"])))return"number";var f=e.match(/^"(?:[^"]|"")*("|$)/)||e.match(/^'(?:[^']|'')*('|$)/);return f?f[1]?"string":"string error":e.match(v)?"keyword":e.match(x)?"builtin":e.match(h)?"variable":e.match(i)||e.match(s)?"operator":e.match(c)||e.match(d)||e.match(m)?null:e.match(g)?(n.tokenize=l,null):(e.next(),"error")}return{startState:function(){return{tokenize:o}},token:function(e,n){var f=n.tokenize(e,n);return(f==="number"||f==="variable")&&(n.tokenize=l),f},lineComment:"%",fold:"indent"}}),t.defineMIME("text/x-octave","octave")})})();var p=y.exports;const z=k(p),R=w({__proto__:null,default:z},[p]);export{R as o};
