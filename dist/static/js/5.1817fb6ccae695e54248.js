webpackJsonp([5],{"3xQF":function(t,s,a){"use strict";var i=a("7+uW"),e=a("wSez");i.default.use(e.MessageBox);var n={methods:{gotorouter:function(){var t=this;"购物车"===this.selected?0===this.$store.state.login.token&&e.MessageBox.confirm("确定登入?").then(function(s){t.$router.push({path:"/login"})}).catch(function(t){console.log("取消了")}):this.$router.push({name:this.selected})}},data:function(){return{selected:""}},mounted:function(){switch(this.$router.name){case"首页":this.selected="首页";break;case"分类":this.selected="分类";break;case"购物车":this.selected="购物车";break;case"用户":this.selected="用户"}}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"footer",on:{click:function(s){return s.stopPropagation(),t.gotorouter(s)}}},[a("mt-tabbar",{attrs:{fixed:""},model:{value:t.selected,callback:function(s){t.selected=s},expression:"selected"}},[a("mt-tab-item",{attrs:{id:"首页"}},[a("i",{staticClass:"icon-index",attrs:{slot:"icon"},slot:"icon"}),t._v("\n      首页\n    ")]),t._v(" "),a("mt-tab-item",{attrs:{id:"分类"}},[a("i",{staticClass:"icon-category",attrs:{slot:"icon"},slot:"icon"}),t._v("\n      分类\n    ")]),t._v(" "),a("mt-tab-item",{attrs:{id:"购物车"}},[a("i",{staticClass:"icon-car",attrs:{slot:"icon"},slot:"icon"}),t._v("\n       购物车\n    ")]),t._v(" "),a("mt-tab-item",{attrs:{id:"用户"}},[a("i",{staticClass:"icon-user",attrs:{slot:"icon"},slot:"icon"}),t._v("\n      用户\n    ")])],1)],1)},staticRenderFns:[]};var o=a("VU/8")(n,c,!1,function(t){a("VGB0")},"data-v-6b80e6ec",null);s.a=o.exports},BWhR:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={components:{"v-footer":a("3xQF").a}},e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user"},[t._m(0),t._v(" "),a("div",{staticClass:"main"},[a("router-link",{staticClass:"my-indent",attrs:{to:{name:""}}},[a("span",{staticClass:"my-indent-left"},[t._v("我的订单")]),t._v(" "),a("div",{staticClass:"my-indent-right"},[a("span",[t._v("全部订单")]),t._v(" "),a("i",{staticClass:"icon-go"})])]),t._v(" "),a("section",{staticClass:"my-pay"},[a("router-link",{attrs:{to:{name:""}}},[a("span",{staticClass:"icon2-money"}),t._v(" "),a("p",[t._v("代付款")])]),t._v(" "),a("router-link",{attrs:{to:{name:""}}},[a("span",{staticClass:"icon2-thecar"}),t._v(" "),a("p",[t._v("待收货")])]),t._v(" "),a("router-link",{attrs:{to:{name:""}}},[a("span",{staticClass:"icon2-fixed"}),t._v(" "),a("p",[t._v("退换修")])])],1),t._v(" "),a("section",{staticClass:"my-vip"},[a("router-link",{staticClass:"my-vip-top ho",attrs:{to:{name:""}}},[a("div",{staticClass:"my-vip-top-div"},[a("span",{staticClass:"icon2-vip"},[a("span",{staticClass:"path1"}),a("span",{staticClass:"path2"}),a("span",{staticClass:"path3"}),a("span",{staticClass:"path4"}),a("span",{staticClass:"path5"}),a("span",{staticClass:"path6"}),a("span",{staticClass:"path7"}),a("span",{staticClass:"path8"}),a("span",{staticClass:"path9"})])]),t._v(" "),a("p",[a("span",[t._v("会员福利")]),a("i",{staticClass:"icon-go"})])]),t._v(" "),a("router-link",{staticClass:"my-vip-bottom ho",attrs:{to:{name:""}}},[a("div",[a("span",{staticClass:"icon2-money"})]),t._v(" "),a("p",[a("span",[t._v("我的优惠")]),a("i",{staticClass:"icon-go"})])])],1),t._v(" "),a("section",{staticClass:"my-service"},[a("router-link",{staticClass:"my-service-top",attrs:{to:{name:""}}},[a("div",[a("span",{staticClass:"icon2-service"},[a("span",{staticClass:"path1"}),a("span",{staticClass:"path2"}),a("span",{staticClass:"path3"})])]),t._v(" "),a("p",[a("span",[t._v("服务中心")]),a("i",{staticClass:"icon-go"})])]),t._v(" "),a("router-link",{staticClass:"my-service-bottom",attrs:{to:{name:""}}},[a("div",[a("span",{staticClass:"icon2-milogo"})]),t._v(" "),a("p",[a("span",[t._v("电商之家")]),a("i",{staticClass:"icon-go"})])])],1),t._v(" "),a("section",{staticClass:"my-settle"},[a("router-link",{staticClass:"my-settle-top",attrs:{to:{name:""}}},[a("div",[a("span",{staticClass:"icon2-f"})]),t._v(" "),a("p",[a("span",[t._v("F码通道")]),a("i",{staticClass:"icon-go"})])]),t._v(" "),a("router-link",{staticClass:"my-settle-bottom",attrs:{to:{name:""}}},[a("div",[a("span",{staticClass:"icon2-settle"})]),t._v(" "),a("p",[a("span",[t._v("设置")]),a("i",{staticClass:"icon-go"})])])],1)],1),t._v(" "),a("v-footer")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("header",{staticClass:"header"},[s("div",{staticClass:"header-icon"},[s("span",{staticClass:"icon2-user"})]),this._v(" "),s("span",[this._v("退出")])])}]};var n=a("VU/8")(i,e,!1,function(t){a("RuB2")},"data-v-1e9cf77c",null);s.default=n.exports},RuB2:function(t,s){},VGB0:function(t,s){}});
//# sourceMappingURL=5.1817fb6ccae695e54248.js.map