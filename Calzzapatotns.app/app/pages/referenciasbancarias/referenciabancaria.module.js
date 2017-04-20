"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require("@angular/router");
var referenciabancaria_component_1 = require("./referenciabancaria.component");
var routes = [
    { path: '', component: referenciabancaria_component_1.ReferenciabancariaComponent }
];
var ReterenciabancariaModule = (function () {
    function ReterenciabancariaModule() {
    }
    ReterenciabancariaModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [referenciabancaria_component_1.ReferenciabancariaComponent],
            exports: [referenciabancaria_component_1.ReferenciabancariaComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], ReterenciabancariaModule);
    return ReterenciabancariaModule;
}());
exports.ReterenciabancariaModule = ReterenciabancariaModule;
