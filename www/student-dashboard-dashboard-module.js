(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-dashboard-dashboard-module"],{

/***/ "./src/app/student/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/student/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/student/dashboard/dashboard.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4__["RoundProgressModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/student/dashboard/dashboard.page.html":
/*!*******************************************************!*\
  !*** ./src/app/student/dashboard/dashboard.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle>\r\n        <ion-button>\r\n          <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n        </ion-button>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    <ion-title text-center>Accueil</ion-title>\r\n    <div slot=\"end\">\r\n      <!-- <ion-label>Sélectionner une formation</ion-label> -->\r\n      <ion-select #formationSelect (ionChange)=\"showFormation(formationSelect.value)\" slot=\"end\"> \r\n        <ion-select-option *ngFor=\"let formation of student.formations\" [value]=\"formation\">{{ formation.name }}</ion-select-option>\r\n      </ion-select>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n<ion-grid>\r\n     <ion-row justify-content-start>\r\n      <ion-col size=\"4\">\r\n        <div>\r\n            <img src=\"{{ environment.appImageUrl }}{{ formation.logo }}\">\r\n        </div>\r\n      </ion-col>\r\n      <!-- <ion-col size=\"4\">\r\n        <div>\r\n          <h6>{{ formation.name }}</h6>\r\n        </div>\r\n        <div>\r\n          <h6>{{ formation.start_at | date: \"dd/MM/yyyy\" }} - {{ formation.end_at | date: \"dd/MM/yyyy\" }} </h6>\r\n        </div>\r\n      </ion-col> -->\r\n    </ion-row>\r\n    <!-- <ion-row>\r\n      <ion-col size=\"4\" offset=\"4\">\r\n        <div>\r\n          <ion-icon name=\"square\" class=\"purple\"></ion-icon>&nbsp;Etudiant\r\n        </div>\r\n      </ion-col>\r\n    \r\n      <ion-col size=\"4\">\r\n        <div>\r\n          <ion-icon name=\"square\" class=\"red\"></ion-icon>&nbsp;Formateurs\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>-->\r\n  </ion-grid>\r\n  <h2 text-uppercase text-center>Modules</h2>\r\n  <ion-slides *ngIf=\"formationSelected.modules.length\">\r\n    <ion-slide class=\"roundProgressBarWrapper slideImportant\" *ngFor=\"let module of formationSelected.modules\" (click)=\"showModule(module)\">\r\n      <ion-label class=\"moduleName\">{{ module.name }}</ion-label>\r\n      <round-progress class=\"roundProgressBarTeacher\" [current]=\"module.progression.teacherValidations * 100/module.progression.skillsCount\"\r\n        [radius]=\"45\" [color]=\"environment.progressColorTeacher\" [max]=\"environment.progressMax\" [stroke]=\"environment.progressStrokeTeacher\"></round-progress>\r\n\r\n      <round-progress class=\"roundProgressBarStudent\" [current]=\"module.progression.studentValidations * 100/module.progression.skillsCount\"\r\n        [radius]=\"45\" [color]=\"environment.progressColorStudent\" [max]=\"environment.progressMax\" [stroke]=\"environment.progressStrokeStudent\"></round-progress>\r\n\r\n      <div class=\"progressTeacherText red\">{{ (module.progression.teacherValidations * 100/module.progression.skillsCount) | number: '1.0-0' }}%</div>\r\n      <div class=\"progressStudentText purple\">{{ (module.progression.studentValidations * 100/module.progression.skillsCount) | number: '1.0-0' }}%</div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <div class=\"swiper-button-next\" (click)=\"slideNext()\"></div>\r\n  <div class=\"swiper-button-prev\" (click)=\"slidePrev()\"></div>\r\n\r\n  <ion-grid>\r\n    <ion-row justify-content-start>\r\n      <ion-col size=\"4\">\r\n        <ion-icon name=\"square\" class=\"purple\"></ion-icon>&nbsp;Etudiant\r\n      </ion-col>\r\n    \r\n      <ion-col size=\"4\">\r\n        <ion-icon name=\"square\" class=\"red\"></ion-icon>&nbsp;Formateurs\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <h2 text-uppercase text-center>Compétences</h2>\r\n  <div *ngIf=\"!moduleSelected\">\r\n    <ion-list *ngFor=\"let module of formationSelected.modules \">\r\n      <ion-card *ngFor=\"let skill of module.skills\" class=\"cardShadows\">\r\n        <h4 text-center>{{ module.name }}</h4>\r\n        <ion-item>\r\n          <ion-label text-wrap>{{ skill.name }}</ion-label>          \r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Validation de l'étudiant</ion-label>\r\n          <ion-checkbox color=\"student\" [(ngModel)]=\"skill.progression.studentValue\" (ionChange)=\"updateValidation(skill.progression.id, skill.progression.studentValue)\"></ion-checkbox>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Validation du formateur</ion-label>          \r\n          <ion-checkbox color=\"teacher\" [(ngModel)]=\"skill.progression.teacherValue\" disabled=\"true\"></ion-checkbox>\r\n        </ion-item>\r\n      </ion-card>\r\n    </ion-list>\r\n  </div>\r\n  <div *ngIf=\"moduleSelected\">\r\n    <ion-list *ngIf=\"moduleSelected.skills.length\">   \r\n      <ion-card *ngFor=\"let skill of moduleSelected.skills\" class=\"cardShadows\">\r\n        \r\n        <h4 text-center>{{ moduleSelected.name }}</h4>\r\n        <ion-item>\r\n          <ion-label text-wrap>{{ skill.name }}</ion-label>          \r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Validation de l'étudiant</ion-label>\r\n          <ion-checkbox color=\"student\" [(ngModel)]=\"skill.progression.studentValue\" (ionChange)=\"updateValidation(skill.progression.id, skill.progression.studentValue)\"></ion-checkbox>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Validation du formateur</ion-label>          \r\n          <ion-checkbox color=\"teacher\" [(ngModel)]=\"skill.progression.teacherValue\" disabled=\"true\"></ion-checkbox>\r\n        </ion-item>\r\n      </ion-card>\r\n    </ion-list>\r\n    <h6>Total de compétences: {{ moduleSelected.progression.skillsCount }}</h6>\r\n    <h6 text-left>Validé par formateur: {{ moduleSelected.progression.teacherValidations }} - Validé par étudiant: {{ moduleSelected.progression.studentValidations }}</h6>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/student/dashboard/dashboard.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/student/dashboard/dashboard.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* barre de progression */\n.roundProgressBarWrapper {\n  position: relative;\n  cursor: pointer;\n  width: 140px;\n  height: 190px;\n  float: left;\n  margin: 20px 20px 15px; }\n.roundProgressBarWrapper.responsive {\n  width: 80%;\n  min-height: 280px;\n  float: none;\n  margin: 20px auto; }\n.roundProgressBarWrapper circle {\n  stroke: #DEDDFF !important; }\n.roundProgressBar,\n.roundProgressBarTeacher,\n.roundProgressBarStudent,\n.progressTeacherText,\n.progressStudentText,\n.moduleName {\n  position: absolute !important; }\n.roundProgressBarTeacher {\n  width: 120px !important;\n  height: 120px !important;\n  left: 11px;\n  top: 0px; }\n.roundProgressBarStudent {\n  width: 95px !important;\n  height: 95px !important;\n  left: 23px;\n  top: 12px; }\n.progressTeacherText {\n  top: 40px;\n  width: 140px;\n  text-align: center;\n  font-size: 20px;\n  left: 0px; }\n.progressStudentText {\n  top: 60px;\n  width: 140px;\n  text-align: center;\n  font-size: 20px;\n  left: 0px; }\n.moduleName {\n  top: 135px;\n  width: 140px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n  white-space: normal;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n.roundProgressBarWrapper.slideImportant {\n  width: 150px !important; }\nion-slides {\n  display: block;\n  width: 100%;\n  height: 35%; }\n.swiper-button-next {\n  top: 110px;\n  margin-top: 0; }\n.swiper-button-prev {\n  top: 110px;\n  margin-top: 0; }\n.red {\n  color: #e689b8; }\n.purple {\n  color: #a3a1fb; }\nion-icon > .red {\n  display: inline-block;\n  font: 14px/1 FontAwesome;\n  font-size: 14px;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n.cardShadows {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n.icon {\n  font-size: 20px; }\n"

/***/ }),

