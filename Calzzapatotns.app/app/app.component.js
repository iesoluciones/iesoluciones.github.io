"use strict";
var core_1 = require('@angular/core');
var color_1 = require("color");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var observable_1 = require("data/observable");
var db_service_1 = require("./model/db.service");
var user_model_1 = require("./model/user.model");
var http_service_1 = require("./custom-http/http-service");
var ErrorObservable_1 = require("rxjs/observable/ErrorObservable");
var dialogs = require("ui/dialogs");
var application = require("application");
var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(page, _changeDetectionRef, router, usr, dbService, http) {
        _super.call(this);
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.router = router;
        this.usr = usr;
        this.dbService = dbService;
        this.http = http;
        this.isLoading = false;
        this.user = {};
        this.plataforma = false;
        //this.onDrawerOpening();
        //this.user = {name: "Anónimo"};
        //page.on("loaded", this.onLoaded, this);
        if (application.android) {
            //console.log("We are running on Android device!");
            this.plataforma = false;
        }
        else if (application.ios) {
            //console.log("We are running on iOS device");
            this.plataforma = true;
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.start.subscribe(function () { return _this.isLoading = true; });
        this.http.stop.subscribe(function () { return _this.isLoading = false; });
        //this.page.actionBarHidden = true;
        this.page.backgroundColor = new color_1.Color("#EEEEEE");
        this.http.errorEvent.subscribe(function (e) {
            if (e instanceof ErrorObservable_1.ErrorObservable) {
                var error = e;
                if (error.error == 'timeout_exceeded') {
                    _this.errorTimeOut();
                }
            }
            else if (e.status == 401) {
                _this.error401();
            }
            else if (e.status == 403) {
                _this.error403();
            }
            else if (e.status == 404) {
                _this.error404();
            }
            else if (e.status == 422) {
                _this.error422(e.json());
            }
            else if (e.status == 423) {
                _this.error423();
            }
            else if (e.status == 500) {
                _this.error500();
            }
            else if (e.status == 503) {
                _this.error503();
            }
        });
    };
    AppComponent.prototype.error401 = function () {
        var r = this.router;
        dialogs.alert({
            title: "Permisos!",
            message: "No cuenta con suficientes permisos.",
            okButtonText: "Aceptar"
        }).then(function () {
            r.navigate(["/"]);
        });
    };
    AppComponent.prototype.error403 = function () {
        var r = this.router;
        dialogs.alert({
            title: "Permisos!",
            message: "No cuenta con suficientes permisos.",
            okButtonText: "Aceptar"
        }).then(function () {
            r.navigate(["/"]);
        });
    };
    AppComponent.prototype.error404 = function () {
        var r = this.router;
        dialogs.alert({
            title: "Ruta no encontrada!",
            message: "La ruta a la que trata de acceder no se encuentra disponible.",
            okButtonText: "Aceptar"
        }).then(function () {
            r.navigate(["/"]);
        });
    };
    AppComponent.prototype.error422 = function (err) {
        var msg = "";
        console.log("Error 422", JSON.stringify(err));
        for (var _i = 0, _a = err.errors; _i < _a.length; _i++) {
            var error = _a[_i];
            msg += error + "\n";
        }
        dialogs.alert({
            title: "Petición inválida.",
            message: msg,
            okButtonText: "Aceptar"
        }).then(function () {
        });
    };
    AppComponent.prototype.error423 = function () {
        var r = this.router;
        dialogs.alert({
            title: "Demasiados intentos",
            message: "Se ha bloqueado tu cuenta por 15 minutos. intente más tarde.",
            okButtonText: "Aceptar"
        }).then(function () {
            r.navigate(["/"]);
        });
    };
    AppComponent.prototype.error500 = function () {
        var r = this.router;
        dialogs.alert({
            title: "Oops!, Ocurrió un error.",
            message: "Se ha enviado un reporte a sistemas",
            okButtonText: "Aceptar"
        }).then(function () {
            r.navigate(["/"]);
        });
    };
    AppComponent.prototype.error503 = function () {
        var r = this.router;
        dialogs.alert({
            title: "Servidor en mantenimiento",
            message: "Por el momento los servidores están en mantenimiento",
            okButtonText: "Aceptar"
        }).then(function () {
            r.navigate(["/"]);
        });
    };
    AppComponent.prototype.errorTimeOut = function () {
        var r = this.router;
        dialogs.alert({
            title: "Tiempo de espera agotado!",
            message: "Excedio el límite de tiempo de espera",
            okButtonText: "Aceptar"
        }).then(function () {
            r.navigate(["/"]);
        });
    };
    __decorate([
        core_1.ViewChild("container"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "container", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'main',
            templateUrl: './app.component.html',
            styleUrls: [],
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [page_1.Page, core_1.ChangeDetectorRef, router_1.Router, user_model_1.UserModel, db_service_1.DbService, http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}(observable_1.Observable));
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFzRixlQUFlLENBQUMsQ0FBQTtBQUN0RyxzQkFBb0IsT0FBTyxDQUFDLENBQUE7QUFDNUIscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDJCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBQzNDLDJCQUF3QixvQkFBb0IsQ0FBQyxDQUFBO0FBQzdDLDJCQUF3QixvQkFBb0IsQ0FBQyxDQUFBO0FBQzdDLDZCQUEwQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3ZELGdDQUE4QixpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2hFLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNwQyxJQUFZLFdBQVcsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQVMzQztJQUFrQyxnQ0FBVTtJQU14QyxzQkFBb0IsSUFBVSxFQUFVLG1CQUFzQyxFQUFVLE1BQWMsRUFBVSxHQUFjLEVBQVUsU0FBb0IsRUFBVSxJQUFpQjtRQUNuTCxpQkFBTyxDQUFDO1FBRFEsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFhO1FBSnZMLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDWCxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJZix5QkFBeUI7UUFDekIsZ0NBQWdDO1FBQ2hDLHlDQUF5QztRQUN6QyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0QixtREFBbUQ7WUFD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LEtBQUssQ0FBQztZQUNWLEtBQUssRUFBRSwyQkFBMkI7WUFDbEMsT0FBTyxFQUFFLHVDQUF1QztZQUNoRCxZQUFZLEVBQUUsU0FBUztTQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBM0lEO1FBQUMsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7O21EQUFBO0lBUjNCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQztRQUVELGlCQUFVLEVBQUU7O29CQUFBO0lBK0liLG1CQUFDO0FBQUQsQ0FBQyxBQTlJRCxDQUFrQyx1QkFBVSxHQThJM0M7QUE5SVksb0JBQVksZUE4SXhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQsIEluamVjdGFibGUsIENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29sb3J9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtEYlNlcnZpY2V9IGZyb20gXCIuL21vZGVsL2RiLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlck1vZGVsfSBmcm9tIFwiLi9tb2RlbC91c2VyLm1vZGVsXCI7XG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi9jdXN0b20taHR0cC9odHRwLXNlcnZpY2VcIjtcbmltcG9ydCB7RXJyb3JPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL0Vycm9yT2JzZXJ2YWJsZVwiO1xudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21haW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG59KVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGV4dGVuZHMgT2JzZXJ2YWJsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgcHVibGljIHVzZXI6IGFueSA9IHt9O1xuICAgIHBsYXRhZm9ybWEgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c3I6IFVzZXJNb2RlbCwgcHJpdmF0ZSBkYlNlcnZpY2U6IERiU2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvL3RoaXMub25EcmF3ZXJPcGVuaW5nKCk7XG4gICAgICAgIC8vdGhpcy51c2VyID0ge25hbWU6IFwiQW7Ds25pbW9cIn07XG4gICAgICAgIC8vcGFnZS5vbihcImxvYWRlZFwiLCB0aGlzLm9uTG9hZGVkLCB0aGlzKTtcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJXZSBhcmUgcnVubmluZyBvbiBBbmRyb2lkIGRldmljZSFcIik7XG4gICAgICAgICAgICB0aGlzLnBsYXRhZm9ybWEgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChhcHBsaWNhdGlvbi5pb3MpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJXZSBhcmUgcnVubmluZyBvbiBpT1MgZGV2aWNlXCIpO1xuICAgICAgICAgICAgdGhpcy5wbGF0YWZvcm1hID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmh0dHAuc3RhcnQuc3Vic2NyaWJlKCgpID0+IHRoaXMuaXNMb2FkaW5nID0gdHJ1ZSk7XG4gICAgICAgIHRoaXMuaHR0cC5zdG9wLnN1YnNjcmliZSgoKSA9PiB0aGlzLmlzTG9hZGluZyA9IGZhbHNlKTtcbiAgICAgICAgLy90aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcIiNFRUVFRUVcIik7XG5cbiAgICAgICAgdGhpcy5odHRwLmVycm9yRXZlbnQuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBFcnJvck9ic2VydmFibGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSBlO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5lcnJvciA9PSAndGltZW91dF9leGNlZWRlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvclRpbWVPdXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3I0MDEoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5zdGF0dXMgPT0gNDAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcjQwMygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnN0YXR1cyA9PSA0MDQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yNDA0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuc3RhdHVzID09IDQyMikge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3I0MjIoZS5qc29uKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnN0YXR1cyA9PSA0MjMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yNDIzKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUuc3RhdHVzID09IDUwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3I1MDAoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5zdGF0dXMgPT0gNTAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcjUwMygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlcnJvcjQwMSgpIHtcbiAgICAgICAgbGV0IHIgPSB0aGlzLnJvdXRlcjtcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJQZXJtaXNvcyFcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiTm8gY3VlbnRhIGNvbiBzdWZpY2llbnRlcyBwZXJtaXNvcy5cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByLm5hdmlnYXRlKFtcIi9cIl0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlcnJvcjQwMygpIHtcbiAgICAgICAgbGV0IHIgPSB0aGlzLnJvdXRlcjtcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJQZXJtaXNvcyFcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiTm8gY3VlbnRhIGNvbiBzdWZpY2llbnRlcyBwZXJtaXNvcy5cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByLm5hdmlnYXRlKFtcIi9cIl0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlcnJvcjQwNCgpIHtcbiAgICAgICAgbGV0IHIgPSB0aGlzLnJvdXRlcjtcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJSdXRhIG5vIGVuY29udHJhZGEhXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkxhIHJ1dGEgYSBsYSBxdWUgdHJhdGEgZGUgYWNjZWRlciBubyBzZSBlbmN1ZW50cmEgZGlzcG9uaWJsZS5cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByLm5hdmlnYXRlKFtcIi9cIl0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlcnJvcjQyMihlcnIpIHtcblxuICAgICAgICBsZXQgbXNnID0gXCJcIjtcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciA0MjJcIiwgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgICAgIGZvciAobGV0IGVycm9yIG9mIGVyci5lcnJvcnMpIHtcbiAgICAgICAgICAgIG1zZyArPSBlcnJvciArIFwiXFxuXCI7XG4gICAgICAgIH1cbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJQZXRpY2nDs24gaW52w6FsaWRhLlwiLFxuICAgICAgICAgICAgbWVzc2FnZTogbXNnLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXJyb3I0MjMoKSB7XG4gICAgICAgIGxldCByID0gdGhpcy5yb3V0ZXI7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiRGVtYXNpYWRvcyBpbnRlbnRvc1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJTZSBoYSBibG9xdWVhZG8gdHUgY3VlbnRhIHBvciAxNSBtaW51dG9zLiBpbnRlbnRlIG3DoXMgdGFyZGUuXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQWNlcHRhclwiXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgci5uYXZpZ2F0ZShbXCIvXCJdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXJyb3I1MDAoKSB7XG4gICAgICAgIGxldCByID0gdGhpcy5yb3V0ZXI7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiT29wcyEsIE9jdXJyacOzIHVuIGVycm9yLlwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJTZSBoYSBlbnZpYWRvIHVuIHJlcG9ydGUgYSBzaXN0ZW1hc1wiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHIubmF2aWdhdGUoW1wiL1wiXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGVycm9yNTAzKCkge1xuICAgICAgICBsZXQgciA9IHRoaXMucm91dGVyO1xuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlNlcnZpZG9yIGVuIG1hbnRlbmltaWVudG9cIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiUG9yIGVsIG1vbWVudG8gbG9zIHNlcnZpZG9yZXMgZXN0w6FuIGVuIG1hbnRlbmltaWVudG9cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByLm5hdmlnYXRlKFtcIi9cIl0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlcnJvclRpbWVPdXQoKSB7XG4gICAgICAgIGxldCByID0gdGhpcy5yb3V0ZXI7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiVGllbXBvIGRlIGVzcGVyYSBhZ290YWRvIVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJFeGNlZGlvIGVsIGzDrW1pdGUgZGUgdGllbXBvIGRlIGVzcGVyYVwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHIubmF2aWdhdGUoW1wiL1wiXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19