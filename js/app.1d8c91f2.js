(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],m=0,d=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"169f":function(t,e,a){"use strict";var n=a("675d"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=(a("a481"),{install:function(t){t.mixin({methods:{publicPath:function(t){return"/"+t.replace(/^\/+/g,"")}}})}}),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("dark-template-container")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"dark-template"}},[a("v-fade-transition",{attrs:{mode:"out-in",type:"animation"}},[a("v-content",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("github-ribbon"),a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{md10:"",sm12:""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{md4:""}},[a("sidebar-container",{staticClass:"fill-height"})],1),a("v-flex",{attrs:{md8:""}},[a("content-container",{staticClass:"fill-height"})],1)],1),a("v-layout",[a("v-flex",{attrs:{md12:""}},[a("timeline-primary"),a("timeline-endless")],1)],1)],1)],1)],1)],1)],1)],1)},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"grey darken-3",dark:""}},[a("v-card-text",[a("avatar"),a("div",{staticClass:"text-sm-center mb-4 mt-3"},[a("h1",[t._v("\n        MUHAMMAD RIFQI MAULATUR RAHMAN\n      ")]),a("span",[t._v("\n        Junior Developer\n      ")])]),a("sidebar-section",{attrs:{options:t.sections.info}}),a("sidebar-section",{attrs:{options:t.sections.socials}}),a("sidebar-section",{attrs:{options:t.sections.hobbies},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[a("v-chip",[a("v-avatar",[a("v-icon",[t._v("\n              "+t._s(n.icon)+"\n            ")])],1),t._v("\n          "+t._s(n.text)+"\n        ")],1)]}}])}),a("sidebar-section",{attrs:{options:t.sections.languages},scopedSlots:t._u([{key:"items",fn:function(e){var n=e.items;return[a("v-container",{attrs:{"pa-0":""}},[a("v-layout",{staticClass:"text-xs-center",attrs:{wrap:""}},[t._l(n,(function(e,n){return[a("v-flex",{key:n,attrs:{md3:"",sm4:"",xs6:""}},[a("v-progress-circular",{staticClass:"ma-2",attrs:{rotate:"360",size:"65",width:"2",value:e.value,color:"white"}},[t._v("\n                  "+t._s(e.text)+"\n                ")])],1)]}))],2)],1)]}}])})],1)],1)},u=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-md-center"},[a("v-avatar",{attrs:{color:"grey lighten-4",size:"120"}},[a("img",{attrs:{src:t.publicPath("/img/avatar.jpg"),alt:"Muhammad Rifqi Maulatur Rahman"}})])],1)},d=[],p={name:"Avatar"},v=p,f=a("2877"),g=a("6544"),b=a.n(g),h=a("8212"),_=Object(f["a"])(v,m,d,!1,null,"bc6b867a",null),y=_.exports;b()(_,{VAvatar:h["a"]});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-4"},[a("div",{staticClass:"title mb-3"},[t._v("\n    "+t._s(t.options.title)+"\n  ")]),t.$slots.default?t._t("default"):t.$scopedSlots.items?[t._t("items",null,{items:t.options.items})]:t.$scopedSlots.item?[t._l(t.options.items,(function(e){return t._t("item",null,{item:e})}))]:t._l(t.options.items,(function(t,e){return a("sidebar-section-item",{key:e,attrs:{item:t}})}))],2)},x=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[t.hasIcon?a("v-flex",{attrs:{xs2:""}},[a("v-icon",[t._v("\n      "+t._s(t.item.icon)+"\n    ")])],1):t._e(),a("v-flex",{attrs:{xs10:t.hasIcon,xs12:!t.hasIcon}},[a("div",[t._v("\n      "+t._s(t.item.name)+"\n    ")]),a("p",[t.item.link?a("a",{staticClass:"grey--text",attrs:{href:t.item.link,target:"_blank"}},[t._v("\n        "+t._s(t.item.text)+"\n      ")]):a("span",{staticClass:"grey--text"},[t._v("\n        "+t._s(t.item.text)+"\n      ")])])])],1)},C=[],I={name:"SidebarSectionItem",props:{item:{type:Object,default:function(){}}},computed:{hasIcon:function(){return!!this.item.icon}}},V=I,P=a("0e8f"),j=a("132d"),A=a("a722"),O=Object(f["a"])(V,S,C,!1,null,"a33bb200",null),T=O.exports;b()(O,{VFlex:P["a"],VIcon:j["a"],VLayout:A["a"]});var w={name:"SidebarSection",components:{SidebarSectionItem:T},props:{options:{type:Object,default:function(){}}}},M=w,E=(a("e822"),Object(f["a"])(M,k,x,!1,null,"51d3378f",null)),L=E.exports,$={name:"Sidebar",components:{SidebarSection:L,Avatar:y},data:function(){return{sections:{info:{title:"INFO",items:[{name:"Email",icon:"mdi-email",text:"rifqimaulatur@gmail.com"},{name:"Birth Date",icon:"mdi-cake-variant",text:"14 April 1999"},{name:"Address",icon:"mdi-map-marker",text:"Jalan Letnan Arsyad, Gang Haji Iman, No.15, RT 02/01, Kayurigin Jaya, Bekasi Selatan"}]},socials:{title:"MEDIA SOSIAL",items:[{icon:"mdi-github-circle",text:"rifqii14",link:"https://github.com/rifqii14"},{icon:"mdi-linkedin-box",text:"Muhammad Rifqi Maulatur Rahman",link:"https://www.linkedin.com/in/muhammad-rifqi-maulatur-rahman-814890192/"},{icon:"mdi-instagram",text:"rifqiii14",link:"https://instagram.com/rifqiii14"}]},hobbies:{title:"HOBI",items:[{icon:"mdi-gamepad",text:"Playing Games"},{icon:"mdi-music",text:"Listening Music"},{icon:"mdi-laptop",text:"Coding"}]},languages:{title:"BAHASA",items:[{text:"English",value:30},{text:"Indonesia",value:100}]}}}}},H=$,U=(a("c5f4"),a("b0af")),K=a("99d9"),R=a("cc20"),D=a("a523"),F=a("490a"),J=Object(f["a"])(H,c,u,!1,null,"554a93c6",null),B=J.exports;b()(J,{VAvatar:h["a"],VCard:U["a"],VCardText:K["a"],VChip:R["a"],VContainer:D["a"],VFlex:P["a"],VIcon:j["a"],VLayout:A["a"],VProgressCircular:F["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"grey lighten-4",light:""}},[a("v-card-text",[a("content-section",{attrs:{title:"Profil Singkat"}},[t._v("\n        Saya adalah junior backend developer yang telah mempunyai pengalaman bekerja sebagai freelancer selama 2 tahun. Saya menguasai bahasa\npemrograman PHP dan frameworknya khsusunya Codeigniter , dan beberapa Framework Node JS. Saya pernah membuat API untuk sebuah aplikasi menggunakan Express.js,\nbeberapa Web based application menggunakan Codeigniter, dan mobile application menggunakan Ionic. Saya orang yang senang dan cepat dalam belajar sesuatu yang baru, cepat dalam pengambilan keputusan, mampu bekerja dalam tim dan bekerja di dalam tekanan.\n      ")]),t.educations?a("content-section",{attrs:{title:"Pendidikan"}},t._l(t.educations,(function(e,n){return a("v-layout",{key:n},[a("v-flex",{attrs:{md4:""}},[t._v("\n            "+t._s(e.from)+" - "+t._s(e.to)+"\n          ")]),a("v-flex",{attrs:{md8:""}},[e.title?a("strong",[t._v(t._s(e.title))]):t._e(),e.location?a("div",[a("i",[t._v(t._s(e.location))])]):t._e(),e.description?a("div",[t._v("\n              "+t._s(e.description)+"\n            ")]):t._e()])],1)})),1):t._e(),t.skills?a("content-section",{attrs:{id:"to-timeline",title:"Skills"}},[a("v-layout",{attrs:{wrap:""}},[t._l(t.skills,(function(e,n){return[e.divider?a("v-flex",{key:n,attrs:{md12:"",xs12:"","mb-4":""}}):a("v-flex",{key:n,attrs:{md6:"",xs12:""}},[a("div",{staticClass:"mr-2 ml-2"},[a("div",{staticClass:"align-center"},[a("v-icon",{attrs:{small:""}},[t._v("\n                    "+t._s(e.icon)+"\n                  ")]),t._v("\n                  "+t._s(e.title)+"\n                ")],1),a("v-progress-linear",{staticClass:"progress",attrs:{color:"secondary",height:"3",value:e.value}})],1)])]}))],2)],1):t._e()],1)],1)},q=[],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("h3",{staticClass:"title font-weight-light mb-1"},[t._v("\n      "+t._s(t.title)+"\n    ")]),a("v-spacer"),t._t("actions")],2),a("v-card-text",[t._t("default")],2)],1)},W=[],z={name:"ContentSection",components:{},props:{title:{type:String,default:""}}},Q=z,X=(a("d1ae"),a("12b2")),Y=a("9910"),Z=Object(f["a"])(Q,G,W,!1,null,"331eb13e",null),tt=Z.exports;b()(Z,{VCard:U["a"],VCardText:K["a"],VCardTitle:X["a"],VSpacer:Y["a"]});var et={name:"MainContent",components:{ContentSection:tt},data:function(){return{educations:[{from:"2017",to:"Sekarang",title:"Sarjana Teknik",location:"Universitas Muhammadiyah Prof. Dr. Hamka",description:"Jurusan Teknik Informatika"},{from:"2014",to:"2017",title:"Sekolah Menengah Kejuruan",location:"SMK NEGERI 1 BEKASI",description:"Jurusan Rekayasa Perangkat Lunak"}],skills:[{title:"PHP",icon:"mdi-language-php",value:95},{title:"JavaScript",icon:"mdi-language-javascript",value:70},{title:"Codeigniter Framework",icon:"mdi-PHP",value:95},{title:"Vue.js Framework",icon:"mdi-vuejs",value:40},{title:"Database",icon:"mdi-database",value:90},{title:"Node JS",icon:"mdi-nodejs",value:67}]}}},at=et,nt=(a("d69d"),a("8e36")),it=Object(f["a"])(at,N,q,!1,null,"2bb41fc2",null),rt=it.exports;b()(it,{VCard:U["a"],VCardText:K["a"],VFlex:P["a"],VIcon:j["a"],VLayout:A["a"],VProgressLinear:nt["a"]});var st,ot,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"grey lighten-4",light:""}},[a("v-card-text",[a("content-section",{attrs:{id:"timeline",title:"Pengalaman"}},[a("v-timeline",{attrs:{dense:""}},t._l(t.orderedItems,(function(e,n){return a("v-timeline-item",{key:n,class:{transparent:e.transparent},attrs:{icon:e.icon||"",large:""},scopedSlots:t._u([e.iconImage?{key:"icon",fn:function(){return[a("v-avatar",[a("img",{attrs:{src:t.publicPath(e.iconImage)}})])]},proxy:!0}:null,{key:"opposite",fn:function(){},proxy:!0}],null,!0)},[a("v-layout",[t.$vuetify.breakpoint.smAndUp?a("v-flex",{attrs:{md1:"",sm2:"","align-self-center":""}},[a("span",[t._v(t._s(e.year))])]):t._e(),a("v-flex",{attrs:{md11:"",sm10:"",xs12:""}},[a("v-card",{staticClass:"elevation-1"},[a("v-card-title",{staticClass:"pb-0"},[a("div",[t.$vuetify.breakpoint.xsOnly?a("p",[t._v("\n                      "+t._s(e.year)+"\n                    ")]):t._e(),a("h3",[t._v(t._s(e.title))])])]),a("v-card-text",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{md7:!!e.image,md12:!e.image,xs12:""}},[a("div",{staticClass:"mr-1"},[e.text?a("span",{staticClass:"pre"},[t._v(t._s(e.text))]):e.html?a("div",{domProps:{innerHTML:t._s(e.html)}}):t._e()])]),e.image?a("v-flex",{attrs:{md5:"",xs12:""}},[a("div",{staticClass:"mt-2"},[Array.isArray(e.image)?a("v-carousel",{attrs:{"show-arrows":!1,height:325}},t._l(e.image,(function(e,n){return a("v-carousel-item",{key:n,attrs:{src:t.publicPath(e)}})})),1):a("v-img",{attrs:{"max-height":e.imageHeight?e.imageHeight:"",src:t.publicPath(e.image)}})],1)]):t._e()],1)],1)],1)],1)],1)],1)})),1)],1)],1)],1)},ct=[],ut=a("75fc"),mt={name:"Timeline",components:{ContentSection:tt},data:function(){return{detailed:!0,items:[{year:"2016",title:"PT. Asacreative Technology Indonesia",html:"\n          <p>\n          Sebagai peserta Job Training ( 1 Januari 2016 – 31 Maret 2016) Mengerjakan aplikasi restoran berbasis mobile untuk memudahakan memesan menu makanan/minuman. Dibuat menggunakan Ionic framework.\n          </p>\n        ",image:"",iconImage:"img/timeline/vue-registrar-logo.png"},{year:"2017",title:"WEB APLIKASI TOKO BUKU ",html:"\n          <p>\n          Membuat Aplikasi Toko Buku untuk ujian kompetensi saat SMK\n          </p>\n        ",image:"img/timeline/satu.png",iconImage:"img/timeline/vue-registrar-logo.png"},{year:"2017",title:"PT. Meta Global Solusindo - SHARP CUSTOMER SERVICE ",html:"\n          <p>\n          Sebagai Freelancer (Juli 2017 - Februari 2018), mengerjakan Aplikasi Mobile SHARP Customer Service\n          </p>\n        ",image:"img/timeline/dua.png",iconImage:"img/timeline/vue-registrar-logo.png"},{year:"2018",title:"APLIKASI SISTEM PENDUKUNG KEPUTUSAN (SPK)",html:"\n          <p>\n          Mengerjakan Aplikasi SPK.\n          </p>\n        ",image:"img/timeline/tiga.png",iconImage:"img/timeline/vue-registrar-logo.png"},{year:"2019 - Sekarang",title:"Intership Program Web Developer di BPTI UHAMKA",html:"\n          <p>\n          Intership Program sebagai Web Developer di Badan Pengembangan Teknologi Informasi UHAMKA.\n          </p>\n        ",image:"",iconImage:"img/timeline/vue-registrar-logo.png"}]}},computed:{orderedItems:function(){var t=Object(ut["a"])(this.items).reverse();return this.detailed?t:t.filter((function(t){return!t.detailed}))}}},dt=mt,pt=(a("c966"),a("5e66")),vt=a("3e35"),ft=a("adda"),gt=a("8414"),bt=a("1e06"),ht=Object(f["a"])(dt,lt,ct,!1,null,"0f23dd09",null),_t=ht.exports;b()(ht,{VAvatar:h["a"],VCard:U["a"],VCardText:K["a"],VCardTitle:X["a"],VCarousel:pt["a"],VCarouselItem:vt["a"],VFlex:P["a"],VImg:ft["a"],VLayout:A["a"],VTimeline:gt["a"],VTimelineItem:bt["a"]});var yt,kt,xt={},St=Object(f["a"])(xt,st,ot,!1,null,null,null),Ct=St.exports,It=a("e2dd"),Vt={},Pt=Object(f["a"])(Vt,yt,kt,!1,null,null,null),jt=Pt.exports,At={name:"DarkTemplateContainer",components:{GithubRibbon:jt,TimelineEndless:Ct,TimelinePrimary:_t,ContentContainer:rt,SidebarContainer:B},mounted:function(){new It["a"](document.getElementById("to-timeline"),document.getElementById("timeline"),{size:2,color:this.$vuetify.theme.primary,startLabel:It["a"].captionLabel("To the Journey ...")})}},Ot=At,Tt=(a("169f"),a("7496")),wt=a("549c"),Mt=a("0789"),Et=Object(f["a"])(Ot,o,l,!1,null,"51686768",null),Lt=Et.exports;b()(Et,{VApp:Tt["a"],VContainer:D["a"],VContent:wt["a"],VFadeTransition:Mt["a"],VFlex:P["a"],VLayout:A["a"]});var $t={name:"App",components:{DarkTemplateContainer:Lt},data:function(){return{}}},Ht=$t,Ut=Object(f["a"])(Ht,r,s,!1,null,null,null),Kt=Ut.exports;b()(Ut,{VApp:Tt["a"],VContent:wt["a"]});var Rt=a("bb71");a("da64");n["a"].use(Rt["a"],{iconfont:"mdi"});a("ac6a");var Dt=a("8103"),Ft=a.n(Dt),Jt=a("bba4"),Bt=a.n(Jt),Nt=a("ffe0");Nt.keys().forEach((function(t){var e=Nt(t),a=Ft()(Bt()(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));a="".concat(a),n["a"].component(a,e.default||e)})),n["a"].config.productionTip=!1,n["a"].use(i),new n["a"]({render:function(t){return t(Kt)}}).$mount("#app")},"62e8":function(t,e,a){},"675d":function(t,e,a){},"6a1b":function(t,e,a){},"7a6c":function(t,e,a){},"8e32":function(t,e,a){},c5f4:function(t,e,a){"use strict";var n=a("ed9a"),i=a.n(n);i.a},c966:function(t,e,a){"use strict";var n=a("62e8"),i=a.n(n);i.a},d1ae:function(t,e,a){"use strict";var n=a("7a6c"),i=a.n(n);i.a},d69d:function(t,e,a){"use strict";var n=a("6a1b"),i=a.n(n);i.a},e822:function(t,e,a){"use strict";var n=a("8e32"),i=a.n(n);i.a},ed9a:function(t,e,a){},ffe0:function(t,e){function a(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id="ffe0"}});
//# sourceMappingURL=app.1d8c91f2.js.map