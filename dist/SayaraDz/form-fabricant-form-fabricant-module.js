(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-fabricant-form-fabricant-module"],{

/***/ "./src/app/Services/Admins-CRUD/admins-crud.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/Services/Admins-CRUD/admins-crud.service.ts ***!
  \*************************************************************/
/*! exports provided: AdminsCrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsCrudService", function() { return AdminsCrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var AdminsCrudService = /** @class */ (function () {
    function AdminsCrudService(http) {
        this.http = http;
        this.ROOT_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    AdminsCrudService.prototype.create = function (mfid, email, password, firstName, lastName, address, phone) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        var body = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            address: address
        };
        return this.http.post(this.ROOT_URL + '/manufacturers/' + mfid + '/admins/', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminsCrudService.prototype.list = function (mfid) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        return this.http.get(this.ROOT_URL + '/manufacturers/' + mfid + '/admins/', {
            headers: header
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminsCrudService.prototype.delete = function (mfid, id) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        var ResponseError = /** @class */ (function () {
            function ResponseError() {
            }
            return ResponseError;
        }());
        return this.http.delete(this.ROOT_URL + '/manufacturers/' + mfid + '/admins/' + id, {
            headers: header
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res instanceof ResponseError) {
                var result = res;
                if (result.error) {
                    throw (result.msg);
                }
            }
            return res;
        }));
    };
    AdminsCrudService.prototype.update = function (mfid, id, body) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        console.log(body);
        return this.http.put(this.ROOT_URL + '/manufacturers/' + mfid + '/admins/' + id, body, { headers: header }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminsCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminsCrudService);
    return AdminsCrudService;
}());



/***/ }),

/***/ "./src/app/Services/Fabricant-CRUD/fabricant-crud.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Services/Fabricant-CRUD/fabricant-crud.service.ts ***!
  \*******************************************************************/
/*! exports provided: FabricantCRUDService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricantCRUDService", function() { return FabricantCRUDService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var FabricantCRUDService = /** @class */ (function () {
    function FabricantCRUDService(http) {
        this.http = http;
        this.ROOT_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    FabricantCRUDService.prototype.create = function (marque, logo) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        var formData = new FormData();
        formData.append('logo', logo);
        formData.append('brand', marque);
        return this.http.post(this.ROOT_URL + '/manufacturers', formData, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    FabricantCRUDService.prototype.list = function () {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        return this.http.get(this.ROOT_URL + "/manufacturers", {
            headers: header
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    FabricantCRUDService.prototype.listPage = function (page, perpage, sort) {
        if (sort === void 0) { sort = "+"; }
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        return this.http.get(this.ROOT_URL + "/manufacturers", {
            headers: header,
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('limit', perpage.toString())
                .set('page', page.toString())
                .set('sort', sort)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    FabricantCRUDService.prototype.delete = function (id) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        var ResponseError = /** @class */ (function () {
            function ResponseError() {
            }
            return ResponseError;
        }());
        return this.http.delete(this.ROOT_URL + "/manufacturers/" + id, {
            headers: header
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res instanceof ResponseError) {
                var result = res;
                if (result.error) {
                    throw (result.msg);
                }
            }
            return res;
        }));
    };
    FabricantCRUDService.prototype.update = function (id, brand, logo) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        var ResponseError = /** @class */ (function () {
            function ResponseError() {
            }
            return ResponseError;
        }());
        var formData = new FormData();
        formData.append('logo', logo);
        formData.append('brand', brand);
        return this.http.put(this.ROOT_URL + "/manufacturers/" + id, formData, {
            headers: header
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res instanceof ResponseError) {
                var result = res;
                if (result.error) {
                    throw (result.msg);
                }
            }
            return res;
        }));
    };
    FabricantCRUDService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FabricantCRUDService);
    return FabricantCRUDService;
}());



/***/ }),

