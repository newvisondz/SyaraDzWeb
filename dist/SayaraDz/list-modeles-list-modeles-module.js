(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-modeles-list-modeles-module"],{

/***/ "./src/app/layout/list-modeles/create-attribute-dialog/create-attribute-dialog.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/list-modeles/create-attribute-dialog/create-attribute-dialog.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-dialog\">\n    <h2 mat-dialog-title>Modifier Modele</h2>\n    <mat-dialog-content class=\"mat-typography\">\n      <form [formGroup]=\"firstFormGroup\">\n        <div class=\"d-flex flex-column\">\n          <div class=\"d-flex flex-column\">\n            <h5>Créer un nouveau attribut :</h5>\n            <mat-form-field>\n              <input formControlName=\"name\" matInput placeholder=\"Nom de l'attribut\" />\n            </mat-form-field>\n            <mat-form-field>\n              <input formControlName=\"value\" matInput placeholder=\"La valeur de l'attribut\" />\n            </mat-form-field>\n          </div>\n        </div>\n      </form>\n    </mat-dialog-content>\n    <mat-dialog-actions align=\"end\">\n      <button mat-raised-button  color = \"primary\" (click) = \"onConfirm()\">Confirmer</button>\n      <button mat-raised-button mat-dialog-close color = \"warn\">Annuler</button>\n    </mat-dialog-actions>\n  </div>\n"

/***/ }),

/***/ "./src/app/layout/list-modeles/create-attribute-dialog/create-attribute-dialog.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/list-modeles/create-attribute-dialog/create-attribute-dialog.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-dialog {\n  width: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xpc3QtbW9kZWxlcy9jcmVhdGUtYXR0cmlidXRlLWRpYWxvZy9DOlxcVXNlcnNcXG5hYm91XFxEb2N1bWVudHNcXEFuZ3VsYXJcXHByb2pldDJjc1xcU3lhcmFEeldlYi9zcmNcXGFwcFxcbGF5b3V0XFxsaXN0LW1vZGVsZXNcXGNyZWF0ZS1hdHRyaWJ1dGUtZGlhbG9nXFxjcmVhdGUtYXR0cmlidXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9saXN0LW1vZGVsZXMvY3JlYXRlLWF0dHJpYnV0ZS1kaWFsb2cvY3JlYXRlLWF0dHJpYnV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWRpYWxvZ3tcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/list-modeles/create-attribute-dialog/create-attribute-dialog.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/list-modeles/create-attribute-dialog/create-attribute-dialog.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CreateAttributeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAttributeDialogComponent", function() { return CreateAttributeDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var CreateAttributeDialogComponent = /** @class */ (function () {
    function CreateAttributeDialogComponent(_formBuilder, dialogRef, data) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CreateAttributeDialogComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CreateAttributeDialogComponent.prototype.onConfirm = function () {
        var data = {
            status: true,
            name: this.firstFormGroup.controls['name'].value,
            value: this.firstFormGroup.controls['value'].value
        };
        this.dialogRef.close(data);
    };
    CreateAttributeDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-attribute-dialog',
            template: __webpack_require__(/*! ./create-attribute-dialog.component.html */ "./src/app/layout/list-modeles/create-attribute-dialog/create-attribute-dialog.component.html"),
            styles: [__webpack_require__(/*! ./create-attribute-dialog.component.scss */ "./src/app/layout/list-modeles/create-attribute-dialog/create-attribute-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], CreateAttributeDialogComponent);
    return CreateAttributeDialogComponent;
}());



/***/ }),

/***/ "./src/app/layout/list-modeles/create-modele-dialog/create-modele-dialog.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/list-modeles/create-modele-dialog/create-modele-dialog.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-dialog\">\n    <h2 mat-dialog-title>Modifier Modele</h2>\n    <mat-dialog-content class=\"mat-typography\">\n      <form [formGroup]=\"firstFormGroup\">\n        <div class=\"d-flex flex-column\">\n          <div class=\"d-flex flex-column\">\n            <h5>Créer un nouveau modéle :</h5>\n            <mat-form-field>\n              <input formControlName=\"nameModele\" matInput placeholder=\"Nom du modéle\" />\n            </mat-form-field>\n            <h6>Veuillez introduire la liste des couleurs disponibles ainsi que les versions: </h6>\n            <div class=\"row\">\n              <div class=\"col-sm-5\">\n                <mat-form-field>\n                  <input formControlName=\"name\" matInput placeholder=\"Nom de la couleur\" />\n                </mat-form-field>\n              </div>\n              <div class=\"col-sm-5\">\n                <mat-form-field>\n                  <input formControlName=\"value\" matInput placeholder=\"La valeur de la couleur\" />\n                </mat-form-field>\n              </div>\n              <div class=\"col-sm-2\">\n                <button mat-icon-button color=\"primary\" (click) = \"onCreateCouleur()\">\n                  <mat-icon>add</mat-icon>\n                </button>\n              </div>\n            </div>\n            <mat-list>\n              <h3 mat-subheader>Couleurs</h3>\n              <mat-list-item *ngFor=\"let couleur of couleurs, let i =index\">\n                <mat-icon mat-list-icon style=\"color : #228B22\">check_circle</mat-icon>\n                <h4 mat-line>{{couleur.name}}</h4>\n                <p mat-line> {{couleur.value}} </p>\n                <button mat-icon-button color=\"warn\" (click) = \"onDeleteCouleur(i)\">\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </mat-list-item>\n            </mat-list>\n            <div class=\"row\">\n              <div class=\"col-sm-2\">\n                <button mat-raised-button  color=\"primary\" (click) = \"onCreateVersion()\">\n                  Créer une version\n                </button>\n              </div>\n            </div>\n            <mat-list>\n              <h3 mat-subheader>Versions</h3>\n              <mat-list-item *ngFor=\"let version of versions, let i =index\">\n                <mat-icon mat-list-icon style=\"color : #228B22\">check_circle</mat-icon>\n                <h4 mat-line>{{version.name}}</h4>\n                <p mat-line> {{version.value}} </p>\n                <button mat-icon-button color=\"warn\" (click) = \"onDeleteVersion(i)\">\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </mat-list-item>\n            </mat-list>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <fieldset class=\"form-group\">\n                    <input\n                      #file\n                      type=\"file\"\n                      formControlName=\"modeleImage\"\n                      class=\"form-control\"\n                      accept=\"image/jpeg,image/png\"\n                      (change)=\"onFileChange($event)\"\n                      required\n                      style=\"display : none\">\n                </fieldset>\n                <button mat-raised-button (click) = \"addFiles()\">Choisir un logo du fabricant</button>\n              </div>\n              <div class=\"col-sm-6 d-flex flex-column\">\n                <fieldset class=\"form-group\">\n                    <img [src]=linkImage alt=\"Aucun logo choisie\" height=\"200px\" width=\"200px\">\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </mat-dialog-content>\n    <mat-dialog-actions align=\"end\">\n      <button mat-raised-button  color = \"primary\" (click) = \"onConfirm()\">Confirmer</button>\n      <button mat-raised-button mat-dialog-close color = \"warn\">Annuler</button>\n    </mat-dialog-actions>\n  </div>\n"

/***/ }),

