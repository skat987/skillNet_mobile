(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-report-form-report-form-module"],{

/***/ "./src/app/student/report-form/report-form.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/student/report-form/report-form.module.ts ***!
  \***********************************************************/
/*! exports provided: ReportFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportFormPageModule", function() { return ReportFormPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _report_form_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-form.page */ "./src/app/student/report-form/report-form.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _report_form_page__WEBPACK_IMPORTED_MODULE_5__["ReportFormPage"]
    }
];
var ReportFormPageModule = /** @class */ (function () {
    function ReportFormPageModule() {
    }
    ReportFormPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_report_form_page__WEBPACK_IMPORTED_MODULE_5__["ReportFormPage"]]
        })
    ], ReportFormPageModule);
    return ReportFormPageModule;
}());



/***/ }),

/***/ "./src/app/student/report-form/report-form.page.html":
/*!***********************************************************!*\
  !*** ./src/app/student/report-form/report-form.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>report-form</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <form [formGroup]=\"newReportForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label>Titre du rapport: </ion-label>\r\n          <ion-input formControlName=\"title\" required type=\"text\" placeholder=\"Titre\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Date: </ion-label>\r\n          <ion-datetime formControlName=\"date\" required pickerFormat=\"MM/DD/YYYY\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Texte: </ion-label>\r\n          <ion-textarea formControlName=\"text\" required placeholder=\"Votre texte\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Note: </ion-label>\r\n          <ion-input formControlName=\"rate\" required type=\"number\" placeholder=\"Note\"></ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-button shape=\"round\" color=\"primary\" fill=\"outline\" type=\"submit\">\r\n        Valider\r\n      </ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/student/report-form/report-form.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/student/report-form/report-form.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/student/report-form/report-form.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/student/report-form/report-form.page.ts ***!
  \*********************************************************/
/*! exports provided: ReportFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportFormPage", function() { return ReportFormPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/api/api.service */ "./src/app/service/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Services

var ReportFormPage = /** @class */ (function () {
    function ReportFormPage(platform, formBuilder, apiService) {
        var _this = this;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.platform.ready().then(function () {
            _this.newReportForm = _this.formBuilder.group({
                title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                rate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                text: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        });
    }
    ReportFormPage.prototype.ngOnInit = function () { };
    Object.defineProperty(ReportFormPage.prototype, "f", {
        get: function () { return this.newReportForm.controls; },
        enumerable: true,
        configurable: true
    });
    ReportFormPage.prototype.onSubmit = function () {
        if (this.newReportForm.invalid) {
            return;
        }
        var dataReport = {
            title: this.f.title.value,
            date: new Date(this.f.date.value.year.value, this.f.date.value.month.value, this.f.date.value.day.value).toDateString(),
            text: this.f.text.value,
            rate: this.f.rate.value
        };
        console.log('create controle: ', dataReport);
        this.apiService.post('report/create', dataReport)
            .then(function (resp) { return console.log('create report: ', resp); })
            .catch(function (e) { return console.log('Error creating report: ', e); });
    };
    ReportFormPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-form',
            template: __webpack_require__(/*! ./report-form.page.html */ "./src/app/student/report-form/report-form.page.html"),
            styles: [__webpack_require__(/*! ./report-form.page.scss */ "./src/app/student/report-form/report-form.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ReportFormPage);
    return ReportFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=student-report-form-report-form-module.js.map