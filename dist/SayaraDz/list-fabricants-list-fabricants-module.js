(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-fabricants-list-fabricants-module"],{

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

/***/ "./src/app/layout/list-fabricants/create-fabriquant-dialog/create-fabriquant-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/list-fabricants/create-fabriquant-dialog/create-fabriquant-dialog.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-dialog\">\n    <h2 mat-dialog-title>\n      Créer Fabricant\n      <div class=\"underline\"></div>\n    </h2>\n\n    <mat-dialog-content class=\"mat-typography\">\n      <form [formGroup]=\"firstFormGroup\">\n        <div class=\"d-flex flex-column\">\n          <div class=\"d-flex flex-column\">\n            <h5>Informations générales :</h5>\n            <div class=\"row\">\n              <div class=\"col-sm-6 d-flex flex-column\">\n                <mat-form-field>\n                  <input formControlName=\"fabricant\" matInput  placeholder=\"Nom de fabricant\" />\n                </mat-form-field>\n              </div>\n              <div class=\"col-sm-6 d-flex flex-column\">\n                <mat-form-field>\n                  <input formControlName=\"addressFabricant\" matInput placeholder=\"Adresse de fabricant\" />\n                </mat-form-field>\n              </div>\n            </div>\n\n            <br>\n            <h5>Choisir un logo de la marque :</h5>\n              <div style=\"text-align : center\">\n                <fieldset class=\"form-group\">\n                    <input\n                      #file\n                      type=\"file\"\n                      formControlName=\"logoFabricant\"\n                      class=\"form-control\"\n                      accept=\"image/jpeg,image/png\"\n                      (change)=\"onFileChange($event)\"\n                      required\n                      style=\"display : none\">\n                </fieldset>\n                <button mat-raised-button color=\"primary\" (click) = \"addFiles()\">Choisir un logo du fabricant</button>\n              </div>\n              <br>\n              <div style=\"text-align : center\">\n                <fieldset class=\"form-group\">\n                    <img [src]=logo alt=\"Aucun logo choisie\" height=\"200px\" width=\"200px\">\n                </fieldset>\n              </div>\n            <br>\n          </div>\n        </div>\n      </form>\n    </mat-dialog-content>\n    <mat-dialog-actions align=\"end\">\n      <button mat-raised-button  color = \"primary\" (click) = \"onConfirm()\">Confirmer</button>\n      <button mat-raised-button mat-dialog-close color = \"warn\">Annuler</button>\n    </mat-dialog-actions>\n  </div>\n"

/***/ }),

