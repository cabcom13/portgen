(function(t){function e(e){for(var a,n,r=e[0],o=e[1],l=e[2],h=0,u=[];h<r.length;h++)n=r[h],c[n]&&u.push(c[n][0]),c[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,r=1;r<i.length;r++){var o=i[r];0!==c[o]&&(a=!1)}a&&(s.splice(e--,1),t=n(n.s=i[0]))}return t}var a={},c={app:0},s=[];function n(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=a,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=o;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("1356"),c=i.n(a);c.a},1356:function(t,e,i){},4687:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),c=i("bb71");i("da64");a["a"].use(c["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{staticClass:"pt-3 ",attrs:{id:"app",dark:""}},[i("v-toolbar",{staticStyle:{"z-index":"110"},attrs:{app:"",dense:"",fixed:""}},[i("v-toolbar-title",{staticClass:"headline text-uppercase"},[i("span",[t._v("Vuetify")]),i("span",{staticClass:"font-weight-light"},[t._v("MATERIAL DESIGN")])]),i("v-spacer"),i("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[i("v-btn",{attrs:{flat:""},on:{click:t.download}},[t._v(".pdf Download")])],1)],1),i("v-container",[i("v-content",[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs1:""}},[i("v-card",[i("v-btn",{attrs:{block:""},on:{click:function(e){return t.addItem("text")}}},[t._v("Text")]),i("v-btn",{attrs:{block:""},on:{click:function(e){return t.addItem("letterbox")}}},[t._v("Schreibfeld")]),i("v-btn",{attrs:{block:""},on:{click:function(e){return t.addItem("imagebox913")}}},[t._v("Foto 9x13")]),i("v-btn",{attrs:{block:""},on:{click:function(e){return t.addItem("imagebox139")}}},[t._v("Foto 13x9")]),i("v-btn",{attrs:{block:""},on:{click:function(e){return t.addItem("clipart")}}},[t._v("Clipart")])],1)],1),i("v-flex",{staticStyle:{position:"relative"},attrs:{xs6:"","offset-xs1":"","align-self-center":""}},[i("div",{attrs:{id:"page"}},[i("div",{attrs:{id:"ignoreElements"}},[i("v-btn",{attrs:{absolute:"",dark:"",fab:"",top:"",right:"",color:"pink"}},[i("v-icon",[t._v("add")])],1)],1),i("div",{staticClass:"a4",style:{"background-color":t.page_background_color,opacity:1}},[i("div",{staticClass:"filler",style:{"background-position":"0 0 ","background-repeat":"no-repeat",background:"transparent url(./img/bg/"+t.page_background_image+")",opacity:t.page_background_image_opacity}}),t._l(t.rects,function(e,a){return i("VueDragResize",{key:a,attrs:{w:e.width,h:e.height,x:e.left,y:e.top,axis:e.axis,snapToGrid:!0,gridX:20,gridY:20,isActive:e.active,minw:e.minw,minh:e.minh,isDraggable:e.draggable,isResizable:e.resizable,parentLimitation:e.parentLim,aspectRatio:e.aspectRatio,z:e.zIndex},on:{activated:function(e){return t.activateEv(a)},deactivated:function(e){return t.deactivateEv(a)},dragging:function(e){return t.changePosition(e,a)},resizing:function(e){return t.changeSize(e,a)}}},[i("div",{class:e.class+" filler",style:e.style},[t._v(" \n                  "+t._s(e.text)+"\n                ")])])}),i("div",{staticClass:"copyright noselect"},[t._v("Portfolio Vorlagen ")])],2)])]),i("v-flex",{attrs:{xs4:""}},[i("toolbar")],1)],1)],1)],1),i("div",{attrs:{id:"pdf"}}),i("loading",{attrs:{active:t.isLoading,loader:"dots"},on:{"update:active":function(e){t.isLoading=e}}})],1)},n=[],r=(i("96cf"),i("3b8d")),o=i("3b58"),l=i.n(o),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{on:{mousedown:function(t){t.stopPropagation()}}},[i("v-expansion-panel",{attrs:{dark:"",focusable:""}},[i("v-expansion-panel-content",{attrs:{ripple:"",expand:"",true:""},scopedSlots:t._u([{key:"header",fn:function(){return[i("div",[t._v("Vorlagen")])]},proxy:!0}])},[i("v-card",[i("v-list",t._l(t.items,function(e){return i("v-list-group",{key:e.title,attrs:{"prepend-icon":e.action,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-tile",[i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"item.active"}},t._l(e.items,function(e){return i("v-list-tile",{key:e.title},[i("v-list-tile-content",[i("v-list-tile-title",{on:{click:function(i){return t.loadData(e.id)}}},[t._v("\n                                "+t._s(e.title))])],1),i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.action))])],1)],1)}),1)}),1)],1)],1),i("v-expansion-panel-content",{attrs:{ripple:"",expand:"",true:""},scopedSlots:t._u([{key:"header",fn:function(){return[i("div",[t._v("Element")])]},proxy:!0}])},[i("v-card",[i("v-card-text",[i("div",{staticClass:"py-3",staticStyle:{"border-bottom":"1px solid rgba(21,21,21,.5)"}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm4:"","align-self-center":""}},[i("strong",{staticClass:"grey--text text--lighten-1"},[t._v("Hintergrund")])]),i("v-flex",{attrs:{xs12:"",sm8:""}},[i("swatches",{attrs:{"show-border":"",shapes:"circles",colors:t.owncolors,"background-color":"#212121",disabled:null==t.activeRect},model:{value:t.elementbackgroundcolor,callback:function(e){t.elementbackgroundcolor=e},expression:"elementbackgroundcolor"}})],1)],1)],1),i("div",{staticClass:"py-3",staticStyle:{"border-bottom":"1px solid rgba(21,21,21,.5)"}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm4:"","align-self-center":""}},[i("strong",{staticClass:"grey--text text--lighten-1"},[t._v("Ebene")])]),i("v-flex",{attrs:{xs12:"",sm8:"","align-self-center":""}},[i("v-btn",{attrs:{name:"toBottom",disabled:null===t.activeRect||"isFirst"===t.zIndex,dark:""},nativeOn:{click:function(e){return t.toBottom(e)}}},[i("v-icon",[t._v("expand_more")]),t._v(" nach Unten")],1),i("v-btn",{attrs:{name:"toTop",disabled:null===t.activeRect||"isLast"===t.zIndex,dark:""},nativeOn:{click:function(e){return t.toTop(e)}}},[i("v-icon",[t._v("expand_less")]),t._v(" nach Oben")],1)],1)],1)],1),i("div",{staticClass:"py-3",staticStyle:{"border-bottom":"1px solid rgba(21,21,21,.5)"}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm4:"","align-self-center":""}},[i("strong",{staticClass:"grey--text text--lighten-1"},[t._v("Ausrichtung")])]),i("v-flex",{attrs:{xs12:"",sm8:"","align-self-center":""}},[i("v-btn-toggle",{attrs:{dark:""},model:{value:t.textalign,callback:function(e){t.textalign=e},expression:"textalign"}},[i("v-btn",{attrs:{flat:"",disabled:null==t.activeRect}},[i("v-icon",[t._v("format_align_left")])],1),i("v-btn",{attrs:{flat:"",disabled:null==t.activeRect}},[i("v-icon",[t._v("format_align_center")])],1),i("v-btn",{attrs:{flat:"",disabled:null==t.activeRect}},[i("v-icon",[t._v("format_align_right")])],1),i("v-btn",{attrs:{flat:"",disabled:null==t.activeRect}},[i("v-icon",[t._v("format_align_justify")])],1)],1)],1)],1)],1),i("div",{staticClass:"py-3",staticStyle:{"border-bottom":"1px solid rgba(21,21,21,.5)"}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm4:"","align-self-center":""}},[i("strong",{staticClass:"grey--text text--lighten-1"},[t._v("Schriftart")])]),i("v-flex",{attrs:{xs12:"",sm8:""}},[t._v("\n                               "+t._s(t.fontfamily)+"\n                               "),i("select",[i("option",[t._v("asdasdasd")]),i("option",[t._v("asdasdasd123")])])])],1)],1),i("div",{staticClass:"py-3",staticStyle:{"border-bottom":"1px solid rgba(21,21,21,.5)"}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm4:"","align-self-center":""}},[i("strong",{staticClass:"grey--text text--lighten-1"},[t._v("Schrift Style")])]),i("v-flex",{attrs:{xs12:"",sm8:"","align-self-center":""}},[i("v-btn-toggle",{attrs:{dark:""},model:{value:t.fontweight,callback:function(e){t.fontweight=e},expression:"fontweight"}},[i("v-btn",{attrs:{flat:""}},[i("v-icon",[t._v("format_bold")])],1)],1)],1)],1)],1),i("div",{staticStyle:{"border-bottom":"1px solid rgba(21,21,21,.5)"}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm4:"","align-self-center":""}},[i("strong",{staticClass:"grey--text text--lighten-1"},[t._v("Text")])]),i("v-flex",{staticClass:"mt-3",attrs:{xs12:"",sm8:"","align-self-center":""}},[i("v-text-field",{attrs:{disabled:null==t.activeRect,dark:"","single-line":""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)],1)],1),i("div",{staticClass:"py-3",staticStyle:{"border-bottom":"1px solid rgba(21,21,21,.5)"}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm4:"","align-self-center":""}},[i("strong",{staticClass:"grey--text text--lighten-1"},[t._v("Schriftfarbe")])]),i("v-flex",{attrs:{xs12:"",sm8:""}},[i("swatches",{attrs:{"show-border":"",colors:t.owncolors,shapes:"circles","background-color":"#212121"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1)],1),i("div",{staticClass:"py-3",staticStyle:{"border-bottom":"1px solid rgba(21,21,21,.5)"}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm4:"","align-self-center":""}},[i("strong",{staticClass:"grey--text text--lighten-1"},[t._v("Schriftgröße")])]),i("v-flex",{attrs:{xs12:"",sm8:"","align-self-center":""}},[i("v-slider",{attrs:{readonly:null==t.activeRect,dark:""},model:{value:t.fontsize,callback:function(e){t.fontsize=e},expression:"fontsize"}})],1)],1)],1),i("v-btn",{attrs:{ripple:"",color:"error",disabled:null==t.activeRect},on:{click:function(e){return t.removeElement(t.activeRect)}}},[t._v("Löschen")])],1)],1)],1),i("v-expansion-panel-content",{attrs:{ripple:"",expand:""},scopedSlots:t._u([{key:"header",fn:function(){return[i("div",[t._v("Seite")])]},proxy:!0}])},[i("v-card",[i("v-card-text",{staticClass:"grey darken-4"},[i("div",{staticClass:"mb-3",staticStyle:{"border-bottom":"1px solid black"}},[i("strong",{staticClass:"grey--text text--lighten-1"},[t._v("Hintergrundfarbe")]),i("swatches",{attrs:{colors:t.owncolors,shapes:"circles",inline:"","background-color":"transparent"},model:{value:t.pagebackgroundColor,callback:function(e){t.pagebackgroundColor=e},expression:"pagebackgroundColor"}})],1),i("div",{staticClass:"mb-3",staticStyle:{"border-bottom":"1px solid black"}},[i("strong",{staticClass:"grey--text text--lighten-1"},[t._v("Transparenz")]),i("v-slider",{attrs:{max:"1",step:"0.1",dark:""},model:{value:t.backgroundopacity,callback:function(e){t.backgroundopacity=e},expression:"backgroundopacity"}})],1),i("strong",{staticClass:"grey--text text--lighten-1"},[t._v("Hintergrundbild")]),i("vue-select-image",{attrs:{h:"100",dataImages:t.dataImages,selectedImages:[t.background_image.id],isMultiple:!1},on:{onselectimage:t.onSelectImage}})],1)],1)],1)],1),i("v-layout",{attrs:{row:"","justify-center":""}},[i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",dark:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-btn",t._g({attrs:{color:"primary",dark:""}},a),[t._v("Open Dialog")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"primary"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[i("v-icon",[t._v("close")])],1),i("v-toolbar-title",[t._v("Settings")]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1),i("v-card-text",[i("vue-select-image",{attrs:{dataImages:t.clipartImages,h:"150"},on:{onselectimage:t.onSelectImage}})],1)],1)],1)],1)],1)},h=[],u=(i("a481"),i("468d")),g=i.n(u),f=i("f36a"),v=i.n(f),p=i("bc3a"),m=i.n(p),b=i("9062"),E=i.n(b);i("e71f");i("6ea1"),i("e40d"),i("2fac"),i("2fac");var _={components:{VueSelectImage:v.a,Swatches:g.a,Loading:E.a},data:function(){return{fontfamilys:["Amatic SC","Satisfy","Permanent Marker","Architects Daughter","Handlee"],dataImages:[],clipartImages:[],dialog:!0,owncolors:["transparent","#000000","#1FBC9C","#1CA085","#2ECC70","#27AF60","#3398DB","#2980B9","#A463BF","#8E43AD","#3D556E","#222F3D","#F2C511","#F39C19","#E84B3C","#C0382B","#DDE6E8","#BDC3C8","#FFFFFF"],isLoading:!1,initialSelected:[],items:[{action:"restaurant",title:"Dining",active:!0,items:[{id:0,title:"Breakfast & brunch",value:"fav"},{id:1,title:"New American",value:"index"}]}]}},created:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("http://localhost:3000/backgroundimages");case 3:e=t.sent,this.dataImages=e.data,this.isLoading=!1,t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:return t.prev=10,t.next=13,m.a.get("http://localhost:3000/clipartimages");case 13:i=t.sent,this.clipartImages=i.data,this.isLoading=!1,t.next=20;break;case 18:t.prev=18,t.t1=t["catch"](10);case 20:window.addEventListener("keydown",this.onkey);case 21:case"end":return t.stop()}},t,this,[[0,8],[10,18]])}));function e(){return t.apply(this,arguments)}return e}(),beforeDestroy:function(){window.removeEventListener("keydown",this.onkey)},computed:{pagebackgroundColor:{get:function(){return this.$store.state.rect.rects.page.backgroundcolor},set:function(t){this.$store.dispatch("rect/changeBackgroundColor",{color:t})}},backgroundopacity:{get:function(){return this.$store.state.rect.rects.page.opacity},set:function(t){this.$store.dispatch("rect/changeBackgroundOpacity",{opacity:t})}},background_image:function(){return{id:this.$store.state.rect.rects.page.backgroundimageID,filename:this.$store.state.rect.rects.page.backgroundimage}},fontsize:{get:function(){return null===this.activeRect?0:this.$store.state.rect.rects.childs[this.activeRect].style["font-size"].replace("px","")},set:function(t){this.$store.dispatch("rect/changeFontSize",{id:this.activeRect,fontsize:t+"px"})}},fontweight:{get:function(){if(null===this.activeRect)return"";var t=null;return 400===this.$store.state.rect.rects.childs[this.activeRect].style["font-weight"]?t=null:800===this.$store.state.rect.rects.childs[this.activeRect].style["font-weight"]&&(t=0),t},set:function(t){0===t?this.$store.dispatch("rect/changeFontWeight",{id:this.activeRect,fontweight:800}):this.$store.dispatch("rect/changeFontWeight",{id:this.activeRect,fontweight:400})}},fontfamily:{get:function(){return null===this.activeRect?void 0:this.$store.state.rect.rects.childs[this.activeRect].style["font-family"]},set:function(t){}},textalign:{get:function(){if(null===this.activeRect)return"";var t=0;return"left"===this.$store.state.rect.rects.childs[this.activeRect].style["text-align"]?t=0:"center"===this.$store.state.rect.rects.childs[this.activeRect].style["text-align"]?t=1:"right"===this.$store.state.rect.rects.childs[this.activeRect].style["text-align"]?t=2:"justify"===this.$store.state.rect.rects.childs[this.activeRect].style["text-align"]&&(t=2),t},set:function(t){var e="left";0===t?e="left":1===t?e="center":2===t?e="right":3===t&&(e="justify"),this.$store.dispatch("rect/changeFontAlign",{id:this.activeRect,textalign:e})}},text:{get:function(){return null===this.activeRect?"":this.$store.state.rect.rects.childs[this.activeRect].text},set:function(t){this.$store.dispatch("rect/changeText",{id:this.activeRect,text:t})}},color:{get:function(){return null===this.activeRect?"":this.$store.state.rect.rects.childs[this.activeRect].style.color},set:function(t){this.$store.dispatch("rect/changeFontColor",{id:this.activeRect,color:t})}},elementbackgroundcolor:{get:function(){return null===this.activeRect?"":this.$store.state.rect.rects.childs[this.activeRect].style["background-color"]},set:function(t){this.$store.dispatch("rect/changeElementBackgroundColor",{id:this.activeRect,color:t})}},activeRect:function(){return this.$store.getters["rect/getActive"]},width:function(){return null===this.activeRect?"":this.$store.state.rect.rects.childs[this.activeRect].width},height:function(){return null===this.activeRect?"":this.$store.state.rect.rects.childs[this.activeRect].height},top:function(){return null===this.activeRect?"":this.$store.state.rect.rects.childs[this.activeRect].top},left:function(){return null===this.activeRect?"":this.$store.state.rect.rects.childs[this.activeRect].left},minw:function(){return null===this.activeRect?"":this.$store.state.rect.rects.childs[this.activeRect].minw},minh:function(){return null===this.activeRect?"":this.$store.state.rect.rects.childs[this.activeRect].minh},aspectRatio:function(){return null!==this.activeRect&&this.$store.state.rect.rects.childs[this.activeRect].aspectRatio},parentLim:function(){return null!==this.activeRect&&this.$store.state.rect.rects.childs[this.activeRect].parentLim},draggable:function(){return null!==this.activeRect&&this.$store.state.rect.rects.childs[this.activeRect].draggable},resizable:function(){return null!==this.activeRect&&this.$store.state.rect.rects.childs[this.activeRect].resizable},snapToGrid:function(){return null!==this.activeRect&&this.$store.state.rect.rects.childs[this.activeRect].snapToGrid},topIsLocked:function(){return null!==this.activeRect&&("x"===this.$store.state.rect.rects.childs[this.activeRect].axis||"none"===this.$store.state.rect.rects.childs[this.activeRect].axis)},leftIsLocked:function(){return null!==this.activeRect&&("y"===this.$store.state.rect.rects.childs[this.activeRect].axis||"none"===this.$store.state.rect.rects.childs[this.activeRect].axis)},zIndex:function(){return null===this.activeRect?null:1===this.$store.state.rect.rects.childs[this.activeRect].zIndex?"isFirst":this.$store.state.rect.rects.childs[this.activeRect].zIndex===this.$store.state.rect.rects.childs.length?"isLast":"normal"}},methods:{myFunc:function(t){null!==this.activeRect&&this.$store.dispatch("rect/changeFont",{id:this.activeRect,font:t.family})},removeElement:function(t){null!==this.activeRect&&this.$store.dispatch("rect/removeElement",{id:this.activeRect})},loadData:function(t){var e=this;return this.isLoading=!0,fetch("http://localhost:3000/elements/"+t).then(function(t){return t.json()}).then(function(t){return e.$store.dispatch("rect/reloaddata",t)}).then(this.isLoading=!1)},onSelectImage:function(t){this.$store.dispatch("rect/changePageBackgroundImage",{file:t.filename,id:t.id})},toggleYLock:function(){null!==this.activeRect&&this.$store.dispatch("rect/changeYLock",{id:this.activeRect})},toggleXLock:function(){null!==this.activeRect&&this.$store.dispatch("rect/changeXLock",{id:this.activeRect})},toggleAspect:function(){null!==this.activeRect&&(this.$store.state.rect.rects.childs[this.activeRect].aspectRatio?this.$store.dispatch("rect/unsetAspect",{id:this.activeRect}):this.$store.dispatch("rect/setAspect",{id:this.activeRect}))},toggleParentLimitation:function(){this.$store.dispatch("rect/toggleParentLimitation",{id:this.activeRect})},toggleResizable:function(){this.$store.dispatch("rect/toggleResizable",{id:this.activeRect})},toggleDraggable:function(){this.$store.dispatch("rect/toggleDraggable",{id:this.activeRect})},toggleSnapToGrid:function(){this.$store.dispatch("rect/toggleSnapToGrid",{id:this.activeRect})},toTop:function(){this.$store.dispatch("rect/changeZToTop",{id:this.activeRect})},toBottom:function(){this.$store.dispatch("rect/changeZToBottom",{id:this.activeRect})},changeMinWidth:function(t){var e=parseInt(t.target.value);("number"!==typeof e||isNaN(e))&&(e=1),e<=0?e=1:e>this.$store.state.rect.rects.childs[this.activeRect].width&&(e=this.$store.state.rect.rects.childs[this.activeRect].width),t.target.value=e,this.$store.dispatch("rect/setMinWidth",{id:this.activeRect,width:e})},changeMinHeight:function(t){var e=parseInt(t.target.value);("number"!==typeof e||isNaN(e))&&(e=1),e<=0?e=1:e>this.$store.state.rect.rects.childs[this.activeRect].height&&(e=this.$store.state.rect.rects.childs[this.activeRect].height),t.target.value=e,this.$store.dispatch("rect/setMinHeight",{id:this.activeRect,height:e})},changeTop:function(t){var e=parseInt(t.target.value);if("number"!==typeof e||isNaN(e))return e=this.$store.state.rect.rects.childs[this.activeRect].top,void(t.target.value=e);this.$store.dispatch("rect/setTop",{id:this.activeRect,top:e})},changeLeft:function(t){var e=parseInt(t.target.value);("number"!==typeof e||isNaN(e))&&(e=this.$store.state.rect.rects.childs[this.activeRect].left,t.target.value=e),this.$store.dispatch("rect/setLeft",{id:this.activeRect,left:e})},changeWidth:function(t){var e=parseInt(t.target.value);("number"!==typeof e||isNaN(e))&&(e=this.$store.state.rect.rects.childs[this.activeRect].width,t.target.value=e),this.$store.dispatch("rect/setWidth",{id:this.activeRect,width:e})},changeHeight:function(t){var e=parseInt(t.target.value);("number"!==typeof e||isNaN(e))&&(e=this.$store.state.rect.rects.childs[this.activeRect].height,t.target.value=e),this.$store.dispatch("rect/setHeight",{id:this.activeRect,height:e})}}},x=_,A=(i("d84e"),i("2877")),N=i("6544"),R=i.n(N),I=i("8336"),y=i("a609"),L=i("b0af"),T=i("99d9"),C=i("169a"),k=i("cd55"),O=i("49e2"),w=i("0e8f"),G=i("132d"),S=i("a722"),B=i("8860"),$=i("56b0"),D=i("ba95"),H=i("40fe"),z=i("5d23"),j=i("ba0d"),F=i("9910"),V=i("2677"),P=i("71d9"),M=i("2a7f"),X=Object(A["a"])(x,d,h,!1,null,null,null),W=X.exports;R()(X,{VBtn:I["a"],VBtnToggle:y["a"],VCard:L["a"],VCardText:T["a"],VDialog:C["a"],VExpansionPanel:k["a"],VExpansionPanelContent:O["a"],VFlex:w["a"],VIcon:G["a"],VLayout:S["a"],VList:B["a"],VListGroup:$["a"],VListTile:D["a"],VListTileAction:H["a"],VListTileContent:z["a"],VListTileTitle:z["b"],VSlider:j["a"],VSpacer:F["a"],VTextField:V["a"],VToolbar:P["a"],VToolbarItems:M["a"],VToolbarTitle:M["b"]});var Z=i("c0e9"),U=i.n(Z),K=i("e511"),Y=(i("e40d"),{name:"App",components:{Loading:E.a,VueDragResize:l.a,toolbar:W},data:function(){return{isLoading:!1}},computed:{rects:function(){return this.$store.state.rect.rects.childs},page_background_image:function(){return void 0==this.$store.state.rect.rects.page.backgroundimage?"no.png":this.$store.state.rect.rects.page.backgroundimage},page_background_image_opacity:function(){return void 0==this.$store.state.rect.rects.page.opacity?"1":this.$store.state.rect.rects.page.opacity},page_background_color:function(){return void 0==this.$store.state.rect.rects.page.backgroundcolor?"#ffffff":this.$store.state.rect.rects.page.backgroundcolor}},methods:{download:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,U()(document.querySelector("#page"),{imageTimeout:5e3,useCORS:!0,scale:2,allowTaint:!0,scrollX:0,scrollY:0,foreignObjectRendering:!1,backgroundColor:"#ffffff"}).then(function(t){document.getElementById("pdf").innerHTML="",document.getElementById("pdf").appendChild(t);var i=new K({orientation:"p",unit:"mm",format:"a4",putOnlyUsedFonts:!0}),a=t.toDataURL("image/png"),c=i.getImageProperties(a),s=i.internal.pageSize.getWidth(),n=c.height*s/c.width;i.addImage(a,"PNG",-2,0,s,n),i.save("relatorio-remoto.pdf"),document.getElementById("pdf").innerHTML="",e.isLoading=!1});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),activateEv:function(t){this.$store.dispatch("rect/setActive",{id:t})},deactivateEv:function(t){this.$store.dispatch("rect/unsetActive",{id:t})},changePosition:function(t,e){this.$store.dispatch("rect/setTop",{id:e,top:t.top}),this.$store.dispatch("rect/setLeft",{id:e,left:t.left}),this.$store.dispatch("rect/setWidth",{id:e,width:t.width}),this.$store.dispatch("rect/setHeight",{id:e,height:t.height})},changeSize:function(t,e){this.$store.dispatch("rect/setTop",{id:e,top:t.top}),this.$store.dispatch("rect/setLeft",{id:e,left:t.left}),this.$store.dispatch("rect/setWidth",{id:e,width:t.width}),this.$store.dispatch("rect/setHeight",{id:e,height:t.height})},addItem:function(t){var e={};switch(t){case"text":e={width:150,height:21,top:0,left:0,draggable:!0,resizable:!0,minw:10,minh:10,axis:"both",parentLim:!0,snapToGrid:!0,aspectRatio:!1,zIndex:3,active:!1,class:"text",text:"Dein Text hier",style:{backgroundcolor:"transparent","font-size":"16px",color:"#000000","letter-spacing":"0em","font-weight":400,"font-style":"","text-decoration":"","text-align":"left"}},this.$store.dispatch("rect/addElement",{data:e});break;case"letterbox":e={width:300,height:60,top:0,left:0,draggable:!0,resizable:!0,minw:100,minh:60,axis:"both",parentLim:!0,snapToGrid:!0,aspectRatio:!1,zIndex:4,active:!1,class:"letterbox",text:"",style:{backgroundcolor:"transparent","font-size":"12px",color:"#000000","letter-spacing":"0em","font-weight":400,"font-style":"","text-decoration":"","text-align":"left"}},this.$store.dispatch("rect/addElement",{data:e});break;case"imagebox913":e={width:340,height:491,top:0,left:0,draggable:!0,resizable:!1,minw:100,minh:60,axis:"both",parentLim:!0,snapToGrid:!0,aspectRatio:!1,zIndex:1,active:!1,class:"imagebox913",text:"hier foto aufkleben",style:{backgroundcolor:"transparent","font-size":"12px",color:"#000000","letter-spacing":"0em","font-weight":400,"font-style":"","text-decoration":"","text-align":"left",width:"9cm",height:"13cm","padding-top":"220px"}},this.$store.dispatch("rect/addElement",{data:e});break;case"imagebox139":e={width:491,height:340,top:0,left:0,draggable:!0,resizable:!1,minw:100,minh:60,axis:"both",parentLim:!0,snapToGrid:!0,aspectRatio:!1,zIndex:1,active:!1,class:"imagebox139",text:"hier foto aufkleben",style:{backgroundcolor:"transparent","font-size":"12px",color:"#000000","letter-spacing":"0em","font-weight":400,"font-style":"","text-decoration":"","text-align":"left",width:"13cm",height:"9cm","padding-top":"150px"}},this.$store.dispatch("rect/addElement",{data:e});break;case"clipart":e={width:150,height:150,top:0,left:0,draggable:!0,resizable:!0,minw:50,minh:50,axis:"both",parentLim:!0,snapToGrid:!0,aspectRatio:!1,zIndex:1,active:!1,class:"clipart",text:"clipart",style:{backgroundcolor:"transparent","font-size":"12px",color:"#000000","letter-spacing":"0em","font-weight":400,"font-style":"","text-decoration":"","text-align":"left",width:"13cm",height:"9cm","padding-top":"150px"}},this.$store.dispatch("rect/addElement",{data:e});break}}}}),J=Y,q=(i("034f"),i("7496")),Q=i("a523"),tt=i("549c"),et=Object(A["a"])(J,s,n,!1,null,null,null),it=et.exports;R()(et,{VApp:q["a"],VBtn:I["a"],VCard:L["a"],VContainer:Q["a"],VContent:tt["a"],VFlex:w["a"],VIcon:G["a"],VLayout:S["a"],VSpacer:F["a"],VToolbar:P["a"],VToolbarItems:M["a"],VToolbarTitle:M["b"]});var at,ct=i("2f62"),st="ENABLE_ACTIVE",nt="DISABLE_ACTIVE",rt="ENABLE_DRAGGABLE",ot="DISABLE_DRAGGABLE",lt="ENABLE_RESIZABLE",dt="DISABLE_RESIZABLE",ht="ENABLE_PARENT_LIMITATION",ut="DISABLE_PARENT_LIMITATION",gt="ENABLE_SNAP_TO_GRID",ft="DISABLE_SNAP_TO_GRID",vt="ENABLE_ASPECT",pt="DISABLE_ASPECT",mt="ENABLE_X_AXIS",bt="ENABLE_Y_AXIS",Et="ENABLE_BOTH_AXIS",_t="ENABLE_NONE_AXIS",xt="CHANGE_ZINDEX",At="CHANGE_MINW",Nt="CHANGE_MINH",Rt="CHANGE_WIDTH",It="CHANGE_HEIGHT",yt="CHANGE_TOP",Lt="CHANGE_LEFT",Tt="RELOADDATA",Ct="ADD_ELEMENT",kt="REMOVE_ELEMENT",Ot="CHANGE_PAGE_BACKGROUND_IMAGE",wt="CHANGE_FONTSIZE",Gt="CHANGE_BACKGROUNDCOLOR",St="CHANGE_BACKGROUNDOPACITY",Bt="CHANGE_FONTCOLOR",$t="CHANGE_FONTALIGN",Dt="CHANGE_FONTWEIGHT",Ht="CHANGE_TEXT",zt="CHANGE_ELEMENT_BACKGROUNDCOLOR",jt="CHANGE_FONT",Ft={ENABLE_ACTIVE:st,DISABLE_ACTIVE:nt,ENABLE_DRAGGABLE:rt,DISABLE_DRAGGABLE:ot,ENABLE_RESIZABLE:lt,DISABLE_RESIZABLE:dt,ENABLE_PARENT_LIMITATION:ht,DISABLE_PARENT_LIMITATION:ut,ENABLE_SNAP_TO_GRID:gt,DISABLE_SNAP_TO_GRID:ft,ENABLE_ASPECT:vt,DISABLE_ASPECT:pt,ENABLE_X_AXIS:mt,ENABLE_Y_AXIS:bt,ENABLE_NONE_AXIS:_t,ENABLE_BOTH_AXIS:Et,CHANGE_ZINDEX:xt,CHANGE_MINW:At,CHANGE_MINH:Nt,CHANGE_WIDTH:Rt,CHANGE_HEIGHT:It,CHANGE_TOP:yt,CHANGE_LEFT:Lt,RELOADDATA:Tt,ADD_ELEMENT:Ct,REMOVE_ELEMENT:kt,CHANGE_PAGE_BACKGROUND_IMAGE:Ot,CHANGE_FONTSIZE:wt,CHANGE_BACKGROUNDCOLOR:Gt,CHANGE_BACKGROUNDOPACITY:St,CHANGE_FONTCOLOR:Bt,CHANGE_FONTALIGN:$t,CHANGE_FONTWEIGHT:Dt,CHANGE_TEXT:Ht,CHANGE_ELEMENT_BACKGROUNDCOLOR:zt,CHANGE_FONT:jt},Vt={changeFont:function(t,e){var i=t.commit;i(Ft.CHANGE_FONT,e)},changeElementBackgroundColor:function(t,e){var i=t.commit;i(Ft.CHANGE_ELEMENT_BACKGROUNDCOLOR,e)},changeText:function(t,e){var i=t.commit;i(Ft.CHANGE_TEXT,e)},changeFontWeight:function(t,e){var i=t.commit;i(Ft.CHANGE_FONTWEIGHT,e)},changeFontAlign:function(t,e){var i=t.commit;i(Ft.CHANGE_FONTALIGN,e)},changeFontColor:function(t,e){var i=t.commit;i(Ft.CHANGE_FONTCOLOR,e)},changeBackgroundColor:function(t,e){var i=t.commit;i(Ft.CHANGE_BACKGROUNDCOLOR,e.color)},changeBackgroundOpacity:function(t,e){var i=t.commit;i(Ft.CHANGE_BACKGROUNDOPACITY,e.opacity)},removeElement:function(t,e){var i=t.commit,a=e.id;i(Ft.REMOVE_ELEMENT,a)},addElement:function(t,e){var i=t.commit;i(Ft.ADD_ELEMENT,e)},reloaddata:function(t,e){var i=t.commit;i(Ft.RELOADDATA,e)},changePageBackgroundImage:function(t,e){var i=t.commit;i(Ft.CHANGE_PAGE_BACKGROUND_IMAGE,e)},changeFontSize:function(t,e){var i=t.commit;i(Ft.CHANGE_FONTSIZE,e)},setActive:function(t,e){for(var i=t.commit,a=t.state,c=e.id,s=0,n=a.rects.childs.length;s<n;s++)i(s!==c?Ft.DISABLE_ACTIVE:Ft.ENABLE_ACTIVE,s)},unsetActive:function(t,e){var i=t.commit,a=e.id;i(Ft.DISABLE_ACTIVE,a)},toggleDraggable:function(t,e){var i=t.commit,a=t.state,c=e.id;a.rects.childs[c].draggable?i(Ft.DISABLE_DRAGGABLE,c):i(Ft.ENABLE_DRAGGABLE,c)},toggleResizable:function(t,e){var i=t.commit,a=t.state,c=e.id;a.rects.childs[c].resizable?i(Ft.DISABLE_RESIZABLE,c):i(Ft.ENABLE_RESIZABLE,c)},toggleParentLimitation:function(t,e){var i=t.commit,a=t.state,c=e.id;a.rects.childs[c].parentLim?i(Ft.DISABLE_PARENT_LIMITATION,c):i(Ft.ENABLE_PARENT_LIMITATION,c)},toggleSnapToGrid:function(t,e){var i=t.commit,a=t.state,c=e.id;a.rects.childs[c].snapToGrid?i(Ft.DISABLE_SNAP_TO_GRID,c):i(Ft.ENABLE_SNAP_TO_GRID,c)},setAspect:function(t,e){var i=t.commit,a=e.id;i(Ft.ENABLE_ASPECT,a)},unsetAspect:function(t,e){var i=t.commit,a=e.id;i(Ft.DISABLE_ASPECT,a)},setWidth:function(t,e){var i=t.commit,a=e.id,c=e.width;i(Ft.CHANGE_WIDTH,{id:a,width:c})},setHeight:function(t,e){var i=t.commit,a=e.id,c=e.height;i(Ft.CHANGE_HEIGHT,{id:a,height:c})},setTop:function(t,e){var i=t.commit,a=e.id,c=e.top;i(Ft.CHANGE_TOP,{id:a,top:c})},setLeft:function(t,e){var i=t.commit,a=e.id,c=e.left;i(Ft.CHANGE_LEFT,{id:a,left:c})},changeXLock:function(t,e){var i=t.commit,a=t.state,c=e.id;switch(a.rects.childs[c].axis){case"both":i(Ft.ENABLE_Y_AXIS,c);break;case"x":i(Ft.ENABLE_NONE_AXIS,c);break;case"y":i(Ft.ENABLE_BOTH_AXIS,c);break;case"none":i(Ft.ENABLE_X_AXIS,c);break}},changeYLock:function(t,e){var i=t.commit,a=t.state,c=e.id;switch(a.rects.childs[c].axis){case"both":i(Ft.ENABLE_X_AXIS,c);break;case"x":i(Ft.ENABLE_BOTH_AXIS,c);break;case"y":i(Ft.ENABLE_NONE_AXIS,c);break;case"none":i(Ft.ENABLE_Y_AXIS,c);break}},changeZToBottom:function(t,e){var i=t.commit,a=t.state,c=e.id;if(1!==a.rects.childs[c].zIndex){i(Ft.CHANGE_ZINDEX,{id:c,zIndex:1});for(var s=0,n=a.rects.childs.length;s<n;s++)if(s!==c){if(a.rects.childs[s].zIndex===a.rects.childs.length)continue;i(Ft.CHANGE_ZINDEX,{id:s,zIndex:a.rects.childs[s].zIndex+1})}}},changeZToTop:function(t,e){var i=t.commit,a=t.state,c=e.id;if(a.rects.childs[c].zIndex!==a.rects.childs.length){i(Ft.CHANGE_ZINDEX,{id:c,zIndex:a.rects.childs.length});for(var s=0,n=a.rects.childs.length;s<n;s++)if(s!==c){if(1===a.rects.childs[s].zIndex)continue;i(Ft.CHANGE_ZINDEX,{id:s,zIndex:a.rects.childs[s].zIndex-1})}}},setMinWidth:function(t,e){var i=t.commit,a=e.id,c=e.width;i(Ft.CHANGE_MINW,{id:a,minw:c})},setMinHeight:function(t,e){var i=t.commit,a=e.id,c=e.height;i(Ft.CHANGE_MINH,{id:a,minh:c})}},Pt={getActive:function(t){for(var e=0,i=t.rects.childs.length;e<i;e++){var a=t.rects.childs[e];if(a.active)return e}return null}},Mt=i("bd86"),Xt=(i("9ec8"),at={},Object(Mt["a"])(at,st,function(t,e){t.rects.childs[e].active=!0}),Object(Mt["a"])(at,nt,function(t,e){t.rects.childs[e].active=!1}),Object(Mt["a"])(at,vt,function(t,e){t.rects.childs[e].aspectRatio=!0}),Object(Mt["a"])(at,pt,function(t,e){t.rects.childs[e].aspectRatio=!1}),Object(Mt["a"])(at,rt,function(t,e){t.rects.childs[e].draggable=!0}),Object(Mt["a"])(at,ot,function(t,e){t.rects.childs[e].draggable=!1}),Object(Mt["a"])(at,lt,function(t,e){t.rects.childs[e].resizable=!0}),Object(Mt["a"])(at,dt,function(t,e){t.rects.childs[e].resizable=!1}),Object(Mt["a"])(at,gt,function(t,e){t.rects.childs[e].snapToGrid=!0}),Object(Mt["a"])(at,ft,function(t,e){t.rects.childs[e].snapToGrid=!1}),Object(Mt["a"])(at,Et,function(t,e){t.rects.childs[e].axis="both"}),Object(Mt["a"])(at,_t,function(t,e){t.rects.childs[e].axis="none"}),Object(Mt["a"])(at,mt,function(t,e){t.rects.childs[e].axis="x"}),Object(Mt["a"])(at,bt,function(t,e){t.rects.childs[e].axis="y"}),Object(Mt["a"])(at,ht,function(t,e){t.rects.childs[e].parentLim=!0}),Object(Mt["a"])(at,ut,function(t,e){t.rects.childs[e].parentLim=!1}),Object(Mt["a"])(at,xt,function(t,e){t.rects.childs[e.id].zIndex=e.zIndex}),Object(Mt["a"])(at,It,function(t,e){t.rects.childs[e.id].height=e.height}),Object(Mt["a"])(at,Rt,function(t,e){t.rects.childs[e.id].width=e.width}),Object(Mt["a"])(at,yt,function(t,e){t.rects.childs[e.id].top=e.top}),Object(Mt["a"])(at,Lt,function(t,e){t.rects.childs[e.id].left=e.left}),Object(Mt["a"])(at,Nt,function(t,e){t.rects.childs[e.id].minh=e.minh}),Object(Mt["a"])(at,At,function(t,e){t.rects.childs[e.id].minw=e.minw}),Object(Mt["a"])(at,Tt,function(t,e){t.rects.page=e.page,t.rects.childs=[];for(var i=0;i<e.childs.length;i++)t.rects.childs.push(e.childs[i])}),Object(Mt["a"])(at,Ct,function(t,e){t.rects.childs.push(e.data)}),Object(Mt["a"])(at,kt,function(t,e){t.rects.childs.splice(e,1)}),Object(Mt["a"])(at,Ot,function(t,e){t.rects.page.backgroundimage=e.file,t.rects.page.backgroundimageID=e.id}),Object(Mt["a"])(at,Gt,function(t,e){t.rects.page.backgroundcolor=e}),Object(Mt["a"])(at,St,function(t,e){t.rects.page.opacity=e}),Object(Mt["a"])(at,wt,function(t,e){t.rects.childs[e.id].style["font-size"]=e.fontsize}),Object(Mt["a"])(at,Bt,function(t,e){t.rects.childs[e.id].style.color=e.color}),Object(Mt["a"])(at,$t,function(t,e){t.rects.childs[e.id].style["text-align"]=e.textalign}),Object(Mt["a"])(at,Dt,function(t,e){t.rects.childs[e.id].style["font-weight"]=e.fontweight}),Object(Mt["a"])(at,Ht,function(t,e){t.rects.childs[e.id].text=e.text}),Object(Mt["a"])(at,zt,function(t,e){t.rects.childs[e.id].style["background-color"]=e.color}),Object(Mt["a"])(at,jt,function(t,e){t.rects.childs[e.id].style["font-family"]=e.font}),at),Wt={rects:{id:0,page:{backgroundimageID:2,backgroundcolor:"#ffffff",backgroundimage:"no.png",opacity:"1"},childs:[{width:200,height:21,top:170,left:10,draggable:!0,resizable:!0,minw:10,minh:10,axis:"both",parentLim:!0,snapToGrid:!0,aspectRatio:!1,zIndex:3,active:!1,class:"text",text:"NEUER TEXT",style:{"background-color":"#EF9A9A","font-size":"12px","font-family":"Abril Fatface",color:"#000000","letter-spacing":"0em","font-weight":400,"text-decoration":"","text-align":"left"}},{width:300,height:250,top:370,left:300,draggable:!0,resizable:!0,minw:10,minh:10,axis:"both",parentLim:!0,snapToGrid:!0,aspectRatio:!1,zIndex:2,active:!1,class:"text",text:"NEUER TEXT13",style:{"background-color":"#EF9A4A",color:"#000000","font-size":"12px","letter-spacing":"0em","font-weight":400,"text-decoration":"","text-align":"left"}}]}},Zt={namespaced:!0,actions:Vt,getters:Pt,mutations:Xt,state:Wt};a["a"].use(ct["a"]);var Ut=!1,Kt=new ct["a"].Store({modules:{rect:Zt},strict:Ut});a["a"].config.productionTip=!1,a["a"].component("vue-drag-resize",l.a),new a["a"]({render:function(t){return t(it)},store:Kt}).$mount("#app")},d84e:function(t,e,i){"use strict";var a=i("4687"),c=i.n(a);c.a}});
//# sourceMappingURL=app.10b3d63c.js.map