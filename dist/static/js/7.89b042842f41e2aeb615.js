webpackJsonp([7],{"+9U9":function(e,t){},jFLA:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("wSez"),a=o("7+uW"),n=o("dI9p");a.default.use(s.Field),a.default.use(s.Toast);var r={components:{"v-header":n.a},data:function(){return{username:"",password:""}},computed:{toggle:function(){return this.$store.state.login.token}},mounted:function(){},methods:{login:function(){var e=this;"1314"===this.username&&"520"===this.password?(Object(s.Toast)("登入成功！"),this.$store.commit("CHANGE_TOKEN",1),setTimeout(function(){e.$router.replace({path:"/user"})})):Object(s.Toast)("帐号或者密码错误")},loginOut:function(){var e=this;s.MessageBox.confirm("确定退出？").then(function(t){Object(s.Toast)("退出登入成功！"),e.$store.commit("CHANGE_TOKEN",0),e.username="",e.password="",e.toggle=!0,setTimeout(function(){e.$router.replace({path:"/"})})})}}},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("v-header",[o("h1",{attrs:{slot:"title"},slot:"title"},[e._v("登入")])]),e._v(" "),0===e.toggle?o("mt-field",{attrs:{label:"帐号",placeholder:"请输入帐号"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}):e._e(),e._v(" "),0===e.toggle?o("mt-field",{attrs:{label:"密码",placeholder:"请输入密码",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}):e._e(),e._v(" "),o("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.login}},[e._v("登入")]),e._v(" "),1===e.toggle?o("mt-button",{attrs:{type:"default",size:"large"},on:{click:e.loginOut}},[e._v("退出")]):e._e(),e._v(" "),o("p",[e._v("1314   ===  520")])],1)},staticRenderFns:[]};var i=o("VU/8")(r,l,!1,function(e){o("+9U9")},"data-v-98f05e3e",null);t.default=i.exports}});
//# sourceMappingURL=7.89b042842f41e2aeb615.js.map