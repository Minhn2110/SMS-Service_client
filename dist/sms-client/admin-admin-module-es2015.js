(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-list/user-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-list/user-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Wrapper -->\n<div id=\"wrapper\">\n\n  <!-- Header Container\n================================================== -->\n  <!-- Header Container / End -->\n\n  <!-- Titlebar\n================================================== -->\n  <div id=\"titlebar\" class=\"gradient\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-12\">\n\n          <h2>User Interface Elements</h2>\n\n          <!-- Breadcrumbs -->\n          <nav id=\"breadcrumbs\" class=\"dark\">\n            <ul>\n              <li><a href=\"#\">Home</a></li>\n              <li><a href=\"#\">Pages</a></li>\n              <li>User Interface Elements</li>\n            </ul>\n          </nav>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Table & Notifications\n================================================== -->\n  <!-- Container -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 col-md-12\">\n        <!-- Fun Facts Container -->\n        <div class=\"fun-facts-container\">\n          <div class=\"fun-fact\" data-fun-fact-color=\"#36bd78\">\n            <div class=\"fun-fact-text\">\n              <span>User Count</span>\n              <h4>22</h4>\n            </div>\n            <div class=\"fun-fact-icon\"><i class=\"icon-material-outline-gavel\" style=\"color: rgb(54, 189, 120);\"></i>\n            </div>\n          </div>\n          <div class=\"fun-fact\" data-fun-fact-color=\"#efa80f\">\n            <div class=\"fun-fact-text\">\n              <span>Message Count Per Month</span>\n              <h4>28</h4>\n            </div>\n            <div class=\"fun-fact-icon\"><i class=\"icon-material-outline-rate-review\"></i></div>\n          </div>\n\n          <!-- Last one has to be hidden below 1600px, sorry :( -->\n          <div class=\"fun-fact\" data-fun-fact-color=\"#2a41e6\">\n            <div class=\"fun-fact-text\">\n              <span>Message Count Per Day</span>\n              <h4>987</h4>\n            </div>\n            <div class=\"fun-fact-icon\"><i class=\"icon-feather-trending-up\"></i></div>\n          </div>\n        </div>\n        <!-- <div class=\"chart-wrapper\">\n          <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\n            [plugins]=\"barChartPlugins\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\">\n          </canvas>\n        </div> -->\n      </div>\n      <div class=\"col-xl-7\">\n        <!-- Dashboard Box -->\n        <div class=\"dashboard-box main-box-in-row\">\n          <div class=\"headline\">\n            <h3><i class=\"icon-feather-bar-chart-2\"></i> Message Analysis </h3>\n            <!-- <div class=\"sort-by\">\n              <select class=\"selectpicker hide-tick\">\n                <option>Last 6 Months</option>\n                <option>This Year</option>\n                <option>This Month</option>\n              </select>\n            </div> -->\n          </div>\n          <div class=\"content\">\n            <!-- Chart -->\n            <div class=\"chart\">\n              <!-- <canvas id=\"chart\" width=\"100\" height=\"45\"></canvas> -->\n              <canvas baseChart  width=\"100\" height=\"45\" [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\n              [plugins]=\"barChartPlugins\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\">\n            </canvas>\n            </div>\n          </div>\n        </div>\n        <!-- Dashboard Box / End -->\n      </div>\n      <div class=\"col-xl-5 col-md-12\">\n        <div class=\"dashboard-box main-box-in-row\">\n          <div class=\"headline\">\n            <h3><i class=\"icon-feather-bar-chart-2\"></i> User List </h3>\n          </div>\n          <div class=\"content\">\n            <div class=\"mat-elevation-z8\">\n              <table mat-table [dataSource]=\"dataSource\" class=\"basic-table\">\n    \n                <!-- Position Column -->\n                <ng-container matColumnDef=\"position\">\n                  <th mat-header-cell *matHeaderCellDef> No. </th>\n                  <td mat-cell *matCellDef=\"let element; let i = index;\"> {{i + 1}} </td>\n                </ng-container>\n    \n                <!-- Name Column -->\n                <ng-container matColumnDef=\"name\">\n                  <th mat-header-cell *matHeaderCellDef> Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.Name}} </td>\n                </ng-container>\n    \n                <ng-container matColumnDef=\"email\">\n                  <th mat-header-cell *matHeaderCellDef> Email </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.Email}} </td>\n                </ng-container>\n    \n                <ng-container matColumnDef=\"status\">\n                  <th mat-header-cell *matHeaderCellDef> Status </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.Status == 1 ? 'Active' : 'Deactive'}} </td>\n                </ng-container>\n    \n                <!-- Weight Column -->\n                <ng-container matColumnDef=\"weight\">\n                  <th mat-header-cell *matHeaderCellDef> Action </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    <mat-slide-toggle checked='{{element.Status == 1 ? true : false}}'\n                      (change)='changeStatus($event, element.Id)'></mat-slide-toggle>\n                  </td>\n                </ng-container>\n    \n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"symbol\">\n                  <th mat-header-cell *matHeaderCellDef> Action </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n                </ng-container>\n    \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n    \n              <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n            </div>\n          </div>\n        </div>\n\n\n        <!-- <div class=\"section-headline margin-bottom-30 margin-top-30\">\n          <h4>Table</h4>\n        </div> -->\n\n      </div>\n    </div>\n    <div class=\"row\">\n\n\n\n\n\n    </div>\n\n\n  </div>\n  <!-- Container / End -->\n\n\n  <div class=\"margin-top-70\"></div>\n\n\n\n</div>\n<!-- Wrapper / End -->");