/***/ "./src/app/layout/list-modeles/create-modele-dialog/create-modele-dialog.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/list-modeles/create-modele-dialog/create-modele-dialog.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-dialog {\n  width: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xpc3QtbW9kZWxlcy9jcmVhdGUtbW9kZWxlLWRpYWxvZy9DOlxcVXNlcnNcXG5hYm91XFxEb2N1bWVudHNcXEFuZ3VsYXJcXHByb2pldDJjc1xcU3lhcmFEeldlYi9zcmNcXGFwcFxcbGF5b3V0XFxsaXN0LW1vZGVsZXNcXGNyZWF0ZS1tb2RlbGUtZGlhbG9nXFxjcmVhdGUtbW9kZWxlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9saXN0LW1vZGVsZXMvY3JlYXRlLW1vZGVsZS1kaWFsb2cvY3JlYXRlLW1vZGVsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWRpYWxvZ3tcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/list-modeles/create-modele-dialog/create-modele-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/list-modeles/create-modele-dialog/create-modele-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CreateModeleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateModeleDialogComponent", function() { return CreateModeleDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/delete-confirm-dialog/delete-confirm-dialog.component */ "./src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component.ts");
/* harmony import */ var _create_version_dialog_create_version_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../create-version-dialog/create-version-dialog.component */ "./src/app/layout/list-modeles/create-version-dialog/create-version-dialog.component.ts");






var CreateModeleDialogComponent = /** @class */ (function () {
    function CreateModeleDialogComponent(_formBuilder, dialogRef, data, dialog) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.versions = [];
        this.couleurs = [];
        this.modeleImage = null;
        this.linkImage = '';
    }
    CreateModeleDialogComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            nameModele: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            modeleImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CreateModeleDialogComponent.prototype.addFiles = function () {
        this.file.nativeElement.click();
    };
    CreateModeleDialogComponent.prototype.onFileChange = function ($event) {
        var _this = this;
        this.modeleImage = event.target.files[0];
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.linkImage = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    CreateModeleDialogComponent.prototype.onCreateVersion = function () {
        var _this = this;
        //open create version modal
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        var dialogRef = this.dialog.open(_create_version_dialog_create_version_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CreateVersionDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.status) {
                console.log("add version " + result.nameVersion);
                var version = {
                    name: result.nameVersion,
                    options: result.options
                };
                _this.versions.push(version);
            }
        });
    };
    CreateModeleDialogComponent.prototype.onDeleteVersion = function (id) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: id };
        var dialogRef = this.dialog.open(_shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteConfirmDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                //confirm delete
                console.log("delete option " + _this.versions[id].name);
                _this.versions.splice(id, 1);
            }
        });
    };
    CreateModeleDialogComponent.prototype.onCreateCouleur = function () {
        console.log("add couleur " + this.firstFormGroup.controls['name'].value);
        this.couleurs.push({
            name: this.firstFormGroup.controls['name'].value,
            value: this.firstFormGroup.controls['value'].value
        });
    };
    CreateModeleDialogComponent.prototype.onDeleteCouleur = function (id) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: id };
        var dialogRef = this.dialog.open(_shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteConfirmDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                //confirm delete
                console.log("delete couleur " + _this.couleurs[id].name);
                _this.couleurs.splice(id, 1);
            }
        });
    };
    CreateModeleDialogComponent.prototype.onConfirm = function () {
        var data = {
            status: true,
            nameModele: this.firstFormGroup.controls['nameModele'].value,
            versions: this.versions,
            couleurs: this.couleurs,
            photo: this.linkImage
        };
        this.dialogRef.close(data);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CreateModeleDialogComponent.prototype, "file", void 0);
    CreateModeleDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-modele-dialog',
            template: __webpack_require__(/*! ./create-modele-dialog.component.html */ "./src/app/layout/list-modeles/create-modele-dialog/create-modele-dialog.component.html"),
            styles: [__webpack_require__(/*! ./create-modele-dialog.component.scss */ "./src/app/layout/list-modeles/create-modele-dialog/create-modele-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], CreateModeleDialogComponent);
    return CreateModeleDialogComponent;
}());



