(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{565:function(t,e,n){var content=n(677);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("f657e7e8",content,!0,{sourceMap:!1})},676:function(t,e,n){"use strict";n(565)},677:function(t,e,n){var l=n(5)(!1);l.push([t.i,"section#UiPrevNext{display:flex;flex-direction:row;flex-wrap:1;align-items:center;justify-content:space-between;margin-top:16px!important;padding-top:16px!important}section#UiPrevNext .next,section#UiPrevNext .prev{width:auto;min-width:100px;align-items:center}section#UiPrevNext .prev{justify-content:flex-start}section#UiPrevNext .next{justify-content:flex-end}",""]),t.exports=l},689:function(t,e,n){"use strict";n.r(e);var l={name:"UiPrevNext",props:{prev:{type:Object,default:function(){}},next:{type:Object,default:function(){}},prefix:{type:String,default:"/help"}}},r=(n(676),n(1)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"UiPrevNext"}},[n("div",{staticClass:"prev"},[t.prev&&t.prev.url?n("p",{staticClass:"ma-0 mb-4"},[n("nuxt-link",{staticClass:"_font-weight-bold",attrs:{to:""+t.prefix+t.prev.url}},[n("fa",{staticClass:"subtitle-1",attrs:{icon:["fas","long-arrow-alt-left"]}}),t._v(" "),n("span",{staticClass:"ml-4"},[t._v("\n                    Previous\n                ")])],1)],1):t._e(),t._v(" "),t.prev&&t.prev.label?n("p",{staticClass:"ma-0"},[n("i",[t._v(t._s(t.prev.label))])]):t._e()]),t._v(" "),n("div",{staticClass:"next"},[t.next&&t.next.url?n("p",{staticClass:"ma-0 mb-4"},[n("nuxt-link",{staticClass:"_font-weight-bold",attrs:{to:""+t.prefix+t.next.url}},[n("span",{staticClass:"mr-4"},[t._v("\n                    Next\n                ")]),t._v(" "),n("fa",{staticClass:"subtitle-1",attrs:{icon:["fas","long-arrow-alt-right"]}})],1)],1):t._e(),t._v(" "),t.next&&t.next.label?n("p",{staticClass:"ma-0"},[n("i",[t._v(t._s(t.next.label))])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports}}]);