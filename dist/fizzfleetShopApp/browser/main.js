"use strict";
(self["webpackChunkfizzfleetShopApp"] = self["webpackChunkfizzfleetShopApp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/catalog/catalog.component */ 9725);
/* harmony import */ var _pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/payment/payment.component */ 7098);
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact/contact.component */ 5996);
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ 8340);
/* harmony import */ var _pages_catalog_single_product_product_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/catalog/single-product/product-view.component */ 7373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









const header = 'FizzFleet Shop - ';
const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  title: header + 'Inicio',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'catalog',
  title: header + 'Catalogo',
  component: _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_1__.CatalogComponent
}, {
  path: 'catalog/:id',
  title: header + 'Publicación',
  component: _pages_catalog_single_product_product_view_component__WEBPACK_IMPORTED_MODULE_5__.ProductViewComponent
}, {
  path: 'payment/:id',
  title: header + 'Pedido N#',
  component: _pages_payment_payment_component__WEBPACK_IMPORTED_MODULE_2__.PaymentComponent
}, {
  path: 'contact',
  title: header + 'Contactenos',
  component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent
}, {
  path: '**',
  title: header + 'No encontrado',
  component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 72,
  vars: 0,
  consts: [[1, "header_area"], [1, "main_menu"], [1, "navbar", "navbar-expand-lg", "fixed-top", "bg-white"], [1, "container"], ["href", "index.html", 1, "navbar-brand", "logo_h"], ["src", "/src/assets/img/logo.png", "alt", ""], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "offset", "justify-content-around"], [1, "nav", "navbar-nav", "menu_nav", "ml-auto", "mr-auto"], [1, "nav-item"], ["href", "/home", 1, "nav-link", "show-view"], [1, "nav-item", "submenu", "dropdown"], ["href", "#", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu", "list-group"], ["href", "/catalog", 1, "nav-link", "show-view"], ["href", "/product", 1, "nav-link"], ["href", "/payment", 1, "nav-link", "show-view"], ["href", "#", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "/profile", 1, "nav-link"], ["href", "/profile/edit", 1, "nav-link"], ["href", "/profile/tracking", 1, "nav-link"], ["href", "/profile/claims", 1, "nav-link"], ["href", "/account", 1, "nav-link"], ["href", "/account/register", 1, "nav-link"], ["href", "/cart", 1, "nav-link"], ["href", "/contact", 1, "nav-link", "show-view"], [1, "nav-shop"], ["href", "#", "data-bs-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link"], [1, "ti-search"], [1, "nav-item", "ms-3", "mb-2"], [1, "input-group", "filter-bar-search"], ["type", "text", "placeholder", "Buscar producto"], ["href", "/cart"], [1, "ti-shopping-cart"], [1, "nav-shop__circle"], ["href", "/account", 1, "button", "button-header"], [1, "site-main", "tab-content"], [1, "navbar-replace"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "nav", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10)(12, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Productos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 12)(15, "li", 8)(16, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Catalogo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8)(19, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Visualizar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8)(22, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Pagar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 10)(25, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cuenta");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 17)(28, "li", 8)(29, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Perfil");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 8)(32, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Editar Perfil");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 8)(35, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Traking");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 8)(38, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Reclamos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 8)(41, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Iniciar Sesion");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 8)(44, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Registrarse");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 8)(47, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Carrito de compra");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 8)(50, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Contacto");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul", 26)(53, "li", 10)(54, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 17)(57, "li", 29)(58, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 8)(61, "button")(62, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 8)(67, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Iniciar Sesion");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "main", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 37)(71, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_catalog_single_product_product_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/catalog/single-product/product-post.component */ 798);
/* harmony import */ var _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/catalog/catalog.component */ 9725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);








class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_3__.CatalogComponent, _pages_catalog_single_product_product_post_component__WEBPACK_IMPORTED_MODULE_2__.ProductPostComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule]
  });
})();

/***/ }),

/***/ 9725:
/*!****************************************************!*\
  !*** ./src/app/pages/catalog/catalog.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogComponent": () => (/* binding */ CatalogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _products_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-list */ 8106);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _single_product_product_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-product/product-post.component */ 798);






