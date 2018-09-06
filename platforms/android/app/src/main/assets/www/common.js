(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-13543983.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-13543983.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dismissOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTopOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeLastOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BACKDROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return dismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return eventMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return present; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var lastId = 1;
function createOverlay(e, t) { Object.assign(e, t), e.overlayId = lastId++; var n = e.ownerDocument; return (n.querySelector("ion-app") || n.body).appendChild(e), e.componentOnReady(); }
function dismissOverlay(e, t, n, i) { i = i >= 0 ? i : getHighestId(n); var o = n.get(i); return o ? o.dismiss(e, t) : Promise.reject("overlay does not exist"); }
function getTopOverlay(e) { return e.get(getHighestId(e)); }
function getHighestId(e) { var t = -1; return e.forEach(function (e, n) { n > t && (t = n); }), t; }
function removeLastOverlay(e) { var t = getTopOverlay(e); return t ? t.dismiss() : Promise.resolve(); }
function present(e, t, n, i, o) {
    return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (e.presented)
                    return [2 /*return*/];
                e.presented = !0, e.willPresent.emit();
                a = e.enterAnimation ? e.enterAnimation : e.config.get(t, "ios" === e.mode ? n : i);
                return [4 /*yield*/, overlayAnimation(e, a, e.el, o)];
            case 1:
                _a.sent(), e.didPresent.emit();
                return [2 /*return*/];
        }
    }); });
}
function dismiss(e, t, n, i, o, a, s) {
    return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!e.presented)
                    return [2 /*return*/];
                e.presented = !1, e.willDismiss.emit({ data: t, role: n });
                r = e.leaveAnimation ? e.leaveAnimation : e.config.get(i, "ios" === e.mode ? o : a);
                return [4 /*yield*/, overlayAnimation(e, r, e.el, s)];
            case 1:
                _a.sent(), e.didDismiss.emit({ data: t, role: n }), e.el.remove();
                return [2 /*return*/];
        }
    }); });
}
function overlayAnimation(e, t, n, i) {
    return __awaiter(this, void 0, void 0, function () { var e_1, o, a, _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (e.keyboardClose) {
                    e_1 = n.ownerDocument.activeElement;
                    e_1 && e_1.blur();
                }
                e.animation && (e.animation.destroy(), e.animation = void 0);
                o = n.shadowRoot || e.el;
                _a = e;
                return [4 /*yield*/, e.animationCtrl.create(t, o, i)];
            case 1:
                a = _a.animation = _b.sent();
                e.animation = a, e.willAnimate || a.duration(0);
                return [4 /*yield*/, a.playAsync()];
            case 2:
                _b.sent(), a.destroy(), e.animation = void 0;
                return [2 /*return*/];
        }
    }); });
}
function eventMethod(e, t, n) { var i; var o = new Promise(function (e) { return i = e; }); return onceEvent(e, t, function (e) { var t = e.detail; n && n(t), i(t); }), o; }
function onceEvent(e, t, n) { var i = function (o) { e.removeEventListener(t, i), n(o); }; e.addEventListener(t, i); }
function isCancel(e) { return "cancel" === e || e === BACKDROP; }
var BACKDROP = "backdrop";



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-8ef9ea06.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-8ef9ea06.js ***!
  \*****************************************************************/
