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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlja2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpY2tldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0gscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBRWhELHVCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pFLHFDQUErQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ3RELHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUM3QixzQkFBb0IsT0FBTyxDQUFDLENBQUE7QUFDNUIsOEJBQTJCLGtCQUFrQixDQUFDLENBQUE7QUFFOUMsSUFBWSxXQUFXLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFDM0MsNEJBQXdFLGFBQWEsQ0FBQyxDQUFBO0FBQ3RGLHlCQUEwQixVQUFVLENBQUMsQ0FBQTtBQUVyQyxxR0FBcUc7QUFRckc7SUFBcUMsbUNBQU07SUEwQnZDLHlCQUFvQixJQUFTLEVBQVUsTUFBYSxFQUFVLGdCQUFrQyxFQUFVLGNBQTZCO1FBMUIzSSxpQkFxQ0M7UUFWTyxpQkFBTyxDQUFDO1FBRFEsU0FBSSxHQUFKLElBQUksQ0FBSztRQUFVLFdBQU0sR0FBTixNQUFNLENBQU87UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFHbkksY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3ZDLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3QyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUE5QkQsa0NBQVEsR0FBUjtRQUFBLGlCQW1CQztRQWxCRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUMsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUMsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFL0MsRUFBRSxDQUFDLENBQUMsb0JBQVMsQ0FBQyxDQUFDLENBQUM7WUFDWixXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyx3QkFBd0IsRUFBRSxVQUFDLElBQXlDO2dCQUMxRyxtSEFBbUg7Z0JBRW5ILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsd0NBQXdDO2dCQUM1RCxtREFBbUQ7Z0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELElBQUksZ0JBQWdCLEdBQXFCO29CQUNyQyxXQUFXLEVBQUU7d0JBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQztxQkFDMUM7aUJBQ0osQ0FBQztnQkFDRixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUN2RSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBL0JMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUMvQyxDQUFDOzt1QkFBQTtJQXVDRixzQkFBQztBQUFELENBQUMsQUFyQ0QsQ0FBcUMsYUFBTSxHQXFDMUM7QUFyQ1ksdUJBQWUsa0JBcUMzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGllZGV2ZWxvcGVyIG9uIDE3LzAyLzE3LlxuICovXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgZWxlbWVudFJlZ2lzdHJ5TW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtDb2xvcn0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQge1ZlbnRhU2VydmljZX0gZnJvbSBcIi4uL3ZlbnRhLnNlcnZpY2VcIjtcblxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcblxuLy9lbGVtZW50UmVnaXN0cnlNb2R1bGUucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0aWNrZXRcIixcbiAgICBwcm92aWRlcnM6IFtWZW50YVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3ZlbnRhL3RpY2tldC90aWNrZXQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvdmVudGEvdGlja2V0L3RpY2tldC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUaWNrZXRDb21wb25lbnQgZXh0ZW5kcyBPbkluaXQge1xuXG4gICAgY3VycmVudF90YWI6YW55O1xuICAgIGN1cnJlbnRfaWQ6YW55O1xuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXIudGl0bGU9XCJUaWNrZXQgZGUgQ29tcHJhXCI7XG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kQ29sb3I9bmV3IENvbG9yKFwiI0VFRUVFRVwiKTtcblxuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChkYXRhOiBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vaWYgKHRoaXMucm91dGVyLmlzQWN0aXZlKFwiL2hvbWUvdmVudGFzXCIsIGZhbHNlKSkgeyBkYXRhLmNhbmNlbCA9IHRydWU7IC8vIHByZXZlbnRzIGRlZmF1bHQgYmFjayBidXR0b24gYmVoYXZpb3IgfVxuXG4gICAgICAgICAgICAgICAgZGF0YS5jYW5jZWwgPSB0cnVlOyAvLyBwcmV2ZW50cyBkZWZhdWx0IGJhY2sgYnV0dG9uIGJlaGF2aW9yXG4gICAgICAgICAgICAgICAgLy90aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaG9tZS92ZW50YXMnXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCQUNLX1BSRVNFRFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRfdGFiKSk7XG4gICAgICAgICAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRhYlwiOiBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRfdGFiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaG9tZS92ZW50YXMnXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTpQYWdlLCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTpBY3RpdmF0ZWRSb3V0ZSl7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfdGFiID0gSlNPTi5wYXJzZShwYXJhbXNbXCJ0YWJcIl0pO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50X2lkID0gSlNPTi5wYXJzZShwYXJhbXNbXCJpZFwiXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFQ0VJVkVEX1RBQlwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRfdGFiKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59Il19