function CatalogComponent_app_post_168_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-post", 65);
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("post", post_r1);
  }
}
class CatalogComponent {
  constructor() {
    this.catalog = _products_list__WEBPACK_IMPORTED_MODULE_0__.productPosts;
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient);
  }
  ngOnInit() {
    this.catalog.forEach(post => console.log(post.publishId));
    /*this.http.get<ProductPost[]>('https://localhost:7271/api/Catalog')
      .subscribe(posts => {
        this.catalog = posts;
        console.log(posts);
      });*/
  }
}

CatalogComponent.ɵfac = function CatalogComponent_Factory(t) {
  return new (t || CatalogComponent)();
};
CatalogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CatalogComponent,
  selectors: [["app-catalog"]],
  decls: 169,
  vars: 1,
  consts: [[1, "section-margin--small", "mb-5"], [1, "container"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-5"], [1, "sidebar-categories"], [1, "head"], [1, "main-categories"], [1, "common-filter"], ["action", "#"], [1, "filter-list"], ["type", "radio", "id", "men", "name", "brand", 1, "pixel-radio"], ["for", "men"], ["type", "radio", "id", "women", "name", "brand", 1, "pixel-radio"], ["for", "women"], ["type", "radio", "id", "accessories", "name", "brand", 1, "pixel-radio"], ["for", "accessories"], ["type", "radio", "id", "footwear", "name", "brand", 1, "pixel-radio"], ["for", "footwear"], ["type", "radio", "id", "bayItem", "name", "brand", 1, "pixel-radio"], ["for", "bayItem"], ["type", "radio", "id", "electronics", "name", "brand", 1, "pixel-radio"], ["for", "electronics"], ["type", "radio", "id", "food", "name", "brand", 1, "pixel-radio"], ["for", "food"], [1, "sidebar-filter"], [1, "top-filter-head"], ["type", "radio", "id", "apple", "name", "brand", 1, "pixel-radio"], ["for", "apple"], ["type", "radio", "id", "asus", "name", "brand", 1, "pixel-radio"], ["for", "asus"], ["type", "radio", "id", "gionee", "name", "brand", 1, "pixel-radio"], ["for", "gionee"], ["type", "radio", "id", "micromax", "name", "brand", 1, "pixel-radio"], ["for", "micromax"], ["type", "radio", "id", "samsung", "name", "brand", 1, "pixel-radio"], ["for", "samsung"], ["type", "radio", "id", "black", "name", "color", 1, "pixel-radio"], ["for", "black"], ["type", "radio", "id", "balckleather", "name", "color", 1, "pixel-radio"], ["for", "balckleather"], ["type", "radio", "id", "blackred", "name", "color", 1, "pixel-radio"], ["for", "blackred"], ["type", "radio", "id", "gold", "name", "color", 1, "pixel-radio"], ["for", "gold"], ["type", "radio", "id", "spacegrey", "name", "color", 1, "pixel-radio"], ["for", "spacegrey"], [1, "price-range-area"], ["id", "price-range"], [1, "value-wrapper", "d-flex"], [1, "price"], ["id", "lower-value"], [1, "to"], ["id", "upper-value"], [1, "col-xl-9", "col-lg-8", "col-md-7"], [1, "filter-bar", "d-flex", "flex-wrap", "align-items-center"], [1, "sorting"], ["value", "1"], [1, "sorting", "mr-auto"], [1, "input-group", "filter-bar-search"], ["type", "text", "placeholder", "Buscar"], [1, "input-group-append"], ["type", "button", 1, "h-100"], [1, "ti-search"], [1, "lattest-product-area", "pb-40", "category-list"], ["class", "col-md-6 col-lg-4", 3, "post", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4", 3, "post"]],
  template: function CatalogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Browse Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 6)(8, "li", 7)(9, "form", 8)(10, "ul")(11, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Men");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " (3600)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Women");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " (3600)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Accessories");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " (3600)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Footwear");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " (3600)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Bay item");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " (3600)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Electronics");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " (3600)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Food");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " (3600)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 24)(54, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Product Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 7)(57, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Brands");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "form", 8)(60, "ul")(61, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Apple");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "(29)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Asus");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "(29)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Gionee");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "(19)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Micromax");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "(19)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Samsung");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "(19)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 7)(92, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "form", 8)(95, "ul")(96, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Black");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "(29)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Black Leather");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "(29)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "label", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Black with red");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "(19)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Gold");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "(19)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](121, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Spacegrey");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "(19)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 7)(127, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 48)(132, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Price:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "to");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](141, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 53)(143, "div", 54)(144, "div", 55)(145, "select")(146, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Default sorting");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Default sorting");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "Default sorting");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 57)(153, "select")(154, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "Show 12");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "Show 12");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Show 12");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div")(161, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](162, "input", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "div", 60)(164, "button", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](165, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "section", 63)(167, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](168, CatalogComponent_app_post_168_Template, 1, 1, "app-post", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](168);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.catalog);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _single_product_product_post_component__WEBPACK_IMPORTED_MODULE_1__.ProductPostComponent],
  encapsulation: 2
});