/*! exports provided: a, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SIZE_TO_MEDIA; });
var SIZE_TO_MEDIA = { xs: "(min-width: 0px)", sm: "(min-width: 576px)", md: "(min-width: 768px)", lg: "(min-width: 992px)", xl: "(min-width: 1200px)" };
function isMatch(i) { if (!i)
    return !0; var t = SIZE_TO_MEDIA[i]; return !(!t || !matchMedia(t)) && matchMedia(t).matches; }



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-bdcd6d7d.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-bdcd6d7d.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isHybrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isStandaloneMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return needInputShims; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isCordova; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isElectron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isIpad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isIphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isPhablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return matchMedia$1; });
function isIpad(i) { return testUserAgent(i, /iPad/i); }
function isIphone(i) { return testUserAgent(i, /iPhone/i); }
function isIOS(i) { return testUserAgent(i, /iPad|iPhone|iPod/i); }
function isAndroid(i) { return !isIOS(i); }
function isPhablet(i) { var n = i.innerWidth, t = i.innerHeight, e = Math.min(n, t), a = Math.max(n, t); return e > 390 && e < 520 && a > 620 && a < 800; }
function isTablet(i) { var n = i.innerWidth, t = i.innerHeight, e = Math.min(n, t), a = Math.max(n, t); return e > 460 && e < 820 && a > 780 && a < 1400; }
function isDevice(i) { return matchMedia$1(i, "(any-pointer:coarse)"); }
function isHybrid(i) { return isCordova(i) || isCapacitorNative(i); }
function isCordova(i) { var n = i; return !!(n.cordova || n.phonegap || n.PhoneGap); }
function isCapacitorNative(i) { var n = i.Capacitor; return !(!n || !n.isNative); }
function isElectron(i) { return testUserAgent(i, /electron/); }
function isStandaloneMode(i) { return i.matchMedia("(display-mode: standalone)").matches; }
function needInputShims(i) { return isIOS(i) && isDevice(i); }
function testUserAgent(i, n) { return n.test(i.navigator.userAgent); }
function matchMedia$1(i, n, t) {
    if (t === void 0) { t = !1; }
    return i.matchMedia ? i.matchMedia(n).matches : t;
}



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-d3dac993.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-d3dac993.js ***!
  \*****************************************************************/
/*! exports provided: a, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detachComponent; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function attachComponent(e, n, t, o, r) {
    return __awaiter(this, void 0, void 0, function () { var a, _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (e)
                    return [2 /*return*/, e.attachViewToDom(n, t, r, o)];
                if ("string" != typeof t && !(t instanceof HTMLElement))
                    throw new Error("framework delegate is missing");
                a = "string" == typeof t ? n.ownerDocument.createElement(t) : t;
                o && o.forEach(function (e) { return a.classList.add(e); }), r && Object.assign(a, r), n.appendChild(a);
                _a = a.componentOnReady;
                if (!_a) return [3 /*break*/, 2];
                return [4 /*yield*/, a.componentOnReady()];
            case 1:
                _a = (_b.sent());
                _b.label = 2;
            case 2: return [2 /*return*/, (_a, a)];
        }
    }); });
}
function detachComponent(e, n) { if (n) {
    if (e) {
        var t = n.parentElement;
        return e.removeViewFromDom(t, n);
    }
    n.remove();
} return Promise.resolve(); }



/***/ }),

/***/ "./src/app/models/comment.ts":
/*!***********************************!*\
  !*** ./src/app/models/comment.ts ***!
  \***********************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment(id, text, author, createdAt) {
        this.id = id;
        this.text = text;
        this.author = author;
        this.createdAt = createdAt;
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/models/formation.ts":
/*!*************************************!*\
  !*** ./src/app/models/formation.ts ***!
  \*************************************/
/*! exports provided: Formation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formation", function() { return Formation; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
// Env

var _APP_LOGO_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appLogoUrl;
var Formation = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function Formation(id, name, logo, startAt, endAt, createdAt, updatedAt, studentsCount, teachersCount, modulesCount, skillsCount) {
        this.students = [];
        this.modules = [];
        this.reports = [];
        this.id = id;
        this.name = name;
        this.logo = _APP_LOGO_URL + logo;
        this.startAt = startAt;
        this.endAt = endAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.studentsCount = studentsCount;
        this.teachersCount = teachersCount;
        this.modulesCount = modulesCount;
        this.skillsCount = skillsCount;
    }
    Formation.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Formation.prototype.getStudentById = function (studentId) {
        return this.students[this.students.findIndex(function (student) { return student.id === studentId; })];
    };
    Formation.prototype.addModule = function (module) {
        this.modules.push(module);
    };
    Formation.prototype.getModuleById = function (moduleId) {
        return this.modules[this.modules.findIndex(function (module) { return module.id === moduleId; })];
    };
    Formation.prototype.addReport = function (report) {
        this.reports.push(report);
    };
    Formation.prototype.getReportById = function (reportId) {
        return this.reports[this.reports.findIndex(function (report) { return report.id === reportId; })];
    };
    return Formation;
}());



/***/ }),

