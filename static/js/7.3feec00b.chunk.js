(this["webpackJsonpsocial-web"]=this["webpackJsonpsocial-web"]||[]).push([[7],{242:function(e,t,r){e.exports={"form-control":"FormsControls_form-control__3atU1",formControl:"FormsControls_formControl__2HRcq",error:"FormsControls_error__WpP4m",formSummaryError:"FormsControls_formSummaryError__BXqTl"}},243:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return u}));var n=r(254),a=r(0),o=r.n(a),l=r(242),c=r.n(l),m=function(e){e.input;var t=e.meta,r=t.touched,n=t.error,a=e.children,l=(e.element,r&&n);return o.a.createElement("div",{className:c.a.formControl+" "+(l?c.a.error:"")},o.a.createElement("div",null,a),o.a.createElement("div",null,l&&o.a.createElement("span",{className:c.a.error},"some error")))},i=function(e){var t=e.input,r=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return o.a.createElement(m,e,o.a.createElement("textarea",Object.assign({},t,r)))},u=function(e){var t=e.input,r=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return o.a.createElement(m,e,o.a.createElement("input",Object.assign({},t,r)))}},244:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length ".concat(e," symbols")}}},321:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(111),l=r(112),c=r(243),m=r(244),i=r(242),u=r.n(i),s=Object(l.a)({form:"login"})((function(e){return a.a.createElement("form",{onSubmit:e.handleSubmit},a.a.createElement("div",null,a.a.createElement(o.a,{placeholder:"email",name:"email",component:c.a,validate:[m.b]})),a.a.createElement("div",null,a.a.createElement(o.a,{placeholder:"password",name:"password",component:c.a,validate:[m.b],type:"password"})),e.error&&a.a.createElement("div",{className:u.a.formSummaryError},e.error),a.a.createElement("div",null,a.a.createElement(o.a,{component:"input",name:"rememberMe",type:"checkbox"})," remember me"),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),f=r(30),d=r(29),p=r(6);t.default=Object(f.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginTC:d.c})((function(e){return e.isAuth?a.a.createElement(p.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(s,{onSubmit:function(t){e.loginTC(t.email,t.password,t.rememberMe)}}))}))}}]);
//# sourceMappingURL=7.3feec00b.chunk.js.map