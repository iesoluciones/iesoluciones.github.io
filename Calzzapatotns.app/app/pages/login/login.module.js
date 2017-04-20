"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var login_component_1 = require('./login.component');
var router_1 = require("@angular/router");
var modal_view_1 = require("./modal/modal-view");
var routes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'recuperar', component: modal_view_1.ModalViewComponent },
];
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [login_component_1.LoginComponent, modal_view_1.ModalViewComponent],
            exports: [login_component_1.LoginComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
