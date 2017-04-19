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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ydGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ydGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUVqRCxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFDckQsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0M7O0dBRUc7QUFFSCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7Q0FFeEMsQ0FBQTtBQVNEO0lBQUE7SUFBNkIsQ0FBQztJQVI5QjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFDWixxQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEM7WUFDRCxZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDNUIsQ0FBQzs7c0JBQUE7SUFDMkIscUJBQUM7QUFBRCxDQUFDLEFBQTlCLElBQThCO0FBQWpCLHNCQUFjLGlCQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvcnRlQ29tcG9uZW50fSBmcm9tIFwiLi9jb3J0ZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcywgUm91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtTYWxkb0Rpc3BvbmlibGVDb21wb25lbnR9IGZyb20gXCIuL3NhbGRvLWRpc3BvbmlibGUvc2FsZG8tZGlzcG9uaWJsZS5jb21wb25lbnRcIjtcbi8qKlxuICogQ3JlYXRlZCBieSBpZWRldmVsb3BlciBvbiAxNS8wMi8xNy5cbiAqL1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7cGF0aDogJycsIGNvbXBvbmVudDogQ29ydGVDb21wb25lbnR9XG5cbl1cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtDb3J0ZUNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0NvcnRlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTWljdWVudGFNb2R1bGUge30iXX0=