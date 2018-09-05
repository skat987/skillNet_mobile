(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teacher-reports-reports-module"],{

/***/ "./src/app/teacher/reports/reports.module.ts":
/*!***************************************************!*\
  !*** ./src/app/teacher/reports/reports.module.ts ***!
  \***************************************************/
/*! exports provided: ReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageModule", function() { return ReportsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports.page */ "./src/app/teacher/reports/reports.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_5__["ReportsPage"]
    }
];
var ReportsPageModule = /** @class */ (function () {
    function ReportsPageModule() {
    }
    ReportsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_5__["ReportsPage"]]
        })
    ], ReportsPageModule);
    return ReportsPageModule;
}());



/***/ }),

/***/ "./src/app/teacher/reports/reports.page.html":
/*!***************************************************!*\
  !*** ./src/app/teacher/reports/reports.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>reports</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div *ngIf=\"formations\">\r\n    <ion-card *ngFor=\"let formation of formations\">\r\n      <ion-img src=\"{{ formation.logo }}\"></ion-img>\r\n    \r\n      <ion-card-content>\r\n        <ion-card-title>{{ formation.name }}</ion-card-title>\r\n    \r\n        <ion-list *ngIf=\"formation.reports.length\">\r\n          <ion-item *ngFor=\"let report of formation.reports\" (click)=\"showReport(report.id, formation.id)\">\r\n            <ion-label>\r\n              <h1>Titre: {{ report.title }}</h1>\r\n              <h2>Rapport du: {{ report.date }}</h2>\r\n              <h3>Rédigé par: {{ report.author.fullName }}</h3>\r\n              <p>note: {{ report.rate }}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/teacher/reports/reports.page.scss":
/*!***************************************************!*\
  !*** ./src/app/teacher/reports/reports.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/teacher/reports/reports.page.ts":
/*!*************************************************!*\
  !*** ./src/app/teacher/reports/reports.page.ts ***!
  \*************************************************/
/*! exports provided: ReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPage", function() { return ReportsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_formation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/formation */ "./src/app/models/formation.ts");
/* harmony import */ var _models_student__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/student */ "./src/app/models/student.ts");
/* harmony import */ var _models_report__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/report */ "./src/app/models/report.ts");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Models



// Services

var ReportsPage = /** @class */ (function () {
    function ReportsPage(platform, router, apiService) {
        this.platform = platform;
        this.router = router;
        this.apiService = apiService;
        this.formations = [];
    }
    ReportsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () { return _this.setFormations(); });
    };
    ReportsPage.prototype.setFormations = function () {
        var _this = this;
        this.apiService.get('teacher/myFormations').then(function (resp) {
            _this.formations = [];
            for (var i = 0; i < resp['data'].length; i++) {
                // tslint:disable-next-line:max-line-length
                _this.formations.push(new _models_formation__WEBPACK_IMPORTED_MODULE_3__["Formation"](resp['data'][i].id, resp['data'][i].name, resp['data'][i].logo, resp['data'][i].start_at, resp['data'][i].end_at, resp['data'][i].total_students));
            }
        }).then(function () { return _this.setReportsByFormation(); })
            .catch(function (e) { return console.log('Error setting formations: ', e); });
    };
    ReportsPage.prototype.setReportsByFormation = function () {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.apiService.get('reportsByFormation/' + this_1.formations[i].id).then(function (resp) {
                for (var j = 0; j < resp.length; j++) {
                    // tslint:disable-next-line:max-line-length
                    _this.formations[i].addReport(new _models_report__WEBPACK_IMPORTED_MODULE_5__["Report"](resp[j].report_id, resp[j].report_title, resp[j].report_date, new _models_student__WEBPACK_IMPORTED_MODULE_4__["Student"](null, resp[j].student[0].lastname, resp[j].student[0].firstname, null, null, null, null, null, null, resp[j].student_id, resp[j].formation_id), null, resp[j].report_rate, resp[j].report_is_daily, resp[j].created_at, resp[j].updated_at));
                }
            }).catch(function (e) { return console.log('Error setting reports: ', e); });
        };
        var this_1 = this;
        for (var i = 0; i < this.formations.length; i++) {
            _loop_1(i);
        }
    };
    ReportsPage.prototype.showReport = function (reportId, formationId) {
        this.router.navigate(['/teacher/report-details', { formation: formationId, report: reportId }]);
    };
    ReportsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.page.html */ "./src/app/teacher/reports/reports.page.html"),
            styles: [__webpack_require__(/*! ./reports.page.scss */ "./src/app/teacher/reports/reports.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
    ], ReportsPage);
    return ReportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=teacher-reports-reports-module.js.map