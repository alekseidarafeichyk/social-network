(this["webpackJsonpsocial-web"]=this["webpackJsonpsocial-web"]||[]).push([[5],{233:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return u}));var n=a(60),r=a(0),s=a.n(r),o=a(234),i=a.n(o),c=function(e){e.input;var t=e.meta,a=t.touched,n=t.error,r=e.children,o=(e.element,a&&n);return s.a.createElement("div",{className:i.a.formControl+" "+(o?i.a.error:"")},s.a.createElement("div",null,r),s.a.createElement("div",null,o&&s.a.createElement("span",{className:i.a.error},"some error")))},m=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return s.a.createElement(c,e,s.a.createElement("textarea",Object.assign({},t,a)))},u=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return s.a.createElement(c,e,s.a.createElement("input",Object.assign({className:i.a.input},t,a)))}},234:function(e,t,a){e.exports={"form-control":"FormsControls_form-control__3atU1",formControl:"FormsControls_formControl__2HRcq",error:"FormsControls_error__WpP4m",formSummaryError:"FormsControls_formSummaryError__BXqTl",contact:"FormsControls_contact__vx13F",input:"FormsControls_input__3uHaG",textarea:"FormsControls_textarea__3WMoi"}},235:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length ".concat(e," symbols")}}},236:function(e,t,a){e.exports=a.p+"static/media/user.d380cc81.png"},238:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(34),r=a(35),s=a(37),o=a(36),i=a(0),c=a.n(i),m=a(6),u=a(27),l=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var t=function(t){Object(s.a)(i,t);var a=Object(o.a)(i);function i(){return Object(n.a)(this,i),a.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(m.a,{to:"/login"})}}]),i}(c.a.Component);return Object(u.b)(l)(t)}},259:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__2Os3r",dialogsItems:"Dialogs_dialogsItems__16ib5",messages:"Dialogs_messages__2pw5I",messageForm:"Dialogs_messageForm__2MxjV"}},260:function(e,t,a){e.exports={dialog:"DialogItem_dialog__1L2MG"}},261:function(e,t,a){e.exports={message:"Message_message__38E-4"}},313:function(e,t,a){"use strict";a.r(t);var n=a(78),r=a(0),s=a.n(r),o=a(259),i=a.n(o),c=a(260),m=a.n(c),u=a(17),l=a(236),d=a.n(l);var g=function(e){var t="/dialogs/"+e.id;return s.a.createElement("div",{className:m.a.dialog},s.a.createElement("img",{src:d.a,alt:""}),s.a.createElement(u.b,{to:t},e.name))},f=a(261),_=a.n(f);var p=function(e){return s.a.createElement("div",{className:_.a.message},e.message)},b=a(114),E=a(115),v=a(29),h=a(233),j=a(235),O=a(57),F=a(27),x=Object(j.a)(100),C=Object(E.a)({form:"message"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(b.a,{component:h.b,name:"newMessageBody",placeholder:"Enter your message",validate:[j.b,x]}),s.a.createElement(O.a,{name:"Add message"}))}));var y=function(e){var t=e.dialogsPage.messages.map((function(e){return s.a.createElement(p,{key:e.id,message:e.message})})),a=e.dialogsPage.dialogs.map((function(e){return s.a.createElement(g,{key:e.id,name:e.name,id:e.id})})),n=Object(F.c)();return s.a.createElement("div",{className:i.a.dialogs},s.a.createElement("div",{className:i.a.dialogsItems},a),s.a.createElement("div",{className:i.a.messageForm},s.a.createElement(C,{onSubmit:function(t){e.addMessage(t.newMessageBody),n(Object(v.a)("message"))}})),s.a.createElement("div",{className:i.a.messages},t))},M=a(238),N=a(19);t.default=Object(N.d)(Object(F.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{addMessage:function(t){e(Object(n.a)(t))}}})),M.a)(y)}}]);
//# sourceMappingURL=5.1a195d8c.chunk.js.map