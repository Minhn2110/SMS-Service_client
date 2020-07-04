function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/dashboard/dashboard.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/dashboard/dashboard.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\t\t\t<!-- Dashboard Headline -->\n\t\t\t<div class=\"dashboard-headline\">\n\t\t\t\t<h3>Post a Job</h3>\n\t\n\t\t\t\t<!-- Breadcrumbs -->\n\t\t\t\t<nav id=\"breadcrumbs\" class=\"dark\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Dashboard</a></li>\n\t\t\t\t\t\t<li>Post a message</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\n\t\t\t<!-- Row -->\n\t\t\t<div class=\"row\">\n\t\n\t\t\t\t<!-- Dashboard Box -->\n\t\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t\t<div class=\"dashboard-box margin-top-0\">\n\t\n\t\t\t\t\t\t<!-- Headline -->\n\t\t\t\t\t\t<div class=\"headline\">\n\t\t\t\t\t\t\t<h3><i class=\"icon-feather-folder-plus\"></i> Message Form</h3>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t<div class=\"content with-padding padding-bottom-10\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\n\t\t\t\t\t\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"submit-field\">\n\t\t\t\t\t\t\t\t\t\t<h5>Phone Number</h5>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"with-border\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"submit-field\">\n\t\t\t\t\t\t\t\t\t\t<h5>Message</h5>\n\t\t\t\t\t\t\t\t\t\t<textarea cols=\"30\" rows=\"5\" class=\"with-border\"></textarea>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\n\t\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t\t<a href=\"#\" class=\"button ripple-effect big margin-top-30\"><i class=\"icon-feather-plus\"></i> Send Message</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Row / End -->\n\t\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-layout/friend-layout.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-layout/friend-layout.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileFriendLayoutFriendLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\t\t\t<!-- Dashboard Headline -->\n\t\t\t<div class=\"dashboard-headline\">\n\t\t\t\t<h3>Manage Friends</h3>\n\t\t\t\t<span class=\"margin-top-7\">Friend {{type}} for <a href=\"#\">{{userName}}</a></span>\n\t\t\t\t<!-- Breadcrumbs -->\n\t\t\t\t<nav id=\"breadcrumbs\" class=\"dark\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Dashboard</a></li>\n\t\t\t\t\t\t<li>{{this.title}}</li>\n\t\t\t\t\t</ul> \n\t\t\t\t</nav>\n\t\t\t</div>\n\t\n\t\t\t<!-- Row -->\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<!-- Dashboard Box -->\n\t\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t\t<div class=\"dashboard-box margin-top-0\">\n\n\t\t\t\t\t\t<!-- Headline -->\n\t\t\t\t\t\t<div class=\"headline\">\n\t\t\t\t\t\t\t<h3><i class=\"icon-material-outline-supervisor-account\"></i> {{totalFriend}} Friends</h3>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<ul class=\"dashboard-box-list\" *ngFor=\"let item of datasource\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<!-- Overview -->\n\t\t\t\t\t\t\t\t\t<div class=\"freelancer-overview manage-candidates\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"freelancer-overview-inner\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- Avatar -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"freelancer-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"verified-badge\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"{{item.Avatar}}\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- Name -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"freelancer-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4><a href=\"#\">{{item.Name}} <img class=\"flag\" src=\"../../../assets/images/flags/au.svg\" alt=\"\" title=\"Australia\" data-tippy-placement=\"top\"></a></h4>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Details -->\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"freelancer-detail-item\"><a href=\"#\"><i class=\"icon-feather-mail\"></i> {{item.Email}}</a></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span class=\"freelancer-detail-item\"><i class=\"icon-feather-phone\"></i> (+61) 123-456-789</span> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Rating -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"freelancer-rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"star-rating\" data-rating=\"5.0\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Buttons -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"buttons-to-right always-visible margin-top-25 margin-bottom-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"button ripple-effect\" (click)=\"addFriend(item.Id)\" *ngIf=\"type === 'suggestion'\"><i class=\"icon-feather-file-text\"></i> Add Friend</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"button ripple-effect\" *ngIf=\"type === 'request'\"><i class=\"icon-feather-file-text\"></i>Waiting to Apply</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"button ripple-effect\" (click)=\"approveFriend(item.Id)\" *ngIf=\"type === 'receive'\"><i class=\"icon-feather-file-text\"></i>Approve</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/profile/post-anonymous/{{item.Id}}\" class=\"popup-with-zoom-anim button dark ripple-effect\" *ngIf=\"type === 'list'\"><i class=\"icon-feather-mail\"></i> Send Message</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"button gray ripple-effect ico\" title=\"Remove Candidate\" data-tippy-placement=\"top\" (click)=\"removeFriend(item.Id)\" *ngIf=\"type === 'list'\"><i class=\"icon-feather-trash-2\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>  \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row / End -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-list/friend-list.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-list/friend-list.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileFriendListFriendListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sms-friend-layout type=\"list\"></sms-friend-layout>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-reiceve/friend-reiceve.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-reiceve/friend-reiceve.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileFriendReiceveFriendReiceveComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sms-friend-layout type=\"receive\"></sms-friend-layout>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-request/friend-request.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-request/friend-request.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileFriendRequestFriendRequestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sms-friend-layout type=\"request\"></sms-friend-layout>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-suggestion/friend-suggestion.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-suggestion/friend-suggestion.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileFriendSuggestionFriendSuggestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sms-friend-layout type=\"suggestion\"></sms-friend-layout>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfilePostAnonymousMsgPostAnonymousMsgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Dashboard Headline -->\n<div class=\"dashboard-headline\">\n\t<h3>Send message to anonymous person</h3>\n\n\t<!-- Breadcrumbs -->\n\t<nav id=\"breadcrumbs\" class=\"dark\">\n\t\t<ul>\n\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t<li><a href=\"#\">Dashboard</a></li>\n\t\t\t<li>Post a message</li>\n\t\t</ul>\n\t</nav>\n</div>\n\n<!-- Row -->\n<div class=\"row\">\n\t<form [formGroup]=\"postAnonymousMsgForm\" (ngSubmit)=\"onSubmit()\" style=\"width: 100%\">\n\n\t\t<!-- Dashboard Box -->\n\t\t<div class=\"col-xl-12\">\n\t\t\t<div class=\"dashboard-box margin-top-0\">\n\n\t\t\t\t<!-- Headline -->\n\t\t\t\t<div class=\"headline\">\n\t\t\t\t\t<h3><i class=\"icon-feather-folder-plus\"></i> Message Form</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"content with-padding padding-bottom-10\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t\t\t\t<div class=\"submit-field\">\n\t\t\t\t\t\t\t\t<h5>Phone Number</h5>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"with-border\" formControlName=\"phoneNumber\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t\t\t\t<div class=\"submit-field\">\n\t\t\t\t\t\t\t\t<h5>Message</h5>\n\t\t\t\t\t\t\t\t<textarea cols=\"30\" rows=\"5\" class=\"with-border\" formControlName=\"content\"></textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-xl-12\">\n\t\t\t<button type=\"submit\" class=\"button ripple-effect big margin-top-30\"><i class=\"icon-feather-plus\"></i> Send Message</button>\n\t\t</div>\n\t</form>\n\n</div>\n<!-- Row / End -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>profile works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/settings/settings.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/settings/settings.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileSettingsSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Dashboard Content\n\t================================================== -->\n\n\n<!-- Dashboard Headline -->\n<div class=\"dashboard-headline\">\n  <h3>Settings</h3>\n\n  <!-- Breadcrumbs -->\n  <nav id=\"breadcrumbs\" class=\"dark\">\n    <ul>\n      <li><a href=\"#\">Home</a></li>\n      <li><a href=\"#\">Dashboard</a></li>\n      <li>Settings</li>\n    </ul>\n  </nav>\n</div>\n<form method=\"post\" [formGroup]=\"settingForm\" (ngSubmit)=\"onSubmit()\">\n  <!-- Row -->\n  <div class=\"row\">\n    <!-- Dashboard Box -->\n    <div class=\"col-xl-12\">\n      <div class=\"dashboard-box margin-top-0\">\n\n        <!-- Headline -->\n        <div class=\"headline\">\n          <h3><i class=\"icon-material-outline-account-circle\"></i> My Account</h3>\n        </div>\n\n        <div class=\"content with-padding padding-bottom-0\">\n\n          <div class=\"row\">\n\n            <div class=\"col-auto\">\n              <div class=\"avatar-wrapper\" data-tippy-placement=\"bottom\" title=\"Change Avatar\">\n                <img class=\"profile-pic\" src=\"{{avatar}}\" alt=\"\" />\n                <div class=\"upload-button\"></div>\n                <input class=\"file-upload\" type=\"file\" accept=\"image/*\" />\n              </div>\n            </div>\n\n            <div class=\"col\">\n              <div class=\"row\">\n\n                <div class=\"col-xl-6\">\n                  <div class=\"submit-field\">\n                    <h5>First Name</h5>\n                    <input type=\"text\" class=\"with-border\" [(ngModel)]=\"name\" formControlName='firstName'>\n                  </div>\n                </div>\n\n                <div class=\"col-xl-6\">\n                  <div class=\"submit-field\">\n                    <h5>Email</h5>\n                    <input type=\"text\" class=\"with-border\" value=\"tom@example.com\">\n                  </div>\n                </div>\n\n                <div class=\"col-xl-6\">\n                  <!-- Account Type -->\n                  <div class=\"submit-field\">\n                    <h5>Account Type</h5>\n                    <div class=\"account-type\">\n                      <div>\n                        <input type=\"radio\" name=\"account-type-radio\" id=\"freelancer-radio\" class=\"account-type-radio\"\n                          checked />\n                        <label for=\"freelancer-radio\" class=\"ripple-effect-dark\"><i\n                            class=\"icon-material-outline-account-circle\"></i>Normal</label>\n                      </div>\n\n                      <div>\n                        <input type=\"radio\" name=\"account-type-radio\" id=\"employer-radio\" class=\"account-type-radio\" />\n                        <label for=\"employer-radio\" class=\"ripple-effect-dark\"><i\n                            class=\"icon-material-outline-business-center\"></i> VIP</label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-xl-6\">\n                  <div class=\"uploadButton\">\n                    <input class=\"uploadButton-input\" type=\"file\" accept=\"image/*, application/pdf\" id=\"upload\" (change)=\"uploadAvatar($event)\" multiple />\n                    <label class=\"uploadButton-button ripple-effect\" for=\"upload\">Upload Avatar</label>\n                    <span class=\"uploadButton-file-name\">{{fileName}}</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <!-- <div class=\"col-xl-12\">\n      <div id=\"test1\" class=\"dashboard-box\">\n\n        <div class=\"headline\">\n          <h3><i class=\"icon-material-outline-lock\"></i> Password & Security</h3>\n        </div>\n\n        <div class=\"content with-padding\">\n          <div class=\"row\">\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Current Password</h5>\n                <input type=\"password\" class=\"with-border\">\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>New Password</h5>\n                <input type=\"password\" class=\"with-border\">\n              </div>\n            </div>\n\n            <div class=\"col-xl-4\">\n              <div class=\"submit-field\">\n                <h5>Repeat New Password</h5>\n                <input type=\"password\" class=\"with-border\">\n              </div>\n            </div>\n\n            <div class=\"col-xl-12\">\n              <div class=\"checkbox\">\n                <input type=\"checkbox\" id=\"two-step\" checked>\n                <label for=\"two-step\"><span class=\"checkbox-icon\"></span> Enable Two-Step Verification via Email</label>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div> -->\n\n    <!-- Button -->\n    <div class=\"col-xl-12\">\n      <button class=\"button ripple-effect big margin-top-30\">Save Changes</button>\n    </div>\n\n\n  </div>\n</form>\n\n<!-- Row / End -->\n\n<!-- Dashboard Content / End -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/subscription-list/subscription-list.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/subscription-list/subscription-list.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileSubscriptionListSubscriptionListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\t\t\t<!-- Dashboard Headline -->\n\t\t\t<div class=\"dashboard-headline\">\n\t\t\t\t<h3>Manage Subscriptions</h3>\n\n\t\t\t\t<!-- Breadcrumbs -->\n\t\t\t\t<nav id=\"breadcrumbs\" class=\"dark\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Dashboard</a></li>\n\t\t\t\t\t\t<li>Manage Tasks</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\n\t\t\t<!-- Row -->\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<!-- Dashboard Box -->\n\t\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t\t<div class=\"dashboard-box margin-top-0\">\n\n\t\t\t\t\t\t<!-- Headline -->\n\t\t\t\t\t\t<div class=\"headline\">\n\t\t\t\t\t\t\t<h3><i class=\"icon-material-outline-assignment\"></i> My Tasks</h3>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<ul class=\"dashboard-box-list\">\n\t\t\t\t\t\t\t\t<li *ngFor=\"let item of subscriptionList\">\n\t\t\t\t\t\t\t\t\t<!-- Job Listing -->\n\t\t\t\t\t\t\t\t\t<div class=\"job-listing width-adjustment\">\n\n\t\t\t\t\t\t\t\t\t\t<!-- Job Listing Details -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"job-listing-details\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- Details -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"job-listing-description\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"job-listing-title\"><a href=\"#\">{{item.Name}}</a> <span class=\"dashboard-status-button yellow\">Expiring</span></h3>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Job Listing Footer -->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"job-listing-footer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><i class=\"icon-material-outline-access-time\"></i> 23 hours left</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!-- Task Details -->\n\t\t\t\t\t\t\t\t\t<ul class=\"dashboard-task-info\">\n\t\t\t\t\t\t\t\t\t\t<li><strong>3</strong><span>Subscribers</span></li>\n\t\t\t\t\t\t\t\t\t\t<li><strong>${{item.Price}}</strong><span>Price</span></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t\t\t<!-- Buttons -->\n\t\t\t\t\t\t\t\t\t<div class=\"buttons-to-right always-visible\">\n                    <a href=\"javascript:void(0)\" class=\"button ripple-effect\" (click)=\"openDialog(item.Id)\" *ngIf=\"item.active\"><i class=\"icon-material-outline-supervisor-account\" ></i> Subscribe</a>\n                    <a href=\"javascript:void(0)\" *ngIf=\"!item.active\" class=\"button dark ripple-effect\"><i class=\"icon-feather-rotate-ccw\"></i> Already Subscribed</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"button gray ripple-effect ico\" title=\"Remove\" data-tippy-placement=\"top\" (click)=\"unsubscribeService(item.Id)\"><i class=\"icon-feather-trash-2\"></i></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- Row / End -->";
    /***/
  },

  /***/
  "./src/app/profile/dashboard/dashboard.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/profile/dashboard/dashboard.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/dashboard/dashboard.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/profile/dashboard/dashboard.component.ts ***!
    \**********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppProfileDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sms-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/profile/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/profile/friend-layout/friend-layout.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/profile/friend-layout/friend-layout.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileFriendLayoutFriendLayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZnJpZW5kLWxheW91dC9mcmllbmQtbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/profile/friend-layout/friend-layout.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/profile/friend-layout/friend-layout.component.ts ***!
    \******************************************************************/

  /*! exports provided: FriendLayoutComponent */

  /***/
  function srcAppProfileFriendLayoutFriendLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendLayoutComponent", function () {
      return FriendLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../profile/state/profile.selector */
    "./src/app/profile/state/profile.selector.ts");
    /* harmony import */


    var _profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../profile/state/profile.actions */
    "./src/app/profile/state/profile.actions.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");

    var FriendLayoutComponent = /*#__PURE__*/function () {
      function FriendLayoutComponent(adminService, store, alertService) {
        _classCallCheck(this, FriendLayoutComponent);

        this.adminService = adminService;
        this.store = store;
        this.alertService = alertService;
      }

      _createClass(FriendLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserInfo();

          if (this.type == 'suggestion') {
            this.title = 'Manage Friend Suggestion';
            this.getSuggestionFriend();
          } else if (this.type == 'list') {
            this.title = 'Manage Friend List';
            this.getListFriend();
          } else if (this.type == 'request') {
            this.title = 'Manage Friend Request List';
            this.getRequestFriend();
          } else if (this.type == 'receive') {
            this.title = 'Manage Friend Reiceve List';
            this.getReceiveFriend();
          }

          console.log(this.type);
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          var _this = this;

          this.store.select(_profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_4__["userInfo"]).subscribe(function (data) {
            // console.log('a', data);
            if (data) {
              _this.userName = data.Name; // this.userName = data.Avatar;
            }
          });
        }
      }, {
        key: "getSuggestionFriend",
        value: function getSuggestionFriend() {
          var _this2 = this;

          this.adminService.getRecommendFriend().subscribe(function (friends) {
            console.log(friends);

            if (friends) {
              _this2.totalFriend = friends.length;
              _this2.datasource = friends;
            }
          });
        }
      }, {
        key: "getRequestFriend",
        value: function getRequestFriend() {
          var _this3 = this;

          this.adminService.getFriendList(true, '', true, 1, 10).subscribe(function (friends) {
            console.log(friends);

            if (friends) {
              _this3.totalFriend = friends.length;
              _this3.datasource = friends;
            }
          });
        }
      }, {
        key: "getReceiveFriend",
        value: function getReceiveFriend() {
          var _this4 = this;

          this.adminService.getFriendList(false, '', true, 1, 10).subscribe(function (friends) {
            console.log(friends);

            if (friends) {
              _this4.totalFriend = friends.length;
              _this4.datasource = friends;
            }
          });
        }
      }, {
        key: "getListFriend",
        value: function getListFriend() {
          var _this5 = this;

          this.store.dispatch(_profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_5__["ProfileGetFriendList"]());
          this.store.select(_profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_4__["friendList"]).subscribe(function (friends) {
            console.log(friends);

            if (friends) {
              _this5.totalFriend = friends.length;
              _this5.datasource = friends;
            }
          }); // this.adminService.getFriendList(null, '', true, 1, 10).subscribe(friends => {
          //   console.log(friends);
          //   if (friends && friends.length > 0) {
          //     this.totalFriend = friends.length;
          //     this.datasource = friends;
          //   } 
          // });
        }
      }, {
        key: "addFriend",
        value: function addFriend(id) {
          var _this6 = this;

          console.log('id', id);
          var body = {
            RequestUserId: id
          };
          this.adminService.sendFriendRequest(body).subscribe(function (res) {
            console.log(res);

            if (res) {
              _this6.alertService.success('Friend request successfully sent.');

              _this6.getSuggestionFriend();
            }
          });
        }
      }, {
        key: "approveFriend",
        value: function approveFriend(id) {
          var _this7 = this;

          console.log(id);
          var body = {
            IsApprove: true,
            RequestedUserId: id
          };
          this.adminService.approveFriend(body).subscribe(function (res) {
            console.log(res);

            if (res) {
              _this7.alertService.success('Approve friend success.');

              _this7.getReceiveFriend(); // Reset datasource

            }
          });
        }
      }, {
        key: "removeFriend",
        value: function removeFriend(id) {
          var _this8 = this;

          var body = {
            FriendId: id
          };
          this.adminService.removeFriend(body).subscribe(function (res) {
            console.log(res);

            if (res) {
              _this8.alertService.success('Delete friend success.');

              _this8.getListFriend(); // Reset datasource

            }
          });
        }
      }]);

      return FriendLayoutComponent;
    }();

    FriendLayoutComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FriendLayoutComponent.prototype, "type", void 0);
    FriendLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sms-friend-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friend-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-layout/friend-layout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friend-layout.component.css */
      "./src/app/profile/friend-layout/friend-layout.component.css"))["default"]]
    })], FriendLayoutComponent);
    /***/
  },

  /***/
  "./src/app/profile/friend-list/friend-list.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/profile/friend-list/friend-list.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileFriendListFriendListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZnJpZW5kLWxpc3QvZnJpZW5kLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/friend-list/friend-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/profile/friend-list/friend-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: FriendListComponent */

  /***/
  function srcAppProfileFriendListFriendListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendListComponent", function () {
      return FriendListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_profile_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../state/profile.actions */
    "./src/app/profile/state/profile.actions.ts");

    var FriendListComponent = /*#__PURE__*/function () {
      function FriendListComponent(adminService, store) {
        _classCallCheck(this, FriendListComponent);

        this.adminService = adminService;
        this.store = store;
      }

      _createClass(FriendListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.store.dispatch(_state_profile_actions__WEBPACK_IMPORTED_MODULE_4__["ProfileGetUserInfo"]()); // this.adminService.getUserInfo().subscribe(data => {
          //   if (data) {
          //     console.log(data)
          //   }
          // }
          // );
        }
      }]);

      return FriendListComponent;
    }();

    FriendListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    FriendListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sms-friend-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friend-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-list/friend-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friend-list.component.css */
      "./src/app/profile/friend-list/friend-list.component.css"))["default"]]
    })], FriendListComponent);
    /***/
  },

  /***/
  "./src/app/profile/friend-reiceve/friend-reiceve.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/profile/friend-reiceve/friend-reiceve.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileFriendReiceveFriendReiceveComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZnJpZW5kLXJlaWNldmUvZnJpZW5kLXJlaWNldmUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/friend-reiceve/friend-reiceve.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/profile/friend-reiceve/friend-reiceve.component.ts ***!
    \********************************************************************/

  /*! exports provided: FriendReiceveComponent */

  /***/
  function srcAppProfileFriendReiceveFriendReiceveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendReiceveComponent", function () {
      return FriendReiceveComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FriendReiceveComponent = /*#__PURE__*/function () {
      function FriendReiceveComponent() {
        _classCallCheck(this, FriendReiceveComponent);
      }

      _createClass(FriendReiceveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FriendReiceveComponent;
    }();

    FriendReiceveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sms-friend-reiceve',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friend-reiceve.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-reiceve/friend-reiceve.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friend-reiceve.component.css */
      "./src/app/profile/friend-reiceve/friend-reiceve.component.css"))["default"]]
    })], FriendReiceveComponent);
    /***/
  },

  /***/
  "./src/app/profile/friend-request/friend-request.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/profile/friend-request/friend-request.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileFriendRequestFriendRequestComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZnJpZW5kLXJlcXVlc3QvZnJpZW5kLXJlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/friend-request/friend-request.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/profile/friend-request/friend-request.component.ts ***!
    \********************************************************************/

  /*! exports provided: FriendRequestComponent */

  /***/
  function srcAppProfileFriendRequestFriendRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendRequestComponent", function () {
      return FriendRequestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FriendRequestComponent = /*#__PURE__*/function () {
      function FriendRequestComponent() {
        _classCallCheck(this, FriendRequestComponent);
      }

      _createClass(FriendRequestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FriendRequestComponent;
    }();

    FriendRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sms-friend-request',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friend-request.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-request/friend-request.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friend-request.component.css */
      "./src/app/profile/friend-request/friend-request.component.css"))["default"]]
    })], FriendRequestComponent);
    /***/
  },

  /***/
  "./src/app/profile/friend-suggestion/friend-suggestion.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/profile/friend-suggestion/friend-suggestion.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileFriendSuggestionFriendSuggestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZnJpZW5kLXN1Z2dlc3Rpb24vZnJpZW5kLXN1Z2dlc3Rpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/friend-suggestion/friend-suggestion.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/profile/friend-suggestion/friend-suggestion.component.ts ***!
    \**************************************************************************/

  /*! exports provided: FriendSuggestionComponent */

  /***/
  function srcAppProfileFriendSuggestionFriendSuggestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendSuggestionComponent", function () {
      return FriendSuggestionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");

    var FriendSuggestionComponent = /*#__PURE__*/function () {
      function FriendSuggestionComponent(adminService) {
        _classCallCheck(this, FriendSuggestionComponent);

        this.adminService = adminService;
      }

      _createClass(FriendSuggestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FriendSuggestionComponent;
    }();

    FriendSuggestionComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }];
    };

    FriendSuggestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sms-friend-suggestion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friend-suggestion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/friend-suggestion/friend-suggestion.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friend-suggestion.component.css */
      "./src/app/profile/friend-suggestion/friend-suggestion.component.css"))["default"]]
    })], FriendSuggestionComponent);
    /***/
  },

  /***/
  "./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfilePostAnonymousMsgPostAnonymousMsgComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcG9zdC1hbm9ueW1vdXMtbXNnL3Bvc3QtYW5vbnltb3VzLW1zZy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PostAnonymousMsgComponent */

  /***/
  function srcAppProfilePostAnonymousMsgPostAnonymousMsgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostAnonymousMsgComponent", function () {
      return PostAnonymousMsgComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../profile/state/profile.selector */
    "./src/app/profile/state/profile.selector.ts");

    var PostAnonymousMsgComponent = /*#__PURE__*/function () {
      function PostAnonymousMsgComponent(formBuilder, adminService, route, store, authenticationService) {
        _classCallCheck(this, PostAnonymousMsgComponent);

        this.formBuilder = formBuilder;
        this.adminService = adminService;
        this.route = route;
        this.store = store;
        this.authenticationService = authenticationService;
        this.currentFriendArray = [];
      }

      _createClass(PostAnonymousMsgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.friendId = this.route.snapshot.paramMap.get('id');
          console.log(this.friendId);
          this.store.select(_profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_8__["friendList"]).subscribe(function (friends) {
            console.log('a', friends);

            if (friends && friends.length > 0) {
              _this9.currentFriendArray = friends;
              _this9.currentFriendArray = _this9.currentFriendArray.filter(function (x) {
                return x.Id == _this9.friendId;
              });
              _this9.currentFriend = _this9.currentFriendArray[0];
              console.log(_this9.currentFriend);
            }
          });
          this.postAnonymousMsgForm = this.formBuilder.group({
            phoneNumber: ["".concat(this.currentFriend ? this.currentFriend.PhoneNumber : ''), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.adminService.getUserInfo().subscribe(function (data) {
            return console.log(data);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this10 = this;

          console.log(this.f);
          alert('a');

          if (this.postAnonymousMsgForm.invalid) {
            alert('invalid');
            return;
          } else {
            var currentUser = this.authenticationService.currentUserValue;
            console.log(currentUser);
            var body = {
              phoneNumber: this.f.phoneNumber.value,
              message: this.f.content.value,
              userId: null
            };
            this.adminService.sendAnonymousMsg(body).pipe().subscribe(function (res) {
              if (res) {
                console.log(res);

                _this10.showMsg('Message', 'Message sent success !!!');
              } // this.router.navigate([this.returnUrl]);
              // this.router.navigate(['/dashboard']);

            }, function (error) {
              console.log(error);
            });
          }
        }
      }, {
        key: "showMsg",
        value: function showMsg(title, msg) {
          var timerInterval;
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: title,
            html: msg,
            timer: 2000,
            timerProgressBar: true,
            onBeforeOpen: function onBeforeOpen() {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
              timerInterval = setInterval(function () {
                var content = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.getContent();

                if (content) {
                  var b = content.querySelector('b');

                  if (b) {
                    b.textContent = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.getTimerLeft().toString();
                  }
                }
              }, 100);
            },
            onClose: function onClose() {
              clearInterval(timerInterval);
            }
          }).then(function (result) {
            /* Read more about handling dismissals below */
            if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.timer) {
              console.log('I was closed by the timer');
            }
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.postAnonymousMsgForm.controls;
        }
      }]);

      return PostAnonymousMsgComponent;
    }();

    PostAnonymousMsgComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
      }, {
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    PostAnonymousMsgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sms-post-anonymous-msg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-anonymous-msg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-anonymous-msg.component.css */
      "./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.css"))["default"]]
    })], PostAnonymousMsgComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.scss":
  /*!************************************************!*\
    !*** ./src/app/profile/profile.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sms-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/profile/profile.component.scss"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/profile/dashboard/dashboard.component.ts");
    /* harmony import */


    var _profile_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile.route */
    "./src/app/profile/profile.route.ts");
    /* harmony import */


    var _post_anonymous_msg_post_anonymous_msg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./post-anonymous-msg/post-anonymous-msg.component */
    "./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./friend-list/friend-list.component */
    "./src/app/profile/friend-list/friend-list.component.ts");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _friend_suggestion_friend_suggestion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./friend-suggestion/friend-suggestion.component */
    "./src/app/profile/friend-suggestion/friend-suggestion.component.ts");
    /* harmony import */


    var _friend_layout_friend_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./friend-layout/friend-layout.component */
    "./src/app/profile/friend-layout/friend-layout.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_profile_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./state/profile.reducer */
    "./src/app/profile/state/profile.reducer.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _state_profile_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./state/profile.effects */
    "./src/app/profile/state/profile.effects.ts");
    /* harmony import */


    var _friend_request_friend_request_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./friend-request/friend-request.component */
    "./src/app/profile/friend-request/friend-request.component.ts");
    /* harmony import */


    var _friend_reiceve_friend_reiceve_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./friend-reiceve/friend-reiceve.component */
    "./src/app/profile/friend-reiceve/friend-reiceve.component.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/profile/settings/settings.component.ts");
    /* harmony import */


    var _subscription_list_subscription_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./subscription-list/subscription-list.component */
    "./src/app/profile/subscription-list/subscription-list.component.ts");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _post_anonymous_msg_post_anonymous_msg_component__WEBPACK_IMPORTED_MODULE_5__["PostAnonymousMsgComponent"], _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_7__["FriendListComponent"], _friend_suggestion_friend_suggestion_component__WEBPACK_IMPORTED_MODULE_9__["FriendSuggestionComponent"], _friend_request_friend_request_component__WEBPACK_IMPORTED_MODULE_15__["FriendRequestComponent"], _friend_layout_friend_layout_component__WEBPACK_IMPORTED_MODULE_10__["FriendLayoutComponent"], _friend_reiceve_friend_reiceve_component__WEBPACK_IMPORTED_MODULE_16__["FriendReiceveComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"], _subscription_list_subscription_list_component__WEBPACK_IMPORTED_MODULE_18__["SubscriptionListComponent"], _profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _profile_route__WEBPACK_IMPORTED_MODULE_4__["ProfileRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature('profile', _state_profile_reducer__WEBPACK_IMPORTED_MODULE_12__["counterReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forFeature([_state_profile_effects__WEBPACK_IMPORTED_MODULE_14__["ProfileEffects"]])],
      exports: [],
      providers: []
    })], ProfileModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.route.ts":
  /*!******************************************!*\
    !*** ./src/app/profile/profile.route.ts ***!
    \******************************************/

  /*! exports provided: ProfileRoutingModule */

  /***/
  function srcAppProfileProfileRouteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
      return ProfileRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/profile/dashboard/dashboard.component.ts");
    /* harmony import */


    var _post_anonymous_msg_post_anonymous_msg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./post-anonymous-msg/post-anonymous-msg.component */
    "./src/app/profile/post-anonymous-msg/post-anonymous-msg.component.ts");
    /* harmony import */


    var _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./friend-list/friend-list.component */
    "./src/app/profile/friend-list/friend-list.component.ts");
    /* harmony import */


    var _friend_suggestion_friend_suggestion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./friend-suggestion/friend-suggestion.component */
    "./src/app/profile/friend-suggestion/friend-suggestion.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _friend_request_friend_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./friend-request/friend-request.component */
    "./src/app/profile/friend-request/friend-request.component.ts");
    /* harmony import */


    var _friend_reiceve_friend_reiceve_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./friend-reiceve/friend-reiceve.component */
    "./src/app/profile/friend-reiceve/friend-reiceve.component.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/profile/settings/settings.component.ts");
    /* harmony import */


    var _subscription_list_subscription_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./subscription-list/subscription-list.component */
    "./src/app/profile/subscription-list/subscription-list.component.ts");

    var routes = [{
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'post-anonymous',
      component: _post_anonymous_msg_post_anonymous_msg_component__WEBPACK_IMPORTED_MODULE_4__["PostAnonymousMsgComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'post-anonymous/:id',
      component: _post_anonymous_msg_post_anonymous_msg_component__WEBPACK_IMPORTED_MODULE_4__["PostAnonymousMsgComponent"]
    }, {
      path: 'friend-list',
      component: _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_5__["FriendListComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'friend-suggestion',
      component: _friend_suggestion_friend_suggestion_component__WEBPACK_IMPORTED_MODULE_6__["FriendSuggestionComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'friend-request',
      component: _friend_request_friend_request_component__WEBPACK_IMPORTED_MODULE_8__["FriendRequestComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'friend-receive',
      component: _friend_reiceve_friend_reiceve_component__WEBPACK_IMPORTED_MODULE_9__["FriendReiceveComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'manage-subscription',
      component: _subscription_list_subscription_list_component__WEBPACK_IMPORTED_MODULE_11__["SubscriptionListComponent"]
    }, {
      path: 'setting',
      component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }];

    var ProfileRoutingModule = function ProfileRoutingModule() {
      _classCallCheck(this, ProfileRoutingModule);
    };

    ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], ProfileRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/settings/settings.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/profile/settings/settings.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileSettingsSettingsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".uploadButton {\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWRCdXR0b24ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/settings/settings.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/profile/settings/settings.component.ts ***!
    \********************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppProfileSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../profile/state/profile.selector */
    "./src/app/profile/state/profile.selector.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var _profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../profile/state/profile.actions */
    "./src/app/profile/state/profile.actions.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");

    var SettingsComponent = /*#__PURE__*/function () {
      function SettingsComponent(store, formBuilder, storage, authenticationService, adminService, alertService) {
        _classCallCheck(this, SettingsComponent);

        this.store = store;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.authenticationService = authenticationService;
        this.adminService = adminService;
        this.alertService = alertService;
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.settingForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.isSubscribing = true;
          this.store.select(_profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_3__["userInfo"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function () {
            return _this11.isSubscribing;
          })).subscribe(function (data) {
            console.log(data);

            if (data) {
              _this11.name = data.Name;
              _this11.avatar = data.Avatar;
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this12 = this;

          console.log(this.f); // stop here if form is invalid

          if (this.settingForm.invalid) {
            alert('invalid');
            return;
          } else {
            var filePath = "ProjectImage/".concat(this.currentDate);
            var fileRef = this.storage.ref(filePath);
            var task = this.storage.upload("ProjectImage/".concat(this.currentDate), this.file);
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this12.downloadURL = fileRef.getDownloadURL();

              _this12.downloadURL.subscribe(function (url) {
                if (url) {
                  _this12.fb = url;
                  var body = {
                    Name: _this12.name,
                    Avatar: _this12.fb,
                    DOB: "2015-05-02T00:00:00"
                  };

                  _this12.adminService.editProfile(body).subscribe(function (data) {
                    _this12.alertService.success('Update Profile success.');

                    _this12.store.dispatch(_profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_9__["ProfileGetUserInfo"]());

                    if (data) {// console.log('a', data);
                      // this.alertService.success('Update Profile success.');
                      // this.store.dispatch(ProfileActions.ProfileGetUserInfo());
                    }
                  }, function (error) {
                    console.log(error);
                  });
                }

                console.log('link', _this12.fb);
              });
            })).subscribe(function (url) {
              if (url) {
                console.log('url', url);
              }
            });
          }
        }
      }, {
        key: "uploadAvatar",
        value: function uploadAvatar(e) {
          this.currentDate = Date.now();
          this.file = e.target.files[0];
          this.fileName = e.target.files[0].name;
          console.log(this.file);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          //Called once, before the instance is destroyed.
          //Add 'implements OnDestroy' to the class.
          this.isSubscribing = false;
        }
      }, {
        key: "f",
        get: function get() {
          return this.settingForm.controls;
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]
      }, {
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
      }, {
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
      }];
    };

    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sms-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/settings/settings.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.component.css */
      "./src/app/profile/settings/settings.component.css"))["default"]]
    })], SettingsComponent);
    /***/
  },

  /***/
  "./src/app/profile/state/profile.effects.ts":
  /*!**************************************************!*\
    !*** ./src/app/profile/state/profile.effects.ts ***!
    \**************************************************/

  /*! exports provided: ProfileEffects */

  /***/
  function srcAppProfileStateProfileEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileEffects", function () {
      return ProfileEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _profile_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.actions */
    "./src/app/profile/state/profile.actions.ts");

    var ProfileEffects = function ProfileEffects(actions$, adminService) {
      var _this13 = this;

      _classCallCheck(this, ProfileEffects);

      this.actions$ = actions$;
      this.adminService = adminService; // @Effect() name$: Observable<Action> = this.actions$.pipe(ofType('ACTIONTYPE'));

      this.getUserInfo$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
        return _this13.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_profile_actions__WEBPACK_IMPORTED_MODULE_6__["ProfileActionTypes"].ProfileGetUserInfo), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () {
          return _this13.adminService.getUserInfo().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (info) {
            return _profile_actions__WEBPACK_IMPORTED_MODULE_6__["ProfileGetUserSuccess"]({
              info: info
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
          }));
        }));
      });
      this.getFriendList$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
        return _this13.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_profile_actions__WEBPACK_IMPORTED_MODULE_6__["ProfileActionTypes"].ProfileGetFriendList), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () {
          return _this13.adminService.getFriendList(null, '', true, 1, 10).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (friendList) {
            return _profile_actions__WEBPACK_IMPORTED_MODULE_6__["ProfileGetFriendListSuccess"]({
              friendList: friendList
            });
          }));
        }));
      });
      this.getsubscribeList$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
        return _this13.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_profile_actions__WEBPACK_IMPORTED_MODULE_6__["ProfileGetSubscribeService"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (obj) {
          return _this13.adminService.getAllServices(obj.status).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (subscribeList) {
            subscribeList.forEach(function (x) {
              x.active = true;
            });

            _this13.adminService.getAllServices(true).subscribe(function (res) {
              if (res) {
                if (res.length > 0) {
                  res.forEach(function (item1) {
                    subscribeList.forEach(function (item2) {
                      // debugger
                      if (item1.Id === item2.Id) {
                        item2.active = false;
                      } else {}
                    });
                  });
                }
              }
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (subscribeList) {
            return _profile_actions__WEBPACK_IMPORTED_MODULE_6__["ProfileGetSubscribeServiceSuccess"]({
              subscribeList: subscribeList
            });
          }));
        }));
      });
    };

    ProfileEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
      }, {
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]
      }];
    };

    ProfileEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ProfileEffects);
    /***/
  },

  /***/
  "./src/app/profile/state/profile.reducer.ts":
  /*!**************************************************!*\
    !*** ./src/app/profile/state/profile.reducer.ts ***!
    \**************************************************/

  /*! exports provided: initialState, counterReducer */

  /***/
  function srcAppProfileStateProfileReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "counterReducer", function () {
      return counterReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _profile_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile.actions */
    "./src/app/profile/state/profile.actions.ts");

    var initialState = {
      userInfo: ''
    };

    var _counterReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileGetUserSuccess"], function (state, _ref) {
      var info = _ref.info;
      return Object.assign({}, state, {
        userInfo: info
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileGetFriendListSuccess"], function (state, _ref2) {
      var friendList = _ref2.friendList;
      return Object.assign({}, state, {
        friendList: friendList
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileGetSubscribeServiceSuccess"], function (state, _ref3) {
      var subscribeList = _ref3.subscribeList;
      return Object.assign({}, state, {
        subscribeList: subscribeList
      });
    }));

    function counterReducer(state, action) {
      return _counterReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/profile/subscription-list/subscription-list.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/profile/subscription-list/subscription-list.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileSubscriptionListSubscriptionListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvc3Vic2NyaXB0aW9uLWxpc3Qvc3Vic2NyaXB0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/subscription-list/subscription-list.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/profile/subscription-list/subscription-list.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SubscriptionListComponent */

  /***/
  function srcAppProfileSubscriptionListSubscriptionListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscriptionListComponent", function () {
      return SubscriptionListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../profile/state/profile.selector */
    "./src/app/profile/state/profile.selector.ts");
    /* harmony import */


    var _profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../profile/state/profile.actions */
    "./src/app/profile/state/profile.actions.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _subscription_popup_subscription_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../subscription-popup/subscription-popup.component */
    "./src/app/profile/subscription-popup/subscription-popup.component.ts");

    var SubscriptionListComponent = /*#__PURE__*/function () {
      function SubscriptionListComponent(adminService, alertService, store, dialog) {
        _classCallCheck(this, SubscriptionListComponent);

        this.adminService = adminService;
        this.alertService = alertService;
        this.store = store;
        this.dialog = dialog;
      }

      _createClass(SubscriptionListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSubscriptionList();
        }
      }, {
        key: "getSubscriptionList",
        value: function getSubscriptionList() {
          var _this14 = this;

          this.store.dispatch(_profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_7__["ProfileGetSubscribeService"]({
            status: null
          }));
          this.store.select(_profile_state_profile_selector__WEBPACK_IMPORTED_MODULE_6__["subscribeList"]).subscribe(function (list) {
            console.log('list', list);
            _this14.subscriptionList = list;
          });
        }
      }, {
        key: "enterSubscriptionLength",
        value: function enterSubscriptionLength(id) {
          var _this15 = this;

          console.log(id);
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Please enter your days',
            input: 'text',
            width: '40em',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            customClass: {
              title: 'phone-verification-header',
              input: 'input-text with-border',
              confirmButton: 'button'
            },
            allowOutsideClick: function allowOutsideClick() {
              return !sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.isLoading();
            }
          }).then(function (result) {
            console.log('result', result);

            if (result.value) {
              _this15.adminService.subscribeServices(id, result.value).subscribe(function (data) {
                if (data) {
                  _this15.alertService.successCounterup('Subscription', 'Subscription Success !!!');

                  _this15.store.dispatch(_profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_7__["ProfileGetSubscribeService"]({
                    status: null
                  }));
                }
              });
            } else {
              _this15.alertService.error('Please enter days');
            }
          });
        }
      }, {
        key: "unsubscribeService",
        value: function unsubscribeService(id) {
          var _this16 = this;

          this.adminService.unSubscribeServices(id).subscribe(function (res) {
            console.log(res);

            _this16.store.dispatch(_profile_state_profile_actions__WEBPACK_IMPORTED_MODULE_7__["ProfileGetSubscribeService"]({
              status: null
            }));

            _this16.alertService.successCounterup('Subscription', 'UnSubscription Success !!!');
          });
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.dialog.open(_subscription_popup_subscription_popup_component__WEBPACK_IMPORTED_MODULE_9__["SubscriptionPopupComponent"], {
            height: '600px',
            width: '950px'
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }]);

      return SubscriptionListComponent;
    }();

    SubscriptionListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }];
    };

    SubscriptionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sms-subscription-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subscription-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/subscription-list/subscription-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subscription-list.component.css */
      "./src/app/profile/subscription-list/subscription-list.component.css"))["default"]]
    })], SubscriptionListComponent);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map