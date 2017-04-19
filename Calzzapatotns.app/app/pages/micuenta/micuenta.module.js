"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var micuenta_component_1 = require('./micuenta.component');
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: micuenta_component_1.MicuentaComponent }
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
            declarations: [micuenta_component_1.MicuentaComponent],
            exports: [micuenta_component_1.MicuentaComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], MicuentaModule);
    return MicuentaModule;
}());
exports.MicuentaModule = MicuentaModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljdWVudGEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWljdWVudGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsbUNBQWdDLHNCQUFzQixDQUFDLENBQUE7QUFDdkQsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFDckQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBQztDQUUzQyxDQUFBO0FBU0Q7SUFBQTtJQUE2QixDQUFDO0lBUjlCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHFCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUNoQztZQUNELFlBQVksRUFBRSxDQUFDLHNDQUFpQixDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLHNDQUFpQixDQUFDO1NBQy9CLENBQUM7O3NCQUFBO0lBQzJCLHFCQUFDO0FBQUQsQ0FBQyxBQUE5QixJQUE4QjtBQUFqQixzQkFBYyxpQkFBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWljdWVudGFDb21wb25lbnR9IGZyb20gJy4vbWljdWVudGEuY29tcG9uZW50JztcbmltcG9ydCB7Um91dGVzLCBSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtwYXRoOiAnJywgY29tcG9uZW50OiBNaWN1ZW50YUNvbXBvbmVudH1cblxuXVxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW01pY3VlbnRhQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbTWljdWVudGFDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBNaWN1ZW50YU1vZHVsZSB7fSJdfQ==