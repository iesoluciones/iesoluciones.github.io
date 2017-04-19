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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGllbnRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXVCLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZDLHVCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHVCQUFtQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3JELDBDQUFzQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzVFLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pELDZDQUF5QywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ3JGLDBDQUFzQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzVFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsbURBQXVCLEVBQUM7SUFDOUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx5REFBMEIsRUFBQztDQUUxRCxDQUFBO0FBY0Q7SUFBQTtJQUE0QixDQUFDO0lBYjdCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHFCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUNoQztZQUNELFlBQVksRUFBRTtnQkFDVixtREFBdUI7Z0JBQ3ZCLHlEQUEwQjtnQkFDMUIsbURBQXVCO2FBQzFCO1lBQ0QsY0FBYztZQUNkLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDOUIsQ0FBQzs7cUJBQUE7SUFDMEIsb0JBQUM7QUFBRCxDQUFDLEFBQTdCLElBQTZCO0FBQWhCLHFCQUFhLGdCQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtSb3V0ZXMsIFJvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtMaXN0YWRvQ2xpZW50ZUNvbXBvbmVudH0gZnJvbSBcIi4vbGlzdGFkby9saXN0YWRvLmNsaWVudGUuY29tcG9uZW50XCI7XG5pbXBvcnQge0NsaWVudGVTZXJ2aWNlfSBmcm9tIFwiLi9jbGllbnRlLnNlcnZpY2VcIjtcbmltcG9ydCB7Rm9ybXVsYXJpb0NsaWVudGVDb21wb25lbnR9IGZyb20gXCIuL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jbGllbnRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDbGllbnRlRGV0YWxsZUNvbXBvbmVudH0gZnJvbSBcIi4vZGV0YWxsZS9jbGllbnRlLWRldGFsbGUuY29tcG9uZW50XCI7XG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7cGF0aDogJycsIGNvbXBvbmVudDogTGlzdGFkb0NsaWVudGVDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnY3JlYXRlJywgY29tcG9uZW50OiBGb3JtdWxhcmlvQ2xpZW50ZUNvbXBvbmVudH1cblxuXVxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBMaXN0YWRvQ2xpZW50ZUNvbXBvbmVudCxcbiAgICAgICAgRm9ybXVsYXJpb0NsaWVudGVDb21wb25lbnQsXG4gICAgICAgIENsaWVudGVEZXRhbGxlQ29tcG9uZW50XG4gICAgXSxcbiAgICAvL2V4cG9ydHM6IFtdLFxuICAgIHByb3ZpZGVyczogW0NsaWVudGVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDbGllbnRlTW9kdWxlIHt9Il19