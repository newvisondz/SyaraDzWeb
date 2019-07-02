(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

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

/***/ "./src/app/layout/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n      <mat-menu #notificationMenu=\"matMenu\">\r\n        <button mat-menu-item class=\"a-item\" href=\"#\">Action</button>\r\n        <button mat-menu-item class=\"a-item\" href=\"#\">Another action</button>\r\n        <button mat-menu-item class=\"a-item\" href=\"#\">Something else here</button>\r\n      </mat-menu>\r\n\r\n      <button mat-button [matMenuTriggerFor]=\"notificationMenu\" class=\"a-item\">\r\n         <mat-icon matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">notification_important</mat-icon>\r\n     </button>\r\n      <mat-menu #appMenu=\"matMenu\">\r\n        <button mat-menu-item class=\"a-item\" routerLink=\"profile\">\r\n          <i class=\"fa fa-fw fa-user\"></i> Profile\r\n        </button>\r\n        <button mat-menu-item class=\"a-item\" href=\"javascript:void(0)\">\r\n          <i class=\"fa fa-fw fa-envelope\"></i> Messages\r\n        </button>\r\n        <button mat-menu-item class=\"a-item\" href=\"javascript:void(0)\">\r\n          <i class=\"fas fa-cogs\"></i> Paramètres\r\n        </button>\r\n        <button mat-menu-item class=\"a-item\"  (click)=\"logout()\">\r\n          <i class=\"fa fa-fw fa-power-off\"></i>Déconnexion\r\n        </button>\r\n      </mat-menu>\r\n      <button mat-button [matMenuTriggerFor]=\"appMenu\" class=\"a-item\">\r\n        <mat-icon >home</mat-icon>\r\n      </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-shadow-hover {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12) !important; }\n\n.btn-no-border {\n  border: none;\n  border-radius: 0px; }\n\n.form-input {\n  border-radius: 0px;\n  width: 300px;\n  border: none; }\n\n.notification-icon {\n  position: relative; }\n\n.notification-badge {\n  position: absolute;\n  top: 3px;\n  left: 20px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.example-full-width {\n  width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcbmFib3VcXERvY3VtZW50c1xcQW5ndWxhclxccHJvamV0MmNzXFxTeWFyYUR6V2ViL3NyY1xcYXBwXFxsYXlvdXRcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csc0lBQTZILEVBQUE7O0FBRWhJO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUVkO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVLEVBQUE7O0FBRVo7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtc2hhZG93LWhvdmVye1xyXG4gIFx0Ym94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuMiksIDBweCA2cHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwgMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsMCwwLDAuMTIpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1uby1ib3JkZXJ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uZm9ybS1pbnB1dHtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4ubm90aWZpY2F0aW9uLWljb257XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5ub3RpZmljYXRpb24tYmFkZ2V7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogM3B4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbn1cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_Authentification_authentification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services//Authentification/authentification.service */ "./src/app/Services/Authentification/authentification.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.loading = false;
        this.error = "";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate([""]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], HeaderComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "error", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_Authentification_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthentificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\">\n    <div class=\"list-group\" id=\"accordion\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>{{fullName}}</mat-card-title>\n          <mat-card-subtitle><mat-icon style=\"color : #FFAB00\"><i class=\"fas fa-award\"></i></mat-icon> {{type}}</mat-card-subtitle>\n        </mat-card-header>\n      </mat-card>\n      <mat-accordion>\n        <mat-expansion-panel *ngFor= \"let link of links\" [hidden]=\"link.hidden\">\n          <mat-expansion-panel-header  class=\"a-item\">\n                <i [className]=link.icon></i>&nbsp;\n                <span>{{link.header}}</span>\n          </mat-expansion-panel-header>\n          <a  class=\"list-group-item\" *ngFor = \"let sublink of link.sublinks\" [routerLink]=sublink.route >\n              <i [className]=sublink.icon></i>&nbsp;\n              <span>{{sublink.header}}</span>\n          </a>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-header-image {\n  background-image: url('icon_admin.png');\n  background-size: cover; }\n\n.sidebar {\n  overflow-y: auto;\n  background-color: #fff;\n  width: 250px; }\n\n.sidebar .list-group {\n    width: 100%;\n    height: 100%; }\n\n.sidebar .list-group a.list-group-item {\n      background: #fff;\n      border: 0;\n      border-radius: 0;\n      color: #000;\n      text-decoration: none; }\n\n.sidebar .list-group a.list-group-item .fa {\n        margin-right: 10px; }\n\n.sidebar .list-group a:hover {\n      background: #f2f2f2;\n      border-left: 4px solid #FFAB00; }\n\n.sidebar .list-group a:hover i {\n        color: #FFAB00; }\n\n.sidebar .list-group a.router-link-active {\n      background: #f2f2f2; }\n\n.sidebar .list-group .header-fields {\n      padding-top: 10px; }\n\n.sidebar .list-group .header-fields > .list-group-item:first-child {\n        border-top: 1px solid rgba(255, 255, 255, 0.2); }\n\n.sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n\n.sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n\n.sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #fff; }\n\n.sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n\n.sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n\n.sidebar .sidebar-dropdown .panel-title:hover {\n    background: #f2f2f2; }\n\n.sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #fff;\n      border: 0 solid transparent; }\n\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #f2f2f2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9DOlxcVXNlcnNcXG5hYm91XFxEb2N1bWVudHNcXEFuZ3VsYXJcXHByb2pldDJjc1xcU3lhcmFEeldlYi9zcmNcXGFwcFxcbGF5b3V0XFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsdUNBQWlFO0VBQ2pFLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGdCQUFnQjtFQUNoQixzQkFQNEI7RUFRNUIsWUFBWSxFQUFBOztBQUhkO0lBS1EsV0FBVztJQUNYLFlBQVksRUFBQTs7QUFOcEI7TUFRWSxnQkFia0I7TUFjbEIsU0FBUztNQUNULGdCQUFnQjtNQUNoQixXQUFXO01BQ1gscUJBQXFCLEVBQUE7O0FBWmpDO1FBY2dCLGtCQUFrQixFQUFBOztBQWRsQztNQWtCWSxtQkFBZ0Q7TUFDaEQsOEJBQThCLEVBQUE7O0FBbkIxQztRQXFCYyxjQUFlLEVBQUE7O0FBckI3QjtNQXlCWSxtQkFBZ0QsRUFBQTs7QUF6QjVEO01BNEJZLGlCQUFpQixFQUFBOztBQTVCN0I7UUErQmdCLDhDQUE4QyxFQUFBOztBQS9COUQ7SUFxQ1ksbUJBQW1CO0lBQ25CLFlBQVksRUFBQTs7QUF0Q3hCO0lBeUNZLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7O0FBM0M1QjtNQTZDZ0IsV0FBVztNQUNYLHFCQUFxQjtNQUNyQixnQkFBZ0I7TUFDaEIsZ0JBckRjLEVBQUE7O0FBSzlCO1FBa0RvQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixpQkFBaUIsRUFBQTs7QUFyRHJDOztNQTBEZ0IsV0FBVztNQUNYLGFBQWE7TUFDYixvQkFBb0IsRUFBQTs7QUE1RHBDO0lBZ0VZLG1CQUFnRCxFQUFBOztBQWhFNUQ7SUFtRVksaUJBQWlCO0lBQ2pCLFlBQVksRUFBQTs7QUFwRXhCO01BdUVvQixnQkFBZ0I7TUFDaEIsc0JBN0VVO01BOEVWLDJCQUEyQixFQUFBOztBQXpFL0M7UUEyRXdCLFdBQVcsRUFBQTs7QUEzRW5DO1FBOEV3QixXQUFXLEVBQUE7O0FBOUVuQztNQWtGb0IsbUJBQWdELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25fYWRtaW4ucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uc2lkZWJhciB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gICAgLmxpc3QtZ3JvdXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBhLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAuZmEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI0ZGQUIwMDtcclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICBjb2xvciA6ICNGRkFCMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYS5yb3V0ZXItbGluay1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXItZmllbGRzIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICA+IC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zaWRlYmFyLWRyb3Bkb3duIHtcclxuICAgICAgICAqOmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpob3ZlcixcclxuICAgICAgICAgICAgYTpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtdGl0bGU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYW5lbC1jb2xsYXBzZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpb3VzOiAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIC5wYW5lbC1ib2R5IHtcclxuICAgICAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Authentification_authentification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../Services/Authentification/authentification.service */ "./src/app/Services/Authentification/authentification.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(auth) {
        this.auth = auth;
        this.isAdmin = false;
        this.isSuperAdmin = false;
        this.links = [];
        this.type = "";
        this.fullName = "";
        this.manufacturer = "";
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = (localStorage.getItem('isAdmin') == "true");
        this.isSuperAdmin = (localStorage.getItem('isSuperAdmin') == "true");
        if (this.isSuperAdmin) {
            //check if is the super admin and set the authorized links
            this.fullName = "SayaraDz";
            this.type = "Administrateur";
            this.links = [
                {
                    header: "Vue d'ensemble",
                    icon: "fas fa-tachometer-alt",
                    sublinks: [
                        {
                            header: "Tableau de bords",
                            icon: "fas fa-tachometer-alt",
                            route: "overview"
                        },
                    ]
                },
                {
                    header: "Gestion des fabricants",
                    icon: "fas fa-clipboard-list",
                    sublinks: [
                        /*{
                          header : "Créer fabricant",
                          icon : "fas fa-plus",
                          route : "creerFabricant"
                        },*/
                        {
                            header: "Afficher fabricants",
                            icon: "fas fa-list-alt",
                            route: "afficherFabricants"
                        },
                    ]
                },
                {
                    header: "Gestion des utilisateurs",
                    icon: "fas fa-users",
                    sublinks: [
                        /*{
                          header : "Créer utilisateur",
                          icon : "fas fa-plus",
                          route : "creerUtilisateur"
                        },*/
                        {
                            header: "Afficher utilisateur",
                            icon: "fas fa-list-alt",
                            route: "afficherUsersFabricants"
                        },
                    ],
                },
                {
                    header: "Avancées",
                    icon: "fas fa-folder-plus",
                    sublinks: [
                        {
                            header: "Paramétres",
                            icon: "fa fa-fw fa-wrench",
                            route: "/"
                        },
                        {
                            header: "Aide",
                            icon: "fas fa-question",
                            route: "/"
                        },
                    ],
                },
            ];
            console.log("super admin");
        }
        else {
            //get the name of the current user
            this.auth.showMe()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (res) {
                if (res == undefined) {
                    console.log("Show Error feedback!");
                }
                else {
                    _this.fullName = res.firstName + " " + res.lastName;
                }
            }, function (err) {
                console.log("Error occured : " + err);
            });
            this.manufacturer = localStorage.getItem('manufacturer');
            this.type = "Administrateur de " + this.manufacturer;
            if (this.isAdmin) {
                //check if is the admin and set the authorized links
                this.links = [
                    {
                        header: "Vue d'ensemble",
                        icon: "fas fa-tachometer-alt",
                        sublinks: [
                            {
                                header: "Tableau de bords",
                                icon: "fas fa-tachometer-alt",
                                route: "overview"
                            },
                            {
                                header: "Profile",
                                icon: "fas fa-user",
                                route: "profile"
                            },
                        ]
                    },
                    {
                        header: "Données de références",
                        icon: "fas fa-car",
                        sublinks: [
                            {
                                header: "Gestion des modéles",
                                icon: "fas fa-car",
                                route: "modeles"
                            },
                            {
                                header: "Gestion des véhicules",
                                icon: "fas fa-car-side",
                                route: "vehicules"
                            },
                        ],
                    },
                    {
                        header: "Gestion des utilisateurs",
                        icon: "fas fa-users",
                        sublinks: [
                            /*{
                              header : "Créer utilisateur",
                              icon : "fas fa-plus",
                              route : "creerUtilisateur"
                            },*/
                            {
                                header: "Afficher utilisateur",
                                icon: "fas fa-list-alt",
                                route: "afficherUsersFabricants/users/" + localStorage.getItem('manufacturer')
                            },
                        ],
                    },
                    {
                        header: "Avancées",
                        icon: "fas fa-folder-plus",
                        sublinks: [
                            {
                                header: "Simulation tarif",
                                icon: "fas fa-fw fa-desktop",
                                route: "/"
                            },
                            {
                                header: "Paramétres",
                                icon: "fa fa-fw fa-wrench",
                                route: "/"
                            },
                            {
                                header: "Aide",
                                icon: "fas fa-question",
                                route: "/"
                            },
                        ],
                    }
                ];
                console.log("admin fabricant");
            }
            else {
                //set the authorized links for simple user
                this.type = "Utilisateur fabricant";
                this.links = [
                    {
                        header: "Vue d'ensemble",
                        icon: "fas fa-tachometer-alt",
                        sublinks: [
                            {
                                header: "Tableau de bords",
                                icon: "fas fa-tachometer-alt",
                                route: "overview"
                            },
                            {
                                header: "Profile",
                                icon: "fas fa-user",
                                route: "profile"
                            },
                        ]
                    },
                    {
                        header: "Données de références",
                        icon: "fas fa-car",
                        sublinks: [
                            {
                                header: "Gestion des modéles",
                                icon: "fas fa-car",
                                route: "modeles"
                            },
                            {
                                header: "Gestion des véhicules",
                                icon: "fas fa-car-side",
                                route: "vehicules"
                            },
                        ],
                    },
                    {
                        header: "Avancées",
                        icon: "fas fa-folder-plus",
                        sublinks: [
                            {
                                header: "Simulation tarif",
                                icon: "fas fa-fw fa-desktop",
                                route: "/"
                            },
                            {
                                header: "Paramétres",
                                icon: "fa fa-fw fa-wrench",
                                route: "/"
                            },
                            {
                                header: "Aide",
                                icon: "fas fa-question",
                                route: "/"
                            },
                        ],
                    }
                ];
                console.log("user fabricant");
            }
        }
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_Authentification_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");




var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'prefix' },
            { path: 'overview', loadChildren: './overview/overview.module#OverviewModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'afficherFabricants', loadChildren: './list-fabricants/list-fabricants.module#ListFabricantsModule' },
            { path: 'creerFabricant', loadChildren: './form-fabricant/form-fabricant.module#FormFabricantModule' },
            { path: 'creerUtilisateur', loadChildren: './form-user/form-user.module#FormUserModule' },
            { path: 'afficherUsersFabricants', loadChildren: './list-user-fabricants/list-user-fabricants.module#ListUserFabricantsModule' },
            { path: 'modeles', loadChildren: './list-modeles/list-modeles.module#ListModelesModule' },
            { path: 'vehicules', loadChildren: './list-vehicules/list-vehicules.module#ListVehiculesModule' },
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid px-0\" style=\"overflow-x: hidden;\" >\r\n  <mat-toolbar color=\"primary\">\r\n      <button mat-icon-button (click)=\"snav.toggle()\"><i class=\"fas fa-bars fa-2x\"></i></button>\r\n      <a class=\"navbar-brand mx-5\" href=\"#\" style=\"color:#fff\">SayaraDZ</a>\r\n      <span class=\"example-spacer\"></span>\r\n      <app-header [loading] = loading></app-header>\r\n  </mat-toolbar>\r\n  <mat-sidenav-container class=\"example-container\" fullscreen>\r\n    <mat-sidenav #snav opened=\"true\">\r\n        <app-sidebar></app-sidebar>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <router-outlet></router-outlet>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  flex: 1 1 auto; }\n\n.example-container {\n  top: 64px !important; }\n\n@media (max-width: 599px) {\n  .example-container {\n    top: 56px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0M6XFxVc2Vyc1xcbmFib3VcXERvY3VtZW50c1xcQW5ndWxhclxccHJvamV0MmNzXFxTeWFyYUR6V2ViL3NyY1xcYXBwXFxsYXlvdXRcXGxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRyxvQkFBb0IsRUFBQTs7QUFHckI7RUFDRztJQUNDLG9CQUFvQixFQUFBLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICAgIHRvcDogNTZweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
        this.loading = false;
        this.error = "";
        console.log(localStorage.getItem('accesToken'));
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/layout/material.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");








var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map