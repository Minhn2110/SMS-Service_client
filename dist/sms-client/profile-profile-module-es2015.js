(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer-admin/footer-admin.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer-admin/footer-admin.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Footer -->\n<div class=\"dashboard-footer-spacer\"></div>\n<div class=\"small-footer margin-top-15\">\n  <div class=\"small-footer-copyrights\">\n    © 2018 <strong>Hireo</strong>. All Rights Reserved.\n  </div>\n  <ul class=\"footer-social-links\">\n    <li>\n      <a href=\"#\" title=\"Facebook\" data-tippy-placement=\"top\">\n        <i class=\"icon-brand-facebook-f\"></i>\n      </a>\n    </li>\n    <li>\n      <a href=\"#\" title=\"Twitter\" data-tippy-placement=\"top\">\n        <i class=\"icon-brand-twitter\"></i>\n      </a>\n    </li>\n    <li>\n      <a href=\"#\" title=\"Google Plus\" data-tippy-placement=\"top\">\n        <i class=\"icon-brand-google-plus-g\"></i>\n      </a>\n    </li>\n    <li>\n      <a href=\"#\" title=\"LinkedIn\" data-tippy-placement=\"top\">\n        <i class=\"icon-brand-linkedin-in\"></i>\n      </a>\n    </li>\n  </ul>\n  <div class=\"clearfix\"></div>\n</div>\n<!-- Footer / End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header-admin/header-admin.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header-admin/header-admin.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"header-container\" class=\"fullwidth dashboard-header not-sticky\">\n\n\t<!-- Header -->\n\t<div id=\"header\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"left-side\">\n\t\t\t\t<!-- Logo -->\n\t\t\t\t<div id=\"logo\">\n\t\t\t\t\t<a href=\"javascript:void(0)\"><img src=\"../../../assets/admin/images/logo.png\" alt=\"\"></a>\n\t\t\t\t</div>\n\n\t\t\t\t<nav id=\"navigation\">\n\t\t\t\t\t<ul id=\"responsive\">\n\t\t\t\t\t\t<li><a routerLink=\"/client/home\">Home</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\t\t<!-- Left Side Content / End -->\n\n\n\t\t\t<!-- Right Side Content / End -->\n\t\t\t<div class=\"right-side\">\n\n\t\t\t\t<!-- User Menu -->\n\t\t\t\t<div class=\"header-widget\">\n\n\t\t\t\t\t<!-- Messages -->\n\t\t\t\t\t<div class=\"header-notifications user-menu\">\n\t\t\t\t\t\t<div class=\"header-notifications-trigger\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\n\t\t\t\t\t\t\t\t<div class=\"user-avatar status-online\"><img src=\"{{avatar}}\" alt=\"\"></div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<!-- Dropdown -->\n\t\t\t\t\t\t<div class=\"header-notifications-dropdown\">\n\n\t\t\t\t\t\t\t<!-- User Status -->\n\t\t\t\t\t\t\t<div class=\"user-status\">\n\n\t\t\t\t\t\t\t\t<!-- User Name / Avatar -->\n\t\t\t\t\t\t\t\t<div class=\"user-details\">\n\t\t\t\t\t\t\t\t\t<div class=\"user-avatar status-online\"><img src=\"images/user-avatar-small-01.jpg\" alt=\"\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Right Side Content / End -->\n\n\t\t</div>\n\t</div>\n\t<!-- Header / End -->\n\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-layout/profile-layout.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-layout/profile-layout.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sms-header-admin></sms-header-admin>\n<div class=\"clearfix\"></div>\n<div class=\"dashboard-container\">\n  <ngx-spinner>\n    <p class=\"loading\">Loading Data...</p>\n  </ngx-spinner>\n  <div class=\"dashboard-sidebar\">\n    <sms-sidebar-admin></sms-sidebar-admin>\n  </div>\n  <div class=\"dashboard-content-container\" data-simplebar>\n    <div class=\"dashboard-content-inner\" >\n      <router-outlet></router-outlet>\n      <sms-footer-admin></sms-footer-admin>\n    </div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar-admin/sidebar-admin.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar-admin/sidebar-admin.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\t<!-- Dashboard Sidebar\n\t================================================== -->\n\n\t<div class=\"dashboard-sidebar-inner\" data-simplebar>\n\t\t<div class=\"dashboard-nav-container\">\n\n\t\t\t<!-- Responsive Navigation Trigger -->\n\t\t\t<a href=\"#\" class=\"dashboard-responsive-nav-trigger\">\n\t\t\t\t<span class=\"hamburger hamburger--collapse\" >\n\t\t\t\t\t<span class=\"hamburger-box\">\n\t\t\t\t\t\t<span class=\"hamburger-inner\"></span>\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t\t<span class=\"trigger-title\">Dashboard Navigation</span>\n\t\t\t</a>\n\t\t\t\n\t\t\t<!-- Navigation -->\n\t\t\t<div class=\"dashboard-nav\">\n\t\t\t\t<div class=\"dashboard-nav-inner\">\n\n\t\t\t\t\t<ul data-submenu-title=\"Start\">\n\t\t\t\t\t\t<li><a routerLink='/profile/dashboard'><i class=\"icon-material-outline-dashboard\"></i> Dashboard</a></li>\n\t\t\t\t\t\t<li><a routerLink='/profile/post-anonymous'><i class=\"icon-material-outline-star-border\"></i> Send SMS</a></li>\n\t\t\t\t\t\t<li><a routerLink='/profile/manage-subscription'><i class=\"icon-material-outline-star-border\"></i>Subscription Services</a></li>\n\t\t\t\t\t\t<!-- <li><a href=\"dashboard-reviews.html\"><i class=\"icon-material-outline-rate-review\"></i> Send SMS to Friend</a></li> -->\n\t\t\t\t\t</ul>\n\t\t\t\t\t\n\t\t\t\t\t<ul data-submenu-title=\"Manage\">\n\t\t\t\t\t\t<li class=\"active-submenu\"><a href=\"#\"><i class=\"icon-material-outline-business-center\"></i> Friends</a>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a routerLink=\"/profile/friend-request\">Request <span class=\"nav-tag\">3</span></a></li>\n\t\t\t\t\t\t\t\t<li><a routerLink=\"/profile/friend-list\">List</a></li>\n\t\t\t\t\t\t\t\t<li><a routerLink=\"/profile/friend-suggestion\">Suggestion</a></li>\n\t\t\t\t\t\t\t\t<li><a routerLink=\"/profile/friend-receive\">Receive</a></li>\n\t\t\t\t\t\t\t</ul>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t\t<ul data-submenu-title=\"Account\">\n\t\t\t\t\t\t<li><a routerLink=\"/profile/setting\"><i class=\"icon-material-outline-settings\"></i> Settings</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"icon-material-outline-power-settings-new\" ></i> Log Out</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Navigation / End -->\n\n\t\t</div>\n\t</div>\n\t<!-- Dashboard Sidebar / End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/checkout/checkout.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/checkout/checkout.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Titlebar\n================================================== -->\n<div id=\"titlebar\" class=\"gradient\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <h2>Checkout</h2>\n\n        <!-- Breadcrumbs -->\n        <nav id=\"breadcrumbs\" class=\"dark\">\n          <ul>\n            <li><a href=\"#\">Home</a></li>\n            <li><a href=\"#\">Pricing Plans</a></li>\n            <li>Checkout</li>\n          </ul>\n        </nav>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Content\n================================================== -->\n<!-- Container -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xl-8 col-lg-8 content-right-offset\">\n\n\n      <!-- Payment Methods Accordion -->\n      <div class=\"payment\">\n\n        <!-- <div class=\"payment-tab payment-tab-active\">\n          <div class=\"payment-tab-trigger\">\n            <input checked id=\"paypal\" name=\"cardType\" type=\"radio\" value=\"paypal\">\n            <label for=\"paypal\">PayPal</label>\n            <img class=\"payment-logo paypal\" src=\"https://i.imgur.com/ApBxkXU.png\" alt=\"\">\n          </div>\n\n          <div class=\"payment-tab-content\">\n            <p>You will be redirected to PayPal to complete payment.</p>\n          </div>\n        </div> -->\n\n\n        <!-- <div class=\"payment-tab\">\n          <div class=\"payment-tab-trigger\">\n            <input type=\"radio\" name=\"cardType\" id=\"creditCart\" value=\"creditCard\">\n            <label for=\"creditCart\">Credit / Debit Card</label>\n            <img class=\"payment-logo\" src=\"https://i.imgur.com/IHEKLgm.png\" alt=\"\">\n          </div>\n\n          <div class=\"payment-tab-content\">\n            <div class=\"row payment-form-row\">\n\n              <div class=\"col-md-6\">\n                <div class=\"card-label\">\n                  <input id=\"nameOnCard\" name=\"nameOnCard\" required type=\"text\" placeholder=\"Cardholder Name\">\n                </div>\n              </div>\n\n              <div class=\"col-md-6\">\n                <div class=\"card-label\">\n                  <input id=\"cardNumber\" name=\"cardNumber\" placeholder=\"Credit Card Number\" required type=\"text\">\n                </div>\n              </div>\n\n              <div class=\"col-md-4\">\n                <div class=\"card-label\">\n                  <input id=\"expiryDate\" placeholder=\"Expiry Month\" required type=\"text\">\n                </div>\n              </div>\n\n              <div class=\"col-md-4\">\n                <div class=\"card-label\">\n                  <label for=\"expiryDate\">Expiry Year</label>\n                  <input id=\"expirynDate\" placeholder=\"Expiry Year\" required type=\"text\">\n                </div>\n              </div>\n\n              <div class=\"col-md-4\">\n                <div class=\"card-label\">\n                  <input id=\"cvv\" required type=\"text\" placeholder=\"CVV\">\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div> -->\n\n      </div>\n      <!-- Payment Methods Accordion / End -->\n\n      <!-- <a href=\"pages-order-confirmation.html\" class=\"button big ripple-effect margin-top-40 margin-bottom-65\">Proceed\n        Payment</a> -->\n      <div class=\"paypal_section col-xl-12\" #paypal></div>\n\n    </div>\n\n\n    <!-- Summary -->\n    <div class=\"col-xl-4 col-lg-4 margin-top-0 margin-bottom-60\">\n\n      <!-- Summary -->\n      <div class=\"boxed-widget summary margin-top-0\">\n        <div class=\"boxed-widget-headline\">\n          <h3>Summary</h3>\n        </div>\n        <div class=\"boxed-widget-inner\">\n          <ul>\n            <li>Current Fees <span>$ {{this.fee}}</span></li>\n            <li>VAT (20%) <span>$ {{this.vat | number : '1.2-2'}}</span></li>\n            <li class=\"total-costs\">Final Price <span>$ {{this.total | number : '1.2-2'}}</span></li>\n          </ul>\n        </div>\n      </div>\n      <!-- Summary / End -->\n\n      <!-- Checkbox -->\n      <div class=\"checkbox margin-top-30\">\n        <input type=\"checkbox\" id=\"two-step\">\n        <label for=\"two-step\"><span class=\"checkbox-icon\"></span> I agree to the <a href=\"#\">Terms and Conditions</a>\n          and the <a href=\"#\">Automatic Renewal Terms</a></label>\n      </div>\n    </div>\n\n  </div>\n</div>\n<a routerLink='/profile/invoice'>aaa</a>\n<!-- Container / End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/dashboard/dashboard.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/dashboard/dashboard.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\t\t\t<!-- Dashboard Headline -->\n\t\t\t<div class=\"dashboard-headline\">\n\t\t\t\t<h3>Post a Job</h3>\n\t\n\t\t\t\t<!-- Breadcrumbs -->\n\t\t\t\t<nav id=\"breadcrumbs\" class=\"dark\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Dashboard</a></li>\n\t\t\t\t\t\t<li>Post a message</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\n\t\t\t<!-- Row -->\n\t\t\t<div class=\"row\">\n\t\n\t\t\t\t<!-- Dashboard Box -->\n\t\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t\t<div class=\"dashboard-box margin-top-0\">\n\t\n\t\t\t\t\t\t<!-- Headline -->\n\t\t\t\t\t\t<div class=\"headline\">\n\t\t\t\t\t\t\t<h3><i class=\"icon-feather-folder-plus\"></i> Message Form</h3>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t<div class=\"content with-padding padding-bottom-10\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\n\t\t\t\t\t\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"submit-field\">\n\t\t\t\t\t\t\t\t\t\t<h5>Phone Number</h5>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"with-border\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"submit-field\">\n\t\t\t\t\t\t\t\t\t\t<h5>Message</h5>\n\t\t\t\t\t\t\t\t\t\t<textarea cols=\"30\" rows=\"5\" class=\"with-border\"></textarea>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\n\t\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t\t<a href=\"#\" class=\"button ripple-effect big margin-top-30\"><i class=\"icon-feather-plus\"></i> Send Message</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row / End -->\n\t\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-layout/friend-layout.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-layout/friend-layout.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\t\t\t<!-- Dashboard Headline -->\n\t\t\t<div class=\"dashboard-headline\">\n\t\t\t\t<h3>Manage Friends</h3>\n\t\t\t\t<span class=\"margin-top-7\">Friend {{type}} for <a href=\"#\">{{userName}}</a></span>\n\t\t\t\t<!-- Breadcrumbs -->\n\t\t\t\t<nav id=\"breadcrumbs\" class=\"dark\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Dashboard</a></li>\n\t\t\t\t\t\t<li>{{this.title}}</li>\n\t\t\t\t\t</ul> \n\t\t\t\t</nav>\n\t\t\t</div>\n\t\n\t\t\t<!-- Row -->\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<!-- Dashboard Box -->\n\t\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t\t<div class=\"dashboard-box margin-top-0\">\n\n\t\t\t\t\t\t<!-- Headline -->\n\t\t\t\t\t\t<div class=\"headline\">\n\t\t\t\t\t\t\t<h3><i class=\"icon-material-outline-supervisor-account\"></i> {{totalFriend}} Friends</h3>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<ul class=\"dashboard-box-list\" *ngFor=\"let item of datasource\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<!-- Overview -->\n\t\t\t\t\t\t\t\t\t<div class=\"freelancer-overview manage-candidates\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"freelancer-overview-inner\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- Avatar -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"freelancer-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"verified-badge\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"{{item.Avatar}}\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- Name -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"freelancer-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4><a href=\"#\">{{item.Name}} <img class=\"flag\" src=\"../../../assets/images/flags/au.svg\" alt=\"\" title=\"Australia\" data-tippy-placement=\"top\"></a></h4>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Details -->\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"freelancer-detail-item\"><a href=\"#\"><i class=\"icon-feather-mail\"></i> {{item.Email}}</a></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span class=\"freelancer-detail-item\"><i class=\"icon-feather-phone\"></i> (+61) 123-456-789</span> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Rating -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"freelancer-rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"star-rating\" data-rating=\"5.0\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Buttons -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"buttons-to-right always-visible margin-top-25 margin-bottom-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"button ripple-effect\" (click)=\"addFriend(item.Id)\" *ngIf=\"type === 'suggestion'\"><i class=\"icon-feather-file-text\"></i> Add Friend</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"button ripple-effect\" *ngIf=\"type === 'request'\"><i class=\"icon-feather-file-text\"></i>Waiting to Apply</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"button ripple-effect\" (click)=\"approveFriend(item.Id)\" *ngIf=\"type === 'receive'\"><i class=\"icon-feather-file-text\"></i>Approve</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/profile/post-anonymous/{{item.Id}}\" class=\"popup-with-zoom-anim button dark ripple-effect\" *ngIf=\"type === 'list'\"><i class=\"icon-feather-mail\"></i> Send Message</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"button gray ripple-effect ico\" title=\"Remove Candidate\" data-tippy-placement=\"top\" (click)=\"removeFriend(item.Id)\" *ngIf=\"type === 'list'\"><i class=\"icon-feather-trash-2\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>  \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row / End -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-list/friend-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-list/friend-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sms-friend-layout type=\"list\"></sms-friend-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-reiceve/friend-reiceve.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-reiceve/friend-reiceve.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sms-friend-layout type=\"receive\"></sms-friend-layout>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-request/friend-request.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-request/friend-request.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sms-friend-layout type=\"request\"></sms-friend-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-suggestion/friend-suggestion.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-suggestion/friend-suggestion.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sms-friend-layout type=\"suggestion\"></sms-friend-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Dashboard Headline -->\n<div class=\"dashboard-headline\">\n\t<h3>Send message to anonymous person</h3>\n\n\t<!-- Breadcrumbs -->\n\t<nav id=\"breadcrumbs\" class=\"dark\">\n\t\t<ul>\n\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t<li><a href=\"#\">Dashboard</a></li>\n\t\t\t<li>Post a message</li>\n\t\t</ul>\n\t</nav>\n</div>\n\n<!-- Row -->\n<div class=\"row\">\n\t<form [formGroup]=\"postAnonymousMsgForm\" (ngSubmit)=\"onSubmit()\" style=\"width: 100%\">\n\n\t\t<!-- Dashboard Box -->\n\t\t<div class=\"col-xl-12\">\n\t\t\t<div class=\"dashboard-box margin-top-0\">\n\n\t\t\t\t<!-- Headline -->\n\t\t\t\t<div class=\"headline\">\n\t\t\t\t\t<h3><i class=\"icon-feather-folder-plus\"></i> Message Form</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"content with-padding padding-bottom-10\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t\t\t\t<div class=\"submit-field\">\n\t\t\t\t\t\t\t\t<h5>Phone Number</h5>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"with-border\" formControlName=\"phoneNumber\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t\t\t\t<div class=\"submit-field\">\n\t\t\t\t\t\t\t\t<h5>Message</h5>\n\t\t\t\t\t\t\t\t<textarea cols=\"30\" rows=\"5\" class=\"with-border\" formControlName=\"content\"></textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-xl-12\">\n\t\t\t<button type=\"submit\" class=\"button ripple-effect big margin-top-30\"><i class=\"icon-feather-plus\"></i> Send Message</button>\n\t\t</div>\n\t</form>\n\n</div>\n<!-- Row / End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>profile works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/settings/settings.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/settings/settings.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Dashboard Content\n\t================================================== -->\n\n\n<!-- Dashboard Headline -->\n<div class=\"dashboard-headline\">\n  <h3>Settings</h3>\n\n  <!-- Breadcrumbs -->\n  <nav id=\"breadcrumbs\" class=\"dark\">\n    <ul>\n      <li><a href=\"#\">Home</a></li>\n      <li><a href=\"#\">Dashboard</a></li>\n      <li>Settings</li>\n    </ul>\n  </nav>\n</div>\n<form method=\"post\" [formGroup]=\"settingForm\" (ngSubmit)=\"onSubmit()\">\n  <!-- Row -->\n  <div class=\"row\">\n    <!-- Dashboard Box -->\n    <div class=\"col-xl-12\">\n      <div class=\"dashboard-box margin-top-0\">\n\n        <!-- Headline -->\n        <div class=\"headline\">\n          <h3><i class=\"icon-material-outline-account-circle\"></i> My Account</h3>\n        </div>\n\n        <div class=\"content with-padding padding-bottom-0\">\n\n          <div class=\"row\">\n\n            <div class=\"col-auto\">\n              <div class=\"avatar-wrapper\" data-tippy-placement=\"bottom\" title=\"Change Avatar\">\n                <img class=\"profile-pic\" src=\"{{avatar}}\" alt=\"\" />\n                <div class=\"upload-button\"></div>\n                <input class=\"file-upload\" type=\"file\" accept=\"image/*\" />\n              </div>\n            </div>\n\n            <div class=\"col\">\n              <div class=\"row\">\n\n                <div class=\"col-xl-6\">\n                  <div class=\"submit-field\">\n                    <h5>First Name</h5>\n                    <input type=\"text\" class=\"with-border\" [(ngModel)]=\"name\" formControlName='firstName'>\n                  </div>\n                </div>\n\n                <div class=\"col-xl-6\">\n                  <div class=\"submit-field\">\n                    <h5>Email</h5>\n                    <input type=\"text\" class=\"with-border\" value=\"tom@example.com\">\n                  </div>\n                </div>\n\n                <div class=\"col-xl-6\">\n                  <div class=\"submit-field\">\n                    <h5>Account Balance</h5>\n                    <input type=\"text\" class=\"with-border\" value=\"{{accountBalance}}$\" disabled readonly>\n                  </div>\n                </div>\n\n                <div class=\"col-xl-6\">\n                  <div class=\"uploadButton\">\n                    <input class=\"uploadButton-input\" type=\"file\" accept=\"image/*, application/pdf\" id=\"upload\" (change)=\"uploadAvatar($event)\" multiple />\n                    <label class=\"uploadButton-button ripple-effect topupBtn\" (click)=\"openDialog()\">Top Up</label>\n                    <label class=\"uploadButton-button ripple-effect\" for=\"upload\">Upload Avatar</label>\n                    <span class=\"uploadButton-file-name\">{{fileName}}</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <!-- Button -->\n    <div class=\"col-xl-12\">\n      <button class=\"button ripple-effect big margin-top-30\">Save Changes</button>\n    </div>\n\n\n  </div>\n</form>\n\n<!-- Row / End -->\n\n<!-- Dashboard Content / End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/subscription-list/subscription-list.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/subscription-list/subscription-list.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\t\t\t<!-- Dashboard Headline -->\n\t\t\t<div class=\"dashboard-headline\">\n\t\t\t\t<h3>Manage Subscription</h3>\n\n\t\t\t\t<!-- Breadcrumbs -->\n\t\t\t\t<nav id=\"breadcrumbs\" class=\"dark\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"javascript:void(0)\">Profile</a></li>\n\t\t\t\t\t\t<li>Manage Subscription</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\n\t\t\t<!-- Row -->\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<!-- Dashboard Box -->\n\t\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t\t<div class=\"dashboard-box margin-top-0\">\n\n\t\t\t\t\t\t<!-- Headline -->\n\t\t\t\t\t\t<div class=\"headline\">\n\t\t\t\t\t\t\t<h3><i class=\"icon-material-outline-assignment\"></i> Subscription List</h3>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<ul class=\"dashboard-box-list\">\n\t\t\t\t\t\t\t\t<li *ngFor=\"let item of subscriptionList\">\n\t\t\t\t\t\t\t\t\t<!-- Job Listing -->\n\t\t\t\t\t\t\t\t\t<div class=\"job-listing width-adjustment\">\n\n\t\t\t\t\t\t\t\t\t\t<!-- Job Listing Details -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"job-listing-details\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- Details -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"job-listing-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"job-listing-title\"><a href=\"#\">{{item.Name}}</a> <span class=\"dashboard-status-button yellow\">Expiring</span></h3>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Job Listing Footer -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"job-listing-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"icon-material-outline-access-time\"></i> 23 hours left</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!-- Task Details -->\n\t\t\t\t\t\t\t\t\t<ul class=\"dashboard-task-info\">\n\t\t\t\t\t\t\t\t\t\t<li><strong>3</strong><span>Subscribers</span></li>\n\t\t\t\t\t\t\t\t\t\t<li><strong>${{item.Price}}</strong><span>Price</span></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t\t\t<!-- Buttons -->\n\t\t\t\t\t\t\t\t\t<div class=\"buttons-to-right always-visible\">\n                    <a href=\"javascript:void(0)\" class=\"button ripple-effect\" (click)=\"openDialog(item.Price, item.Id)\" *ngIf=\"item.active\"><i class=\"icon-material-outline-supervisor-account\" ></i> Subscribe</a>\n                    <a href=\"javascript:void(0)\" *ngIf=\"!item.active\" class=\"button dark ripple-effect\"><i class=\"icon-feather-rotate-ccw\"></i> Already Subscribed</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"button gray ripple-effect ico\" title=\"Remove\" data-tippy-placement=\"top\" (click)=\"unsubscribeService(item.Id)\"><i class=\"icon-feather-trash-2\"></i></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<!-- Row / End -->");

