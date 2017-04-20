"use strict";
var corte_component_1 = require("./corte.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
/**
 * Created by iedeveloper on 15/02/17.
 */
var routes = [
    { path: '', component: corte_component_1.CorteComponent }
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
            declarations: [corte_component_1.CorteComponent],
            exports: [corte_component_1.CorteComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], MicuentaModule);
    return MicuentaModule;
}());
exports.MicuentaModule = MicuentaModule;