/***/ }),

/***/ "./src/app/layout/list-modeles/create-version-dialog/create-version-dialog.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/layout/list-modeles/create-version-dialog/create-version-dialog.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-dialog\">\n    <h2 mat-dialog-title>Modifier Modele</h2>\n    <mat-dialog-content class=\"mat-typography\">\n      <form [formGroup]=\"firstFormGroup\">\n        <div class=\"d-flex flex-column\">\n          <div class=\"d-flex flex-column\">\n            <h5>Créer un nouvelle version :</h5>\n            <mat-form-field>\n              <input formControlName=\"nameVersion\" matInput placeholder=\"Nom de la version\" />\n            </mat-form-field>\n            <h6>Veuillez introduire la liste des options compatibles avec cette version : </h6>\n            <div class=\"row\">\n              <div class=\"col-sm-5\">\n                <mat-form-field>\n                  <input formControlName=\"name\" matInput placeholder=\"Nom de l'attribut\" />\n                </mat-form-field>\n              </div>\n              <div class=\"col-sm-5\">\n                <mat-form-field>\n                  <input formControlName=\"value\" matInput placeholder=\"La valeur de l'attribut\" />\n                </mat-form-field>\n              </div>\n              <div class=\"col-sm-2\">\n                <button mat-icon-button color=\"primary\" (click) = \"onCreateOption()\">\n                  <mat-icon>add</mat-icon>\n                </button>\n              </div>\n            </div>\n            <mat-list>\n              <h3 mat-subheader>Options</h3>\n              <mat-list-item *ngFor=\"let option of options, let i =index\">\n                <mat-icon mat-list-icon style=\"color : #228B22\">check_circle</mat-icon>\n                <h4 mat-line>{{option.name}}</h4>\n                <p mat-line> {{option.value}} </p>\n                <button mat-icon-button color=\"warn\" (click) = \"onDeleteOption(i)\">\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </mat-list-item>\n            </mat-list>\n          </div>\n        </div>\n      </form>\n    </mat-dialog-content>\n    <mat-dialog-actions align=\"end\">\n      <button mat-raised-button  color = \"primary\" (click) = \"onConfirm()\">Confirmer</button>\n      <button mat-raised-button mat-dialog-close color = \"warn\">Annuler</button>\n    </mat-dialog-actions>\n  </div>\n"

/***/ }),

/***/ "./src/app/layout/list-modeles/create-version-dialog/create-version-dialog.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/layout/list-modeles/create-version-dialog/create-version-dialog.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-dialog {\n  width: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xpc3QtbW9kZWxlcy9jcmVhdGUtdmVyc2lvbi1kaWFsb2cvQzpcXFVzZXJzXFxuYWJvdVxcRG9jdW1lbnRzXFxBbmd1bGFyXFxwcm9qZXQyY3NcXFN5YXJhRHpXZWIvc3JjXFxhcHBcXGxheW91dFxcbGlzdC1tb2RlbGVzXFxjcmVhdGUtdmVyc2lvbi1kaWFsb2dcXGNyZWF0ZS12ZXJzaW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9saXN0LW1vZGVsZXMvY3JlYXRlLXZlcnNpb24tZGlhbG9nL2NyZWF0ZS12ZXJzaW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZGlhbG9ne1xyXG4gIHdpZHRoOiA1MDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/list-modeles/create-version-dialog/create-version-dialog.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/list-modeles/create-version-dialog/create-version-dialog.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CreateVersionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVersionDialogComponent", function() { return CreateVersionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/delete-confirm-dialog/delete-confirm-dialog.component */ "./src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component.ts");





