"use strict";
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var page_1 = require("ui/page");
//import { registerElement } from "nativescript-angular/element-registry";
var vale_service_1 = require("../vale.service");
var cliente_model_1 = require("../../../model/cliente.model");
//registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);
var ListadoValeComponent = (function () {
    function ListadoValeComponent(routerExtensions, page, _valeService, _clienteModel) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this._valeService = _valeService;
        this._clienteModel = _clienteModel;
        this.listLoaded = false;
        this._clienteModel.fetch().then(function (cliente) {
            _this._valeService.index(cliente.codigo).subscribe(function (vales) {
                console.log(JSON.stringify(vales));
                _this.vales = vales;
                _this.listLoaded = true;
            });
        });
    }
    ListadoValeComponent.prototype.ngOnInit = function () {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Mis Vales";
    };
    ListadoValeComponent.prototype.nuevo = function () {
        this.routerExtensions.navigate(["/home/vale/create"]);
    };
    ListadoValeComponent = __decorate([
        core_1.Component({
            selector: "my-app-vales",
            providers: [vale_service_1.ValeService],
            templateUrl: "pages/vales/listado/listado-vale.html",
            styleUrls: ["pages/vales/css/vale.css"]
        }), 
        __metadata('design:paramtypes', [nativescript_angular_1.RouterExtensions, page_1.Page, vale_service_1.ValeService, cliente_model_1.ClienteModel])
    ], ListadoValeComponent);
    return ListadoValeComponent;
}());
exports.ListadoValeComponent = ListadoValeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGFkby52YWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3RhZG8udmFsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUN0RCxxQkFBbUIsU0FBUyxDQUFDLENBQUE7QUFFN0IsMEVBQTBFO0FBQzFFLDZCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLDhCQUEyQiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzFELGlGQUFpRjtBQVFqRjtJQUdJLDhCQUFvQixnQkFBa0MsRUFBVSxJQUFVLEVBQVUsWUFBeUIsRUFBVSxhQUE0QjtRQUh2SixpQkFzQkM7UUFuQnVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQURuSixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRWYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ25DLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO2dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO0lBRTVDLENBQUM7SUFDRCxvQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUUxRCxDQUFDO0lBM0JMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsV0FBVyxFQUFFLHVDQUF1QztZQUNwRCxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUMxQyxDQUFDOzs0QkFBQTtJQXVCRiwyQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QlksNEJBQW9CLHVCQXNCaEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuXG4vL2ltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQge1ZhbGVTZXJ2aWNlfSBmcm9tIFwiLi4vdmFsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NsaWVudGVNb2RlbH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsL2NsaWVudGUubW9kZWxcIjtcbi8vcmVnaXN0ZXJFbGVtZW50KFwiRmFiXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b25cIikuRmFiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwLXZhbGVzXCIsXG4gICAgcHJvdmlkZXJzOiBbVmFsZVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3ZhbGVzL2xpc3RhZG8vbGlzdGFkby12YWxlLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3ZhbGVzL2Nzcy92YWxlLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0YWRvVmFsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHZhbGVzOiBhbnlbXTtcbiAgICBsaXN0TG9hZGVkID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgX3ZhbGVTZXJ2aWNlOiBWYWxlU2VydmljZSwgcHJpdmF0ZSBfY2xpZW50ZU1vZGVsIDogQ2xpZW50ZU1vZGVsKSB7XG4gICAgICAgIHRoaXMuX2NsaWVudGVNb2RlbC5mZXRjaCgpLnRoZW4oY2xpZW50ZT0+e1xuICAgICAgICAgICAgdGhpcy5fdmFsZVNlcnZpY2UuaW5kZXgoY2xpZW50ZS5jb2RpZ28pLnN1YnNjcmliZSh2YWxlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodmFsZXMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGVzID0gdmFsZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy90aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhci50aXRsZSA9IFwiTWlzIFZhbGVzXCI7XG5cbiAgICB9XG4gICAgbnVldm8oKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZS92YWxlL2NyZWF0ZVwiXSk7XG5cbiAgICB9XG59Il19