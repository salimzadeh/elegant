(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2136f8"],{ad54:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"page-custom-actions text-center"},[n("i",{staticClass:"glyphicon glyphicon-zoom-in",on:{click:function(i){t.show()}}}),n("i",{staticClass:"glyphicon glyphicon-pencil",on:{click:function(i){t.edit()}}})])},a=[],o=(n("c5f6"),{name:"page-actions",props:{rowData:{type:Object,required:!0},rowIndex:{type:Number}},methods:{show:function(){var t=this.rowData.id;this.$router.push({name:"page",params:{id:t}})},edit:function(t){var i=this.rowData.id;this.$router.push({name:"update-page",params:{id:i}})}}}),s=o,c=n("2877"),p=Object(c["a"])(s,e,a,!1,null,null,null);p.options.__file="actions.vue";i["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d2136f8.f42570ce.js.map