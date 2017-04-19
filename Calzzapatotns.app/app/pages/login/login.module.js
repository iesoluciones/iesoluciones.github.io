"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var login_component_1 = require('./login.component');
var router_1 = require("@angular/router");
var modal_view_1 = require("./modal/modal-view");
var routes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'recuperar', component: modal_view_1.ModalViewComponent },
];
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [login_component_1.LoginComponent, modal_view_1.ModalViewComponent],
            exports: [login_component_1.LoginComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFDakQsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFHckQsMkJBQWlDLG9CQUFvQixDQUFDLENBQUE7QUFDdEQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO0lBQ3JDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsK0JBQWtCLEVBQUM7Q0FFckQsQ0FBQTtBQVNEO0lBQUE7SUFBMEIsQ0FBQztJQVIzQjtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFDWixxQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEM7WUFDRCxZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxFQUFDLCtCQUFrQixDQUFDO1lBQ2pELE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDNUIsQ0FBQzs7bUJBQUE7SUFDd0Isa0JBQUM7QUFBRCxDQUFDLEFBQTNCLElBQTJCO0FBQWQsbUJBQVcsY0FBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7Um91dGVzLCBSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7RGJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vbW9kZWwvZGIuc2VydmljZVwiO1xuaW1wb3J0IGFjdGl2aXR5SW5kaWNhdG9yTW9kdWxlID0gcmVxdWlyZShcInVpL2FjdGl2aXR5LWluZGljYXRvclwiKTtcbmltcG9ydCB7TW9kYWxWaWV3Q29tcG9uZW50fSBmcm9tIFwiLi9tb2RhbC9tb2RhbC12aWV3XCI7XG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7cGF0aDogJycsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnR9LFxuICAgIHtwYXRoOiAncmVjdXBlcmFyJywgY29tcG9uZW50OiBNb2RhbFZpZXdDb21wb25lbnR9LFxuXG5dXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbTG9naW5Db21wb25lbnQsTW9kYWxWaWV3Q29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbTG9naW5Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZHVsZSB7fSJdfQ==