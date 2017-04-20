"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http_service_1 = require("../../custom-http/http-service");
var ClienteService = (function () {
    function ClienteService(http) {
        this.http = http;
    }
    ClienteService.prototype.index = function () {
        return this.http.get("subclientes").map(function (response) { return response.json(); });
    };
    ClienteService.prototype.save = function (cliente) {
        return this.http.post('subclientes', cliente).map(function (response) { return response.json(); });
    };
    ClienteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], ClienteService);
    return ClienteService;
}());
exports.ClienteService = ClienteService;
