webpackJsonp([1],{205:function(e,t){},206:function(e,t,s){s(307);var i=s(8)(s(233),s(332),null,null);e.exports=i.exports},232:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(2),a=s(206),n=s.n(a),r=s(24),o=s(208),l=s(207),c=s.n(l),m=s(204),u=s.n(m),d=s(205);s.n(d);i.default.use(o.a),i.default.use(u.a),i.default.use(c.a),i.default.config.productionTip=!1,new i.default({el:"#app",render:function(e){return e(n.a)},router:r.a,template:"<App/>",components:{App:n.a}})},233:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(24),a=s(7);t.default={name:"app",data:function(){return{active:"0",searchText:"",loginDialogVisible:!1,hasLogin:!1,loginForm:{username:"",password:""},loginRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:6,max:100,message:"用户名长度最低为6位",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:100,message:"密码长度最低为6位",trigger:"blur"}]}}},created:function(){for(var e=this,t=i.a.options.routes,s=0;s<t.length;s++)t[s].name===this.$route.name&&(this.active=t[s].active+"");a.b.fetchInfo().then(function(t){t.userName&&(e.hasLogin=!0)}).catch(function(){"Booking"===e.$route.name&&e.navHome()})},methods:{search:function(){i.a.push({name:"FilmSearch",query:{keyword:this.searchText}})},navHome:function(){i.a.push({name:"Home"}),this.loginDialogVisible=!0},handleUserCommand:function(e){"login"===e?this.loginDialogVisible=!0:"register"===e?i.a.push({name:"Register"}):"logout"===e?this.logout():"userinfo"===e?i.a.push({name:"Profile"}):"userorders"===e&&i.a.push({name:"Order"})},login:function(){var e=this;this.$refs.loginForm.validate(function(t){t?a.b.login(e.loginForm).then(function(t){"200"!==t.stateCode?e.$message({message:t.info,type:"error"}):(e.$message({message:"登陆成功",type:"success"}),e.hasLogin=!0,e.loginDialogVisible=!1)}):e.$message.error("表单错误")})},logout:function(){var e=this;a.b.logout().then(function(t){"200"===t.stateCode?(e.$message({message:"退出成功",type:"success"}),e.hasLogin=!1):e.$message.error("登出失败, "+t.info)})}},watch:{$route:function(e,t){for(var s=i.a.options.routes,a=0;a<s.length;a++)s[a].name===e.name&&(this.active=s[a].active+"");"Booking"!==e.name||this.hasLogin||(i.a.push({name:t.name}),this.loginDialogVisible=!0)}}}},234:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(2),a=s(24),n=s(7);t.default={name:"hello",data:function(){return{timeSelectVisible:!1,timeStamp:"",seatid:"",film:{},tabName:"intro",seats:[],currentStep:0,timeSelect:0,times:["今天","明天","后天"],areaSelect:0,areas:["番禺区","白云区","海珠区","天河区","荔湾区","越秀区","黄埔区","花都区","南沙区","从化市","增城市"],cinemaSelect:0,cinemas:[],seatsLoading:!1,buying:!1,form:{cinema:"",time:"",seats:[],money:""}}},created:function(){var e=this,t=this.$route.params.id;n.a.fetchDtl(t).then(function(t){e.film=t}),this.changeArea(0)},methods:{changeTime:function(e){this.timeSelect=e},changeArea:function(e){var t=this;this.areaSelect=e,n.d.fetchCinemaByArea(this.areas[e]).then(function(e){t.cinemas=e})},changeCinema:function(e){this.cinemaSelect=e},back:function(){this.currentStep=this.currentStep-1},confirmSeats:function(){for(var e=this,t=[],s=0;s<this.seats.length;s++)for(var i=0;i<this.seats[s].length;i++)2===this.seats[s][i]&&t.push({row:this.seats.length-s,col:i+1});if(0===t.length)this.$alert("您尚未选择任何座位","提示",{confirmButtonText:"确定"});else{for(var a="",r=0;r<this.seats.length;r++)a+=this.seats[r].join("").replace(/1/g,"0").replace(/2/g,"1");n.b.lockSeat(this.seatid,{seat:a}).then(function(s){if("200"!==s.stateCode)throw new Error;e.$message("锁定座位成功"),e.form.seats=t,e.form.money=30*t.length+"元",e.currentStep=e.currentStep+1}).catch(function(){e.$message.error("锁定座位失败")})}},comfirmOrder:function(){for(var e=this,t="",s=0;s<this.seats.length;s++)t+=this.seats[s].join("").replace(/1/g,"0");this.buying=!0,n.b.buySeat(this.seatid,{seat:t}).then(function(t){if("200"!==t.stateCode)throw new Error;e.$message("购买成功"),a.a.push({name:"Home"}),e.buying=!1}).catch(function(){e.$message.error("购买失败"),e.buying=!1})},selectCinema:function(e){this.form.cinema=this.cinemas[e];for(var t=0;t<this.seats.length;t++)for(var s=0;s<this.seats[t].length;s++)2===this.seats[t][s]&&(this.seats[t][s]=0);this.timeSelectVisible=!0},selectTime:function(){var e=this;this.form.time=this.times[this.timeSelect]+this.timeStamp,this.currentStep=1,this.timeSelectVisible=!1;var t=this.$moment().add(this.timeSelect,"days").format("YYYYMMDD"),s=this.timeStamp;this.seatsLoading=!0,n.d.fetchSeat(this.form.cinema.id,this.$route.params.id,t,s).then(function(t){var s=t[0];e.seatid=s.id;var i=s.seats+"";e.seats=[];for(var a=0;a<8;a++){e.seats.push([]);for(var n=0;n<11;n++)i[11*a+n]&&"0"!==i[11*a+n]?"1"!==i[11*a+n]&&"2"!==i[11*a+n]||e.seats[a].push(1):e.seats[a].push(0)}e.seatsLoading=!1})},selectSeat:function(e,t,s){0===e[t]?i.default.set(e,t,2):2===e[t]&&i.default.set(e,t,0)}}}},235:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(7);t.default={name:"hello",data:function(){return{film:{},tabName:"intro"}},created:function(){var e=this,t=this.$route.params.id;i.a.fetchDtl(t).then(function(t){e.film=t})}}},236:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(7);t.default={name:"hello",data:function(){return{onsales:[],page:0,step:60,total:0,loading:!1,types:["all","爱情","喜剧","动画","剧情","恐怖","惊悚","科幻","动作","悬疑","犯罪","冒险","战争","奇幻","运动","家庭","古装","武侠","西部","历史","传记","情色","歌舞","黑色电影","短片","纪录片","其他"],typeSelect:0,areas:["all","大陆","美国","韩国","日本","中国香港","中国台湾","泰国","印度","法国","英国","俄罗斯","意大利","西班牙","德国","波兰","澳大利亚","伊朗","其他"],areaSelect:0,times:["all","2018","2017","2016","2015","2014","2013","2012","2011"],timeSelect:0}},created:function(){this.updateMovie()},methods:{update:function(e,t){this[e+"Select"]=t,this.updateMovie()},updateMovie:function(){var e=this,t=this.types[this.typeSelect],s=this.times[this.timeSelect];this.loading=!0,i.a.queryMovie(t,"all",s,this.page,this.step).then(function(t){e.onsales=t,e.loading=!1}).catch(function(t){e.loading=!1,e.$message.error(t.message)}),i.a.countMovie(t,"all",s).then(function(t){e.total=t})},handleCurrentChange:function(e){this.page=e-1,this.updateMovie(),window.scroll(0,0)}}}},237:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(7);t.default={data:function(){return{onsales:[]}},created:function(){var e=this;i.a.search(this.$route.query.keyword).then(function(t){e.onsales=t})}}},238:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(7);t.default={name:"hello",data:function(){return{imgs:[{src:"http://p1.meituan.net/mmc/3c4f6e4b48387aa4a49f255ba447fe61144777.jpg"},{src:"http://p1.meituan.net/mmc/64fad7974cfd6c2136a31fa2bd8b4682129029.jpg"},{src:"http://p0.meituan.net/mmc/81fc61644a836fdd828aef5eda93a6e6116066.jpg"}],newsLoading:!0,newFilms:[],monthLoading:!0,monthFilms:[]}},created:function(){var e=this;i.a.fetchNews(18).then(function(t){e.newFilms=t,e.newsLoading=!1}),i.a.fetchMonth().then(function(t){e.monthFilms=t,e.monthLoading=!1})}}},239:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(53),a=s.n(i),n=s(7);t.default={name:"hello",data:function(){return{orderlist:[]}},created:function(){var e=this;n.b.getOrders().then(function(t){var s=t.filmOrderModelList.reverse(),i=s.map(function(e){return new a.a(function(t){n.c.getScreenById(e.screenId).then(function(s){var i={};i.id=e.id,i.showDate=s.showDate,i.showTime=s.showTime,i.language=s.language,i.room=s.room,i.movieName=s.movieName;for(var a=[],n=0;n<8;n++)for(var r=0;r<11;r++)"2"===e.seat[11*n+r]&&a.push({row:n+1,col:r+1});i.seat=a,t(i)})})});a.a.all(i).then(function(t){e.orderlist=t})})},methods:{}}},24:function(e,t,s){"use strict";var i=s(2),a=s(334),n=s(321),r=s.n(n),o=s(324),l=s.n(o),c=s(317),m=s.n(c),u=s(323),d=s.n(u),_=s(322),f=s.n(_),v=s(318),p=s.n(v),h=s(319),g=s.n(h),A=s(320),C=s.n(A);i.default.use(a.a);var b=[{path:"/",name:"Home",component:r.a,active:0},{path:"/register",name:"Register",component:l.a,active:-1},{path:"/booking/:id",name:"Booking",component:m.a,active:-1},{path:"/profile",name:"Profile",component:d.a,active:-1},{path:"/orders",name:"Order",component:f.a,active:-1},{path:"/films",name:"FilmFilter",component:g.a,active:1},{path:"/film/:id",name:"FilmDetail",component:p.a,active:-1},{path:"/search",name:"FilmSearch",component:C.a,active:-1}],j=new a.a({mode:"history",routes:b});j.afterEach(function(e,t,s){window.scroll(0,0)}),t.a=j},240:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(7);t.default={name:"hello",data:function(){return{user:{username:"",email:"",phone:"",avatar:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:6,max:100,message:"用户名长度最低为6位",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:this.emailValid,trigger:"blur"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{validator:this.phoneValid,trigger:"blur"}]}}},created:function(){var e=this;i.b.fetchInfo().then(function(t){e.user=t,e.user.username=t.userName,e.user.avatar="http://p0.meituan.net/movie/7dd82a16316ab32c8359debdb04396ef2897.png"})},methods:{emailValid:function(e,t,s){/[\w!#$%&'*+\/=?^_`{|}~-]+(?:\.[\w!#$%&'*+\/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(t)?s():s(new Error("邮箱格式不正确"))},phoneValid:function(e,t,s){/^1[34578]\d{9}$/.test(t)?s():s(new Error("手机号码格式不正确"))},update:function(){var e=this;this.$refs.user.validate(function(t){t?i.b.updateInfo(e.user).then(function(t){"200"===t.stateCode?e.$message.success("修改成功"):e.$message.error(t.info)}).catch(function(){e.$message.error("修改失败")}):e.$message.error("表单错误")})}}}},241:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(24),a=s(7);t.default={name:"hello",data:function(){return{currentStep:0,creating:!1,userForm:{username:"",password:"",repassword:""},userRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:6,max:100,message:"用户名长度最低为6位",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:100,message:"密码长度最低为6位",trigger:"blur"}],repassword:[{required:!0,message:"请确认密码",trigger:"blur"},{validator:this.confirmPassValid,trigger:"blur"}]},mailForm:{email:""},emailRules:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:this.emailValid,trigger:"blur"}]},phoneForm:{phone:""},phoneRules:{phone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{validator:this.phoneValid,trigger:"blur"}]}}},methods:{confirmPassValid:function(e,t,s){t!==this.userForm.password?s(new Error("输入密码不一致!")):s()},emailValid:function(e,t,s){/[\w!#$%&'*+\/=?^_`{|}~-]+(?:\.[\w!#$%&'*+\/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(t)?s():s(new Error("邮箱格式不正确"))},phoneValid:function(e,t,s){/^1[34578]\d{9}$/.test(t)?s():s(new Error("手机号码格式不正确"))},pass:function(){var e=this;if(this.currentStep=this.currentStep+1<=3?this.currentStep+1:3,3===this.currentStep){this.creating=!0;var t={username:this.userForm.username,password:this.userForm.password,email:this.mailForm.email,phone:this.phoneForm.phone};a.b.signup(t).then(function(t){e.creating=!1,"200"===t.stateCode?(e.$message.success("创建成功，请登录"),i.a.push({name:"Home"})):e.$message.error(t.info)}).catch(function(){e.creating=!1,e.$message.error("创建失败"),e.back()})}},back:function(){this.currentStep=this.currentStep-1>=0?this.currentStep-1:0},passForm:function(e){var t=this;this.$refs[e].validate(function(e){e?t.pass():t.$message.error("表单错误")})},passUser:function(){var e=this;this.$refs.userForm.validate(function(t){t?e.pass():e.$message.error("表单错误")})},passEmail:function(){var e=this;this.$refs.mailForm.validate(function(t){t?e.pass():e.$message.error("表单错误")})},passPhone:function(){var e=this;this.$refs.phoneForm.validate(function(t){t?e.pass():e.$message.error("表单错误")})}}}},300:function(e,t){},301:function(e,t){},302:function(e,t){},303:function(e,t){},304:function(e,t){},305:function(e,t){},306:function(e,t){},307:function(e,t){},308:function(e,t){},309:function(e,t,s){function i(e){return s(a(e))}function a(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var n={"./af":80,"./af.js":80,"./ar":87,"./ar-dz":81,"./ar-dz.js":81,"./ar-kw":82,"./ar-kw.js":82,"./ar-ly":83,"./ar-ly.js":83,"./ar-ma":84,"./ar-ma.js":84,"./ar-sa":85,"./ar-sa.js":85,"./ar-tn":86,"./ar-tn.js":86,"./ar.js":87,"./az":88,"./az.js":88,"./be":89,"./be.js":89,"./bg":90,"./bg.js":90,"./bm":91,"./bm.js":91,"./bn":92,"./bn.js":92,"./bo":93,"./bo.js":93,"./br":94,"./br.js":94,"./bs":95,"./bs.js":95,"./ca":96,"./ca.js":96,"./cs":97,"./cs.js":97,"./cv":98,"./cv.js":98,"./cy":99,"./cy.js":99,"./da":100,"./da.js":100,"./de":103,"./de-at":101,"./de-at.js":101,"./de-ch":102,"./de-ch.js":102,"./de.js":103,"./dv":104,"./dv.js":104,"./el":105,"./el.js":105,"./en-au":106,"./en-au.js":106,"./en-ca":107,"./en-ca.js":107,"./en-gb":108,"./en-gb.js":108,"./en-ie":109,"./en-ie.js":109,"./en-il":110,"./en-il.js":110,"./en-nz":111,"./en-nz.js":111,"./eo":112,"./eo.js":112,"./es":115,"./es-do":113,"./es-do.js":113,"./es-us":114,"./es-us.js":114,"./es.js":115,"./et":116,"./et.js":116,"./eu":117,"./eu.js":117,"./fa":118,"./fa.js":118,"./fi":119,"./fi.js":119,"./fo":120,"./fo.js":120,"./fr":123,"./fr-ca":121,"./fr-ca.js":121,"./fr-ch":122,"./fr-ch.js":122,"./fr.js":123,"./fy":124,"./fy.js":124,"./gd":125,"./gd.js":125,"./gl":126,"./gl.js":126,"./gom-latn":127,"./gom-latn.js":127,"./gu":128,"./gu.js":128,"./he":129,"./he.js":129,"./hi":130,"./hi.js":130,"./hr":131,"./hr.js":131,"./hu":132,"./hu.js":132,"./hy-am":133,"./hy-am.js":133,"./id":134,"./id.js":134,"./is":135,"./is.js":135,"./it":136,"./it.js":136,"./ja":137,"./ja.js":137,"./jv":138,"./jv.js":138,"./ka":139,"./ka.js":139,"./kk":140,"./kk.js":140,"./km":141,"./km.js":141,"./kn":142,"./kn.js":142,"./ko":143,"./ko.js":143,"./ky":144,"./ky.js":144,"./lb":145,"./lb.js":145,"./lo":146,"./lo.js":146,"./lt":147,"./lt.js":147,"./lv":148,"./lv.js":148,"./me":149,"./me.js":149,"./mi":150,"./mi.js":150,"./mk":151,"./mk.js":151,"./ml":152,"./ml.js":152,"./mn":153,"./mn.js":153,"./mr":154,"./mr.js":154,"./ms":156,"./ms-my":155,"./ms-my.js":155,"./ms.js":156,"./mt":157,"./mt.js":157,"./my":158,"./my.js":158,"./nb":159,"./nb.js":159,"./ne":160,"./ne.js":160,"./nl":162,"./nl-be":161,"./nl-be.js":161,"./nl.js":162,"./nn":163,"./nn.js":163,"./pa-in":164,"./pa-in.js":164,"./pl":165,"./pl.js":165,"./pt":167,"./pt-br":166,"./pt-br.js":166,"./pt.js":167,"./ro":168,"./ro.js":168,"./ru":169,"./ru.js":169,"./sd":170,"./sd.js":170,"./se":171,"./se.js":171,"./si":172,"./si.js":172,"./sk":173,"./sk.js":173,"./sl":174,"./sl.js":174,"./sq":175,"./sq.js":175,"./sr":177,"./sr-cyrl":176,"./sr-cyrl.js":176,"./sr.js":177,"./ss":178,"./ss.js":178,"./sv":179,"./sv.js":179,"./sw":180,"./sw.js":180,"./ta":181,"./ta.js":181,"./te":182,"./te.js":182,"./tet":183,"./tet.js":183,"./tg":184,"./tg.js":184,"./th":185,"./th.js":185,"./tl-ph":186,"./tl-ph.js":186,"./tlh":187,"./tlh.js":187,"./tr":188,"./tr.js":188,"./tzl":189,"./tzl.js":189,"./tzm":191,"./tzm-latn":190,"./tzm-latn.js":190,"./tzm.js":191,"./ug-cn":192,"./ug-cn.js":192,"./uk":193,"./uk.js":193,"./ur":194,"./ur.js":194,"./uz":196,"./uz-latn":195,"./uz-latn.js":195,"./uz.js":196,"./vi":197,"./vi.js":197,"./x-pseudo":198,"./x-pseudo.js":198,"./yo":199,"./yo.js":199,"./zh-cn":200,"./zh-cn.js":200,"./zh-hk":201,"./zh-hk.js":201,"./zh-tw":202,"./zh-tw.js":202};i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id=309},313:function(e,t,s){e.exports=s.p+"static/img/loc.59aae9b.png"},314:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAABQCAYAAADhuhE0AAABy0lEQVR4nO3awY2EMBBE0WY1V4cC+ccBCZCDA2Ay2Auz1SvmvQS6jv6SqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAz1u6Du/7fnXdDljWde3eAADATcdxVFU99t26bVu8B37SBwEAgO8lQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMS8ugc81Xme3RMAAODfESB/YIxxdW8AAOC+MUbNObtnPIovWAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMQIEAAAIEaAAAAAMQIEAACIESAAAECMAAEAAGIECAAAECNAAACAGAECAADECBAAACBGgAAAADECBAAAiBEgAABAjAABAABiBAgAABAjQAAAgBgBAgAAxAgQAAAgRoAAAAAxAgQAAIgRIAAAQIwAAQAAYgQIAAAQI0AAAIAYAQIAAMS8ugc80ZxzGWN0zwAA4KY5Z1XV1b0DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB3b3RAFf0qDAQGAAAAAElFTkSuQmCC"},315:function(e,t,s){e.exports=s.p+"static/img/time.34f743e.png"},316:function(e,t,s){e.exports=s.p+"static/img/logo.458d8e5.png"},317:function(e,t,s){s(306);var i=s(8)(s(234),s(331),"data-v-6889e537",null);e.exports=i.exports},318:function(e,t,s){s(302);var i=s(8)(s(235),s(327),"data-v-48e53fc1",null);e.exports=i.exports},319:function(e,t,s){s(300);var i=s(8)(s(236),s(325),"data-v-2a180768",null);e.exports=i.exports},320:function(e,t,s){s(304);var i=s(8)(s(237),s(329),"data-v-5c510998",null);e.exports=i.exports},321:function(e,t,s){s(308);var i=s(8)(s(238),s(333),"data-v-fa43f21e",null);e.exports=i.exports},322:function(e,t,s){s(301);var i=s(8)(s(239),s(326),"data-v-45eadb2c",null);e.exports=i.exports},323:function(e,t,s){s(305);var i=s(8)(s(240),s(330),"data-v-5efc3e87",null);e.exports=i.exports},324:function(e,t,s){s(303);var i=s(8)(s(241),s(328),"data-v-57229c96",null);e.exports=i.exports},325:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"filter"},[s("div",{staticClass:"selector-container"},[s("div",{staticClass:"selector"},[s("div",{staticClass:"selector__info"},[e._v("类型 :")]),s("div",{staticClass:"selector__items"},e._l(e.types,function(t,i){return s("div",{staticClass:"selector__item",class:i===e.typeSelect?"selector__item--selected":"",on:{click:function(t){e.update("type",i)}}},[e._v(e._s(t))])}))]),s("div",{staticClass:"selector"},[s("div",{staticClass:"selector__info"},[e._v("年代 :")]),s("div",{staticClass:"selector__items"},e._l(e.times,function(t,i){return s("div",{staticClass:"selector__item",class:i===e.timeSelect?"selector__item--selected":"",on:{click:function(t){e.update("time",i)}}},[e._v(e._s(t))])}))])]),s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"results"},e._l(e.onsales,function(t){return s("router-link",{staticClass:"film",attrs:{to:{name:"FilmDetail",params:{id:t.id}}}},[s("img",{staticClass:"film__img",attrs:{src:t.url}}),s("div",{staticClass:"film__info"},[s("div",{staticClass:"film__info__name"},[e._v(e._s(t.name))])])])})),s("div",{staticClass:"pages"},[s("el-pagination",{attrs:{layout:"prev, pager, next","page-size":e.step,total:e.total},on:{"current-change":e.handleCurrentChange}})],1)])},staticRenderFns:[]}},326:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"order"},[s("el-form",{staticClass:"orderlist"},[s("div",{staticClass:"order__info__title"},[e._v("订单详情")]),e._l(e.orderlist,function(t){return s("div",{staticClass:"order__info-container"},[s("el-form-item",{staticClass:"order__info__id"},[e._v("订单号：NO."+e._s(t.id))]),s("el-form-item",{staticClass:"order__info"},[s("div",{staticClass:"order__info__text"},[e._v("电影：")]),s("div",{staticClass:"order__info__data"},[e._v(e._s(t.movieName))]),s("div",{staticClass:"order__info__text"},[e._v("语言：")]),s("div",{staticClass:"order__info__data"},[e._v(e._s(t.language))]),s("div",{staticClass:"order__info__text"},[e._v("时间：")]),s("div",{staticClass:"order__info__data"},[e._v(e._s(t.showDate)+" "+e._s(t.showTime))]),s("br"),s("div",{staticClass:"order__info__text"},[e._v("场次：")]),s("div",{staticClass:"order__info__data"},[e._v(e._s(t.room))]),s("div",{staticClass:"order__info__text"},[e._v("票数：")]),s("div",{staticClass:"order__info__data"},[e._v(e._s(t.seat.length)+" 张")]),s("div",{staticClass:"order__info__text"},[e._v("座位：")]),e._l(t.seat,function(t){return s("div",{staticClass:"order__info__data"},[e._v(e._s(t.row)+"行"+e._s(t.col)+"列")])})],2)],1)})],2)],1)},staticRenderFns:[]}},327:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"film"},[s("div",{staticClass:"film__header"},[s("div",{staticClass:"film__header__img-container"},[s("img",{staticClass:"film__header__img-container__img",attrs:{src:e.film.url}})]),s("div",{staticClass:"film__header__content"},[s("div",{staticClass:"film__header__content__title"},[e._v(e._s(e.film.chineseName))]),s("div",{staticClass:"film__header__content__subtitle"},[e._v(e._s(e.film.englishName))]),s("div",{staticClass:"film__header__content__info"},[e._v(e._s(e.film.type))]),s("div",{staticClass:"film__header__content__info"},[e._v(e._s(e.film.length))]),s("div",{staticClass:"film__header__content__info"},[e._v(e._s(e.film.releaseDate)+" "+e._s(e.film.showPlace))]),s("div",{staticClass:"film__header__content__rating"},[e._v("评分: "+e._s(e.film.rating))]),s("router-link",{staticClass:"film__header__content__operation",attrs:{to:{name:"Booking",params:{id:e.film.id}}}},[e._v("立刻购票")])],1)]),s("el-tabs",{staticClass:"film__body",model:{value:e.tabName,callback:function(t){e.tabName=t},expression:"tabName"}},[s("el-tab-pane",{attrs:{label:"介绍",name:"intro"}},[s("div",{staticClass:"film__body__title"},[e._v("剧情简介")]),s("div",{staticClass:"film__body__content"},[e._v(e._s(e.film.introduction))])]),s("el-tab-pane",{attrs:{label:"演职人员",name:"people"}},[s("div",{staticClass:"film__body__title"},[e._v("导演")]),s("div",{staticClass:"film__body__content"},e._l(e.film.directors,function(t){return s("div",{staticClass:"film-man"},[s("img",{staticClass:"film-man__avatar",attrs:{src:t.url}}),s("div",{staticClass:"film-man__name"},[e._v(e._s(t.name))])])})),s("div",{staticClass:"film__body__title"},[e._v("演员")]),s("div",{staticClass:"film__body__content"},e._l(e.film.actors,function(t){return s("div",{staticClass:"film-man"},[s("img",{staticClass:"film-man__avatar",attrs:{src:t.url}}),s("div",{staticClass:"film-man__name"},[e._v(e._s(t.name))])])}))]),s("el-tab-pane",{attrs:{label:"图集",name:"pic"}},e._l(e.film.pictures,function(e){return s("img",{staticClass:"film-img",attrs:{src:e.url}})}))],1)],1)},staticRenderFns:[]}},328:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.creating,expression:"creating"}],staticClass:"register",attrs:{"element-loading-text":"拼命创建用户中"}},[s("el-steps",{staticClass:"register__steps",attrs:{space:"30%",active:e.currentStep,"finish-status":"success",center:!0,"align-center":!0}},[s("el-step",{attrs:{title:"步骤 1",description:"输入用户名密码"}}),s("el-step",{attrs:{title:"步骤 2",description:"绑定邮箱"}}),s("el-step",{attrs:{title:"步骤 3",description:"绑定手机号"}})],1),s("el-form",{directives:[{name:"show",rawName:"v-show",value:0===e.currentStep,expression:"currentStep === 0"}],ref:"userForm",staticClass:"register__form",attrs:{model:e.userForm,rules:e.userRules,inline:!0,"label-position":"left"}},[s("el-form-item",{attrs:{label:"用户名",prop:"username"}},[s("el-input",{nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.passForm("userForm")}},model:{value:e.userForm.username,callback:function(t){e.$set(e.userForm,"username",t)},expression:"userForm.username"}})],1),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{attrs:{type:"password"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.passForm("userForm")}},model:{value:e.userForm.password,callback:function(t){e.$set(e.userForm,"password",t)},expression:"userForm.password"}})],1),s("el-form-item",{attrs:{label:"重复密码",prop:"repassword"}},[s("el-input",{attrs:{type:"password"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.passForm("userForm")}},model:{value:e.userForm.repassword,callback:function(t){e.$set(e.userForm,"repassword",t)},expression:"userForm.repassword"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.passForm("userForm")}}},[e._v("确定")])],1)],1),s("el-form",{directives:[{name:"show",rawName:"v-show",value:1===e.currentStep,expression:"currentStep === 1"}],ref:"mailForm",staticClass:"register__form",attrs:{model:e.mailForm,rules:e.emailRules,inline:!0,"label-position":"left"}},[s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.passForm("mailForm")}},model:{value:e.mailForm.email,callback:function(t){e.$set(e.mailForm,"email",t)},expression:"mailForm.email"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.passForm("mailForm")}}},[e._v("确定")])],1),s("el-form-item",[s("el-button",{on:{click:e.back}},[e._v("返回")])],1)],1),s("el-form",{directives:[{name:"show",rawName:"v-show",value:2===e.currentStep,expression:"currentStep === 2"}],ref:"phoneForm",staticClass:"register__form",attrs:{model:e.phoneForm,rules:e.phoneRules,inline:!0,"label-position":"left"}},[s("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[s("el-input",{nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.passForm("phoneForm")}},model:{value:e.phoneForm.phone,callback:function(t){e.$set(e.phoneForm,"phone",t)},expression:"phoneForm.phone"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.passForm("phoneForm")}}},[e._v("确定")])],1),s("el-form-item",[s("el-button",{on:{click:e.back}},[e._v("返回")])],1)],1)],1)},staticRenderFns:[]}},329:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"filter"},[s("div",{staticClass:"results"},e._l(e.onsales,function(t){return s("router-link",{staticClass:"film",attrs:{to:{name:"FilmDetail",params:{id:t.id}}}},[s("img",{staticClass:"film__img",attrs:{src:t.url}}),s("div",{staticClass:"film__info"},[s("div",{staticClass:"film__info__name"},[e._v(e._s(t.name))])])])})),0===e.onsales.length?s("div",{staticClass:"no"},[s("h3",[e._v("无相关电影")])]):e._e()])},staticRenderFns:[]}},330:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"profile"},[s("el-form",{ref:"user",staticClass:"user",attrs:{model:e.user,rules:e.rules}},[s("img",{staticClass:"user__avatar",attrs:{src:e.user.avatar}}),s("div",{staticClass:"user__info-container"},[s("el-form-item",{staticClass:"user__info",attrs:{prop:"username"}},[s("div",{staticClass:"user__info__title"},[e._v("用户名：")]),s("el-input",{staticClass:"user__info__text",attrs:{disabled:!0},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),s("el-form-item",{staticClass:"user__info",attrs:{prop:"email"}},[s("div",{staticClass:"user__info__title"},[e._v("邮箱：")]),s("el-input",{staticClass:"user__info__text",model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),s("el-form-item",{staticClass:"user__info",attrs:{prop:"phone"}},[s("div",{staticClass:"user__info__title"},[e._v("电话：")]),s("el-input",{staticClass:"user__info__text",model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),s("div",{staticClass:"operation operation--save",on:{click:e.update}},[e._v("保存")])],1)])],1)},staticRenderFns:[]}},331:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"booking"},[i("div",{staticClass:"film"},[i("div",{staticClass:"film__img-container"},[i("img",{staticClass:"film__img-container__img",attrs:{src:e.film.url}})]),i("div",{staticClass:"film__content"},[i("div",{staticClass:"film__content__title"},[e._v(e._s(e.film.chineseName))]),i("div",{staticClass:"film__content__subtitle"},[e._v(e._s(e.film.englishName))]),i("div",{staticClass:"film__content__info"},[e._v(e._s(e.film.type))]),i("div",{staticClass:"film__content__info"},[e._v(e._s(e.film.length))]),i("div",{staticClass:"film__content__info"},[e._v(e._s(e.film.releaseDate)+" "+e._s(e.film.showPlace))])])]),i("el-steps",{staticClass:"booking__steps",attrs:{space:"40%",active:e.currentStep,"finish-status":"success",center:!0,"align-center":!0}},[i("el-step",{attrs:{title:"步骤 1",description:"选择时间 / 地点 / 影院"}}),i("el-step",{attrs:{title:"步骤 2",description:"选择座位"}}),i("el-step",{attrs:{title:"步骤 3",description:"确认订单"}})],1),i("el-tabs",{directives:[{name:"show",rawName:"v-show",value:0===e.currentStep,expression:"currentStep === 0"}],staticClass:"booking-form",attrs:{type:"border-card"}},[i("el-tab-pane",[i("span",{attrs:{slot:"label"},slot:"label"},[i("i",{staticClass:"el-icon-date"}),e._v(" 时间 / 地点 / 影院")])]),i("div",{staticClass:"slector-container"},[i("div",{staticClass:"slecter"},[i("div",{staticClass:"slecter__info"},[i("img",{staticClass:"slecter__info__icon",attrs:{src:s(315)}}),i("span",[e._v("日期 ：")])]),i("div",{staticClass:"slecter__items"},e._l(e.times,function(t,s){return i("div",{staticClass:"slecter__items__item",class:s===e.timeSelect?"slecter__items__item--selected":"",on:{click:function(t){e.changeTime(s)}}},[e._v(e._s(t))])}))]),i("div",{staticClass:"slecter"},[i("div",{staticClass:"slecter__info"},[i("img",{staticClass:"slecter__info__icon",attrs:{src:s(313)}}),i("span",[e._v("地点 ：")])]),i("div",{staticClass:"slecter__items"},e._l(e.areas,function(t,s){return i("div",{staticClass:"slecter__items__item",class:s===e.areaSelect?"slecter__items__item--selected":"",on:{click:function(t){e.changeArea(s)}}},[e._v(e._s(t))])}))]),i("div",{staticClass:"cinemas"},e._l(e.cinemas,function(t,s){return i("div",{staticClass:"cinema"},[i("div",{staticClass:"cinema__info"},[e._v(e._s(t.name))]),i("div",{staticClass:"cinema__op",on:{click:function(t){e.selectCinema(s)}}},[e._v("选座购票")])])}))])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:1===e.currentStep,expression:"currentStep === 1"}],staticClass:"seats"},[i("div",{staticClass:"back",on:{click:e.back}},[i("i",{staticClass:"el-icon-arrow-left"}),e._v(" 返回")]),i("div",{staticClass:"confirm",on:{click:e.confirmSeats}},[e._v(" 确定"),i("i",{staticClass:"el-icon-arrow-right"})]),e._m(0),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.seatsLoading,expression:"seatsLoading"}],staticClass:"seat-container"},e._l(e.seats,function(t,s){return i("div",{staticClass:"seat-row"},e._l(t,function(a,n){return i("div",{staticClass:"seat",class:["seat","seat--sale","seat--selected"][a],on:{click:function(i){e.selectSeat(t,n,s)}}})}))})),i("img",{staticClass:"seat-screen",attrs:{src:s(314)}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:2===e.currentStep,expression:"currentStep === 2"},{name:"loading",rawName:"v-loading",value:e.buying,expression:"buying"}],staticClass:"order"},[i("div",{staticClass:"info"},[i("div",{staticClass:"info__title"},[e._v("座位信息:")]),i("div",{staticClass:"info__content"},e._l(e.form.seats,function(t){return i("div",{staticClass:"seat-item"},[i("div",{staticClass:"seat seat--selected"}),i("div",{staticClass:"seat-tip__text"},[e._v(e._s(t.row)+"行"+e._s(t.col)+"列")])])}))]),i("div",{staticClass:"info"},[i("div",{staticClass:"info__title"},[e._v("影院信息:")]),i("div",{staticClass:"info__content"},[i("div",{staticClass:"info__content__text"},[e._v(e._s(e.form.cinema.name))])])]),i("div",{staticClass:"info"},[i("div",{staticClass:"info__title"},[e._v("时间信息:")]),i("div",{staticClass:"info__content"},[i("div",{staticClass:"info__content__text"},[e._v(e._s(e.form.time))])])]),i("div",{staticClass:"info"},[i("div",{staticClass:"info__title"},[e._v("金额信息:")]),i("div",{staticClass:"info__content"},[i("div",{staticClass:"info__content__text"},[e._v(e._s(e.form.money))])])]),i("div",{staticClass:"order__op"},[i("div",{staticClass:"order__op__item",on:{click:e.back}},[e._v("返回")]),i("div",{staticClass:"order__op__item",on:{click:e.comfirmOrder}},[e._v("确认订单")])])]),i("el-dialog",{attrs:{title:"选择排场时间",size:"tiny"},model:{value:e.timeSelectVisible,callback:function(t){e.timeSelectVisible=t},expression:"timeSelectVisible"}},[i("el-time-select",{attrs:{size:"large","picker-options":{start:"08:30",step:"00:30",end:"22:30"},placeholder:"选择时间"},model:{value:e.timeStamp,callback:function(t){e.timeStamp=t},expression:"timeStamp"}}),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.timeSelectVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.selectTime}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"seat-tip"},[s("div",{staticClass:"seat seat-normal"}),s("div",{staticClass:"seat-tip__text"},[e._v("可选座位")]),s("div",{staticClass:"seat seat--sale"}),s("div",{staticClass:"seat-tip__text"},[e._v("已售座位")]),s("div",{staticClass:"seat seat--selected"}),s("div",{staticClass:"seat-tip__text"},[e._v("已选座位")])])}]}},332:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("div",{attrs:{id:"nav__logo"}},[i("router-link",{attrs:{to:{name:"Home"}}},[i("img",{staticClass:"nav__logo__icon",attrs:{src:s(316)}})])],1),i("div",{attrs:{id:"nav__login"}},[i("img",{attrs:{src:"http://p0.meituan.net/movie/7dd82a16316ab32c8359debdb04396ef2897.png"}}),i("el-dropdown",{staticClass:"nav__login__dropdown",on:{command:e.handleUserCommand}},[i("i",{staticClass:"el-icon-arrow-down"}),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e.hasLogin?e._e():i("el-dropdown-item",{attrs:{command:"login"}},[e._v("登录")]),e.hasLogin?e._e():i("el-dropdown-item",{attrs:{command:"register"}},[e._v("注册")]),e.hasLogin?i("el-dropdown-item",{attrs:{command:"userorders"}},[e._v("查询订单")]):e._e(),e.hasLogin?i("el-dropdown-item",{attrs:{command:"userinfo"}},[e._v("个人信息")]):e._e(),e.hasLogin?i("el-dropdown-item",{attrs:{command:"logout"}},[e._v("退出")]):e._e()],1)],1)],1),i("el-input",{attrs:{id:"nav__search",placeholder:"找影视剧、影人、影院",icon:"search",size:"large","on-icon-click":e.search},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),i("el-menu",{staticClass:"el-menu-demo",attrs:{id:"nav__menu","default-active":e.active,mode:"horizontal"}},[i("router-link",{attrs:{to:{name:"Home"}}},[i("el-menu-item",{attrs:{index:"0"}},[e._v("首页")])],1),i("router-link",{attrs:{to:{name:"FilmFilter"}}},[i("el-menu-item",{attrs:{index:"1"}},[e._v("电影")])],1)],1)],1),i("div",{attrs:{id:"view"}},[i("router-view")],1),i("el-dialog",{attrs:{title:"用户登录"},model:{value:e.loginDialogVisible,callback:function(t){e.loginDialogVisible=t},expression:"loginDialogVisible"}},[i("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.loginRules,"label-width":"72px","label-position":"left"}},[i("el-form-item",{attrs:{label:"用户名",prop:"username"}},[i("el-input",{model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),i("el-form-item",{attrs:{label:"密码",prop:"password"}},[i("el-input",{attrs:{type:"password"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1)],1),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.loginDialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}},333:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("el-carousel",{staticClass:"slide",attrs:{interval:5e3,arrow:"always",height:"440px"}},e._l(e.imgs,function(e){return s("el-carousel-item",[s("img",{staticClass:"slide__img",attrs:{src:e.src}})])})),s("div",{staticClass:"main"},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.newsLoading,expression:"newsLoading"}],staticClass:"movie-grid"},[s("div",{staticClass:"movie-grid__header"},[s("div",{staticClass:"movie-grid__header__title"},[e._v("最新上映（"+e._s(e.newFilms.length)+"部）")])]),s("div",{staticClass:"movie-grid__content"},e._l(e.newFilms,function(t){return s("div",{staticClass:"movie-item"},[s("img",{staticClass:"movie-item__img",attrs:{src:t.url}}),s("div",{staticClass:"movie-item__bg"}),s("div",{staticClass:"movie-item__info"},[s("div",{staticClass:"movie-item__info__name"},[e._v(e._s(t.name))]),s("span",{staticClass:"movie-item__info__point"},[e._v(e._s(t.rating))])]),s("router-link",{staticClass:"movie-item__operation",attrs:{to:{name:"FilmDetail",params:{id:t.id}}}},[e._v("购票")])],1)}))]),s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.monthLoading,expression:"monthLoading"}],staticClass:"movie-grid"},[s("div",{staticClass:"movie-grid__header"},[s("div",{staticClass:"movie-grid__header__title"},[e._v("本月上映（"+e._s(e.monthFilms.length)+"部）")])]),s("div",{staticClass:"movie-grid__content"},e._l(e.monthFilms,function(t){return s("div",{staticClass:"movie-item"},[s("img",{staticClass:"movie-item__img",attrs:{src:t.url}}),s("div",{staticClass:"movie-item__bg"}),s("div",{staticClass:"movie-item__info"},[s("div",{staticClass:"movie-item__info__name"},[e._v(e._s(t.name))]),s("span",{staticClass:"movie-item__info__point"},[e._v(e._s(t.rating))])]),s("router-link",{staticClass:"movie-item__operation",attrs:{to:{name:"FilmDetail",params:{id:t.id}}}},[e._v("购票")])],1)}))])])],1)},staticRenderFns:[]}},337:function(e,t){},7:function(e,t,s){"use strict";function i(e){return l.default.http.get(e).then(function(e){return o.a.resolve(e.body)},function(){return o.a.reject(new Error("未知错误"))})}function a(e,t){return l.default.http.post(e,t,{emulateJSON:!0}).then(function(e){return o.a.resolve(e.body)},function(){return o.a.reject(new Error("未知错误"))})}function n(e,t){return l.default.http.put(e,t,{emulateJSON:!0}).then(function(e){return o.a.resolve(e.body)},function(){return o.a.reject(new Error("未知错误"))})}s.d(t,"b",function(){return c}),s.d(t,"a",function(){return m}),s.d(t,"d",function(){return u}),s.d(t,"c",function(){return d});var r=s(53),o=s.n(r),l=s(2),c={login:function(e){return a("/api/login",e)},logout:function(){return n("/api/logout",{})},signup:function(e){return a("/api/signup",e)},fetchInfo:function(){return i("/api/user")},updateInfo:function(e){return n("/api/user",e)},lockSeat:function(e,t){return n("/api/user/screen/"+e,t)},buySeat:function(e,t){return n("/api/user/screen/"+e,t)},getOrders:function(){return i("/api/user/order")}},m={fetchDtl:function(e){return i("/api/movie/"+e)},fetchNews:function(e){return i("/api/movie/showing/"+e)},fetchMonth:function(){return i("/api/movie/date/month/201706")},queryMovie:function(e,t,s,a,n){return i("/api/movie/query?type="+e+"&area="+t+"&year="+s+"&page="+a+"&step="+n)},countMovie:function(e,t,s){return i("/api/movie/query/count?type="+e+"&area="+t+"&year="+s)},search:function(e){return i("/api/search?query="+e)}},u={fetchCinemaByArea:function(e){return i("/api/cinema?number="+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:50)+"&address="+e)},fetchSeat:function(e,t,s,a){return i("/api/screen?cinemaid="+e+"&movieid="+t+"&date="+s+"&time="+a)}},d={getScreenById:function(e){return i("/api/screen/"+e)}}}},[232]);
//# sourceMappingURL=app.0d957a149b455ef6f5c9.js.map