(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{113:function(e){e.exports=JSON.parse('{"404":{"back_404":"Go home","text":"Sorry, I can\'t find the page you\'re looking for...","button_text":"Do you want help to return home?"},"home":{"about":"About me","about_alt":"About","work":"My Work","work_alt":"Work","contact":"Contact me","contact_alt":"Contact"},"about":{"find_me":"You\'ll find me on:"},"work":{"no_projects":"Whoops! There\'s nothing here yet!","categories":"Categories","category_all":"All","website":"Visit Website","source":"Source Code"},"contact":{"toast":{"close":"Close"},"form":{"name":"What\'s your name?","email":"What\'s your email?","message":"Please, explain yourself:","validation":{"invalid_name":"Invalid name","invalid_email":"Invalid email","invalid_message":"Invalid message","invalid_grecaptcha":"Invalid gRecaptchaResponse","server_error":"Server returned an invalid response","conection_error":"Connection Error","success":"Message sent successfully"}},"loading":"Loading","send":"Send","sending":"Sending"},"misc":{"back":"Go back"}}')},114:function(e,t,a){"use strict";var n=a(4),o=a.n(n),r=a(5),l=a.n(r),c=a(6),s=a.n(c),i=a(7),u=a.n(i),d=a(0),m=function(e){function t(){return o()(this,t),s()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u()(t,e),l()(t,[{key:"render",value:function(){var e=this.props.iconColor?{fill:this.props.iconColor}:null;return d.default.createElement("svg",{style:e,viewBox:"0 0 24 24"},d.default.createElement("use",{xlinkHref:"assets/icons.svg#"+this.props.iconName}))}}]),t}(d.default.PureComponent);t.a=m},115:function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return c}));var n={fullName:"Farai Mathemera",description:"BACK-END DEVELOPER | CLOUD ENGINEER",avatarPath:"avatar.svg",about:{title:"FARAI MATHEMERA",description:""},social:[{iconName:"linkedin",url:"www.linkedin.com/in/farai-mathemera",text:"I'm on linkedIn",hoverColor:"#0e76a8"},{iconName:"telegram",url:"https://t.me/The_Fusse",text:"Drop me a line",hoverColor:"#0088cc"},{iconName:"github",url:"https://github.com/FaraiMathemera",text:"I'm on Github",hoverColor:"#1e9429"},{iconName:"email",url:"mailto:queries@faraimathemera.co.za",text:"Send me an email",hoverColor:"#d9071c"}]},o=[{title:"Personal Website (fadzaikadzinga.co.za)",img:"../assets/FadzaiK.png",description:"Personal website of PhD candidate looking to put herself out there and showcase herself.",categories:["Website","NodeJS","React"],siteUrl:"fadzaikadzinga.co.za",sourceCodeUrl:"github.com/FaraiMathemera/project"},{title:"faraimathemera.co.za",img:"../assets/icons/favicon.ico",description:"My personal website with projects I have done.",categories:["Website","NodeJS","React"],siteUrl:"faraimathemera.co.za",sourceCodeUrl:"github.com/FaraiMathemera/project"},{title:"I Do Foundation (NGO)",img:"",description:"NGO providing the community with education and support services.",categories:["JS","Website"],siteUrl:"idofoundation.co.za",sourceCodeUrl:"github.com/FaraiMathemera/:O"}],r="http://localhost:4000",l="6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu",c="./assets/no-work-icon.jpg"},116:function(e,t,a){"use strict";var n=a(4),o=a.n(n),r=a(5),l=a.n(r),c=a(6),s=a.n(c),i=a(7),u=a.n(i),d=a(0),m=a(120),f=a(114),_=a(113),h=_.misc,p=function(e){function t(){return o()(this,t),s()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u()(t,e),l()(t,[{key:"render",value:function(){return d.default.createElement("div",{className:"pt-content-card__header pt-content-card__header--nav flex flex-cross-center"},d.default.createElement(m.a,{to:"/",title:h.back},d.default.createElement("div",{className:"pt-content-card__header--nav__icon flex flex-full-center"},d.default.createElement(f.a,{iconName:"arrow-left"}))),d.default.createElement("div",{className:"pt-content-card__header--nav__title flex flex-full-center"},d.default.createElement(f.a,{iconName:this.props.icon}),d.default.createElement("h2",{className:"ta-c"},this.props.title)),this.props.handleDrawerState?d.default.createElement("button",{style:{pointerEvents:this.props.isFiltersOpen?"none":""},className:"pt-content-card__header--nav__icon flex-full-center pointer",onClick:this.props.handleDrawerState},d.default.createElement(f.a,{iconName:"filter"})):null)}}]),t}(d.default.PureComponent);t.a=p},203:function(e,t,a){"use strict";a.r(t);var n,o=a(4),r=a.n(o),l=a(5),c=a.n(l),s=a(6),i=a.n(s),u=a(7),d=a.n(u),m=a(0),f=a(116),_=a(139),h=a.n(_),p=a(124),v=a.n(p),g=a(125),b=a.n(g),E=a(114),y=a(115),x=a(113),N=(n=b()(v.a.mark((function e(t,a,n,o){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.stringify({name:t,email:a,message:n,"g-recaptcha-response":o}),e.abrupt("return",fetch(y.b,{method:"post",headers:{"Content-type":"application/json; charset=UTF-8"},body:r}));case 2:case"end":return e.stop()}}),e,this)}))),function(e,t,a,o){return n.apply(this,arguments)}),C=x.contact.form.validation;var k=function(e,t,a,n){return new Promise((function(o,r){return function(e){return!!e}(e)?function(e){return!(!e||!e.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i))}(t)?function(e){return!!e}(a)?function(e){return!!e}(n)?void N(e,t,a,n).then((function(e){e.status>=200&&e.status<300?o(String(C.success)):r(String(C.server_error))})).catch((function(e){r(String(C.conection_error))})):r(String(C.invalid_grecaptcha)):r(String(C.invalid_message)):r(String(C.invalid_email)):r(String(C.invalid_name))}))},w=x.contact,S=function(e){var t=e.closeToast;return m.default.createElement("span",{className:"toastify-dismiss",onClick:t},w.toast.close)},A=function(e){function t(e){r()(this,t);var n=i()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"",email:"",message:"",isFormLoading:!1,toastify:{toast:null,ToastContainer:null},ReCAPTCHA:null},n.captcha=null,b()(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(8).then(a.t.bind(null,198,7));case 2:t=e.sent,this.setState({toastify:t});case 4:case"end":return e.stop()}}),e,this)}))).bind(n)(),b()(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(3).then(a.t.bind(null,199,7));case 2:t=e.sent.default,this.setState({ReCAPTCHA:t});case 4:case"end":return e.stop()}}),e,this)}))).bind(n)(),n.onFormSubmit=n.onFormSubmit.bind(n),n.onCaptchaChange=n.onCaptchaChange.bind(n),n.onInputValueChange=n.onInputValueChange.bind(n),n}return d()(t,e),c()(t,[{key:"notify",value:function(e,t){switch(t){case"Success":this.state.toastify.toast.success(e,{closeButton:m.default.createElement(S,null),closeOnClick:!1});break;case"Error":this.state.toastify.toast.error(e,{closeButton:m.default.createElement(S,null),closeOnClick:!1});break;default:this.state.toastify.toast(e,{closeButton:m.default.createElement(S,null),closeOnClick:!1})}}},{key:"onFormSubmit",value:function(e){e.preventDefault(),this.captcha.execute()}},{key:"onCaptchaChange",value:function(e){var t=this;null!==e&&(this.setState({isFormLoading:!0}),k(this.state.name,this.state.email,this.state.message,e).then((function(e){t.notify(e,"Success"),t.captcha.reset(),t.setState({isFormLoading:!1})})).catch((function(e){t.notify(e,"Error"),t.captcha.reset(),t.setState({isFormLoading:!1})})))}},{key:"onInputValueChange",value:function(e){this.setState(h()({},e.target.id,e.target.value)),e.target.value?e.target.nextElementSibling.classList.add("has-content"):e.target.nextElementSibling.classList.remove("has-content")}},{key:"render",value:function(){var e=this,t=y.d.social.map((function(e,t){return m.default.createElement("a",{href:e.url,key:t,target:"_blank",title:e.iconName},m.default.createElement("div",{className:"pt-content-card__body__contact__social__item flex flex-full-center"},m.default.createElement(E.a,{iconName:e.iconName})," ",e.text))})),a=!this.state.ReCAPTCHA||!this.state.toastify.ToastContainer,n=void 0;return n=a?m.default.createElement("div",{className:"loader-container flex flex-main-center"},w.loading,m.default.createElement("div",{className:"loader"},m.default.createElement("span",null),m.default.createElement("span",null),m.default.createElement("span",null))):this.state.isFormLoading?m.default.createElement("div",{className:"loader-container flex flex-main-center"},w.sending,m.default.createElement("div",{className:"loader"},m.default.createElement("span",null),m.default.createElement("span",null),m.default.createElement("span",null))):m.default.createElement("div",{className:"flex flex-main-center"},w.send),m.default.createElement("div",{className:"pt-content-card__body pt-content-card__body__contact flex"},this.state.ReCAPTCHA?m.default.createElement(this.state.ReCAPTCHA,{ref:function(t){e.captcha=t},className:"recaptcha",size:"invisible",sitekey:y.a,onChange:this.onCaptchaChange}):null,this.state.toastify.ToastContainer?m.default.createElement(this.state.toastify.ToastContainer,{position:"bottom-left",autoClose:5e3,type:"default"}):null,y.d.social.length>0&&m.default.createElement("div",{className:"pt-content-card__body__contact__social flex flex-dc flex-full-center"},t),m.default.createElement("div",{className:"pt-content-card__body__contact__form flex flex-main-center"},m.default.createElement("form",{className:"flex flex-dc flex-full-center",onSubmit:this.onFormSubmit},m.default.createElement("div",{className:"pt-content-card__body__contact__form__row flex flex-dc flex-main-center"},m.default.createElement("input",{id:"name",className:"pt-content-card__body__contact__form__input",type:"text",onChange:this.onInputValueChange}),m.default.createElement("label",{htmlFor:"name",className:"pt-content-card__body__contact__form__label"},w.form.name),m.default.createElement("svg",{className:"line",viewBox:"0 0 40 2",preserveAspectRatio:"none"},m.default.createElement("path",{d:"M0 1 L40 1"}),m.default.createElement("path",{d:"M0 1 L40 1",className:"focus"}),m.default.createElement("path",{d:"M0 1 L40 1",className:"error"}),m.default.createElement("path",{d:"M0 1 L40 1",className:"valid"}))),m.default.createElement("div",{className:"pt-content-card__body__contact__form__row flex flex-dc flex-main-center"},m.default.createElement("input",{id:"email",className:"pt-content-card__body__contact__form__input",type:"email",onChange:this.onInputValueChange}),m.default.createElement("label",{htmlFor:"email",className:"pt-content-card__body__contact__form__label"},w.form.email),m.default.createElement("svg",{className:"line",viewBox:"0 0 40 2",preserveAspectRatio:"none"},m.default.createElement("path",{d:"M0 1 L40 1"}),m.default.createElement("path",{d:"M0 1 L40 1",className:"focus"}),m.default.createElement("path",{d:"M0 1 L40 1",className:"error"}),m.default.createElement("path",{d:"M0 1 L40 1",className:"valid"}))),m.default.createElement("div",{className:"pt-content-card__body__contact__form__row flex flex-dc flex-main-center"},m.default.createElement("textarea",{id:"message",className:"pt-content-card__body__contact__form__textarea",rows:"6",onChange:this.onInputValueChange}),m.default.createElement("label",{htmlFor:"message",className:"pt-content-card__body__contact__form__label"},w.form.message),m.default.createElement("svg",{className:"line",viewBox:"0 0 40 2",preserveAspectRatio:"none"},m.default.createElement("path",{d:"M0 1 L40 1"}),m.default.createElement("path",{d:"M0 1 L40 1",className:"focus"}),m.default.createElement("path",{d:"M0 1 L40 1",className:"error"}),m.default.createElement("path",{d:"M0 1 L40 1",className:"valid"}))),m.default.createElement("div",{className:"pt-content-card__body__contact__form__row flex flex-dc flex-main-center"},m.default.createElement("button",{className:"pt-content-card__body__contact__form__send-button flex flex-full-center pointer",disabled:this.state.isFormLoading||a},n)))))}}]),t}(m.default.PureComponent),F=x.home,L=function(e){function t(){return r()(this,t),i()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d()(t,e),c()(t,[{key:"render",value:function(){return m.default.createElement("div",{className:"pt-content-card__contact-container flex flex-dc"},m.default.createElement(f.a,{icon:"message",title:F.contact}),m.default.createElement(A,null))}}]),t}(m.default.PureComponent);t.default=L}}]);