(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/Services/Authentification/authentification.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Services/Authentification/authentification.service.ts ***!
  \***********************************************************************/
/*! exports provided: AuthentificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationService", function() { return AuthentificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var AuthentificationService = /** @class */ (function () {
    function AuthentificationService(http) {
        this.http = http;
        this.ROOT_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    AuthentificationService.prototype.loginAll = function (username, password) {
        var data = {
            email: username,
            password: password,
        };
        return this.http.post(this.ROOT_URL + '/login', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res;
        }));
    };
    AuthentificationService.prototype.login = function (username, password) {
        var data = {
            email: username,
            password: password,
        };
        return this.http.post(this.ROOT_URL + '/admins/login', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res;
        }));
    };
    AuthentificationService.prototype.logout = function () {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        this.http.delete(this.ROOT_URL + '/admins/logout', {
            headers: header
        }).subscribe(function (res) {
            console.log(res);
            window.localStorage.setItem("accesToken", "");
            window.localStorage.setItem("isSuperAdmin", "");
        }, function (err) {
            console.log(err);
        });
    };
    AuthentificationService.prototype.userLogin = function (username, password) {
        var data = {
            email: username,
            password: password,
        };
        return this.http.post(this.ROOT_URL + '/manufacturers/login', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res;
        }));
    };
    AuthentificationService.prototype.userLogout = function () {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        this.http.delete(this.ROOT_URL + '/manufacturers/logout', {
            headers: header
        }).subscribe(function (res) {
            console.log(res);
            window.localStorage.setItem("accesToken", "");
            window.localStorage.setItem("isAdmin", "");
            window.localStorage.setItem("manufacturer", "");
        }, function (err) {
            console.log(err);
        });
    };
    AuthentificationService.prototype.showMe = function () {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        return this.http.get(this.ROOT_URL + '/me', { headers: header }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res;
        }));
    };
    AuthentificationService.prototype.updateMe = function (email, password) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        var body = { email: email, password: password };
        return this.http.put(this.ROOT_URL + '/admins/me', body, { headers: header }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AuthentificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthentificationService);
    return AuthentificationService;
}());



/***/ }),

/***/ "./src/app/layout/profile/profile-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/profile/profile-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/layout/profile/profile.component.ts");




var routes = [
    {
        path: '', component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/profile/profile.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/profile/profile.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\" >\r\n  <app-page-header [heading]=\"infoPage.title\" [icon]=\"infoPage.icon\"></app-page-header>\r\n  <div class=\"d-flex justify-content-center\">\r\n      <mat-spinner class=\"mt-5\"  [hidden]=\"!loading\"></mat-spinner>\r\n  </div>\r\n  <div class=\"\" [hidden]=\"loading\">\r\n    <app-notification [error] = \"error\"></app-notification>\r\n    <mat-card class=\"example-card mb-5\" >\r\n      <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>{{user.firstName}} {{user.lastName}}</mat-card-title>\r\n        <mat-card-subtitle>{{user.type}}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <form [formGroup]=\"userFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"d-flex flex-column\">\r\n            <h5>Informations personnelles :</h5>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6 d-flex flex-column\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Nom\"  formControlName=\"username\" [value]=user.firstName/>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-sm-6 d-flex flex-column\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Prénom\" formControlName=\"usersurname\" [value]=user.lastName/>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6 d-flex flex-column\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Email\" type=\"email\" formControlName=\"email\" [value] = user.email />\r\n                  <mat-error *ngFor=\"let validation of account_validation_messages.email\">\r\n                  \t<mat-error class=\"error-message\" *ngIf=\"userFormGroup.get('email').hasError(validation.type) && (userFormGroup.get('email').dirty || userFormGroup.get('email').touched)\">{{validation.message}}\r\n                  \t</mat-error>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-sm-6 d-flex flex-column\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Phone\" formControlName=\"phone\" [value]=user.phone />\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Address\" formControlName=\"address\" [value]=user.address />\r\n            </mat-form-field>\r\n            <br>\r\n            <h5>Choisir un mot de passe :</h5>\r\n            <div class=\"row\" [formGroup] = \"matching_passwords\">\r\n              <div class=\"col-sm-6 d-flex flex-column\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Mot de passe\" type=\"password\" formControlName=\"password\"/>\r\n                  <mat-error *ngFor=\"let validation of account_validation_messages.password\">\r\n                  \t<mat-error class=\"error-message\" *ngIf=\"matching_passwords.get('password').hasError(validation.type) && (matching_passwords.get('password').dirty || matching_passwords.get('password').touched)\">{{validation.message}}\r\n                  \t</mat-error>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-sm-6 d-flex flex-column\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Confirmer le mot de passe\" type=\"password\" formControlName=\"confirmPassword\"/>\r\n                  <mat-error *ngFor=\"let validation of account_validation_messages.confirm_password\">\r\n                    <mat-error class=\"error-message\" *ngIf=\"matching_passwords.get('confirmPassword').hasError(validation.type) && (matching_passwords.get('confirmPassword').dirty || matching_passwords.get('confirmPassword').touched)\">{{validation.message}}</mat-error>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n                <p class=\"error-message mat-error mat-form-field-subscript-wrapper mat-form-field\" *ngIf=\"matching_passwords.errors?.areEqual\">Password does not match</p>\r\n              </div>\r\n            </div>\r\n            <br>\r\n\r\n          </div>\r\n          <div class=\"d-flex flex-row-reverse\">\r\n            <button mat-flat-button color=\"primary\" class=\"btn-search\" type=\"submit\">Enregistrer<mat-icon>save</mat-icon></button>\r\n          </div>\r\n\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/profile/profile.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/profile/profile.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-header-image {\n  background-image: url(\"https://lenymotor.com/images/icon/admin.png\");\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUvQzpcXFVzZXJzXFxuYWJvdVxcRG9jdW1lbnRzXFxBbmd1bGFyXFxwcm9qZXQyY3NcXFN5YXJhRHpXZWIvc3JjXFxhcHBcXGxheW91dFxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG9FQUFvRTtFQUNwRSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbGVueW1vdG9yLmNvbS9pbWFnZXMvaWNvbi9hZG1pbi5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/profile/profile.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/profile/profile.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _validators_password_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../validators/password.validator */ "./src/app/validators/password.validator.ts");
/* harmony import */ var _model_fabricant_admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/fabricant-admin */ "./src/app/model/fabricant-admin.ts");
/* harmony import */ var _Services_Authentification_authentification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../Services/Authentification/authentification.service */ "./src/app/Services/Authentification/authentification.service.ts");
/* harmony import */ var _shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../shared/delete-confirm-dialog/delete-confirm-dialog.component */ "./src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component.ts");









