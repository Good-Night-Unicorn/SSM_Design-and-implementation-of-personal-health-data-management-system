(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-add-or-update/forum-add-or-update"],{"4cc7":function(t,n,e){"use strict";e.r(n);var r=e("e828"),u=e("c4c2");for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("c878");var a,o=e("f0c5"),s=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);n["default"]=s.exports},"6b05":function(t,n,e){},7874:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,r,u,i,a){try{var o=t[i](a),s=o.value}catch(c){return void e(c)}o.done?n(s):Promise.resolve(s).then(r,u)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var a=t.apply(n,e);function o(t){i(a,r,u,o,s,"next",t)}function s(t){i(a,r,u,o,s,"throw",t)}o(void 0)}))}}var o={data:function(){return{forum:{content:"",id:"",title:"",isdone:"开放",parentid:0},index:0,options:["开放","关闭"],username:"",user:{}}},onLoad:function(){var n=a(r.default.mark((function n(e){var u,i,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return u=t.getStorageSync("nowTable"),n.next=3,this.$api.session(u);case 3:if(i=n.sent,this.user=i.data,"yonghu"==u&&(this.username=this.user.yonghuzhanghao),!e.id){n.next=12;break}return this.id=e.id,n.next=10,this.$api.info("forum",this.id);case 10:a=n.sent,this.forum=a.data;case 12:this.styleChange();case 13:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var t=a(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.forum.username=this.username,!this.id){t.next=6;break}return t.next=4,this.$api.update("forum",this.forum);case 4:t.next=8;break;case 6:return t.next=8,this.$api.save("forum",this.forum);case 8:this.$utils.msgBack("操作成功");case 9:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),setIsDoneTap:function(t){this.index=t.target.value,this.forum.isdone=this.options[this.index]}}};n.default=o}).call(this,e("543d")["default"])},c4c2:function(t,n,e){"use strict";e.r(n);var r=e("7874"),u=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=u.a},c878:function(t,n,e){"use strict";var r=e("6b05"),u=e.n(r);u.a},e828:function(t,n,e){"use strict";var r,u=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}))},eb61:function(t,n,e){"use strict";(function(t){e("33e4"),e("921b");r(e("66fd"));var n=r(e("4cc7"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["eb61","common/runtime","common/vendor"]]]);