"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require("@angular/router");
var vale_service_1 = require("./vale.service");
var listado_vale_component_1 = require("./listado/listado.vale.component");
var routes = [
    { path: '', component: listado_vale_component_1.ListadoValeComponent }
];
var ValeModule = (function () {
    function ValeModule() {
    }
    ValeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                listado_vale_component_1.ListadoValeComponent
            ],
            //exports: [],
            providers: [vale_service_1.ValeService]
        }), 
        __metadata('design:paramtypes', [])
    ], ValeModule);
    return ValeModule;
}());
exports.ValeModule = ValeModule;
