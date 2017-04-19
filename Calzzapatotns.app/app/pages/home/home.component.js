"use strict";
var core_1 = require('@angular/core');
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require('nativescript-telerik-ui/sidedrawer');
var application = require("application");
var nativescript_angular_1 = require("nativescript-angular");
var user_model_1 = require("../../model/user.model");
var cliente_model_1 = require("../../model/cliente.model");
var tipos_medio_model_1 = require("../../model/tipos_medio.model");
var clientes_medios_model_1 = require("../../model/clientes_medios.model");
var venta_model_1 = require("../../model/venta.model");
var login_service_1 = require("../login/login.service");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var recuperar_1 = require("../modals/recuperar/recuperar");
var inicio_service_1 = require("../inicio/inicio.service");
var appSettings = require("application-settings");
var dialogs = require("ui/dialogs");
var permissions = require("nativescript-permissions");
var platform = require("platform");
var HomeComponent = (function () {
    function HomeComponent(routerExtensions, page, _changeDetectionRef, router, _userModel, _clienteModel, _tiposMediosModel, _clientesMedios, _loginService, vcRef, _modalService, _inicioService, _ventaModel) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.router = router;
        this._userModel = _userModel;
        this._clienteModel = _clienteModel;
        this._tiposMediosModel = _tiposMediosModel;
        this._clientesMedios = _clientesMedios;
        this._loginService = _loginService;
        this.vcRef = vcRef;
        this._modalService = _modalService;
        this._inicioService = _inicioService;
        this._ventaModel = _ventaModel;
        this.user = {};
        this.plataforma = false;
        this.isLoggingIn = false;
        this.clienteSaldo = {
            corte: '',
            pago_minimo: 0,
            fecha_pago: '',
            saldo_disponible: 0,
        };
        this.onDrawerOpening();
        this.user = { name: "Anónimo" };
        page.on("loaded", this.onLoaded, this);
        if (application.android) {
            //console.log("We are running on Android device!");
            this.plataforma = false;
        }
        else if (application.ios) {
            //console.log("We are running on iOS device");
            this.plataforma = true;
        }
    }
    HomeComponent.prototype.onDrawerOpening = function () {
        var _this = this;
        this.user = { name: "Anónimo" };
        this._userModel.fetch().then(function (usuario) {
            if (usuario) {
                _this.user = usuario;
            }
        });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(HomeComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.toggle = function () {
        this.drawer.toggleDrawerState();
    };
    HomeComponent.prototype.onLoaded = function (args) {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    HomeComponent.prototype.openDrawer = function () {
        //console.log("openDrawer");
        if (this.drawer.getIsOpen()) {
            this.drawer.closeDrawer();
        }
        else {
            this.drawer.showDrawer();
        }
    };
    HomeComponent.prototype.redireccion = function (args) {
        //console.log("redireccion", args);
        this.routerExtensions.navigate(["/home/" + args], { clearHistory: true });
        this.drawer.closeDrawer();
    };
    HomeComponent.prototype.corte = function () {
        var _this = this;
        console.log("inicio corte");
        this._userModel.fetch().then(function (usuario) {
            _this._inicioService.getClienteInfo(usuario.email)
                .subscribe(function (info) {
                var navigationExtras = {
                    queryParams: {
                        "info": JSON.stringify(info)
                    }
                };
                _this.router.navigate(['/home/corte'], navigationExtras);
                _this.drawer.closeDrawer();
            });
        });
    };
    HomeComponent.prototype.truncateDatabase = function () {
        console.log("truncateDatabase");
        this._userModel.truncate();
        this._clienteModel.truncate();
        this._ventaModel.truncate();
        this._tiposMediosModel.truncate();
        this._clientesMedios.truncate();
    };
    HomeComponent.prototype.salir = function () {
        this.truncateDatabase();
        this.user = { name: "Anónimo" };
        appSettings.clear(); //borrar token sesion
        this.routerExtensions.navigate(["/"], { clearHistory: true });
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.user.solicitar == 1) {
            var options = {
                viewContainerRef: this.vcRef,
                fullscreen: false
            };
            // >> returning-result
            this._modalService.showModal(recuperar_1.RecuperarComponent, options)
                .then(function (dato) {
                if (dato) {
                    var datos = { cliente_id: _this.user.cliente_id, dato: dato };
                    _this._loginService.cambiarPassword(datos).subscribe(function (d) {
                        _this._userModel.cambiarSolicitud();
                        dialogs.alert({
                            title: "Recuperar contraseña",
                            message: "La contraseña se ha actualizado correctamente.",
                            okButtonText: "Aceptar"
                        }).then(function () {
                        });
                    });
                }
            });
        }
    };
    HomeComponent.prototype.oficinaCredito = function () {
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
    __decorate([
        core_1.ViewChild("container"), 
        __metadata('design:type', core_1.ElementRef)
    ], HomeComponent.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent), 
        __metadata('design:type', angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "inicio-inc",
            templateUrl: "pages/home/home.component.html",
            providers: [login_service_1.LoginService, inicio_service_1.InicioService]
        }), 
        __metadata('design:paramtypes', [nativescript_angular_1.RouterExtensions, page_1.Page, core_1.ChangeDetectorRef, router_1.Router, user_model_1.UserModel, cliente_model_1.ClienteModel, tipos_medio_model_1.TiposMedioModel, clientes_medios_model_1.ClientesMediosModel, login_service_1.LoginService, core_1.ViewContainerRef, modal_dialog_1.ModalDialogService, inicio_service_1.InicioService, venta_model_1.VentaModel])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTRGLGVBQWUsQ0FBQyxDQUFBO0FBRTVHLHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUM3Qix1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RCx3QkFBcUQsNENBQTRDLENBQUMsQ0FBQTtBQUNsRywyQkFBMkQsb0NBQW9DLENBQUMsQ0FBQTtBQUloRyxJQUFZLFdBQVcsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUMzQyxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUN0RCwyQkFBd0Isd0JBQXdCLENBQUMsQ0FBQTtBQUNqRCw4QkFBMkIsMkJBQTJCLENBQUMsQ0FBQTtBQUN2RCxrQ0FBOEIsK0JBQStCLENBQUMsQ0FBQTtBQUM5RCxzQ0FBa0MsbUNBQW1DLENBQUMsQ0FBQTtBQUN0RSw0QkFBeUIseUJBQXlCLENBQUMsQ0FBQTtBQUNuRCw4QkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQUNwRCw2QkFBcUQsbUNBQW1DLENBQUMsQ0FBQTtBQUN6RiwwQkFBaUMsK0JBQStCLENBQUMsQ0FBQTtBQUNqRSwrQkFBNEIsMEJBQTBCLENBQUMsQ0FBQTtBQUN2RCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNsRCxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFcEMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFFLDBCQUEwQixDQUFFLENBQUM7QUFDeEQsSUFBWSxRQUFRLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFRckM7SUFhSSx1QkFBb0IsZ0JBQWtDLEVBQ2xDLElBQVUsRUFDVixtQkFBc0MsRUFDdEMsTUFBYyxFQUNkLFVBQXFCLEVBQ3JCLGFBQTJCLEVBQzNCLGlCQUFrQyxFQUNsQyxlQUFvQyxFQUNwQyxhQUEyQixFQUMzQixLQUF1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SkYsb0JBQUM7QUFBRCxDQUFDLEFBNUpELElBNEpDO0FBNUpZLHFCQUFhLGdCQTRKekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb2xvcn0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQge1JhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQge0RyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9ufSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcbmltcG9ydCB7RGJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vbW9kZWwvZGIuc2VydmljZVwiO1xuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSBcIi4uLy4uL2N1c3RvbS1odHRwL2h0dHAtc2VydmljZVwiO1xuaW1wb3J0IHtFcnJvck9ic2VydmFibGV9IGZyb20gXCJyeGpzL29ic2VydmFibGUvRXJyb3JPYnNlcnZhYmxlXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge1VzZXJNb2RlbH0gZnJvbSBcIi4uLy4uL21vZGVsL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7Q2xpZW50ZU1vZGVsfSBmcm9tIFwiLi4vLi4vbW9kZWwvY2xpZW50ZS5tb2RlbFwiO1xuaW1wb3J0IHtUaXBvc01lZGlvTW9kZWx9IGZyb20gXCIuLi8uLi9tb2RlbC90aXBvc19tZWRpby5tb2RlbFwiO1xuaW1wb3J0IHtDbGllbnRlc01lZGlvc01vZGVsfSBmcm9tIFwiLi4vLi4vbW9kZWwvY2xpZW50ZXNfbWVkaW9zLm1vZGVsXCI7XG5pbXBvcnQge1ZlbnRhTW9kZWx9IGZyb20gXCIuLi8uLi9tb2RlbC92ZW50YS5tb2RlbFwiO1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQge1JlY3VwZXJhckNvbXBvbmVudH0gZnJvbSBcIi4uL21vZGFscy9yZWN1cGVyYXIvcmVjdXBlcmFyXCI7XG5pbXBvcnQge0luaWNpb1NlcnZpY2V9IGZyb20gXCIuLi9pbmljaW8vaW5pY2lvLnNlcnZpY2VcIjtcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcbnZhciBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XG52YXIgcGVybWlzc2lvbnMgPSByZXF1aXJlKCBcIm5hdGl2ZXNjcmlwdC1wZXJtaXNzaW9uc1wiICk7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwicGxhdGZvcm1cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiaW5pY2lvLWluY1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW0xvZ2luU2VydmljZSwgSW5pY2lvU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuICAgIHB1YmxpYyB1c2VyOiBhbnkgPSB7fTtcbiAgICBwbGF0YWZvcm1hID0gZmFsc2U7XG4gICAgaXNMb2dnaW5nSW4gPSBmYWxzZTtcbiAgICBjbGllbnRlU2FsZG8gPSB7XG4gICAgICAgIGNvcnRlOiAnJyxcbiAgICAgICAgcGFnb19taW5pbW86IDAsXG4gICAgICAgIGZlY2hhX3BhZ286ICcnLFxuICAgICAgICBzYWxkb19kaXNwb25pYmxlOiAwLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF91c2VyTW9kZWw6IFVzZXJNb2RlbCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jbGllbnRlTW9kZWw6IENsaWVudGVNb2RlbCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF90aXBvc01lZGlvc01vZGVsOiBUaXBvc01lZGlvTW9kZWwsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY2xpZW50ZXNNZWRpb3M6IENsaWVudGVzTWVkaW9zTW9kZWwsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9pbmljaW9TZXJ2aWNlOiBJbmljaW9TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3ZlbnRhTW9kZWw6IFZlbnRhTW9kZWwpIHtcbiAgICAgICAgdGhpcy5vbkRyYXdlck9wZW5pbmcoKTtcbiAgICAgICAgdGhpcy51c2VyID0ge25hbWU6IFwiQW7Ds25pbW9cIn07XG4gICAgICAgIHBhZ2Uub24oXCJsb2FkZWRcIiwgdGhpcy5vbkxvYWRlZCwgdGhpcyk7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiV2UgYXJlIHJ1bm5pbmcgb24gQW5kcm9pZCBkZXZpY2UhXCIpO1xuICAgICAgICAgICAgdGhpcy5wbGF0YWZvcm1hID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoYXBwbGljYXRpb24uaW9zKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiV2UgYXJlIHJ1bm5pbmcgb24gaU9TIGRldmljZVwiKTtcbiAgICAgICAgICAgIHRoaXMucGxhdGFmb3JtYSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25EcmF3ZXJPcGVuaW5nKCkge1xuICAgICAgICB0aGlzLnVzZXIgPSB7bmFtZTogXCJBbsOzbmltb1wifTtcbiAgICAgICAgdGhpcy5fdXNlck1vZGVsLmZldGNoKCkudGhlbih1c3VhcmlvID0+IHtcbiAgICAgICAgICAgIGlmICh1c3VhcmlvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdXN1YXJpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcbiAgICBwcml2YXRlIGRyYXdlcjogU2lkZURyYXdlclR5cGU7XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIG9wZW5EcmF3ZXIoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJvcGVuRHJhd2VyXCIpO1xuICAgICAgICBpZiAodGhpcy5kcmF3ZXIuZ2V0SXNPcGVuKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVkaXJlY2Npb24oYXJncykge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVkaXJlY2Npb25cIiwgYXJncyk7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZS9cIiArIGFyZ3NdLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XG4gICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuXG4gICAgY29ydGUoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmljaW8gY29ydGVcIik7XG4gICAgICAgIHRoaXMuX3VzZXJNb2RlbC5mZXRjaCgpLnRoZW4odXN1YXJpbyA9PiB7XG4gICAgICAgICAgICB0aGlzLl9pbmljaW9TZXJ2aWNlLmdldENsaWVudGVJbmZvKHVzdWFyaW8uZW1haWwpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShpbmZvPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImluZm9cIjogSlNPTi5zdHJpbmdpZnkoaW5mbylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZS9jb3J0ZSddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0cnVuY2F0ZURhdGFiYXNlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRydW5jYXRlRGF0YWJhc2VcIik7XG4gICAgICAgIHRoaXMuX3VzZXJNb2RlbC50cnVuY2F0ZSgpO1xuICAgICAgICB0aGlzLl9jbGllbnRlTW9kZWwudHJ1bmNhdGUoKTtcbiAgICAgICAgdGhpcy5fdmVudGFNb2RlbC50cnVuY2F0ZSgpO1xuICAgICAgICB0aGlzLl90aXBvc01lZGlvc01vZGVsLnRydW5jYXRlKCk7XG4gICAgICAgIHRoaXMuX2NsaWVudGVzTWVkaW9zLnRydW5jYXRlKCk7XG4gICAgfVxuXG4gICAgc2FsaXIoKSB7XG4gICAgICAgIHRoaXMudHJ1bmNhdGVEYXRhYmFzZSgpO1xuICAgICAgICB0aGlzLnVzZXIgPSB7bmFtZTogXCJBbsOzbmltb1wifTtcbiAgICAgICAgYXBwU2V0dGluZ3MuY2xlYXIoKTsgLy9ib3JyYXIgdG9rZW4gc2VzaW9uXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvXCJdLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXIuc29saWNpdGFyID09IDEpIHtcbiAgICAgICAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcbiAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vID4+IHJldHVybmluZy1yZXN1bHRcbiAgICAgICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93TW9kYWwoUmVjdXBlcmFyQ29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0b3MgPSB7Y2xpZW50ZV9pZDogdGhpcy51c2VyLmNsaWVudGVfaWQsIGRhdG86IGRhdG99O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlLmNhbWJpYXJQYXNzd29yZChkYXRvcykuc3Vic2NyaWJlKGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNb2RlbC5jYW1iaWFyU29saWNpdHVkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlY3VwZXJhciBjb250cmFzZcOxYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxhIGNvbnRyYXNlw7FhIHNlIGhhIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9maWNpbmFDcmVkaXRvKCl7XG4gICAgICAgIGlmKHBsYXRmb3JtLmlzQW5kcm9pZCl7XG4gICAgICAgICAgICBwZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihhbmRyb2lkLk1hbmlmZXN0LnBlcm1pc3Npb24uQUNDRVNTX0NPQVJTRV9MT0NBVElPTiwgXCJOZWNlc2l0YW1vcyBvYnRlbmVyIHR1IHViaWNhY2nDs24gR1BTXCIpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV29vIEhvbywgSSBoYXZlIHRoZSBwb3dlciFcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY2Npb24oJ29maWNpbmFjcmVkaXRvJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVaCBvaCwgbm8gcGVybWlzc2lvbnMgLSBwbGFuIEIgdGltZSFcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRkFMTE9PT09PT09cIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNlIHsgdGhpcy5yZWRpcmVjY2lvbignb2ZpY2luYWNyZWRpdG8nKX1cbiAgICB9XG5cbn0iXX0=