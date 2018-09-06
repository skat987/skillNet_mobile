(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teacher-plannings-plannings-module"],{

/***/ "./src/app/teacher/plannings/plannings.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/teacher/plannings/plannings.module.ts ***!
  \*******************************************************/
/*! exports provided: PlanningsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningsPageModule", function() { return PlanningsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _plannings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plannings.page */ "./src/app/teacher/plannings/plannings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _plannings_page__WEBPACK_IMPORTED_MODULE_5__["PlanningsPage"]
    }
];
var PlanningsPageModule = /** @class */ (function () {
    function PlanningsPageModule() {
    }
    PlanningsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_plannings_page__WEBPACK_IMPORTED_MODULE_5__["PlanningsPage"]]
        })
    ], PlanningsPageModule);
    return PlanningsPageModule;
}());



/***/ }),

/***/ "./src/app/teacher/plannings/plannings.page.html":
/*!*******************************************************!*\
  !*** ./src/app/teacher/plannings/plannings.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>plannings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-list *ngIf=\"plannings.length\">\r\n    <ion-item *ngFor=\"let planning of plannings\" >\r\n      <ion-list>\r\n        <ion-item>{{ planning.name }}</ion-item>\r\n        <ion-item>créer le: {{ planning.createdAt | date:\"dd/MM/yyyy hh:mm\"}}</ion-item>\r\n        <ion-item>modifier le: {{ planning.updatedAt | date:\"dd/MM/yyyy hh:mm\"}}</ion-item>\r\n        <ion-item>\r\n          <button pull right (click)=\"openFile(planning.url)\"><ion-icon name=\"md-download\"></ion-icon></button>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/teacher/plannings/plannings.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/teacher/plannings/plannings.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/teacher/plannings/plannings.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/teacher/plannings/plannings.page.ts ***!
  \*****************************************************/
/*! exports provided: PlanningsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningsPage", function() { return PlanningsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _models_planning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/planning */ "./src/app/models/planning.ts");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../service/api/api.service */ "./src/app/service/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Plug-ins



// Models

// Services

var PlanningsPage = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function PlanningsPage(platform, apiService, file, transfer, document) {
        this.platform = platform;
        this.apiService = apiService;
        this.file = file;
        this.transfer = transfer;
        this.document = document;
        this.plannings = [];
    }
    PlanningsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () { return _this.setPlannings(); });
    };
    PlanningsPage.prototype.setPlannings = function () {
        var _this = this;
        this.apiService.get('teachers/calendar').then(function (resp) {
            _this.plannings = [];
            for (var i = 0; i < resp.length; i++) {
                // tslint:disable-next-line:max-line-length
                _this.plannings[i] = new _models_planning__WEBPACK_IMPORTED_MODULE_5__["Planning"](resp[i].id, resp[i].file_name, resp[i].file_url, resp[i].formation_id, resp[i].created_at, resp[i].updated_at);
            }
        }).catch(function (e) { return console.log('Error setting plannings: ', e); });
    };
    PlanningsPage.prototype.openFile = function (url) {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var path;
        if (this.platform.is('ios')) {
            path = this.file.documentsDirectory;
        }
        else if (this.platform.is('android')) {
            path = this.file.dataDirectory;
        }
        fileTransfer.download(url, path + url).then(function (entry) {
            console.log('open file controle: ', entry);
            _this.document.viewDocument(entry.toURL(), 'application/pdf', {});
        }).catch(function (e) { return console.log('Error opening file: ', e); });
    };
    PlanningsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plannings',
            template: __webpack_require__(/*! ./plannings.page.html */ "./src/app/teacher/plannings/plannings.page.html"),
            styles: [__webpack_require__(/*! ./plannings.page.scss */ "./src/app/teacher/plannings/plannings.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _service_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"], _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["DocumentViewer"]])
    ], PlanningsPage);
    return PlanningsPage;
}());



/***/ })

}]);
//# sourceMappingURL=teacher-plannings-plannings-module.js.map