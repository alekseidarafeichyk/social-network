(this["webpackJsonpsocial-web"]=this["webpackJsonpsocial-web"]||[]).push([[4],{230:function(e,t,n){e.exports={"form-control":"FormsControls_form-control__3atU1",formControl:"FormsControls_formControl__2HRcq",error:"FormsControls_error__WpP4m",formSummaryError:"FormsControls_formSummaryError__BXqTl"}},231:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var a=n(242),r=n(0),o=n.n(r),l=n(230),i=n.n(l),s=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,l=(e.element,n&&a);return o.a.createElement("div",{className:i.a.formControl+" "+(l?i.a.error:"")},o.a.createElement("div",null,r),o.a.createElement("div",null,l&&o.a.createElement("span",{className:i.a.error},"some error")))},c=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},u=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))}},232:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length ".concat(e," symbols")}}},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(60);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(s){r=!0,o=s}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(34),r=n(35),o=n(37),l=n(36),i=n(0),s=n.n(i),c=n(6),u=n(27),m=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(o.a)(i,t);var n=Object(l.a)(i);function i(){return Object(a.a)(this,i),n.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(c.a,{to:"/login"})}}]),i}(s.a.Component);return Object(u.b)(m)(t)}},241:function(e,t,n){e.exports=n.p+"static/media/user.d380cc81.png"},298:function(e,t,n){e.exports={photoBlock:"ProfileInfo_photoBlock__147me",description:"ProfileInfo_description__20bz2",userInfo:"ProfileInfo_userInfo__2ticv"}},299:function(e,t,n){e.exports={item:"Post_item__2Q7NU"}},300:function(e,t,n){e.exports={btn:"MyPosts_btn__28qaX",postsBlock:"MyPosts_postsBlock__2S_AM",posts:"MyPosts_posts__1KbBC",textarea:"MyPosts_textarea__nYGtn"}},307:function(e,t,n){"use strict";n.r(t);var a=n(34),r=n(35),o=n(37),l=n(36),i=n(0),s=n.n(i),c=n(235),u=n(298),m=n.n(u),f=function(e){var t=Object(i.useState)(!1),n=Object(c.a)(t,2),a=n[0],r=n[1],o=Object(i.useState)(e.status),l=Object(c.a)(o,2),u=l[0],m=l[1];Object(i.useEffect)((function(){m(e.status)}),[e.status]);return s.a.createElement(s.a.Fragment,null,a?s.a.createElement("div",null,s.a.createElement("input",{onBlur:function(){r(!1),e.changeUserStatus(u)},type:"text",autoFocus:!0,value:u,onChange:function(e){m(e.currentTarget.value)}})):s.a.createElement("div",null,s.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"No status")))},p=n(241),d=n.n(p),h=function(e){return s.a.createElement("div",null,s.a.createElement("div",null,"Full name: ",e.profile.fullName),s.a.createElement("div",null,"About me: ",e.profile.aboutMe),s.a.createElement("div",null,"Looking for a job: ",e.profile.lookingForAJob?"Yes":"No"),e.profile.lookingForAJob&&s.a.createElement("div",null,"My skills: ",e.profile.lookingForAJobDescription),s.a.createElement("div",null,"Status: ",e.status),s.a.createElement("div",null," Contacts :",Object.keys(e.profile.contacts).map((function(t){var n;return s.a.createElement(j,{key:t,contactValue:null===(n=e.profile)||void 0===n?void 0:n.contacts[t],contactTitle:t})}))),e.isOwner&&s.a.createElement("button",{onClick:e.onEditMode},"Edit Profile"))},b=n(111),v=n(112),E=n(231),g=n(232),y=n(230),O=n.n(y),_=Object(v.a)({form:"edit-profile"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},e.error&&s.a.createElement("div",{className:O.a.formSummaryError},e.error),s.a.createElement("div",null,"Full name: ",s.a.createElement(b.a,{placeholder:"Full name",name:"fullName",component:E.a,validate:[g.b]})),s.a.createElement("div",null,"About me: ",s.a.createElement(b.a,{placeholder:"About Me",name:"aboutMe",component:E.b,validate:[g.b]})),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"lookingForAJob"}," Looking for a job:"),s.a.createElement(b.a,{name:"lookingForAJob",component:E.a,type:"checkbox"})),s.a.createElement("div",null,"My professional skills: ",s.a.createElement(b.a,{placeholder:"My professional skills",name:"lookingForAJobDescription",component:E.b})),s.a.createElement("div",null," Contacts :",Object.keys(e.contacts).map((function(e){return s.a.createElement(b.a,{placeholder:e,name:"contacts."+e,component:E.a})})),s.a.createElement("button",{type:"submit"},"Save")))})),k=n(45);var j=function(e){return s.a.createElement("div",null,e.contactTitle," : ",e.contactValue)},P=function(e){var t=Object(i.useState)(!1),n=Object(c.a)(t,2),a=n[0],r=n[1];return e.profile?s.a.createElement("div",{className:m.a.userInfo},s.a.createElement("div",{className:m.a.photoBlock},s.a.createElement(f,e),s.a.createElement("img",{src:e.profile.photos.large||d.a,alt:""}),e.isOwner&&s.a.createElement("input",{type:"file",onChange:function(t){var n;(null===(n=t.target.files)||void 0===n?void 0:n.length)&&e.savePhoto(t.target.files[0])}})),s.a.createElement("div",{className:m.a.description},a?s.a.createElement(_,{initialValues:e.profile,onSubmit:function(t){e.saveProfileData(t).then((function(){r(!1)}))},contacts:e.profile.contacts}):s.a.createElement(h,{profile:e.profile,status:e.status,isOwner:e.isOwner,onEditMode:function(){r(!0)}}))):s.a.createElement(k.a,null)},S=n(59),C=n(299),w=n.n(C);var A=function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:w.a.posts},s.a.createElement("div",{className:w.a.item},s.a.createElement("img",{src:"https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png",alt:""}),e.message,s.a.createElement("div",null,s.a.createElement("span",null,"like"),e.likeCounts))))},M=n(300),F=n.n(M),N=Object(g.a)(15),U=Object(v.a)({form:"post"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(b.a,{component:E.b,name:"newBodyPost",placeholder:"Enter your text",validate:[g.b,N]})),s.a.createElement("div",null,s.a.createElement("button",null,"Add post")))})),I=s.a.memo((function(e){var t=e.posts.posts.map((function(e){return s.a.createElement(A,{key:e.id,message:e.message,likeCounts:e.likeCounts})}));return s.a.createElement("div",null,s.a.createElement("div",{className:F.a.postsBlock},s.a.createElement("h2",null,"My posts"),s.a.createElement("div",null,s.a.createElement(U,{onSubmit:function(t){e.addPost(t.newBodyPost)}}))),s.a.createElement("div",{className:F.a.posts},t))})),x=n(27),B=Object(x.b)((function(e){return{posts:e.profilePage}}),(function(e){return{addPost:function(t){e(Object(S.b)(t))}}}))(I);var D=function(e){return s.a.createElement("div",null,s.a.createElement(P,{profile:e.profile,status:e.status,changeUserStatus:e.changeUserStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfileData:e.saveProfileData}),s.a.createElement(B,null))},J=n(6),T=n(19),q=n(240),V=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorisedUserId)||this.props.history.push("login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(D,{profile:this.props.profile,status:this.props.status,changeUserStatus:this.props.changeUserStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.ChangeMyPhoto,saveProfileData:this.props.saveProfileData}))}}]),n}(s.a.Component);t.default=Object(T.d)(Object(x.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorisedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:S.d,getUserStatus:S.e,changeUserStatus:S.c,ChangeMyPhoto:S.a,saveProfileData:S.g}),q.a,J.g)(V)}}]);
//# sourceMappingURL=4.6399a056.chunk.js.map