/***/ }),

/***/ 8106:
/*!************************************************!*\
  !*** ./src/app/pages/catalog/products-list.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productPosts": () => (/* binding */ productPosts)
/* harmony export */ });
const productPosts = [{
  publishId: 1,
  coverUrl: 'https://example.com/image1',
  title: 'Product 1',
  price: 10,
  categories: ['Category A', 'Category B']
}, {
  publishId: 2,
  coverUrl: 'https://example.com/image2',
  title: 'Product 2',
  price: 20,
  categories: ['Category A', 'Category C']
}, {
  publishId: 3,
  coverUrl: 'https://example.com/image3',
  title: 'Product 3',
  price: 30,
  categories: ['Category C']
}, {
  publishId: 4,
  coverUrl: 'https://example.com/image4',
  title: 'Product 4',
  price: 40,
  categories: ['Category A', 'Category C']
}, {
  publishId: 5,
  coverUrl: 'https://example.com/image5',
  title: 'Product 5',
  price: 50,
  categories: ['Category B']
}, {
  publishId: 6,
  coverUrl: 'https://example.com/image6',
  title: 'Product 6',
  price: 60,
  categories: ['Category A', 'Category C']
}, {
  publishId: 7,
  coverUrl: 'https://example.com/image7',
  title: 'Product 7',
  price: 70,
  categories: ['Category A']
}, {
  publishId: 8,
  coverUrl: 'https://example.com/image8',
  title: 'Product 8',
  price: 80,
  categories: ['Category B', 'Category C']
}, {
  publishId: 9,
  coverUrl: 'https://example.com/image9',
  title: 'Product 9',
  price: 90,
  categories: ['Category C']
}, {
  publishId: 10,
  coverUrl: 'https://example.com/image10',
  title: 'Product 10',
  price: 100,
  categories: ['Category A', 'Category B', 'Category C']
}];
const images = [{
  coverUrl: 'https://example.com/image1.jpg',
  thumbnailUrl: 'https://example.com/thumbnail1.jpg'
}, {
  coverUrl: 'https://example.com/image2.jpg',
  thumbnailUrl: 'https://example.com/thumbnail2.jpg'
}, {
  coverUrl: 'https://example.com/image2.jpg',
  thumbnailUrl: 'https://example.com/thumbnail2.jpg'
}, {
  coverUrl: 'https://example.com/image2.jpg',
  thumbnailUrl: 'https://example.com/thumbnail2.jpg'
}];
const specs = [{
  name: 'Spec A',
  value: 'Value A'
}, {
  name: 'Spec B',
  value: 'Value B'
}, {
  name: 'Spec A',
  value: 'Value A'
}, {
  name: 'Spec B',
  value: 'Value B'
}, {
  name: 'Spec A',
  value: 'Value A'
}, {
  name: 'Spec B',
  value: 'Value B'
}];
const products = [{
  postId: '1',
  title: 'Product 1',
  price: 10,
  categories: ['category 1'],
  images: images,
  description: 'Product 1 description',
  active: true,
  specs: specs
}, {
  postId: '2',
  title: 'Product 2',
  price: 20,
  categories: ['category 1', 'category 2'],
  images: images,
  description: 'Product 2 description',
  active: true,
  specs: specs
}, {
  postId: '3',
  title: 'Product 3',
  price: 30,
  categories: ['category 2'],
  images: images,
  description: 'Product 3 description',
  active: true,
  specs: specs
}, {
  postId: '4',
  title: 'Product 4',
  price: 40,
  categories: ['category 2', 'category 3'],
  images: images,
  description: 'Product 4 description',
  active: true,
  specs: specs
}, {
  postId: '5',
  title: 'Product 5',
  price: 50,
  categories: ['category 3'],
  images: images,
  description: 'Product 5 description',
  active: true,
  specs: specs
}, {
  postId: '6',
  title: 'Product 6',
  price: 60,
  categories: ['category 4'],
  images: images,
  description: 'Product 6 description',
  active: true,
  specs: specs
}, {
  postId: '7',
  title: 'Product 7',
  price: 70,
  categories: ['category 4', 'category 5'],
  images: images,
  description: 'Product 7 description',
  active: true,
  specs: specs
}, {
  postId: '8',
  title: 'Product 8',
  price: 80,
  categories: ['category 5'],
  images: images,
  description: 'Product 8 description',
  active: true,
  specs: specs
}, {
  postId: '9',
  title: 'Product 9',
  price: 90,
  categories: ['category 5', 'category 6'],
  images: images,
  description: 'Product 9 description',
  active: true,
  specs: specs
}, {
  postId: '10',
  title: 'Product 10',
  price: 100,
  categories: ['category 6'],
  images: images,
  description: 'Product 10 description',
  active: true,
  specs: specs
}];