/***/ "./src/app/layout/form-fabricant/form-fabricant-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/form-fabricant/form-fabricant-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: FormFabricantRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFabricantRoutingModule", function() { return FormFabricantRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_fabricant_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-fabricant.component */ "./src/app/layout/form-fabricant/form-fabricant.component.ts");




var routes = [
    {
        path: '', component: _form_fabricant_component__WEBPACK_IMPORTED_MODULE_3__["FormFabricantComponent"]
    }
];
var FormFabricantRoutingModule = /** @class */ (function () {
    function FormFabricantRoutingModule() {
    }
    FormFabricantRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FormFabricantRoutingModule);
    return FormFabricantRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/form-fabricant/form-fabricant.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/form-fabricant/form-fabricant.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n    <app-page-header [heading]=\"'Créer Fabricant'\" [icon]=\"'fa-plus'\"></app-page-header>\n    <div class=\"d-flex justify-content-center\">\n        <mat-spinner class=\"mt-5\"  [hidden]=\"!loading\"></mat-spinner>\n    </div>\n    <div class=\"row\" [hidden]=\"loading\">\n        <div class=\"col-lg-12\">\n          <app-notification class=\"ma-2\" [error] = \"error\"></app-notification>\n          <mat-horizontal-stepper linear=\"false\" #stepper>\n              <mat-step [stepControl]=\"firstFormGroup\">\n                  <ng-template matStepLabel>fabricant</ng-template>\n                  <form [formGroup]=\"firstFormGroup\">\n                    <div class=\"d-flex flex-column\">\n                      <h5>Informations générales :</h5>\n                      <div class=\"row\">\n                        <div class=\"col-sm-6 d-flex flex-column\">\n                          <mat-form-field>\n                            <input formControlName=\"fabricant\" matInput placeholder=\"Nom de fabricant\" />\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-sm-6 d-flex flex-column\">\n                          <mat-form-field>\n                            <input formControlName=\"addressFabricant\" matInput placeholder=\"Adresse de fabricant\" />\n                          </mat-form-field>\n                        </div>\n                      </div>\n\n                      <br>\n                      <h5>Choisir un logo de la marque :</h5>\n                      <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                          <fieldset class=\"form-group\">\n                              <input\n                                #file\n                                type=\"file\"\n                                formControlName=\"logoFabricant\"\n                                class=\"form-control\"\n                                accept=\"image/jpeg,image/png\"\n                                (change)=\"onFileChange($event)\"\n                                required\n                                style=\"display : none\">\n                          </fieldset>\n                          <button mat-raised-button color=\"primary\" (click) = \"addFiles()\">Choisir un logo du fabricant</button>\n                        </div>\n                        <div class=\"col-sm-6 d-flex flex-column\">\n                          <fieldset class=\"form-group\">\n                              <img [src]=logo alt=\"Aucun logo choisie\" height=\"200px\" width=\"200px\">\n                          </fieldset>\n                        </div>\n                      </div>\n                    </div>\n                    <br>\n                    <button mat-raised-button color=\"primary\" matStepperNext>Suivant</button>\n                  </form>\n              </mat-step>\n              <mat-step [stepControl]=\"secondFormGroup\">\n                  <ng-template matStepLabel>Utilisateur(optionel)</ng-template>\n                  <form [formGroup]=\"secondFormGroup\">\n                    <div class=\"d-flex flex-column\">\n                      <h5>Informations personnelles :</h5>\n                      <div class=\"row\">\n                        <div class=\"col-sm-6 d-flex flex-column\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"Nom\"  formControlName=\"username\"/>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-sm-6 d-flex flex-column\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"Prénom\" formControlName=\"usersurname\" />\n                          </mat-form-field>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-sm-6 d-flex flex-column\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"Email\" type=\"email\" formControlName=\"email\" />\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-sm-6 d-flex flex-column\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"Phone\" formControlName=\"phone\" />\n                          </mat-form-field>\n                        </div>\n                      </div>\n\n                      <mat-form-field>\n                        <input matInput placeholder=\"Address\" formControlName=\"address\"/>\n                      </mat-form-field>\n                      <br>\n                      <h5>Choisir un mot de passe :</h5>\n                      <div class=\"row\">\n                        <div class=\"col-sm-6 d-flex flex-column\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"Mot de passe\" type=\"password\" formControlName=\"password\"/>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-sm-6 d-flex flex-column\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"Confirmer le mot de passe\" type=\"password\" formControlName=\"confirmPassword\"/>\n                          </mat-form-field>\n                        </div>\n                      </div>\n                      <br>\n                      <h5>Informations générales :</h5>\n                      <mat-form-field>\n                        <input matInput type=\"text\" [value]=\"getFabricantName()\"  placeholder=\"Fabricant\" formControlName=\"fabricant\" required/>\n                      </mat-form-field>\n                    </div>\n                    <br>\n                    <button class=\"mx-2\" mat-raised-button color=\"warn\" matStepperPrevious>Retour</button>\n                    <button class=\"mx-2\" mat-raised-button color=\"primary\" matStepperNext>Suivant</button>\n                  </form>\n              </mat-step>\n              <mat-step>\n                  <ng-template matStepLabel>Valider</ng-template>\n                  <h3>Valider la création</h3>\n                  <button class=\"mx-2\" mat-raised-button color=\"warn\" matStepperPrevious>Retour</button>\n                  <button class=\"mx-2\" mat-raised-button color=\"primary\" matStepperNext mat-button (click)=\"onSubmit()\">Valider la création</button>\n              </mat-step>\n          </mat-horizontal-stepper>\n        </div>\n    </div>\n    <!-- /.row -->\n</div>\n"

/***/ }),

