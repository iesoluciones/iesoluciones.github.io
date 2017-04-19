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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFDckQsOEJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFDakQsaUNBQStCLDJCQUEyQixDQUFDLENBQUE7QUFFM0QsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO0lBQ3JDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztDQUMvQyxDQUFBO0FBY0Q7SUFBQTtJQUEwQixDQUFDO0lBWjNCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHFCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUNoQztZQUNELFlBQVksRUFBRTtnQkFDVixnQ0FBYztnQkFDZCxrQ0FBZTthQUNsQjtZQUNELGNBQWM7WUFDZCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzVCLENBQUM7O21CQUFBO0lBQ3dCLGtCQUFDO0FBQUQsQ0FBQyxBQUEzQixJQUEyQjtBQUFkLG1CQUFXLGNBQUcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1JvdXRlcywgUm91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1ZlbnRhU2VydmljZX0gZnJvbSBcIi4vdmVudGEuc2VydmljZVwiO1xuaW1wb3J0IHtWZW50YUNvbXBvbmVudH0gZnJvbSBcIi4vdmVudGEuY29tcG9uZW50XCI7XG5pbXBvcnQge1RpY2tldENvbXBvbmVudH0gIGZyb20gXCIuL3RpY2tldC90aWNrZXQuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtwYXRoOiAnJywgY29tcG9uZW50OiBWZW50YUNvbXBvbmVudH0sXG4gICAge3BhdGg6ICd0aWNrZXQnLCBjb21wb25lbnQ6IFRpY2tldENvbXBvbmVudH1cbl1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBWZW50YUNvbXBvbmVudCxcbiAgICAgICAgVGlja2V0Q29tcG9uZW50XG4gICAgXSxcbiAgICAvL2V4cG9ydHM6IFtdLFxuICAgIHByb3ZpZGVyczogW1ZlbnRhU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVmVudGFNb2R1bGUge30iXX0=