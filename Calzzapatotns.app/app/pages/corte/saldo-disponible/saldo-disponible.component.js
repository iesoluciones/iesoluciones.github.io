"use strict";
var core_1 = require("@angular/core");
var corte_service_1 = require("../corte.service");
var user_model_1 = require("../../../model/user.model");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
/**
 * Created by iedeveloper on 23/03/17.
 */
var SaldoDisponibleComponent = (function () {
    function SaldoDisponibleComponent(page, activatedRoute) {
        var _this = this;
        this.page = page;
        this.activatedRoute = activatedRoute;
        this.ultimaActualizacion = "";
        this.limiteCredito = "0";
        this.saldo = "0";
        this.creditoDisponible = "0";
        this.estatus = "";
        activatedRoute.queryParams.subscribe(function (params) {
            _this.saldos = JSON.parse(params["info"]);
            _this.ultimaActualizacion = _this.saldos.fecha;
            _this.limiteCredito = _this.saldos.limite;
            _this.creditoDisponible = _this.saldos.disponible;
            _this.saldo = _this.saldos.saldo;
            console.log("INFOOOOO=>", JSON.stringify(_this.saldos));
        });
    }
    SaldoDisponibleComponent.prototype.ngOnInit = function () {
        console.log("entra el  Saldo Disponible");
        this.page.actionBar.title = "Saldo Disponible";
    };
    SaldoDisponibleComponent.prototype.ngAfterViewInit = function () {
    };
    SaldoDisponibleComponent = __decorate([
        core_1.Component({
            selector: "saldoDisponible",
            providers: [corte_service_1.CorteService, user_model_1.UserModel],
            templateUrl: "pages/corte/saldo-disponible/saldo-disponible.html",
            styleUrls: ["pages/corte/saldo-disponible/saldo-disponible.css"]
        }), 
        __metadata('design:paramtypes', [page_1.Page, router_1.ActivatedRoute])
    ], SaldoDisponibleComponent);
    return SaldoDisponibleComponent;
}());
exports.SaldoDisponibleComponent = SaldoDisponibleComponent;
