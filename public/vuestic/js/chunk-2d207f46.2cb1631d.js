(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207f46"],{a375:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-elements"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("vuestic-widget",{attrs:{headerText:e._f("translate")("menu.categories.create")}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"row row-reverse"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-group with-icon-right",class:{"has-error":e.errors.has("name")}},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"name",name:"name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"fa fa-exclamation-triangle icon-right input-icon"}),a("label",{staticClass:"control-label",attrs:{for:"name"}},[e._v(e._s(e._f("translate")("category.name")))]),a("i",{staticClass:"bar"}),a("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"help text-danger"},[e._v(e._s(e.errors.first("name"))+"\n                    ")])])])]),a("div",{staticClass:"col"},[a("div",{staticClass:"form-group with-icon-right",class:{"has-error":e.errors.has("slug")}},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.slug,expression:"slug"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"slug",name:"slug",required:""},domProps:{value:e.slug},on:{input:function(t){t.target.composing||(e.slug=t.target.value)}}}),a("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("slug"),expression:"errors.has('slug')"}],staticClass:"fa fa-exclamation-triangle icon-right input-icon"}),a("label",{staticClass:"control-label",attrs:{for:"slug"}},[e._v(e._s(e._f("translate")("category.slug")))]),a("i",{staticClass:"bar"}),a("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("slug"),expression:"errors.has('slug')"}],staticClass:"help text-danger"},[e._v(e._s(e.errors.first("slug"))+"\n                    ")])])])]),a("div",{staticClass:"col"},[a("vuestic-simple-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"option-key":"name",clearable:!1,options:this.categories,label:e._f("translate")("custom.parent")},model:{value:e.parent,callback:function(t){e.parent=t},expression:"parent"}})],1),a("div",{staticClass:"col"},[a("vuestic-switch",{model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("span",{attrs:{slot:"falseTitle"},slot:"falseTitle"},[e._v("\n                    "+e._s(e._f("translate")("category.menu_no"))+"\n                  ")]),a("span",{attrs:{slot:"trueTitle"},slot:"trueTitle"},[e._v("\n                    "+e._s(e._f("translate")("category.menu_yes"))+"\n                  ")])])],1)]),a("div",{staticClass:"row mt-2"},[a("Editor",{on:{editor:e.handleEditor}})],1)])]),a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col justify-content-center text-center"},[a("button",{staticClass:"btn btn-success",on:{click:e.add}},[e._v("\n              "+e._s(e._f("translate")("buttons.submit"))+"\n            ")])])])])],1)])])},r=[],i=(a("7f7f"),a("d1d4")),n=a("38c1"),o={name:"create-category",data:function(){return{name:"",slug:"",description:"",parent:{},menu:!1,editor:null,categories:[]}},components:{Editor:n["default"]},created:function(){var e=this;i["a"].get("categories").then(function(t){var a=t.data,s={id:0,name:e.$t("custom.no_parent")};e.parent=s,e.categories.push(s),e.handleCategories(a)}).catch(function(t){e.$store.dispatch("addToastMessage",{text:e.$t("errors.".concat(t.status))}),e.$router.push({name:"categories"})})},methods:{handleCategories:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";for(var a in e){a=e[a];var s={id:a.id,name:t+" "+a.name};this.categories.push(s),this.handleCategories(a.children,t+"-"),s.id===this.$route.params.parent&&(this.parent=s)}},handleEditor:function(e){this.editor=e},add:function(){var e=this;this.parent.id||0===this.parent.id?this.$validator.validateAll().then(function(t){if(t){var a={name:e.name,slug:e.slug,menu:e.menu?1:0,parent_id:e.parent.id,description:e.editor.getContents()};i["a"].post("categories",a).then(function(t){e.$store.dispatch("addToastMessage",{text:e.$t("category.created"),type:"success"}),e.$router.push({name:"category",params:{id:t.data.id}})}).catch(function(t){e.$store.dispatch("addToastMessage",{text:e.$t("errors.any"),error:t})})}}):this.$store.dispatch("addToastMessage",{text:this.$t("errors.category")})}}},l=o,c=a("2877"),d=Object(c["a"])(l,s,r,!1,null,null,null);d.options.__file="create.vue";t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d207f46.2cb1631d.js.map