var CreateVersionDialogComponent = /** @class */ (function () {
    function CreateVersionDialogComponent(_formBuilder, dialogRef, data, dialog) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.options = [];
    }
    CreateVersionDialogComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            nameVersion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CreateVersionDialogComponent.prototype.onCreateOption = function () {
        console.log("add option " + this.firstFormGroup.controls['name'].value.name);
        this.options.push({
            name: this.firstFormGroup.controls['name'].value,
            value: this.firstFormGroup.controls['value'].value
        });
    };
    CreateVersionDialogComponent.prototype.onDeleteOption = function (id) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: id };
        var dialogRef = this.dialog.open(_shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteConfirmDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log("delete option " + _this.options[id].name);
                _this.options.splice(id, 1);
            }
        });
    };
    CreateVersionDialogComponent.prototype.onConfirm = function () {
        var data = {
            status: true,
            nameVersion: this.firstFormGroup.controls['nameVersion'].value,
            options: this.options
        };
        this.dialogRef.close(data);
    };
    CreateVersionDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-version-dialog',
            template: __webpack_require__(/*! ./create-version-dialog.component.html */ "./src/app/layout/list-modeles/create-version-dialog/create-version-dialog.component.html"),
            styles: [__webpack_require__(/*! ./create-version-dialog.component.scss */ "./src/app/layout/list-modeles/create-version-dialog/create-version-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], CreateVersionDialogComponent);
    return CreateVersionDialogComponent;
}());



/***/ }),

/***/ "./src/app/layout/list-modeles/list-modeles-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/list-modeles/list-modeles-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ListModelesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModelesRoutingModule", function() { return ListModelesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_modeles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-modeles.component */ "./src/app/layout/list-modeles/list-modeles.component.ts");




var routes = [
    {
        path: '', component: _list_modeles_component__WEBPACK_IMPORTED_MODULE_3__["ListModelesComponent"]
    }
];
var ListModelesRoutingModule = /** @class */ (function () {
    function ListModelesRoutingModule() {
    }
    ListModelesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ListModelesRoutingModule);
    return ListModelesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/list-modeles/list-modeles.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/list-modeles/list-modeles.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\r\n    <app-page-header [heading]=\"'Liste des Modeles'\" [icon]=\"'fas fa-car'\"></app-page-header>\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">\r\n                    Liste des Modeles\r\n                    <div style=\"float : right\">\r\n                      <button mat-icon-button color=\"primary\" (click) = \"onCreateModele()\">\r\n                        <mat-icon>add</mat-icon>\r\n                      </button>\r\n                    </div>\r\n                </div>\r\n                <mat-accordion>\r\n                  <mat-expansion-panel *ngFor= \"let modele of listModeles, let j = index\">\r\n                    <mat-expansion-panel-header>\r\n                      <mat-panel-title>\r\n                        <img [src]=\"modele.photo\" class=\"icon-logo\" alt=\"\">\r\n                        <span style = \"margin-left : 10px; margin-top : 10px; font-weight : bold\">{{modele.name}}</span>\r\n                      </mat-panel-title>\r\n                      <mat-panel-description>\r\n                         <span style = \"margin-left : 10px; margin-top : 10px;\">{{modele.versions.length}} options et {{modele.couleurs.length}} couleurs</span>\r\n                      </mat-panel-description>\r\n                    </mat-expansion-panel-header>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <span style=\"color : rgba(0,0,0,.54); margin : 20px\">Versions</span>\r\n                        <div style=\"float : right\">\r\n                          <button mat-icon-button color=\"primary\" (click) = \"onCreateVersion(j)\" >\r\n                            <mat-icon>add</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                        <div style=\"clear:both;\">\r\n                        </div>\r\n\r\n                        <mat-expansion-panel *ngFor= \"let version of modele.versions, let h = index\">\r\n                          <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                              {{version.name}}\r\n                            </mat-panel-title>\r\n                            <mat-panel-description>\r\n                               {{version.options.length}} options\r\n                            </mat-panel-description>\r\n                          </mat-expansion-panel-header>\r\n                          <div style=\"float : right\">\r\n                            <button mat-icon-button color=\"primary\" (click) = \"onCreateOption(h,j)\">\r\n                              <mat-icon>add</mat-icon>\r\n                            </button>\r\n                          </div>\r\n                          <mat-list>\r\n                            <h3 mat-subheader>Options</h3>\r\n                            <mat-list-item *ngFor=\"let option of version.options, let i =index\">\r\n                              <mat-icon mat-list-icon style=\"color : #228B22\">check_circle</mat-icon>\r\n                              <h4 mat-line>{{option.name}}</h4>\r\n                              <p mat-line> {{option.value}} </p>\r\n                                <button mat-icon-button color=\"primary\" (click) = \"onUpdateOption(i,j,h)\">\r\n                                  <mat-icon>create</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button color=\"warn\" (click) = \"onDeleteOption(i,j,h)\">\r\n                                  <mat-icon>delete</mat-icon>\r\n                                </button>\r\n                            </mat-list-item>\r\n                          </mat-list>\r\n                        </mat-expansion-panel>\r\n                      </div>\r\n                      <mat-divider [vertical]=\"true\"></mat-divider>\r\n                      <div class=\"col-sm-5\">\r\n                        <div style=\"float : right\">\r\n                          <button mat-icon-button color=\"primary\" (click) = \"onCreateCouleur(j)\">\r\n                            <mat-icon>add</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                        <mat-list>\r\n                          <h3 mat-subheader>Couleurs</h3>\r\n                          <mat-list-item *ngFor=\"let couleur of modele.couleurs, let i = index\">\r\n                            <mat-icon mat-list-icon [style.color]=\"couleur.value\">invert_colors</mat-icon>\r\n                            <h4 mat-line>{{couleur.name}}</h4>\r\n                            <p mat-line> {{couleur.value}} </p>\r\n                            <button mat-icon-button color=\"primary\" (click) = \"onUpdateCouleur(i,j)\">\r\n                              <mat-icon>create</mat-icon>\r\n                            </button>\r\n                            <button mat-icon-button color=\"warn\" (click) = \"onDeleteCouleur(i,j)\">\r\n                              <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                          </mat-list-item>\r\n                        </mat-list>\r\n                      </div>\r\n                    </div>\r\n                  </mat-expansion-panel>\r\n               </mat-accordion>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/list-modeles/list-modeles.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/list-modeles/list-modeles.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-logo {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xpc3QtbW9kZWxlcy9DOlxcVXNlcnNcXG5hYm91XFxEb2N1bWVudHNcXEFuZ3VsYXJcXHByb2pldDJjc1xcU3lhcmFEeldlYi9zcmNcXGFwcFxcbGF5b3V0XFxsaXN0LW1vZGVsZXNcXGxpc3QtbW9kZWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGlzdC1tb2RlbGVzL2xpc3QtbW9kZWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWxvZ297XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmbGV4LXNocmluazogMDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/list-modeles/list-modeles.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/list-modeles/list-modeles.component.ts ***!
  \***************************************************************/
/*! exports provided: ListModelesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModelesComponent", function() { return ListModelesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/delete-confirm-dialog/delete-confirm-dialog.component */ "./src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component.ts");
/* harmony import */ var _update_modele_dialog_update_modele_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-modele-dialog/update-modele-dialog.component */ "./src/app/layout/list-modeles/update-modele-dialog/update-modele-dialog.component.ts");
/* harmony import */ var _create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-attribute-dialog/create-attribute-dialog.component */ "./src/app/layout/list-modeles/create-attribute-dialog/create-attribute-dialog.component.ts");
/* harmony import */ var _create_version_dialog_create_version_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-version-dialog/create-version-dialog.component */ "./src/app/layout/list-modeles/create-version-dialog/create-version-dialog.component.ts");
/* harmony import */ var _create_modele_dialog_create_modele_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-modele-dialog/create-modele-dialog.component */ "./src/app/layout/list-modeles/create-modele-dialog/create-modele-dialog.component.ts");








