(function(t){function e(e){for(var n,i,r=e[0],l=e[1],c=e[2],d=0,m=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Santhosh_Bdayy/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},1992:function(t,e,a){t.exports=a.p+"img/HappyFace.2129359e.jpg"},"1c35":function(t,e,a){t.exports=a.p+"img/BdayWish.d945b435.png"},2180:function(t,e,a){t.exports=a.p+"img/SanthoshCricket.2dfdf086.jpg"},"26f6":function(t,e,a){"use strict";var n=a("c81b"),o=a.n(n);o.a},2990:function(t,e,a){},"480b":function(t,e,a){},"4f2a":function(t,e,a){},5172:function(t,e,a){t.exports=a.p+"img/SanthoshClg.b7b6a8b7.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-container",{attrs:{id:"container"}},[a("vue-page-transition",{attrs:{name:"fade"}},[a("router-view",{staticClass:"view"})],1),a("el-footer",[t._v("🤍 Happy Birthday Santhosh 🤍")])],1)],1)},s=[],i={name:"App"},r=i,l=(a("034f"),a("2877")),c=Object(l["a"])(r,o,s,!1,null,null,null),u=c.exports,d=a("5c96"),m=a.n(d),h=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"landing"},[a("transition",{attrs:{name:"slide-fade"}},[t.show?a("h1",{staticClass:"landing_text"},[t._v(t._s(t.message))]):t._e()])],1)},f=[],g={name:"Landing",data:function(){var t=["This is more than a website...","It's about you and your birthday...","About celebrations and wishes...","Are you ready for the experience...?","Welcome to yourCelebrationDomain.com"];return{message:"",messages:t,show:!0,showButton:!1,count:0,maxCount:t.length-1}},mounted:function(){this.message=this.messages[this.count],setTimeout(this.fadeText,2e3)},methods:{fadeText:function(){this.show=!1,this.count++,this.message=this.messages[this.count],setTimeout(this.showText,1250)},showText:function(){var t=this;this.show=!0,this.count!==this.maxCount?setTimeout(this.fadeText,2250):(this.showButton=!0,setTimeout((function(){return t.$router.push("/home")}),3e3))}}},b=g,v=(a("26f6"),Object(l["a"])(b,p,f,!1,null,"6db1c4bf",null)),y=v.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("el-container",{staticClass:"home_container"},[a("el-main",{staticClass:"home_content"},[a("el-row",{staticClass:"home_row cake_row",attrs:{gutter:10,type:"flex",justify:"center"}},[a("el-col",{attrs:{xs:20,sm:16,md:12,lg:6,xl:6}},[a("transition",{attrs:{name:"slide-fade"}},[t.showCake?a("div",{staticClass:"cake"},[a("div",{staticClass:"plate"}),a("div",{staticClass:"layer layer-bottom"}),a("div",{staticClass:"layer layer-middle"}),a("div",{staticClass:"layer layer-top"}),a("div",{staticClass:"icing"}),a("div",{staticClass:"drip drip1"}),a("div",{staticClass:"drip drip2"}),a("div",{staticClass:"drip drip3"}),a("div",{staticClass:"candle"},[a("div",{staticClass:"flame"})])]):t._e()])],1)],1),a("el-row",{staticClass:"button_row",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{xs:16,sm:16,md:12,lg:6,xl:6}},[a("transition",{attrs:{name:"slide-fade"}},[t.showButtons?a("el-button",{staticClass:"home_button",attrs:{plain:"",type:"danger",icon:"el-icon-ice-cream-round"},on:{click:function(e){return t.goMessages()}}},[t._v(" Messages ")]):t._e()],1)],1)],1),a("el-row",{staticClass:"button_row",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{xs:16,sm:16,md:12,lg:6,xl:6}},[a("transition",{attrs:{name:"slide-fade"}},[t.showButtons?a("el-button",{staticClass:"home_button",attrs:{plain:"",type:"danger",icon:"el-icon-sugar"},on:{click:function(e){return t.goVideo()}}},[t._v(" Audio ")]):t._e()],1)],1)],1),a("el-row",{staticClass:"button_row",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{xs:16,sm:16,md:12,lg:6,xl:6}},[a("transition",{attrs:{name:"slide-fade"}},[t.showButtons?a("el-button",{staticClass:"home_button",attrs:{plain:"",type:"danger",icon:"el-icon-cold-drink"},on:{click:function(e){return t.goStoriesBehind()}}},[t._v(" Stories Behind ")]):t._e()],1)],1)],1)],1)],1),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span"),a("span")],1)},_=[],x={name:"Home",data:function(){return{showCake:!1,showButtons:!1}},mounted:function(){this.showCake=!0,this.showButtons=!0},methods:{goMessages:function(){this.$router.push("/messages")},goVideo:function(){this.$router.push("/video")},goStoriesBehind:function(){this.$router.push("/storiesbehind")}}},C=x,S=(a("c7ff"),Object(l["a"])(C,w,_,!1,null,"cc10e9f8",null)),k=S.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"messages"},[a("el-row",[a("el-col",{attrs:{xs:2,sm:2,md:2,lg:2,xl:2}},[a("el-button",{staticClass:"back_button",attrs:{type:"danger",circle:"",icon:"el-icon-d-arrow-left"},on:{click:function(e){return t.goBack()}}})],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[a("h1",{staticStyle:{"margin-left":"50px"}},[t._v("On Boarding to Some of the best moments in your life")])])],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{xs:24,sm:20,md:16,lg:12,xl:12}},[a("div",{staticClass:"block",staticStyle:{overflow:"auto","min-height":"70vh"}},[a("loading",{attrs:{active:t.loaderLoading,"is-full-page":t.loaderFullPage,color:t.loaderColor,opacity:t.loaderOpacity,height:t.loaderHeight,width:t.loaderWidth,loader:t.loaderStyle}}),a("transition",{attrs:{name:"el-zoom-in-bottom"}},[a("el-timeline",{directives:[{name:"show",rawName:"v-show",value:t.showTimeline,expression:"showTimeline"}],staticClass:"messages_timeline"},[a("el-timeline-item",{attrs:{timestamp:"Heii Santhosh",placement:"top"}},[a("el-card",[a("el-image",{attrs:{src:t.img1},on:{load:t.onImgLoad}})],1)],1),a("el-timeline-item",[a("el-card",[a("el-image",{attrs:{src:t.img2},on:{load:t.onImgLoad}}),a("h3",[t._v("Sandy and his boys #back_benchers #bring_back_memories")])],1)],1),a("el-timeline-item",[a("el-card",[a("el-image",{attrs:{src:t.img3},on:{load:t.onImgLoad}}),a("h3",[t._v("You little boy, you give me a brotherly feeling :P")])],1)],1),a("el-timeline-item",[a("el-card",[a("el-image",{attrs:{src:t.img4},on:{load:t.onImgLoad}}),a("h3",[t._v("Tour - Sambavam - CAMERA")])],1)],1),a("el-timeline-item",[a("el-card",[a("el-image",{attrs:{src:t.img5},on:{load:t.onImgLoad}}),a("h3",[t._v("I always wish to see you in this version , Happiee Face")])],1)],1),a("el-timeline-item",[a("el-card",[a("el-image",{attrs:{src:t.img6},on:{load:t.onImgLoad}})],1),a("h3",[t._v("Nanu Nallavathan nu pathivupanra moment")])],1),a("el-timeline-item",[a("el-card",[a("el-image",{attrs:{src:t.img7},on:{load:t.onImgLoad}})],1),a("h3")],1)],1)],1)],1)])],1)],1)},j=[],T=a("9062"),O=a.n(T),L=(a("e40d"),a("1c35")),I=a.n(L),P=a("5172"),$=a.n(P),A=a("2180"),H=a.n(A),M=a("8646"),E=a.n(M),F=a("1992"),W=a.n(F),N=a("6e57"),G=a.n(N),V=a("f15b"),z=a.n(V),D={name:"Messages",data:function(){return{showTimeline:!1,img1:I.a,img2:$.a,img3:H.a,img4:E.a,img5:W.a,img6:G.a,img7:z.a,imagesLoaded:0,totalImages:6,loaderLoading:!0,loaderColor:"#dd6161",loaderOpacity:1,loaderStyle:"dots",loaderHeight:60,loaderWidth:60,loaderFullPage:!1}},components:{Loading:O.a},methods:{goBack:function(){this.$router.go(-1)},onImgLoad:function(){var t=this;this.imagesLoaded+=1,this.imagesLoaded===this.totalImages&&(console.log("Images Loaded"),setTimeout((function(){return t.loaderLoading=!1}),500),setTimeout((function(){return t.showTimeline=!0}),800))}}},J=D,Y=(a("5f0e"),Object(l["a"])(J,B,j,!1,null,"b361ce0e",null)),R=Y.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video"},[n("el-row",[n("el-col",{attrs:{xs:2,sm:2,md:2,lg:2,xl:2}},[n("el-button",{staticClass:"back_button",attrs:{type:"danger",circle:"",icon:"el-icon-d-arrow-left"},on:{click:function(e){return t.goBack()}}})],1),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("h1",[t._v("Audio")])])],1),n("el-row",{staticClass:"button_row",attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{xs:16,sm:16,md:12,lg:6,xl:6}},[n("transition",{attrs:{name:"slide-fade"}},[n("el-button",{staticClass:"home_button",on:{click:function(e){return e.preventDefault(),t.playSound()}}},[t._v(" Here You Go Santhosh..!! "),n("audio",{ref:"audioElm",attrs:{id:"myAudio",src:a("b61c")}})])],1)],1)],1)],1)},q=[],K={name:"Audio",play:function(){var t=new Audio("https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3");t.play()},methods:{goBack:function(){this.$router.go(-1)},playSound:function(){var t=document.getElementById("myAudio");return t.paused?t.play():t.pause()}}},Q=K,X=(a("d708"),Object(l["a"])(Q,U,q,!1,null,"32391aa9",null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stories_behind"},[n("el-row",{staticClass:"stories_behind_header"},[n("el-col",{attrs:{xs:2,sm:2,md:2,lg:2,xl:2}},[n("el-button",{staticClass:"back_button",attrs:{type:"danger",circle:"",icon:"el-icon-d-arrow-left"},on:{click:function(e){return t.goBack()}}})],1),n("el-col",{attrs:{xs:24,sm:24,md:20,lg:24,xl:24}},[n("h1",[t._v("Stories Behind")])])],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{xs:24,sm:24,md:20,lg:16,xl:16}},[n("div",{staticClass:"block",staticStyle:{overflow:"auto"}},[n("el-card",{staticClass:"SB_card"},[n("img",{attrs:{src:a("6e11"),height:"500",width:"500"}}),n("h3",[t._v("No caption needed, the picture says it all.. 🤍")])]),n("el-card",{staticClass:"SB_card"},[n("h3",[t._v("Heiii Santhosh Once again happiee hapiee bday to you..!!")]),n("p",[t._v(" Thank you so much for coming into my life"),n("br"),t._v(" I never regret for knowing and being with you in any way"),n("br"),t._v(" Best moments in life for me are the times that we spent together"),n("br")]),n("h3",[t._v(" Thanks for letting me know how strong i am today. It is not always about how we change ourselves with time and situation. Sometimes we should be strong enough to change the situation according to us. #Stay_Stress_Free #Stay_Healthyy ")]),n("p",[t._v("epavu solrathuthan ennanalu pathukalam avlothan easy peasy")]),n("h4",[t._v("With so much Love Signing off Madhu (Anchoring sernthuralam pola ;))")]),n("p",[n("br"),n("br")])])],1)])],1)],1)},et=[],at={name:"StoriesBehind",methods:{goBack:function(){this.$router.go(-1)},goGitHub:function(){window.open("https://github.com/amoossssss/birthday_webpage","_blank")}}},nt=at,ot=(a("c62b"),Object(l["a"])(nt,tt,et,!1,null,"bea027b2",null)),st=ot.exports;n["default"].use(h["a"]);var it=new h["a"]({routes:[{path:"/",name:"LandingPage",component:y},{path:"/home",name:"HomePage",component:k},{path:"/messages",name:"MessagesPage",component:R},{path:"/video",name:"VideoPage",component:Z},{path:"/storiesbehind",name:"StoriesBehindPage",component:st}]}),rt=a("f0eb"),lt=a("e0ec"),ct=a.n(lt);a("4f2a");n["default"].config.productionTip=!1,n["default"].use(m.a),n["default"].use(rt["default"]),n["default"].use(ct.a),new n["default"]({render:function(t){return t(u)},router:it}).$mount("#app")},"5f0e":function(t,e,a){"use strict";var n=a("f42c"),o=a.n(n);o.a},"6e11":function(t,e,a){t.exports=a.p+"img/BeingUs.6cbb9ad2.jpg"},"6e57":function(t,e,a){t.exports=a.p+"img/GoodBoyMode.ef3bc819.png"},"7ce1":function(t,e,a){},"85ec":function(t,e,a){},8646:function(t,e,a){t.exports=a.p+"img/SanthoshTour.9463e013.jpg"},b61c:function(t,e,a){t.exports=a.p+"media/bdaysong.32c4e815.mp3"},c62b:function(t,e,a){"use strict";var n=a("7ce1"),o=a.n(n);o.a},c7ff:function(t,e,a){"use strict";var n=a("2990"),o=a.n(n);o.a},c81b:function(t,e,a){},d708:function(t,e,a){"use strict";var n=a("480b"),o=a.n(n);o.a},f15b:function(t,e,a){t.exports=a.p+"img/SanthoshPics.189bd53a.jpg"},f42c:function(t,e,a){}});
//# sourceMappingURL=app.3892131a.js.map