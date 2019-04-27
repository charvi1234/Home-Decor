(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n    <app-header-bar></app-header-bar>\n    <app-nav-bar></app-nav-bar>\n    <app-main-page></app-main-page>\n    <app-footer-page></app-footer-page>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_authservice) {
        this._authservice = _authservice;
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-bar/header-bar.component */ "./src/app/header-bar/header-bar.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _bed_page_bed_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bed-page/bed-page.component */ "./src/app/bed-page/bed-page.component.ts");
/* harmony import */ var _wardrobes_page_wardrobes_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wardrobes-page/wardrobes-page.component */ "./src/app/wardrobes-page/wardrobes-page.component.ts");
/* harmony import */ var _sofasand_loungers_page_sofasand_loungers_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sofasand-loungers-page/sofasand-loungers-page.component */ "./src/app/sofasand-loungers-page/sofasand-loungers-page.component.ts");
/* harmony import */ var _decors_page_decors_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./decors-page/decors-page.component */ "./src/app/decors-page/decors-page.component.ts");
/* harmony import */ var _footer_page_footer_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer-page/footer-page.component */ "./src/app/footer-page/footer-page.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");




//import { AppRoutingModule } from './app-routing.module';


















var routes = [
    //{ path: "", component: HomePageComponent},
    { path: "", component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_16__["LoginFormComponent"] },
    { path: "beds", component: _bed_page_bed_page_component__WEBPACK_IMPORTED_MODULE_10__["BedPageComponent"] },
    { path: "wardrobes", component: _wardrobes_page_wardrobes_page_component__WEBPACK_IMPORTED_MODULE_11__["WardrobesPageComponent"] },
    { path: "sofas", component: _sofasand_loungers_page_sofasand_loungers_page_component__WEBPACK_IMPORTED_MODULE_12__["SofasandLoungersPageComponent"] },
    { path: "decor", component: _decors_page_decors_page_component__WEBPACK_IMPORTED_MODULE_13__["DecorsPageComponent"] },
    { path: "checkout", component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
    { path: "login", component: _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_5__["HeaderBarComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"],
                _bed_page_bed_page_component__WEBPACK_IMPORTED_MODULE_10__["BedPageComponent"],
                _wardrobes_page_wardrobes_page_component__WEBPACK_IMPORTED_MODULE_11__["WardrobesPageComponent"],
                _sofasand_loungers_page_sofasand_loungers_page_component__WEBPACK_IMPORTED_MODULE_12__["SofasandLoungersPageComponent"],
                _decors_page_decors_page_component__WEBPACK_IMPORTED_MODULE_13__["DecorsPageComponent"],
                _footer_page_footer_page_component__WEBPACK_IMPORTED_MODULE_14__["FooterPageComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_16__["LoginFormComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_21__["TokenInterceptorService"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(http, _router) {
        this.http = http;
        this._router = _router;
        this._registerUrl = "http://localhost:3000/api/register";
        this._loginUrl = "http://localhost:3000/api/login";
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this._registerUrl, user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this._loginUrl, user);
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        this._router.navigate(['/']);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/bed-page/bed-page.component.css":
/*!*************************************************!*\
  !*** ./src/app/bed-page/bed-page.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2JlZC1wYWdlL2JlZC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bed-page/bed-page.component.html":
/*!**************************************************!*\
  !*** ./src/app/bed-page/bed-page.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-4\">\n</div>\n<div class=\"row\">\n    <div class=\"py-4\">\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/v/e/236x260/venus-queen-size-bed-with-high-headboard-in-brown-colour-by-mintwud-venus-queen-size-bed-with-high-h-yd7sjz.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.10,499\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart( 'bed1' ,1,10499,1)\">Add to Cart</button>\n        </figure>\n    </div>\n\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/a/i/236x260/aiko-single-bed-in-walnut-finish-by-mintwud-aiko-single-bed-in-walnut-finish-by-mintwud-pjgfc2.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.5,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('bed2' ,1,5499,2)\">Add to Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\" https://ii3.pepperfry.com/media/catalog/product/v/a/236x260/valeria-king-size-bed-with-upholstered-headboard-in-oak-finish-by-casacraft-valeria-king-size-bed-wi-fn3xx3.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.10,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('bed3' ,1,5499,3)\">Add to Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/k/a/236x260/kaori-king-size-storage-bed-in-wenge-finish-by-mintwud-kaori-king-size-storage-bed-in-wenge-finish-b-sxh794.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.10,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('bed4' ,1,5499,4)\">Add to Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/a/l/236x260/aline-queen-size-bed-in-sandy-brown-colour-by-casacraft-aline-queen-size-bed-in-sandy-brown-colour-b-zo9aqk.jpg\"\n                alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.10,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('bed5' ,1,5499,5)\">Add to Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/a/i/236x260/aiko-single-bed-in-walnut-finish-by-mintwud-aiko-single-bed-in-walnut-finish-by-mintwud-pjgfc2.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.5,499\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('bed6' ,1,5499,6)\">Add to Cart</button>\n        </figure>\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/v/e/236x260/venus-queen-size-bed-with-high-headboard-in-brown-colour-by-mintwud-venus-queen-size-bed-with-high-h-yd7sjz.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.10,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('bed7' ,1,5499,7)\">Add to Cart</button>\n        </figure>\n    </div>\n\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/a/l/236x260/aline-queen-size-bed-in-sandy-brown-colour-by-casacraft-aline-queen-size-bed-in-sandy-brown-colour-b-zo9aqk.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.5,499\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('bed8' ,1,5499,8)\">Add to Cart</button>\n        </figure>\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/v/e/236x260/venus-queen-size-bed-with-high-headboard-in-brown-colour-by-mintwud-venus-queen-size-bed-with-high-h-yd7sjz.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.10,499\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('bed9' ,1,5499,9)\">Add to Cart</button>\n        </figure>\n    </div>\n\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/a/i/236x260/aiko-single-bed-in-walnut-finish-by-mintwud-aiko-single-bed-in-walnut-finish-by-mintwud-pjgfc2.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.5,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('bed10' ,1,5499,10)\">Add to Cart</button>\n        </figure>\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\" https://ii3.pepperfry.com/media/catalog/product/v/a/236x260/valeria-king-size-bed-with-upholstered-headboard-in-oak-finish-by-casacraft-valeria-king-size-bed-wi-fn3xx3.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.10,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('bed11' ,1,5499,11)\">Add to Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/k/a/236x260/kaori-king-size-storage-bed-in-wenge-finish-by-mintwud-kaori-king-size-storage-bed-in-wenge-finish-b-sxh794.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.10,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('bed12' ,1,5499,12)\">Add to Cart</button>\n        </figure>\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/a/l/236x260/aline-queen-size-bed-in-sandy-brown-colour-by-casacraft-aline-queen-size-bed-in-sandy-brown-colour-b-zo9aqk.jpg\"\n                alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.10,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('bed13' ,1,5499,13)\">Add to Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/a/i/236x260/aiko-single-bed-in-walnut-finish-by-mintwud-aiko-single-bed-in-walnut-finish-by-mintwud-pjgfc2.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.5,499\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('bed14' ,1,5499,14)\">Add to Cart</button>\n        </figure>\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/v/e/236x260/venus-queen-size-bed-with-high-headboard-in-brown-colour-by-mintwud-venus-queen-size-bed-with-high-h-yd7sjz.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.10,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('bed15' ,1,5499,15)\">Add to Cart</button>\n        </figure>\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/a/l/236x260/aline-queen-size-bed-in-sandy-brown-colour-by-casacraft-aline-queen-size-bed-in-sandy-brown-colour-b-zo9aqk.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.5,499\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('bed16' ,1,5499,16)\">Add to Cart</button>\n        </figure>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/bed-page/bed-page.component.ts":
/*!************************************************!*\
  !*** ./src/app/bed-page/bed-page.component.ts ***!
  \************************************************/
/*! exports provided: BedPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BedPageComponent", function() { return BedPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../cart-data.service */ "./src/app/cart-data.service.ts");



var BedPageComponent = /** @class */ (function () {
    function BedPageComponent(cartDataService) {
        this.cartDataService = cartDataService;
        this.newCart = {
            productName: "oldvalue",
            Quantity: 0,
            Price: 0,
        };
    }
    BedPageComponent.prototype.ngOnInit = function () {
    };
    BedPageComponent.prototype.submitCart = function (name, qty, pr, un) {
        this.newCart.productName = name;
        this.newCart.Quantity = qty;
        this.newCart.Price = pr;
        this.newCart.uni = un;
        console.log("The new product is : " + this.newCart.productName);
        var dataObject = JSON.parse(JSON.stringify(this.newCart));
        this.cartDataService.addNewProduct(dataObject);
        return this.cartDataService.getTotal(pr);
    };
    BedPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bed-page',
            template: __webpack_require__(/*! ./bed-page.component.html */ "./src/app/bed-page/bed-page.component.html"),
            styles: [__webpack_require__(/*! ./bed-page.component.css */ "./src/app/bed-page/bed-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_data_service__WEBPACK_IMPORTED_MODULE_2__["CartDataService"]])
    ], BedPageComponent);
    return BedPageComponent;
}());



/***/ }),

/***/ "./src/app/cart-data.service.ts":
/*!**************************************!*\
  !*** ./src/app/cart-data.service.ts ***!
  \**************************************/
/*! exports provided: CartDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDataService", function() { return CartDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartDataService = /** @class */ (function () {
    function CartDataService() {
        this.cartList = [{
                productName: "none",
                Quantity: 0,
                Price: 0,
            }
        ];
        this.Total = 0;
        this.TotalPr = 0;
    }
    CartDataService.prototype.getLatestCart = function () {
        return this.cartList;
    };
    CartDataService.prototype.addNewProduct = function (newCart) {
        this.cartList.push(newCart);
    };
    CartDataService.prototype.getTotal = function (ind) {
        this.Total = this.Total + 1;
        console.log("The new total is : " + this.Total);
        this.getTotPr1(ind);
        return this.Total;
    };
    CartDataService.prototype.getTotal1 = function () {
        return this.Total;
    };
    CartDataService.prototype.setTot = function (pr) {
        this.Total = this.Total - 1;
        console.log("The new total is : " + this.Total);
        this.getTotPr2(pr);
        return this.Total;
    };
    CartDataService.prototype.getTotPrice = function () {
        return this.TotalPr;
    };
    CartDataService.prototype.getTotPr1 = function (ind) {
        //this.TotalPr = 0;
        //for (var i = 1; i <= this.cartList.length; i++) {
        //var item = this.cartList[i];
        //if(item.uni == ind)
        this.TotalPr = this.TotalPr + ind;
        console.log("The price is : " + ind);
        console.log("The new total price is : " + this.TotalPr);
        //}
        return this.TotalPr;
    };
    CartDataService.prototype.getTotPr2 = function (pr) {
        //for (var i = 1; i <= this.cartList.length; i++) {
        //var item = this.cartList[i];
        //if (item.uni == ind) {
        this.TotalPr = this.TotalPr - pr;
        console.log("The new total price is : " + this.TotalPr);
        return this.TotalPr;
        //}
        //}
    };
    CartDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartDataService);
    return CartDataService;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    max-width: 960px;\r\n  }\r\n  .lh-condensed { line-height: 1.25; }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjtFQUNBLGdCQUFnQixpQkFBaUIsRUFBRSIsImZpbGUiOiIuLi9zcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgfVxyXG4gIC5saC1jb25kZW5zZWQgeyBsaW5lLWhlaWdodDogMS4yNTsgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"py-3\">\n  </div>\n  <h4 style=\"text-decoration-color: black\">\n    Thanks for shopping at Home Decor.\n    This is your shopping cart.\n  </h4>\n  <div class=\"py-4\">\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-5 order-md-2 mb-6\">\n      <table>\n        <thead>\n          <tr>\n            <td><b>Total &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class=\"badge badge-secondary badge-pill\">{{getTot()}}</span></b></td>\n          </tr>\n        </thead>\n      </table>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Sr.No</th>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Quantity</th>\n            <th scope=\"col\">Price</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let cart of cartList,let i = index\">\n            <th scope=\"row\">{{i}}</th>\n            <td>{{cart.productName}}</td>\n            <td>{{cart.Quantity}}</td>\n            <td>{{cart.Price}}</td>\n            <td class=\"text-center\" title=\"remove from cart\">\n              <button type=\"button\" class=\"close\" (click) = \"remove(cart.uni)\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </td>          \n          </tr>\n        </tbody>\n      </table>\n      <table>\n        <thead>\n          <tr>\n            <td><b>Total Price &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class=\"badge badge-secondary badge-pill\">{{getTotPr()}}</span></b></td>\n          </tr>\n        </thead>\n      </table>\n    </div>\n    <div class=\"col-md-7 order-md-1\">\n      <h4 class=\"mb-3\">Billing address</h4>\n      <form class=\"needs-validation\" novalidate>\n        <div class=\"row\">\n        </div>\n        <div class=\"mb-3\">\n          <label for=\"address\">Address</label>\n          <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required>\n          <div class=\"invalid-feedback\">\n            Please enter your shipping address.\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\n          <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\">\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-5 mb-3\">\n            <label for=\"country\">Country</label>\n            <select class=\"custom-select d-block w-100\" id=\"country\" required>\n              <option value=\"\">Choose</option>\n              <option>United States</option>\n              <option>India</option>\n              <option>France</option>\n              <option>Russia</option>\n            </select>\n            <div class=\"invalid-feedback\">\n              Please select a valid country.\n            </div>\n          </div>\n          <div class=\"col-md-4 mb-3\">\n            <label for=\"state\">State</label>\n            <select class=\"custom-select d-block w-100\" id=\"state\" required>\n              <option value=\"\">Choose</option>\n              <option>Delhi</option>\n              <option>Chandigarh</option>\n              <option>Mumbai</option>\n            </select>\n            <div class=\"invalid-feedback\">\n              Please provide a valid state.\n            </div>\n          </div>\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"zip\">Zip</label>\n            <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required>\n            <div class=\"invalid-feedback\">\n              Zip code required.\n            </div>\n          </div>\n        </div>\n        <hr class=\"mb-4\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\n          <label class=\"custom-control-label\" for=\"same-address\">Shipping address is the same as my billing\n            address</label>\n        </div>\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\n          <label class=\"custom-control-label\" for=\"save-info\">Save this information for next time</label>\n        </div>\n        <hr class=\"mb-4\">\n\n        <h4 class=\"mb-3\">Payment</h4>\n\n        <div class=\"d-block my-3\">\n          <div class=\"custom-control custom-radio\">\n            <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\n            <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n          </div>\n          <div class=\"custom-control custom-radio\">\n            <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n            <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n          </div>\n          <div class=\"custom-control custom-radio\">\n            <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n            <label class=\"custom-control-label\" for=\"paypal\">PayPal</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"cc-name\">Name on card</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>\n            <small class=\"text-muted\">Full name as displayed on card</small>\n            <div class=\"invalid-feedback\">\n              Name on card is required\n            </div>\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"cc-number\">Credit card number</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>\n            <div class=\"invalid-feedback\">\n              Credit card number is required\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"cc-expiration\">Expiry Date</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\n            <div class=\"invalid-feedback\">\n              Expiration date required\n            </div>\n          </div>\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"cc-cvv\">CVV</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\n            <div class=\"invalid-feedback\">\n              Security code required\n            </div>\n          </div>\n        </div>\n        <hr class=\"mb-4\">\n        <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Continue to checkout</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../cart-data.service */ "./src/app/cart-data.service.ts");



var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(cartDataService) {
        this.cartDataService = cartDataService;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.cartList = this.cartDataService.getLatestCart();
    };
    CheckoutComponent.prototype.getTot = function () {
        return this.cartDataService.getTotal1();
    };
    CheckoutComponent.prototype.remove = function (ind) {
        for (var i = 1; i <= this.cartList.length; i++) {
            var item = this.cartList[i];
            if (item.uni == ind) {
                this.cartList.splice(i, 1);
                return this.cartDataService.setTot(item.Price);
            }
        }
    };
    CheckoutComponent.prototype.getTotPr = function () {
        return this.cartDataService.getTotPrice();
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_data_service__WEBPACK_IMPORTED_MODULE_2__["CartDataService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/decors-page/decors-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/decors-page/decors-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2RlY29ycy1wYWdlL2RlY29ycy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/decors-page/decors-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/decors-page/decors-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-4\">\n</div>\n<div class=\"row\">\n    <div class=\"py-4\">\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/m/u/236x260/multicolour-mdf-decorative-mosiac-mirror-by-global-glory-multicolour-mdf-decorative-mosiac-mirror-by-xxrl58.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.1,599\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('decor1',1,1599,32)\">Add to Cart</button>\n        </figure>\n    </div>\n\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/m/u/236x260/multicolour-resin-cow-for-bonsai-decoration-by-wonderland-multicolour-resin-cow-for-bonsai-decoratio-kdaoix.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.2,599</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('decor2',1,2599,33)\">Add to Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/m/u/236x260/multicolour-mdf-decorative-mosiac-mirror-by-global-glory-multicolour-mdf-decorative-mosiac-mirror-by-xxrl58.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.1,599</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('decor3',1,1599,34)\">Add to Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/m/u/236x260/multicolour-resin-cow-for-bonsai-decoration-by-wonderland-multicolour-resin-cow-for-bonsai-decoratio-kdaoix.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.1,599</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('decor4',1,1599,35)\">Add to Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/m/u/236x260/multicolour-mdf-decorative-mosiac-mirror-by-global-glory-multicolour-mdf-decorative-mosiac-mirror-by-xxrl58.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.1,599</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('decor5',1,1599,36)\">Add to Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/m/u/236x260/multicolour-resin-cow-for-bonsai-decoration-by-wonderland-multicolour-resin-cow-for-bonsai-decoratio-kdaoix.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.1,599\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('decor6',1,1599,37)\">Add to Cart</button>\n        </figure>\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/m/u/236x260/multicolour-mdf-decorative-mosiac-mirror-by-global-glory-multicolour-mdf-decorative-mosiac-mirror-by-xxrl58.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.1,599</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('decor7',1,1599,38)\">Add to Cart</button>\n        </figure>\n    </div>\n\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/m/u/236x260/multicolour-resin-cow-for-bonsai-decoration-by-wonderland-multicolour-resin-cow-for-bonsai-decoratio-kdaoix.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.1,599\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('decor8',1,1599,39)\">Add to Cart</button>\n        </figure>\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/m/u/236x260/multicolour-mdf-decorative-mosiac-mirror-by-global-glory-multicolour-mdf-decorative-mosiac-mirror-by-xxrl58.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.1,599\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('decor9',1,1599,40)\">Add to Cart</button>\n        </figure>\n    </div>\n\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/m/u/236x260/multicolour-resin-cow-for-bonsai-decoration-by-wonderland-multicolour-resin-cow-for-bonsai-decoratio-kdaoix.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.1,599</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('decor10',1,1599,41)\">Add to Cart</button>\n        </figure>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/decors-page/decors-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/decors-page/decors-page.component.ts ***!
  \******************************************************/
/*! exports provided: DecorsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecorsPageComponent", function() { return DecorsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../cart-data.service */ "./src/app/cart-data.service.ts");



var DecorsPageComponent = /** @class */ (function () {
    function DecorsPageComponent(cartDataService) {
        this.cartDataService = cartDataService;
        this.newCart = {
            productName: "oldvalue",
            Quantity: 0,
            Price: 0
        };
    }
    DecorsPageComponent.prototype.ngOnInit = function () {
    };
    DecorsPageComponent.prototype.submitCart = function (name, qty, pr, un) {
        this.newCart.productName = name;
        this.newCart.Quantity = qty;
        this.newCart.Price = pr;
        this.newCart.uni = un;
        console.log("The new product is : " + this.newCart.productName);
        var dataObject = JSON.parse(JSON.stringify(this.newCart));
        this.cartDataService.addNewProduct(dataObject);
        return this.cartDataService.getTotal(pr);
    };
    DecorsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-decors-page',
            template: __webpack_require__(/*! ./decors-page.component.html */ "./src/app/decors-page/decors-page.component.html"),
            styles: [__webpack_require__(/*! ./decors-page.component.css */ "./src/app/decors-page/decors-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_data_service__WEBPACK_IMPORTED_MODULE_2__["CartDataService"]])
    ], DecorsPageComponent);
    return DecorsPageComponent;
}());



/***/ }),

/***/ "./src/app/footer-page/footer-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/footer-page/footer-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2Zvb3Rlci1wYWdlL2Zvb3Rlci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/footer-page/footer-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/footer-page/footer-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-4\">\n  </div>\n<div class=\"row\" id=\"about\">\n  <section class=\"about-us text-center col-sm-12 col-md-12\">\n     <h4> ABOUT US </h4>\n     <span class=\"outer-line\"></span>\n     <span class=\"fas fa-star\" aria-hidden=\"true\" style=\"margin:10px 0\"></span>\n     <span class=\"outer-line\"></span>\n     <p  style =\" font-size: 20px\" class=\"bio\">We provide 100% customer satisfaction and quality assurance.We ship across various countries in India which include Bengaluru, Mumbai, Navi Mumbai, Delhi, Hyderabad, Pune, Chennai, Gurgaon, Kolkata, Noida, Goa, Ghaziabad, Ahmedabad, Coimbatore, Faridabad, Jaipur, Lucknow, Kochi, Visakhapatnam, Chandigarh, Vadodara, Nagpur, Thiruvananthapuram, Indore, Mysore, Bhopal, Surat, Jalandhar, Patna, Ludhiana, Nashik, Madurai, Kanpur, Aurangabad, Imphal, Hubli, Guwahati and many more </p>\n  </section>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Popular Categories</h5>\n        <p class=\"card-text\">Queen sized veds,King sized beds,Wardrobes,Lamps,Paintings,Wall decor,Sofa cum bed,Wall stickers,Photo frames,</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Contact Us</h5>\n        <p class=\"card-text\">Helpline number- 9929835876</p>\n        <p class =\"card-text\">Email Id-homedecor@gmail.com</p>\n      </div>\n    </div>\n  </div>\n</div>\n<footer class=\"my-5 pt-5 text-muted text-center text-small\">\n    <p class=\"mb-1\">&copy; 2019 Home decor E-Retail Pvt. Ltd. All Rights Reserved</p>\n</footer>"

/***/ }),

