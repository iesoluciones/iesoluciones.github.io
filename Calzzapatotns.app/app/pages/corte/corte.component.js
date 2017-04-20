"use strict";
/**
 * Created by iedeveloper on 15/02/17.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var nativescript_angular_1 = require("nativescript-angular");
var CorteComponent = (function () {
    function CorteComponent(page, activatedRoute, routerExtensions, router) {
        var _this = this;
        this.page = page;
        this.activatedRoute = activatedRoute;
        this.routerExtensions = routerExtensions;
        this.router = router;
        this.saldo = "";
        this.pagoMinimo = "";
        activatedRoute.queryParams.subscribe(function (params) {
            _this.info = JSON.parse(params["info"]);
            console.log("INFOOOOO=>", JSON.stringify(_this.info));
        });
    }
    CorteComponent.prototype.ngOnInit = function () {
        this.page.actionBar.title = "Corte y Saldo";
    };
    CorteComponent.prototype.referenciabanc = function () {
        this.routerExtensions.navigate(["/home/referenciabancaria"]);
    };
    CorteComponent.prototype.saldoDisponible = function () {
        console.log("Tap corte");
        var navigationExtras = {
            queryParams: {
                "info": JSON.stringify(this.info)
            }
        };
        this.router.navigate(['/home/saldo-disponible'], navigationExtras);
    };
    CorteComponent.prototype.redireccion = function (args) {
        this.router.navigate(["/home/" + args]);
    };
    CorteComponent = __decorate([
        core_1.Component({
            selector: "corte",
            providers: [{ provide: core_1.LOCALE_ID, useValue: "es-MX" }],
            templateUrl: "pages/corte/corte.html",
            styleUrls: ["pages/corte/corte.css"]
        }), 
        __metadata('design:paramtypes', [page_1.Page, router_1.ActivatedRoute, nativescript_angular_1.RouterExtensions, router_1.Router])
    ], CorteComponent);
    return CorteComponent;
}());
exports.CorteComponent = CorteComponent;