/***/ "./src/app/layout/form-fabricant/form-fabricant.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/form-fabricant/form-fabricant.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb3JtLWZhYnJpY2FudC9mb3JtLWZhYnJpY2FudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/form-fabricant/form-fabricant.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/form-fabricant/form-fabricant.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormFabricantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFabricantComponent", function() { return FormFabricantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_Fabricant_CRUD_fabricant_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/Fabricant-CRUD/fabricant-crud.service */ "./src/app/Services/Fabricant-CRUD/fabricant-crud.service.ts");
/* harmony import */ var _Services_Admins_CRUD_admins_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/Admins-CRUD/admins-crud.service */ "./src/app/Services/Admins-CRUD/admins-crud.service.ts");
/* harmony import */ var _model_fabricant_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/fabricant.model */ "./src/app/model/fabricant.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var FormFabricantComponent = /** @class */ (function () {
    function FormFabricantComponent(_formBuilder, fabricant, admins, router) {
        this._formBuilder = _formBuilder;
        this.fabricant = fabricant;
        this.admins = admins;
        this.router = router;
        this.submitted = false;
        this.logo = '';
        this.error = "";
        this.logoImage = null;
        this.loading = false;
    }
    FormFabricantComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            fabricant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addressFabricant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            logoFabricant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            usersurname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fabricant: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    FormFabricantComponent.prototype.addFiles = function () {
        this.file.nativeElement.click();
    };
    FormFabricantComponent.prototype.getFabricantName = function () {
        return this.firstFormGroup.controls['fabricant'].value;
    };
    FormFabricantComponent.prototype.onFileChange = function ($event) {
        var _this = this;
        this.logoImage = event.target.files.item(0);
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.logo = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    FormFabricantComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.firstFormGroup.invalid) {
            this.error = "Unvalid input";
            console.log("Unvalid input");
            return;
        }
        /*if (this.secondFormGroup.invalid) {
          this.error = "Unvalid input";
          console.log("Unvalid input");
          return;
        }*/
        this.createFabricant();
    };
    FormFabricantComponent.prototype.createFabricant = function () {
        var _this = this;
        var brand = this.firstFormGroup.controls['fabricant'].value;
        this.loading = true;
        this.fabricant.create(brand, this.logoImage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (res) {
            if (res instanceof _model_fabricant_model__WEBPACK_IMPORTED_MODULE_6__["Fabricant"]) {
                _this.loading = false;
                console.log(res);
                _this.router.navigate(["/dashboard/afficherFabricants"]);
            }
            else {
                _this.error = res;
                _this.loading = false;
                console.log("Error occured : " + res);
            }
        }, function (err) {
            _this.error = err;
            _this.loading = false;
            console.log("Error occured : " + err);
        });
    };
    FormFabricantComponent.prototype.createAdminFabricant = function (manufacturer) {
        var admin = {
            email: this.secondFormGroup.controls['email'].value,
            password: this.secondFormGroup.controls['password'].value,
            firstName: this.secondFormGroup.controls['username'].value,
            lastName: this.secondFormGroup.controls['usersurname'].value,
            address: this.secondFormGroup.controls['address'].value,
            phone: this.secondFormGroup.controls['phone'].value,
        };
        console.log(manufacturer);
        this.loading = true;
        //create the admin of the manufacturer
        this.admins.create(manufacturer, admin.email, admin.password, admin.lastName, admin.firstName, admin.address, admin.phone)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured : /n" + err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FormFabricantComponent.prototype, "file", void 0);
    FormFabricantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-fabricant',
            template: __webpack_require__(/*! ./form-fabricant.component.html */ "./src/app/layout/form-fabricant/form-fabricant.component.html"),
            styles: [__webpack_require__(/*! ./form-fabricant.component.scss */ "./src/app/layout/form-fabricant/form-fabricant.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _Services_Fabricant_CRUD_fabricant_crud_service__WEBPACK_IMPORTED_MODULE_4__["FabricantCRUDService"],
            _Services_Admins_CRUD_admins_crud_service__WEBPACK_IMPORTED_MODULE_5__["AdminsCrudService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FormFabricantComponent);
    return FormFabricantComponent;
}());



/***/ }),

