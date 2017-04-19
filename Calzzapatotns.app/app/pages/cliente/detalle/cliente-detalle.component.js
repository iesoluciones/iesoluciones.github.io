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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50ZS1kZXRhbGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsaWVudGUtZGV0YWxsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0gscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELElBQVkscUJBQXFCLFdBQU0sdUNBQXVDLENBQUMsQ0FBQTtBQUMvRSx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxxQkFBbUIsU0FBUyxDQUFDLENBQUE7QUFDN0Isc0JBQW9CLE9BQU8sQ0FBQyxDQUFBO0FBRTVCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRTFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBUW5HO0lBQTZDLDJDQUFNO0lBVS9DLGlDQUFvQixJQUFTLEVBQVUsY0FBNkI7UUFWeEUsaUJBd0JDO1FBYk8saUJBQU8sQ0FBQztRQURRLFNBQUksR0FBSixJQUFJLENBQUs7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUVoRSxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFYRCwwQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDaEcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUMsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQVVELHNDQUFJLEdBQUo7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDO0lBQ0wsQ0FBQztJQTdCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsV0FBVyxFQUFFLDRDQUE0QztZQUN6RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQztTQUMzRCxDQUFDOzsrQkFBQTtJQTBCRiw4QkFBQztBQUFELENBQUMsQUF4QkQsQ0FBNkMsYUFBTSxHQXdCbEQ7QUF4QlksK0JBQXVCLDBCQXdCbkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBpZWRldmVsb3BlciBvbiAxNy8wMi8xNy5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGVsZW1lbnRSZWdpc3RyeU1vZHVsZSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7Q29sb3J9IGZyb20gXCJjb2xvclwiO1xuXG52YXIgcGhvbmUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBob25lXCIpO1xuXG5lbGVtZW50UmVnaXN0cnlNb2R1bGUucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJkZXRhbGxlLWNsaWVudGVcIixcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2NsaWVudGUvZGV0YWxsZS9jbGllbnRlLWRldGFsbGUuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvY2xpZW50ZS9kZXRhbGxlL2NsaWVudGUtZGV0YWxsZS5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDbGllbnRlRGV0YWxsZUNvbXBvbmVudCBleHRlbmRzIE9uSW5pdCB7XG4gICAgZGV0YWxsZTphbnk7XG5cbiAgICBwdWJsaWMgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXIudGl0bGU9dGhpcy5kZXRhbGxlLm5vbWJyZStcIiBcIit0aGlzLmRldGFsbGUucGF0ZXJubytcIiBcIit0aGlzLmRldGFsbGUubWF0ZXJubztcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRDb2xvcj1uZXcgQ29sb3IoXCIjRUVFRUVFXCIpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTpQYWdlLCBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOkFjdGl2YXRlZFJvdXRlKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmRldGFsbGUgPSBKU09OLnBhcnNlKHBhcmFtc1tcImRldGFsbGVcIl0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5kZXRhbGxlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhbGwoKSB7XG4gICAgICAgIGlmKHRoaXMuZGV0YWxsZS5jZWx1bGFyKXtcbiAgICAgICAgICAgcGhvbmUuZGlhbCh0aGlzLmRldGFsbGUuY2VsdWxhciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=