var ListModelesComponent = /** @class */ (function () {
    function ListModelesComponent(dialog) {
        this.dialog = dialog;
        //list des modéles à récupérer depuis la BDD
        this.listModeles = [
            {
                name: "TOYOTA AURIS 3",
                photo: "../../assets/car1.jpg",
                couleurs: [
                    {
                        name: "Rouge",
                        value: "#A91101"
                    },
                    {
                        name: "Noire",
                        value: "#00000"
                    },
                    {
                        name: "Blanc",
                        value: "#FFFFFF"
                    },
                    {
                        name: "Gris",
                        value: "#cccccc"
                    },
                ],
                versions: [
                    {
                        name: "TOYOTA AURIS 2 TOURING SPORTS",
                        options: [
                            {
                                name: "Places",
                                value: "5"
                            },
                            {
                                name: "Air conditionné",
                                value: "De série"
                            },
                            {
                                name: "Navigateur",
                                value: "dès 450 €"
                            },
                            {
                                name: "inclut démarrage sans clé",
                                value: "Dés 650 €"
                            },
                        ],
                    },
                    {
                        name: "TOYOTA AURIS 2 TOURISM",
                        options: [
                            {
                                name: "Places",
                                value: "5"
                            },
                            {
                                name: "Air conditionné",
                                value: "De série"
                            },
                            {
                                name: "Navigateur",
                                value: "dès 450 €"
                            },
                            {
                                name: "inclut démarrage sans clé",
                                value: "Dés 650 €"
                            },
                        ],
                    },
                    {
                        name: "TOYOTA AURIS 2 TOURING",
                        options: [
                            {
                                name: "Places",
                                value: "5"
                            },
                            {
                                name: "Air conditionné",
                                value: "De série"
                            },
                            {
                                name: "Navigateur",
                                value: "dès 450 €"
                            },
                            {
                                name: "inclut démarrage sans clé",
                                value: "Dés 650 €"
                            },
                        ],
                    },
                    {
                        name: "TOYOTA AURIS 2 AFFAIRES",
                        options: [
                            {
                                name: "Places",
                                value: "5"
                            },
                            {
                                name: "Air conditionné",
                                value: "De série"
                            },
                            {
                                name: "Navigateur",
                                value: "dès 450 €"
                            },
                            {
                                name: "inclut démarrage sans clé",
                                value: "Dés 650 €"
                            },
                        ],
                    },
                    {
                        name: "TOYOTA AURIS 2 BUSINESS",
                        options: [
                            {
                                name: "Places",
                                value: "5"
                            },
                            {
                                name: "Air conditionné",
                                value: "De série"
                            },
                            {
                                name: "Navigateur",
                                value: "dès 450 €"
                            },
                            {
                                name: "inclut démarrage sans clé",
                                value: "Dés 650 €"
                            },
                        ],
                    },
                ]
            },
            {
                name: "TOYOTA AYGO 3 PORTES",
                photo: "../../assets/car2.jpg",
                couleurs: [
                    {
                        name: "Rouge",
                        value: "#A91101"
                    },
                    {
                        name: "Noire",
                        value: "#00000"
                    },
                    {
                        name: "Blanc",
                        value: "#FFFFFF"
                    },
                    {
                        name: "Gris",
                        value: "#cccccc"
                    },
                ],
                versions: [
                    {
                        name: "TOYOTA AURIS 2 TOURING SPORTS",
                        options: [
                            {
                                name: "Places",
                                value: "5"
                            },
                            {
                                name: "Air conditionné",
                                value: "De série"
                            },
                            {
                                name: "Navigateur",
                                value: "dès 450 €"
                            },
                            {
                                name: "inclut démarrage sans clé",
                                value: "Dés 650 €"
                            },
                        ],
                    },
                    {
                        name: "TOYOTA AURIS 2 TOURISM",
                        options: [
                            {
                                name: "Places",
                                value: "5"
                            },
                            {
                                name: "Air conditionné",
                                value: "De série"
                            },
                            {
                                name: "Navigateur",
                                value: "dès 450 €"
                            },
                            {
                                name: "inclut démarrage sans clé",
                                value: "Dés 650 €"
                            },
                        ],
                    },
                    {
                        name: "TOYOTA AURIS 2 TOURING",
                        options: [
                            {
                                name: "Places",
                                value: "5"
                            },
                            {
                                name: "Air conditionné",
                                value: "De série"
                            },
                            {
                                name: "Navigateur",
                                value: "dès 450 €"
                            },
                            {
                                name: "inclut démarrage sans clé",
                                value: "Dés 650 €"
                            },
                        ],
                    },
                    {
                        name: "TOYOTA AURIS 2 AFFAIRES",
                        options: [
                            {
                                name: "Places",
                                value: "5"
                            },
                            {
                                name: "Air conditionné",
                                value: "De série"
                            },
                            {
                                name: "Navigateur",
                                value: "dès 450 €"
                            },
                            {
                                name: "inclut démarrage sans clé",
                                value: "Dés 650 €"
                            },
                        ],
                    },
                    {
                        name: "TOYOTA AURIS 2 BUSINESS",
                        options: [
                            {
                                name: "Places",
                                value: "5"
                            },
                            {
                                name: "Air conditionné",
                                value: "De série"
                            },
                            {
                                name: "Navigateur",
                                value: "dès 450 €"
                            },
                            {
                                name: "inclut démarrage sans clé",
                                value: "Dés 650 €"
                            },
                        ],
                    },
                ]
            },
            {
                name: "TOYOTA YARIS",
                photo: "../../assets/car3.jpg",
                couleurs: [
                    {
                        name: "Rouge",
                        value: "#A91101"
                    },
                    {
                        name: "Noire",
                        value: "#00000"
                    },
                    {
                        name: "Blanc",
                        value: "#FFFFFF"
                    },
                    {
                        name: "Gris",
                        value: "#cccccc"
                    },
                ],
                versions: [
                    {
                        name: "TOYOTA AURIS 2 TOURING SPORTS",
                        options: [
                            {
                                name: "Places",
                                value: "5"
                            },
                            {
                                name: "Air conditionné",
                                value: "De série"
                            },
                            {
                                name: "Navigateur",
                                value: "dès 450 €"
                            },
                            {
                                name: "inclut démarrage sans clé",
                                value: "Dés 650 €"
                            },
                        ],
                    },
                    {
                        name: "TOYOTA AURIS 2 TOURISM",
                        options: [
                            {
                                name: "Places",
                                value: "5"
                            },
                            {
                                name: "Air conditionné",
                                value: "De série"
                            },
                            {
                                name: "Navigateur",
                                value: "dès 450 €"
                            },
                            {
                                name: "inclut démarrage sans clé",
                                value: "Dés 650 €"
                            },
                        ],
                    },
                    {
                        name: "TOYOTA AURIS 2 TOURING",
                        options: [
                            {
                                name: "Places",
                                value: "5"
                            },
                            {
                                name: "Air conditionné",
                                value: "De série"
                            },
                            {
                                name: "Navigateur",
                                value: "dès 450 €"
                            },
                            {
                                name: "inclut démarrage sans clé",
                                value: "Dés 650 €"
                            },
                        ],
                    },
                    {
                        name: "TOYOTA AURIS 2 AFFAIRES",
                        options: [
                            {
                                name: "Places",
                                value: "5"
                            },
                            {
                                name: "Air conditionné",
                                value: "De série"
                            },
                            {
                                name: "Navigateur",
                                value: "dès 450 €"
                            },
                            {
                                name: "inclut démarrage sans clé",
                                value: "Dés 650 €"
                            },
                        ],
                    },
                    {
                        name: "TOYOTA AURIS 2 BUSINESS",
                        options: [
                            {
                                name: "Places",
                                value: "5"
                            },
                            {
                                name: "Air conditionné",
                                value: "De série"
                            },
                            {
                                name: "Navigateur",
                                value: "dès 450 €"
                            },
                            {
                                name: "inclut démarrage sans clé",
                                value: "Dés 650 €"
                            },
                        ],
                    },
                ]
            },
        ];
    }
    ListModelesComponent.prototype.ngOnInit = function () {
        //remplir la Liste des modéles
    };
    ListModelesComponent.prototype.ngAfterViewInit = function () {
    };
    //supprimer une option
    ListModelesComponent.prototype.onDeleteOption = function (id, idModele, idVersion) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: id };
        var dialogRef = this.dialog.open(_shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DeleteConfirmDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                //valider la suppression
                console.log("delete option " + _this.listModeles[idModele].versions[idVersion].options[id].name);
                _this.listModeles[idModele].versions[idVersion].options.splice(id, 1);
            }
        });
    };
    //supprimer couleur
    ListModelesComponent.prototype.onDeleteCouleur = function (id, idModele) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: id };
        var dialogRef = this.dialog.open(_shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DeleteConfirmDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                //valider la suppression
                console.log("delete couleur " + _this.listModeles[idModele].couleurs[id].name);
                _this.listModeles[idModele].couleurs.splice(id, 1);
            }
        });
    };
    //modifier une option
    ListModelesComponent.prototype.onUpdateOption = function (id, idModele, idVersion) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            option: this.listModeles[idModele].versions[idVersion].options[id],
        };
        var dialogRef = this.dialog.open(_update_modele_dialog_update_modele_dialog_component__WEBPACK_IMPORTED_MODULE_4__["UpdateModeleDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.status) {
                //valider la modification
                console.log("update option " + _this.listModeles[idModele].versions[idVersion].options[id].name);
                _this.listModeles[idModele].versions[idVersion].options[id] = {
                    name: result.name,
                    value: result.value
                };
            }
        });
    };
    //modifier une couleur
    ListModelesComponent.prototype.onUpdateCouleur = function (id, idModele) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            option: this.listModeles[idModele].couleurs[id],
        };
        var dialogRef = this.dialog.open(_update_modele_dialog_update_modele_dialog_component__WEBPACK_IMPORTED_MODULE_4__["UpdateModeleDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.status) {
                //valider la modification
                console.log("update couleur " + _this.listModeles[idModele].couleurs[id].name);
                _this.listModeles[idModele].couleurs[id] = {
                    name: result.name,
                    value: result.value
                };
            }
        });
    };
    //créer une option
    ListModelesComponent.prototype.onCreateOption = function (idVersion, idModele) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        var dialogRef = this.dialog.open(_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CreateAttributeDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.status) {
                //valider la création
                console.log("add option " + result.name);
                _this.listModeles[idModele].versions[idVersion].options.push({
                    name: result.name,
                    value: result.value
                });
            }
        });
    };
    //créer une couleur
    ListModelesComponent.prototype.onCreateCouleur = function (idModele) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        var dialogRef = this.dialog.open(_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CreateAttributeDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.status) {
                //valider la création
                console.log("add couleur " + result.name);
                _this.listModeles[idModele].couleurs.push({
                    name: result.name,
                    value: result.value
                });
            }
        });
    };
    //créer une version
    ListModelesComponent.prototype.onCreateVersion = function (idModele) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        var dialogRef = this.dialog.open(_create_version_dialog_create_version_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CreateVersionDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.status) {
                //valider la création
                console.log("add version " + result.nameVersion);
                var version = {
                    name: result.nameVersion,
                    options: result.options
                };
                _this.listModeles[idModele].versions.push(version);
            }
        });
    };
    //créer un modéle
    ListModelesComponent.prototype.onCreateModele = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        var dialogRef = this.dialog.open(_create_modele_dialog_create_modele_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CreateModeleDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.status) {
                console.log("add modele " + result.nameModele);
                var modele = {
                    name: result.nameModele,
                    couleurs: result.couleurs,
                    versions: result.versions,
                    photo: result.photo,
                };
                _this.listModeles.push(modele);
            }
        });
    };
    ListModelesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-modeles',
            template: __webpack_require__(/*! ./list-modeles.component.html */ "./src/app/layout/list-modeles/list-modeles.component.html"),
            styles: [__webpack_require__(/*! ./list-modeles.component.scss */ "./src/app/layout/list-modeles/list-modeles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ListModelesComponent);
    return ListModelesComponent;
}());