/***/ }),

/***/ "./src/app/layout/footer-admin/footer-admin.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/footer-admin/footer-admin.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXItYWRtaW4vZm9vdGVyLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/footer-admin/footer-admin.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/footer-admin/footer-admin.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterAdminComponent", function() { return FooterAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterAdminComponent = class FooterAdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-footer-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer-admin/footer-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer-admin.component.css */ "./src/app/layout/footer-admin/footer-admin.component.css")).default]
    })
], FooterAdminComponent);



/***/ }),

/***/ "./src/app/layout/header-admin/header-admin.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/header-admin/header-admin.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXItYWRtaW4vaGVhZGVyLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/header-admin/header-admin.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/header-admin/header-admin.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderAdminComponent", function() { return HeaderAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../profile/state/profile.selector */ "./src/app/profile/state/profile.selector.ts");
/* harmony import */ var _profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../profile/state/profile.actions */ "./src/app/profile/state/profile.actions.ts");





let HeaderAdminComponent = class HeaderAdminComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(_profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_4__["ProfileGetUserInfo"]());
        this.store.select(_profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_3__["userInfo"]).subscribe(data => {
            // console.log(data);
            if (data) {
                this.avatar = data.Avatar;
            }
        });
    }
};
HeaderAdminComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
HeaderAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-header-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header-admin/header-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-admin.component.css */ "./src/app/layout/header-admin/header-admin.component.css")).default]
    })
], HeaderAdminComponent);



