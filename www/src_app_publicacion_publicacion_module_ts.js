(self["webpackChunkusuarios"] = self["webpackChunkusuarios"] || []).push([["src_app_publicacion_publicacion_module_ts"],{

/***/ 412:
/*!***********************************************************!*\
  !*** ./src/app/publicacion/publicacion-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacionPageRoutingModule": () => (/* binding */ PublicacionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _publicacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicacion.page */ 7938);




const routes = [
    {
        path: '',
        component: _publicacion_page__WEBPACK_IMPORTED_MODULE_0__.PublicacionPage
    }
];
let PublicacionPageRoutingModule = class PublicacionPageRoutingModule {
};
PublicacionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PublicacionPageRoutingModule);



/***/ }),

/***/ 3638:
/*!***************************************************!*\
  !*** ./src/app/publicacion/publicacion.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacionPageModule": () => (/* binding */ PublicacionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _publicacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicacion-routing.module */ 412);
/* harmony import */ var _publicacion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicacion.page */ 7938);







let PublicacionPageModule = class PublicacionPageModule {
};
PublicacionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _publicacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.PublicacionPageRoutingModule
        ],
        declarations: [_publicacion_page__WEBPACK_IMPORTED_MODULE_1__.PublicacionPage]
    })
], PublicacionPageModule);



/***/ }),

/***/ 7938:
/*!*************************************************!*\
  !*** ./src/app/publicacion/publicacion.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicacionPage": () => (/* binding */ PublicacionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_publicacion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./publicacion.page.html */ 3688);
/* harmony import */ var _publicacion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicacion.page.scss */ 4524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users/users.service */ 4733);







let PublicacionPage = class PublicacionPage {
    constructor(activatedRoute, users, navCtrl) {
        this.activatedRoute = activatedRoute;
        this.users = users;
        this.navCtrl = navCtrl;
        this.mUsuario = null;
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.users.obtenerUsuarioEspecifico(id)
            .subscribe((data) => {
            this.mUsuario = data;
            this.obtenerPublicaciones(this.mUsuario.id);
        });
    }
    obtenerPublicaciones(userId) {
        this.users.obtenerPublicaciones(userId)
            .subscribe((data) => {
            this.mPublicaciones = data;
        });
    }
    onClickNavBack() {
        this.navCtrl.navigateBack("/home");
    }
};
PublicacionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_users_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
PublicacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-publicacion',
        template: _raw_loader_publicacion_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_publicacion_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PublicacionPage);



/***/ }),

/***/ 4524:
/*!***************************************************!*\
  !*** ./src/app/publicacion/publicacion.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  text-align: center;\n  font-weight: bold;\n}\n\nion-icon {\n  padding-left: 16px;\n  font-size: 1.4em;\n  font-weight: bold;\n}\n\n.card1 {\n  margin: 15px;\n  padding: 13px 13px 13px 13px;\n  color: #3880FF;\n}\n\n.card2 {\n  padding: 0px;\n}\n\nion-label {\n  font-weight: bold;\n  color: black !important;\n}\n\n.titulo {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.cuerpo {\n  text-align: justify;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2FjaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJwdWJsaWNhY2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNhcmQxIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmc6IDEzcHggMTNweCAxM3B4IDEzcHg7XHJcbiAgICBjb2xvcjogIzM4ODBGRjtcclxufVxyXG5cclxuLmNhcmQyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jdWVycG8ge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */");

/***/ }),

/***/ 3688:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publicacion/publicacion.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar color=\"secondary\">\n        <ion-icon slot=\"start\" name=\"arrow-back\" (click)=\"onClickNavBack()\"></ion-icon>\n        <ion-title>publicaciones</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"card1\">\n        <ion-row>\n            <div>\n                <ion-label>{{mUsuario?.name}}</ion-label>\n            </div>\n        </ion-row>\n        <ion-row>\n            <div>\n                <ion-icon slot=\"start\" name=\"call-outline\"></ion-icon>&nbsp; {{mUsuario?.phone}}\n            </div>\n        </ion-row>\n        <ion-row>\n            <div>\n                <ion-icon slot=\"start\" name=\"mail-outline\"></ion-icon>&nbsp; {{mUsuario?.email}}\n            </div>\n        </ion-row>\n    </ion-card>\n    <ion-card class=\"card2\">\n        <ion-list>\n            <ion-item *ngFor=\"let publicacion of mPublicaciones\">\n                <ion-grid>\n                    <ion-col>\n                        <ion-row class=\"titulo\">\n                            {{publicacion.title}}\n                        </ion-row>\n                        <br>\n                        <ion-row class=\"cuerpo\">\n                            {{publicacion.body}}\n                        </ion-row>\n                    </ion-col>\n                </ion-grid>\n            </ion-item>\n        </ion-list>\n    </ion-card>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_publicacion_publicacion_module_ts.js.map