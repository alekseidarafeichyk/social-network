(this["webpackJsonpsocial-web"]=this["webpackJsonpsocial-web"]||[]).push([[4],{233:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return u}));var n=a(60),r=a(0),o=a.n(r),s=a(234),i=a.n(s),l=function(e){e.input;var t=e.meta,a=t.touched,n=t.error,r=e.children,s=(e.element,a&&n);return o.a.createElement("div",{className:i.a.formControl+" "+(s?i.a.error:"")},o.a.createElement("div",null,r),o.a.createElement("div",null,s&&o.a.createElement("span",{className:i.a.error},"some error")))},c=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return o.a.createElement(l,e,o.a.createElement("textarea",Object.assign({},t,a)))},u=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return o.a.createElement(l,e,o.a.createElement("input",Object.assign({className:i.a.input},t,a)))}},234:function(e,t,a){e.exports={"form-control":"FormsControls_form-control__3atU1",formControl:"FormsControls_formControl__2HRcq",error:"FormsControls_error__WpP4m",formSummaryError:"FormsControls_formSummaryError__BXqTl",contact:"FormsControls_contact__vx13F",input:"FormsControls_input__3uHaG",textarea:"FormsControls_textarea__3WMoi"}},235:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length ".concat(e," symbols")}}},236:function(e,t,a){e.exports=a.p+"static/media/user.d380cc81.png"},238:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(34),r=a(35),o=a(37),s=a(36),i=a(0),l=a.n(i),c=a(6),u=a(27),m=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(o.a)(i,t);var a=Object(s.a)(i);function i(){return Object(n.a)(this,i),a.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(c.a,{to:"/login"})}}]),i}(l.a.Component);return Object(u.b)(m)(t)}},240:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(62);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},257:function(e,t,a){e.exports={field:"ProfileData_field__2AUAN"}},302:function(e,t,a){e.exports={photoBlock:"ProfileInfo_photoBlock__147me",description:"ProfileInfo_description__20bz2",contact:"ProfileInfo_contact__1hR-X",userInfo:"ProfileInfo_userInfo__2ticv"}},303:function(e,t,a){e.exports={item:"Post_item__2Q7NU"}},304:function(e,t,a){e.exports={btn:"MyPosts_btn__28qaX",postsBlock:"MyPosts_postsBlock__2S_AM",posts:"MyPosts_posts__1KbBC",textarea:"MyPosts_textarea__nYGtn"}},305:function(e,t,a){e.exports={profileContainer:"Profile_profileContainer__qktOA"}},311:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a(35),o=a(37),s=a(36),i=a(0),l=a.n(i),c=a(240),u=a(302),m=a.n(u),f=function(e){var t=Object(i.useState)(!1),a=Object(c.a)(t,2),n=a[0],r=a[1],o=Object(i.useState)(e.status),s=Object(c.a)(o,2),u=s[0],m=s[1];Object(i.useEffect)((function(){m(e.status)}),[e.status]);return l.a.createElement(l.a.Fragment,null,n?l.a.createElement("div",{style:{margin:"10px"}},"Status: ",l.a.createElement("input",{onBlur:function(){r(!1),e.changeUserStatus(u)},type:"text",autoFocus:!0,value:u,onChange:function(e){m(e.currentTarget.value)}})):l.a.createElement("div",{style:{margin:"10px"}},"Status : ",l.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"No status")))},p=a(236),d=a.n(p),h=a(257),v=a.n(h),b=a(57),E=function(e){var t=Object.keys(e.profile.contacts).map((function(t){var a;return l.a.createElement(S,{key:t,contactValue:null===(a=e.profile)||void 0===a?void 0:a.contacts[t],contactTitle:t})}));return l.a.createElement("div",null,l.a.createElement("div",{className:v.a.field},"Full name: ",e.profile.fullName),l.a.createElement("div",{className:v.a.field},"About me: ",e.profile.aboutMe),l.a.createElement("div",{className:v.a.field},"Looking for a job: ",e.profile.lookingForAJob?"Yes":"No"),e.profile.lookingForAJob&&l.a.createElement("div",{className:v.a.field},"My skills: ",e.profile.lookingForAJobDescription),l.a.createElement("div",{className:v.a.field},"Status: ",e.status),l.a.createElement("div",{className:v.a.field},"Contacts :",t),e.isOwner&&l.a.createElement(b.a,{onClick:e.onEditMode,name:"Edit Profile"}))},_=a(114),g=a(115),y=a(233),P=a(235),O=a(234),j=a.n(O),k=Object(g.a)({form:"edit-profile"})((function(e){var t=Object.keys(e.contacts).map((function(e){return l.a.createElement("div",{className:j.a.contact},l.a.createElement(_.a,{placeholder:e,name:"contacts."+e,component:y.a}))}));return l.a.createElement("form",{onSubmit:e.handleSubmit},e.error&&l.a.createElement("div",{className:j.a.formSummaryError},e.error),l.a.createElement("div",{className:v.a.field},"Full name: ",l.a.createElement(_.a,{placeholder:"Full name",name:"fullName",component:y.a,validate:[P.b]})),l.a.createElement("div",{className:v.a.field},"About me: ",l.a.createElement(_.a,{placeholder:"About Me",name:"aboutMe",component:y.b,validate:[P.b]})),l.a.createElement("div",{className:v.a.field},l.a.createElement("label",{htmlFor:"lookingForAJob"}," Looking for a job:"),l.a.createElement(_.a,{name:"lookingForAJob",component:y.a,type:"checkbox"})),l.a.createElement("div",{className:v.a.field},"My professional skills: ",l.a.createElement(_.a,{placeholder:"My professional skills",name:"lookingForAJobDescription",component:y.b})),l.a.createElement("div",{className:v.a.field}," Contacts :",t,l.a.createElement(b.a,{type:"submit",name:"Save"})))})),N=a(45);var S=function(e){return l.a.createElement("div",{className:m.a.contact},e.contactTitle," : ",e.contactValue)},C=function(e){var t=Object(i.useState)(!1),a=Object(c.a)(t,2),n=a[0],r=a[1];if(!e.profile)return l.a.createElement(N.a,null);var o=n?l.a.createElement(k,{initialValues:e.profile,onSubmit:function(t){e.saveProfileData(t).then((function(){r(!1)}))},contacts:e.profile.contacts}):l.a.createElement(E,{profile:e.profile,status:e.status,isOwner:e.isOwner,onEditMode:function(){r(!0)}});return l.a.createElement("div",{className:m.a.userInfo},l.a.createElement("div",{className:m.a.photoBlock},l.a.createElement(f,e),l.a.createElement("img",{src:e.profile.photos.large||d.a,alt:""}),e.isOwner&&l.a.createElement("input",{type:"file",onChange:function(t){var a;(null===(a=t.target.files)||void 0===a?void 0:a.length)&&e.savePhoto(t.target.files[0])}})),l.a.createElement("div",{className:m.a.description},o))},A=a(61),F=a(303),w=a.n(F);var x=function(e){var t=e.myPhoto?e.myPhoto:"https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png";return l.a.createElement("div",null,l.a.createElement("div",{className:w.a.posts},l.a.createElement("div",{className:w.a.item},l.a.createElement("img",{src:t}),e.message,l.a.createElement("div",null,l.a.createElement("span",null,"like"),e.likeCounts))))},M=a(304),U=a.n(M),I=Object(P.a)(15),D=Object(g.a)({form:"post"})((function(e){return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("div",null,l.a.createElement(_.a,{component:y.b,name:"newBodyPost",placeholder:"Enter your text",validate:[P.b,I]})),l.a.createElement("div",null,l.a.createElement(b.a,{name:"Add post"})))})),B=a(29),J=a(27),q=l.a.memo((function(e){var t=e.posts.posts.map((function(t){return l.a.createElement(x,{key:t.id,message:t.message,likeCounts:t.likeCounts,myPhoto:e.myPhoto})})),a=Object(J.c)();return l.a.createElement("div",null,l.a.createElement("div",{className:U.a.postsBlock},l.a.createElement("h2",null,"My posts"),l.a.createElement("div",null,l.a.createElement(D,{onSubmit:function(t){e.addPost(t.newBodyPost),a(Object(B.a)("post"))}}))),l.a.createElement("div",{className:U.a.posts},t))})),T=Object(J.b)((function(e){var t;return{posts:e.profilePage,myPhoto:null===(t=e.profilePage.profile)||void 0===t?void 0:t.photos.small}}),(function(e){return{addPost:function(t){e(Object(A.b)(t))}}}))(q),V=a(305),X=a.n(V);var G=function(e){var t=e.isOwner?l.a.createElement(T,null):null;return l.a.createElement("div",{className:X.a.profileContainer},l.a.createElement(C,{profile:e.profile,status:e.status,changeUserStatus:e.changeUserStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfileData:e.saveProfileData}),t)},H=a(6),L=a(19),R=a(238),W=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorisedUserId)||this.props.history.push("login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(G,{profile:this.props.profile,status:this.props.status,changeUserStatus:this.props.changeUserStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.ChangeMyPhoto,saveProfileData:this.props.saveProfileData}))}}]),a}(l.a.Component);t.default=Object(L.d)(Object(J.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorisedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:A.d,getUserStatus:A.e,changeUserStatus:A.c,ChangeMyPhoto:A.a,saveProfileData:A.g}),R.a,H.g)(W)}}]);
//# sourceMappingURL=4.02ad1c0e.chunk.js.map