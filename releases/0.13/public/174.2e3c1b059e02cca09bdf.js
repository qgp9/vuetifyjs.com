webpackJsonp([174],{180:function(t,e,a){var n=a(0)(a(469),a(918),null,null,null);t.exports=n.exports},469:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{dialog:!1}}}},918:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-btn",{attrs:{primary:"",dark:""},nativeOn:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[t._v("Open Dialog")]),a("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Use Google's location service?")]),a("v-card-text",[t._v("Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"green--text darken-1",attrs:{flat:"flat"},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Disagree")]),a("v-btn",{staticClass:"green--text darken-1",attrs:{flat:"flat"},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Agree")])],1)],1)],1)],1)},staticRenderFns:[]}}});