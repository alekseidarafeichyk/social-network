(this["webpackJsonpsocial-web"]=this["webpackJsonpsocial-web"]||[]).push([[6],{247:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(60);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},253:function(e,t,n){e.exports=n.p+"static/media/user.d380cc81.png"},313:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3XzUz"}},314:function(e,t,n){e.exports={userContainer:"User_userContainer__1pl7l",userDescription:"User_userDescription__3zCfx",photo:"User_photo__1tm_n",btnWrap:"User_btnWrap__2WCGk",btnMode:"User_btnMode__14sxV"}},319:function(e,t,n){"use strict";n.r(t);var r=n(36),o=n(37),a=n(39),s=n(38),i=n(0),l=n.n(i),u=n(30),c=n(83),p=n(247),g=n(313),f=n.n(g);var d=function(e){for(var t=Math.ceil(e.totalItemsCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);var o=Math.ceil(t/e.portionSize),a=Object(i.useState)(1),s=Object(p.a)(a,2),u=s[0],c=s[1],g=(u-1)*e.portionSize+1,d=u*e.portionSize;return l.a.createElement("div",null,u>1&&l.a.createElement("button",{onClick:function(){c(u-1)}},"PREV"),n.filter((function(e){return e>=g&&e<=d})).map((function(t){return l.a.createElement("span",{className:e.currentPage===t?f.a.selectedPage:"",key:t,onClick:function(){e.onPageChanged(t)}},"".concat(t," "))})),o>u&&l.a.createElement("button",{onClick:function(){c(u+1)}},"NEXT"))},m=n(253),h=n.n(m),b=n(18),P=n(314),w=n.n(P);var v=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:w.a.userContainer},l.a.createElement("div",{className:w.a.photo},l.a.createElement(b.b,{to:"/profile/"+e.user.id},l.a.createElement("img",{src:null!=e.user.photos.small?e.user.photos.small:h.a,alt:""}))),l.a.createElement("div",{className:w.a.userDescription},l.a.createElement("h5",null,e.user.name),l.a.createElement("p",null,e.user.status),l.a.createElement("div",null,"us.location.country"),l.a.createElement("div",null,"us.location.city")),l.a.createElement("div",{className:w.a.btnWrap},e.user.followed?l.a.createElement("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),className:w.a.btnMode,onClick:function(){e.unFollowUser(e.user.id)}},"Unfollowed"):l.a.createElement("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),className:w.a.btnMode,onClick:function(){e.followUser(e.user.id)}},"Followed"))))};var U=function(e){return l.a.createElement("div",null,l.a.createElement(d,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged,portionSize:e.portionSize}),e.userPage.map((function(t){return l.a.createElement(v,{key:t.id,user:t,followingInProgress:e.followingInProgress,unFollowUser:e.unFollowUser,followUser:e.followUser})})))},E=n(241),C=n(21),S=function(e){return e.usersPage.users},z=function(e){return e.usersPage.pageSize},y=function(e){return e.usersPage.totalUsersCount},_=function(e){return e.usersPage.currentPage},k=function(e){return e.usersPage.isFetching},I=function(e){return e.usersPage.followingInProgress},j=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.props.isFetching?l.a.createElement(E.a,{disableShrink:!0,size:100}):null,l.a.createElement(U,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,userPage:this.props.userPage,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress,unFollowUser:this.props.unFollowUser,followUser:this.props.followUser,portionSize:this.props.portionSize}))}}]),n}(l.a.Component);t.default=Object(C.d)(Object(u.b)((function(e){return{userPage:S(e),pageSize:z(e),totalUsersCount:y(e),currentPage:_(e),isFetching:k(e),followingInProgress:I(e),portionSize:e.usersPage.portionSize}}),{setCurrentPage:c.c,getUsers:c.b,unFollowUser:c.d,followUser:c.a}))(j)}}]);
//# sourceMappingURL=6.37738e74.chunk.js.map