/***/ }),

/***/ "./src/app/layout/profile-layout/profile-layout.component.css":
/*!********************************************************************!*\
  !*** ./src/app/layout/profile-layout/profile-layout.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading{\r\n  color: white;\r\n  padding-top: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbGF5b3V0L3Byb2ZpbGUtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbGF5b3V0L3Byb2ZpbGUtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZ3tcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/profile-layout/profile-layout.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/profile-layout/profile-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileLayoutComponent", function() { return ProfileLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProfileLayoutComponent = class ProfileLayoutComponent {
    constructor(router, activatedRoute) {
        // this.activatedRoute.url.pipe(takeWhile(() => this.isSubscribing)).subscribe(url => {
        //   if (this.router.url === '/profile/invoice') {
        //     this.isLayout = false;
        //   } else {
        //     this.isLayout = true;
        //   }
        // });
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isSubscribing = true;
    }
    ngOnInit() {
        // this.isLayout = true;
        // console.log(this.router.url)
        // if (this.router.url === '/profile/invoice') {
        //   this.isLayout = false;
        // } else {
        //   this.isLayout = true;
        // }
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        // this.isSubscribing = false;
    }
};
ProfileLayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProfileLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-profile-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-layout/profile-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-layout.component.css */ "./src/app/layout/profile-layout/profile-layout.component.css")).default]
    })
], ProfileLayoutComponent);



