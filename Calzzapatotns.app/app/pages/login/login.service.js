"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http_service_1 = require("../../custom-http/http-service");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (user) {
        return this.http.login("login", { email: user.email, password: user.password.replace("\n\n", "") }).map(function (response) { return response.json(); });
    };
    LoginService.prototype.sincronizacion = function () {
        console.log("Entro servicio de sincronizacion");
        return this.http.get("sincronizacion", {}).map(function (response) { return response.json(); });
    };
    LoginService.prototype.recuperarPassword = function (dato) {
        console.log("recuperarPassword", JSON.stringify(dato));
        return this.http.login("recuperarcontrasena/" + dato.usuario, { email: dato.email, telefono: dato.celular }).map(function (response) { return response.json(); });
    };
    LoginService.prototype.cambiarPassword = function (dato) {
        return this.http.login("actualizarcontrasena/" + dato.cliente_id, dato.dato).map(function (response) { return response.json(); });
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