/***/ "./src/app/layout/list-fabricants/create-fabriquant-dialog/create-fabriquant-dialog.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/list-fabricants/create-fabriquant-dialog/create-fabriquant-dialog.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-dialog {\n  width: 100%;\n  height: 100%; }\n\n.underline {\n  border-bottom: solid 2px #FFAB00;\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xpc3QtZmFicmljYW50cy9jcmVhdGUtZmFicmlxdWFudC1kaWFsb2cvQzpcXFVzZXJzXFxuYWJvdVxcRG9jdW1lbnRzXFxBbmd1bGFyXFxwcm9qZXQyY3NcXFN5YXJhRHpXZWIvc3JjXFxhcHBcXGxheW91dFxcbGlzdC1mYWJyaWNhbnRzXFxjcmVhdGUtZmFicmlxdWFudC1kaWFsb2dcXGNyZWF0ZS1mYWJyaXF1YW50LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xpc3QtZmFicmljYW50cy9jcmVhdGUtZmFicmlxdWFudC1kaWFsb2cvY3JlYXRlLWZhYnJpcXVhbnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1kaWFsb2d7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi51bmRlcmxpbmV7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNGRkFCMDA7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/list-fabricants/create-fabriquant-dialog/create-fabriquant-dialog.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/list-fabricants/create-fabriquant-dialog/create-fabriquant-dialog.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CreateFabriquantDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFabriquantDialogComponent", function() { return CreateFabriquantDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var CreateFabriquantDialogComponent = /** @class */ (function () {
    function CreateFabriquantDialogComponent(_formBuilder, dialogRef, data) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.logo = '';
        this.logoImage = null;
    }
    CreateFabriquantDialogComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            fabricant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addressFabricant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            logoFabricant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CreateFabriquantDialogComponent.prototype.addFiles = function () {
        this.file.nativeElement.click();
    };
    CreateFabriquantDialogComponent.prototype.onFileChange = function ($event) {
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
    CreateFabriquantDialogComponent.prototype.onConfirm = function () {
        var data = {
            status: true,
            marque: this.firstFormGroup.controls['fabricant'].value,
            address: this.firstFormGroup.controls['addressFabricant'].value,
            logo: this.logoImage
        };
        this.dialogRef.close(data);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateFabriquantDialogComponent.prototype, "file", void 0);
    CreateFabriquantDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-fabriquant-dialog',
            template: __webpack_require__(/*! ./create-fabriquant-dialog.component.html */ "./src/app/layout/list-fabricants/create-fabriquant-dialog/create-fabriquant-dialog.component.html"),
            styles: [__webpack_require__(/*! ./create-fabriquant-dialog.component.scss */ "./src/app/layout/list-fabricants/create-fabriquant-dialog/create-fabriquant-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], CreateFabriquantDialogComponent);
    return CreateFabriquantDialogComponent;
}());



/***/ }),

/***/ "./src/app/layout/list-fabricants/list-fabricants-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/list-fabricants/list-fabricants-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ListFabricantsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFabricantsRoutingModule", function() { return ListFabricantsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_fabricants_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-fabricants.component */ "./src/app/layout/list-fabricants/list-fabricants.component.ts");




var routes = [
    {
        path: '', component: _list_fabricants_component__WEBPACK_IMPORTED_MODULE_3__["ListFabricantsComponent"]
    }
];
var ListFabricantsRoutingModule = /** @class */ (function () {
    function ListFabricantsRoutingModule() {
    }
    ListFabricantsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ListFabricantsRoutingModule);
    return ListFabricantsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/list-fabricants/list-fabricants.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/list-fabricants/list-fabricants.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\r\n    <app-page-header [heading]=\"'Liste des fabricants'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <mat-spinner [hidden]=\"!loading\" class=\"mt-5\"></mat-spinner>\r\n    </div>\r\n    <div class=\"row\" [hidden]=\"loading\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header \">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-7\">\r\n                      <mat-form-field style=\"width : 100%\">\r\n                        <mat-icon matPrefix>search</mat-icon>\r\n                        <input matInput placeholder=\"Fabricant...\" />\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-5\" style = \"text-align:right\">\r\n                      <mat-form-field>\r\n                        <mat-label>Critéres</mat-label>\r\n                        <mat-select matNativeControl required>\r\n                          <mat-option value=\"volvo\">Marque</mat-option>\r\n                          <mat-option value=\"saab\">Pays</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <button class=\"mx-2\" mat-raised-button style=\"background : #FFAB00 ; color : #fff\">\r\n                        <mat-icon>print</mat-icon>\r\n                      </button>\r\n                      <button class=\"mx-2\" mat-raised-button (click) = \"onCreate()\" style=\"background : #228B22 ; color : #fff\">\r\n                        <mat-icon>add</mat-icon>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <app-notification class=\"ma-2\" [error] = \"error\"></app-notification>\r\n                <div class=\"card-body table-responsive\">\r\n                  <mat-paginator [length]=\"lengthList\" [pageSize]=\"5\"\r\n                    [pageSizeOptions]=\"[5, 10, 15]\"></mat-paginator>\r\n                    <table mat-table [dataSource]=\"fabricants\" matSort class=\"mat-elevation-z8\" style=\"width : 100%\">\r\n\r\n                      <ng-container matColumnDef=\"index\">\r\n                        <th mat-header-cell *matHeaderCellDef > No. </th>\r\n                        <td mat-cell *matCellDef=\"let element; let i = index;\"> {{i+1}} </td>\r\n                      </ng-container>\r\n\r\n                      <ng-container matColumnDef=\"marque\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Marque </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.brand}} </td>\r\n                      </ng-container>\r\n\r\n                      <ng-container matColumnDef=\"logo\">\r\n                        <th mat-header-cell *matHeaderCellDef> Logo </th>\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                            <img src=\"{{ROOT_URL}}/{{element.logo}}\" class=\"icon-logo\">\r\n                         </td>\r\n                      </ng-container>\r\n\r\n                      <ng-container matColumnDef=\"createdAt\">\r\n                        <th mat-header-cell *matHeaderCellDef> Date de création </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.createdAt | date :  \"short\" }} </td>\r\n                      </ng-container>\r\n\r\n                      <ng-container matColumnDef=\"updatedAt\">\r\n                        <th mat-header-cell *matHeaderCellDef> Date de mise à jours </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.updatedAt | date :  \"short\" }} </td>\r\n                      </ng-container>\r\n\r\n                      <ng-container matColumnDef=\"manipulations\">\r\n                        <th mat-header-cell *matHeaderCellDef> Manipulations </th>\r\n                        <td mat-cell *matCellDef=\"let element, let i = index;\">\r\n                          <button class=\"mx-2\" mat-icon-button color=\"warn\"  (click) = \"onDelete(element.id,i)\">\r\n                            <mat-icon>delete</mat-icon>\r\n                          </button>\r\n                          <button class=\"mx-2\" mat-icon-button color=\"primary\" (click) = \"onUpdate(element,i)\">\r\n                            <mat-icon>create</mat-icon>\r\n                          </button>\r\n                          <button class=\"mx-2\" mat-icon-button color=\"accent\" (click) = \"onDisplayAdminPage(element.id)\">\r\n                            <mat-icon><i class=\"fas fa-user-tie\"></i></mat-icon>\r\n                          </button>\r\n                          <mat-slide-toggle\r\n                          checked = \"true\"\r\n                          color = \"primary\"\r\n                            >\r\n                            activer\r\n                          </mat-slide-toggle>\r\n                          <button class=\"mx-2\" mat-icon-button color=\"accent\" (click) = \"onDisplayContract(element.id)\">\r\n                            <mat-icon>assignment</mat-icon>\r\n                          </button>\r\n                        </td>\r\n                      </ng-container>\r\n\r\n                      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/list-fabricants/list-fabricants.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/list-fabricants/list-fabricants.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-logo {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xpc3QtZmFicmljYW50cy9DOlxcVXNlcnNcXG5hYm91XFxEb2N1bWVudHNcXEFuZ3VsYXJcXHByb2pldDJjc1xcU3lhcmFEeldlYi9zcmNcXGFwcFxcbGF5b3V0XFxsaXN0LWZhYnJpY2FudHNcXGxpc3QtZmFicmljYW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGlzdC1mYWJyaWNhbnRzL2xpc3QtZmFicmljYW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWxvZ297XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmbGV4LXNocmluazogMDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/list-fabricants/list-fabricants.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/list-fabricants/list-fabricants.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListFabricantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFabricantsComponent", function() { return ListFabricantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Fabricant_CRUD_fabricant_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Fabricant-CRUD/fabricant-crud.service */ "./src/app/Services/Fabricant-CRUD/fabricant-crud.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/delete-confirm-dialog/delete-confirm-dialog.component */ "./src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component.ts");
/* harmony import */ var _update_fabriquat_dialog_update_fabriquat_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-fabriquat-dialog/update-fabriquat-dialog.component */ "./src/app/layout/list-fabricants/update-fabriquat-dialog/update-fabriquat-dialog.component.ts");
/* harmony import */ var _create_fabriquant_dialog_create_fabriquant_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-fabriquant-dialog/create-fabriquant-dialog.component */ "./src/app/layout/list-fabricants/create-fabriquant-dialog/create-fabriquant-dialog.component.ts");
/* harmony import */ var _shared_message_snack_bar_message_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../shared/message-snack-bar/message-snack-bar.component */ "./src/app/shared/message-snack-bar/message-snack-bar.component.ts");
/* harmony import */ var _shared_contract_fabricant_dialog_contract_fabricant_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../shared/contract-fabricant-dialog/contract-fabricant-dialog.component */ "./src/app/layout/shared/contract-fabricant-dialog/contract-fabricant-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");














