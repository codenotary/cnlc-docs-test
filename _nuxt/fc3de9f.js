(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{504:function(t,e,n){var content=n(508);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("66066ac0",content,!0,{sourceMap:!1})},505:function(t,e,n){var content=n(510);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("189ce5d2",content,!0,{sourceMap:!1})},506:function(t,e,n){var content=n(512);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("3fa50d3c",content,!0,{sourceMap:!1})},507:function(t,e,n){"use strict";n(504)},508:function(t,e,n){(e=n(5)(!1)).push([t.i,"article.help-section{padding-right:4rem}article.help-section .nuxt-content{display:grid;justify-self:start}article.help-section .nuxt-content p.inline-img{display:block}article.help-section .nuxt-content p.inline-img img{display:inline;margin:0 .5rem!important;padding:0!important}@media screen and (max-width:767px){article.help-section .nuxt-content p.inline-img{display:inline}}article.help-section img{display:block;max-width:100%;margin:2rem auto;padding:0}article.help-section table{width:100%;margin:2rem 0;border-collapse:collapse}article.help-section div:nth-child(3)>div>div>div>table:last-of-type{background:transparent;border:none}article.help-section div:nth-child(3)>div>div>div>table:last-of-type td:first-of-type,article.help-section div:nth-child(3)>div>div>div>table:last-of-type th:first-of-type{width:50%;background:transparent;border:none;text-align:left}article.help-section div:nth-child(3)>div>div>div>table:last-of-type td:last-of-type,article.help-section div:nth-child(3)>div>div>div>table:last-of-type th:last-of-type{width:50%;background:transparent;border:none;text-align:right}article.help-section tr:nth-of-type(2n){background:#e3eaf7}article.help-section th{background:#244484;color:#fff;font-weight:700}article.help-section td,article.help-section th{padding:6px;border:1px solid #e6e6e6;text-align:left}article.help-section .nuxt-content-highlight{margin:.5rem 0}@media screen and (min-width:768px){article.help-section{border-right:1px solid #e6e6e6}}@media screen and (max-width:767px){article.help-section{padding:0 0 2rem}article.help-section h1{font-size:1.5rem;font-weight:700}article.help-section h2{font-size:1.25rem;font-weight:700}article.help-section img{width:100%;padding:0}article.help-section table{table-layout:fixed;width:100%;word-wrap:break-word}}",""]),t.exports=e},509:function(t,e,n){"use strict";n(505)},510:function(t,e,n){(e=n(5)(!1)).push([t.i,".page-heading{min-height:78px}.page-heading.-plain{border:0;min-height:auto}.page-heading.-plain .body{padding:0;border:0}.page-heading .body{display:flex;justify-content:space-between;align-items:center}.page-heading .title{font-size:32px;margin-top:0;margin-bottom:0!important;font-weight:700;display:flex;align-items:center}.page-heading .title svg{margin-left:.5rem;color:#244484}.page-heading .title .text{margin-left:.5rem}.page-heading .subtitle{font-size:14px;color:#868e96;font-weight:400;display:block;margin-top:5px}.page-heading .content{flex-grow:1;flex-shrink:1;display:flex;justify-content:flex-end}",""]),t.exports=e},511:function(t,e,n){"use strict";n(506)},512:function(t,e,n){(e=n(5)(!1)).push([t.i,".breadcrumb[data-v-d952fdfa]{margin-bottom:0!important}",""]),t.exports=e},513:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(42);var r=n(13),l=function(t,e){return function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){var l,c,article,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=r.$content,c=r.params,n.next=3,l(t,e||c.slug).fetch();case 3:return article=n.sent,n.next=6,l("help",{deep:!0}).only(["title","path","slug"]).fetch();case 6:return o=n.sent,n.abrupt("return",{article:article,articles:o});case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}},514:function(t,e,n){"use strict";var r={name:"HelpPageMixin",computed:{showBreadcrumbs:function(){return"/help"!==this.$route.path}}},l=(n(507),n(1)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"help-section"},[e("page-heading",{attrs:{title:this.article.title,icon:["fas","question-circle"]}}),this._v(" "),this.showBreadcrumbs?e("help-breadcrumbs",{staticClass:"_margin-top-1",attrs:{data:this.articles}}):this._e(),this._v(" "),e("i-card",{staticClass:"_margin-top-1"},[e("nuxt-content",{attrs:{document:this.article}})],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{PageHeading:n(515).default,HelpBreadcrumbs:n(516).default,ICard:n(143).default})},515:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:""},subtitle:{type:String,default:""},icon:{type:Array,default:null},plain:{type:Boolean,default:!1}},computed:{classes:function(){return{"-plain":this.plain}}}},l=(n(509),n(1)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-card",{staticClass:"page-heading",class:t.classes},[n("h1",{staticClass:"title"},[t.icon?n("fa",{staticClass:"_margin-right-1-2",attrs:{icon:t.icon}}):t._e(),t._v(" "),n("span",{staticClass:"text"},[t._t("title",[t._v(t._s(t.title))]),t._v(" "),t.subtitle?n("small",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))]):t._e()],2)],1),t._v(" "),n("div",{staticClass:"content"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ICard:n(143).default})},516:function(t,e,n){"use strict";n.r(e);n(24),n(15),n(12),n(11),n(17),n(23);var r=n(3);n(46),n(36);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var o={props:{data:{type:Array,default:function(){return[]}}},computed:{breadcrumbs:function(){var t=this,e=this.$route.path.split("/"),n=[];return e.forEach((function(r,l){if(0!==l){var path=e.slice(0,l+1).join("/"),data=t.mappedData.find((function(t){return t.path===path}));n.push({title:data&&data.title||"",path:path})}})),n},mappedData:function(){return this.data.map((function(t){return c(c({},t),{},{path:t.path.replace(/\/index$/,"")})}))}},methods:{isCurrentItem:function(t){return t.path===this.$route.path}}},d=(n(511),n(1)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-card",[n("i-breadcrumb",t._l(t.breadcrumbs,(function(e,r){return n("i-breadcrumb-item",{key:r,attrs:{active:t.isCurrentItem(e),to:t.localePath(e.path)}},[t._v("\n            "+t._s(e.title)+"\n        ")])})),1)],1)}),[],!1,null,"d952fdfa",null);e.default=component.exports;installComponents(component,{IBreadcrumbItem:n(145).default,IBreadcrumb:n(144).default,ICard:n(143).default})},624:function(t,e,n){"use strict";n.r(e);var r=n(514),l=n(513),c={extends:r.a,asyncData:Object(l.a)("help","index")},o=n(1),component=Object(o.a)(c,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);