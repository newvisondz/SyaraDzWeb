(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["not-found-not-found-module"],{

/***/ "./src/app/not-found/not-found-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/not-found/not-found-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundRoutingModule", function() { return NotFoundRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found/not-found.component.ts");




var routes = [
    {
        path: '', component: _not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }
];
var NotFoundRoutingModule = /** @class */ (function () {
    function NotFoundRoutingModule() {
    }
    NotFoundRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NotFoundRoutingModule);
    return NotFoundRoutingModule;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n\t\t<div class=\"notfound\">\n\t\t\t<div class=\"notfound-404\">\n\t\t\t\t<h1>4<span>0</span>4</h1>\n\t\t\t</div>\n\t\t\t<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>\n\t\t\t<a routerLink = \"/\">home page</a>\n\t\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notfound {\n  position: relative;\n  height: 100vh;\n  background-color: #222; }\n\n#notfound .notfound {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%); }\n\n.notfound {\n  max-width: 460px;\n  width: 100%;\n  text-align: center;\n  line-height: 1.4; }\n\n.notfound .notfound-404 {\n  height: 158px;\n  line-height: 153px; }\n\n.notfound .notfound-404 h1 {\n  font-family: 'Josefin Sans', sans-serif;\n  color: #222;\n  font-size: 220px;\n  letter-spacing: 10px;\n  margin: 0px;\n  font-weight: 700;\n  text-shadow: 2px 2px 0px #c9c9c9, -2px -2px 0px #c9c9c9; }\n\n.notfound .notfound-404 h1 > span {\n  text-shadow: 2px 2px 0px #ffab00, -2px -2px 0px #ffab00, 0px 0px 8px #ff8700; }\n\n.notfound p {\n  font-family: 'Josefin Sans', sans-serif;\n  color: #c9c9c9;\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 90px;\n  margin-bottom: 15px; }\n\n.notfound a {\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 14px;\n  text-decoration: none;\n  text-transform: uppercase;\n  background: transparent;\n  color: #c9c9c9;\n  border: 2px solid #c9c9c9;\n  display: inline-block;\n  padding: 10px 25px;\n  font-weight: 700;\n  transition: 0.2s all; }\n\n.notfound a:hover {\n  color: #ffab00;\n  border-color: #ffab00; }\n\n@media only screen and (max-width: 480px) {\n  .notfound .notfound-404 {\n    height: 122px;\n    line-height: 122px; }\n  .notfound .notfound-404 h1 {\n    font-size: 122px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL0M6XFxVc2Vyc1xcbmFib3VcXERvY3VtZW50c1xcQW5ndWxhclxccHJvamV0MmNzXFxTeWFyYUR6V2ViL3NyY1xcYXBwXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isd0NBQXdDO0VBRWhDLGdDQUFnQyxFQUFBOztBQUcxQztFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx1Q0FBdUM7RUFDdkMsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1REFBdUQsRUFBQTs7QUFHekQ7RUFDRSw0RUFBNEUsRUFBQTs7QUFHOUU7RUFDRSx1Q0FBdUM7RUFDdkMsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUVoQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCLEVBQUE7RUFHcEI7SUFDSSxnQkFBZ0IsRUFBQSxFQUNuQiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiNub3Rmb3VuZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxufVxyXG5cclxuI25vdGZvdW5kIC5ub3Rmb3VuZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLm5vdGZvdW5kIHtcclxuICBtYXgtd2lkdGg6IDQ2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcblxyXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XHJcbiAgaGVpZ2h0OiAxNThweDtcclxuICBsaW5lLWhlaWdodDogMTUzcHg7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcclxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgZm9udC1zaXplOiAyMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMTBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDBweCAjYzljOWM5LCAtMnB4IC0ycHggMHB4ICNjOWM5Yzk7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxPnNwYW4ge1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDBweCAjZmZhYjAwLCAtMnB4IC0ycHggMHB4ICNmZmFiMDAsIDBweCAwcHggOHB4ICNmZjg3MDA7XHJcbn1cclxuXHJcbi5ub3Rmb3VuZCBwIHtcclxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNjOWM5Yzk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLXRvcDogOTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubm90Zm91bmQgYSB7XHJcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2M5YzljOTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYzljOWM5O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG59XHJcblxyXG4ubm90Zm91bmQgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmFiMDA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZhYjAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xyXG4gICAgaGVpZ2h0OiAxMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMjJweDtcclxuICB9XHJcblxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcclxuICAgICAgZm9udC1zaXplOiAxMjJweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.module.ts":
/*!***********************************************!*\
  !*** ./src/app/not-found/not-found.module.ts ***!
  \***********************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found-routing.module */ "./src/app/not-found/not-found-routing.module.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found/not-found.component.ts");





var NotFoundModule = /** @class */ (function () {
    function NotFoundModule() {
    }
    NotFoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundRoutingModule"]
            ],
            declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]]
        })
    ], NotFoundModule);
    return NotFoundModule;
}());



/***/ })

}]);
//# sourceMappingURL=not-found-not-found-module.js.map