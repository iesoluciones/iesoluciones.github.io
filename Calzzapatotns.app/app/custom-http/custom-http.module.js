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
