"use strict";
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var http_service_1 = require('./http-service');
var router_1 = require("@angular/router");
var CustomHttpModule = (function () {
    function CustomHttpModule(parentModule) {
        if (parentModule) {
            throw new Error('CustomHttpModule is already loaded. Import it in the AppModule only');
        }
    }
    CustomHttpModule.forRoot = function (url) {
        return {
            ngModule: CustomHttpModule,
            providers: [
                {
                    provide: http_service_1.HttpService,
                    useFactory: function (xhrBackend, requestOptions, router) {
                        return new http_service_1.HttpService(xhrBackend, requestOptions, router, url);
                    },
                    deps: [http_1.XHRBackend, http_1.BaseRequestOptions, router_1.Router],
                }
            ]
        };
    };
    CustomHttpModule = __decorate([
        core_1.NgModule({
            imports: [],
            providers: [
                http_1.XHRBackend,
                http_1.BaseRequestOptions
            ],
            exports: []
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [CustomHttpModule])
    ], CustomHttpModule);
    return CustomHttpModule;
}());
exports.CustomHttpModule = CustomHttpModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWh0dHAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VzdG9tLWh0dHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBOEUsZUFBZSxDQUFDLENBQUE7QUFDOUYscUJBQW1ELGVBQWUsQ0FBQyxDQUFBO0FBQ25FLDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBV3ZDO0lBQ0ksMEJBQW9DLFlBQThCO1FBQzlELEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLElBQUksS0FBSyxDQUNYLHFFQUFxRSxDQUFDLENBQUM7UUFDL0UsQ0FBQztJQUNMLENBQUM7SUFFTSx3QkFBTyxHQUFkLFVBQWUsR0FBWTtRQUN2QixNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDUDtvQkFDSSxPQUFPLEVBQUUsMEJBQVc7b0JBQ3BCLFVBQVUsRUFBRSxVQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTTt3QkFDM0MsTUFBTSxDQUFDLElBQUksMEJBQVcsQ0FBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDcEUsQ0FBQztvQkFDRCxJQUFJLEVBQUUsQ0FBQyxpQkFBVSxFQUFFLHlCQUFrQixFQUFFLGVBQU0sQ0FBQztpQkFDakQ7YUFDSjtTQUNKLENBQUM7SUFDTixDQUFDO0lBN0JMO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLEVBQUU7WUFDWCxTQUFTLEVBQUU7Z0JBQ1AsaUJBQVU7Z0JBQ1YseUJBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFLEVBQUU7U0FDZCxDQUFDO21CQUVlLGVBQVEsRUFBRTttQkFBRSxlQUFRLEVBQUU7O3dCQUZyQztJQXdCRix1QkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2Qlksd0JBQWdCLG1CQXVCNUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgTW9kdWxlV2l0aFByb3ZpZGVycywgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZVJlcXVlc3RPcHRpb25zLCBYSFJCYWNrZW5kLCBIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSAnLi9odHRwLXNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBYSFJCYWNrZW5kLFxuICAgICAgICBCYXNlUmVxdWVzdE9wdGlvbnNcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUh0dHBNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ3VzdG9tSHR0cE1vZHVsZSkge1xuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0N1c3RvbUh0dHBNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBmb3JSb290KHVybD86IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEN1c3RvbUh0dHBNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IEh0dHBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiAoeGhyQmFja2VuZCwgcmVxdWVzdE9wdGlvbnMsIHJvdXRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBIdHRwU2VydmljZSh4aHJCYWNrZW5kLCByZXF1ZXN0T3B0aW9ucywgcm91dGVyLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbWEhSQmFja2VuZCwgQmFzZVJlcXVlc3RPcHRpb25zLCBSb3V0ZXJdLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG5cbn1cbiJdfQ==