(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teacher-student-dashboard-student-dashboard-module"],{

/***/ "./src/app/teacher/student-dashboard/student-dashboard.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/teacher/student-dashboard/student-dashboard.module.ts ***!
  \***********************************************************************/
/*! exports provided: StudentDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDashboardPageModule", function() { return StudentDashboardPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _student_dashboard_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-dashboard.page */ "./src/app/teacher/student-dashboard/student-dashboard.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _student_dashboard_page__WEBPACK_IMPORTED_MODULE_5__["StudentDashboardPage"]
    }
];
var StudentDashboardPageModule = /** @class */ (function () {
    function StudentDashboardPageModule() {
    }
    StudentDashboardPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_student_dashboard_page__WEBPACK_IMPORTED_MODULE_5__["StudentDashboardPage"]]
        })
    ], StudentDashboardPageModule);
    return StudentDashboardPageModule;
}());



/***/ }),

/***/ "./src/app/teacher/student-dashboard/student-dashboard.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/teacher/student-dashboard/student-dashboard.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>student-dashboard</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-card *ngIf=\"student\">\r\n    <ion-img src=\"{{ student.avatar }}\"></ion-img>\r\n  \r\n    <ion-card-content>\r\n      <ion-card-title>{{ student.fullName }}</ion-card-title>\r\n  \r\n      <ion-list *ngIf=\"modules.length\">\r\n        <ion-list-header>\r\n          Module de l'étudiant\r\n        </ion-list-header>\r\n        <ion-item *ngFor=\"let module of modules\" (click)=\"ShowModule(module)\">\r\n          <ion-icon name=\"arrow-forward\" item-end></ion-icon>\r\n          <ion-label>\r\n            {{ module.name }}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <div *ngIf=\"moduleSelected\">\r\n    <h3>Module: {{ moduleSelected.name }}</h3>\r\n    <h6>Compétences: {{ moduleSelected.progression.skillsCount }}</h6>\r\n    <h6>Validations du formateur: {{ moduleSelected.progression.teacherValidations }}</h6>\r\n    <h6>Validations de l'étudiant: {{ moduleSelected.progression.studentValidations }}</h6>\r\n    <div *ngIf=\"moduleSelected.skills.length\">      \r\n      <ion-list *ngFor=\"let skill of moduleSelected.skills\">\r\n        <ion-item>\r\n          <ion-label>Compétences: {{ skill.name }}</ion-label>          \r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Formateur: {{ skill.teacher.fullName }}</ion-label>          \r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Validation du formateur</ion-label>\r\n          <ion-checkbox color=\"light\" [(ngModel)]=\"skill.progression.teacherValue\" (ionChange)=\"updateValidation(skill.progression.id, skill.progression.teacherValue)\"></ion-checkbox>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Validation de l'étudiant</ion-label>\r\n          <ion-checkbox color=\"light\" [(ngModel)]=\"skill.progression.studentValue\" disabled=\"true\"></ion-checkbox>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </div>  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/teacher/student-dashboard/student-dashboard.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/teacher/student-dashboard/student-dashboard.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/teacher/student-dashboard/student-dashboard.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/teacher/student-dashboard/student-dashboard.page.ts ***!
  \*********************************************************************/
/*! exports provided: StudentDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDashboardPage", function() { return StudentDashboardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _models_skill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/skill */ "./src/app/models/skill.ts");
/* harmony import */ var _models_student__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/student */ "./src/app/models/student.ts");
/* harmony import */ var _models_teacher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/teacher */ "./src/app/models/teacher.ts");
/* harmony import */ var _models_module_formation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/module-formation */ "./src/app/models/module-formation.ts");
/* harmony import */ var _models_progression_total__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/progression-total */ "./src/app/models/progression-total.ts");
/* harmony import */ var _models_progression_details__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/progression-details */ "./src/app/models/progression-details.ts");
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

// Models






var StudentDashboardPage = /** @class */ (function () {
    function StudentDashboardPage(platform, route, apiService) {
        this.platform = platform;
        this.route = route;
        this.apiService = apiService;
        this.modules = [];
    }
    StudentDashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        // tslint:disable-next-line:max-line-length
        this.platform.ready().then(function () { return _this.setStudent(_this.route.snapshot.paramMap.get('student'), _this.route.snapshot.paramMap.get('formation')); });
    };
    StudentDashboardPage.prototype.setStudent = function (studentId, formationId) {
        var _this = this;
        this.apiService.get('getStudentDatas/' + studentId + '/ofFormation/' + formationId).then(function (resp) {
            // tslint:disable-next-line:max-line-length
            _this.student = new _models_student__WEBPACK_IMPORTED_MODULE_5__["Student"](resp['student'].user_id, resp['student'].user_lastname, resp['student'].user_firstname, resp['student'].user_avatar);
            _this.modules = [];
            var currentModule;
            for (var i = 0; i < resp['modules'].length; i++) {
                // tslint:disable-next-line:max-line-length
                currentModule = new _models_module_formation__WEBPACK_IMPORTED_MODULE_7__["ModuleFormation"](resp['modules'][i].id, resp['modules'][i].name, new _models_progression_total__WEBPACK_IMPORTED_MODULE_8__["ProgressionTotal"](resp['modules'][i].totalSkills, resp['modules'][i].progression.student, resp['modules'][i].progression.teacher));
                for (var j = 0; j < resp['modules'][i].skills.length; j++) {
                    // tslint:disable-next-line:max-line-length
                    currentModule.addSkill(new _models_skill__WEBPACK_IMPORTED_MODULE_4__["Skill"](resp['modules'][i].skills[j].id, resp['modules'][i].skills[j].name, new _models_progression_details__WEBPACK_IMPORTED_MODULE_9__["ProgressionDetails"](resp['modules'][i].skills[j].progression.student_progression_id, resp['modules'][i].skills[j].progression.student_validation, resp['modules'][i].skills[j].progression.student_validation_date, resp['modules'][i].skills[j].progression.teacher_validation, resp['modules'][i].skills[j].progression.teacher_validation_date), new _models_teacher__WEBPACK_IMPORTED_MODULE_6__["Teacher"](null, resp['modules'][i].skills[j].teacher.lastname, resp['modules'][i].skills[j].teacher.firstname)));
                }
                _this.modules.push(currentModule);
            }
        }).catch(function (e) { return console.log('Error getting student data: ', e); });
    };
    StudentDashboardPage.prototype.ShowModule = function (module) {
        this.moduleSelected = module;
    };
    StudentDashboardPage.prototype.updateValidation = function (progressionId, validation) {
        this.apiService.put('progression/updateTeacherValidation', { progression_id: progressionId, teacher_validation: validation })
            .then(function (resp) { return console.log('update validation: ', resp); })
            .catch(function (e) { return console.log('Error updating validation: ', e); });
    };
    StudentDashboardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-dashboard',
            template: __webpack_require__(/*! ./student-dashboard.page.html */ "./src/app/teacher/student-dashboard/student-dashboard.page.html"),
            styles: [__webpack_require__(/*! ./student-dashboard.page.scss */ "./src/app/teacher/student-dashboard/student-dashboard.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], StudentDashboardPage);
    return StudentDashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=teacher-student-dashboard-student-dashboard-module.js.map