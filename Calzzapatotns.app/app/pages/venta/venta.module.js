"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require("@angular/router");
var venta_service_1 = require("./venta.service");
var venta_component_1 = require("./venta.component");
var ticket_component_1 = require("./ticket/ticket.component");
var routes = [
    { path: '', component: venta_component_1.VentaComponent },
    { path: 'ticket', component: ticket_component_1.TicketComponent }
];
var VentaModule = (function () {
    function VentaModule() {
    }
    VentaModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                venta_component_1.VentaComponent,
                ticket_component_1.TicketComponent
            ],
            //exports: [],
            providers: [venta_service_1.VentaService]
        }), 
        __metadata('design:paramtypes', [])
    ], VentaModule);
    return VentaModule;
}());
exports.VentaModule = VentaModule;