var ListFabricantsComponent = /** @class */ (function () {
    function ListFabricantsComponent(fabricant, dialog, router, _snackBar) {
        this.fabricant = fabricant;
        this.dialog = dialog;
        this.router = router;
        this._snackBar = _snackBar;
        this.durationInSeconds = 5;
        this.dataFabricants = [];
        this.displayedColumns = ['index', 'marque', 'logo', 'createdAt', 'updatedAt', 'manipulations'];
        this.loading = false;
        this.error = "";
        this.lengthList = 0;
        this.ROOT_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].baseUrl;
    }
    ListFabricantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.fabricant.listPage(1, 5)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (res) {
            console.log(res);
            _this.fabricants = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res.manufacturers);
            _this.dataFabricants = res.manufacturers;
            _this.lengthList = res.count;
            _this.fabricants.sort = _this.sort;
            _this.loading = false;
        }, function (err) {
            _this.error = "Error occured : " + err;
            console.log("Error occured : " + err);
            _this.loading = false;
        });
    };
    ListFabricantsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.paginator.page
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.loadFabricantsPage(); }))
            .subscribe();
    };
    ListFabricantsComponent.prototype.loadFabricantsPage = function () {
        var _this = this;
        this.loading = true;
        this.fabricant.listPage(this.paginator.pageIndex + 1, this.paginator.pageSize, 'asc')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (res) {
            console.log(res);
            _this.fabricants = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res.manufacturers);
            _this.dataFabricants = res.manufacturers;
            _this.fabricants.sort = _this.sort;
            _this.loading = false;
        }, function (err) {
            _this.error = "Error occured : " + err;
            console.log("Error occured : " + err);
            _this.loading = false;
        });
    };
    ListFabricantsComponent.prototype.onDelete = function (id, i) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: id };
        var dialogRef = this.dialog.open(_shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteConfirmDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.loading = true;
                _this.fabricant.delete(id).subscribe(function (res) {
                    console.log(res);
                    _this.dataFabricants.splice(i, 1);
                    _this.fabricants = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataFabricants);
                    _this.lengthList--;
                    _this.loading = false;
                    _this._snackBar.openFromComponent(_shared_message_snack_bar_message_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__["MessageSnackBarComponent"], {
                        duration: _this.durationInSeconds * 1000,
                        data: { message: 'la marque a bien était supprimée', icon: "delete" }
                    });
                }, function (err) {
                    _this.error = "Error occured : " + err;
                    console.log("Error occured : " + err);
                    _this.loading = false;
                });
            }
        });
    };
    ListFabricantsComponent.prototype.onUpdate = function (fabricant, i) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { fabricant: fabricant };
        var dialogRef = this.dialog.open(_update_fabriquat_dialog_update_fabriquat_dialog_component__WEBPACK_IMPORTED_MODULE_7__["UpdateFabriquatDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.status) {
                _this.loading = true;
                _this.fabricant.update(fabricant.id, result.marque, result.logo).subscribe(function (res) {
                    console.log(res);
                    _this.fabricants.data[i].brand = result.marque;
                    _this.fabricants.data[i].logo = result.logo;
                    _this.loading = false;
                    _this._snackBar.openFromComponent(_shared_message_snack_bar_message_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__["MessageSnackBarComponent"], {
                        duration: _this.durationInSeconds * 1000,
                        data: { message: 'la marque a bien était modifiée', icon: "check_circle" }
                    });
                }, function (err) {
                    _this.error = "Error occured : " + err;
                    console.log("Error occured : " + err);
                    _this.loading = false;
                });
            }
        });
    };
    ListFabricantsComponent.prototype.onCreate = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        var dialogRef = this.dialog.open(_create_fabriquant_dialog_create_fabriquant_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CreateFabriquantDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.status) {
                _this.loading = true;
                _this.fabricant.create(result.marque, result.logo)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (res) {
                    _this.loading = false;
                    console.log(res);
                    _this.loadFabricantsPage();
                    _this.lengthList++;
                    _this._snackBar.openFromComponent(_shared_message_snack_bar_message_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__["MessageSnackBarComponent"], {
                        duration: _this.durationInSeconds * 1000,
                        data: { message: 'la marque a bien était ajoutée', icon: "playlist_add_check" }
                    });
                }, function (err) {
                    _this.error = err;
                    _this.loading = false;
                });
            }
        });
    };
    ListFabricantsComponent.prototype.onDisplayAdminPage = function (id) {
        console.log("/dashboard/afficherFabricants/admins/" + id);
        this.router.navigate(["/dashboard/afficherUsersFabricants/admins/" + id]);
    };
    ListFabricantsComponent.prototype.onDisplayContract = function (id) {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        var dialogRef = this.dialog.open(_shared_contract_fabricant_dialog_contract_fabricant_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ContractFabricantDialogComponent"], dialogConfig);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ListFabricantsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], ListFabricantsComponent.prototype, "sort", void 0);
    ListFabricantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-fabricants',
            template: __webpack_require__(/*! ./list-fabricants.component.html */ "./src/app/layout/list-fabricants/list-fabricants.component.html"),
            styles: [__webpack_require__(/*! ./list-fabricants.component.scss */ "./src/app/layout/list-fabricants/list-fabricants.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_Fabricant_CRUD_fabricant_crud_service__WEBPACK_IMPORTED_MODULE_2__["FabricantCRUDService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ListFabricantsComponent);
    return ListFabricantsComponent;
}());



/***/ }),

