(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc77d962"],{"143d":function(e,t,i){"use strict";var a=i("f0b6"),s=i.n(a);s.a},"1c61":function(e,t,i){"use strict";var a=i("ae42"),s=i.n(a);s.a},"2d31":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-elements"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("vuestic-widget",{attrs:{headerText:e._f("translate")("menu.admins.create")}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"form-group with-icon-right",class:{"has-error":e.errors.has("name")}},[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"name",name:"name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),i("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"fa fa-exclamation-triangle icon-right input-icon"}),i("label",{staticClass:"control-label",attrs:{for:"name"}},[e._v(e._s(e._f("translate")("user.name")))]),i("i",{staticClass:"bar"}),i("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"help text-danger"},[e._v(e._s(e.errors.first("name"))+"\n                ")])])]),i("div",{staticClass:"form-group with-icon-right",class:{"has-error":e.errors.has("mobile")}},[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"},{name:"validate",rawName:"v-validate",value:"integer",expression:"'integer'"}],attrs:{id:"mobile",name:"mobile"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),i("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("mobile"),expression:"errors.has('mobile')"}],staticClass:"fa fa-exclamation-triangle icon-right input-icon"}),i("label",{staticClass:"control-label",attrs:{for:"mobile"}},[e._v(e._s(e._f("translate")("user.mobile")))]),i("i",{staticClass:"bar"}),i("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("mobile"),expression:"errors.has('mobile')"}],staticClass:"help text-danger"},[e._v(e._s(e.errors.first("mobile"))+"\n                ")])])]),i("vuestic-switch",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[i("span",{attrs:{slot:"trueTitle"},slot:"trueTitle"},[e._v(e._s(e._f("translate")("user.active_y")))]),i("span",{attrs:{slot:"falseTitle"},slot:"falseTitle"},[e._v(e._s(e._f("translate")("user.active_n")))])])],1),i("div",{staticClass:"col"},[i("div",{staticClass:"form-group with-icon-right",class:{"has-error":e.errors.has("family")}},[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.family,expression:"family"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"family",name:"family",required:""},domProps:{value:e.family},on:{input:function(t){t.target.composing||(e.family=t.target.value)}}}),i("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("family"),expression:"errors.has('family')"}],staticClass:"fa fa-exclamation-triangle icon-right input-icon"}),i("label",{staticClass:"control-label",attrs:{for:"family"}},[e._v(e._s(e._f("translate")("user.family")))]),i("i",{staticClass:"bar"}),i("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("family"),expression:"errors.has('family')"}],staticClass:"help text-danger"},[e._v(e._s(e.errors.first("family"))+"\n                ")])])]),i("div",{staticClass:"form-group with-icon-right",class:{"has-error":e.errors.has("password")}},[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"password",type:"password",name:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),i("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"fa fa-exclamation-triangle icon-right input-icon"}),i("label",{staticClass:"control-label",attrs:{for:"password"}},[e._v(e._s(e._f("translate")("user.password")))]),i("i",{staticClass:"bar"}),i("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"help text-danger"},[e._v(e._s(e.errors.first("password"))+"\n                ")])])])]),i("div",{staticClass:"col"},[i("div",{staticClass:"form-group with-icon-right",class:{"has-error":e.errors.has("email")}},[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{id:"email",name:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),i("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"fa fa-exclamation-triangle icon-right input-icon"}),i("label",{staticClass:"control-label",attrs:{for:"email"}},[e._v(e._s(e._f("translate")("user.email")))]),i("i",{staticClass:"bar"}),i("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"help text-danger"},[e._v(e._s(e.errors.first("email"))+"\n                ")])])]),i("div",{staticClass:"form-group with-icon-right",class:{"has-error":e.errors.has("password_confirmation")}},[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.password_confirmation,expression:"password_confirmation"},{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],attrs:{id:"password_confirmation",type:"password",name:"password_confirmation"},domProps:{value:e.password_confirmation},on:{input:function(t){t.target.composing||(e.password_confirmation=t.target.value)}}}),i("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password_confirmation"),expression:"errors.has('password_confirmation')"}],staticClass:"fa fa-exclamation-triangle icon-right input-icon"}),i("label",{staticClass:"control-label",attrs:{for:"password_confirmation"}},[e._v(e._s(e._f("translate")("user.password_confirmation")))]),i("i",{staticClass:"bar"}),i("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password_confirmation"),expression:"errors.has('password_confirmation')"}],staticClass:"help text-danger"},[e._v(e._s(e.errors.first("password_confirmation"))+"\n                ")])])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"form-group with-icon-right",class:{"has-error":e.errors.has("textarea")}},[i("div",{staticClass:"input-group"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.about,expression:"about"}],attrs:{type:"text",id:"about",required:"",rows:"6"},domProps:{value:e.about},on:{input:function(t){t.target.composing||(e.about=t.target.value)}}}),i("label",{staticClass:"control-label",attrs:{for:"about"}},[e._v(e._s(e._f("translate")("user.about")))]),i("i",{staticClass:"bar"})])])]),i("div",{staticClass:"col"})]),i("div",{staticClass:"row mt-5"},[i("div",{staticClass:"col text-center"},[i("button",{staticClass:"btn btn-success",on:{click:e.add}},[e._v("\n              "+e._s(e._f("translate")("buttons.submit"))+"\n            ")])])])])],1)])])},s=[],r=(i("7f7f"),i("a026")),n=i("d1d4"),o=i("e597"),l={name:"create-consult",data:function(){return{name:"",family:"",email:"",mobile:"",password:"",password_confirmation:"",active:!0,about:"",avatar_id:""}},components:{PictureInput:o["a"]},methods:{add:function(){var e=this;this.$validator.validateAll().then(function(t){if(t){var i={name:e.name,email:e.email,about:e.about,mobile:e.mobile,active:e.active,family:e.family,password:e.password,avatar_id:e.avatar_id,password_confirmation:e.password_confirmation};n["a"].post("admins",i).then(function(t){e.$store.dispatch("addToastMessage",{text:r["default"].i18n.translate("admin.created"),type:"success"}),e.$router.push({name:"Admin",params:{id:t.data.id}})}).catch(function(t){for(var i in e.$store.dispatch("addToastMessage",{text:r["default"].i18n.translate("errors.any"),error:t}),t.data.errors)t.data.errors[i].map(function(t){e.$store.dispatch("addToastMessage",{text:t})})})}})}}},c=l,u=(i("1c61"),i("2877")),p=Object(u["a"])(c,a,s,!1,null,null,null);p.options.__file="create.vue";t["default"]=p.exports},4917:function(e,t,i){i("214f")("match",1,function(e,t,i){return[function(i){"use strict";var a=e(this),s=void 0==i?void 0:i[t];return void 0!==s?s.call(i,a):new RegExp(i)[t](String(a))},i]})},"87f3":function(e,t,i){var a=i("5ca1");a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},ae42:function(e,t,i){},e597:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"container",staticClass:"picture-input",attrs:{id:"picture-input"}},[e.supportsUpload?e.supportsPreview?i("div",[i("div",{staticClass:"preview-container",style:{maxWidth:e.previewWidth+"px",height:e.previewHeight+"px",borderRadius:e.radius+"%"}},[i("canvas",{ref:"previewCanvas",staticClass:"picture-preview",class:e.computedClasses,style:{height:e.previewHeight+"px",zIndex:e.zIndex+1},on:{drag:function(e){e.stopPropagation(),e.preventDefault()},dragover:function(e){e.stopPropagation(),e.preventDefault()},dragstart:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStart(t)},dragenter:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStart(t)},dragend:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStop(t)},dragleave:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStop(t)},drop:function(t){return t.stopPropagation(),t.preventDefault(),e.onFileDrop(t)},click:function(t){return t.preventDefault(),e.onClick(t)}}}),e.imageSelected||e.plain?e._e():i("div",{staticClass:"picture-inner",style:{top:-e.previewHeight+"px",marginBottom:-e.previewHeight+"px",fontSize:e.fontSize,borderRadius:e.radius+"%",zIndex:e.zIndex+2}},[e.supportsDragAndDrop?i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:e._s(e.strings.drag)}}):i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:e._s(e.strings.tap)}})])]),e.imageSelected&&!e.hideChangeButton?i("button",{class:e.buttonClass,on:{click:function(t){return t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.change))]):e._e(),e.imageSelected&&e.removable?i("button",{class:e.removeButtonClass,on:{click:function(t){return t.preventDefault(),e.removeImage(t)}}},[e._v(e._s(e.strings.remove))]):e._e(),e.imageSelected&&e.toggleAspectRatio&&e.width!==e.height?i("button",{class:e.aspectButtonClass,on:{click:function(t){return t.preventDefault(),e.rotateImage(t)}}},[e._v(e._s(e.strings.aspect))]):e._e()]):i("div",[e.imageSelected?i("div",[i("div",{domProps:{innerHTML:e._s(e.strings.selected)}}),e.hideChangeButton?e._e():i("button",{class:e.buttonClass,on:{click:function(t){return t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.change))]),e.removable?i("button",{class:e.removeButtonClass,on:{click:function(t){return t.preventDefault(),e.removeImage(t)}}},[e._v(e._s(e.strings.remove))]):e._e()]):i("button",{class:e.buttonClass,on:{click:function(t){return t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.select))])]):i("div",{domProps:{innerHTML:e._s(e.strings.upload)}}),i("input",{ref:"fileInput",attrs:{type:"file",name:e.name,id:e.id,accept:e.accept},on:{change:e.onFileChange}})])},s=[],r=(i("4917"),i("a481"),i("f9fa"));i("f751");function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");o(e.prototype,t&&t.prototype),t&&o(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return!t||"object"!==Object(r["a"])(t)&&"function"!==typeof t?c(e):t}function p(e){return p=Object.getPrototypeOf||function(e){return e.__proto__},p(e)}function d(e,t,i){return d="undefined"!==typeof Reflect&&Reflect.construct?Reflect.construct:function(e,t,i){var a=[null];a.push.apply(a,t);var s=e.bind.apply(e,a),r=new s;return i&&o(r,i.prototype),r},d.apply(null,arguments)}function h(e){var t="function"===typeof Map?new Map:void 0;return h=function(e){if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),o(i,o(function(){return d(e,arguments,p(this).constructor)},e))},h(e)}i("7f7f"),i("28a5"),i("87f3"),i("c5f6");var f={name:"picture-input",props:{width:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},height:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},margin:{type:[String,Number],default:0},accept:{type:String,default:"image/*"},size:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},name:{type:String,default:null},id:{type:[String,Number],default:null},buttonClass:{type:String,default:"btn btn-primary button"},removeButtonClass:{type:String,default:"btn btn-secondary button secondary"},aspectButtonClass:{type:String,default:"btn btn-secondary button secondary"},prefill:{type:[String,File],default:""},prefillOptions:{type:Object,default:function(){return{}}},crop:{type:Boolean,default:!0},radius:{type:[String,Number],default:0},removable:{type:Boolean,default:!1},hideChangeButton:{type:Boolean,default:!1},autoToggleAspectRatio:{type:Boolean,default:!1},toggleAspectRatio:{type:Boolean,default:!1},changeOnClick:{type:Boolean,default:!0},plain:{type:Boolean,default:!1},zIndex:{type:Number,default:1e4},alertOnError:{type:Boolean,default:!0},customStrings:{type:Object,default:function(){return{}}}},watch:{prefill:function(){this.prefill?this.preloadImage(this.prefill,this.prefillOptions):this.removeImage()}},data:function(){return{imageSelected:!1,previewHeight:0,previewWidth:0,draggingOver:!1,canvasWidth:0,canvasHeight:0,strings:{upload:"<p>Your device does not support file uploading.</p>",drag:"Drag an image or <br>click here to select a file",tap:"Tap here to select a photo <br>from your gallery",change:"Change Photo",aspect:"Landscape/Portrait",remove:"Remove Photo",select:"Select a Photo",selected:"<p>Photo successfully selected!</p>",fileSize:"The file size exceeds the limit",fileType:"This file type is not supported."}}},mounted:function(){var e=this;if(this.updateStrings(),this.prefill&&this.preloadImage(this.prefill,this.prefillOptions),this.$nextTick(function(){window.addEventListener("resize",e.onResize),e.onResize()}),this.supportsPreview){this.pixelRatio=Math.round(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI);var t=this.$refs.previewCanvas;t.getContext&&(this.context=t.getContext("2d"),this.context.scale(this.pixelRatio,this.pixelRatio))}"image/*"!==this.accept&&(this.fileTypes=this.accept.split(","),this.fileTypes=this.fileTypes.map(function(e){return e.trim()})),this.canvasWidth=this.width,this.canvasHeight=this.height,this.$on("error",this.onError)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize),this.$off("error",this.onError)},methods:{updateStrings:function(){for(var e in this.customStrings)e in this.strings&&"string"===typeof this.customStrings[e]&&(this.strings[e]=this.customStrings[e])},onClick:function(){this.imageSelected?(this.changeOnClick&&this.selectImage(),this.$emit("click")):this.selectImage()},onResize:function(){this.resizeCanvas(),this.imageObject&&this.drawImage(this.imageObject)},onDragStart:function(){this.supportsDragAndDrop&&(this.draggingOver=!0)},onDragStop:function(){this.supportsDragAndDrop&&(this.draggingOver=!1)},onFileDrop:function(e){this.onDragStop(),this.onFileChange(e)},onFileChange:function(e,t){var i=e.target.files||e.dataTransfer.files;if(i.length)if(i[0].size<=0||i[0].size>1024*this.size*1024)this.$emit("error",{type:"fileSize",fileSize:i[0].size,fileType:i[0].type,fileName:i[0].name,message:this.strings.fileSize+" ("+this.size+"MB)"});else if(i[0].name!==this.fileName||i[0].size!==this.fileSize||this.fileModified!==i[0].lastModified){if(this.file=i[0],this.fileName=i[0].name,this.fileSize=i[0].size,this.fileModified=i[0].lastModified,this.fileType=i[0].type,"image/*"===this.accept){if("image/"!==i[0].type.substr(0,6))return}else if(-1===this.fileTypes.indexOf(i[0].type))return void this.$emit("error",{type:"fileType",fileSize:i[0].size,fileType:i[0].type,fileName:i[0].name,message:this.strings.fileType});this.imageSelected=!0,this.image="",this.supportsPreview?this.loadImage(i[0],t||!1):t?this.$emit("prefill"):this.$emit("change",this.image)}},onError:function(e){this.alertOnError&&alert(e.message)},loadImage:function(e,t){var i=this;this.getEXIFOrientation(e,function(a){i.setOrientation(a);var s=new FileReader;s.onload=function(e){i.image=e.target.result,t?i.$emit("prefill"):i.$emit("change",i.image),i.imageObject=new Image,i.imageObject.onload=function(){if(i.autoToggleAspectRatio){var e=i.getOrientation(i.canvasWidth,i.canvasHeight),t=i.getOrientation(i.imageObject.width,i.imageObject.height);e!==t&&i.rotateCanvas()}i.drawImage(i.imageObject)},i.imageObject.src=i.image},s.readAsDataURL(e)})},drawImage:function(e){this.imageWidth=e.width,this.imageHeight=e.height,this.imageRatio=e.width/e.height;var t=0,i=0,a=this.previewWidth,s=this.previewHeight,r=this.previewWidth/this.previewHeight;this.crop?this.imageRatio>=r?(a=s*this.imageRatio,t=(this.previewWidth-a)/2):(s=a/this.imageRatio,i=(this.previewHeight-s)/2):this.imageRatio>=r?(s=a/this.imageRatio,i=(this.previewHeight-s)/2):(a=s*this.imageRatio,t=(this.previewWidth-a)/2);var n=this.$refs.previewCanvas;n.style.background="none",n.width=this.previewWidth*this.pixelRatio,n.height=this.previewHeight*this.pixelRatio,this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,n.width,n.height),this.rotate&&(this.context.translate(t*this.pixelRatio,i*this.pixelRatio),this.context.translate(a/2*this.pixelRatio,s/2*this.pixelRatio),this.context.rotate(this.rotate),t=-a/2,i=-s/2),this.context.drawImage(e,t*this.pixelRatio,i*this.pixelRatio,a*this.pixelRatio,s*this.pixelRatio)},selectImage:function(){this.$refs.fileInput.click()},removeImage:function(){this.$refs.fileInput.value="",this.$refs.fileInput.type="",this.$refs.fileInput.type="file",this.fileName="",this.fileType="",this.fileSize=0,this.fileModified=0,this.imageSelected=!1,this.image="",this.file=null,this.imageObject=null,this.$refs.previewCanvas.style.backgroundColor="rgba(200,200,200,.25)",this.$refs.previewCanvas.width=this.previewWidth*this.pixelRatio,this.$emit("remove")},rotateImage:function(){this.rotateCanvas(),this.imageObject&&this.drawImage(this.imageObject);var e=this.getOrientation(this.canvasWidth,this.canvasHeight);this.$emit("aspectratiochange",e)},resizeCanvas:function(){var e=this.canvasWidth/this.canvasHeight,t=this.$refs.container.clientWidth;(this.toggleAspectRatio||t!==this.containerWidth)&&(this.containerWidth=t,this.previewWidth=Math.min(this.containerWidth-2*this.margin,this.canvasWidth),this.previewHeight=this.previewWidth/e)},getOrientation:function(e,t){var i="square";return e>t?i="landscape":e<t&&(i="portrait"),i},switchCanvasOrientation:function(){var e=this.canvasWidth,t=this.canvasHeight;this.canvasWidth=t,this.canvasHeight=e},rotateCanvas:function(){this.switchCanvasOrientation(),this.resizeCanvas()},setOrientation:function(e){this.rotate=!1,8===e?this.rotate=-Math.PI/2:6===e?this.rotate=Math.PI/2:3===e&&(this.rotate=-Math.PI)},getEXIFOrientation:function(e,t){var i=new FileReader;i.onload=function(e){var i=new DataView(e.target.result);if(65496!==i.getUint16(0,!1))return t(-2);var a=i.byteLength,s=2;while(s<a){var r=i.getUint16(s,!1);if(s+=2,65505===r){if(1165519206!==i.getUint32(s+=2,!1))return t(-1);var n=18761===i.getUint16(s+=6,!1);s+=i.getUint32(s+4,n);var o=i.getUint16(s,n);s+=2;for(var l=0;l<o;l++)if(274===i.getUint16(s+12*l,n))return t(i.getUint16(s+12*l+8,n))}else{if(65280!==(65280&r))break;s+=i.getUint16(s,!1)}}return t(-1)},i.readAsArrayBuffer(e.slice(0,65536))},preloadImage:function(e,t){var i=this,a=window.File;try{new a([],"")}catch(e){a=function(e){function t(e,i){var a,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n(this,t),a=u(this,p(t).call(this,e,s)),a.lastModifiedDate=new Date,a.lastModified=+a.lastModifiedDate,a.name=i,a}return l(t,e),t}(h(Blob))}if(t=Object.assign({},t),"object"===Object(r["a"])(e))return this.imageSelected=!0,this.image="",void(this.supportsPreview?this.loadImage(e,!0):this.$emit("prefill"));var s=new Headers;s.append("Accept","image/*"),fetch(e,{method:"GET",mode:"cors",headers:s}).then(function(e){return e.blob()}).then(function(s){var r={target:{files:[]}},n=t.fileName||e.split("/").slice(-1)[0],o=t.mediaType||"image/"+(t.fileType||n.split(".").slice(-1)[0]);o=o.replace("jpg","jpeg"),r.target.files[0]=new a([s],n,{type:o}),i.onFileChange(r,!0)}).catch(function(e){i.$emit("error",{type:"failedPrefill",message:"Failed loading prefill image: "+e})})}},computed:{supportsUpload:function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var e=document.createElement("input");return e.type="file",!e.disabled},supportsPreview:function(){return window.FileReader&&!!window.CanvasRenderingContext2D},supportsDragAndDrop:function(){var e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&!("ontouchstart"in window||navigator.msMaxTouchPoints)},computedClasses:function(){var e={};return e["dragging-over"]=this.draggingOver,e},fontSize:function(){return Math.min(.04*this.previewWidth,21)+"px"}}},m=f,v=(i("143d"),i("2877")),g=Object(v["a"])(m,a,s,!1,null,"5080a0f2",null);g.options.__file="PictureInput.vue";t["a"]=g.exports},f0b6:function(e,t,i){}}]);
//# sourceMappingURL=chunk-cc77d962.459cea50.js.map