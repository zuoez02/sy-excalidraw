(this.webpackJsonpexcalidraw_widget_v2=this.webpackJsonpexcalidraw_widget_v2||[]).push([[0],{32:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var r=n(9),a=window||e,c=function(){var e,t,n,c,o,i=Object(r.b)();if(i===r.a.oceanPress)return null===(e=a.frameElement)||void 0===e||null===(t=e.parentElement)||void 0===t?void 0:t.dataset.nId;if(i===r.a.siYuan)return null===(n=a.frameElement)||void 0===n||null===(c=n.parentElement)||void 0===c||null===(o=c.parentElement)||void 0===o?void 0:o.dataset.nodeId;if(i===r.a.unknown);else;}}).call(this,n(19))},37:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(12),o=n.n(c),i=(n(37),n(2)),u=n.n(i),s=n(5),l=n(7),d=n(32),p=n(14),f=n.n(p),b=n(6),j={appState:{viewBackgroundColor:"#fff9db",currentItemFontFamily:1},scrollToContent:!0},v=n(4),h=n.n(v),O=n(18),g=n(17),m=[function(e){return e},function(e){console.log(e)}],w=[function(e){return e},function(e){console.log(e)}],x={200102311:{err_code:"200102311",status:"error",err_msg:"this is a net err",callback:function(){}},3333333:{err_code:"333333",status:"error",err_msg:"\u6ca1\u6709\u547d\u4e2d\u9519\u8bef\u7801",callback:function(){}}};Object.freeze(x);var y,k,_=function(e){if(0===+e)return!1;var t=e in x?x[e]:x[3333333],n=t.err_code,r=t.status,a=t.err_msg;return(0,t.callback)(),{err_code:n,status:r,err_msg:a}};function I(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h()({method:"post",headers:Object(O.a)(Object(O.a)({},h.a.defaults.headers),n),url:e,data:t}).then((function(e){var t,n=_(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.code);return n?Promise.reject(n):Promise.resolve(null===e||void 0===e?void 0:e.data)})).catch((function(e){return Promise.reject(e)}))}h.a.defaults.baseURL="http://127.0.0.1:6806",h.a.defaults.headers["Content-Type"]="application/json",h.a.defaults.timeout=1e4,(y=h.a.interceptors.response).use.apply(y,Object(g.a)(m)),(k=h.a.interceptors.request).use.apply(k,Object(g.a)(w));var S=function(){var e=Object(s.a)(u.a.mark((function e(t){var n,r,a,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"/assets/",(r=new FormData).append("assetsDirPath",n),r.append("file[]",t),e.prev=4,e.next=7,I("/api/asset/upload",r,{"Content-Type":"multipart/form-data; boundary=----WebKitFormBoundarywQfr1gRNyYgeIt9h"});case 7:return a=e.sent,e.abrupt("return",a.data);case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.a.get(t,{}).then((function(e){return e?e.data:void 0})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I("/api/attr/setBlockAttrs",{id:"".concat(t),attrs:n});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I("/api/attr/getBlockAttrs",{id:"".concat(t)});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),F=(n(80),n(0)),N=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDay();return"".concat(t,"-").concat(n,"-").concat(r,"_").concat(Date.now())},M=function(){return Object(F.jsx)(F.Fragment,{})};function P(){Object(r.useEffect)((function(){console.log("\u611f\u8c22\u7684Excalidraw\u548cReact KUI\u7684\u652f\u6301\uff01"),console.log("author: bearxz & github:https://github.com/bearxz! ")}),[]);var e=Object(r.useRef)(null),t=Object(r.useState)(!1),n=Object(l.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(!1),i=Object(l.a)(o,2),v=i[0],h=i[1],O=Object(r.useState)(!1),g=Object(l.a)(O,2),m=g[0],w=g[1],x=Object(r.useState)("light"),y=Object(l.a)(x,2),k=y[0],_=y[1],I=Object(r.useState)(navigator.language),P=Object(l.a)(I,2),A=P[0],B=P[1],T=Object(r.useMemo)((function(){return Object(d.a)()}),[]),D=Object(r.useState)(j),Y=Object(l.a)(D,2),R=Y[0],U=Y[1];function J(){return(J=Object(s.a)(u.a.mark((function t(){var n,r,a,c,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Blob([Object(p.serializeAsJSON)(e.current.getSceneElements(),e.current.getAppState())],{type:"application/json"}),r=T+".excalidraw",a=new File([n],r),t.next=5,S(a);case 5:c=t.sent,o=c.succMap[r],z(T,{"custom-excalidraw":o}),e.current.setToastMessage("\u4fdd\u5b58\u6210\u529f");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){function e(){return(e=Object(s.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(T);case 2:t=e.sent,(n=t["custom-excalidraw"])&&E(n).then((function(e){U(e)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[T]),Object(F.jsx)("div",{className:"App",children:Object(F.jsx)("div",{className:"excalidraw-wrapper",onBlur:function(){},children:Object(F.jsx)(f.a,{ref:e,initialData:R,viewModeEnabled:a,zenModeEnabled:v,gridModeEnabled:m,theme:k,name:N(),UIOptions:{canvasActions:{loadScene:!0,theme:!0}},renderTopRightUI:function(){return function(e,t,n,r){var a=r.onLanguage,c=r.setTheme,o=r.setGrid,i=r.setView,u=(r.setZen,r.saveFile);return Object(F.jsxs)("div",{className:"excalidraw_top-right_wrap",children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("select",{defaultValue:navigator.language,className:"excalidraw_top-right_select",onChange:function(e){a(e.target.value)},children:p.languages.map((function(e){return Object(F.jsx)("option",{value:e.code,children:e.label},e.code)}))}),Object(F.jsx)("button",{className:"excalidraw_top-right_button",onClick:function(){return window.open("https://excalidraw.com/","_blank")},children:"excalidraw"})]}),Object(F.jsxs)("div",{className:"excalidraw_top-right_function",children:[Object(F.jsx)("div",{title:"\u89c6\u56fe\u6a21\u5f0f",onClick:function(){i()},children:n?Object(F.jsx)(b.Icon,{type:"eye",size:"18"}):Object(F.jsx)(b.Icon,{type:"eye-outline",size:"18"})}),Object(F.jsx)("div",{title:"\u4e3b\u9898",onClick:function(){c()},children:"light"===e?Object(F.jsx)(b.Icon,{type:"contrast-outline",size:"18"}):Object(F.jsx)(b.Icon,{type:"contrast",size:"18"})}),Object(F.jsx)("div",{title:"\u7f51\u683c\u6a21\u5f0f",onClick:function(){o()},children:t?Object(F.jsx)(b.Icon,{type:"grid",size:"18"}):Object(F.jsx)(b.Icon,{type:"grid-outline",size:"18"})}),Object(F.jsx)("div",{title:"\u4fdd\u5b58",onClick:function(){u()},children:Object(F.jsx)(b.Icon,{type:"file-tray-full-outline",size:"18",color:"#f00"})})]})]})}(k,m,a,{onLanguage:function(e){return B(e)},setTheme:function(){_("light"===k?"dark":"light")},setGrid:function(){return w(!m)},setView:function(){return c(!a)},setZen:function(){return h(!v)},saveFile:function(){return function(){return J.apply(this,arguments)}()}})},renderFooter:M,langCode:A,autoFocus:!1,detectScroll:!0})})})}var A=function(){return Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(P,{})})};o.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(A,{})}),document.getElementById("root"))},9:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=window||e;function a(){try{var e;null===(e=r.parent)||void 0===e||e.document}catch(t){return c.unknown}return o("main[data-n-id]")?c.env.oceanPress:o(".protyle-content")&&o("[data-node-id]")?c.siYuan:c.unknown}var c={siYuan:"siYuan",oceanPress:"oceanPress",unknown:"unknown"};function o(e){var t;return null===(t=r.parent)||void 0===t?void 0:t.document.querySelector(e)}}).call(this,n(19))}},[[82,1,2]]]);
//# sourceMappingURL=main.9ee0a4c9.chunk.js.map