/***/ }),

/***/ "./src/app/layout/sidebar-admin/sidebar-admin.component.css":
/*!******************************************************************!*\
  !*** ./src/app/layout/sidebar-admin/sidebar-admin.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaWRlYmFyLWFkbWluL3NpZGViYXItYWRtaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/sidebar-admin/sidebar-admin.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/sidebar-admin/sidebar-admin.component.ts ***!
  \*****************************************************************/
/*! exports provided: SidebarAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarAdminComponent", function() { return SidebarAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SidebarAdminComponent = class SidebarAdminComponent {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/client/home']);
    }
};
SidebarAdminComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SidebarAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-sidebar-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar-admin/sidebar-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar-admin.component.css */ "./src/app/layout/sidebar-admin/sidebar-admin.component.css")).default]
    })
], SidebarAdminComponent);



/***/ }),

/***/ "./src/app/profile/checkout/checkout.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/profile/checkout/checkout.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/profile/checkout/checkout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/checkout/checkout.component.ts ***!
  \********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../profile/state/profile.selector */ "./src/app/profile/state/profile.selector.ts");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");









let CheckoutComponent = class CheckoutComponent {
    constructor(store, adminService, alertService, router, spinner
    // private dialogRef: MatDialogRef<SubscriptionPopupComponent>, // Import Login Dialog Component to close
    ) {
        this.store = store;
        this.adminService = adminService;
        this.alertService = alertService;
        this.router = router;
        this.spinner = spinner;
        this.vipAccount = {
            price: 1,
            description: 'Vip Account',
        };
    }
    ngOnInit() {
        this.isSubscribing = true;
        this.getSubscribeInfo();
        this.integratePaypal();
    }
    getSubscribeInfo() {
        this.store.select(_profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_3__["subscribeInfo"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeWhile"])(() => this.isSubscribing)).subscribe(obj => {
            if (obj) {
                this.fee = obj.subscribePrice;
                this.vat = 0.2 * obj.subscribePrice;
                this.total = this.fee + this.vat;
                this.subscriptionType = obj.subscriptionPlan;
                this.id = obj.id;
                console.log(this.id);
            }
        });
    }
    integratePaypal() {
        paypal
            .Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: 'SMS Online Services Payment',
                            amount: {
                                currency_code: 'USD',
                                value: this.total ? this.total : 1
                            }
                        }
                    ]
                });
            },
            onApprove: (data, actions) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const order = yield actions.order.capture();
                let length = 0;
                if (this.subscriptionType == 'Basic') {
                    length = 1;
                }
                else if (this.subscriptionType == 'Standard') {
                    length = 3;
                }
                else if (this.subscriptionType == 'Extended') {
                    length = 12;
                }
                console.log('paypal', order);
                setTimeout(() => {
                    this.spinner.show();
                    if (this.id) {
                        this.adminService.subscribeServices(this.id, length).subscribe(data => {
                            if (data) {
                                this.spinner.hide();
                                this.alertService.successCounterup('Online SMS Services', 'Subscription Success !!!');
                                setTimeout(() => {
                                    this.router.navigate(['/invoice']);
                                }, 2100);
                            }
                        });
                    }
                    else {
                        this.adminService.smsExtendServices(this.total).subscribe(data => {
                            if (data) {
                                this.alertService.successCounterup('Online SMS Services', 'SMS Extend Success !!!');
                                setTimeout(() => {
                                    this.router.navigate(['/invoice']);
                                }, 2100);
                            }
                        });
                    }
                }, 2500);
            }),
            onError: err => {
                console.log(err);
            }
        })
            .render(this.paypalElement.nativeElement);
    }
    ngOnDestroy() {
        this.isSubscribing = false;
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paypal', { static: true })
], CheckoutComponent.prototype, "paypalElement", void 0);
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-checkout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/checkout/checkout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.component.scss */ "./src/app/profile/checkout/checkout.component.scss")).default]
    })
], CheckoutComponent);



