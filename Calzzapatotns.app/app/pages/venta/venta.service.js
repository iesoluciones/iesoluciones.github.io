"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http_service_1 = require("../../custom-http/http-service");
var VentaService = (function () {
    function VentaService(http) {
        this.http = http;
    }
    VentaService.prototype.index = function () {
        return this.http.get("ventas").map(function (response) { return response.json(); });
    };
    VentaService.prototype.save = function (venta) {
        return this.http.post('ventas', venta).map(function (response) { return response.json(); });
    };
    VentaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], VentaService);
    return VentaService;
}());
exports.VentaService = VentaService;