/***/ "./src/app/models/module-formation.ts":
/*!********************************************!*\
  !*** ./src/app/models/module-formation.ts ***!
  \********************************************/
/*! exports provided: ModuleFormation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleFormation", function() { return ModuleFormation; });
var ModuleFormation = /** @class */ (function () {
    function ModuleFormation(id, name, progression) {
        this.skills = [];
        this.id = id;
        this.name = name;
        this.progression = progression;
    }
    ModuleFormation.prototype.addSkill = function (skill) {
        this.skills.push(skill);
    };
    ModuleFormation.prototype.getSkillById = function (skillId) {
        return this.skills[this.skills.findIndex(function (skill) { return skill.id === skillId; })];
    };
    return ModuleFormation;
}());



/***/ }),

/***/ "./src/app/models/planning.ts":
/*!************************************!*\
  !*** ./src/app/models/planning.ts ***!
  \************************************/
/*! exports provided: Planning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Planning", function() { return Planning; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
// Env

var _APP_CALENDAR_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appCalendarUrl;
var Planning = /** @class */ (function () {
    function Planning(id, name, url, formationId, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.url = _APP_CALENDAR_URL + url;
        this.formationId = formationId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    return Planning;
}());



/***/ }),

/***/ "./src/app/models/progression-details.ts":
/*!***********************************************!*\
  !*** ./src/app/models/progression-details.ts ***!
  \***********************************************/
/*! exports provided: ProgressionDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressionDetails", function() { return ProgressionDetails; });
var ProgressionDetails = /** @class */ (function () {
    function ProgressionDetails(id, studentValue, studentValidationDate, teacherValue, teacherValidationDate) {
        this.id = id;
        this.studentValue = studentValue;
        this.studentValidationDate = studentValidationDate;
        this.teacherValue = teacherValue;
        this.teacherValidationDate = teacherValidationDate;
    }
    return ProgressionDetails;
}());



/***/ }),

/***/ "./src/app/models/progression-total.ts":
/*!*********************************************!*\
  !*** ./src/app/models/progression-total.ts ***!
  \*********************************************/
/*! exports provided: ProgressionTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressionTotal", function() { return ProgressionTotal; });
var ProgressionTotal = /** @class */ (function () {
    function ProgressionTotal(skillsCount, studentValidations, teacherValidations) {
        this.skillsCount = skillsCount;
        this.studentValidations = studentValidations;
        this.teacherValidations = teacherValidations;
    }
    return ProgressionTotal;
}());



/***/ }),

/***/ "./src/app/models/report.ts":
/*!**********************************!*\
  !*** ./src/app/models/report.ts ***!
  \**********************************/
/*! exports provided: Report */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return Report; });
var Report = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function Report(id, title, date, author, text, rate, isDaily, createdAt, updatedAt) {
        this.comments = [];
        this.id = id;
        this.title = title;
        this.date = date;
        this.author = author;
        this.text = text;
        this.rate = rate;
        this.isDaily = isDaily;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    Report.prototype.addComment = function (comment) {
        this.comments.push(comment);
    };
    return Report;
}());



/***/ }),

/***/ "./src/app/models/skill.ts":
/*!*********************************!*\
  !*** ./src/app/models/skill.ts ***!
  \*********************************/
/*! exports provided: Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
var Skill = /** @class */ (function () {
    function Skill(id, name, progression, teacher) {
        this.id = id;
        this.name = name;
        this.progression = progression;
        this.teacher = teacher;
    }
    return Skill;
}());



/***/ }),

