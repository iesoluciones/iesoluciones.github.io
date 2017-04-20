"use strict";
/**
 * Created by iedeveloper on 17/02/17.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
var page_1 = require("ui/page");
var color_1 = require("color");
var venta_service_1 = require("../venta.service");
var application = require("application");
var application_1 = require("application");
var platform_1 = require("platform");
//elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);
var TicketComponent = (function (_super) {
    __extends(TicketComponent, _super);
    function TicketComponent(page, router, routerExtensions, activatedRoute) {
        var _this = this;
        _super.call(this);
        this.page = page;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        activatedRoute.queryParams.subscribe(function (params) {
            _this.current_tab = JSON.parse(params["tab"]);
            _this.current_id = JSON.parse(params["id"]);
            console.log("RECEIVED_TAB", JSON.stringify(_this.current_tab));
        });
    }
    TicketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page.actionBar.title = "Ticket de Compra";
        this.page.backgroundColor = new color_1.Color("#EEEEEE");
        if (platform_1.isAndroid) {
            application.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (data) {
                //if (this.router.isActive("/home/ventas", false)) { data.cancel = true; // prevents default back button behavior }
                data.cancel = true; // prevents default back button behavior
                //this.routerExtensions.navigate(['/home/ventas']);
                console.log("BACK_PRESED", JSON.stringify(_this.current_tab));
                var navigationExtras = {
                    queryParams: {
                        "tab": JSON.stringify(_this.current_tab)
                    }
                };
                _this.routerExtensions.navigate(['/home/ventas'], navigationExtras);
            });
        }
    };
    TicketComponent = __decorate([
        core_1.Component({
            selector: "ticket",
            providers: [venta_service_1.VentaService],
            templateUrl: "pages/venta/ticket/ticket.html",
            styleUrls: ["pages/venta/ticket/ticket.css"]
        }), 
        __metadata('design:paramtypes', [page_1.Page, router_1.Router, nativescript_angular_1.RouterExtensions, router_1.ActivatedRoute])
    ], TicketComponent);
    return TicketComponent;
}(core_1.OnInit));
exports.TicketComponent = TicketComponent;
