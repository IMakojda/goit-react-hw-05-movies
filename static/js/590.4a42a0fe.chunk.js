"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[590,951],{8951:function(n,e,t){t.r(e),t.d(e,{ReviewDiv:function(){return i},SubTitleName:function(){return s}});var r,a,u=t(168),c=t(6031),i=c.ZP.div(r||(r=(0,u.Z)(["\npadding: 10px\n"]))),s=c.ZP.h3(a||(a=(0,u.Z)(["\nfont-size: 15px;\n"])))},7590:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(5861),a=t(8152),u=t(7757),c=t.n(u),i=t(2791),s=t(6871),o=t(4554),p=t(8951),f=t(184);function l(){var n=function(){var n=(0,s.UO)().movieId,e=(0,i.useState)(null),t=(0,a.Z)(e,2),u=t[0],p=t[1];return(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.oO)(n);case 3:t=e.sent,p(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),u}();return(0,f.jsx)(f.Fragment,{children:n&&n.length>0?(0,f.jsx)(p.ReviewDiv,{children:n.map((function(n){var e=n.id,t=n.content,r=n.author;return(0,f.jsxs)("div",{children:[(0,f.jsxs)(p.SubTitleName,{children:[r,":"]}),(0,f.jsxs)("p",{children:['"',t,'"']})]},e)}))}):(0,f.jsx)("p",{children:"NO reviews for this movie."})})}},4554:function(n,e,t){t.d(e,{Ai:function(){return f},Wg:function(){return h},a8:function(){return o},oO:function(){return w},y:function(){return d}});var r=t(5861),a=t(7757),u=t.n(a),c=t(4569),i=t.n(c);i().defaults.baseURL="https://api.themoviedb.org/3";var s="3284913a940180ec63ebc0044db949d5";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/week?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=590.4a42a0fe.chunk.js.map