/***/ "./src/app/layout/list-fabricants/list-fabricants.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/list-fabricants/list-fabricants.module.ts ***!
  \******************************************************************/
/*! exports provided: ListFabricantsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFabricantsModule", function() { return ListFabricantsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_fabricants_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-fabricants-routing.module */ "./src/app/layout/list-fabricants/list-fabricants-routing.module.ts");
/* harmony import */ var _list_fabricants_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-fabricants.component */ "./src/app/layout/list-fabricants/list-fabricants.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared */ "./src/app/layout/shared/index.ts");
/* harmony import */ var _shared_contract_fabricant_dialog_contract_fabricant_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/contract-fabricant-dialog/contract-fabricant-dialog.component */ "./src/app/layout/shared/contract-fabricant-dialog/contract-fabricant-dialog.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../material.module */ "./src/app/layout/material.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../shared/delete-confirm-dialog/delete-confirm-dialog.component */ "./src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component.ts");
/* harmony import */ var _shared_message_snack_bar_message_snack_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../shared/message-snack-bar/message-snack-bar.component */ "./src/app/shared/message-snack-bar/message-snack-bar.component.ts");
/* harmony import */ var _update_fabriquat_dialog_update_fabriquat_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update-fabriquat-dialog/update-fabriquat-dialog.component */ "./src/app/layout/list-fabricants/update-fabriquat-dialog/update-fabriquat-dialog.component.ts");
/* harmony import */ var _create_fabriquant_dialog_create_fabriquant_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-fabriquant-dialog/create-fabriquant-dialog.component */ "./src/app/layout/list-fabricants/create-fabriquant-dialog/create-fabriquant-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");














