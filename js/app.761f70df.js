(function(t){function n(n){for(var a,s,o=n[0],c=n[1],u=n[2],l=0,p=[];l<o.length;l++)s=o[l],i[s]&&p.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(n);while(p.length)p.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],a=!0,s=1;s<e.length;s++){var o=e[s];0!==i[o]&&(a=!1)}a&&(r.splice(n--,1),t=c(c.s=e[0]))}return t}var a={},s={app:0},i={app:0},r=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-02b8ccfc":"50820ba8","chunk-4d0b8b5e":"07f1c7c6","chunk-66e4d61a":"d88759dd","chunk-74587a0b":"b4f04bac"}[t]+".js"}function c(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var n=[],e={"chunk-02b8ccfc":1,"chunk-4d0b8b5e":1,"chunk-66e4d61a":1,"chunk-74587a0b":1};s[t]?n.push(s[t]):0!==s[t]&&e[t]&&n.push(s[t]=new Promise(function(n,e){for(var a="css/"+({}[t]||t)+"."+{"chunk-02b8ccfc":"697633cf","chunk-4d0b8b5e":"596a007b","chunk-66e4d61a":"5b1cb649","chunk-74587a0b":"3e2bed20"}[t]+".css",i=c.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var u=r[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return n()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){u=p[o],l=u.getAttribute("data-href");if(l===a||l===i)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var a=n&&n.target&&n.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.request=a,delete s[t],d.parentNode.removeChild(d),e(r)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){s[t]=0}));var a=i[t];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise(function(n,e){a=i[t]=[n,e]});n.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t),u=function(n){l.onerror=l.onload=null,clearTimeout(p);var e=i[t];if(0!==e){if(e){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");r.type=a,r.request=s,e[1](r)}i[t]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},c.m=t,c.c=a,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)c.d(e,a,function(n){return t[n]}.bind(null,a));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var p=0;p<u.length;p++)n(u[p]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"07ac":function(t,n,e){},"2eb0":function(t,n,e){"use strict";var a=e("795b"),s=e.n(a),i=e("f187"),r=e.n(i);n["a"]={get:function(t,n){return new s.a(function(e,a){r()(t,n,function(t,n){t?a(t):e(n)})})}}},"35b8":function(t,n,e){"use strict";var a=e("ecda"),s=e.n(a);s.a},"522e":function(t,n,e){"use strict";var a=e("884d"),s=e.n(a);s.a},5672:function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app"},[e("Header"),e("TabNav"),e("MiniPlayer"),e("router-view")],1)},i=[],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:t.logo}}),e("h1",[t._v("VUE—音乐")])])},o=[],c=e("a476"),u=e.n(c),l={name:"",data:function(){return{logo:u.a}},components:{}},p=l,d=(e("f074"),e("2877")),f=Object(d["a"])(p,r,o,!1,null,"b096d026",null),g=f.exports,h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tab-nav"},[e("router-link",{attrs:{"exact-active-class":"current",to:"/"}},[t._v("推荐")]),e("router-link",{attrs:{"exact-active-class":"current",to:"/singer"}},[t._v("歌手")]),e("router-link",{attrs:{"exact-active-class":"current",to:"/search"}},[t._v("搜索")])],1)},m=[],b={data:function(){return{}},components:{}},y=b,v=(e("522e"),Object(d["a"])(y,h,m,!1,null,"241fa017",null)),C=v.exports,S=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.playerSrc?e("div",{staticClass:"mini-page",on:{click:function(n){return n.stopPropagation(),t.goPlayFull(n)}}},[e("div",{staticClass:"mini-player-info"},[e("div",{staticClass:"thumb",class:["playing"==t.playState?"running":"stop"]},[e("img",{attrs:{src:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+t.getCurrentSong.albummid+".jpg?max_age=2592000",alt:""}})]),e("div",{staticClass:"mini-player-con"},[e("h3",[t._v(t._s(t.getCurrentSong.songname))]),e("p",[t._v(t._s(t.getCurrentSong.singer[0].name))])]),e("div",{staticClass:"mini-player-options",on:{click:function(t){t.stopPropagation()}}},[e("a",{staticClass:"playState",class:["playing"==t.playState?"playing":"paused"],attrs:{href:"javascript:;"},on:{click:function(n){n.stopPropagation(),"playing"==t.playState?t.pause():t.start()}}}),e("a",{staticClass:"songsList",attrs:{href:"javascript:;"},on:{click:function(n){return n.stopPropagation(),t.showList(n)}}})])]),e("div",{ref:"songList",staticClass:"song-list",on:{click:function(n){return n.stopPropagation(),t.closeList(n)}}},[e("div",{staticClass:"header",on:{click:function(t){t.stopPropagation()}}},[t._m(0),e("span",{staticClass:"del-all"})]),e("div",{staticClass:"con",on:{click:function(t){t.stopPropagation()}}},[e("ul",t._l(t.playSongList,function(n,a){return e("li",{key:a,staticClass:"current",class:"playing"==t.playState?"playing":"paused",on:{click:function(n){return t.curListSong(a)}}},[e("p",{domProps:{textContent:t._s(n.songname)}}),e("div",{staticClass:"songOpt"},[e("i",{staticClass:"like"}),e("i",{staticClass:"del",on:{click:function(n){return n.stopPropagation(),t.delSingle(a)}}})])])}),0)]),e("div",{staticClass:"close"},[t._v("\n            关闭列表\n        ")])]),e("div",{staticClass:"mini-player",staticStyle:{position:"absolute"}},[e("audio",{ref:"curPlay",attrs:{src:t.playerSrc,controls:"",autoplay:""},on:{ended:t.AutoCutSong}})])]):t._e()},_=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cutPlayMode"},[e("i",{staticClass:"mode-circle"}),e("span",[t._v("循环模式")])])}],T=e("795b"),E=e.n(T),L=e("cebc"),k=e("f732"),P=e("2eb0"),x=e("2f62"),R={mixins:[k["a"]],data:function(){return{songMid:"",vkey:"",curPlayMode:"",playerSrc:""}},mounted:function(){this.curPlayMode=this.getCurPlayMode},watch:{getCurPlayMode:function(t){this.curPlayMode=t},getCurrentSong:function(t){var n=this;this.songMid=t.songmid,this.getVKey().then(function(t){n.setPlayerAdder(t)})}},computed:Object(L["a"])({},Object(x["b"])(["getCurPlayMode","getCurrentSong","getCurPlayState","getPlaySongsList"]),{playState:function(){return this.getCurPlayState},playSongList:function(){return this.getPlaySongsList}}),methods:Object(L["a"])({},Object(x["c"])(["SET_CURRENT_SRC","SET_CURRENT_PLAYSTATE","SET_PLAY_LIST"]),{getVKey:function(){var t=this;return new E.a(function(n,e){var a="https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&cid=205361747&platform=yqq&hostUin=0&needNewCode=0&uin=0&songmid=".concat(t.songMid,"&filename=C400").concat(t.songMid,".m4a&guid=7120953682");P["a"].get(a,{}).then(function(t){var a=t.data.items;a[0]&&a[0].vkey?n(a[0].vkey):e(new Error("vKey获取失败"))})})},setPlayerAdder:function(t){this.playerSrc="http://dl.stream.qqmusic.qq.com/C400".concat(this.songMid,".m4a?vkey=").concat(t,"&guid=7120953682&uin=0&fromtag=66"),this.SET_CURRENT_SRC(this.playSrc)},AutoCutSong:function(){this.cutSong(this.curPlayMode,"next")},pause:function(){this.$refs.curPlay.pause(),this.SET_CURRENT_PLAYSTATE("paused")},start:function(){this.$refs.curPlay.play(),this.SET_CURRENT_PLAYSTATE("playing")},goPlayFull:function(){this.$router.push({name:"fullplayer",params:{id:this.getCurrentSong.songmid}})},closeList:function(){this.$refs.songList.style="display:none"},showList:function(){this.$refs.songList.style="display:flex"},delSingle:function(t){this.playSongList.splice(t),this.SET_PLAY_LIST(this.playSongList)},curListSong:function(t){this.SET_CURRENT_INDEX(t)}})},j=R,A=(e("35b8"),Object(d["a"])(j,S,_,!1,null,"22342411",null)),N=A.exports,w={name:"",props:[""],data:function(){return{}},components:{Header:g,TabNav:C,MiniPlayer:N}},O=w,U=(e("5c0b"),Object(d["a"])(O,s,i,!1,null,null,null)),I=U.exports,M=e("8c4f"),q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("div",{style:t.autoHeight,attrs:{id:"warpper"}},[e("div",{attrs:{id:"warpper-con"}},[e("Banner",{ref:"banner",attrs:{bannerList:t.imgUrl}}),e("RankList",{attrs:{songsList:t.blumbUrl}}),e("div",{staticClass:"loading-con"},[e("i",{staticClass:"loading-img"}),e("p",{staticStyle:{color:"#fff","font-size":"20px","text-align":"center"}},[t._v(t._s(t.stepTips[t.steps]))])])],1)])])},D=[],X=e("4324"),G=e.n(X),B=e("cb32"),Q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner"},[e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.bannerList,function(t){return e("div",{key:t.comment_num,staticClass:"swiper-slide"},[e("img",{attrs:{src:t.picUrl}})])}),0)]),e("div",{staticClass:"swiper-pagination"})])},Y=[],F=e("3677"),z=(e("7fc4"),{name:"",props:{bannerList:{type:Array,default:function(){return[]},required:!0}},data:function(){return{}},methods:{init:function(){this.$nextTick(function(){new F["a"](".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"}})})}}}),V=z,J=(e("82e0"),Object(d["a"])(V,Q,Y,!1,null,null,null)),K=J.exports,Z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"rank-list"},[e("h2",[t._v("排行榜")]),e("div",{staticClass:"rankList-con"},[e("ul",t._l(t.songsList,function(n){return e("li",{key:n.data.id,on:{click:function(e){return t.sendCurrent(n)}}},[e("router-link",{attrs:{to:"/fullplayer/"+n.data.songid}},[e("div",{staticClass:"thumb"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://y.gtimg.cn/music/photo_new/T002R90x90M000"+n.data.albummid+".jpg?max_age=2592000",expression:"'https://y.gtimg.cn/music/photo_new/T002R90x90M000'+rankListItem.data.albummid+'.jpg?max_age=2592000'"}]})]),e("div",{staticClass:"introduce"},[e("h3",{staticClass:"songs-name"},[t._v(t._s(n.data.songname))]),e("p",{staticClass:"singer-name"},[t._v(t._s(n.data.singer[0].name))])])])],1)}),0)])])},H=[],W={props:{songsList:{type:Array,default:function(){return[]},required:!0}},data:function(){return{}},methods:Object(L["a"])({},Object(x["c"])(["ADD_SONGS_LIST","SET_CURRENT_PLAYSTATE"]),{sendCurrent:function(t){var n=t.data,e=n.albummid,a=n.singer,s=n.songmid,i=n.songname;this.SET_CURRENT_PLAYSTATE("playing"),this.ADD_SONGS_LIST({albummid:e,singer:a,songmid:s,songname:i})}})},$=W,tt=(e("642d"),Object(d["a"])($,Z,H,!1,null,"b1704110",null)),nt=tt.exports,et=e("5118"),at={data:function(){return{iscroll:null,imgUrl:[],rankListUrl:{},blumbUrl:[],beginNum:0,isFirstFetch:!0,stepTips:{ste1:"向上拉加载更多",ste2:"松开加 载更多",ste3:"加载中.....",ste4:"已加载完所有数据"},steps:"ste1"}},components:{Banner:K,RankList:nt},created:function(){this.getBannerList(),this.getRankListItem()},computed:Object(L["a"])({},Object(x["b"])(["getCurrentSong"]),{autoHeight:function(){return this.getCurrentSong?"height:calc(100vh - 160px)":"height:calc(100vh - 100px)"}}),mounted:function(){var t=this;Object(et["setTimeout"])(function(){t.iscroll=new G.a("#warpper",{mouseWheel:!0,scrollbars:!1,useTransfrom:!0,disableMouse:!0,disablePointer:!1,disableTouch:!1,tap:!0,click:!0,probeType:2}),t.iscroll.on("scrollStart",function(){t.steps="ste1"}),t.iscroll.on("scroll",function(){t.iscroll.maxScrollY-t.iscroll.y>=30?t.steps="ste2":t.steps="ste1"}),t.iscroll.on("scrollEnd",function(){Object(et["setTimeout"])(function(){"ste2"==t.steps&&(t.beginNum==t.rankListUrl.total_song_num?t.steps="ste4":(t.steps="ste3",t.getRankListItem()))},100),0!=t.iscroll.y&&t.iscroll.scrollTo(0,t.iscroll.y+30)})},500)},methods:{getBannerList:function(){var t=this;P["a"].get(B["a"].home.banner,{param:"jsonpCallback"}).then(function(n){var e=n.data.slider;t.imgUrl=e,t.$refs.banner.init()})},getRankListItem:function(){var t=this;P["a"].get(B["a"].home.rank+"&song_begin=".concat(this.beginNum,"&date=2019-04-09"),{param:"jsonpCallback"}).then(function(n){var e=n.code,a=n.songlist,s=n.total_song_num;t.isFirstFetch?(t.blumbUrl=a,t.beginNum=t.blumbUrl.length,t.isFirstFetch=!1):(t.blumbUrl=t.blumbUrl.concat(a),t.beginNum=t.blumbUrl.length),t.rankListUrl={code:e,songlist:a,total_song_num:s},t.$forceUpdate()})}}},st=at,it=(e("befb"),Object(d["a"])(st,q,D,!1,null,"518f16f4",null)),rt=it.exports;a["a"].use(M["a"]);var ot,ct=new M["a"]({mode:"hash",base:"",routes:[{path:"/",name:"home",component:rt},{path:"/fullplayer/:id",name:"fullplayer",component:function(){return e.e("chunk-66e4d61a").then(e.bind(null,"af86"))}},{path:"/singer",name:"singer",component:function(){return e.e("chunk-02b8ccfc").then(e.bind(null,"dd0e"))}},{path:"/singer/:id",name:"singerDetail",component:function(){return e.e("chunk-74587a0b").then(e.bind(null,"d56b"))}},{path:"/search",name:"search",component:function(){return e.e("chunk-4d0b8b5e").then(e.bind(null,"2d90"))}}]}),ut={player:{PlaySongsList:[],CurrentIndex:0,CurPlayMode:"mode-circle",CurPlayState:"playing"}},lt=ut,pt=e("bd86"),dt="SET_CURRENT_INDEX",ft="ADD_SONGS_LIST",gt="SET_CURRENT_SRC",ht="SET_CURRENT_MODE",mt="SET_CURRENT_PLAYSTATE",bt="SET_PLAY_LIST",yt=(ot={},Object(pt["a"])(ot,ft,function(t,n){var e=t.player,a=0;if(e.PlaySongsList.forEach(function(t,s){t.songmid===n.songmid&&(e.CurrentIndex=s,a++)}),a>0)return!1;e.PlaySongsList.push(n),e.CurrentIndex=e.PlaySongsList.length-1}),Object(pt["a"])(ot,gt,function(t,n){var e=t.player;e.PlaySongsList[e.CurrentIndex].src=n}),Object(pt["a"])(ot,dt,function(t,n){t.player.CurrentIndex=n}),Object(pt["a"])(ot,ht,function(t,n){t.player.CurPlayMode=n}),Object(pt["a"])(ot,mt,function(t,n){t.player.CurPlayState=n}),Object(pt["a"])(ot,bt,function(t,n){t.player.PlaySongsList=n}),ot),vt=yt,Ct={},St=Ct,_t={getPlaySongsList:function(t){return t.player.PlaySongsList},getCurrentIndex:function(t){return t.player.CurrentIndex},getCurrentSong:function(t){var n=t.player;return n.PlaySongsList[n.CurrentIndex]},getCurPlayMode:function(t){return t.player.CurPlayMode},getCurPlayState:function(t){return t.player.CurPlayState}},Tt=_t;a["a"].use(x["a"]);var Et=new x["a"].Store({state:lt,mutations:vt,actions:St,getters:Tt}),Lt=e("aae9"),kt=e.n(Lt);a["a"].config.productionTip=!1,a["a"].use(kt.a,{preLoad:1.3,loading:u.a}),new a["a"]({router:ct,store:Et,render:function(t){return t(I)}}).$mount("#app")},"576a":function(t,n,e){},"5c0b":function(t,n,e){"use strict";var a=e("07ac"),s=e.n(a);s.a},"642d":function(t,n,e){"use strict";var a=e("5672"),s=e.n(a);s.a},"82e0":function(t,n,e){"use strict";var a=e("8c08"),s=e.n(a);s.a},"884d":function(t,n,e){},"8c08":function(t,n,e){},a476:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAEIUlEQVRoQ82ZTVIbRxiG32+Mq4zLLpMTWCxdiUSzQ2wCJwg+AcoJjE8Q6QRRThD5BIETIG8kdmokp7xkuIFScRFXxZ431S1GSPOj6Rk1wbMbqaf7ma/f/v5GcM/XlVJbnzbRrg/1ia+lxNdEefNMmqoLkTcBuPv9QGsf690r9J/7SkWQkQUl+/WhPvzmoSdNdQ6RgxiUEX9uXOjeuuD3ZunxnmpJIL8vAhKcPr/B9rbW03XA7wXaHL6/n+JKIFtpOHbqA93+5qAn+6oNyC9ZYD6s7d3Sq608e411te0depWV5wcSPGsM9FFViXiF/rinav8GGGVreRlxI+L2qwsdVgH3Cj1uqp6IHLuACPn2h6HuuoxNjvEGbaz8JZArdwjq+kDvuo+/G+kNOg7XZSCqhnZv0OOmuhKRWhloRDysX+h+qWcAeIEeN9WRiPxRdnGSrxtDfVr2OS/QLm4uC6zqYfQCXcZrLME/pDwmTdWHyI9lt/mhNb3KP18C2Ml6ofpgVGmnKz2UBPjQVCcU+TX5O4m/RNjNSZ4u64ORKr07vrzHZE8dIJDzFAD5HoJ+FnTVQ2jW8GJpm9ltSiiCF8vg7Mzu02nqsxt+V7UY8AJtsLIkYlJQCVBLQ69XCHiDNuCT5m4Iwcu5tSMeIsBBArqyluN5vUKnImMGdNV8Y1F2paFv9bsjoIJgi4B+BFzHPY0lmRhocwVybjzJI+GBj96HE7TtEj3FGxKtlUkR2QfRsZKgtCDsPbtB1xzSGNj0Qr4CLwVQEiGMRMLn//CyzKEshP6wp46jAF2XamS+hWQ/ELw198ayFpQwxYFJrDIzQYK9xxE6LtVMLvStdc8BKR0ASL5rDHXLQJedx6XozYQuu1BsYaPbAGybMso2a4DQ5MvmgELQEshPLhGwCDwTOtnOclqIfPeYaD/5jOmnTRxDpGv9tODFBnFmtt3CQ3rpIJReYZWXSUGXzo1NqCbaG0D4JcAxgZO5/q3LE1O87sSajQJsfaX0C8FXNCyXoHNziBxTGxChdXsq64AZa0WEafUupK1sB8CZC3ieTJagK9V5+dqxkS+74KVmhN+SDcp0lsiwMdTbyd/n0KVlUSD02Eq5aSs4BTEtKoazrG2hXfpvLofxzk/juj4cWX9cvh+SyBOZtraFrlzj5Wk90Txfd/6ktWVdS2TocB5Y4v+WPmOU2rLZYCasLetaYZFhMRIm2cb76tQ1uGS916K1xRxAEjUBaoSoQv+ZOSOuSbZXfU+ZRVkx3aTMIrd4A+56f6ngYid/AkWgNqs6bi+aZP7uomAqgHFdoevHn/yyrBjZjrjtkxRmeY7TOQ+z+qacLlU4jk/H8vvfoWMXa77imo+ijrzzYaYgfhDomMCmDSK9clZn50Ghl10ijmwOY3OZHIdAvicQ/gfa5jIzKJel4gAAAABJRU5ErkJggg=="},b8b6:function(t,n,e){},befb:function(t,n,e){"use strict";var a=e("b8b6"),s=e.n(a);s.a},cb32:function(t,n,e){"use strict";var a="https://c.y.qq.com/";n["a"]={home:{banner:"".concat(a,"musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1520251216593"),rank:"".concat(a,"v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&topid=4&type=top&song_num=30&g_tk=369502886&loginUin=3001526864&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0")},singer:{singerList:"".concat(a,"v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&g_tk=369502886&loginUin=3001526864&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0"),singerDetail:"".concat(a,"v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=369502886&loginUin=3001526864&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&order=listen&begin=0&num=30&songstatus=1&singermid=")},search:{hotkeyApi:"https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&uin=0&needNewCode=1&platform=h5",searchApi:"http://searchtip.kugou.com/getSearchTip?MusicTipCount=5&MVTipCount=2&albumcount=2&keyword="}}},ecda:function(t,n,e){},f074:function(t,n,e){"use strict";var a=e("576a"),s=e.n(a);s.a},f732:function(t,n,e){"use strict";var a=e("cebc"),s=e("2f62"),i={data:{function:function(){return{casual:0}}},computed:Object(a["a"])({},Object(s["b"])(["getCurrentIndex","getPlaySongsList"])),methods:Object(a["a"])({},Object(s["c"])(["SET_CURRENT_INDEX"]),{cutSong:function(t,n){if(this.curIndex=this.getCurrentIndex,this.songListLen=this.getPlaySongsList.length,"mode-circle"==t||"mode-single"==t)switch(n){case"next":return this.curIndex==this.songListLen-1?this.SET_CURRENT_INDEX(0):this.SET_CURRENT_INDEX(this.curIndex+1);case"prev":return 0==this.curIndex?this.SET_CURRENT_INDEX(this.songListLen-1):this.SET_CURRENT_INDEX(this.curIndex-1)}else switch(this.casual=this.RandomNumBoth(0,this.songListLen-1),n){case"next":return this.SET_CURRENT_INDEX(this.casual);case"prev":return this.SET_CURRENT_INDEX(this.casual)}},RandomNumBoth:function(t,n){var e=n-t,a=Math.random(),s=t+Math.round(a*e);return s}})};n["a"]=i}});
//# sourceMappingURL=app.761f70df.js.map