/***/ "./src/app/layout/form-fabricant/form-fabricant.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/form-fabricant/form-fabricant.module.ts ***!
  \****************************************************************/
/*! exports provided: FormFabricantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFabricantModule", function() { return FormFabricantModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../material.module */ "./src/app/layout/material.module.ts");
/* harmony import */ var _form_fabricant_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-fabricant-routing.module */ "./src/app/layout/form-fabricant/form-fabricant-routing.module.ts");
/* harmony import */ var _form_fabricant_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-fabricant.component */ "./src/app/layout/form-fabricant/form-fabricant.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../shared */ "./src/app/layout/shared/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");










var FormFabricantModule = /** @class */ (function () {
    function FormFabricantModule() {
    }
    FormFabricantModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _form_fabricant_routing_module__WEBPACK_IMPORTED_MODULE_6__["FormFabricantRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_8__["PageHeaderModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _shared__WEBPACK_IMPORTED_MODULE_9__["NotificationModule"]
            ],
            declarations: [_form_fabricant_component__WEBPACK_IMPORTED_MODULE_7__["FormFabricantComponent"]]
        })
    ], FormFabricantModule);
    return FormFabricantModule;
}());



/***/ }),

/***/ "./src/app/model/fabricant.model.ts":
/*!******************************************!*\
  !*** ./src/app/model/fabricant.model.ts ***!
  \******************************************/
/*! exports provided: Fabricant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fabricant", function() { return Fabricant; });
var Fabricant = /** @class */ (function () {
    function Fabricant(brand, reatedAt, id, logo, updatedAt) {
        this.brand = brand;
        this.reatedAt = reatedAt;
        this.id = id;
        this.logo = logo;
        this.updatedAt = updatedAt;
    }
    return Fabricant;
}());



/***/ })

}]);
//# sourceMappingURL=form-fabricant-form-fabricant-module.js.map