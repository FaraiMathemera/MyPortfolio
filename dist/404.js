(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e){e.exports=JSON.parse('{"404":{"back_404":"Go home","text":"Sorry, I can\'t find the page you\'re looking for...","button_text":"Do you want help to return home?"},"home":{"about":"About me","about_alt":"About","work":"My Work","work_alt":"Work","contact":"Contact me","contact_alt":"Contact"},"about":{"find_me":"You\'ll find me on:"},"work":{"no_projects":"Whoops! There\'s nothing here yet!","categories":"Categories","category_all":"All","website":"Visit Website","source":"Source Code"},"contact":{"toast":{"close":"Close"},"form":{"name":"What\'s your name?","email":"What\'s your email?","message":"Please, explain yourself:","validation":{"invalid_name":"Invalid name","invalid_email":"Invalid email","invalid_message":"Invalid message","invalid_grecaptcha":"Invalid gRecaptchaResponse","server_error":"Server returned an invalid response","conection_error":"Connection Error","success":"Message sent successfully"}},"loading":"Loading","send":"Send","sending":"Sending"},"misc":{"back":"Go back"}}')},114:function(e,t,n){"use strict";var r=n(4),o=n.n(r),a=n(5),i=n.n(a),c=n(6),l=n.n(c),s=n(7),u=n.n(s),p=n(0),f=function(e){function t(){return o()(this,t),l()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u()(t,e),i()(t,[{key:"render",value:function(){var e=this.props.iconColor?{fill:this.props.iconColor}:null;return p.default.createElement("svg",{style:e,viewBox:"0 0 24 24"},p.default.createElement("use",{xlinkHref:"assets/icons.svg#"+this.props.iconName}))}}]),t}(p.default.PureComponent);t.a=f},120:function(e,t,n){"use strict";var r=n(0),o=n(1),a=n.n(o),i=n(16),c=n.n(i),l=n(41),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},f=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=u(this,e.call.apply(e,[this].concat(a))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!p(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,a=n.to;o?t.replace(a):t.push(a)}},u(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,i="string"==typeof t?Object(l.b)(t,null,null,a.location):t,u=a.createHref(i);return r.default.createElement("a",s({},o,{onClick:this.handleClick,href:u,ref:n}))},t}(r.default.Component);f.propTypes={onClick:a.a.func,target:a.a.string,replace:a.a.bool,to:a.a.oneOfType([a.a.string,a.a.object]).isRequired,innerRef:a.a.oneOfType([a.a.string,a.a.func])},f.defaultProps={replace:!1},f.contextTypes={router:a.a.shape({history:a.a.shape({push:a.a.func.isRequired,replace:a.a.func.isRequired,createHref:a.a.func.isRequired}).isRequired}).isRequired},t.a=f},197:function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),a=n(5),i=n.n(a),c=n(6),l=n.n(c),s=n(7),u=n.n(s),p=n(0),f=n(120),d=n(114),h=n(113),y=h[404],m=function(e){function t(){return o()(this,t),l()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u()(t,e),i()(t,[{key:"render",value:function(){return p.default.createElement("div",{className:"pt-content-card__404-container flex flex-dc"},p.default.createElement("div",{className:"pt-content-card__body pt-content-card__body__404 flex flex-dc flex-full-center"},p.default.createElement(d.a,{iconName:"clippy"}),p.default.createElement("p",null,y.text),p.default.createElement(f.a,{to:"/",title:y.back_404},p.default.createElement("div",null,y.button_text))))}}]),t}(p.default.PureComponent);t.default=m}}]);