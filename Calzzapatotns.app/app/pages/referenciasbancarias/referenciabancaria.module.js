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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZXJlbmNpYWJhbmNhcmlhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZmVyZW5jaWFiYW5jYXJpYS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF1QixlQUFlLENBQUMsQ0FBQTtBQUN2Qyx1QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx1QkFBbUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNyRCw2Q0FBMEMsZ0NBQWdDLENBQUMsQ0FBQTtBQUMzRSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDBEQUEyQixFQUFDO0NBRXJELENBQUE7QUFTRDtJQUFBO0lBQXVDLENBQUM7SUFSeEM7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7Z0JBQ1oscUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2FBQ2hDO1lBQ0QsWUFBWSxFQUFFLENBQUMsMERBQTJCLENBQUM7WUFDM0MsT0FBTyxFQUFFLENBQUMsMERBQTJCLENBQUM7U0FDekMsQ0FBQzs7Z0NBQUE7SUFDcUMsK0JBQUM7QUFBRCxDQUFDLEFBQXhDLElBQXdDO0FBQTNCLGdDQUF3QiwyQkFBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Um91dGVzLCBSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7UmVmZXJlbmNpYWJhbmNhcmlhQ29tcG9uZW50fSBmcm9tIFwiLi9yZWZlcmVuY2lhYmFuY2FyaWEuY29tcG9uZW50XCI7XG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7cGF0aDogJycsIGNvbXBvbmVudDogUmVmZXJlbmNpYWJhbmNhcmlhQ29tcG9uZW50fVxuXG5dXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbUmVmZXJlbmNpYWJhbmNhcmlhQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbUmVmZXJlbmNpYWJhbmNhcmlhQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmV0ZXJlbmNpYWJhbmNhcmlhTW9kdWxlIHt9Il19