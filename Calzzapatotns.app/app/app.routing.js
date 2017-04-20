"use strict";
var login_component_1 = require("./pages/login/login.component");
var modal_view_1 = require("./pages/login/modal/modal-view");
var inicio_component_1 = require("./pages/inicio/inicio.component");
var micuenta_component_1 = require("./pages/micuenta/micuenta.component");
var date_picker_1 = require("./pages/modals/datepicker/date-picker");
var home_component_1 = require("./pages/home/home.component");
var mapa_component_1 = require("./pages/modals/mapa/mapa.component");
var listado_cliente_component_1 = require("./pages/cliente/listado/listado.cliente.component");
var formulario_cliente_component_1 = require("./pages/cliente/formulario/formulario.cliente.component");
var corte_component_1 = require("./pages/corte/corte.component");
var recuperar_1 = require("./pages/modals/recuperar/recuperar");
var cliente_detalle_component_1 = require("./pages/cliente/detalle/cliente-detalle.component");
var listado_vale_component_1 = require("./pages/vales/listado/listado.vale.component");
var venta_component_1 = require("./pages/venta/venta.component");
var ticket_component_1 = require("./pages/venta/ticket/ticket.component");
var oficinacredito_component_1 = require("./pages/oficinacredito/oficinacredito.component");
var referenciabancaria_component_1 = require("./pages/referenciasbancarias/referenciabancaria.component");
var saldo_disponible_component_1 = require("./pages/corte/saldo-disponible/saldo-disponible.component");
exports.routes = [
    { path: '', component: login_component_1.LoginComponent, useAsDefault: true },
    { path: 'recuperar-email', component: modal_view_1.ModalViewComponent },
    { path: 'home', component: home_component_1.HomeComponent,
        children: [
            { path: 'inicio', component: inicio_component_1.InicioComponent },
            { path: 'micuenta', component: micuenta_component_1.MicuentaComponent },
            { path: 'modal-datepicker', component: date_picker_1.DatepickerComponent },
            { path: 'modal-mapa', component: mapa_component_1.MapaComponent },
            { path: 'corte', component: corte_component_1.CorteComponent },
            { path: 'saldo-disponible', component: saldo_disponible_component_1.SaldoDisponibleComponent },
            { path: 'clientes', component: listado_cliente_component_1.ListadoClienteComponent },
            { path: 'cliente/create', component: formulario_cliente_component_1.FormularioClienteComponent },
            { path: 'modal-recuperar', component: recuperar_1.RecuperarComponent },
            { path: 'cliente/detalle', component: cliente_detalle_component_1.ClienteDetalleComponent },
            { path: 'vales', component: listado_vale_component_1.ListadoValeComponent },
            { path: 'oficinacredito', component: oficinacredito_component_1.OficinacreditoComponent },
            { path: 'referenciabancaria', component: referenciabancaria_component_1.ReferenciabancariaComponent },
            { path: 'ventas', component: venta_component_1.VentaComponent },
            { path: 'ventas/ticket', component: ticket_component_1.TicketComponent }
        ]
    }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    modal_view_1.ModalViewComponent,
    inicio_component_1.InicioComponent,
    micuenta_component_1.MicuentaComponent,
    date_picker_1.DatepickerComponent,
    home_component_1.HomeComponent,
    mapa_component_1.MapaComponent,
    corte_component_1.CorteComponent,
    saldo_disponible_component_1.SaldoDisponibleComponent,
    listado_cliente_component_1.ListadoClienteComponent,
    formulario_cliente_component_1.FormularioClienteComponent,
    recuperar_1.RecuperarComponent,
    cliente_detalle_component_1.ClienteDetalleComponent,
    listado_vale_component_1.ListadoValeComponent,
    oficinacredito_component_1.OficinacreditoComponent,
    referenciabancaria_component_1.ReferenciabancariaComponent,
    venta_component_1.VentaComponent,
    ticket_component_1.TicketComponent
];