/***/ }),

/***/ "./src/app/profile/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/profile/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/profile/friend-layout/friend-layout.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/profile/friend-layout/friend-layout.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZnJpZW5kLWxheW91dC9mcmllbmQtbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/profile/friend-layout/friend-layout.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/profile/friend-layout/friend-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: FriendLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendLayoutComponent", function() { return FriendLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../profile/state/profile.selector */ "./src/app/profile/state/profile.selector.ts");
/* harmony import */ var _profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../profile/state/profile.actions */ "./src/app/profile/state/profile.actions.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");









let FriendLayoutComponent = class FriendLayoutComponent {
    constructor(adminService, store, alertService, spinner) {
        this.adminService = adminService;
        this.store = store;
        this.alertService = alertService;
        this.spinner = spinner;
    }
    ngOnInit() {
        this.isSubscribing = true;
        this.getUserInfo();
        if (this.type == 'suggestion') {
            this.title = 'Manage Friend Suggestion';
            this.getSuggestionFriend();
        }
        else if (this.type == 'list') {
            this.title = 'Manage Friend List';
            this.getListFriend();
        }
        else if (this.type == 'request') {
            this.title = 'Manage Friend Request List';
            this.getRequestFriend();
        }
        else if (this.type == 'receive') {
            this.title = 'Manage Friend Reiceve List';
            this.getReceiveFriend();
        }
        console.log(this.type);
    }
    getUserInfo() {
        this.store.select(_profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_4__["userInfo"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeWhile"])(() => this.isSubscribing)).subscribe(data => {
            // console.log('a', data);
            if (data) {
                this.userName = data.Name;
                // this.userName = data.Avatar;
            }
        });
    }
    getSuggestionFriend() {
        this.spinner.show();
        this.adminService.getRecommendFriend().subscribe(friends => {
            console.log(friends);
            if (friends) {
                this.totalFriend = friends.length;
                this.datasource = friends;
                this.spinner.hide();
            }
        });
    }
    getRequestFriend() {
        this.spinner.show();
        this.adminService.getFriendList(true, '', true, 1, 10).subscribe(friends => {
            console.log(friends);
            if (friends) {
                this.totalFriend = friends.length;
                this.datasource = friends;
                this.spinner.hide();
            }
        });
    }
    getReceiveFriend() {
        this.spinner.show();
        this.adminService.getFriendList(false, '', true, 1, 10).subscribe(friends => {
            console.log(friends);
            if (friends) {
                this.totalFriend = friends.length;
                this.datasource = friends;
                this.spinner.hide();
            }
        });
    }
    getListFriend() {
        this.spinner.show();
        this.store.dispatch(_profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_5__["ProfileGetFriendList"]());
        this.store.select(_profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_4__["friendList"]).subscribe(friends => {
            console.log(friends);
            if (friends) {
                this.totalFriend = friends.length;
                this.datasource = friends;
                this.spinner.hide();
            }
        });
        // this.adminService.getFriendList(null, '', true, 1, 10).subscribe(friends => {
        //   console.log(friends);
        //   if (friends && friends.length > 0) {
        //     this.totalFriend = friends.length;
        //     this.datasource = friends;
        //   } 
        // });
    }
    addFriend(id) {
        console.log('id', id);
        const body = {
            RequestUserId: id
        };
        this.adminService.sendFriendRequest(body).subscribe(res => {
            console.log(res);
            if (res) {
                this.alertService.success('Friend request successfully sent.');
                this.getSuggestionFriend();
            }
        });
    }
    approveFriend(id) {
        console.log(id);
        const body = {
            IsApprove: true,
            RequestedUserId: id
        };
        this.adminService.approveFriend(body).subscribe(res => {
            console.log(res);
            if (res) {
                this.alertService.success('Approve friend success.');
                this.getReceiveFriend();
                // Reset datasource
            }
        });
    }
    removeFriend(id) {
        const body = {
            FriendId: id
        };
        this.adminService.removeFriend(body).subscribe(res => {
            console.log(res);
            if (res) {
                this.alertService.success('Delete friend success.');
                this.getListFriend();
                // Reset datasource
            }
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.isSubscribing = false;
    }
};
FriendLayoutComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FriendLayoutComponent.prototype, "type", void 0);
FriendLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-friend-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./friend-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-layout/friend-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./friend-layout.component.css */ "./src/app/profile/friend-layout/friend-layout.component.css")).default]
    })
], FriendLayoutComponent);



/***/ }),

/***/ "./src/app/profile/friend-list/friend-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/profile/friend-list/friend-list.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZnJpZW5kLWxpc3QvZnJpZW5kLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/friend-list/friend-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/friend-list/friend-list.component.ts ***!
  \**************************************************************/
/*! exports provided: FriendListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendListComponent", function() { return FriendListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _state_profile_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/profile.actions */ "./src/app/profile/state/profile.actions.ts");





let FriendListComponent = class FriendListComponent {
    constructor(adminService, store) {
        this.adminService = adminService;
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(_state_profile_actions__WEBPACK_IMPORTED_MODULE_4__["ProfileGetUserInfo"]());
        // this.adminService.getUserInfo().subscribe(data => {
        //   if (data) {
        //     console.log(data)
        //   }
        // }
        // );
    }
};
FriendListComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
FriendListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-friend-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./friend-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-list/friend-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./friend-list.component.css */ "./src/app/profile/friend-list/friend-list.component.css")).default]
    })
], FriendListComponent);



/***/ }),

