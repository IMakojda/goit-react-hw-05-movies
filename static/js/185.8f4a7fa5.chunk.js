"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[185,979],{185:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(5861),a=e(885),c=e(7757),u=e.n(c),i=e(2791),o=e(6871),s=e(4554),p=e(979),l=e(184);function f(){var n=function(){var n=(0,o.UO)().movieId,t=(0,i.useState)(null),e=(0,a.Z)(t,2),c=e[0],p=e[1];return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.y)(n);case 3:e=t.sent,p(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),c}();return(0,l.jsx)(l.Fragment,{children:n&&n.length>0?(0,l.jsx)(p.ListActors,{children:n.map((function(n){var t=n.id,e=n.profile_path,r=n.original_name,a=n.name,c=n.character;return(0,l.jsx)(p.LiItemActor,{children:(0,l.jsxs)("article",{children:[(0,l.jsx)(p.ImgActors,{src:"https://image.tmdb.org/t/p/w500/".concat(e||"wwemzKWzjKYJFfCeiB57q3r4Bcm.png"),alt:r}),(0,l.jsx)(p.SubTitle,{children:a}),(0,l.jsx)(p.SubTitle,{children:c})]})},t)}))}):(0,l.jsx)("p",{children:"Not reviews for movie."})})}},979:function(n,t,e){e.r(t),e.d(t,{ImgActors:function(){return l},LiItemActor:function(){return p},ListActors:function(){return s},SubTitle:function(){return f}});var r,a,c,u,i=e(168),o=e(6031),s=o.ZP.ul(r||(r=(0,i.Z)(["\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fill,minmax(180px,1fr));\n  justify-items: center;\n  list-style: none;\n  margin: 0 auto;\n  padding:10px;\n  max-width: calc(100vw - 48px);\n"]))),p=o.ZP.li(a||(a=(0,i.Z)(["\n  background-color: #282c34;\n  border-radius: 10px;\n  margin-top: 5px;\n  max-width: 180px;\n  padding: 5px;\n"]))),l=o.ZP.img(c||(c=(0,i.Z)(["\ndisplay:block;\nmax-width:100%;\nborder-radius:10px;\nmargin-bottom:3px;\n"]))),f=o.ZP.p(u||(u=(0,i.Z)(["\nmargin:0;\ntext-align: center;\ncolor:white;\n"])))},4554:function(n,t,e){e.d(t,{Ai:function(){return l},Wg:function(){return d},a8:function(){return s},oO:function(){return x},y:function(){return h}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u);i().defaults.baseURL="https://api.themoviedb.org/3";var o="3284913a940180ec63ebc0044db949d5";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/week?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=185.8f4a7fa5.chunk.js.map