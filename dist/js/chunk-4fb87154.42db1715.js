(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fb87154"],{"7f7f":function(t,e,a){var r=a("86cc").f,i=Function.prototype,s=/^\s*function ([^ (]*)/,o="name";o in i||a("9e1e")&&r(i,o,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},b8fa:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-bg",attrs:{id:"contact-ui"}},[a("main",{staticClass:"grid__padding__sm static-form"},[a("div",{staticClass:"webapp-content__inner"},[a("div",{staticClass:"center-txt"},[a("div",{staticClass:"webapp-user-form-wrapper",class:t.headerTag},[a("div",{staticClass:"webapp-user-form-inner np"},[a("div",{staticClass:"form-wrapper"},[1===t.contactVerification?a("div",{staticClass:"form-loader form-loader-login verify"},[t._m(0),t._m(1)]):2===t.contactVerification?a("div",{staticClass:"form-loader form-loader-login success"},[t._m(2),t._m(3)]):3===t.contactVerification?a("div",{staticClass:"form-loader form-loader-login failure"},[t._m(4),t._v("--\x3e\n\n                "),t._m(5),t._m(6)]):a("div",{staticClass:"login-form grid__padding pt-15"},[t._m(7),a("br"),a("div",{staticClass:"form-group grid__full mt-10"},[a("label",{staticClass:"form-component text-white",attrs:{for:"formName"}},[t._v("Name")]),a("div",{staticClass:"input-group full-border"},[t._m(8),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.contactData.name,expression:"contactData.name",modifiers:{trim:!0}}],staticClass:"form-control",class:t.validateForm.name_error,attrs:{id:"formName",type:"text",placeholder:"Enter FullName"},domProps:{value:t.contactData.name},on:{input:function(e){e.target.composing||t.$set(t.contactData,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),a("div",{staticClass:"form-group grid__full mt-10"},[a("label",{staticClass:"form-component text-white",attrs:{for:"formEmail"}},[t._v("Email ID")]),a("div",{staticClass:"input-group full-border"},[t._m(9),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.contactData.email,expression:"contactData.email",modifiers:{trim:!0}}],staticClass:"form-control",class:t.validateForm.email_error,attrs:{id:"formEmail",type:"text",placeholder:"Email Address"},domProps:{value:t.contactData.email},on:{input:function(e){e.target.composing||t.$set(t.contactData,"email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),a("div",{staticClass:"form-group grid__full mt-10"},[a("label",{staticClass:"form-component text-white",attrs:{for:"formPhone"}},[t._v("Phone")]),a("div",{staticClass:"input-group full-border"},[t._m(10),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.contactData.phone,expression:"contactData.phone",modifiers:{trim:!0}}],staticClass:"form-control",class:t.validateForm.phone_error,attrs:{id:"formPhone",type:"text",placeholder:"Phone Number"},domProps:{value:t.contactData.phone},on:{input:function(e){e.target.composing||t.$set(t.contactData,"phone",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),a("div",{staticClass:"form-group grid__full mt-10"},[a("label",{staticClass:"form-component text-white",attrs:{for:"formMessage"}},[t._v("Message")]),a("div",{staticClass:"input-group full-border"},[t._m(11),a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.contactData.message,expression:"contactData.message",modifiers:{trim:!0}}],staticClass:"form-control",class:t.validateForm.message_error,attrs:{id:"formMessage",type:"text",placeholder:"Enter Message"},domProps:{value:t.contactData.message},on:{input:function(e){e.target.composing||t.$set(t.contactData,"message",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),a("div",{staticClass:"grid__full mt-10"},[a("button",{staticClass:"button medium rounded bkg-green bkg-hover-green color-white color-hover-white",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.sendMessage(e)}}},[a("i",{staticClass:"fas fa-envelope"}),t._v(" Send Message")])])])])])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"center-txt webapp-ripple-text"},[a("i",{staticClass:"fas fa-envelope"}),t._v(" Sending Your Message")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"webapp-ripple"},[a("div"),a("div")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"center-txt webapp-ripple-text"},[a("i",{staticClass:"fas fa-check-circle"}),t._v(" Message Sent Successful")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"webapp-ripple"},[a("div"),a("i",{staticClass:"webapp-ripple-notification fa fa-check-circle"}),a("div")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"center-txt webapp-ripple-text"},[a("i",{staticClass:"fa fa-bell"}),t._v(" Message Sending Failed")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"webapp-ripple"},[a("i",{staticClass:"webapp-ripple-notification fa fa-times-circle"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"webapp-ripple"},[a("div"),a("div")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"webapp-user-form-header m-b-sm nb ns"},[a("div",{staticClass:"webapp-user-form-inner"},[a("div",{staticClass:"grid__full"},[a("div",{staticClass:"card",staticStyle:{width:"70%"}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex flex-row"},[a("div",{staticClass:"round round-lg align-self-center"},[a("i",{staticClass:"fas fa-envelope"})]),a("div",{staticClass:"m-l-10 align-self-center"},[a("h3",{staticClass:"wallet m-b-0 font-light text-white"},[t._v("Contact Us")]),a("h5",{staticClass:"wallet text-muted m-b-0 text-white"},[a("i",{staticClass:"palette4 fas fa-map-signs"}),t._v(" 135 Springer Avenue, Edwardsville, Il, 62025 ")])])])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-addon"},[a("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-addon"},[a("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-addon"},[a("i",{staticClass:"fas fa-mobile"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-addon"},[a("i",{staticClass:"fas fa-comment"})])}],s=(a("7f7f"),a("678e")),o={data:function(){return{validEmail:!1,proceed:!0,validateForm:{name_error:{"form-error":!1},email_error:{"form-error":!1},phone_error:{"form-error":!1},message_error:{"form-error":!1}},headerTag:{"animated fadeInUp":!1,hidden:!0},contactData:{token:"C30A52470BFCD552CBA9BD20DF5736A30A17914C83A8E1DF2E05F4A430213CE0D35DD0D2EB7946A16F34ABD60E84F5C901E310DB044A3844572041B01E3D64F3",name:"",email:"",phone:"",message:""},contactVerification:0}},methods:{sendMessage:function(){var t=/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;if(this.validEmail=t.test(this.contactData.email),this.contactData.name.length<=3?(this.validateForm.name_error={"form-error":!0},this.proceed=!1):this.validateForm.name_error={"form-error":!1},!1===this.validEmail?(this.validateForm.email_error={"form-error":!0},this.proceed=!1):this.validateForm.email_error={"form-error":!1},this.contactData.phone.length<=5?(this.validateForm.phone_error={"form-error":!0},this.proceed=!1):this.validateForm.phone_error={"form-error":!1},this.contactData.message.length<=10?(this.validateForm.message_error={"form-error":!0},this.proceed=!1):this.validateForm.message_error={"form-error":!1},this.contactData.name.length>3&&!0===this.validEmail&&this.contactData.phone.length>5&&this.contactData.message.length>10){this.proceed=!0;var e=this.proceed;this.processRequest(e)}},processRequest:function(t){var e=this,a=t;a&&(this.contactVerification=1,s["a"].post("/send-message.php",this.contactData).then(function(t){"Message Successful"==t.data.status?setTimeout(function(){e.contactVerification=2,setTimeout(function(){window.location.href="./"},4e3)},500):"Message Failed"==t.data.status?setTimeout(function(){e.contactVerification=3,setTimeout(function(){e.contactVerification=0},4e3)},500):setTimeout(function(){e.contactVerification=0},500)}).catch(function(t){console.log(t)}))}},mounted:function(){var t=this;setTimeout(function(){t.headerTag={"animated fadeInUp":!0,hidden:!1},setTimeout(function(){t.headerTag={"animated fadeInDown":!1,hidden:!1}},1500)},100)}},n=o,c=a("2877"),l=Object(c["a"])(n,r,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-4fb87154.42db1715.js.map