/***/ "./src/app/profile/friend-reiceve/friend-reiceve.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/profile/friend-reiceve/friend-reiceve.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZnJpZW5kLXJlaWNldmUvZnJpZW5kLXJlaWNldmUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/friend-reiceve/friend-reiceve.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/profile/friend-reiceve/friend-reiceve.component.ts ***!
  \********************************************************************/
/*! exports provided: FriendReiceveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendReiceveComponent", function() { return FriendReiceveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FriendReiceveComponent = class FriendReiceveComponent {
    constructor() { }
    ngOnInit() {
    }
};
FriendReiceveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-friend-reiceve',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./friend-reiceve.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-reiceve/friend-reiceve.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./friend-reiceve.component.css */ "./src/app/profile/friend-reiceve/friend-reiceve.component.css")).default]
    })
], FriendReiceveComponent);



/***/ }),

/***/ "./src/app/profile/friend-request/friend-request.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/profile/friend-request/friend-request.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZnJpZW5kLXJlcXVlc3QvZnJpZW5kLXJlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/friend-request/friend-request.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/profile/friend-request/friend-request.component.ts ***!
  \********************************************************************/
/*! exports provided: FriendRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendRequestComponent", function() { return FriendRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FriendRequestComponent = class FriendRequestComponent {
    constructor() { }
    ngOnInit() {
    }
};
FriendRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-friend-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./friend-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-request/friend-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./friend-request.component.css */ "./src/app/profile/friend-request/friend-request.component.css")).default]
    })
], FriendRequestComponent);



/***/ }),

/***/ "./src/app/profile/friend-suggestion/friend-suggestion.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/profile/friend-suggestion/friend-suggestion.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZnJpZW5kLXN1Z2dlc3Rpb24vZnJpZW5kLXN1Z2dlc3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/friend-suggestion/friend-suggestion.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/profile/friend-suggestion/friend-suggestion.component.ts ***!
  \**************************************************************************/
/*! exports provided: FriendSuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendSuggestionComponent", function() { return FriendSuggestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");



let FriendSuggestionComponent = class FriendSuggestionComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
    }
};
FriendSuggestionComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
];
FriendSuggestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-friend-suggestion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./friend-suggestion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-suggestion/friend-suggestion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./friend-suggestion.component.css */ "./src/app/profile/friend-suggestion/friend-suggestion.component.css")).default]
    })
], FriendSuggestionComponent);



/***/ }),

/***/ "./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcG9zdC1hbm9ueW1vdXMtbXNnL3Bvc3QtYW5vbnltb3VzLW1zZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.ts ***!
  \****************************************************************************/
/*! exports provided: PostAnonymousMsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAnonymousMsgComponent", function() { return PostAnonymousMsgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../profile/state/profile.selector */ "./src/app/profile/state/profile.selector.ts");









let PostAnonymousMsgComponent = class PostAnonymousMsgComponent {
    constructor(formBuilder, adminService, route, store, authenticationService) {
        this.formBuilder = formBuilder;
        this.adminService = adminService;
        this.route = route;
        this.store = store;
        this.authenticationService = authenticationService;
        this.currentFriendArray = [];
    }
    ngOnInit() {
        this.friendId = this.route.snapshot.paramMap.get('id');
        console.log(this.friendId);
        this.store.select(_profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_8__["friendList"]).subscribe(friends => {
            console.log('a', friends);
            if (friends && friends.length > 0) {
                this.currentFriendArray = friends;
                this.currentFriendArray = this.currentFriendArray.filter(x => x.Id == this.friendId);
                this.currentFriend = this.currentFriendArray[0];
                console.log(this.currentFriend);
            }
        });
        this.postAnonymousMsgForm = this.formBuilder.group({
            phoneNumber: [`${this.currentFriend ? this.currentFriend.PhoneNumber : ''}`, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.adminService.getUserInfo().subscribe(data => console.log(data));
    }
    get f() {
        return this.postAnonymousMsgForm.controls;
    }
    onSubmit() {
        console.log(this.f);
        alert('a');
        if (this.postAnonymousMsgForm.invalid) {
            alert('invalid');
            return;
        }
        else {
            let currentUser = this.authenticationService.currentUserValue;
            console.log(currentUser);
            const body = {
                phoneNumber: this.f.phoneNumber.value,
                message: this.f.content.value,
                userId: null
            };
            this.adminService.sendAnonymousMsg(body).pipe().subscribe(res => {
                if (res) {
                    console.log(res);
                    this.showMsg('Message', 'Message sent success !!!');
                }
                // this.router.navigate([this.returnUrl]);
                // this.router.navigate(['/dashboard']);
            }, error => {
                console.log(error);
            });
        }
    }
    showMsg(title, msg) {
        let timerInterval;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: title,
            html: msg,
            timer: 2000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
                timerInterval = setInterval(() => {
                    const content = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.getContent();
                    if (content) {
                        const b = content.querySelector('b');
                        if (b) {
                            b.textContent = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.getTimerLeft().toString();
                        }
                    }
                }, 100);
            },
            onClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.timer) {
                console.log('I was closed by the timer');
            }
        });
    }
};
PostAnonymousMsgComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
PostAnonymousMsgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-post-anonymous-msg',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-anonymous-msg.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-anonymous-msg.component.css */ "./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.css")).default]
    })
], PostAnonymousMsgComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/profile/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.route */ "./src/app/profile/profile.route.ts");
/* harmony import */ var _post_anonymous_msg_post_anonymous_msg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-anonymous-msg/post-anonymous-msg.component */ "./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./friend-list/friend-list.component */ "./src/app/profile/friend-list/friend-list.component.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _friend_suggestion_friend_suggestion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./friend-suggestion/friend-suggestion.component */ "./src/app/profile/friend-suggestion/friend-suggestion.component.ts");
/* harmony import */ var _friend_layout_friend_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./friend-layout/friend-layout.component */ "./src/app/profile/friend-layout/friend-layout.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _state_profile_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state/profile.reducer */ "./src/app/profile/state/profile.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _state_profile_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/profile.effects */ "./src/app/profile/state/profile.effects.ts");
/* harmony import */ var _friend_request_friend_request_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./friend-request/friend-request.component */ "./src/app/profile/friend-request/friend-request.component.ts");
/* harmony import */ var _friend_reiceve_friend_reiceve_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./friend-reiceve/friend-reiceve.component */ "./src/app/profile/friend-reiceve/friend-reiceve.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/profile/settings/settings.component.ts");
/* harmony import */ var _subscription_list_subscription_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./subscription-list/subscription-list.component */ "./src/app/profile/subscription-list/subscription-list.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/profile/checkout/checkout.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _layout_profile_layout_profile_layout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../layout/profile-layout/profile-layout.component */ "./src/app/layout/profile-layout/profile-layout.component.ts");
/* harmony import */ var _layout_header_admin_header_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../layout/header-admin/header-admin.component */ "./src/app/layout/header-admin/header-admin.component.ts");
/* harmony import */ var _layout_sidebar_admin_sidebar_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../layout/sidebar-admin/sidebar-admin.component */ "./src/app/layout/sidebar-admin/sidebar-admin.component.ts");
/* harmony import */ var _layout_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../layout/footer-admin/footer-admin.component */ "./src/app/layout/footer-admin/footer-admin.component.ts");

























