(this["webpackJsonpsocial-web"]=this["webpackJsonpsocial-web"]||[]).push([[1],{11:function(e,t,n){e.exports={nav:"Navbar_nav__1Fel9",item:"Navbar_item__1g377",activeLink:"Navbar_activeLink__2gg7Q"}},141:function(e,t,n){e.exports=n(232)},143:function(e,t,n){},147:function(e,t,n){},232:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);n(143),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(46),c=n.n(u),i=n(34),o=n(35),s=n(37),l=n(36),f=(n(147),n(11)),d=n.n(f),p=n(17);var m=function(){return a.a.createElement("nav",{className:d.a.nav},a.a.createElement("div",{className:d.a.item},a.a.createElement(p.b,{to:"/profile",activeClassName:d.a.activeLink},"Profile")),a.a.createElement("div",{className:d.a.item},a.a.createElement(p.b,{to:"/users",activeClassName:d.a.activeLink},"Users")),a.a.createElement("div",{className:d.a.item},a.a.createElement(p.b,{to:"/dialogs",activeClassName:d.a.activeLink},"Messages")),a.a.createElement("div",{className:d.a.item},a.a.createElement(p.b,{to:"/news",activeClassName:d.a.activeLink},"News")),a.a.createElement("div",{className:d.a.item},a.a.createElement(p.b,{to:"/music",activeClassName:d.a.activeLink},"Music")),a.a.createElement("div",{className:d.a.item},a.a.createElement(p.b,{to:"/setting",activeClassName:d.a.activeLink},"Setting")))},b=n(6),h=n(55),v=n.n(h),g=n(86),O=n.n(g),E=n(57);var j=function(e){return a.a.createElement("header",{className:v.a.header},a.a.createElement("img",{src:O.a,alt:"logo"}),a.a.createElement("div",{className:v.a.loginBlock},e.auth.isAuth?a.a.createElement("div",null,e.auth.login," - ",a.a.createElement(E.a,{onClick:function(){e.logoutTC()},name:"logout"})):a.a.createElement(p.b,{to:"/login"},"Login")))},w=n(27),_=n(26),S=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement(j,this.props)}}]),n}(a.a.Component),y=Object(w.b)((function(e){return{auth:e.auth}}),{logoutTC:_.d})(S),T=n(19),C=n(2),U={initialized:!1},P=n(61),x=n(78),A=n(85),k=n(90),N=n(84),L=Object(T.c)({profilePage:P.f,dialogsPage:x.b,usersPage:A.e,auth:_.a,form:N.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCSESS":return Object(C.a)(Object(C.a)({},e),{},{initialized:!0});default:return e}}}),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,R=Object(T.e)(L,I(Object(T.a)(k.a))),F=n(45),G=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(F.a,null)},a.a.createElement(e,t))}},z=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,313))})),H=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,311))})),D=a.a.lazy((function(){return n.e(9).then(n.bind(null,308))})),M=a.a.lazy((function(){return n.e(8).then(n.bind(null,309))})),W=a.a.lazy((function(){return n.e(10).then(n.bind(null,310))})),B=a.a.lazy((function(){return n.e(6).then(n.bind(null,312))})),V=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,314))})),Z=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){console.log(e)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(y,null),a.a.createElement(m,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(b.d,null,a.a.createElement(b.b,{path:"/profile/:userId?",render:G(H)}),a.a.createElement(b.b,{path:"/users",render:G(B)}),a.a.createElement(b.b,{path:"/dialogs",render:G(z)}),a.a.createElement(b.b,{path:"/news",render:G(D)}),a.a.createElement(b.b,{path:"/music",render:G(M)}),a.a.createElement(b.b,{path:"/setting",render:G(W)}),a.a.createElement(b.b,{path:"/login",render:G(V)}),a.a.createElement(b.a,{exact:!0,from:"/",to:"/profile"})))):a.a.createElement(F.a,null)}}]),n}(a.a.Component),X=Object(T.d)(b.g,Object(w.b)((function(e){return{initialized:e.app.initialized}}),{initializedApp:function(){return function(e){var t=e(Object(_.b)());Promise.all([t]).then((function(){e({type:"app/INITIALIZED_SUCCSESS"})}))}}}))(Z),J=function(e){return a.a.createElement(p.a,null,a.a.createElement(w.a,{store:R},a.a.createElement(X,null)))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return b}));var r=n(5),a=n.n(r),u=n(7),c=n(2),i=n(8),o=n(29),s={id:null,email:null,login:null,isAuth:!1,captcha:null},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(c.a)(Object(c.a)({},e),{},{id:t.userId,email:t.email,login:t.login,isAuth:t.isAuth});case"auth/SET_CAPTCHA_URL":return Object(c.a)(Object(c.a)({},e),{},{captcha:t.captchaUrl});default:return e}},f=function(e,t,n,r){return{type:"auth/SET_USER_DATA",userId:e,email:t,login:n,isAuth:r}},d=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r,u,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,u=r.id,c=r.login,o=r.email,t(f(u,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n,r){return function(){var c=Object(u.a)(a.a.mark((function u(c){var s,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.login(e,t,n,r);case 2:0===(s=a.sent).data.resultCode?c(d()):(10===s.data.resultCode&&c(m()),l=s.data.messages.length>0?s.data.messages:"Some error",c(Object(o.b)("login",{_error:"".concat(l)})));case 4:case"end":return a.stop()}}),u)})));return function(e){return c.apply(this,arguments)}}()},m=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getCaptchaUrl();case 2:n=e.sent,t({type:"auth/SET_CAPTCHA_URL",captchaUrl:n.data.url});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),u=n(92),c=n.n(u),i=function(){return a.a.createElement("div",{className:c.a.ldsRing},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))}},55:function(e,t,n){e.exports={header:"Header_header__ik6ZR",loginBlock:"Header_loginBlock__2LZXi"}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(60),a=n(0),u=n.n(a),c=n(87),i=n.n(c),o=u.a.memo((function(e){var t=e.name,n=Object(r.a)(e,["name"]);return u.a.createElement("button",Object.assign({className:i.a.button},n),t)}))},61:function(e,t,n){"use strict";n.d(t,"f",(function(){return p})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return O})),n.d(t,"a",(function(){return E})),n.d(t,"g",(function(){return j}));var r=n(5),a=n.n(r),u=n(7),c=n(23),i=n(2),o=n(9),s=n(8),l=n(29),f="profile/ADD_POST",d={posts:[{id:Object(o.v1)(),message:"Hi",likeCounts:25},{id:Object(o.v1)(),message:"Hello",likeCounts:20}],newPostText:"",profile:null,status:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var n={id:Object(o.v1)(),message:t.postText,likeCounts:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[n].concat(Object(c.a)(e.posts))});case"profile/SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"profile/SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"profile/CHANGE_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.newStatus});case"profile/SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photo})});default:return e}},m=function(e){return{type:f,postText:e}},b=function(e){return{type:"profile/CHANGE_STATUS",newStatus:e}},h=function(e){return{type:"profile/SAVE_PHOTO_SUCCESS",photo:e}},v=function(e){return function(t){s.d.getUserProfile(e).then((function(e){t({type:"profile/SET_USER_PROFILE",profile:e})}))}},g=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:r=t.sent,n({type:"profile/SET_STATUS",status:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.changeStatus(e);case 2:0===t.sent.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.ChangeMyPhoto(e);case 2:0===(r=t.sent).resultCode&&n(h(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n,r){var u,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=r().auth.id,t.next=3,s.b.saveProfileData(e);case 3:if(0!==(c=t.sent).resultCode){t.next=8;break}n(v(u)),t.next=10;break;case 8:return n(Object(l.b)("edit-profile",{_error:"".concat(c.messages[0])})),t.abrupt("return",Promise.reject(c.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},78:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(23),a=n(2),u=n(9),c={dialogs:[{id:Object(u.v1)(),name:"Alex"},{id:Object(u.v1)(),name:"Dima"},{id:Object(u.v1)(),name:"Azamat"},{id:Object(u.v1)(),name:"Sergey"},{id:Object(u.v1)(),name:"Alexander"}],messages:[{id:Object(u.v1)(),message:"Hello"},{id:Object(u.v1)(),message:"h1"},{id:Object(u.v1)(),message:"How yo`re doing?"},{id:Object(u.v1)(),message:"bye"}],newMessageText:""},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/Add-Message":var n={id:Object(u.v1)(),message:t.messageText};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}},o=function(e){return{type:"dialogs/Add-Message",messageText:e}}},8:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(89),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"628f1297-6b8a-455c-a591-d2e75c4bd3a6"}}),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t),{withCredentials:!0}).then((function(e){return e.data}))},getUserProfile:function(e){return console.warn("Obsolete method.Please profileAPI object"),c.getUserProfile(e)},followUser:function(e){return a.post("follow/"+e).then((function(e){return e.data}))},unFollowUser:function(e){return a.delete("follow/"+e).then((function(e){return e.data}))}},c={getUserProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"9442";return a.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},changeStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))},ChangeMyPhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfileData:function(e){return a.put("profile",e).then((function(e){return e.data}))}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("/auth/login")}},o={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},85:function(e,t,n){"use strict";n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"d",(function(){return O})),n.d(t,"a",(function(){return E}));var r=n(5),a=n.n(r),u=n(7),c=n(23),i=n(2),o=n(8),s=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},l={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],portionSize:10},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user/FOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!0})});case"user/UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!1})});case"user/SET_USERS":return Object(i.a)(Object(i.a)({},e),{},{users:Object(c.a)(t.users)});case"user/SET_CURRENT_PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"user/SET_TOTAL_COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalCount});case"user/TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.value});case"user/TOGGLE_FOLLOWING_PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},d=function(e){return{type:"user/FOLLOW",userId:e}},p=function(e){return{type:"user/UNFOLLOW",userId:e}},m=function(e){return{type:"user/SET_CURRENT_PAGE",currentPage:e}},b=function(e){return{type:"user/TOGGLE_IS_FETCHING",value:e}},h=function(e,t){return{type:"user/TOGGLE_FOLLOWING_PROGRESS",isFetching:e,userId:t}},v=function(e,t){return function(){var n=Object(u.a)(a.a.mark((function n(r){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(b(!0)),r(m(e)),n.next=4,o.d.getUsers(e,t);case 4:u=n.sent,r(b(!1)),r({type:"user/SET_USERS",users:u.items}),r({type:"user/SET_TOTAL_COUNT",totalCount:u.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},g=function(){var e=Object(u.a)(a.a.mark((function e(t,n,r,u){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(h(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(u(n)),t(h(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),O=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(n,e,o.d.unFollowUser.bind(e),p);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(n,e,o.d.followUser.bind(e),d);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},86:function(e,t,n){e.exports=n.p+"static/media/logo.b4b06117.png"},87:function(e,t,n){e.exports={button:"Button_button__3SsT2",buton:"Button_buton__2yP8Y"}},92:function(e,t,n){e.exports={ldsRing:"Loader_ldsRing__3bMNV"}}},[[141,2,3]]]);
//# sourceMappingURL=main.44629938.chunk.js.map