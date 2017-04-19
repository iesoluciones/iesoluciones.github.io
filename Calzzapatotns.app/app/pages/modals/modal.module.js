"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require("@angular/router");
var date_picker_1 = require("./datepicker/date-picker");
var routes = [
    { path: 'datepicker', component: date_picker_1.DatepickerComponent },
];
var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [date_picker_1.DatepickerComponent],
            exports: [],
        }), 
        __metadata('design:paramtypes', [])
    ], ModalModule);
    return ModalModule;
}());
exports.ModalModule = ModalModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFFckQsNEJBQWtDLDBCQUEwQixDQUFDLENBQUE7QUFDN0QsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxpQ0FBbUIsRUFBQztDQUV2RCxDQUFBO0FBU0Q7SUFBQTtJQUEwQixDQUFDO0lBUjNCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHFCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUNoQztZQUNELFlBQVksRUFBRSxDQUFDLGlDQUFtQixDQUFDO1lBQ25DLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQzs7bUJBQUE7SUFDd0Isa0JBQUM7QUFBRCxDQUFDLEFBQTNCLElBQTJCO0FBQWQsbUJBQVcsY0FBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Um91dGVzLCBSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBhY3Rpdml0eUluZGljYXRvck1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9hY3Rpdml0eS1pbmRpY2F0b3JcIik7XG5pbXBvcnQge0RhdGVwaWNrZXJDb21wb25lbnR9IGZyb20gXCIuL2RhdGVwaWNrZXIvZGF0ZS1waWNrZXJcIjtcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtwYXRoOiAnZGF0ZXBpY2tlcicsIGNvbXBvbmVudDogRGF0ZXBpY2tlckNvbXBvbmVudH0sXG5cbl1cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtEYXRlcGlja2VyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxNb2R1bGUge30iXX0=