let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _layout_profile_layout_profile_layout_component__WEBPACK_IMPORTED_MODULE_21__["ProfileLayoutComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
            _post_anonymous_msg_post_anonymous_msg_component__WEBPACK_IMPORTED_MODULE_5__["PostAnonymousMsgComponent"],
            _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_7__["FriendListComponent"],
            _friend_suggestion_friend_suggestion_component__WEBPACK_IMPORTED_MODULE_9__["FriendSuggestionComponent"],
            _friend_request_friend_request_component__WEBPACK_IMPORTED_MODULE_15__["FriendRequestComponent"],
            _friend_layout_friend_layout_component__WEBPACK_IMPORTED_MODULE_10__["FriendLayoutComponent"],
            _friend_reiceve_friend_reiceve_component__WEBPACK_IMPORTED_MODULE_16__["FriendReiceveComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"],
            _subscription_list_subscription_list_component__WEBPACK_IMPORTED_MODULE_18__["SubscriptionListComponent"],
            _profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
            _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__["CheckoutComponent"],
            _layout_header_admin_header_admin_component__WEBPACK_IMPORTED_MODULE_22__["HeaderAdminComponent"],
            _layout_sidebar_admin_sidebar_admin_component__WEBPACK_IMPORTED_MODULE_23__["SidebarAdminComponent"],
            _layout_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_24__["FooterAdminComponent"],
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _profile_route__WEBPACK_IMPORTED_MODULE_4__["ProfileRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature('profile', _state_profile_reducer__WEBPACK_IMPORTED_MODULE_12__["profileReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forFeature([_state_profile_effects__WEBPACK_IMPORTED_MODULE_14__["ProfileEffects"]]),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"]
        ],
        exports: [],
        providers: [],
    })
], ProfileModule);



/***/ }),

/***/ "./src/app/profile/profile.route.ts":
/*!******************************************!*\
  !*** ./src/app/profile/profile.route.ts ***!
  \******************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/profile/dashboard/dashboard.component.ts");
/* harmony import */ var _post_anonymous_msg_post_anonymous_msg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-anonymous-msg/post-anonymous-msg.component */ "./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.ts");
/* harmony import */ var _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./friend-list/friend-list.component */ "./src/app/profile/friend-list/friend-list.component.ts");
/* harmony import */ var _friend_suggestion_friend_suggestion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./friend-suggestion/friend-suggestion.component */ "./src/app/profile/friend-suggestion/friend-suggestion.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _friend_request_friend_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./friend-request/friend-request.component */ "./src/app/profile/friend-request/friend-request.component.ts");
/* harmony import */ var _friend_reiceve_friend_reiceve_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./friend-reiceve/friend-reiceve.component */ "./src/app/profile/friend-reiceve/friend-reiceve.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/profile/settings/settings.component.ts");
/* harmony import */ var _subscription_list_subscription_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subscription-list/subscription-list.component */ "./src/app/profile/subscription-list/subscription-list.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/profile/checkout/checkout.component.ts");
/* harmony import */ var _layout_profile_layout_profile_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../layout/profile-layout/profile-layout.component */ "./src/app/layout/profile-layout/profile-layout.component.ts");














const routes = [
    {
        path: '',
        component: _layout_profile_layout_profile_layout_component__WEBPACK_IMPORTED_MODULE_13__["ProfileLayoutComponent"],
        children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
            { path: 'post-anonymous', component: _post_anonymous_msg_post_anonymous_msg_component__WEBPACK_IMPORTED_MODULE_4__["PostAnonymousMsgComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
            { path: 'post-anonymous/:id', component: _post_anonymous_msg_post_anonymous_msg_component__WEBPACK_IMPORTED_MODULE_4__["PostAnonymousMsgComponent"] },
            { path: 'friend-list', component: _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_5__["FriendListComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
            { path: 'friend-suggestion', component: _friend_suggestion_friend_suggestion_component__WEBPACK_IMPORTED_MODULE_6__["FriendSuggestionComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
            { path: 'friend-request', component: _friend_request_friend_request_component__WEBPACK_IMPORTED_MODULE_8__["FriendRequestComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
            { path: 'friend-receive', component: _friend_reiceve_friend_reiceve_component__WEBPACK_IMPORTED_MODULE_9__["FriendReiceveComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
            { path: 'manage-subscription', component: _subscription_list_subscription_list_component__WEBPACK_IMPORTED_MODULE_11__["SubscriptionListComponent"] },
            { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__["CheckoutComponent"] },
            { path: 'setting', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
        ]
    }
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], ProfileRoutingModule);



/***/ }),

/***/ "./src/app/profile/settings/settings.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/profile/settings/settings.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uploadButton {\n  height: 100%;\n  align-items: center;\n}\n\n.topupBtn {\n  margin-right: 20px;\n}\n\ninput:-moz-read-only {\n  background: darkgray;\n  color: white;\n}\n\ninput:read-only {\n  background: darkgray;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9zZXR0aW5ncy9EOlxcUHJvamVjdFxcRlBUXFxDbGllbnQgLSBGaW5hbCAtIFNlbTMvc3JjXFxhcHBcXHByb2ZpbGVcXHNldHRpbmdzXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREpBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZEJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9wdXBCdG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbmlucHV0OnJlYWQtb25seSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZ3JheTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSIsIi51cGxvYWRCdXR0b24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b3B1cEJ0biB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuaW5wdXQ6cmVhZC1vbmx5IHtcbiAgYmFja2dyb3VuZDogZGFya2dyYXk7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/settings/settings.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/settings/settings.component.ts ***!
  \********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../profile/state/profile.selector */ "./src/app/profile/state/profile.selector.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../profile/state/profile.actions */ "./src/app/profile/state/profile.actions.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _sms_extension_popup_sms_extension_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sms-extension-popup/sms-extension-popup.component */ "./src/app/profile/sms-extension-popup/sms-extension-popup.component.ts");













let SettingsComponent = class SettingsComponent {
    constructor(store, formBuilder, storage, authenticationService, adminService, alertService, dialog) {
        this.store = store;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.authenticationService = authenticationService;
        this.adminService = adminService;
        this.alertService = alertService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.settingForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.isSubscribing = true;
        this.store.select(_profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_3__["userInfo"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(() => this.isSubscribing)).subscribe(data => {
            console.log(data);
            if (data) {
                this.name = data.Name;
                this.avatar = data.Avatar;
                this.accountBalance = data.Balance;
            }
        });
    }
    get f() { return this.settingForm.controls; }
    onSubmit() {
        console.log(this.f);
        // stop here if form is invalid
        if (this.settingForm.invalid) {
            alert('invalid');
            return;
        }
        else {
            const filePath = `ProjectImage/${this.currentDate}`;
            const fileRef = this.storage.ref(filePath);
            const task = this.storage.upload(`ProjectImage/${this.currentDate}`, this.file);
            task
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
                this.downloadURL = fileRef.getDownloadURL();
                this.downloadURL.subscribe(url => {
                    if (url) {
                        this.fb = url;
                        const body = {
                            Name: this.name,
                            Avatar: this.fb,
                            DOB: "2015-05-02T00:00:00"
                        };
                        this.adminService.editProfile(body).subscribe(data => {
                            this.alertService.success('Update Profile success.');
                            this.store.dispatch(_profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_9__["ProfileGetUserInfo"]());
                            if (data) {
                                // console.log('a', data);
                                // this.alertService.success('Update Profile success.');
                                // this.store.dispatch(ProfileActions.ProfileGetUserInfo());
                            }
                        }, error => {
                            console.log(error);
                        });
                    }
                    console.log('link', this.fb);
                });
            }))
                .subscribe(url => {
                if (url) {
                    console.log('url', url);
                }
            });
        }
    }
    uploadAvatar(e) {
        this.currentDate = Date.now();
        this.file = e.target.files[0];
        this.fileName = e.target.files[0].name;
        console.log(this.file);
    }
    openDialog() {
        const dialogRef = this.dialog.open(_sms_extension_popup_sms_extension_popup_component__WEBPACK_IMPORTED_MODULE_12__["SmsExtensionPopupComponent"], {
            height: '630px',
            width: '1050px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.isSubscribing = false;
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/profile/settings/settings.component.scss")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/profile/state/profile.effects.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/state/profile.effects.ts ***!
  \**************************************************/
/*! exports provided: ProfileEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEffects", function() { return ProfileEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _profile_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.actions */ "./src/app/profile/state/profile.actions.ts");







let ProfileEffects = class ProfileEffects {
    constructor(actions$, adminService) {
        this.actions$ = actions$;
        this.adminService = adminService;
        // @Effect() name$: Observable<Action> = this.actions$.pipe(ofType('ACTIONTYPE'));
        this.getUserInfo$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_profile_actions__WEBPACK_IMPORTED_MODULE_6__["ProfileActionTypes"].ProfileGetUserInfo), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(() => this.adminService.getUserInfo()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(info => _profile_actions__WEBPACK_IMPORTED_MODULE_6__["ProfileGetUserSuccess"]({ info })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"])))));
        this.getFriendList$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_profile_actions__WEBPACK_IMPORTED_MODULE_6__["ProfileActionTypes"].ProfileGetFriendList), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(() => this.adminService.getFriendList(null, '', true, 1, 10).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(friendList => _profile_actions__WEBPACK_IMPORTED_MODULE_6__["ProfileGetFriendListSuccess"]({ friendList })))));
        });
        this.getsubscribeList$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_profile_actions__WEBPACK_IMPORTED_MODULE_6__["ProfileGetSubscribeService"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((obj) => this.adminService.getAllServices(obj.status).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(subscribeList => {
                subscribeList.forEach(x => {
                    x.active = true;
                });
                this.adminService.getAllServices(true).subscribe(res => {
                    if (res) {
                        if (res.length > 0) {
                            res.forEach(item1 => {
                                subscribeList.forEach(item2 => {
                                    // debugger
                                    if (item1.Id === item2.Id) {
                                        item2.active = false;
                                    }
                                    else {
                                    }
                                });
                            });
                        }
                    }
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(subscribeList => _profile_actions__WEBPACK_IMPORTED_MODULE_6__["ProfileGetSubscribeServiceSuccess"]({ subscribeList })))));
        });
    }
};
ProfileEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }
];
ProfileEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProfileEffects);



/***/ }),