/***/ }),

/***/ 798:
/*!************************************************************************!*\
  !*** ./src/app/pages/catalog/single-product/product-post.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPostComponent": () => (/* binding */ ProductPostComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ProductPostComponent_div_0_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const category_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2);
  }
}
function ProductPostComponent_div_0_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductPostComponent_div_0_11_ng_template_0_Template, 1, 1, "ng-template");
  }
}
function ProductPostComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 4)(4, "li")(5, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductPostComponent_div_0_11_Template, 1, 0, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 9)(13, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.post.coverUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("NgForOf", ctx_r0.post.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.post.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.post.price);
  }
}
class ProductPostComponent {}
ProductPostComponent.ɵfac = function ProductPostComponent_Factory(t) {
  return new (t || ProductPostComponent)();
};
ProductPostComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProductPostComponent,
  selectors: [["app-post"]],
  inputs: {
    post: "post"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "card text-center card-product", 4, "ngIf"], [1, "card", "text-center", "card-product"], [1, "card-product__img"], ["data-mdb-toggle", "animation", "data-mdb-animation-start", "onScroll", "data-mdb-animation", "fade-in", 1, "card-img", "animation", "fade-in", 2, "visibility", "visible", "animation-duration", "1000ms", 3, "src"], [1, "card-product__imgOverlay"], [1, "ti-search"], [1, "ti-shopping-cart"], [1, "card-body"], [4, "NgFor", "NgForOf"], [1, "card-product__title"], ["href", "/catalog/post.publishId"], [1, "card-product__price"]],
  template: function ProductPostComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductPostComponent_div_0_Template, 17, 4, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 7373:
/*!************************************************************************!*\
  !*** ./src/app/pages/catalog/single-product/product-view.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductViewComponent": () => (/* binding */ ProductViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class ProductViewComponent {
  constructor(route) {
    this.route = route;
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
  }
  ngOnInit() {
    //this.publishId = this.route.snapshot.params['id'];
    this.http.get(`http://localhost:5300/publish/${this.publishId}`).subscribe(

      //publish => this.publish = publish
    );
  }
}
ProductViewComponent.ɵfac = function ProductViewComponent_Factory(t) {
  return new (t || ProductViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};
ProductViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProductViewComponent,
  selectors: [["app-product-view"]],
  decls: 110,
  vars: 0,
  consts: [[1, "container", "mt-4"], [1, "row", "s_product_inner"], [1, "col-lg-6"], [1, "zoomArea"], ["src", "img/product/product1.png", "id", "NZoomImg", "data-NZoomscale", "2", "alt", "product-image", 1, "img-thumbnail", "border-0"], [1, "col-lg-5", "offset-lg-1"], [1, "s_product_text"], [1, "list"], ["href", "#", 1, "active"], [1, "product_count"], ["for", "qty"], ["type", "text", "name", "qty", "id", "sst", "size", "2", "maxlength", "12", "value", "1", "title", "Quantity:", 1, "input-text", "qty"], ["href", "#", 1, "button", "primary-btn"], [1, "card_area", "d-flex", "align-items-center"], ["href", "#", 1, "icon_btn"], ["src", "img/product/product-sm-1.png", "alt", "", 1, "card-img"], [1, "product_description_area"], [1, "container"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "description-tab", "data-bs-toggle", "tab", "href", "#description", "role", "tab", "aria-controls", "description", "aria-selected", "true", 1, "nav-link", "active"], ["id", "specs-tab", "data-bs-toggle", "tab", "href", "#specs", "role", "tab", "aria-controls", "specs", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content"], ["id", "description", "role", "tabpanel", "aria-labelledby", "description-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "specs", "role", "tabpanel", "aria-labelledby", "specs-tab", 1, "tab-pane", "fade"], [1, "table-responsive"], [1, "table"]],
  template: function ProductViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Agua saborizada de Tailandia");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "$149.99");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7)(12, "li")(13, "a", 8)(14, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Categorias");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " : agua saborizada, en vaso");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "a", 8)(19, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Disponicle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " : si");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Bebida popular en ese pa\u00EDs, que se elabora mezclando agua con diversos ingredientes para darle sabor. La mayor\u00EDa de las aguas saborizadas tailandesas tienen un sabor dulce y refrescante, y a menudo se elaboran con frutas tropicales como la pi\u00F1a, la sand\u00EDa, el coco y el mango. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9)(25, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cantidad:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Agregar al carrito");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13)(31, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 16)(36, "div", 17)(37, "ul", 18)(38, "li", 19)(39, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Descripci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 19)(42, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Specificaciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22)(45, "div", 23)(46, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Beryl Cook is one of Britain\u2019s most talented and amusing artists .Beryl\u2019s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child\u2019s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named \u2018Hangover\u2019 by Beryl\u2019s husband and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24)(51, "div", 25)(52, "table", 26)(53, "tbody")(54, "tr")(55, "td")(56, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Width");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td")(59, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "128mm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr")(62, "td")(63, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Height");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td")(66, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "508mm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr")(69, "td")(70, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Depth");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td")(73, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "85mm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr")(76, "td")(77, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Weight");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td")(80, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "52gm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr")(83, "td")(84, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Quality checking");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td")(87, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr")(90, "td")(91, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Freshness Duration");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td")(94, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "03days");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tr")(97, "td")(98, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "When packeting");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td")(101, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Without touch of hand");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr")(104, "td")(105, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Each Box contains");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td")(108, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "60pcs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 5996:
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ContactComponent {}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)();
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 52,
  vars: 0,
  consts: [[1, "section-margin--small"], [1, "container"], [1, "row"], [1, "col-md-2", "mb-4", "mb-md-0"], [1, "media", "contact-info"], [1, "contact-info__icon"], [1, "ti-home"], [1, "media-body"], [1, "ti-headphone"], ["href", "tel:454545654"], [1, "ti-email"], [1, "__cf_email__"], [1, "col-md-6"], ["action", "#/", "method", "post", "id", "contactForm", "novalidate", "novalidate", 1, "form-contact", "contact_form"], [1, "form-group"], ["name", "name-company", "id", "name-company", "type", "text", "placeholder", "Nombre de empresa", 1, "form-control"], ["name", "email", "id", "email", "type", "email", "placeholder", "Email de contacto", 1, "form-control"], [1, "form-control"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["name", "message", "id", "message", "cols", "30", "rows", "5", "placeholder", "Escriba un breve resumen de su motivo de contacto", 1, "form-control", "different-control", "w-100"], [1, "form-group", "text-center", "text-md-right", "mt-3"], ["type", "submit", 1, "button", "button--active", "button-contactForm"], [1, "col-md-4", "mb-4", "mb-md-0"], ["id", "map", 2, "height", "360px"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Suramerica Colombia");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Santa Marta - Magdalena");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4)(13, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "h3")(17, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "00 (440) 9865 562");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lunes a viernes 9am - 6pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4)(22, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7)(25, "h3")(26, "a")(27, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "fizzfleet@contact.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12)(30, "form", 13)(31, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14)(36, "select", 17)(37, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Motivo de contacto");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Proveedor");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Patrocinio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Servicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "textarea", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23)(48, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Send Message ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HomeComponent {}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 141,
  vars: 0,
  consts: [[1, "hero-banner"], [1, "container"], [1, "row", "no-gutters", "align-items-center", "pt-60px"], [1, "col-5", "d-none", "d-sm-block"], [1, "hero-banner__img"], ["src", "img/home/hero-banner.png", "alt", "", 1, "img-fluid"], [1, "col-sm-7", "col-lg-6", "offset-lg-1", "pl-4", "pl-md-5", "pl-lg-0"], [1, "hero-banner__content"], ["href", "category.html", 1, "button", "button-hero"], [1, "section-margin", "calc-60px"], [1, "section-intro", "pb-60px"], [1, "section-intro__style"], [1, "row"], [1, "col-md-6", "col-lg-4", "col-xl-3"], [1, "card", "text-center", "card-product"], [1, "card-product__img"], ["src", "img/product/product1.png", "alt", "", 1, "card-img"], [1, "card-product__imgOverlay"], [1, "ti-search"], [1, "ti-shopping-cart"], [1, "ti-heart"], [1, "card-body"], [1, "card-product__title"], ["href", "single-product.html"], [1, "card-product__price"], ["src", "img/product/product4.png", "alt", "", 1, "card-img"], ["src", "img/product/product8.png", "alt", "", 1, "card-img"], ["href", "#"], ["src", "img/product/product7.png", "alt", "", 1, "card-img"], ["id", "parallax-1", "data-anchor-target", "#parallax-1", "data-300-top", "background-position: 20px 30px", "data-top-bottom", "background-position: 0 20px", 1, "offer"], [1, "col-xl-5"], [1, "offer__content", "text-center"], ["href", "#", 1, "button", "button--active", "mt-3", "mt-xl-4"], [1, "subscribe-position"], [1, "subscribe", "text-center"], [1, "subscribe__title"], ["id", "mc_embed_signup"], ["target", "_blank", "action", "https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01", "method", "get", 1, "subscribe-form", "form-inline", "mt-5", "pt-1"], [1, "form-group", "ml-sm-auto"], ["type", "email", "name", "EMAIL", "placeholder", "Ingresa tu correo", "onfocus", "this.placeholder = ''", "onblur", "this.placeholder = 'Your Email Address '", 1, "form-control", "mb-1"], [1, "info"], ["type", "submit", 1, "button", "button-subscribe", "mr-auto", "mb-1"], [2, "position", "absolute", "left", "-5000px"], ["name", "b_36c4fd991d266f23781ded980_aefe40901a", "tabindex", "-1", "value", "", "type", "text"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Busca aquello que refresque tu dia");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "El sabor que te lleva a otro nivel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Nosotros te ofrecemos una variedad de bebidas refrescantes, mira nuestras ofertas y productos. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Buscar ahora ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 9)(17, "div", 1)(18, "div", 10)(19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Articlos populares");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2")(22, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Productos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " del momento");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12)(26, "div", 13)(27, "div", 14)(28, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 17)(31, "li")(32, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li")(35, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li")(38, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21)(41, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Accessories");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 22)(44, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Quartz Belt Watch");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "$150.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13)(49, "div", 14)(50, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul", 17)(53, "li")(54, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li")(57, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li")(60, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 21)(63, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Decor");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4", 22)(66, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Room Flash Light");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "$150.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 13)(71, "div", 14)(72, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ul", 17)(75, "li")(76, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li")(79, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li")(82, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 21)(85, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Kids Toy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h4", 22)(88, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Charging Car");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "$150.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 13)(93, "div", 14)(94, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul", 17)(97, "li")(98, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li")(101, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li")(104, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 21)(107, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Kids Toy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h4", 22)(110, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Charging Car");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "$150.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "section", 29)(115, "div", 1)(116, "div", 12)(117, "div", 30)(118, "div", 31)(119, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "50% de descuento a usuarios nuevos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Ventas de primavera");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Pack de bienvenidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Adquirir ahora");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "section", 33)(128, "div", 1)(129, "div", 34)(130, "h3", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "SUBSCRIBETE PARA VER M\u00C1S PRODUCTOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 36)(133, "form", 37)(134, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "input", 39)(136, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Subscribete ahora ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 8340:
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PageNotFoundComponent {}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
  return new (t || PageNotFoundComponent)();
};
PageNotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageNotFoundComponent,
  selectors: [["app-page-not-found"]],
  decls: 2,
  vars: 0,
  template: function PageNotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7098:
/*!****************************************************!*\
  !*** ./src/app/pages/payment/payment.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PaymentComponent {}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) {
  return new (t || PaymentComponent)();
};
PaymentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PaymentComponent,
  selectors: [["app-payment"]],
  decls: 202,
  vars: 0,
  consts: [[1, "checkout_area", "section-margin--small"], [1, "container"], [1, "billing_details"], [1, "row"], ["hidden", "", 1, "col-lg-8"], ["action", "#", "method", "post", "novalidate", "novalidate", 1, "row", "contact_form"], [1, "col-md-6", "form-group", "p_star"], ["type", "text", "id", "first", "name", "name", 1, "form-control"], ["data-placeholder", "First name", 1, "placeholder"], ["type", "text", "id", "last", "name", "name", 1, "form-control"], ["data-placeholder", "Last name", 1, "placeholder"], [1, "col-md-12", "form-group"], ["type", "text", "id", "company", "name", "company", "placeholder", "Company name", 1, "form-control"], ["type", "text", "id", "number", "name", "number", 1, "form-control"], ["data-placeholder", "Phone number", 1, "placeholder"], ["type", "text", "id", "email", "name", "compemailany", 1, "form-control"], ["data-placeholder", "Email Address", 1, "placeholder"], [1, "col-md-12", "form-group", "p_star"], [1, "country_select"], ["value", "1"], ["value", "2"], ["value", "4"], ["type", "text", "id", "add1", "name", "add1", 1, "form-control"], ["data-placeholder", "Address line 01", 1, "placeholder"], ["type", "text", "id", "add2", "name", "add2", 1, "form-control"], ["data-placeholder", "Address line 02", 1, "placeholder"], ["type", "text", "id", "city", "name", "city", 1, "form-control"], ["data-placeholder", "Town/City", 1, "placeholder"], ["type", "text", "id", "zip", "name", "zip", "placeholder", "Postcode/ZIP", 1, "form-control"], [1, "creat_account"], ["type", "checkbox", "id", "f-option2", "name", "selector"], ["for", "f-option2"], [1, "col-md-12", "form-group", "mb-0"], ["type", "checkbox", "id", "f-option3", "name", "selector"], ["for", "f-option3"], ["name", "message", "id", "message", "rows", "1", "placeholder", "Order Notes", 1, "form-control"], [1, "col-lg-8"], [1, "cart_inner", "bg-white"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [1, "d-flex"], [1, "d-flex", 2, "width", "180px", "height", "90px"], ["src", "img/cart/cart1.png", "alt", ""], [1, "media-body", "align-self-center"], [1, "product_count"], ["type", "text", "name", "qty", "id", "sst", "maxlength", "12", "value", "1", "title", "Quantity:", 1, "input-text", "qty"], ["src", "img/cart/cart2.png", "alt", ""], ["type", "text", "name", "qty", "id", "sst", "maxlength", "12", "value", "3", "title", "Quantity:", 1, "input-text", "qty"], ["src", "img/cart/cart3.png", "alt", ""], [1, "bottom_button"], [1, "cupon_text", "d-flex", "align-items-center"], ["type", "text", "placeholder", "codigo"], ["href", "#", 1, "button"], [1, "col-lg-4"], [1, "order_box"], [1, "list"], ["href", "#"], [1, "middle"], [1, "last"], [1, "list", "list_2"], [1, "payment_item", "active"], [1, "radion_btn"], ["type", "radio", "id", "f-option6", "name", "selector"], ["for", "f-option6"], ["src", "img/product/card.jpg", "alt", ""], [1, "check"], [1, "text-center"], ["data-tab", "check-banner", 1, "button", "button-paypal", "show-tab"], ["id", "check-banner", "role", "tabpanel", 1, "tab", "full-banner", "position-fixed", "translate-middle", "top-50", "start-50", "w-100", "h-100"], [1, "navbar-replace", "mb-5"], [1, "container", "d-flex", "justify-content-center", "h-100", "pb-5"], [1, "card", "h-50", "w-25"], [1, "card-body", "text-center"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 52 52", 1, "checkmark"], ["cx", "26", "cy", "26", "r", "25", "fill", "none", 1, "checkmark__circle"], ["fill", "none", "d", "M14.1 27.2l7.1 7.2 16.7-16.8", 1, "checkmark__check"], [1, "my-3"], [1, "d-flex", "justify-content-center", "mb-2"], ["type", "button", "id", "close-check-banner", "data-tab", "check-banner", 1, "btn", "btn-secondary", "bg-p", "show-tab"], ["type", "button", "onclick", "$('#close-check-banner').click()", "data-view", "traking", 1, "btn", "show-view", "ms-2"]],
  template: function PaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Billing Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5)(8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7)(10, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9)(13, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13)(18, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15)(21, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17)(23, "select", 18)(24, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 22)(32, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 24)(35, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 26)(38, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17)(40, "select", 18)(41, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "District");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "District");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "District");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11)(50, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Create an account?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32)(55, "div", 29)(56, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Shipping Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Ship to a different address?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "textarea", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 36)(63, "div", 37)(64, "div", 38)(65, "table", 39)(66, "thead")(67, "tr")(68, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Producto");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Precio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Cantidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tbody")(75, "tr")(76, "td")(77, "div", 41)(78, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 44)(81, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Six pack de cervezas");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td")(84, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "$25.000");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td")(87, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr")(90, "td")(91, "div", 41)(92, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 44)(95, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Bebida gaseosa en latada sabor limonada");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td")(98, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "$4.5000");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td")(101, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr")(104, "td")(105, "div", 41)(106, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 44)(109, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Agua embotellada de manantial");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td")(112, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "$3.000");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td")(115, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "td")(119, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td")(121, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Agregar cup\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 54)(126, "div", 55)(127, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Your Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "ul", 56)(130, "li")(131, "a", 57)(132, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Product ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li")(137, "a", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Fresh Blackberry ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "x 02");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "$720.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li")(144, "a", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Fresh Tomatoes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "x 02");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "$720.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li")(151, "a", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Fresh Brocoli ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "x 02");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "$720.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "ul", 60)(158, "li")(159, "a", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Subtotal ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "$2160.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li")(164, "a", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Shipping ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Flat rate: $50.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li")(169, "a", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Total ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "$2210.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 61)(174, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "input", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "label", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Paypal ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "img", 65)(179, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Pay via PayPal; you can pay with your credit card if you don\u2019t have a PayPal account. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 67)(183, "a", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Pagar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 71)(188, "div", 72)(189, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "svg", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "circle", 75)(192, "path", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h5", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Pedido pagado exitosamente");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 78)(198, "button", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " Aceptar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "button", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Ver tu pedido ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map