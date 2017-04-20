"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http_service_1 = require("../../custom-http/http-service");
var ValeService = (function () {
    function ValeService(http) {
        this.http = http;
    }
    ValeService.prototype.index = function (cliente_id) {
        return this.http.get("clientes/" + cliente_id + "/vales").map(function (response) { return response.json(); });
    };
    ValeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], ValeService);
    return ValeService;
}());
exports.ValeService = ValeService;
