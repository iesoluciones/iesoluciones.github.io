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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2YWxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXVCLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZDLHVCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHVCQUFtQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3JELDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLHVDQUFtQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3RFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUM7Q0FFOUMsQ0FBQTtBQVlEO0lBQUE7SUFBeUIsQ0FBQztJQVgxQjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFDWixxQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEM7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNkNBQW9CO2FBQ3ZCO1lBQ0QsY0FBYztZQUNkLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FDM0IsQ0FBQzs7a0JBQUE7SUFDdUIsaUJBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsa0JBQVUsYUFBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Um91dGVzLCBSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VmFsZVNlcnZpY2V9IGZyb20gXCIuL3ZhbGUuc2VydmljZVwiO1xuaW1wb3J0IHtMaXN0YWRvVmFsZUNvbXBvbmVudH0gZnJvbSBcIi4vbGlzdGFkby9saXN0YWRvLnZhbGUuY29tcG9uZW50XCI7XG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7cGF0aDogJycsIGNvbXBvbmVudDogTGlzdGFkb1ZhbGVDb21wb25lbnR9XG5cbl1cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTGlzdGFkb1ZhbGVDb21wb25lbnRcbiAgICBdLFxuICAgIC8vZXhwb3J0czogW10sXG4gICAgcHJvdmlkZXJzOiBbVmFsZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFZhbGVNb2R1bGUge30iXX0=