var ListFabricantsModule = /** @class */ (function () {
    function ListFabricantsModule() {
    }
    ListFabricantsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _list_fabricants_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListFabricantsRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _shared__WEBPACK_IMPORTED_MODULE_8__["NotificationModule"],
                _shared__WEBPACK_IMPORTED_MODULE_8__["DeleteConfirmDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_8__["MessageSnackBarModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["ContractFabricantDialogModule"]
            ],
            declarations: [_list_fabricants_component__WEBPACK_IMPORTED_MODULE_4__["ListFabricantsComponent"], _update_fabriquat_dialog_update_fabriquat_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UpdateFabriquatDialogComponent"], _create_fabriquant_dialog_create_fabriquant_dialog_component__WEBPACK_IMPORTED_MODULE_12__["CreateFabriquantDialogComponent"]],
            entryComponents: [_shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DeleteConfirmDialogComponent"], _update_fabriquat_dialog_update_fabriquat_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UpdateFabriquatDialogComponent"], _create_fabriquant_dialog_create_fabriquant_dialog_component__WEBPACK_IMPORTED_MODULE_12__["CreateFabriquantDialogComponent"], _shared_message_snack_bar_message_snack_bar_component__WEBPACK_IMPORTED_MODULE_10__["MessageSnackBarComponent"], _shared_contract_fabricant_dialog_contract_fabricant_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ContractFabricantDialogComponent"]],
        })
    ], ListFabricantsModule);
    return ListFabricantsModule;
}());



/***/ }),