/***/ "./src/app/footer-page/footer-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/footer-page/footer-page.component.ts ***!
  \******************************************************/
/*! exports provided: FooterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPageComponent", function() { return FooterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterPageComponent = /** @class */ (function () {
    function FooterPageComponent() {
    }
    FooterPageComponent.prototype.ngOnInit = function () {
    };
    FooterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-page',
            template: __webpack_require__(/*! ./footer-page.component.html */ "./src/app/footer-page/footer-page.component.html"),
            styles: [__webpack_require__(/*! ./footer-page.component.css */ "./src/app/footer-page/footer-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterPageComponent);
    return FooterPageComponent;
}());



/***/ }),

/***/ "./src/app/header-bar/header-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /* .centerAlign{\r\n    text-align:center;\r\n    color:black;\r\n    padding-top:3%;\r\n    padding-bottom:3%;\r\n    background-color: white;\r\n}\r\n.jumbo\r\n{\r\n   align:center;\r\n\r\n}\r\n.jt\r\n{\r\n   background-color: #1a252f;\r\n   padding-top:3%;\r\n} */\r\n.text-center{\r\n   text-align:center;\r\n   color:black;\r\n   font-size:40px;\r\n}\r\n.jt {\r\n   background-color:grey;\r\n   padding-top: 2%;\r\n   padding-bottom: 2%;\r\n }\r\n.jumbo{\r\n   text-align: center;\r\n   background-color: white;\r\n }\r\n.nb {\r\n   padding-top: 2%;\r\n }\r\n.carousel {\r\n   padding-bottom: 2%;\r\n }\r\n.carousel-inner {\r\n   display: block;\r\n   height: 540px;\r\n }\r\nth {\r\n   text-align: center;\r\n }\r\ntd,\r\n th {\r\n   width: 20%;\r\n }\r\n.material-icons {\r\n   font-size: 16px;\r\n }\r\n#forms,\r\n .about-us {\r\n   color: white;\r\n   background: #476878;\r\n   padding-bottom: 5%;\r\n }\r\n.nb,\r\n .carousel,\r\n .footer {\r\n   color: white;\r\n   background: #233640;\r\n }\r\n.about-us {\r\n   padding-top: 2%;\r\n   padding-bottom: 5%;\r\n   padding-left: 17%;\r\n   padding-right: 17%;\r\n }\r\n.footer {\r\n   padding: 5%;\r\n }\r\n.bio {\r\n   font-size: 1.5em;\r\n   font-weight: 400;\r\n }\r\n.copyrights {\r\n   background-color: #1a252f;\r\n   color: white;\r\n }\r\n/* Divider (Horizontal Line) Styling */\r\nspan {\r\n   display: inline-block;\r\n   vertical-align: middle;\r\n   max-width: 5em;\r\n   font-size: 20px;\r\n }\r\n.outer-line {\r\n   width: 40%;\r\n   border-bottom: 5px solid #fff;\r\n }\r\n.outer-line-dark {\r\n   width: 40%;\r\n   border-bottom: 5px solid #233640;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvaGVhZGVyLWJhci9oZWFkZXItYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkU7QUFDSDtHQUNHLGlCQUFpQjtHQUNqQixXQUFXO0dBQ1gsY0FBYztBQUNqQjtBQUNBO0dBQ0cscUJBQXFCO0dBQ3JCLGVBQWU7R0FDZixrQkFBa0I7Q0FDcEI7QUFFQTtHQUNFLGtCQUFrQjtHQUNsQix1QkFBdUI7Q0FDekI7QUFDQTtHQUNFLGVBQWU7Q0FDakI7QUFFQTtHQUNFLGtCQUFrQjtDQUNwQjtBQUVBO0dBQ0UsY0FBYztHQUNkLGFBQWE7Q0FDZjtBQUVBO0dBQ0Usa0JBQWtCO0NBQ3BCO0FBRUE7O0dBRUUsVUFBVTtDQUNaO0FBRUE7R0FDRSxlQUFlO0NBQ2pCO0FBRUE7O0dBRUUsWUFBWTtHQUNaLG1CQUFtQjtHQUNuQixrQkFBa0I7Q0FDcEI7QUFFQTs7O0dBR0UsWUFBWTtHQUNaLG1CQUFtQjtDQUNyQjtBQUVBO0dBQ0UsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixpQkFBaUI7R0FDakIsa0JBQWtCO0NBQ3BCO0FBRUE7R0FDRSxXQUFXO0NBQ2I7QUFFQTtHQUNFLGdCQUFnQjtHQUNoQixnQkFBZ0I7Q0FDbEI7QUFFQTtHQUNFLHlCQUF5QjtHQUN6QixZQUFZO0NBQ2Q7QUFHQSxzQ0FBc0M7QUFDdEM7R0FDRSxxQkFBcUI7R0FDckIsc0JBQXNCO0dBQ3RCLGNBQWM7R0FDZCxlQUFlO0NBQ2pCO0FBRUE7R0FDRSxVQUFVO0dBQ1YsNkJBQTZCO0NBQy9CO0FBRUE7R0FDRSxVQUFVO0dBQ1YsZ0NBQWdDO0NBQ2xDIiwiZmlsZSI6Ii4uL3NyYy9hcHAvaGVhZGVyLWJhci9oZWFkZXItYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogLmNlbnRlckFsaWdue1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIHBhZGRpbmctdG9wOjMlO1xyXG4gICAgcGFkZGluZy1ib3R0b206MyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uanVtYm9cclxue1xyXG4gICBhbGlnbjpjZW50ZXI7XHJcblxyXG59XHJcbi5qdFxyXG57XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICMxYTI1MmY7XHJcbiAgIHBhZGRpbmctdG9wOjMlO1xyXG59ICovXHJcbi50ZXh0LWNlbnRlcntcclxuICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgIGNvbG9yOmJsYWNrO1xyXG4gICBmb250LXNpemU6NDBweDtcclxufVxyXG4uanQge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7XHJcbiAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gfVxyXG4gXHJcbiAuanVtYm97XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiB9XHJcbiAubmIge1xyXG4gICBwYWRkaW5nLXRvcDogMiU7XHJcbiB9XHJcbiBcclxuIC5jYXJvdXNlbCB7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxuIH1cclxuIFxyXG4gLmNhcm91c2VsLWlubmVyIHtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIGhlaWdodDogNTQwcHg7XHJcbiB9XHJcbiBcclxuIHRoIHtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiB0ZCxcclxuIHRoIHtcclxuICAgd2lkdGg6IDIwJTtcclxuIH1cclxuIFxyXG4gLm1hdGVyaWFsLWljb25zIHtcclxuICAgZm9udC1zaXplOiAxNnB4O1xyXG4gfVxyXG4gXHJcbiAjZm9ybXMsXHJcbiAuYWJvdXQtdXMge1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIGJhY2tncm91bmQ6ICM0NzY4Nzg7XHJcbiAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuIH1cclxuIFxyXG4gLm5iLFxyXG4gLmNhcm91c2VsLFxyXG4gLmZvb3RlciB7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgYmFja2dyb3VuZDogIzIzMzY0MDtcclxuIH1cclxuIFxyXG4gLmFib3V0LXVzIHtcclxuICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgIHBhZGRpbmctbGVmdDogMTclO1xyXG4gICBwYWRkaW5nLXJpZ2h0OiAxNyU7XHJcbiB9XHJcbiBcclxuIC5mb290ZXIge1xyXG4gICBwYWRkaW5nOiA1JTtcclxuIH1cclxuIFxyXG4gLmJpbyB7XHJcbiAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiB9XHJcbiBcclxuIC5jb3B5cmlnaHRzIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjUyZjtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gfVxyXG4gXHJcbiBcclxuIC8qIERpdmlkZXIgKEhvcml6b250YWwgTGluZSkgU3R5bGluZyAqL1xyXG4gc3BhbiB7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgbWF4LXdpZHRoOiA1ZW07XHJcbiAgIGZvbnQtc2l6ZTogMjBweDtcclxuIH1cclxuIFxyXG4gLm91dGVyLWxpbmUge1xyXG4gICB3aWR0aDogNDAlO1xyXG4gICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmZjtcclxuIH1cclxuIFxyXG4gLm91dGVyLWxpbmUtZGFyayB7XHJcbiAgIHdpZHRoOiA0MCU7XHJcbiAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMjMzNjQwO1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/header-bar/header-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class = \"container\">\n<div class = \"row jt\">\n<header class = \"jumbo\">\n<h1 class =\"centerAlign\">Home Decor Shop</h1>\n</header>\n</div>\n</div> -->\n\n<div class=\"container\">\n        <div class=\"row jt\">\n           <div class=\"col-md-12 col-sm-12\">\n              <header class=\"jumbo\">\n                 <h1 class=\"text-center\"> Home Decor Shop </h1>\n              </header>\n           </div>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/header-bar/header-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/header-bar/header-bar.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBarComponent", function() { return HeaderBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderBarComponent = /** @class */ (function () {
    function HeaderBarComponent() {
        this.name = "UCA";
    }
    HeaderBarComponent.prototype.ngOnInit = function () {
    };
    HeaderBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-bar',
            template: __webpack_require__(/*! ./header-bar.component.html */ "./src/app/header-bar/header-bar.component.html"),
            styles: [__webpack_require__(/*! ./header-bar.component.css */ "./src/app/header-bar/header-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderBarComponent);
    return HeaderBarComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.no-style .ng-valid {\r\nborder-left: 1px  solid #CCC\r\n}\r\n\r\n.no-style .ng-invalid {\r\nborder-left: 1px  solid #CCC\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6Ii4uL3NyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uby1zdHlsZSAubmctdmFsaWQge1xyXG5ib3JkZXItbGVmdDogMXB4ICBzb2xpZCAjQ0NDXHJcbn1cclxuXHJcbi5uby1zdHlsZSAubmctaW52YWxpZCB7XHJcbmJvcmRlci1sZWZ0OiAxcHggIHNvbGlkICNDQ0NcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"py-4\">\n</div> -->\n<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"center-block img-responsive\" src=\"http://www.firstclassbeds.co.uk/_assets/img/slider/slider-1.jpg\"\n        class=\"d-block w-100\" alt=\"beds\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"center-block img-responsive\" src=\"http://www.uniquefittedfurniture.com/images/banner.jpg\"\n        class=\"d-block w-100\" alt=\"wardrobes\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"center-block img-responsive\"\n        src=\"http://www.stylisheve.com/wp-content/uploads/2013/08/Modern-living-room-furniture-from-BB-Italia_05.jpg\"\n        class=\"d-block w-100\" alt=\"sofas and loungers\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"center-block img-responsive\"\n        src=\"https://ak1.ostkcdn.com/img/mxc/08082018_sptest_HomeDecor_E1_DecoratingwithGreyColorSchemes_fix(2).jpg?imwidth=1024&impolicy=medium\"\n        class=\"d-block w-100\" alt=\"decor\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\r\n    border-left: 5px solid #42A948;\r\n}\r\n.ng-invalid:not(form) {\r\n    border-left: 5px solid #a94442;\r\n}\r\n.no-style .ng-valid {\r\n    border-left: 1px  solid #CCC\r\n    }\r\n.no-style .ng-invalid {\r\n    border-left: 1px  solid #CCC\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0k7SUFDQTtBQUVBO0lBQ0E7SUFDQSIsImZpbGUiOiIuLi9zcmMvYXBwL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODtcclxufVxyXG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG59XHJcblxyXG4ubm8tc3R5bGUgLm5nLXZhbGlkIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggIHNvbGlkICNDQ0NcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5vLXN0eWxlIC5uZy1pbnZhbGlkIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggIHNvbGlkICNDQ0NcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"center-block img-responsive\" src=\"http://www.firstclassbeds.co.uk/_assets/img/slider/slider-1.jpg\"\n        class=\"d-block w-100\" alt=\"beds\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"center-block img-responsive\" src=\"http://www.uniquefittedfurniture.com/images/banner.jpg\"\n        class=\"d-block w-100\" alt=\"wardrobes\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"center-block img-responsive\"\n        src=\"http://www.stylisheve.com/wp-content/uploads/2013/08/Modern-living-room-furniture-from-BB-Italia_05.jpg\"\n        class=\"d-block w-100\" alt=\"sofas and loungers\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"center-block img-responsive\"\n        src=\"https://ak1.ostkcdn.com/img/mxc/08082018_sptest_HomeDecor_E1_DecoratingwithGreyColorSchemes_fix(2).jpg?imwidth=1024&impolicy=medium\"\n        class=\"d-block w-100\" alt=\"decor\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"py-4\">\n</div>\n<div *ngIf=\"!auth.loggedIn()\" class=\"row\" id=\"forms\">\n  <div class=\"col-sm-12 col-md-12 text-center text-uppercase\">\n    <h3> Sign up </h3>\n  </div>\n  <div class=\"col-sm-12 col-md-12 text-center\">\n    <span class=\"outer-line\"></span>\n    <span class=\"fas fa-star\" aria-hidden=\"true\" style=\"margin:10px opx\"></span>\n    <span class=\"outer-line\"></span>\n  </div>\n  <div class=\"col-sm-6 col-md-6\">\n    <img src=\"https://i.pinimg.com/236x/0c/cf/53/0ccf5322db2d03820a236f811aa861e1--decor-inspiration-dream-homes.jpg\"\n      alt=\"home\" class=\"img-responsive\">\n  </div>\n  <div class=\"col-md-6 col-sm-6\">\n    <form #userForm=\"ngForm\"  data-toggle=\"validator\" role=\"form\" id=\"form-reset\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"fname\">First Name*</label>\n        <input type=\"text\" class=\"form-control\" id=\"fname\" required minlength=\"3\" maxlength=\"30\"\n          [(ngModel)]=\"model.fname\" name=\"fname\" placeholder=\"Enter First Name\" #fname=\"ngModel\">\n        <div *ngIf=\"fname.errors && (fname.dirty || fname.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!fname.errors.required\">\n            First Name is required!\n          </div>\n          <div [hidden]=\"!fname.errors.minlength\">\n            First Name must be atleast 3 characters long!\n          </div>\n          <div [hidden]=\"!fname.errors.maxlength\">\n            First Name cannot be more than 30 characters long!\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lname\">Last Name*</label>\n        <input type=\"text\" class=\"form-control\" id=\"lname\" required minlength=\"3\" maxlength=\"30\"\n          [(ngModel)]=\"model.lname\" name=\"lname\" #lname=\"ngModel\" placeholder=\"Enter last Name\">\n        <div *ngIf=\"lname.errors && (lname.dirty || lname.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!lname.errors.required\">\n            Last Name is required!\n          </div>\n          <div [hidden]=\"!lname.errors.minlength\">\n            Last Name must be atleast 3 characters long!\n          </div>\n          <div [hidden]=\"!lname.errors.maxlength\">\n            Last Name cannot be more than 30 characters long!\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email-Id*</label>\n        <input type=\"text\" class=\"form-control\" id=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" required\n          [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\" placeholder=\"Enter Email-Id\">\n        <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!email.errors.required\">\n            Email-Id is required!\n          </div>\n          <div [hidden]=\"!email.errors.pattern\">\n            Must be a valid pattern!\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pswd\">Password*</label>\n        <input type=\"password\" class=\"form-control\" id=\"pswd\" pattern=\".{6,}\" required [(ngModel)]=\"model.pswd\"\n          name=\"pswd\" #pswd=\"ngModel\" placeholder=\"Enter Password\">\n        <div *ngIf=\"pswd.errors && (pswd.dirty || pswd.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!pswd.errors.required\">\n            Password is required!\n          </div>\n          <div [hidden]=\"!pswd.errors.pattern\">\n            Must have 6 or more characters!\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"contact\">Phone No*</label>\n        <input type=\"text\" class=\"form-control\" pattern=\"(7|8|9)\\d{9}\" id=\"contact\" required\n          [(ngModel)]=\"model.contact\" name=\"contact\" #contact=\"ngModel\" placeholder=\"Enter Phone Number\">\n        <div *ngIf=\"contact.errors && (contact.dirty || contact.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!contact.errors.required\">\n            Phone number is required!\n          </div>\n          <div [hidden]=\"!contact.errors.pattern\">\n            Must be a valid phone number.\n          </div>\n        </div>\n      </div>\n      <button [disabled] = \"!userForm.form.valid\" type=\"submit\" class=\"btn btn-primary\"  >Submit</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shop_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shop.model */ "./src/app/shop.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(auth, _router) {
        this.auth = auth;
        this._router = _router;
        this.model = new _shop_model__WEBPACK_IMPORTED_MODULE_2__["Shop"]('', '', '', '', '');
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        //  console.log(this.model);
        this.auth.registerUser(this.model)
            .subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this._router.navigate(['/checkout']);
        }, function (err) { return console.log(err); });
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!--  \n  <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img class=\"center-block img-responsive\" src=\"http://www.firstclassbeds.co.uk/_assets/img/slider/slider-1.jpg\" class=\"d-block w-100\" alt=\"beds\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"center-block img-responsive\" src=\"http://www.uniquefittedfurniture.com/images/banner.jpg\" class=\"d-block w-100\" alt=\"wardrobes\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"center-block img-responsive\" src=\"http://www.stylisheve.com/wp-content/uploads/2013/08/Modern-living-room-furniture-from-BB-Italia_05.jpg\" class=\"d-block w-100\" alt=\"sofas and loungers\">\n        </div>\n        <div class=\"carousel-item\">\n            <img class=\"center-block img-responsive\" src=\"https://ak1.ostkcdn.com/img/mxc/08082018_sptest_HomeDecor_E1_DecoratingwithGreyColorSchemes_fix(2).jpg?imwidth=1024&impolicy=medium\" class=\"d-block w-100\" alt=\"decor\">\n          </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n\n       -->"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jt {\r\n    background-color: #1a252f;\r\n    padding-top: 3%;\r\n  }\r\n  \r\n  .nb {\r\n    padding-top: 2%;\r\n  }\r\n  \r\n  .carousel {\r\n    padding-bottom: 2%;\r\n  }\r\n  \r\n  .carousel-inner {\r\n    display: block;\r\n    height: 540px;\r\n  }\r\n  \r\n  th {\r\n    text-align: center;\r\n  }\r\n  \r\n  td,\r\n  th {\r\n    width: 20%;\r\n  }\r\n  \r\n  .material-icons {\r\n    font-size: 16px;\r\n  }\r\n  \r\n  #forms,\r\n  .about-us {\r\n    color: white;\r\n    background: #476878;\r\n    padding-bottom: 5%;\r\n  }\r\n  \r\n  .nb,\r\n  .carousel,\r\n  .footer {\r\n    color: white;\r\n    background: #233640;\r\n  }\r\n  \r\n  .about-us {\r\n    padding-top: 2%;\r\n    padding-bottom: 5%;\r\n    padding-left: 17%;\r\n    padding-right: 17%;\r\n  }\r\n  \r\n  .footer {\r\n    padding: 5%;\r\n  }\r\n  \r\n  .bio {\r\n    font-size: 1.5em;\r\n    font-weight: 400;\r\n  }\r\n  \r\n  .copyrights {\r\n    background-color: #1a252f;\r\n    color: white;\r\n  }\r\n  \r\n  /* Divider (Horizontal Line) Styling */\r\n  \r\n  span {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    max-width: 5em;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .outer-line {\r\n    width: 40%;\r\n    border-bottom: 5px solid #fff;\r\n  }\r\n  \r\n  .outer-line-dark {\r\n    width: 40%;\r\n    border-bottom: 5px solid #233640;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7OztJQUdFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFHQSxzQ0FBc0M7O0VBQ3RDO0lBQ0UscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDViw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZ0NBQWdDO0VBQ2xDIiwiZmlsZSI6Ii4uL3NyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjUyZjtcclxuICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICB9XHJcbiAgXHJcbiAgLm5iIHtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcm91c2VsIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiA1NDBweDtcclxuICB9XHJcbiAgXHJcbiAgdGgge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICB0ZCxcclxuICB0aCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuICBcclxuICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAjZm9ybXMsXHJcbiAgLmFib3V0LXVzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICM0NzY4Nzg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYixcclxuICAuY2Fyb3VzZWwsXHJcbiAgLmZvb3RlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjMzNjQwO1xyXG4gIH1cclxuICBcclxuICAuYWJvdXQtdXMge1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNyU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNyU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXIge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5iaW8ge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb3B5cmlnaHRzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTI1MmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIERpdmlkZXIgKEhvcml6b250YWwgTGluZSkgU3R5bGluZyAqL1xyXG4gIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1heC13aWR0aDogNWVtO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAub3V0ZXItbGluZSB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdXRlci1saW5lLWRhcmsge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMjMzNjQwO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-4\">\n</div>\n<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color:grey;\">\n  <a class=\"navbar-brand\" routerLink=\"/\" title=\"go to main page\">Register <span class=\"sr-only\">(current)</span></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\" title=\"home page\">Register</a>\n      </li> -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/beds\" title=\"go to bed section\">Beds</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/wardrobes\" title=\"go to wardrobe section\">Wardrobes</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sofas\" title=\"go to sofas and loungers section\">Sofas and Loungers</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/decor\" title=\"go to decor section\">Decor</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <ul class=\"navbar-nav mr-auto\">\n          <a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\" routerLink=\"/login\" title=\"go to login page\">Login</a>\n          <a class=\"nav-link\" style=\"color: black\" routerLink=\"/checkout\" title=\"go to shopping cart\">Checkout</a>\n          <a class=\"nav-link\" style = \"cursor: pointer\" *ngIf=\"_authService.loggedIn()\" (click) =\"_authService.logoutUser()\" title=\"logout\">Logout</a>\n      </ul>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(_authService) {
        this._authService = _authService;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-4\">\n  </div>\n  <div class=\"row\">\n      <div class=\"col-md-6 mx-auto\">\n        <span class=\"anchor\" id=\"formLogin\"></span>\n  \n        <!-- form card login -->\n        <div class=\"card rounded-0\">\n          <div class=\"card-header\">\n            <h3 class=\"mb-0\">Login</h3>\n          </div>\n    <div class=\"card-body\">\n      <form #userForm=\"ngForm\" data-toggle=\"validator\" role=\"form\" id=\"form-reset\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email-Id*</label>\n          <input type=\"text\" class=\"form-control\" id=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" required\n            [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\" placeholder=\"Enter Email-Id\">\n          <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n            <div [hidden]=\"!email.errors.required\">\n              Email-Id is required!\n            </div>\n            <div [hidden]=\"!email.errors.pattern\">\n              Must be a valid pattern!\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"pswd\">Password*</label>\n          <input type=\"password\" class=\"form-control\" id=\"pswd\" pattern=\".{6,}\" required [(ngModel)]=\"model.pswd\"\n            name=\"pswd\" #pswd=\"ngModel\" placeholder=\"Enter Password\">\n          <div *ngIf=\"pswd.errors && (pswd.dirty || pswd.touched)\" class=\"alert alert-danger\">\n            <div [hidden]=\"!pswd.errors.required\">\n              Password is required!\n            </div>\n            <div [hidden]=\"!pswd.errors.pattern\">\n              Must have 6 or more characters!\n            </div>\n          </div>\n        </div>\n        \n        <button [disabled] = \"!userForm.form.valid\" type=\"submit\" class=\"btn btn-success\"  >Login</button>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, _router) {
        this.auth = auth;
        this._router = _router;
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.loginUser(this.model)
            .subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this._router.navigate(['/checkout']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shop.model.ts":
/*!*******************************!*\
  !*** ./src/app/shop.model.ts ***!
  \*******************************/
/*! exports provided: Shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shop", function() { return Shop; });
var Shop = /** @class */ (function () {
    function Shop(fname, lname, email, pswd, contact, id) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.pswd = pswd;
        this.contact = contact;
        this.id = id;
    }
    return Shop;
}());



/***/ }),

/***/ "./src/app/sofasand-loungers-page/sofasand-loungers-page.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/sofasand-loungers-page/sofasand-loungers-page.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL3NvZmFzYW5kLWxvdW5nZXJzLXBhZ2Uvc29mYXNhbmQtbG91bmdlcnMtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sofasand-loungers-page/sofasand-loungers-page.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/sofasand-loungers-page/sofasand-loungers-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-4\">\n</div>\n<div class=\"row\">\n    <div class=\"py-4\">\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/h/u/568x284/hugo-two-seater-sofa-in-navy-blue-colour-by-casacraft-hugo-two-seater-sofa-in-navy-blue-colour-by-ca-kgkwxo.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.45,499\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('sofa-lounger1',1,45499,17)\">Add to\n                Cart</button>\n        </figure>\n    </div>\n\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/m/i/236x260/miranda-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-miranda-one-seater-sofa-in-charcoal-gre-owhydd.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"...\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.55,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('sofa-lounger2',1,55499,18)\">Add to\n                Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/h/u/568x284/hugo-two-seater-sofa-in-navy-blue-colour-by-casacraft-hugo-two-seater-sofa-in-navy-blue-colour-by-ca-kgkwxo.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.45,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('sofa-lounger3',1,45499,19)\">Add to\n                Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/m/i/236x260/miranda-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-miranda-one-seater-sofa-in-charcoal-gre-owhydd.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"...\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.45,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('sofa-lounger4',1,45499,20)\">Add to\n                Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/h/u/568x284/hugo-two-seater-sofa-in-navy-blue-colour-by-casacraft-hugo-two-seater-sofa-in-navy-blue-colour-by-ca-kgkwxo.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.45,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('sofa-lounger5',1,45499,21)\">Add to\n                Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/m/i/236x260/miranda-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-miranda-one-seater-sofa-in-charcoal-gre-owhydd.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"...\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.45,499\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('sofa-lounger6',1,45499,22)\">Add to\n                Cart</button>\n        </figure>\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/h/u/568x284/hugo-two-seater-sofa-in-navy-blue-colour-by-casacraft-hugo-two-seater-sofa-in-navy-blue-colour-by-ca-kgkwxo.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.45,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('sofa-lounger7',1,45499,23)\">Add to\n                Cart</button>\n        </figure>\n    </div>\n\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/m/i/236x260/miranda-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-miranda-one-seater-sofa-in-charcoal-gre-owhydd.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"...\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.45,499\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('sofa-lounger8',1,45499,24)\">Add to\n                Cart</button>\n        </figure>\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/h/u/568x284/hugo-two-seater-sofa-in-navy-blue-colour-by-casacraft-hugo-two-seater-sofa-in-navy-blue-colour-by-ca-kgkwxo.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.45,499\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('sofa-lounger9',1,45499,25)\">Add to\n                Cart</button>\n        </figure>\n    </div>\n\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/m/i/236x260/miranda-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-miranda-one-seater-sofa-in-charcoal-gre-owhydd.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"...\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.45,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('sofa-lounger10',1,45499,26)\">Add to\n                Cart</button>\n        </figure>\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/h/u/568x284/hugo-two-seater-sofa-in-navy-blue-colour-by-casacraft-hugo-two-seater-sofa-in-navy-blue-colour-by-ca-kgkwxo.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.45,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('sofa-lounger11',1,45499,27)\">Add to\n                Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/m/i/236x260/miranda-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-miranda-one-seater-sofa-in-charcoal-gre-owhydd.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"...\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.45,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('sofa-lounger12',1,45499,28)\">Add to\n                Cart</button>\n        </figure>\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/h/u/568x284/hugo-two-seater-sofa-in-navy-blue-colour-by-casacraft-hugo-two-seater-sofa-in-navy-blue-colour-by-ca-kgkwxo.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.45,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('sofa-lounger13',1,45499,29)\">Add to\n                Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii3.pepperfry.com/media/catalog/product/m/i/236x260/miranda-one-seater-sofa-in-charcoal-grey-colour-by-casacraft-miranda-one-seater-sofa-in-charcoal-gre-owhydd.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"...\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.45,499\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('sofa-lounger14',1,45499,30)\">Add to\n                Cart</button>\n        </figure>\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/h/u/568x284/hugo-two-seater-sofa-in-navy-blue-colour-by-casacraft-hugo-two-seater-sofa-in-navy-blue-colour-by-ca-kgkwxo.jpg\"\n                class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.45,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click)=\"submitCart('sofa-lounger15',1,45499,31)\">Add to\n                Cart</button>\n        </figure>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/sofasand-loungers-page/sofasand-loungers-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/sofasand-loungers-page/sofasand-loungers-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: SofasandLoungersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SofasandLoungersPageComponent", function() { return SofasandLoungersPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../cart-data.service */ "./src/app/cart-data.service.ts");



var SofasandLoungersPageComponent = /** @class */ (function () {
    function SofasandLoungersPageComponent(cartDataService) {
        this.cartDataService = cartDataService;
        this.newCart = {
            productName: "oldvalue",
            Quantity: 0,
            Price: 0,
        };
    }
    SofasandLoungersPageComponent.prototype.ngOnInit = function () {
    };
    SofasandLoungersPageComponent.prototype.submitCart = function (name, qty, pr, un) {
        this.newCart.productName = name;
        this.newCart.Quantity = qty;
        this.newCart.Price = pr;
        this.newCart.uni = un;
        console.log("The new product is : " + this.newCart.productName);
        var dataObject = JSON.parse(JSON.stringify(this.newCart));
        this.cartDataService.addNewProduct(dataObject);
        return this.cartDataService.getTotal(pr);
    };
    SofasandLoungersPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sofasand-loungers-page',
            template: __webpack_require__(/*! ./sofasand-loungers-page.component.html */ "./src/app/sofasand-loungers-page/sofasand-loungers-page.component.html"),
            styles: [__webpack_require__(/*! ./sofasand-loungers-page.component.css */ "./src/app/sofasand-loungers-page/sofasand-loungers-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_data_service__WEBPACK_IMPORTED_MODULE_2__["CartDataService"]])
    ], SofasandLoungersPageComponent);
    return SofasandLoungersPageComponent;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authService.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/wardrobes-page/wardrobes-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/wardrobes-page/wardrobes-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL3dhcmRyb2Jlcy1wYWdlL3dhcmRyb2Jlcy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/wardrobes-page/wardrobes-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/wardrobes-page/wardrobes-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-4\">\n</div>    \n<div class=\"row\">\n    <div class=\"py-4\">\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/u/j/236x260/ujisato-eight-door-wardrobe-with-two-drawers-by-mintwud-ujisato-eight-door-wardrobe-with-two-drawers-p1sgou.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.15,499\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click) = \"submitCart('wardrobe1',1,15499,42)\">Add to Cart</button>\n        </figure>\n    </div>\n\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii1.pepperfry.com/media/catalog/product/n/a/236x260/nariko-three-door-wardrobe-in-wenge-finish-by-mintwud-nariko-three-door-wardrobe-in-wenge-finish-by--cplr40.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.25,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click) = \"submitCart('wardrobe2',1,25499,43)\">Add to Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/u/j/236x260/ujisato-eight-door-wardrobe-with-two-drawers-by-mintwud-ujisato-eight-door-wardrobe-with-two-drawers-p1sgou.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.15,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" data-id=\"1\" (click) = \"submitCart('wardrobe3',1,15499,44)\">Add to Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii1.pepperfry.com/media/catalog/product/n/a/236x260/nariko-three-door-wardrobe-in-wenge-finish-by-mintwud-nariko-three-door-wardrobe-in-wenge-finish-by--cplr40.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.15,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click) = \"submitCart('wardrobe4',1,15499,45)\">Add to Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii1.pepperfry.com/media/catalog/product/n/a/236x260/nariko-three-door-wardrobe-in-wenge-finish-by-mintwud-nariko-three-door-wardrobe-in-wenge-finish-by--cplr40.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.15,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click) = \"submitCart('wardrobe5',1,15499,46)\">Add to Cart</button>\n        </figure>\n    </div>\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/u/j/236x260/ujisato-eight-door-wardrobe-with-two-drawers-by-mintwud-ujisato-eight-door-wardrobe-with-two-drawers-p1sgou.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\ns\n            <figcaption class=\"figure-caption text-center\">\n                Rs.15,499\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click) = \"submitCart('wardrobe6',1,15499,47)\">Add to Cart</button>\n        </figure>\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii2.pepperfry.com/media/catalog/product/u/j/236x260/ujisato-eight-door-wardrobe-with-two-drawers-by-mintwud-ujisato-eight-door-wardrobe-with-two-drawers-p1sgou.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.15,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click) = \"submitCart('wardrobe7',1,15499,48)\">Add to Cart</button>\n        </figure>\n    </div>\n\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii1.pepperfry.com/media/catalog/product/n/a/236x260/nariko-three-door-wardrobe-in-wenge-finish-by-mintwud-nariko-three-door-wardrobe-in-wenge-finish-by--cplr40.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.15,499\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click) = \"submitCart('wardrobe8',1,15499,49)\">Add to Cart</button>\n        </figure>\n    </div>\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii1.pepperfry.com/media/catalog/product/n/a/236x260/nariko-three-door-wardrobe-in-wenge-finish-by-mintwud-nariko-three-door-wardrobe-in-wenge-finish-by--cplr40.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n\n            <figcaption class=\"figure-caption text-center\">\n                Rs.15,499\n            </figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click) = \"submitCart('wardrobe9',1,15499,50)\">Add to Cart</button>\n        </figure>\n    </div>\n\n\n    <div class=\"col-md-3 text-center\">\n        <figure class=\"figure\">\n            <img src=\"https://ii1.pepperfry.com/media/catalog/product/n/a/236x260/nariko-three-door-wardrobe-in-wenge-finish-by-mintwud-nariko-three-door-wardrobe-in-wenge-finish-by--cplr40.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Responsive image\">\n            <figcaption class=\"figure-caption text-center\">\n                Rs.15,499</figcaption>\n            <br>\n            <button class=\"btn btn-primary my-cart-btn\" (click) = \"submitCart('wardrobe10',1,15499,51)\">Add to Cart</button>\n        </figure>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/wardrobes-page/wardrobes-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/wardrobes-page/wardrobes-page.component.ts ***!
  \************************************************************/
/*! exports provided: WardrobesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WardrobesPageComponent", function() { return WardrobesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../cart-data.service */ "./src/app/cart-data.service.ts");



var WardrobesPageComponent = /** @class */ (function () {
    function WardrobesPageComponent(cartDataService) {
        this.cartDataService = cartDataService;
        this.newCart = {
            productName: "oldvalue",
            Quantity: 0,
            Price: 0
        };
    }
    WardrobesPageComponent.prototype.ngOnInit = function () {
    };
    WardrobesPageComponent.prototype.submitCart = function (name, qty, pr, un) {
        this.newCart.productName = name;
        this.newCart.Quantity = qty;
        this.newCart.Price = pr;
        this.newCart.uni = un;
        console.log("The new product is : " + this.newCart.productName);
        var dataObject = JSON.parse(JSON.stringify(this.newCart));
        this.cartDataService.addNewProduct(dataObject);
        return this.cartDataService.getTotal(pr);
    };
    WardrobesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wardrobes-page',
            template: __webpack_require__(/*! ./wardrobes-page.component.html */ "./src/app/wardrobes-page/wardrobes-page.component.html"),
            styles: [__webpack_require__(/*! ./wardrobes-page.component.css */ "./src/app/wardrobes-page/wardrobes-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_data_service__WEBPACK_IMPORTED_MODULE_2__["CartDataService"]])
    ], WardrobesPageComponent);
    return WardrobesPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\charvi\home decor shop\App\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map