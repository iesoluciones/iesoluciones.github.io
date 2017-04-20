"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require("@angular/router");
var listado_cliente_component_1 = require("./listado/listado.cliente.component");
var cliente_service_1 = require("./cliente.service");
var formulario_cliente_component_1 = require("./formulario/formulario.cliente.component");
var cliente_detalle_component_1 = require("./detalle/cliente-detalle.component");
var routes = [
    { path: '', component: listado_cliente_component_1.ListadoClienteComponent },
    { path: 'create', component: formulario_cliente_component_1.FormularioClienteComponent }
];
var ClienteModule = (function () {
    function ClienteModule() {
    }
    ClienteModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [
                listado_cliente_component_1.ListadoClienteComponent,
                formulario_cliente_component_1.FormularioClienteComponent,
                cliente_detalle_component_1.ClienteDetalleComponent
            ],
            //exports: [],
            providers: [cliente_service_1.ClienteService]
        }), 
        __metadata('design:paramtypes', [])
    ], ClienteModule);
    return ClienteModule;
}());
exports.ClienteModule = ClienteModule;
