"use strict";
var http_service_1 = require("../../custom-http/http-service");
var core_1 = require("@angular/core");
/**
 * Created by iedeveloper on 16/02/17.
 */
var InicioService = (function () {
    function InicioService(http) {
        this.http = http;
    }
    InicioService.prototype.getClienteInfo = function (codigoCliente) {
        console.log("Entra ela peticion tempranera");
        return this.http.get("saldosDetalleSoap/" + codigoCliente).map(function (response) { return response.json(); });
    };
    InicioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], InicioService);
    return InicioService;
}());
exports.InicioService = InicioService;
