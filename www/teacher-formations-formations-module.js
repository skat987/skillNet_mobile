(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teacher-formations-formations-module"],{

/***/ "./src/app/teacher/formations/formations.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/teacher/formations/formations.module.ts ***!
  \*********************************************************/
/*! exports provided: FormationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormationsPageModule", function() { return FormationsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _formations_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formations.page */ "./src/app/teacher/formations/formations.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _formations_page__WEBPACK_IMPORTED_MODULE_5__["FormationsPage"]
    }
];
var FormationsPageModule = /** @class */ (function () {
    function FormationsPageModule() {
    }
    FormationsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_formations_page__WEBPACK_IMPORTED_MODULE_5__["FormationsPage"]]
        })
    ], FormationsPageModule);
    return FormationsPageModule;
}());



/***/ }),

/***/ "./src/app/teacher/formations/formations.page.html":
/*!*********************************************************!*\
  !*** ./src/app/teacher/formations/formations.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>formations</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div *ngIf=\"teacher\">\r\n    <ion-card>\r\n      <ion-img src=\"{{ teacher.avatar }}\"></ion-img>\r\n    \r\n      <ion-card-content>\r\n        <ion-card-title>{{ teacher.fullName }}</ion-card-title>\r\n    \r\n        <p>Votre adresse électronique: {{ teacher.email }}</p>\r\n        <p>Votre date de naissance: {{ teacher.birthDate }}</p>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <div *ngIf=\"teacher.formations.length\">\r\n      <ion-card *ngFor=\"let formation of teacher.formations\">\r\n        <ion-img src=\"{{ formation.logo }}\"></ion-img>\r\n      \r\n        <ion-card-content>\r\n          <ion-card-title>{{ formation.name }}</ion-card-title>\r\n          <ion-list *ngIf=\"formation.modules.length\">\r\n            <ion-list-header>\r\n              Modules de la formations\r\n            </ion-list-header>\r\n            <ion-item *ngFor=\"let module of formation.modules\">\r\n              <ion-label>\r\n                {{ module.name }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n          <ion-list *ngIf=\"formation.students.length\">\r\n            <ion-list-header>\r\n              Etudiants de la formation: {{ formation.studentsCount }}\r\n            </ion-list-header>\r\n            <ion-item *ngFor=\"let student of formation.students\" (click)=\"showStudentDashBoard(student.id, formation.id)\">\r\n              <ion-icon name=\"arrow-forward\" item-end></ion-icon>\r\n              <ion-avatar slot=\"start\">\r\n                <img src=\"{{ student.avatar }}\">\r\n              </ion-avatar>\r\n              <ion-label>\r\n                <h2>nom: {{ student.fullName }}</h2>\r\n                <h3>mail: {{ student.email }}</h3>\r\n                <p>validations formateur: {{ student.progression.teacherValidations }}</p>\r\n                <p>validations étudiante: {{ student.progression.studentValidations }}</p>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/teacher/formations/formations.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/teacher/formations/formations.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/teacher/formations/formations.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/teacher/formations/formations.page.ts ***!
  \*******************************************************/
/*! exports provided: FormationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormationsPage", function() { return FormationsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_student__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/student */ "./src/app/models/student.ts");
/* harmony import */ var _models_teacher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/teacher */ "./src/app/models/teacher.ts");
/* harmony import */ var _models_formation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/formation */ "./src/app/models/formation.ts");
/* harmony import */ var _models_module_formation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/module-formation */ "./src/app/models/module-formation.ts");
/* harmony import */ var _models_progression_total__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/progression-total */ "./src/app/models/progression-total.ts");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
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


var FormationsPage = /** @class */ (function () {
    function FormationsPage(apiService, platform, authService, router) {
        this.apiService = apiService;
        this.platform = platform;
        this.authService = authService;
        this.router = router;
    }
    FormationsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () { return _this.setTeacher(); });
    };
    FormationsPage.prototype.setTeacher = function () {
        var _this = this;
        this.authService.getAuth().then(function (user) {
            // tslint:disable-next-line:max-line-length
            _this.teacher = new _models_teacher__WEBPACK_IMPORTED_MODULE_4__["Teacher"](null, user.lastname, user.firstname, user.avatar, user.email, user.gender, user.birthday_date, user.phone_number, user.token);
        }).then(function () { return _this.setFormations(); })
            .catch(function (e) { return console.log('Error setting Teacher: ', e); });
    };
    FormationsPage.prototype.setFormations = function () {
        var _this = this;
        this.apiService.get('teacher/myFormations').then(function (resp) {
            for (var i = 0; i < resp['data'].length; i++) {
                // tslint:disable-next-line:max-line-length
                _this.teacher.addFormation(new _models_formation__WEBPACK_IMPORTED_MODULE_5__["Formation"](resp['data'][i].id, resp['data'][i].name, resp['data'][i].logo, resp['data'][i].start_at, resp['data'][i].end_at, null, null, resp['data'][i].total_students));
                for (var j = 0; j < resp['data'][i].modules.length; j++) {
                    _this.teacher.formations[i].addModule(new _models_module_formation__WEBPACK_IMPORTED_MODULE_6__["ModuleFormation"](resp['data'][i].modules[j].id, resp['data'][i].modules[j].name));
                }
            }
        }).then(function () { return _this.setStudents(); })
            .catch(function (e) { return console.log('Error setting formations list: ', e); });
    };
    FormationsPage.prototype.setStudents = function () {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.apiService.get('getStudentsOfFormation/' + this_1.teacher.formations[i].id).then(function (resp) {
                for (var j = 0; j < resp.length; j++) {
                    // tslint:disable-next-line:max-line-length
                    _this.teacher.formations[i].addStudent(new _models_student__WEBPACK_IMPORTED_MODULE_3__["Student"](resp[j].id, resp[j].lastname, resp[j].firstname, resp[j].avatar, resp[j].email, resp[j].gender, resp[j].birthday_date, resp[j].phone_number, null, resp[j].student_id, _this.teacher.formations[i].id, new _models_progression_total__WEBPACK_IMPORTED_MODULE_7__["ProgressionTotal"](resp[j].progression.totalSkills, resp[j].progression.studentValidations, resp[j].progression.teacherValidations)));
                }
            }).catch(function (e) { return console.log('Error setting students Lists : ', e); });
        };
        var this_1 = this;
        for (var i = 0; i < this.teacher.formations.length; i++) {
            _loop_1(i);
        }
    };
    FormationsPage.prototype.showStudentDashBoard = function (studentId, formationId) {
        this.router.navigate(['/teacher/student-dashboard', { student: studentId, formation: formationId }]);
    };
    FormationsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formations',
            template: __webpack_require__(/*! ./formations.page.html */ "./src/app/teacher/formations/formations.page.html"),
            styles: [__webpack_require__(/*! ./formations.page.scss */ "./src/app/teacher/formations/formations.page.scss")],
        }),
        __metadata("design:paramtypes", [_service_api_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FormationsPage);
    return FormationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=teacher-formations-formations-module.js.map