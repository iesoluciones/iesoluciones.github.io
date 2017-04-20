"use strict";
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var page_1 = require("ui/page");
var venta_service_1 = require("./venta.service");
var router_1 = require("@angular/router");
var VentaComponent = (function (_super) {
    __extends(VentaComponent, _super);
    function VentaComponent(routerExtensions, page, activatedRoute) {
        var _this = this;
        _super.call(this);
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.activatedRoute = activatedRoute;
        console.log("WHATS", "aqui andamos");
        if (activatedRoute.queryParams) {
            activatedRoute.queryParams.subscribe(function (params) {
                if (params["tab"]) {
                    console.log("TAB_RETORNADO", JSON.parse(params["tab"]));
                    _this.selectedIndex = params["tab"];
                }
                else {
                    console.log("EL_TAB_RETORNADO", "No hay nada aun...");
                }
            });
        }
    }
    VentaComponent.prototype.ngOnInit = function () {
        this.page.actionBar.title = "Mis Ventas";
    };
    VentaComponent.prototype.viewTicket = function (tab, id) {
        var navigationExtras = {
            queryParams: {
                "tab": JSON.stringify(tab),
                "id": JSON.stringify(id)
            }
        };
        this.routerExtensions.navigate(['/home/ventas/ticket'], navigationExtras);
        //this.routerExtensions.navigate(["/home/ventas/ticket"]);
    };
    VentaComponent = __decorate([
        core_1.Component({
            selector: "venta",
            providers: [venta_service_1.VentaService],
            templateUrl: "pages/venta/venta.html",
            styleUrls: ["pages/venta/venta.css"]
        }), 
        __metadata('design:paramtypes', [nativescript_angular_1.RouterExtensions, page_1.Page, router_1.ActivatedRoute])
    ], VentaComponent);
    return VentaComponent;
}(core_1.OnInit));
exports.VentaComponent = VentaComponent;