/***/ "./src/app/layout/list-fabricants/update-fabriquat-dialog/update-fabriquat-dialog.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/list-fabricants/update-fabriquat-dialog/update-fabriquat-dialog.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-dialog\">\n    <h2 mat-dialog-title>\n      Modifier fabricant\n      <div class=\"underline\"></div>\n    </h2>\n    <mat-dialog-content class=\"mat-typography\">\n      <form [formGroup]=\"firstFormGroup\">\n        <div class=\"d-flex flex-column\">\n          <div class=\"d-flex flex-column\">\n            <h5>Informations générales :</h5>\n            <div class=\"row\">\n              <div class=\"col-sm-6 d-flex flex-column\">\n                <mat-form-field>\n                  <input formControlName=\"fabricant\" matInput [value]=\"data.fabricant.brand\" placeholder=\"Nom de fabricant\" />\n                </mat-form-field>\n              </div>\n              <div class=\"col-sm-6 d-flex flex-column\">\n                <mat-form-field>\n                  <input formControlName=\"addressFabricant\" matInput placeholder=\"Adresse de fabricant\" />\n                </mat-form-field>\n              </div>\n            </div>\n\n            <br>\n            <h5>Choisir un logo de la marque :</h5>\n            <div style = \"text-align : center\">\n                <fieldset class=\"form-group\">\n                    <input\n                      #file\n                      type=\"file\"\n                      formControlName=\"logoFabricant\"\n                      class=\"form-control\"\n                      accept=\"image/jpeg,image/png\"\n                      (change)=\"onFileChange($event)\"\n                      required\n                      style=\"display : none\">\n                </fieldset>\n                <button mat-raised-button color=\"primary\" (click) = \"addFiles()\">Choisir un logo du fabricant</button>\n                <br>\n                <br>\n                <fieldset class=\"form-group\">\n                    <img [src]=logo alt=\"Aucun logo choisie\" height=\"200px\" width=\"200px\">\n                </fieldset>\n\n            </div>\n            <br>\n          </div>\n        </div>\n      </form>\n    </mat-dialog-content>\n    <mat-dialog-actions align=\"end\">\n      <button mat-raised-button  color = \"primary\" (click) = \"onConfirm()\">Confirmer</button>\n      <button mat-raised-button mat-dialog-close color = \"warn\">Annuler</button>\n    </mat-dialog-actions>\n  </div>\n"

/***/ }),

/***/ "./src/app/layout/list-fabricants/update-fabriquat-dialog/update-fabriquat-dialog.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/list-fabricants/update-fabriquat-dialog/update-fabriquat-dialog.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-dialog {\n  width: 100%;\n  height: 100%; }\n\n.underline {\n  border-bottom: solid 2px #FFAB00;\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xpc3QtZmFicmljYW50cy91cGRhdGUtZmFicmlxdWF0LWRpYWxvZy9DOlxcVXNlcnNcXG5hYm91XFxEb2N1bWVudHNcXEFuZ3VsYXJcXHByb2pldDJjc1xcU3lhcmFEeldlYi9zcmNcXGFwcFxcbGF5b3V0XFxsaXN0LWZhYnJpY2FudHNcXHVwZGF0ZS1mYWJyaXF1YXQtZGlhbG9nXFx1cGRhdGUtZmFicmlxdWF0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xpc3QtZmFicmljYW50cy91cGRhdGUtZmFicmlxdWF0LWRpYWxvZy91cGRhdGUtZmFicmlxdWF0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZGlhbG9ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4udW5kZXJsaW5le1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjRkZBQjAwO1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/list-fabricants/update-fabriquat-dialog/update-fabriquat-dialog.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/list-fabricants/update-fabriquat-dialog/update-fabriquat-dialog.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: UpdateFabriquatDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFabriquatDialogComponent", function() { return UpdateFabriquatDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var UpdateFabriquatDialogComponent = /** @class */ (function () {
    function UpdateFabriquatDialogComponent(_formBuilder, dialogRef, data) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.logo = '';
    }
    UpdateFabriquatDialogComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            fabricant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            addressFabricant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            logoFabricant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        console.log(this.data.fabricant);
    };
    UpdateFabriquatDialogComponent.prototype.addFiles = function () {
        this.file.nativeElement.click();
    };
    UpdateFabriquatDialogComponent.prototype.onFileChange = function ($event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.logo = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    UpdateFabriquatDialogComponent.prototype.onConfirm = function () {
        var data = {
            status: true,
            marque: this.firstFormGroup.controls['fabricant'].value,
            address: this.firstFormGroup.controls['addressFabricant'].value,
            logo: this.logo
        };
        this.dialogRef.close(data);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UpdateFabriquatDialogComponent.prototype, "file", void 0);
    UpdateFabriquatDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-fabriquat-dialog',
            template: __webpack_require__(/*! ./update-fabriquat-dialog.component.html */ "./src/app/layout/list-fabricants/update-fabriquat-dialog/update-fabriquat-dialog.component.html"),
            styles: [__webpack_require__(/*! ./update-fabriquat-dialog.component.scss */ "./src/app/layout/list-fabricants/update-fabriquat-dialog/update-fabriquat-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], UpdateFabriquatDialogComponent);
    return UpdateFabriquatDialogComponent;
}());



/***/ })

}]);
//# sourceMappingURL=list-fabricants-list-fabricants-module.js.map