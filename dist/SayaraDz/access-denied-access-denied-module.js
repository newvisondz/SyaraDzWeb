(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-denied-access-denied-module"],{

/***/ "./src/app/access-denied/access-denied-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/access-denied/access-denied-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AccessDeniedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedRoutingModule", function() { return AccessDeniedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _access_denied_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-denied.component */ "./src/app/access-denied/access-denied.component.ts");




var routes = [
    {
        path: '', component: _access_denied_component__WEBPACK_IMPORTED_MODULE_3__["AccessDeniedComponent"]
    }
];
var AccessDeniedRoutingModule = /** @class */ (function () {
    function AccessDeniedRoutingModule() {
    }
    AccessDeniedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccessDeniedRoutingModule);
    return AccessDeniedRoutingModule;
}());



/***/ }),

/***/ "./src/app/access-denied/access-denied.component.html":
/*!************************************************************!*\
  !*** ./src/app/access-denied/access-denied.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n\t\t<div class=\"notfound\">\n\t\t\t<div class=\"notfound-404\">\n\t\t\t\t<h1>4<span>0</span>3</h1>\n\t\t\t</div>\n\t\t\t<p>You are not allowed to enter here!!!</p>\n\t\t\t<a routerLink = \"/\">home page</a>\n\t\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/access-denied/access-denied.component.scss":
/*!************************************************************!*\
  !*** ./src/app/access-denied/access-denied.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notfound {\n  position: relative;\n  height: 100vh;\n  background-color: #222; }\n\n#notfound .notfound {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%); }\n\n.notfound {\n  max-width: 460px;\n  width: 100%;\n  text-align: center;\n  line-height: 1.4; }\n\n.notfound .notfound-404 {\n  height: 158px;\n  line-height: 153px; }\n\n.notfound .notfound-404 h1 {\n  font-family: 'Josefin Sans', sans-serif;\n  color: #222;\n  font-size: 220px;\n  letter-spacing: 10px;\n  margin: 0px;\n  font-weight: 700;\n  text-shadow: 2px 2px 0px #c9c9c9, -2px -2px 0px #c9c9c9; }\n\n.notfound .notfound-404 h1 > span {\n  text-shadow: 2px 2px 0px #ffab00, -2px -2px 0px #ffab00, 0px 0px 8px #ff8700; }\n\n.notfound p {\n  font-family: 'Josefin Sans', sans-serif;\n  color: #c9c9c9;\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 90px;\n  margin-bottom: 15px; }\n\n.notfound a {\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 14px;\n  text-decoration: none;\n  text-transform: uppercase;\n  background: transparent;\n  color: #c9c9c9;\n  border: 2px solid #c9c9c9;\n  display: inline-block;\n  padding: 10px 25px;\n  font-weight: 700;\n  transition: 0.2s all; }\n\n.notfound a:hover {\n  color: #ffab00;\n  border-color: #ffab00; }\n\n@media only screen and (max-width: 480px) {\n  .notfound .notfound-404 {\n    height: 122px;\n    line-height: 122px; }\n  .notfound .notfound-404 h1 {\n    font-size: 122px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXNzLWRlbmllZC9DOlxcVXNlcnNcXG5hYm91XFxEb2N1bWVudHNcXEFuZ3VsYXJcXHByb2pldDJjc1xcU3lhcmFEeldlYi9zcmNcXGFwcFxcYWNjZXNzLWRlbmllZFxcYWNjZXNzLWRlbmllZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isd0NBQXdDO0VBRWhDLGdDQUFnQyxFQUFBOztBQUcxQztFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx1Q0FBdUM7RUFDdkMsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1REFBdUQsRUFBQTs7QUFHekQ7RUFDRSw0RUFBNEUsRUFBQTs7QUFHOUU7RUFDRSx1Q0FBdUM7RUFDdkMsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUVoQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCLEVBQUE7RUFHcEI7SUFDSSxnQkFBZ0IsRUFBQSxFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzcy1kZW5pZWQvYWNjZXNzLWRlbmllZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuI25vdGZvdW5kIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG4jbm90Zm91bmQgLm5vdGZvdW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ubm90Zm91bmQge1xyXG4gIG1heC13aWR0aDogNDYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcclxuICBoZWlnaHQ6IDE1OHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNTNweDtcclxufVxyXG5cclxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzIyMjtcclxuICBmb250LXNpemU6IDIyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMHB4ICNjOWM5YzksIC0ycHggLTJweCAwcHggI2M5YzljOTtcclxufVxyXG5cclxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDE+c3BhbiB7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMHB4ICNmZmFiMDAsIC0ycHggLTJweCAwcHggI2ZmYWIwMCwgMHB4IDBweCA4cHggI2ZmODcwMDtcclxufVxyXG5cclxuLm5vdGZvdW5kIHAge1xyXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogI2M5YzljOTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tdG9wOiA5MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZCBhIHtcclxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjYzljOWM5O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjOWM5Yzk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZCBhOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmYWIwMDtcclxuICBib3JkZXItY29sb3I6ICNmZmFiMDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XHJcbiAgICBoZWlnaHQ6IDEyMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEyMnB4O1xyXG4gIH1cclxuXHJcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xyXG4gICAgICBmb250LXNpemU6IDEyMnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/access-denied/access-denied.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/access-denied/access-denied.component.ts ***!
  \**********************************************************/
/*! exports provided: AccessDeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function() { return AccessDeniedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccessDeniedComponent = /** @class */ (function () {
    function AccessDeniedComponent() {
    }
    AccessDeniedComponent.prototype.ngOnInit = function () {
    };
    AccessDeniedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-access-denied',
            template: __webpack_require__(/*! ./access-denied.component.html */ "./src/app/access-denied/access-denied.component.html"),
            styles: [__webpack_require__(/*! ./access-denied.component.scss */ "./src/app/access-denied/access-denied.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccessDeniedComponent);
    return AccessDeniedComponent;
}());



/***/ }),

/***/ "./src/app/access-denied/access-denied.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/access-denied/access-denied.module.ts ***!
  \*******************************************************/
/*! exports provided: AccessDeniedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedModule", function() { return AccessDeniedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-denied-routing.module */ "./src/app/access-denied/access-denied-routing.module.ts");
/* harmony import */ var _access_denied_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./access-denied.component */ "./src/app/access-denied/access-denied.component.ts");





var AccessDeniedModule = /** @class */ (function () {
    function AccessDeniedModule() {
    }
    AccessDeniedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccessDeniedRoutingModule"]
            ],
            declarations: [_access_denied_component__WEBPACK_IMPORTED_MODULE_4__["AccessDeniedComponent"]]
        })
    ], AccessDeniedModule);
    return AccessDeniedModule;
}());



/***/ })

}]);
//# sourceMappingURL=access-denied-access-denied-module.js.map