"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http_service_1 = require("../../custom-http/http-service");
var ReferenciabancariaService = (function () {
    function ReferenciabancariaService(http) {
        this.http = http;
    }
    ReferenciabancariaService.prototype.getReferenciasBancarias = function (codigoCliente) {
        return this.http.get("referenciasBancariasSoap/" + codigoCliente).map(function (response) { return response.json(); });
    };
    ReferenciabancariaService.prototype.getReferenciasBancariasGenericas = function (codigoCliente) {
        return this.http.get("referenciasBancariasGenericasSoap/" + codigoCliente).map(function (response) { return response.json(); });
    };
    ReferenciabancariaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], ReferenciabancariaService);
    return ReferenciabancariaService;
}());
exports.ReferenciabancariaService = ReferenciabancariaService;
