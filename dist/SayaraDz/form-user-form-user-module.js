(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-user-form-user-module"],{

/***/ "./src/app/layout/form-user/form-user-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/form-user/form-user-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: FormUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUserRoutingModule", function() { return FormUserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-user.component */ "./src/app/layout/form-user/form-user.component.ts");




var routes = [
    {
        path: '', component: _form_user_component__WEBPACK_IMPORTED_MODULE_3__["FormUserComponent"]
    }
];
var FormUserRoutingModule = /** @class */ (function () {
    function FormUserRoutingModule() {
    }
    FormUserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FormUserRoutingModule);
    return FormUserRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/form-user/form-user.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/form-user/form-user.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\" >\r\n  <app-page-header [heading]=\"infoPage.title\" [icon]=\"infoPage.icon\"></app-page-header>\r\n  <div class=\"d-flex justify-content-center\">\r\n      <mat-spinner class=\"mt-5\"  [hidden]=\"!loading\"></mat-spinner>\r\n  </div>\r\n  <mat-card class=\"example-card mb-5\" [hidden]=\"loading\">\r\n    <mat-card-content>\r\n      <form [formGroup]=\"userFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"d-flex flex-column\">\r\n          <h5>Informations personnelles :</h5>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 d-flex flex-column\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Nom\"  formControlName=\"username\"/>\r\n                <mat-error *ngFor=\"let validation of account_validation_messages.username\">\r\n                  <mat-error class=\"error-message\" *ngIf=\"userFormGroup.get('username').hasError(validation.type) && (userFormGroup.get('username').dirty || userFormGroup.get('username').touched)\">{{validation.message}}</mat-error>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-6 d-flex flex-column\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Prénom\" formControlName=\"usersurname\" />\r\n                <mat-error *ngFor=\"let validation of account_validation_messages.usersurname\">\r\n                  <mat-error class=\"error-message\" *ngIf=\"userFormGroup.get('usersurname').hasError(validation.type) && (userFormGroup.get('usersurname').dirty || userFormGroup.get('usersurname').touched)\">{{validation.message}}</mat-error>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 d-flex flex-column\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Email\" type=\"email\" formControlName=\"email\" />\r\n                <mat-error *ngFor=\"let validation of account_validation_messages.email\">\r\n                  <mat-error class=\"error-message\" *ngIf=\"userFormGroup.get('email').hasError(validation.type) && (userFormGroup.get('email').dirty || userFormGroup.get('email').touched)\">{{validation.message}}</mat-error>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-6 d-flex flex-column\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Phone\" formControlName=\"phone\" />\r\n                <mat-error *ngFor=\"let validation of account_validation_messages.phone\">\r\n                  <mat-error class=\"error-message\" *ngIf=\"userFormGroup.get('phone').hasError(validation.type) && (userFormGroup.get('phone').dirty || userFormGroup.get('phone').touched)\">{{validation.message}}</mat-error>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Address\" formControlName=\"address\"/>\r\n            <mat-error *ngFor=\"let validation of account_validation_messages.address\">\r\n              <mat-error class=\"error-message\" *ngIf=\"userFormGroup.get('address').hasError(validation.type) && (userFormGroup.get('address').dirty || userFormGroup.get('address').touched)\">{{validation.message}}</mat-error>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <br>\r\n          <h5>Choisir un mot de passe :</h5>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6 d-flex flex-column\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Mot de passe\" type=\"password\" formControlName=\"password\"/>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-6 d-flex flex-column\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Confirmer le mot de passe\" type=\"password\" formControlName=\"confirmPassword\"/>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <h5>Informations générales :</h5>\r\n          <mat-form-field>\r\n\r\n            <!-- <input matInput placeholder=\"Fabricant\" type=\"text\" formControlName=\"fabricant\" [value]=fabricant.brand /> -->\r\n\r\n            <mat-select placeholder=\"Fabricant\" formControlName=\"fabricant\" required>\r\n              <mat-option *ngFor=\"let fabricant of fabricants\" [value]=\"fabricant\">\r\n                {{fabricant.id}}\r\n              </mat-option>\r\n            </mat-select>\r\n\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"d-flex flex-row-reverse\">\r\n          <button type = \"submit\" mat-flat-button class=\"btn-search\">Créer utilisateur</button>\r\n        </div>\r\n\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/form-user/form-user.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/form-user/form-user.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb3JtLXVzZXIvZm9ybS11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/form-user/form-user.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/form-user/form-user.component.ts ***!
  \*********************************************************/
/*! exports provided: FormUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUserComponent", function() { return FormUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_Fabricant_CRUD_fabricant_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/Fabricant-CRUD/fabricant-crud.service */ "./src/app/Services/Fabricant-CRUD/fabricant-crud.service.ts");
/* harmony import */ var _Services_Admins_CRUD_admins_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/Admins-CRUD/admins-crud.service */ "./src/app/Services/Admins-CRUD/admins-crud.service.ts");
/* harmony import */ var _Services_Users_CRUD_users_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/Users-CRUD/users-crud.service */ "./src/app/Services/Users-CRUD/users-crud.service.ts");
/* harmony import */ var _Services_Authentification_authentification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/Authentification/authentification.service */ "./src/app/Services/Authentification/authentification.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var FormUserComponent = /** @class */ (function () {
    function FormUserComponent(_formBuilder, fabricantService, admins, router, auth, users) {
        this._formBuilder = _formBuilder;
        this.fabricantService = fabricantService;
        this.admins = admins;
        this.router = router;
        this.auth = auth;
        this.users = users;
        this.infoPage = {
            title: "Creer Utilisateur",
            icon: "fa-users",
        };
        this.fabricants = [];
        this.loading = false;
        this.isSuperAdmin = (localStorage.getItem('isSuperAdmin') == "true");
        this.account_validation_messages = {
            'username': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Username must be at least 5 characters long' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
                { type: 'pattern', message: 'Your username must contain only letters' },
            ],
            'usersurname': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Username must be at least 5 characters long' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
                { type: 'pattern', message: 'Your username must contain only letters' },
            ],
            'fabricant': [
                { type: 'required', message: 'Password is required' },
            ],
            'isAdmin': [
                { type: 'required', message: 'Password is required' },
            ],
            'phone': [
                { type: 'required', message: 'Password is required' },
            ],
            'address': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Addres must be at least 5 characters long' },
                { type: 'maxlength', message: 'Addres cannot be more than 30 characters long' },
            ],
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
    FormUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
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
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fabricant: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        if (this.isSuperAdmin) {
            //check if is the super admin and set the authorized links
            this.fabricantService.list()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (res) {
                _this.fabricants = res.manufacturers;
                console.log(_this.fabricants);
            }, function (err) {
                console.log("Error occured : " + err);
            });
        }
        else {
            this.auth.showMe().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (res) {
                var obj = {
                    brand: res.manufacturer,
                    id: res.manufacturer
                };
                _this.fabricants.push(obj);
                _this.userFormGroup.get('fabricant').setValue(res.manufacturer);
            }, function (err) {
                console.log("Error occured : " + err);
            });
        }
        this.loading = false;
    };
    FormUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        console.log("Créer un utilisateur : ");
        var service;
        if (this.isSuperAdmin) {
            service = this.admins;
        }
        else {
            service = this.users;
        }
        service.create(this.userFormGroup.get('fabricant').value.id, this.userFormGroup.get('email').value, this.userFormGroup.get('password').value, this.userFormGroup.get('username').value, this.userFormGroup.get('usersurname').value, this.userFormGroup.get('address').value, this.userFormGroup.get('phone').value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (res) {
            if (res.type == undefined) {
                console.log("Show Error feedback!");
            }
            else {
                console.log(res);
                _this.router.navigate(["dashboard/afficherUsersFabricants"]);
            }
            _this.loading = false;
        }, function (err) {
            console.log("Error occured : /n" + err);
            _this.loading = false;
        });
    };
    FormUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-user',
            template: __webpack_require__(/*! ./form-user.component.html */ "./src/app/layout/form-user/form-user.component.html"),
            styles: [__webpack_require__(/*! ./form-user.component.scss */ "./src/app/layout/form-user/form-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _Services_Fabricant_CRUD_fabricant_crud_service__WEBPACK_IMPORTED_MODULE_3__["FabricantCRUDService"],
            _Services_Admins_CRUD_admins_crud_service__WEBPACK_IMPORTED_MODULE_4__["AdminsCrudService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _Services_Authentification_authentification_service__WEBPACK_IMPORTED_MODULE_6__["AuthentificationService"],
            _Services_Users_CRUD_users_crud_service__WEBPACK_IMPORTED_MODULE_5__["UsersCrudService"]])
    ], FormUserComponent);
    return FormUserComponent;
}());



/***/ }),

/***/ "./src/app/layout/form-user/form-user.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/form-user/form-user.module.ts ***!
  \******************************************************/
/*! exports provided: FormUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUserModule", function() { return FormUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-user.component */ "./src/app/layout/form-user/form-user.component.ts");
/* harmony import */ var _form_user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-user-routing.module */ "./src/app/layout/form-user/form-user-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../material.module */ "./src/app/layout/material.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared */ "./src/app/layout/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var FormUserModule = /** @class */ (function () {
    function FormUserModule() {
    }
    FormUserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_form_user_component__WEBPACK_IMPORTED_MODULE_3__["FormUserComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _form_user_routing_module__WEBPACK_IMPORTED_MODULE_4__["FormUserRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ]
        })
    ], FormUserModule);
    return FormUserModule;
}());



/***/ })

}]);
//# sourceMappingURL=form-user-form-user-module.js.map