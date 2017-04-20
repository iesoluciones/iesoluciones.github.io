"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var micuenta_component_1 = require('./micuenta.component');
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: micuenta_component_1.MicuentaComponent }
];
var MicuentaModule = (function () {
    function MicuentaModule() {
    }
    MicuentaModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [micuenta_component_1.MicuentaComponent],
            exports: [micuenta_component_1.MicuentaComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], MicuentaModule);
    return MicuentaModule;
}());
exports.MicuentaModule = MicuentaModule;
