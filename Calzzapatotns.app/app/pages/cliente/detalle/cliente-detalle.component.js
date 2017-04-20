"use strict";
/**
 * Created by iedeveloper on 17/02/17.
 */
var core_1 = require("@angular/core");
var elementRegistryModule = require('nativescript-angular/element-registry');
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var phone = require("nativescript-phone");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var ClienteDetalleComponent = (function (_super) {
    __extends(ClienteDetalleComponent, _super);
    function ClienteDetalleComponent(page, activatedRoute) {
        var _this = this;
        _super.call(this);
        this.page = page;
        this.activatedRoute = activatedRoute;
        activatedRoute.queryParams.subscribe(function (params) {
            _this.detalle = JSON.parse(params["detalle"]);
            console.log(JSON.stringify(_this.detalle));
        });
    }
    ClienteDetalleComponent.prototype.ngOnInit = function () {
        this.page.actionBar.title = this.detalle.nombre + " " + this.detalle.paterno + " " + this.detalle.materno;
        this.page.backgroundColor = new color_1.Color("#EEEEEE");
    };
    ClienteDetalleComponent.prototype.call = function () {
        if (this.detalle.celular) {
            phone.dial(this.detalle.celular, true);
        }
    };
    ClienteDetalleComponent = __decorate([
        core_1.Component({
            selector: "detalle-cliente",
            providers: [],
            templateUrl: "pages/cliente/detalle/cliente-detalle.html",
            styleUrls: ["pages/cliente/detalle/cliente-detalle.css"]
        }), 
        __metadata('design:paramtypes', [page_1.Page, router_1.ActivatedRoute])
    ], ClienteDetalleComponent);
    return ClienteDetalleComponent;
}(core_1.OnInit));
exports.ClienteDetalleComponent = ClienteDetalleComponent;