/***/ }),

/***/ "./src/app/layout/list-modeles/list-modeles.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/list-modeles/list-modeles.module.ts ***!
  \************************************************************/
/*! exports provided: ListModelesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModelesModule", function() { return ListModelesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_modeles_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-modeles-routing.module */ "./src/app/layout/list-modeles/list-modeles-routing.module.ts");
/* harmony import */ var _list_modeles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-modeles.component */ "./src/app/layout/list-modeles/list-modeles.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared */ "./src/app/layout/shared/index.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../material.module */ "./src/app/layout/material.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../shared/delete-confirm-dialog/delete-confirm-dialog.component */ "./src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component.ts");
/* harmony import */ var _update_modele_dialog_update_modele_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-modele-dialog/update-modele-dialog.component */ "./src/app/layout/list-modeles/update-modele-dialog/update-modele-dialog.component.ts");
/* harmony import */ var _create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-attribute-dialog/create-attribute-dialog.component */ "./src/app/layout/list-modeles/create-attribute-dialog/create-attribute-dialog.component.ts");
/* harmony import */ var _create_version_dialog_create_version_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-version-dialog/create-version-dialog.component */ "./src/app/layout/list-modeles/create-version-dialog/create-version-dialog.component.ts");
/* harmony import */ var _create_modele_dialog_create_modele_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-modele-dialog/create-modele-dialog.component */ "./src/app/layout/list-modeles/create-modele-dialog/create-modele-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");














