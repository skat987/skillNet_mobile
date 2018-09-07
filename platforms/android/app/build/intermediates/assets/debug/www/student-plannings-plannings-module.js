(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-plannings-plannings-module"],{

/***/ "./src/app/student/plannings/plannings.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/student/plannings/plannings.module.ts ***!
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
/* harmony import */ var _plannings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plannings.page */ "./src/app/student/plannings/plannings.page.ts");
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

/***/ "./src/app/student/plannings/plannings.page.html":
/*!*******************************************************!*\
  !*** ./src/app/student/plannings/plannings.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle>\r\n        <ion-button>\r\n          <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n        </ion-button>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    <ion-title text-center>Plannings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-list insert>\r\n    <ion-card *ngIf=\"planning\" class=\"cardShadows\" >\r\n      <ion-item (click)=\"openFile(planning.url)\" item-content>\r\n        <h2 item-start>{{ planning.name }}</h2>\r\n        <ion-icon name=\"download\" md=\"md-download\" item-end></ion-icon>\r\n      </ion-item>\r\n      <ion-item item-content>\r\n        <h4 item-start>{{ planning.updatedAt | date:\"dd-MM-yyyy hh:mm\" }}</h4>\r\n      </ion-item>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/student/plannings/plannings.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/student/plannings/plannings.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-plannings .cardShadows {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n\napp-plannings .icon {\n  font-size: 25px; }\n"

/***/ }),

/***/ "./src/app/student/plannings/plannings.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/student/plannings/plannings.page.ts ***!
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
/* harmony import */ var _models_planning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../models/planning */ "./src/app/models/planning.ts");
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
    function PlanningsPage(platform, document, file, transfer, apiService) {
        this.platform = platform;
        this.document = document;
        this.file = file;
        this.transfer = transfer;
        this.apiService = apiService;
    }
    PlanningsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () { return _this.setPlanning(); });
    };
    PlanningsPage.prototype.setPlanning = function () {
        var _this = this;
        this.apiService.get('students/calendar').then(function (resp) {
            // tslint:disable-next-line:max-line-length
            _this.planning = new _models_planning__WEBPACK_IMPORTED_MODULE_5__["Planning"](resp[0].id, resp[0].file_name, resp[0].file_url, resp[0].formation_id, resp[0].created_at, resp[0].updated_at);
        }).catch(function (e) { return console.log('Error setting planning: ', e); });
    };
    PlanningsPage.prototype.openFile = function (url) {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var apiUrl = 'http://skillstracking.motjo.io/uploads/calendars/';
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
            template: __webpack_require__(/*! ./plannings.page.html */ "./src/app/student/plannings/plannings.page.html"),
            styles: [__webpack_require__(/*! ./plannings.page.scss */ "./src/app/student/plannings/plannings.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["DocumentViewer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"], _service_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
    ], PlanningsPage);
    return PlanningsPage;
}());



/***/ })

}]);
//# sourceMappingURL=student-plannings-plannings-module.js.map