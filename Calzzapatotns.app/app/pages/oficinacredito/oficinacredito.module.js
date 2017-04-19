"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require("@angular/router");
var oficinacredito_component_1 = require("./oficinacredito.component");
var routes = [
    { path: '', component: oficinacredito_component_1.OficinacreditoComponent }
];
var OficinacreditoModule = (function () {
    function OficinacreditoModule() {
    }
    OficinacreditoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [oficinacredito_component_1.OficinacreditoComponent],
            exports: [oficinacredito_component_1.OficinacreditoComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], OficinacreditoModule);
    return OficinacreditoModule;
}());
exports.OficinacreditoModule = OficinacreditoModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZpY2luYWNyZWRpdG8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib2ZpY2luYWNyZWRpdG8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFDckQseUNBQXNDLDRCQUE0QixDQUFDLENBQUE7QUFDbkUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxrREFBdUIsRUFBQztDQUVqRCxDQUFBO0FBU0Q7SUFBQTtJQUFtQyxDQUFDO0lBUnBDO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHFCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUNoQztZQUNELFlBQVksRUFBRSxDQUFDLGtEQUF1QixDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxDQUFDLGtEQUF1QixDQUFDO1NBQ3JDLENBQUM7OzRCQUFBO0lBQ2lDLDJCQUFDO0FBQUQsQ0FBQyxBQUFwQyxJQUFvQztBQUF2Qiw0QkFBb0IsdUJBQUcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1JvdXRlcywgUm91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge09maWNpbmFjcmVkaXRvQ29tcG9uZW50fSBmcm9tIFwiLi9vZmljaW5hY3JlZGl0by5jb21wb25lbnRcIjtcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtwYXRoOiAnJywgY29tcG9uZW50OiBPZmljaW5hY3JlZGl0b0NvbXBvbmVudH1cblxuXVxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW09maWNpbmFjcmVkaXRvQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbT2ZpY2luYWNyZWRpdG9Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBPZmljaW5hY3JlZGl0b01vZHVsZSB7fSJdfQ==