"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http_service_1 = require("../../custom-http/http-service");
var OficinacreditoService = (function () {
    function OficinacreditoService(http) {
        this.http = http;
    }
    OficinacreditoService.prototype.getTiendas = function (datos) {
        return this.http.post("oficinasCredito", datos).map(function (response) { return response.json(); });
    };
    OficinacreditoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], OficinacreditoService);
    return OficinacreditoService;
}());
exports.OficinacreditoService = OficinacreditoService;
