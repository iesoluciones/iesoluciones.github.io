"use strict";
var core_1 = require("@angular/core");
var corte_service_1 = require("../corte.service");
var user_model_1 = require("../../../model/user.model");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
/**
 * Created by iedeveloper on 23/03/17.
 */
var SaldoDisponibleComponent = (function () {
    function SaldoDisponibleComponent(page, activatedRoute) {
        var _this = this;
        this.page = page;
        this.activatedRoute = activatedRoute;
        this.ultimaActualizacion = "";
        this.limiteCredito = "0";
        this.saldo = "0";
        this.creditoDisponible = "0";
        this.estatus = "";
        activatedRoute.queryParams.subscribe(function (params) {
            _this.saldos = JSON.parse(params["info"]);
            _this.ultimaActualizacion = _this.saldos.fecha;
            _this.limiteCredito = _this.saldos.limite;
            _this.creditoDisponible = _this.saldos.disponible;
            _this.saldo = _this.saldos.saldo;
            console.log("INFOOOOO=>", JSON.stringify(_this.saldos));
        });
    }
    SaldoDisponibleComponent.prototype.ngOnInit = function () {
        console.log("entra el  Saldo Disponible");
        this.page.actionBar.title = "Saldo Disponible";
    };
    SaldoDisponibleComponent.prototype.ngAfterViewInit = function () {
    };
    SaldoDisponibleComponent = __decorate([
        core_1.Component({
            selector: "saldoDisponible",
            providers: [corte_service_1.CorteService, user_model_1.UserModel],
            templateUrl: "pages/corte/saldo-disponible/saldo-disponible.html",
            styleUrls: ["pages/corte/saldo-disponible/saldo-disponible.css"]
        }), 
        __metadata('design:paramtypes', [page_1.Page, router_1.ActivatedRoute])
    ], SaldoDisponibleComponent);
    return SaldoDisponibleComponent;
}());
exports.SaldoDisponibleComponent = SaldoDisponibleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZG8tZGlzcG9uaWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYWxkby1kaXNwb25pYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELDhCQUEyQixrQkFBa0IsQ0FBQyxDQUFBO0FBQzlDLDJCQUF3QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3BELHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUM3Qix1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQzs7R0FFRztBQVNIO0lBU0ksa0NBQW9CLElBQVMsRUFBUyxjQUE4QjtRQVR4RSxpQkE0QkM7UUFuQnVCLFNBQUksR0FBSixJQUFJLENBQUs7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFQcEUsd0JBQW1CLEdBQUMsRUFBRSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQUMsR0FBRyxDQUFDO1FBQ2xCLFVBQUssR0FBQyxHQUFHLENBQUM7UUFDVixzQkFBaUIsR0FBQyxHQUFHLENBQUM7UUFDdEIsWUFBTyxHQUFDLEVBQUUsQ0FBQztRQUlQLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN2QyxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLG1CQUFtQixHQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzNDLEtBQUksQ0FBQyxhQUFhLEdBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDdEMsS0FBSSxDQUFDLGlCQUFpQixHQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzlDLEtBQUksQ0FBQyxLQUFLLEdBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCwyQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxrQkFBa0IsQ0FBQztJQUNqRCxDQUFDO0lBRUQsa0RBQWUsR0FBZjtJQUVBLENBQUM7SUFqQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxFQUFDLHNCQUFTLENBQUM7WUFDbkMsV0FBVyxFQUFFLG9EQUFvRDtZQUNqRSxTQUFTLEVBQUUsQ0FBQyxtREFBbUQsQ0FBQztTQUNuRSxDQUFDOztnQ0FBQTtJQThCRiwrQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QlksZ0NBQXdCLDJCQTRCcEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NvcnRlU2VydmljZX0gZnJvbSBcIi4uL2NvcnRlLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlck1vZGVsfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWwvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgaWVkZXZlbG9wZXIgb24gMjMvMDMvMTcuXG4gKi9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic2FsZG9EaXNwb25pYmxlXCIsXG4gICAgcHJvdmlkZXJzOiBbQ29ydGVTZXJ2aWNlLFVzZXJNb2RlbF0sXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvY29ydGUvc2FsZG8tZGlzcG9uaWJsZS9zYWxkby1kaXNwb25pYmxlLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2NvcnRlL3NhbGRvLWRpc3BvbmlibGUvc2FsZG8tZGlzcG9uaWJsZS5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTYWxkb0Rpc3BvbmlibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICB1bHRpbWFBY3R1YWxpemFjaW9uPVwiXCI7XG4gICAgbGltaXRlQ3JlZGl0bz1cIjBcIjtcbiAgICBzYWxkbz1cIjBcIjtcbiAgICBjcmVkaXRvRGlzcG9uaWJsZT1cIjBcIjtcbiAgICBlc3RhdHVzPVwiXCI7XG4gICAgc2FsZG9zOmFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTpQYWdlLHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKXtcbiAgICAgICAgYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnNhbGRvcyA9IEpTT04ucGFyc2UocGFyYW1zW1wiaW5mb1wiXSk7XG4gICAgICAgICAgICB0aGlzLnVsdGltYUFjdHVhbGl6YWNpb249dGhpcy5zYWxkb3MuZmVjaGE7XG4gICAgICAgICAgICB0aGlzLmxpbWl0ZUNyZWRpdG89dGhpcy5zYWxkb3MubGltaXRlO1xuICAgICAgICAgICAgdGhpcy5jcmVkaXRvRGlzcG9uaWJsZT10aGlzLnNhbGRvcy5kaXNwb25pYmxlO1xuICAgICAgICAgICAgdGhpcy5zYWxkbz10aGlzLnNhbGRvcy5zYWxkbztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5GT09PT089PlwiLEpTT04uc3RyaW5naWZ5KHRoaXMuc2FsZG9zKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlbnRyYSBlbCAgU2FsZG8gRGlzcG9uaWJsZVwiKTtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhci50aXRsZT1cIlNhbGRvIERpc3BvbmlibGVcIjtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgICB9XG5cbn0iXX0=