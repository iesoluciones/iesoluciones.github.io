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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVudGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVudGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQscUNBQStCLHNCQUFzQixDQUFDLENBQUE7QUFDdEQscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBUWpFO0lBQW9DLGtDQUFNO0lBUXRDLHdCQUFvQixnQkFBa0MsRUFBVSxJQUFTLEVBQVUsY0FBNkI7UUFScEgsaUJBa0NDO1FBekJPLGlCQUFPLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBSztRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBRTVHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLEVBQUUsQ0FBQSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDO1lBQzNCLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDdkMsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hELEtBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQUFBLElBQUksQ0FBQSxDQUFDO29CQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFqQkQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxZQUFZLENBQUM7SUFDM0MsQ0FBQztJQWlCRCxtQ0FBVSxHQUFWLFVBQVcsR0FBRyxFQUFFLEVBQUU7UUFDZCxJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO2dCQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7YUFDM0I7U0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUMxRSwwREFBMEQ7SUFDOUQsQ0FBQztJQXRDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzs7c0JBQUE7SUFtQ0YscUJBQUM7QUFBRCxDQUFDLEFBbENELENBQW9DLGFBQU0sR0FrQ3pDO0FBbENZLHNCQUFjLGlCQWtDMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtWZW50YVNlcnZpY2V9IGZyb20gXCIuL3ZlbnRhLnNlcnZpY2VcIjtcblxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ2ZW50YVwiLFxuICAgIHByb3ZpZGVyczogW1ZlbnRhU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdmVudGEvdmVudGEuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvdmVudGEvdmVudGEuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFZlbnRhQ29tcG9uZW50IGV4dGVuZHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4OiBudW1iZXI7XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhci50aXRsZT1cIk1pcyBWZW50YXNcIjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTpQYWdlLCBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOkFjdGl2YXRlZFJvdXRlKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJXSEFUU1wiLCBcImFxdWkgYW5kYW1vc1wiKTtcbiAgICAgICAgaWYoYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMpe1xuICAgICAgICAgICAgYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYocGFyYW1zW1widGFiXCJdKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUQUJfUkVUT1JOQURPXCIsIEpTT04ucGFyc2UocGFyYW1zW1widGFiXCJdKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHBhcmFtc1tcInRhYlwiXTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFTF9UQUJfUkVUT1JOQURPXCIsIFwiTm8gaGF5IG5hZGEgYXVuLi4uXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmlld1RpY2tldCh0YWIsIGlkKSB7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBcInRhYlwiOiBKU09OLnN0cmluZ2lmeSh0YWIpLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogSlNPTi5zdHJpbmdpZnkoaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9ob21lL3ZlbnRhcy90aWNrZXQnXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG4gICAgICAgIC8vdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lL3ZlbnRhcy90aWNrZXRcIl0pO1xuICAgIH1cblxufSJdfQ==