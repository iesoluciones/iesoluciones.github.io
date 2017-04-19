"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var cliente_model_1 = require("../../model/cliente.model");
var venta_model_1 = require("../../model/venta.model");
var inicio_service_1 = require("./inicio.service");
var user_model_1 = require("../../model/user.model");
var moment = require("moment");
var permissions = require("nativescript-permissions");
var platform = require("platform");
moment.locale('es');
var InicioComponent = (function () {
    function InicioComponent(page, router, _clienteModel, _inicioService, _userModel, _ventaModel) {
        this.page = page;
        this.router = router;
        this._clienteModel = _clienteModel;
        this._inicioService = _inicioService;
        this._userModel = _userModel;
        this._ventaModel = _ventaModel;
        this.extenderSaldo = true;
        this.fecha = "";
        this.disponible = "0";
        this.pagoMinimo = "0";
        this.user = {};
        console.log("constructor");
    }
    InicioComponent.prototype.ngOnInit = function () {
        this.page.actionBar.title = "Inicio";
    };
    InicioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._clienteModel.fetch().then(function (usuario) {
            _this._inicioService.getClienteInfo(usuario.codigo)
                .subscribe(function (info) {
                _this.clienteSaldo = info;
                _this.disponible = info.disponible;
                _this.fecha = info.fecha;
                _this.pagoMinimo = info.pagoMinimo;
                console.log("info", JSON.stringify(_this.clienteSaldo));
            });
        });
        this._userModel.fetch().then(function (usuario) {
            if (usuario) {
                _this.user = usuario;
            }
        });
    };
    InicioComponent.prototype.onSaldoClicked = function () {
        var grid = this.page.getViewById("gridSaldo");
        this.extenderSaldo = !this.extenderSaldo;
        if (this.extenderSaldo == false) {
            grid.visibility = 'visible';
            grid.animate({
                opacity: 1,
                duration: 300
            });
        }
        if (this.extenderSaldo == true) {
            grid.animate({
                opacity: 0,
                duration: 200
            }).then(function (d) { grid.visibility = 'collapse'; });
        }
    };
    InicioComponent.prototype.redireccion = function (args) {
        this.router.navigate(["/home/" + args]);
    };
    InicioComponent.prototype.corte = function () {
        console.log("Tap corte");
        var navigationExtras = {
            queryParams: {
                "info": JSON.stringify(this.clienteSaldo)
            }
        };
        this.router.navigate(['/home/corte'], navigationExtras);
    };
    InicioComponent.prototype.oficinaCredito = function () {
        var _this = this;
        if (platform.isAndroid) {
            permissions.requestPermission(android.Manifest.permission.ACCESS_COARSE_LOCATION, "Necesitamos obtener tu ubicación GPS")
                .then(function () {
                console.log("Woo Hoo, I have the power!");
                _this.redireccion('oficinacredito');
            })
                .catch(function () {
                console.log("Uh oh, no permissions - plan B time!");
                console.log("FALLOOOOOOO");
            });
        }
        else {
            this.redireccion('oficinacredito');
        }
    };
    InicioComponent = __decorate([
        core_1.Component({
            selector: "inicio-inc",
            templateUrl: "pages/inicio/inicio.component.html",
            styleUrls: ["pages/inicio/inicio-common.css", "pages/inicio/inicio.css"],
            providers: [inicio_service_1.InicioService, { provide: core_1.LOCALE_ID, useValue: "es-MX" }]
        }), 
        __metadata('design:paramtypes', [page_1.Page, router_1.Router, cliente_model_1.ClienteModel, inicio_service_1.InicioService, user_model_1.UserModel, venta_model_1.VentaModel])
    ], InicioComponent);
    return InicioComponent;
}());
exports.InicioComponent = InicioComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pY2lvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaWNpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCxxQkFBbUIsU0FBUyxDQUFDLENBQUE7QUFFN0IsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsOEJBQTJCLDJCQUEyQixDQUFDLENBQUE7QUFDdkQsNEJBQXlCLHlCQUF5QixDQUFDLENBQUE7QUFDbkQsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0MsMkJBQXdCLHdCQUF3QixDQUFDLENBQUE7QUFDakQsSUFBTyxNQUFNLFdBQVcsUUFBUSxDQUFDLENBQUM7QUFFbEMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFFLDBCQUEwQixDQUFFLENBQUM7QUFDeEQsSUFBWSxRQUFRLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQVFwQjtJQVNJLHlCQUFvQixJQUFTLEVBQVUsTUFBYSxFQUFVLGFBQTJCLEVBQVUsY0FBNkIsRUFBVyxVQUFxQixFQUM1SSxXQUF1QjtRQUR2QixTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVyxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQzVJLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBVDNDLGtCQUFhLEdBQUMsSUFBSSxDQUFDO1FBRW5CLFVBQUssR0FBQyxFQUFFLENBQUM7UUFDVCxlQUFVLEdBQUMsR0FBRyxDQUFDO1FBQ2YsZUFBVSxHQUFDLEdBQUcsQ0FBQztRQUVSLFNBQUksR0FBUSxFQUFFLENBQUM7UUFJbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQs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c0NBQXNDLENBQUM7aUJBQ3BILElBQUksQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtZQUN0QyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztnQkFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQSxJQUFJLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUFBLENBQUM7SUFDL0MsQ0FBQztJQXhGTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLHlCQUF5QixDQUFDO1lBQ3hFLFNBQVMsRUFBQyxDQUFDLDhCQUFhLEVBQUMsRUFBRSxPQUFPLEVBQUUsZ0JBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUM7U0FDdEUsQ0FBQzs7dUJBQUE7SUFxRkYsc0JBQUM7QUFBRCxDQUFDLEFBbkZELElBbUZDO0FBbkZZLHVCQUFlLGtCQW1GM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIExPQ0FMRV9JRH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7R3JpZExheW91dH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0NsaWVudGVNb2RlbH0gZnJvbSBcIi4uLy4uL21vZGVsL2NsaWVudGUubW9kZWxcIjtcbmltcG9ydCB7VmVudGFNb2RlbH0gZnJvbSBcIi4uLy4uL21vZGVsL3ZlbnRhLm1vZGVsXCI7XG5pbXBvcnQge0luaWNpb1NlcnZpY2V9IGZyb20gXCIuL2luaWNpby5zZXJ2aWNlXCI7XG5pbXBvcnQge1VzZXJNb2RlbH0gZnJvbSBcIi4uLy4uL21vZGVsL3VzZXIubW9kZWxcIjtcbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xudmFyIHBlcm1pc3Npb25zID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtcGVybWlzc2lvbnNcIiApO1xuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSBcInBsYXRmb3JtXCI7XG5tb21lbnQubG9jYWxlKCdlcycpO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiaW5pY2lvLWluY1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2luaWNpby9pbmljaW8uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2luaWNpby9pbmljaW8tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2luaWNpby9pbmljaW8uY3NzXCJdLFxuICAgIHByb3ZpZGVyczpbSW5pY2lvU2VydmljZSx7IHByb3ZpZGU6IExPQ0FMRV9JRCwgdXNlVmFsdWU6IFwiZXMtTVhcIiB9XVxufSlcblxuZXhwb3J0IGNsYXNzIEluaWNpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZXh0ZW5kZXJTYWxkbz10cnVlO1xuICAgIGNsaWVudGVTYWxkbzphbnk7XG4gICAgZmVjaGE9XCJcIjtcbiAgICBkaXNwb25pYmxlPVwiMFwiO1xuICAgIHBhZ29NaW5pbW89XCIwXCI7XG5cbiAgICBwdWJsaWMgdXNlcjogYW55ID0ge307XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6UGFnZSwgcHJpdmF0ZSByb3V0ZXI6Um91dGVyLCBwcml2YXRlIF9jbGllbnRlTW9kZWw6IENsaWVudGVNb2RlbCwgcHJpdmF0ZSBfaW5pY2lvU2VydmljZTogSW5pY2lvU2VydmljZSwgIHByaXZhdGUgX3VzZXJNb2RlbDogVXNlck1vZGVsLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3ZlbnRhTW9kZWw6IFZlbnRhTW9kZWwpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnN0cnVjdG9yXCIpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFyLnRpdGxlPVwiSW5pY2lvXCI7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLl9jbGllbnRlTW9kZWwuZmV0Y2goKS50aGVuKHVzdWFyaW8gPT4ge1xuICAgICAgICAgICAgdGhpcy5faW5pY2lvU2VydmljZS5nZXRDbGllbnRlSW5mbyh1c3VhcmlvLmNvZGlnbylcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGluZm89PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRlU2FsZG89aW5mbztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwb25pYmxlPWluZm8uZGlzcG9uaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZWNoYT1pbmZvLmZlY2hhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ29NaW5pbW89aW5mby5wYWdvTWluaW1vO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZm9cIixKU09OLnN0cmluZ2lmeSh0aGlzLmNsaWVudGVTYWxkbykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fdXNlck1vZGVsLmZldGNoKCkudGhlbih1c3VhcmlvID0+IHtcbiAgICAgICAgICAgIGlmICh1c3VhcmlvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdXN1YXJpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TYWxkb0NsaWNrZWQoKXtcbiAgICAgICAgbGV0IGdyaWQ6IEdyaWRMYXlvdXQgPSA8R3JpZExheW91dD4gdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwiZ3JpZFNhbGRvXCIpO1xuICAgICAgICB0aGlzLmV4dGVuZGVyU2FsZG89IXRoaXMuZXh0ZW5kZXJTYWxkbztcbiAgICAgICAgaWYodGhpcy5leHRlbmRlclNhbGRvPT1mYWxzZSl7XG4gICAgICAgICAgICBncmlkLnZpc2liaWxpdHk9J3Zpc2libGUnO1xuICAgICAgICAgICAgZ3JpZC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5leHRlbmRlclNhbGRvPT10cnVlKXtcbiAgICAgICAgICAgIGdyaWQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICAgICAgICB9KS50aGVuKCAoZCk9PnsgZ3JpZC52aXNpYmlsaXR5PSdjb2xsYXBzZSc7fSApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWRpcmVjY2lvbihhcmdzKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lL1wiICsgYXJnc10pO1xuICAgIH1cblxuICAgIGNvcnRlKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGFwIGNvcnRlXCIpO1xuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IEpTT04uc3RyaW5naWZ5KHRoaXMuY2xpZW50ZVNhbGRvKVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lL2NvcnRlJ10sIG5hdmlnYXRpb25FeHRyYXMpO1xuICAgIH1cblxuICAgIG9maWNpbmFDcmVkaXRvKCl7XG4gICAgICAgIGlmKHBsYXRmb3JtLmlzQW5kcm9pZCl7XG4gICAgICAgIHBlcm1pc3Npb25zLnJlcXVlc3RQZXJtaXNzaW9uKGFuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5BQ0NFU1NfQ09BUlNFX0xPQ0FUSU9OLCBcIk5lY2VzaXRhbW9zIG9idGVuZXIgdHUgdWJpY2FjacOzbiBHUFNcIilcbiAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV29vIEhvbywgSSBoYXZlIHRoZSBwb3dlciFcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjY2lvbignb2ZpY2luYWNyZWRpdG8nKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVoIG9oLCBubyBwZXJtaXNzaW9ucyAtIHBsYW4gQiB0aW1lIVwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZBTExPT09PT09PXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNlIHsgdGhpcy5yZWRpcmVjY2lvbignb2ZpY2luYWNyZWRpdG8nKX1cbiAgICB9XG5cbn0iXX0=