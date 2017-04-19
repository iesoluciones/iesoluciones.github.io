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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ydGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29ydGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSxxQkFBbUIsU0FBUyxDQUFDLENBQUE7QUFDN0IscUNBQStCLHNCQUFzQixDQUFDLENBQUE7QUFRdEQ7SUFNSSx3QkFBb0IsSUFBUyxFQUFTLGNBQThCLEVBQVMsZ0JBQWtDLEVBQVUsTUFBYTtRQU4xSSxpQkFpQ0M7UUEzQnVCLFNBQUksR0FBSixJQUFJLENBQUs7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUp0SSxVQUFLLEdBQUMsRUFBRSxDQUFDO1FBQ1QsZUFBVSxHQUFDLEVBQUUsQ0FBQztRQUlWLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN2QyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFDLGVBQWUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELHdDQUFlLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3JDLFdBQVcsRUFBRTtnQkFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3BDO1NBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsd0JBQXdCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksSUFBSTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQXZDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQztZQUN0RCxXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7O3NCQUFBO0lBbUNGLHFCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDWSxzQkFBYyxpQkFpQzFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgaWVkZXZlbG9wZXIgb24gMTUvMDIvMTcuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIExPQ0FMRV9JRH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImNvcnRlXCIsXG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBMT0NBTEVfSUQsIHVzZVZhbHVlOiBcImVzLU1YXCIgfV0sXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvY29ydGUvY29ydGUuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvY29ydGUvY29ydGUuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29ydGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgaW5mbzogYW55O1xuICAgIHNhbGRvPVwiXCI7XG4gICAgcGFnb01pbmltbz1cIlwiO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6UGFnZSxwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91dGVyOlJvdXRlcil7XG4gICAgICAgIGFjdGl2YXRlZFJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbmZvID0gSlNPTi5wYXJzZShwYXJhbXNbXCJpbmZvXCJdKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5GT09PT089PlwiLEpTT04uc3RyaW5naWZ5KHRoaXMuaW5mbykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhci50aXRsZT1cIkNvcnRlIHkgU2FsZG9cIjtcbiAgICB9XG5cbiAgICByZWZlcmVuY2lhYmFuYygpe1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWUvcmVmZXJlbmNpYWJhbmNhcmlhXCJdKTtcbiAgICB9XG4gICAgc2FsZG9EaXNwb25pYmxlKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGFwIGNvcnRlXCIpO1xuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IEpTT04uc3RyaW5naWZ5KHRoaXMuaW5mbylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZS9zYWxkby1kaXNwb25pYmxlJ10sIG5hdmlnYXRpb25FeHRyYXMpO1xuICAgIH1cblxuICAgIHJlZGlyZWNjaW9uKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWUvXCIgKyBhcmdzXSk7XG4gICAgfVxufSJdfQ==