/***/ "./src/app/models/student.ts":
/*!***********************************!*\
  !*** ./src/app/models/student.ts ***!
  \***********************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/models/user.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Models

// Env

var _APP_IMG_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appImageUrl;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // tslint:disable-next-line:max-line-length
    function Student(id, lastName, firstName, avatar, email, gender, birthDate, phone, token, studentId, currentFormationId, progression) {
        var _this = _super.call(this) || this;
        _this.formations = [];
        _this.id = id;
        _this.lastName = lastName;
        _this.firstName = firstName;
        _this.fullName = lastName + ' ' + firstName;
        _this.avatar = _APP_IMG_URL + avatar;
        _this.email = email;
        _this.gender = gender;
        _this.birthDate = birthDate;
        _this.phone = phone;
        _this.token = token;
        _this.userTypeId = 3;
        _this.studentId = studentId;
        _this.currentFormationId = currentFormationId;
        _this.progression = progression;
        return _this;
    }
    Student.prototype.getFormationById = function (formationId) {
        return this.formations[this.formations.findIndex(function (formation) { return formation.id === formationId; })];
    };
    Student.prototype.addFormation = function (formation) {
        this.formations.push(formation);
    };
    return Student;
}(_user__WEBPACK_IMPORTED_MODULE_0__["User"]));



/***/ }),

/***/ "./src/app/models/teacher.ts":
/*!***********************************!*\
  !*** ./src/app/models/teacher.ts ***!
  \***********************************/
/*! exports provided: Teacher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teacher", function() { return Teacher; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/models/user.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Models

// Env

var _APP_IMG_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appImageUrl;
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    // tslint:disable-next-line:max-line-length
    function Teacher(id, lastName, firstName, avatar, email, gender, birthDate, phone, token) {
        var _this = _super.call(this) || this;
        _this.formations = [];
        _this.id = id;
        _this.lastName = lastName;
        _this.firstName = firstName;
        _this.fullName = lastName + ' ' + firstName;
        _this.avatar = _APP_IMG_URL + avatar;
        _this.email = email;
        _this.gender = gender;
        _this.birthDate = birthDate;
        _this.phone = phone;
        _this.token = token;
        _this.userTypeId = 2;
        return _this;
    }
    Teacher.prototype.addFormation = function (formation) {
        this.formations.push(formation);
    };
    Teacher.prototype.getFormationById = function (formationId) {
        return this.formations[this.formations.findIndex(function (formation) { return formation.id === formationId; })];
    };
    return Teacher;
}(_user__WEBPACK_IMPORTED_MODULE_0__["User"]));



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/service/api/api.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/api/api.service.ts ***!
  \********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
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

// Env

var _API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
var ApiService = /** @class */ (function () {
    function ApiService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    ApiService.prototype.setHeaders = function () {
        var _this = this;
        return this.storage.getItem('user').then(function (resp) {
            _this.options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + resp.token,
                    'Content-Type': 'application/json'
                })
            };
        }).catch(function (e) { return console.log('Error setting httpOptions: ', e); });
    };
    ApiService.prototype.get = function (url) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.setHeaders().then(function () {
                _this.http.get(_API_URL + url, _this.options)
                    .subscribe(function (resp) {
                    console.log('data get: ', resp);
                    resolve(resp);
                }, function (e) { return console.log(e); });
            }).catch(function (e) { return console.log('Error "get" data: ', e); });
        });
    };
    ApiService.prototype.put = function (url, data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.setHeaders().then(function () {
                _this.http.put(_API_URL + url, data, _this.options)
                    .subscribe(function (resp) { return resolve(resp); }, function (e) { return console.log(e); });
            }).catch(function (e) { return console.log('Error "put" data: ', e); });
        });
    };
    ApiService.prototype.post = function (url, data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.setHeaders().then(function () {
                _this.http.post(_API_URL + url, data, _this.options)
                    .subscribe(function (resp) { return resolve(resp); }, function (e) { return console.log(e); });
            }).catch(function (e) { return console.log('Error "post" data: ', e); });
        });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"]])
    ], ApiService);
    return ApiService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map