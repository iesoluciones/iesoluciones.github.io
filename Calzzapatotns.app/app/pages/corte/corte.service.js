"use strict";
var core_1 = require("@angular/core");
var http_service_1 = require("../../custom-http/http-service");
/**
 * Created by iedeveloper on 23/03/17.
 */
var CorteService = (function () {
    function CorteService(http) {
        this.http = http;
    }
    CorteService.prototype.getSaldos = function (codigoCliente) {
        return this.http.get("saldosDetalleSoap/" + codigoCliente).map(function (response) { return response.json(); });
    };
    CorteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], CorteService);
    return CorteService;
}());
exports.CorteService = CorteService;
