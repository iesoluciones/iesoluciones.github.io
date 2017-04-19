"use strict";
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var page_1 = require("ui/page");
var cliente_service_1 = require("../cliente.service");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var ListadoClienteComponent = (function () {
    function ListadoClienteComponent(routerExtensions, page, _clienteService) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this._clienteService = _clienteService;
        this.listLoaded = false;
        this._clienteService.index().subscribe(function (clientes) {
            _this.clientes = clientes.data;
            _this.listLoaded = true;
        });
    }
    ListadoClienteComponent.prototype.ngOnInit = function () {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Mis Clientes";
    };
    ListadoClienteComponent.prototype.nuevo = function () {
        this.routerExtensions.navigate(["/home/cliente/create"]);
    };
    ListadoClienteComponent.prototype.detalle = function (item) {
        var navigationExtras = {
            queryParams: {
                "detalle": JSON.stringify(item)
            }
        };
        this.routerExtensions.navigate(['/home/cliente/detalle'], navigationExtras);
    };
    ListadoClienteComponent = __decorate([
        core_1.Component({
            selector: "my-app-clientes",
            providers: [cliente_service_1.ClienteService],
            templateUrl: "pages/cliente/listado/listado-cliente.html",
            styleUrls: ["pages/cliente/css/cliente.css"]
        }), 
        __metadata('design:paramtypes', [nativescript_angular_1.RouterExtensions, page_1.Page, cliente_service_1.ClienteService])
    ], ListadoClienteComponent);
    return ListadoClienteComponent;
}());
exports.ListadoClienteComponent = ListadoClienteComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGFkby5jbGllbnRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3RhZG8uY2xpZW50ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUN0RCxxQkFBbUIsU0FBUyxDQUFDLENBQUE7QUFDN0IsZ0NBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFFbEQsaUNBQWdDLHVDQUF1QyxDQUFDLENBQUE7QUFFeEUsa0NBQWUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0FBUS9FO0lBR0ksaUNBQW9CLGdCQUFrQyxFQUFVLElBQVUsRUFBVSxlQUErQjtRQUh2SCxpQkEwQkM7UUF2QnVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBRG5ILGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFZixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDM0MsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDSSxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsdUNBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELHlDQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1IsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDckMsV0FBVyxFQUFFO2dCQUNULFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUNsQztTQUNKLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsdUJBQXVCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUEvQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzNCLFdBQVcsRUFBRSw0Q0FBNEM7WUFDekQsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDL0MsQ0FBQzs7K0JBQUE7SUEyQkYsOEJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLCtCQUF1QiwwQkEwQm5DLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7Q2xpZW50ZVNlcnZpY2V9IGZyb20gXCIuLi9jbGllbnRlLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7TmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xucmVnaXN0ZXJFbGVtZW50KFwiRmFiXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b25cIikuRmFiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwLWNsaWVudGVzXCIsXG4gICAgcHJvdmlkZXJzOiBbQ2xpZW50ZVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2NsaWVudGUvbGlzdGFkby9saXN0YWRvLWNsaWVudGUuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvY2xpZW50ZS9jc3MvY2xpZW50ZS5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGFkb0NsaWVudGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBjbGllbnRlczogYW55W107XG4gICAgbGlzdExvYWRlZCA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIF9jbGllbnRlU2VydmljZTogQ2xpZW50ZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fY2xpZW50ZVNlcnZpY2UuaW5kZXgoKS5zdWJzY3JpYmUoY2xpZW50ZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGllbnRlcyA9IGNsaWVudGVzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy90aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhci50aXRsZSA9IFwiTWlzIENsaWVudGVzXCI7XG4gICAgfVxuICAgIG51ZXZvKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWUvY2xpZW50ZS9jcmVhdGVcIl0pO1xuICAgIH1cblxuICAgIGRldGFsbGUoaXRlbSl7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBcImRldGFsbGVcIjogSlNPTi5zdHJpbmdpZnkoaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2hvbWUvY2xpZW50ZS9kZXRhbGxlJ10sIG5hdmlnYXRpb25FeHRyYXMpO1xuICAgIH1cbn0iXX0=