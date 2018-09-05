(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-report-details-report-details-module"],{

/***/ "./src/app/student/report-details/report-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/student/report-details/report-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: ReportDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDetailsPageModule", function() { return ReportDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _report_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-details.page */ "./src/app/student/report-details/report-details.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _report_details_page__WEBPACK_IMPORTED_MODULE_5__["ReportDetailsPage"]
    }
];
var ReportDetailsPageModule = /** @class */ (function () {
    function ReportDetailsPageModule() {
    }
    ReportDetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_report_details_page__WEBPACK_IMPORTED_MODULE_5__["ReportDetailsPage"]]
        })
    ], ReportDetailsPageModule);
    return ReportDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/student/report-details/report-details.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/student/report-details/report-details.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>report-details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-button shape=\"round\" color=\"primary\" fill=\"outline\" (click)=\"addReport()\">Ajouter un rapport</ion-button>\r\n  <div *ngIf=\"report\">  \r\n    <h3>Rapport du: {{ report.date }}</h3>\r\n    <h3>Rédigé par: {{ report.author.fullName }}</h3>\r\n    <h3>Note: {{ report.rate }}</h3>\r\n    <h4>Texte: </h4>\r\n    <p>{{ report.text }}</p>        \r\n  \r\n    <form [formGroup]=\"newCommentForm\" (ngSubmit)=\"createComment(report.id)\">\r\n      <div>\r\n        <ion-label>Nouveau commentaire: </ion-label>\r\n        <ion-textarea formControlName=\"text\" required type=\"textarea\"></ion-textarea>\r\n      </div>\r\n      <ion-button shape=\"round\" color=\"primary\" fill=\"outline\" type=\"submit\">\r\n        Ajouter\r\n      </ion-button>\r\n    </form>\r\n\r\n    <ion-list *ngIf=\"report.comments.length\">\r\n      <ion-list-header>\r\n        Commentaires du rapport: {{ report.comments.length }}\r\n      </ion-list-header>\r\n      <ion-item *ngFor=\"let comment of report.comments\">\r\n        <h4>{{ comment.author.fullName }} / {{ comment.createdAt }}</h4>\r\n        <p>{{ comment.text }}</p>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/student/report-details/report-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/student/report-details/report-details.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/student/report-details/report-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/student/report-details/report-details.page.ts ***!
  \***************************************************************/
/*! exports provided: ReportDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDetailsPage", function() { return ReportDetailsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../models/comment */ "./src/app/models/comment.ts");
/* harmony import */ var _models_report__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/report */ "./src/app/models/report.ts");
/* harmony import */ var _models_student__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/student */ "./src/app/models/student.ts");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
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

var ReportDetailsPage = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function ReportDetailsPage(platform, router, route, apiService, formBuilder) {
        this.platform = platform;
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
    }
    ReportDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        // tslint:disable-next-line:max-line-length
        this.platform.ready().then(function () {
            _this.setReport(_this.route.snapshot.paramMap.get('report'), _this.route.snapshot.paramMap.get('formation'));
            _this.newCommentForm = _this.formBuilder.group({ text: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] });
        });
    };
    ReportDetailsPage.prototype.setReport = function (reportId, formationId) {
        var _this = this;
        this.apiService.get('reportofStudent/' + reportId + '/of/' + formationId).then(function (resp) {
            // tslint:disable-next-line:max-line-length
            _this.report = new _models_report__WEBPACK_IMPORTED_MODULE_5__["Report"](resp[0].report_id, resp[0].title, resp[0].report_date, new _models_student__WEBPACK_IMPORTED_MODULE_6__["Student"](null, resp[0].student[0].lastname, resp[0].student[0].firstname, null, null, null, null, null, null, resp[0].student_id, resp[0].formation_id), resp[0].text, resp[0].rate, resp[0].report_is_daily, resp[0].created_at, resp[0].updated_at);
            for (var i = 0; i < resp[0].comments.length; i++) {
                // tslint:disable-next-line:max-line-length
                _this.report.addComment(new _models_comment__WEBPACK_IMPORTED_MODULE_4__["Comment"](resp[0].comments[i].id, resp[0].comments[i].text, new _models_student__WEBPACK_IMPORTED_MODULE_6__["Student"](resp[0].comments[i].user_id, resp[0].comments[i].lastname, resp[0].comments[i].firstname), resp[0].comments[i].created_at));
            }
        }).catch(function (e) { return console.log('Error setting report: ', e); });
    };
    ReportDetailsPage.prototype.addReport = function () {
        this.router.navigate(['/student/report-form']);
    };
    ReportDetailsPage.prototype.createComment = function (reportId) {
        var _this = this;
        if (this.newCommentForm.invalid) {
            return;
        }
        this.apiService.post('reportComment/create', { report_id: reportId, text: this.newCommentForm.controls.text.value })
            .then(function (resp) { return console.log('create comment: ', resp); })
            .then(function () { return _this.setReport(_this.route.snapshot.paramMap.get('report'), _this.route.snapshot.paramMap.get('formation')); })
            .catch(function (e) { return console.log('Error creating comment: ', e); });
    };
    ReportDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-details',
            template: __webpack_require__(/*! ./report-details.page.html */ "./src/app/student/report-details/report-details.page.html"),
            styles: [__webpack_require__(/*! ./report-details.page.scss */ "./src/app/student/report-details/report-details.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_api_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ReportDetailsPage);
    return ReportDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=student-report-details-report-details-module.js.map