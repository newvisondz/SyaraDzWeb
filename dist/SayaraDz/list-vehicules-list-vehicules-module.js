(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-vehicules-list-vehicules-module"],{

/***/ "./src/app/layout/list-vehicules/list-vehicules-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/list-vehicules/list-vehicules-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ListVehiculesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVehiculesRoutingModule", function() { return ListVehiculesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_vehicules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-vehicules.component */ "./src/app/layout/list-vehicules/list-vehicules.component.ts");




var routes = [
    {
        path: '', component: _list_vehicules_component__WEBPACK_IMPORTED_MODULE_3__["ListVehiculesComponent"]
    }
];
var ListVehiculesRoutingModule = /** @class */ (function () {
    function ListVehiculesRoutingModule() {
    }
    ListVehiculesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ListVehiculesRoutingModule);
    return ListVehiculesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/list-vehicules/list-vehicules.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/list-vehicules/list-vehicules.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\r\n    <app-page-header [heading]=\"'Liste des Véhicules'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">\r\n                    Liste des véhicules\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                  <mat-paginator [length]=\"lengthList\" [pageSize]=\"5\"\r\n                    [pageSizeOptions]=\"[5, 10, 15]\"></mat-paginator>\r\n                    <table mat-table [dataSource]=\"vehicules\" matSort class=\"mat-elevation-z8\" style=\"width : 100%\">\r\n\r\n                      <ng-container matColumnDef=\"index\">\r\n                        <th mat-header-cell *matHeaderCellDef > No. </th>\r\n                        <td mat-cell *matCellDef=\"let element; let i = index;\"> {{i+1}} </td>\r\n                      </ng-container>\r\n\r\n                      <ng-container matColumnDef=\"numéro de chassis\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Numéro de chassis </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.numChassis}} </td>\r\n                      </ng-container>\r\n\r\n                      <ng-container matColumnDef=\"version\">\r\n                        <th mat-header-cell *matHeaderCellDef> Version </th>\r\n                        <td mat-cell *matCellDef=\"let element\">{{element.version}}</td>\r\n                      </ng-container>\r\n\r\n                      <ng-container matColumnDef=\"couleur\">\r\n                        <th mat-header-cell *matHeaderCellDef> Couleur </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.couleur}} </td>\r\n                      </ng-container>\r\n\r\n                      <ng-container matColumnDef=\"concessionnaire\">\r\n                        <th mat-header-cell *matHeaderCellDef> concessionnaire </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.concessionnaire}} </td>\r\n                      </ng-container>\r\n\r\n                      <ng-container matColumnDef=\"manipulations\">\r\n                        <th mat-header-cell *matHeaderCellDef> Manipulations </th>\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                          <button class=\"mx-2\" mat-flat-button  (click) = \"onDelete(element.id)\">\r\n                            <mat-icon>delete</mat-icon>\r\n                          </button>\r\n                          <button class=\"mx-2\" mat-flat-button (click) = \"onUpdate(element)\">\r\n                            <mat-icon>create</mat-icon>\r\n                          </button>\r\n                        </td>\r\n                      </ng-container>\r\n\r\n                      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/list-vehicules/list-vehicules.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/list-vehicules/list-vehicules.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-logo {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xpc3QtdmVoaWN1bGVzL0M6XFxVc2Vyc1xcbmFib3VcXERvY3VtZW50c1xcQW5ndWxhclxccHJvamV0MmNzXFxTeWFyYUR6V2ViL3NyY1xcYXBwXFxsYXlvdXRcXGxpc3QtdmVoaWN1bGVzXFxsaXN0LXZlaGljdWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGlzdC12ZWhpY3VsZXMvbGlzdC12ZWhpY3VsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1sb2dve1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/list-vehicules/list-vehicules.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/list-vehicules/list-vehicules.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListVehiculesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVehiculesComponent", function() { return ListVehiculesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/delete-confirm-dialog/delete-confirm-dialog.component */ "./src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component.ts");






//import {UpdateVehiculeDialogComponent} from './update-vehicule-dialog/update-vehicule-dialog.component';
var ListVehiculesComponent = /** @class */ (function () {
    function ListVehiculesComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ['index', 'numéro de chassis', 'version', 'couleur', 'concessionnaire', 'manipulations'];
        this.lengthList = 2;
    }
    ListVehiculesComponent.prototype.ngOnInit = function () {
        this.loadVehiculesPage();
    };
    ListVehiculesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.paginator.page
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.loadVehiculesPage(); }))
            .subscribe();
    };
    ListVehiculesComponent.prototype.loadVehiculesPage = function () {
        var data = this.vehicules.data;
        data.push({
            id: "ge565d9f9z8z7",
            numChassis: "1259287",
            version: "TOYOTA AURIS 3",
            couleur: { name: "Noire", value: "#000000" },
            concessionnaire: "Alger",
            options: { name: "Places", value: "6" }
        }, {
            id: "ge565d9f9z8z7",
            numChassis: "12592458",
            version: "TOYOTA AURIS 4",
            couleur: { name: "Gris", value: "#CCCCCC" },
            concessionnaire: "Alger",
            options: { name: "Places", value: "5" }
        });
        this.vehicules.data = data;
    };
    ListVehiculesComponent.prototype.onDelete = function (id) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = { id: id };
        var dialogRef = this.dialog.open(_shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteConfirmDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.vehicules.data.splice(id, 1);
            }
        });
    };
    ListVehiculesComponent.prototype.onUpdate = function (vehicule) {
        /*const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {vehicule: vehicule};
        const dialogRef = this.dialog.open(UpdateVehiculeDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
          if(result.status){
            // update
          }
        });*/
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListVehiculesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ListVehiculesComponent.prototype, "sort", void 0);
    ListVehiculesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-vehicules',
            template: __webpack_require__(/*! ./list-vehicules.component.html */ "./src/app/layout/list-vehicules/list-vehicules.component.html"),
            styles: [__webpack_require__(/*! ./list-vehicules.component.scss */ "./src/app/layout/list-vehicules/list-vehicules.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ListVehiculesComponent);
    return ListVehiculesComponent;
}());



/***/ }),

/***/ "./src/app/layout/list-vehicules/list-vehicules.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/list-vehicules/list-vehicules.module.ts ***!
  \****************************************************************/
/*! exports provided: ListVehiculesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVehiculesModule", function() { return ListVehiculesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_vehicules_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-vehicules-routing.module */ "./src/app/layout/list-vehicules/list-vehicules-routing.module.ts");
/* harmony import */ var _list_vehicules_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-vehicules.component */ "./src/app/layout/list-vehicules/list-vehicules.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared */ "./src/app/layout/shared/index.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../material.module */ "./src/app/layout/material.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../shared/delete-confirm-dialog/delete-confirm-dialog.component */ "./src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









//import { UpdateVehichuleDialogComponent } from './update-vehicule-dialog/update-vehicule-dialog.component';

var ListVehiculesModule = /** @class */ (function () {
    function ListVehiculesModule() {
    }
    ListVehiculesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _list_vehicules_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListVehiculesRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["NotificationModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["DeleteConfirmDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            declarations: [_list_vehicules_component__WEBPACK_IMPORTED_MODULE_4__["ListVehiculesComponent"],],
            entryComponents: [_shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteConfirmDialogComponent"],],
        })
    ], ListVehiculesModule);
    return ListVehiculesModule;
}());



/***/ })

}]);
//# sourceMappingURL=list-vehicules-list-vehicules-module.js.map