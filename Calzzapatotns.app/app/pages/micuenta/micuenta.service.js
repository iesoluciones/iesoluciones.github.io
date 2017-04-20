"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http_service_1 = require("../../custom-http/http-service");
var MicuentaService = (function () {
    function MicuentaService(http) {
        this.http = http;
    }
    MicuentaService.prototype.geolocalizacion = function (codigo_cliente, dato) {
        return this.http.post("clientes/" + codigo_cliente + "/geolocalizacion", dato).map(function (response) { return response.json(); });
    };
    MicuentaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], MicuentaService);
    return MicuentaService;
}());
exports.MicuentaService = MicuentaService;
