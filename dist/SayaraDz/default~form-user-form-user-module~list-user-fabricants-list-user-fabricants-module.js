(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~form-user-form-user-module~list-user-fabricants-list-user-fabricants-module"],{

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

/***/ "./src/app/Services/Users-CRUD/users-crud.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/Services/Users-CRUD/users-crud.service.ts ***!
  \***********************************************************/
/*! exports provided: UsersCrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersCrudService", function() { return UsersCrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var UsersCrudService = /** @class */ (function () {
    function UsersCrudService(http) {
        this.http = http;
        this.ROOT_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    UsersCrudService.prototype.create = function (mfid, email, password, firstName, lastName, address, phone) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        var body = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            address: address,
            phone: phone
        };
        console.log(body);
        return this.http.post(this.ROOT_URL + '/manufacturers/' + mfid + '/users/', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    UsersCrudService.prototype.list = function (mfid) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        return this.http.get(this.ROOT_URL + '/manufacturers/' + mfid + '/users/', {
            headers: header
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    UsersCrudService.prototype.delete = function (mfid, id) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        var ResponseError = /** @class */ (function () {
            function ResponseError() {
            }
            return ResponseError;
        }());
        return this.http.delete(this.ROOT_URL + '/manufacturers/' + mfid + '/users/' + id, {
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
    UsersCrudService.prototype.update = function (mfid, id, body) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': localStorage.getItem('accesToken') });
        return this.http.put(this.ROOT_URL + '/manufacturers/' + mfid + '/users/' + id, body, { headers: header }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    UsersCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsersCrudService);
    return UsersCrudService;
}());



/***/ })

}]);
//# sourceMappingURL=default~form-user-form-user-module~list-user-fabricants-list-user-fabricants-module.js.map