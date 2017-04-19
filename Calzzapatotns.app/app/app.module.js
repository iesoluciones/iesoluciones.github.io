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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFvQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBQ2pGLHFCQUF1QixlQUFlLENBQUMsQ0FBQTtBQUN2Qyx5QkFBaUMsK0JBQStCLENBQUMsQ0FBQTtBQUNqRSxzQkFBc0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNuRSxxQkFBcUMsMkJBQTJCLENBQUMsQ0FBQTtBQUNqRSx1QkFBdUMsNkJBQTZCLENBQUMsQ0FBQTtBQUVyRSw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUU3Qyw0QkFBNEMsZUFBZSxDQUFDLENBQUE7QUFDNUQsc0JBQWtDLGdCQUFnQixDQUFDLENBQUE7QUFDbkQsMkJBQXdCLG9CQUFvQixDQUFDLENBQUE7QUFDN0MsMkJBQXdCLG9CQUFvQixDQUFDLENBQUE7QUFDN0MsbUNBQStCLGtDQUFrQyxDQUFDLENBQUE7QUFDbEUsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFFdkMsNkJBQW1DLG1DQUFtQyxDQUFDLENBQUE7QUFDdkUsOEJBQTJCLHVCQUF1QixDQUFDLENBQUE7QUFDbkQsNEJBQXlCLHFCQUFxQixDQUFDLENBQUE7QUFDL0Msa0NBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsc0NBQWtDLCtCQUErQixDQUFDLENBQUE7QUFDbEUseUNBQXFDLGtEQUFrRCxDQUFDLENBQUE7QUFDeEYsMENBQTZCLCtDQUErQyxDQUFDLENBQUE7QUFDN0UsOEJBQTJCLDZCQUE2QixDQUFDLENBQUE7QUErQnpEO0lBQ0ksbUJBQVksTUFBa0I7SUFDOUIsQ0FBQztJQS9CTDtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCw2QkFBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO2dCQUN4QywyQkFBbUI7Z0JBQ25CLHFDQUFnQixDQUFDLE9BQU8sQ0FBQyxlQUFNLENBQUMsTUFBTSxDQUFDO2FBQzFDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO3FCQUNULG1DQUFxQjtnQkFDeEIsK0JBQXFCO2dCQUNyQixpREFBc0I7Z0JBQ3RCLDBDQUFjO2NBQ2pCO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixTQUFTLEVBQUU7Z0JBQ1Asc0JBQVM7Z0JBQ1Qsc0JBQVM7Z0JBQ1QsaUNBQWtCO2dCQUNsQiw0QkFBWTtnQkFDWixtQ0FBZTtnQkFDZiwyQ0FBbUI7Z0JBQ25CLHdCQUFVO2dCQUNWLDRCQUFZO2FBQ2Y7U0FDSixDQUFDOztpQkFBQTtJQUlGLGdCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSxpQkFBUyxZQUdyQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTSURFRFJBV0VSX0RJUkVDVElWRVN9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0SHR0cE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7cm91dGVzLCBuYXZpZ2F0YWJsZUNvbXBvbmVudHN9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtEYlNlcnZpY2V9IGZyb20gXCIuL21vZGVsL2RiLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlck1vZGVsfSBmcm9tIFwiLi9tb2RlbC91c2VyLm1vZGVsXCI7XG5pbXBvcnQge0N1c3RvbUh0dHBNb2R1bGV9IGZyb20gXCIuL2N1c3RvbS1odHRwL2N1c3RvbS1odHRwLm1vZHVsZVwiO1xuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuL3NoYXJlZC9jb25maWdcIjtcbmltcG9ydCBhY3Rpb25CYXJNb2R1bGUgPSByZXF1aXJlKFwidWkvYWN0aW9uLWJhclwiKTtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7Q2xpZW50ZU1vZGVsfSBmcm9tIFwiLi9tb2RlbC9jbGllbnRlLm1vZGVsXCI7XG5pbXBvcnQge1ZlbnRhTW9kZWx9IGZyb20gXCIuL21vZGVsL3ZlbnRhLm1vZGVsXCI7XG5pbXBvcnQge1RpcG9zTWVkaW9Nb2RlbH0gZnJvbSBcIi4vbW9kZWwvdGlwb3NfbWVkaW8ubW9kZWxcIjtcbmltcG9ydCB7Q2xpZW50ZXNNZWRpb3NNb2RlbH0gZnJvbSBcIi4vbW9kZWwvY2xpZW50ZXNfbWVkaW9zLm1vZGVsXCI7XG5pbXBvcnQge0Vycm9yRmVlZGJhY2tDb21wb25lbnR9IGZyb20gXCIuL3NoYXJlZC9lcnJvci1mZWVkYmFjay9lcnJvci1mZWVkYmFjay5jb21wb25lbnRcIjtcbmltcG9ydCB7RXF1YWxWYWxpZGF0b3J9IGZyb20gXCIuL3NoYXJlZC92YWxpZGF0b3JzL2VxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmVcIjtcbmltcG9ydCB7Q29ydGVTZXJ2aWNlfSBmcm9tIFwiLi9wYWdlcy9jb3J0ZS9jb3J0ZS5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIEN1c3RvbUh0dHBNb2R1bGUuZm9yUm9vdChDb25maWcuYXBpVXJsKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzLFxuICAgICAgICBTSURFRFJBV0VSX0RJUkVDVElWRVMsXG4gICAgICAgIEVycm9yRmVlZGJhY2tDb21wb25lbnQsXG4gICAgICAgIEVxdWFsVmFsaWRhdG9yXG4gICAgXSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBEYlNlcnZpY2UsXG4gICAgICAgIFVzZXJNb2RlbCxcbiAgICAgICAgTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBDbGllbnRlTW9kZWwsXG4gICAgICAgIFRpcG9zTWVkaW9Nb2RlbCxcbiAgICAgICAgQ2xpZW50ZXNNZWRpb3NNb2RlbCxcbiAgICAgICAgVmVudGFNb2RlbCxcbiAgICAgICAgQ29ydGVTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKGRiU2VydiA6IERiU2VydmljZSl7XG4gICAgfVxufVxuIl19