var ListModelesModule = /** @class */ (function () {
    function ListModelesModule() {
    }
    ListModelesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _list_modeles_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListModelesRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["NotificationModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["DeleteConfirmDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
            ],
            declarations: [_list_modeles_component__WEBPACK_IMPORTED_MODULE_4__["ListModelesComponent"], _update_modele_dialog_update_modele_dialog_component__WEBPACK_IMPORTED_MODULE_9__["UpdateModeleDialogComponent"], _create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CreateAttributeDialogComponent"], _create_version_dialog_create_version_dialog_component__WEBPACK_IMPORTED_MODULE_11__["CreateVersionDialogComponent"], _create_modele_dialog_create_modele_dialog_component__WEBPACK_IMPORTED_MODULE_12__["CreateModeleDialogComponent"]],
            entryComponents: [_shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteConfirmDialogComponent"], _update_modele_dialog_update_modele_dialog_component__WEBPACK_IMPORTED_MODULE_9__["UpdateModeleDialogComponent"], _create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CreateAttributeDialogComponent"], _create_version_dialog_create_version_dialog_component__WEBPACK_IMPORTED_MODULE_11__["CreateVersionDialogComponent"], _create_modele_dialog_create_modele_dialog_component__WEBPACK_IMPORTED_MODULE_12__["CreateModeleDialogComponent"]],
        })
    ], ListModelesModule);
    return ListModelesModule;
}());



