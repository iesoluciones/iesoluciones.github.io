"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require("@angular/router");
var oficinacredito_component_1 = require("./oficinacredito.component");
var routes = [
    { path: '', component: oficinacredito_component_1.OficinacreditoComponent }
];
var OficinacreditoModule = (function () {
    function OficinacreditoModule() {
    }
    OficinacreditoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [oficinacredito_component_1.OficinacreditoComponent],
            exports: [oficinacredito_component_1.OficinacreditoComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], OficinacreditoModule);
    return OficinacreditoModule;
}());
exports.OficinacreditoModule = OficinacreditoModule;
