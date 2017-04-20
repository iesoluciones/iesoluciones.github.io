"use strict";
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var forms_2 = require("@angular/forms");
var db_service_1 = require("./model/db.service");
var user_model_1 = require("./model/user.model");
var custom_http_module_1 = require("./custom-http/custom-http.module");
var config_1 = require("./shared/config");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var cliente_model_1 = require("./model/cliente.model");
var venta_model_1 = require("./model/venta.model");
var tipos_medio_model_1 = require("./model/tipos_medio.model");
var clientes_medios_model_1 = require("./model/clientes_medios.model");
var error_feedback_component_1 = require("./shared/error-feedback/error-feedback.component");
var equal_validator_directive_1 = require("./shared/validators/equal-validator.directive");
var corte_service_1 = require("./pages/corte/corte.service");
var AppModule = (function () {
    function AppModule(dbServ) {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
                forms_2.ReactiveFormsModule,
                custom_http_module_1.CustomHttpModule.forRoot(config_1.Config.apiUrl)
            ],
            declarations: [
                app_component_1.AppComponent
            ].concat(app_routing_1.navigatableComponents, [
                angular_1.SIDEDRAWER_DIRECTIVES,
                error_feedback_component_1.ErrorFeedbackComponent,
                equal_validator_directive_1.EqualValidator
            ]),
            bootstrap: [app_component_1.AppComponent],
            providers: [
                db_service_1.DbService,
                user_model_1.UserModel,
                modal_dialog_1.ModalDialogService,
                cliente_model_1.ClienteModel,
                tipos_medio_model_1.TiposMedioModel,
                clientes_medios_model_1.ClientesMediosModel,
                venta_model_1.VentaModel,
                corte_service_1.CorteService
            ]
        }), 
        __metadata('design:paramtypes', [db_service_1.DbService])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
