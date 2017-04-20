"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var cliente_model_1 = require("../../model/cliente.model");
var venta_model_1 = require("../../model/venta.model");
var inicio_service_1 = require("./inicio.service");
var user_model_1 = require("../../model/user.model");
var moment = require("moment");
var permissions = require("nativescript-permissions");
var platform = require("platform");
moment.locale('es');
var InicioComponent = (function () {
    function InicioComponent(page, router, _clienteModel, _inicioService, _userModel, _ventaModel) {
        this.page = page;
        this.router = router;
        this._clienteModel = _clienteModel;
        this._inicioService = _inicioService;
        this._userModel = _userModel;
        this._ventaModel = _ventaModel;
        this.extenderSaldo = true;
        this.fecha = "";
        this.disponible = "0";
        this.pagoMinimo = "0";
        this.user = {};
        console.log("constructor");
    }
    InicioComponent.prototype.ngOnInit = function () {
        this.page.actionBar.title = "Inicio";
    };
    InicioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._clienteModel.fetch().then(function (usuario) {
            _this._inicioService.getClienteInfo(usuario.codigo)
                .subscribe(function (info) {
                _this.clienteSaldo = info;
                _this.disponible = info.disponible;
                _this.fecha = info.fecha;
                _this.pagoMinimo = info.pagoMinimo;
                console.log("info", JSON.stringify(_this.clienteSaldo));
            });
        });
        this._userModel.fetch().then(function (usuario) {
            if (usuario) {
                _this.user = usuario;
            }
        });
    };
    InicioComponent.prototype.onSaldoClicked = function () {
        var grid = this.page.getViewById("gridSaldo");
        this.extenderSaldo = !this.extenderSaldo;
        if (this.extenderSaldo == false) {
            grid.visibility = 'visible';
            grid.animate({
                opacity: 1,
                duration: 300
            });
        }
        if (this.extenderSaldo == true) {
            grid.animate({
                opacity: 0,
                duration: 200
            }).then(function (d) { grid.visibility = 'collapse'; });
        }
    };
    InicioComponent.prototype.redireccion = function (args) {
        this.router.navigate(["/home/" + args]);
    };
    InicioComponent.prototype.corte = function () {
        console.log("Tap corte");
        var navigationExtras = {
            queryParams: {
                "info": JSON.stringify(this.clienteSaldo)
            }
        };
        this.router.navigate(['/home/corte'], navigationExtras);
    };
    InicioComponent.prototype.oficinaCredito = function () {
        var _this = this;
        if (platform.isAndroid) {
            permissions.requestPermission(android.Manifest.permission.ACCESS_COARSE_LOCATION, "Necesitamos obtener tu ubicación GPS")
                .then(function () {
                console.log("Woo Hoo, I have the power!");
                _this.redireccion('oficinacredito');
            })
                .catch(function () {
                console.log("Uh oh, no permissions - plan B time!");
                console.log("FALLOOOOOOO");
            });
        }
        else {
            this.redireccion('oficinacredito');
        }
    };
    InicioComponent = __decorate([
        core_1.Component({
            selector: "inicio-inc",
            templateUrl: "pages/inicio/inicio.component.html",
            styleUrls: ["pages/inicio/inicio-common.css", "pages/inicio/inicio.css"],
            providers: [inicio_service_1.InicioService, { provide: core_1.LOCALE_ID, useValue: "es-MX" }]
        }), 
        __metadata('design:paramtypes', [page_1.Page, router_1.Router, cliente_model_1.ClienteModel, inicio_service_1.InicioService, user_model_1.UserModel, venta_model_1.VentaModel])
    ], InicioComponent);
    return InicioComponent;
}());
exports.InicioComponent = InicioComponent;
