webpackJsonp([88],{294:function(t,e,i){var l=i(0)(i(496),i(794),null,null,null);t.exports=l.exports},496:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{items:[{action:"move_to_inbox",title:"Inbox"},{action:"send",title:"Sent"},{action:"delete",title:"Trash"},{action:"report",title:"Spam"},{divider:!0},{header:"Labels"},{action:"label",title:"Family"},{action:"label",title:"Friends"},{action:"label",title:"Work"}]}}}},794:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-card",[i("v-toolbar",{staticClass:"teal white--text",attrs:{light:""}},[i("v-toolbar-side-icon",{attrs:{light:""}}),i("v-toolbar-title",[t._v("Manage")]),i("v-btn",{attrs:{icon:"",light:""}},[i("v-icon",[t._v("more_vert")])],1)],1),i("v-list",[t._l(t.items,function(e){return[e.divider?i("v-divider"):e.header?i("v-subheader",{domProps:{textContent:t._s(e.header)}}):i("v-list-item",[i("v-list-tile",{slot:"item"},[i("v-list-tile-action",[i("v-icon",{attrs:{light:""}},[t._v(t._s(e.action))])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)],1)]})],2)],1)],1)],1)},staticRenderFns:[]}}});