/***/ "./src/app/student/dashboard/dashboard.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/student/dashboard/dashboard.page.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _models_skill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/skill */ "./src/app/models/skill.ts");
/* harmony import */ var _models_student__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/student */ "./src/app/models/student.ts");
/* harmony import */ var _models_formation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/formation */ "./src/app/models/formation.ts");
/* harmony import */ var _models_module_formation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/module-formation */ "./src/app/models/module-formation.ts");
/* harmony import */ var _models_progression_total__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/progression-total */ "./src/app/models/progression-total.ts");
/* harmony import */ var _models_progression_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/progression-details */ "./src/app/models/progression-details.ts");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
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



var DashboardPage = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function DashboardPage(platform, authService, apiService, menuCtrl) {
        this.platform = platform;
        this.authService = authService;
        this.apiService = apiService;
        this.menuCtrl = menuCtrl;
        this.environment = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"];
    }
    DashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () { return _this.setStudent(); });
    };
    DashboardPage.prototype.setStudent = function () {
        var _this = this;
        this.authService.getAuth().then(function (user) {
            // tslint:disable-next-line:max-line-length
            _this.student = new _models_student__WEBPACK_IMPORTED_MODULE_3__["Student"](null, user.lastname, user.firstname, user.avatar, user.email, user.gender, user.birthday_date, user.phone_number, user.token, user.student_id, user.formation_id);
        }).then(function () { return _this.setFormations(); })
            .catch(function (e) { return console.log('Error setting student: ', e); });
    };
    DashboardPage.prototype.setFormations = function () {
        var _this = this;
        this.apiService.get('studentsFormation').then(function (resp) {
            for (var i = 0; i < resp.length; i++) {
                // tslint:disable-next-line:max-line-length
                _this.student.addFormation(new _models_formation__WEBPACK_IMPORTED_MODULE_4__["Formation"](resp[i].id, resp[i].name, resp[i].logo, resp[i].start_at, resp[i].end_at, resp[i].created_at, resp[i].updated_at, resp[i].total_students, resp[i].total_teachers, resp[i].total_modules, resp[i].total_skills));
            }
        }).then(function () { return _this.showFormation(); })
            .catch(function (e) { return console.log('Error setting formations: ', e); });
    };
    DashboardPage.prototype.setModules = function (formationId) {
        var _this = this;
        this.apiService.get('getFormationForAdmin/' + formationId).then(function (resp) {
            var currentModule;
            for (var i = 0; i < resp.length; i++) {
                // tslint:disable-next-line:max-line-length
                currentModule = new _models_module_formation__WEBPACK_IMPORTED_MODULE_5__["ModuleFormation"](resp[i].module.id, resp[i].module.name, new _models_progression_total__WEBPACK_IMPORTED_MODULE_6__["ProgressionTotal"](resp[i].module.totalSkills, resp[i].module.progression.student, resp[i].module.progression.teacher));
                for (var j = 0; j < resp[i].module.skills.length; j++) {
                    // tslint:disable-next-line:max-line-length
                    currentModule.addSkill(new _models_skill__WEBPACK_IMPORTED_MODULE_2__["Skill"](resp[i].module.skills[j].id, resp[i].module.skills[j].name, new _models_progression_details__WEBPACK_IMPORTED_MODULE_7__["ProgressionDetails"](resp[i].module.skills[j].progression.student_progression_id, resp[i].module.skills[j].progression.student_validation, resp[i].module.skills[j].progression.student_validation_date, resp[i].module.skills[j].progression.teacher_validation, resp[i].module.skills[j].progression.teacher_validation_date)));
                }
                _this.formationSelected.addModule(currentModule);
            }
        }).catch(function (e) { return console.log('Error setting modules: ', e); });
    };
    DashboardPage.prototype.showFormation = function (formation) {
        var _this = this;
        if (!formation) {
            this.setFormationSelected().then(function (resp) { return _this.setModules(resp.id); })
                .catch(function (e) { return console.log('Error setting Formation selected: ', e); });
        }
        else {
            this.setFormationSelected(formation).then(function (resp) { return _this.setModules(resp.id); })
                .catch(function (e) { return console.log('Error setting formation selected: ', e); });
        }
    };
    DashboardPage.prototype.setFormationSelected = function (formation) {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.formationSelected = (!formation) ? _this.student.getFormationById(_this.student.currentFormationId) : formation);
        });
    };
    DashboardPage.prototype.showModule = function (module) {
        this.moduleSelected = module;
    };
    DashboardPage.prototype.updateValidation = function (progressionId, validation) {
        this.apiService.put('progression/updateStudentValidation', { progression_id: progressionId, student_validation: validation })
            .then(function (resp) { return console.log('update validation: ', resp); })
            .catch(function (e) { return console.log('Error updating validation: ', e); });
    };
    DashboardPage.prototype.filterByModule = function (moduleId) {
        var _this = this;
        this.moduleSelected = this.formationSelected.modules[this.formationSelected.modules.findIndex(function (module, index, tab) {
            for (var i = void 0; i < _this.formationSelected.modules.length; i++) {
                return module['id'] === moduleId;
            }
            console.log('allSkills: ', _this.formationSelected.modules);
        })];
    };
    DashboardPage.prototype.goToSlide = function () {
        this.slides.slideTo(1);
    };
    DashboardPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
        var reroll = this.slides.isEnd();
        if (reroll) {
            this.slides.slidePrev(5, true);
        }
    };
    DashboardPage.prototype.slideNext = function () {
        this.slides.slideNext();
    };
    DashboardPage.prototype.slidePrev = function () {
        this.slides.slidePrev();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slides"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slides"])
    ], DashboardPage.prototype, "slides", void 0);
    DashboardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.page.html */ "./src/app/student/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/student/dashboard/dashboard.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _service_api_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'http://skillstracking.motjo.io/api/',
    appUrl: 'http://skillstracking.motjo.io/',
    appImageUrl: 'http://skillstracking.motjo.io/uploads/images/',
    appLogoUrl: 'http://skillstracking.motjo.io/uploads/logos/',
    appCalendarUrl: 'http://skillstracking.motjo.io/uploads/calendars/',
    tableProgressRadiusTeacher: 30,
    tableProgressRadiusStudent: 24,
    tableProgressColorTeacher: '#E689B8',
    tableProgressColorStudent: '#A3A1FB',
    tableProgressStrokeTeacher: 4,
    tableProgressStrokeStudent: 4,
    progressRadiusTeacher: 70,
    progressRadiusStudent: 56,
    progressColorTeacher: '#E689B8',
    progressColorStudent: '#A3A1FB',
    progressStrokeTeacher: 7,
    progressStrokeStudent: 7,
    progressMax: 100
};


/***/ })

}]);
//# sourceMappingURL=student-dashboard-dashboard-module.js.map