/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.route */ "./src/app/admin/admin.route.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/user-list/user-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");








let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            // AdminComponent,
            // AdminLoginComponent,
            _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]
        ],
        exports: [],
        providers: [],
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/admin.route.ts":
/*!**************************************!*\
  !*** ./src/app/admin/admin.route.ts ***!
  \**************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/user-list/user-list.component.ts");





const routes = [
    // { path: 'login', component: AdminLoginComponent },
    { path: 'user-list', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/admin/user-list/user-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/user-list/user-list.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#wrapper {\n  padding-top: 0;\n}\n\ntable {\n  width: 100%;\n}\n\n.chart-wrapper {\n  height: 500px;\n}\n\n.container {\n  max-width: 1820px;\n}\n\n.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #fafafa !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlci1saXN0L0Q6XFxQcm9qZWN0XFxGUFRcXENsaWVudCAtIEZpbmFsIC0gU2VtMy9zcmNcXGFwcFxcYWRtaW5cXHVzZXItbGlzdFxcdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXIge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jaGFydC13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDUwMHB4XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTgyMHB4O1xyXG59XHJcblxyXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYSAhaW1wb3J0YW50O1xyXG5cclxufSIsIiN3cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGFydC13cmFwcGVyIHtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTgyMHB4O1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/user-list/user-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/user-list/user-list.component.ts ***!
  \********************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");





let UserListComponent = class UserListComponent {
    constructor(backendService) {
        this.backendService = backendService;
        this.displayedColumns = ['position', 'name', 'email', 'status', 'weight', 'symbol'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.barChartOptions = {
            responsive: true,
        };
        // barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
        this.barChartLabels = ['CountInRange', 'CountPerDay', 'CountPerMonth', 'ProfitInRange', 'ProfitPerDay', 'ProfitPerMonth'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [
            { data: [45, 37, 60, 70, 46, 33], label: 'Unit',
                backgroundColor: '#2a41e8', }
        ];
        // barChartData: ChartDataSets[] = [];
        this.messageData = [];
    }
    ngOnInit() {
        this.backendService.overViewAnalysis().subscribe(res => {
            console.log(res);
        });
        this.backendService.msgAnalysis('1/1/2020', null).subscribe(res => {
            console.log('msg', res);
            if (res) {
                for (const property in res) {
                    this.messageData.push(res[property]);
                    console.log(this.messageData);
                }
                this.barChartData = [
                    {
                        data: this.messageData,
                        label: 'Unit',
                        backgroundColor: '#2a41e8',
                        hoverBackgroundColor: '#536dfe'
                    }
                ];
            }
        });
        this.backendService.getUserList('', true, 1, 100).subscribe(data => {
            // this.dataSource = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            this.dataSource.paginator = this.paginator;
            // this.dataSource.paginator = this.paginator;
            console.log(data);
        });
    }
    ngAfterViewInit() {
        // setTimeout(() => {
        //   this.dataSource.paginator = this.paginator
        // }, 1000);
    }
    changeStatus(e, id) {
        const body = {
            Status: e.checked ? 1 : 0,
            UserId: id
        };
        this.backendService.changeAccountStatus(body).subscribe(res => {
            console.log(res);
        });
        console.log(e);
    }
};
UserListComponent.ctorParameters = () => [
    { type: src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], UserListComponent.prototype, "paginator", void 0);
UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sms-user-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-list/user-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/user-list/user-list.component.scss")).default]
    })
], UserListComponent);



/***/ }),

/***/ "./src/app/services/backend.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/backend.service.ts ***!
  \*********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let BackendService = class BackendService {
    constructor(http) {
        this.http = http;
    }
    // {string keyword, bool? isDesc, int? page, int? pageSize
    getUserList(keyword, isDesc, page, pageSize) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/Admin/UserList?keyword=${keyword}&isDesc=${isDesc}&page=${page}&pageSize=${pageSize}`);
    }
    changeAccountStatus(body) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/Admin`, body);
    }
    overViewAnalysis() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/Admin/OverviewAnalysis`);
    }
    msgAnalysis(fromDate, toDate) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/Admin/MessageAnalysis?fromDate=${fromDate}&toDate=${toDate}`);
    }
};
BackendService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], BackendService);



/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map