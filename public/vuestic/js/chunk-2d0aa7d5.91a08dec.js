(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa7d5"],{"10dd":function(t,i,n){"use strict";n.r(i);var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"category-custom-actions text-center"},[n("i",{staticClass:"glyphicon glyphicon-chevron-up",on:{click:function(i){t.up()}}}),n("i",{staticClass:"glyphicon glyphicon-chevron-down",on:{click:function(i){t.down()}}}),n("i",{staticClass:"glyphicon glyphicon-zoom-in",on:{click:function(i){t.show()}}}),n("i",{staticClass:"glyphicon glyphicon-pencil",on:{click:function(i){t.edit()}}}),n("i",{staticClass:"glyphicon glyphicon-list",on:{click:function(i){t.children()}}})])},o=[],c=(n("a481"),n("c5f6"),{props:{rowData:{type:Object,required:!0},rowIndex:{type:Number}},methods:{show:function(){var t=this.rowData.id;this.$router.push({name:"category",params:{id:t}})},edit:function(){var t=this.rowData.id;this.$router.push({name:"update-category",params:{id:t}})},children:function(){var t=this.rowData.id,i=this.rowData.parent_id;this.$router.replace({name:"categories",params:{id:t,parent:i}})},up:function(){var t=this.rowData.id;this.$parent.$parent.$parent.$emit("up",t)},down:function(){var t=this.rowData.id;this.$parent.$parent.$parent.$emit("down",t)}}}),e=c,r=n("2877"),s=Object(r["a"])(e,a,o,!1,null,null,null);s.options.__file="actions.vue";i["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0aa7d5.91a08dec.js.map