/***/ }),

/***/ "./src/app/layout/list-modeles/update-modele-dialog/update-modele-dialog.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/list-modeles/update-modele-dialog/update-modele-dialog.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-dialog\">\n    <h2 mat-dialog-title>Modifier Modele</h2>\n    <mat-dialog-content class=\"mat-typography\">\n      <form [formGroup]=\"firstFormGroup\">\n        <div class=\"d-flex flex-column\">\n          <div class=\"d-flex flex-column\">\n            <h5>Modifier option {{data.option.name}} :</h5>\n            <mat-form-field>\n              <input formControlName=\"name\" matInput [value]=\"data.option.name\" placeholder=\"Nom de l'option\" />\n            </mat-form-field>\n            <mat-form-field>\n              <input formControlName=\"value\" [value]=\"data.option.value\" matInput placeholder=\"La valeur de l'option\" />\n            </mat-form-field>\n          </div>\n        </div>\n      </form>\n    </mat-dialog-content>\n    <mat-dialog-actions align=\"end\">\n      <button mat-raised-button  color = \"primary\" (click) = \"onConfirm()\">Confirmer</button>\n      <button mat-raised-button mat-dialog-close color = \"warn\">Annuler</button>\n    </mat-dialog-actions>\n  </div>\n"

/***/ }),

/***/ "./src/app/layout/list-modeles/update-modele-dialog/update-modele-dialog.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/list-modeles/update-modele-dialog/update-modele-dialog.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-dialog {\n  width: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xpc3QtbW9kZWxlcy91cGRhdGUtbW9kZWxlLWRpYWxvZy9DOlxcVXNlcnNcXG5hYm91XFxEb2N1bWVudHNcXEFuZ3VsYXJcXHByb2pldDJjc1xcU3lhcmFEeldlYi9zcmNcXGFwcFxcbGF5b3V0XFxsaXN0LW1vZGVsZXNcXHVwZGF0ZS1tb2RlbGUtZGlhbG9nXFx1cGRhdGUtbW9kZWxlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9saXN0LW1vZGVsZXMvdXBkYXRlLW1vZGVsZS1kaWFsb2cvdXBkYXRlLW1vZGVsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWRpYWxvZ3tcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/list-modeles/update-modele-dialog/update-modele-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/list-modeles/update-modele-dialog/update-modele-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UpdateModeleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateModeleDialogComponent", function() { return UpdateModeleDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var UpdateModeleDialogComponent = /** @class */ (function () {
    function UpdateModeleDialogComponent(_formBuilder, dialogRef, data) {
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    UpdateModeleDialogComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    UpdateModeleDialogComponent.prototype.onConfirm = function () {
        var data = {
            status: true,
            name: this.firstFormGroup.controls['name'].value,
            value: this.firstFormGroup.controls['value'].value
        };
        this.dialogRef.close(data);
    };
    UpdateModeleDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-modele-dialog',
            template: __webpack_require__(/*! ./update-modele-dialog.component.html */ "./src/app/layout/list-modeles/update-modele-dialog/update-modele-dialog.component.html"),
            styles: [__webpack_require__(/*! ./update-modele-dialog.component.scss */ "./src/app/layout/list-modeles/update-modele-dialog/update-modele-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], UpdateModeleDialogComponent);
    return UpdateModeleDialogComponent;
}());



/***/ })

}]);
//# sourceMappingURL=list-modeles-list-modeles-module.js.map