/***/ "./src/app/profile/state/profile.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/state/profile.reducer.ts ***!
  \**************************************************/
/*! exports provided: initialState, profileReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileReducer", function() { return profileReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _profile_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.actions */ "./src/app/profile/state/profile.actions.ts");



const initialState = {
    userInfo: ''
};
const _counterReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileGetUserSuccess"], (state, { info }) => {
    return Object.assign({}, state, { userInfo: info });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileGetFriendListSuccess"], (state, { friendList }) => {
    return Object.assign({}, state, { friendList: friendList });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileGetSubscribeServiceSuccess"], (state, { subscribeList }) => {
    return Object.assign({}, state, { subscribeList: subscribeList });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileSubscriptionPrice"], (state, { id, price, subscriptionPlan }) => {
    return Object.assign({}, state, { subscribeInfo: { id: id, subscribePrice: price, subscriptionPlan: subscriptionPlan } });
}));
function profileReducer(state, action) {
    return _counterReducer(state, action);
}


/***/ }),

/***/ "./src/app/profile/subscription-list/subscription-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/profile/subscription-list/subscription-list.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvc3Vic2NyaXB0aW9uLWxpc3Qvc3Vic2NyaXB0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/subscription-list/subscription-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/profile/subscription-list/subscription-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: SubscriptionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionListComponent", function() { return SubscriptionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../profile/state/profile.selector */ "./src/app/profile/state/profile.selector.ts");
/* harmony import */ var _profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../profile/state/profile.actions */ "./src/app/profile/state/profile.actions.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _subscription_popup_subscription_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../subscription-popup/subscription-popup.component */ "./src/app/profile/subscription-popup/subscription-popup.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");










let SubscriptionListComponent = class SubscriptionListComponent {
    constructor(adminService, alertService, store, dialog, spinner) {
        this.adminService = adminService;
        this.alertService = alertService;
        this.store = store;
        this.dialog = dialog;
        this.spinner = spinner;
    }
    ngOnInit() {
        this.getSubscriptionList();
    }
    getSubscriptionList() {
        this.spinner.show();
        this.store.dispatch(_profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_6__["ProfileGetSubscribeService"]({ status: null }));
        this.store.select(_profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_5__["subscribeList"]).subscribe(list => {
            console.log('subscription list', list);
            if (list) {
                this.subscriptionList = list;
                this.spinner.hide();
            }
        });
    }
    // enterSubscriptionLength(id) {
    //   console.log(id);
    //   swal.fire({
    //     title: 'Please enter your days',
    //     input: 'text',
    //     width: '40em',
    //     inputAttributes: {
    //       autocapitalize: 'off'
    //     },
    //     showCancelButton: true,
    //     confirmButtonText: 'Submit',
    //     showLoaderOnConfirm: true,
    //     customClass: {
    //       title: 'phone-verification-header',
    //       input: 'input-text with-border',
    //       confirmButton: 'button'
    //     },
    //     allowOutsideClick: () => !swal.isLoading()
    //   }).then((result) => {
    //     console.log('result', result)
    //     if (result.value) {
    //       this.adminService.subscribeServices(id, result.value).subscribe(data => {
    //         if (data) {
    //           this.alertService.successCounterup('Subscription', 'Subscription Success !!!');
    //           this.store.dispatch(ProfileActions.ProfileGetSubscribeService({status: null}));
    //         }
    //       })
    //     } else {
    //       this.alertService.error('Please enter days');
    //     }
    //   })
    // }
    unsubscribeService(id) {
        this.adminService.unSubscribeServices(id).subscribe(res => {
            console.log(res);
            this.spinner.show();
            this.store.dispatch(_profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_6__["ProfileGetSubscribeService"]({ status: null }));
            this.alertService.successCounterup('Subscription', 'UnSubscription Success !!!');
        });
    }
    openDialog(itemPrice, itemId) {
        const dialogRef = this.dialog.open(_subscription_popup_subscription_popup_component__WEBPACK_IMPORTED_MODULE_8__["SubscriptionPopupComponent"], {
            height: '600px',
            width: '1050px',
            data: {
                price: itemPrice,
                id: itemId,
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
};
SubscriptionListComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }
];
SubscriptionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-subscription-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subscription-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/subscription-list/subscription-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subscription-list.component.css */ "./src/app/profile/subscription-list/subscription-list.component.css")).default]
    })
], SubscriptionListComponent);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map