var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_formBuilder, dialog, auth) {
        this._formBuilder = _formBuilder;
        this.dialog = dialog;
        this.auth = auth;
        this.infoPage = {
            title: "Profile",
            icon: "fa-user",
        };
        this.error = "";
        this.user = new _model_fabricant_admin__WEBPACK_IMPORTED_MODULE_6__["FabricantAdmin"]("12d8azD885DZq8dzar", "fs_bouhenniche@esi.dz", "USER FABRICANT", "kia", "Bouhenniche", "Sihem", false, "0551234567", "hai elbadre,kouba, alger");
        this.loading = false;
        this.account_validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' },
                { type: 'areEqual', message: 'Password mismatch' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
            ]
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get user infos
        this.loading = true;
        this.auth.showMe()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (res) {
            if (res == undefined) {
                console.log("Show Error feedback!");
            }
            else {
                _this.user = res;
            }
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            _this.error = err;
            console.log("Error occured : " + err);
        });
        //init form
        this.userFormGroup = this._formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            usersurname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fabricant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.matching_passwords = this._formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }, {
            // check whether our password and confirm password match
            validator: _validators_password_validator__WEBPACK_IMPORTED_MODULE_5__["PasswordValidator"].validate.bind(this)
        });
    };
    ProfileComponent.prototype.onSubmit = function () {
        var email = this.userFormGroup.controls['email'].value;
        var password = this.matching_passwords.controls['password'].value;
        //...... update inofrmations
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        var dialogRef = this.dialog.open(_shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteConfirmDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log("confirmation : true; update");
            }
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/layout/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/layout/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _Services_Authentification_authentification_service__WEBPACK_IMPORTED_MODULE_7__["AuthentificationService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/layout/profile/profile.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/profile/profile.module.ts ***!
  \**************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/layout/profile/profile.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../material.module */ "./src/app/layout/material.module.ts");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/layout/profile/profile-routing.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared */ "./src/app/layout/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../shared/delete-confirm-dialog/delete-confirm-dialog.component */ "./src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component.ts");










var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_8__["NotificationModule"],
                _shared__WEBPACK_IMPORTED_MODULE_8__["DeleteConfirmDialogModule"],
            ],
            entryComponents: [_shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DeleteConfirmDialogComponent"]],
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map