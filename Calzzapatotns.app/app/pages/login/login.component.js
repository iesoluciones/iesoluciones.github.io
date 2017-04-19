"use strict";
var core_1 = require("@angular/core");
var user_class_1 = require("./user.class");
var login_service_1 = require("./login.service");
var router_1 = require("@angular/router");
var user_model_1 = require("../../model/user.model");
var page_1 = require("ui/page");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var modal_view_1 = require("./modal/modal-view");
var nativescript_angular_1 = require("nativescript-angular");
var cliente_model_1 = require("../../model/cliente.model");
var tipos_medio_model_1 = require("../../model/tipos_medio.model");
var clientes_medios_model_1 = require("../../model/clientes_medios.model");
//registerElement("CheckBox", () => require("nativescript-checkbox").CheckBox);
var dialogs = require("ui/dialogs");
var appSettings = require("application-settings");
var enums_1 = require("ui/enums");
var application = require("application");
var permissions = require("nativescript-permissions");
var platform = require("platform");
var LoginComponent = (function () {
    //@ViewChild("CB1") FirstCheckBox: ElementRef;
    function LoginComponent(routerExtensions, router, loginService, _usuarioModel, _clienteModel, _clienteMediosModel, _tiposMediosModel, page, _modalService, vcRef, _tipoMedioModel) {
        this.routerExtensions = routerExtensions;
        this.router = router;
        this.loginService = loginService;
        this._usuarioModel = _usuarioModel;
        this._clienteModel = _clienteModel;
        this._clienteMediosModel = _clienteMediosModel;
        this._tiposMediosModel = _tiposMediosModel;
        this.page = page;
        this._modalService = _modalService;
        this.vcRef = vcRef;
        this._tipoMedioModel = _tipoMedioModel;
        this.isLoggingIn = true;
        this.plataforma = false;
        this.user = new user_class_1.User();
        this.user.email = "38289";
        this.user.password = "secret";
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._usuarioModel.fetch().then(function (usuario) {
            if (usuario) {
                console.log("Que chingados", usuario);
                _this.routerExtensions.navigate(["/home/inicio"], { clearHistory: true });
            }
            else {
                _this.routerExtensions.navigate(["/"], { clearHistory: true });
                _this.onTap('label1');
                _this.onTap('label2');
            }
        });
    };
    LoginComponent.prototype.onTap = function (lbl) {
        var label = this.page.getViewById(lbl);
        label.animate({
            translate: { x: 0, y: -15 },
            duration: 500,
            curve: enums_1.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Iniciar Sesión";
        this.onTap('label1');
        this.onTap('label2');
        if (application.android) {
            console.log("We are running on Android device!");
            this.plataforma = false;
        }
        else if (application.ios) {
            console.log("We are running on iOS device");
            this.plataforma = true;
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (platform.isAndroid) {
            permissions.requestPermission([android.Manifest.permission.WRITE_EXTERNAL_STORAGE, android.Manifest.permission.READ_EXTERNAL_STORAGE], "Necesitamos obtener tu ubicación GPS")
                .then(function () {
                console.log("Podemos escribir y leer memoria en marshmallow/Nougat");
                _this.loginService.login(_this.user)
                    .subscribe(function (data) {
                    _this.user = data.user;
                    console.log("USUARIO", JSON.stringify(_this.user));
                    console.log("CLIENTE", JSON.stringify(_this.user.cliente));
                    appSettings.setString("token", data.token);
                    _this._usuarioModel.insert(_this.user);
                    _this._clienteModel.insert(_this.user.cliente);
                    _this._clienteMediosModel.insert(_this.user.cliente.medios);
                    _this.loginService.sincronizacion().subscribe(function (d) {
                        console.log("SINCRONIZACION", JSON.stringify(d.tipos_medios));
                        _this.isLoggingIn = true;
                        _this.routerExtensions.navigate(["/home/inicio"], { clearHistory: true });
                        _this._tiposMediosModel.insert(d.tipos_medios);
                    });
                });
            })
                .catch(function () {
                console.log("Uh oh, no permissions - plan B time!");
                console.log("FALLOOOOOOO");
            });
        }
        else {
            this.loginService.login(this.user)
                .subscribe(function (data) {
                _this.user = data.user;
                console.log("USUARIO", JSON.stringify(_this.user));
                console.log("CLIENTE", JSON.stringify(_this.user.cliente));
                appSettings.setString("token", data.token);
                _this._usuarioModel.insert(_this.user);
                _this._clienteModel.insert(_this.user.cliente);
                _this._clienteMediosModel.insert(_this.user.cliente.medios);
                _this.loginService.sincronizacion().subscribe(function (d) {
                    console.log("SINCRONIZACION", JSON.stringify(d.tipos_medios));
                    _this.isLoggingIn = true;
                    _this.routerExtensions.navigate(["/home/inicio"], { clearHistory: true });
                    _this._tiposMediosModel.insert(d.tipos_medios);
                });
            });
        }
    };
    LoginComponent.prototype.recuperarPassword = function () {
        var _this = this;
        //console.log("recuperarPassword");
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(modal_view_1.ModalViewComponent, options)
            .then(function (dato) {
            _this.loginService.recuperarPassword(dato).subscribe(function (d) {
                dialogs.alert({
                    title: "Recuperar contraseña",
                    message: "Se ha enviado su nueva contraseña a su correo.",
                    okButtonText: "Aceptar"
                }).then(function () {
                });
            });
        });
    };
    __decorate([
        core_1.ViewChild("container"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "container", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [login_service_1.LoginService],
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }), 
        __metadata('design:paramtypes', [nativescript_angular_1.RouterExtensions, router_1.Router, login_service_1.LoginService, user_model_1.UserModel, cliente_model_1.ClienteModel, clientes_medios_model_1.ClientesMediosModel, tipos_medio_model_1.TiposMedioModel, page_1.Page, modal_dialog_1.ModalDialogService, core_1.ViewContainerRef, tipos_medio_model_1.TiposMedioModel])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBd0csZUFBZSxDQUFDLENBQUE7QUFDeEgsMkJBQW1CLGNBQWMsQ0FBQyxDQUFBO0FBQ2xDLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDJCQUF3Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ2pELHFCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUU3Qiw2QkFBcUQsbUNBQW1DLENBQUMsQ0FBQTtBQUN6RiwyQkFBaUMsb0JBQW9CLENBQUMsQ0FBQTtBQUN0RCxxQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUN0RCw4QkFBMkIsMkJBQTJCLENBQUMsQ0FBQTtBQUN2RCxrQ0FBOEIsK0JBQStCLENBQUMsQ0FBQTtBQUM5RCxzQ0FBa0MsbUNBQW1DLENBQUMsQ0FBQTtBQUN0RSwrRUFBK0U7QUFDL0UsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3BDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRWxELHNCQUE2QixVQUFVLENBQUMsQ0FBQTtBQUN4QyxJQUFZLFdBQVcsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUUzQyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUUsMEJBQTBCLENBQUUsQ0FBQztBQUN4RCxJQUFZLFFBQVEsV0FBTSxVQUFVLENBQUMsQ0FBQTtBQVFyQztJQUtJLDhDQUE4QztJQUU5Qyx3QkFBb0IsZ0JBQWtDLEVBQ2xDLE1BQWMsRUFDZCxZQUEwQixFQUMxQixhQUF3QixFQUN4QixhQUEyQixFQUMzQixtQkFBd0MsRUFDeEMsaUJBQWtDLEVBQ2xDLElBQVUsRUFDVixhQUFpQyxFQUNqQyxLQUF1QixFQUN2QixlQUFnQztRQVZoQyxxQkFBZ0IsR0FBaEIsZ0JB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QUEsQ0FBQztnQkFDakQsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDVixLQUFLLEVBQUUsc0JBQXNCO29CQUM3QixPQUFPLEVBQUUsZ0RBQWdEO29CQUN6RCxZQUFZLEVBQUUsU0FBUztpQkFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDUixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBeEhEO1FBQUMsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7O3FEQUFBO0lBVjNCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztTQUN2RSxDQUFDOztzQkFBQTtJQThIRixxQkFBQztBQUFELENBQUMsQUE3SEQsSUE2SEM7QUE3SFksc0JBQWMsaUJBNkgxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBJbmplY3RhYmxlLCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlci5jbGFzc1wiO1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1VzZXJNb2RlbH0gZnJvbSBcIi4uLy4uL21vZGVsL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7cmVnaXN0ZXJFbGVtZW50fSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHtNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHtNb2RhbFZpZXdDb21wb25lbnR9IGZyb20gXCIuL21vZGFsL21vZGFsLXZpZXdcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge0NsaWVudGVNb2RlbH0gZnJvbSBcIi4uLy4uL21vZGVsL2NsaWVudGUubW9kZWxcIjtcbmltcG9ydCB7VGlwb3NNZWRpb01vZGVsfSBmcm9tIFwiLi4vLi4vbW9kZWwvdGlwb3NfbWVkaW8ubW9kZWxcIjtcbmltcG9ydCB7Q2xpZW50ZXNNZWRpb3NNb2RlbH0gZnJvbSBcIi4uLy4uL21vZGVsL2NsaWVudGVzX21lZGlvcy5tb2RlbFwiO1xuLy9yZWdpc3RlckVsZW1lbnQoXCJDaGVja0JveFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNoZWNrYm94XCIpLkNoZWNrQm94KTtcbnZhciBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5pbXBvcnQge0xhYmVsfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7QW5pbWF0aW9uQ3VydmV9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XG52YXIgcGVybWlzc2lvbnMgPSByZXF1aXJlKCBcIm5hdGl2ZXNjcmlwdC1wZXJtaXNzaW9uc1wiICk7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwicGxhdGZvcm1cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgcHJvdmlkZXJzOiBbTG9naW5TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VyOiBVc2VyO1xuICAgIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgICBwbGF0YWZvcm1hID0gZmFsc2U7XG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgLy9AVmlld0NoaWxkKFwiQ0IxXCIpIEZpcnN0Q2hlY2tCb3g6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3VzdWFyaW9Nb2RlbDogVXNlck1vZGVsLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NsaWVudGVNb2RlbDogQ2xpZW50ZU1vZGVsLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NsaWVudGVNZWRpb3NNb2RlbDogQ2xpZW50ZXNNZWRpb3NNb2RlbCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF90aXBvc01lZGlvc01vZGVsOiBUaXBvc01lZGlvTW9kZWwsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfdGlwb01lZGlvTW9kZWw6IFRpcG9zTWVkaW9Nb2RlbCwpIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCIzODI4OVwiO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcInNlY3JldFwiO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5fdXN1YXJpb01vZGVsLmZldGNoKCkudGhlbih1c3VhcmlvID0+IHtcbiAgICAgICAgICAgIGlmICh1c3VhcmlvKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJRdWUgY2hpbmdhZG9zXCIsdXN1YXJpbyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lL2luaWNpb1wiXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL1wiXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMub25UYXAoJ2xhYmVsMScpO1xuICAgICAgICAgICAgICAgIHRoaXMub25UYXAoJ2xhYmVsMicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25UYXAobGJsKSB7XG4gICAgICAgIHZhciBsYWJlbDogTGFiZWwgPSA8TGFiZWw+IHRoaXMucGFnZS5nZXRWaWV3QnlJZChsYmwpO1xuICAgICAgICBsYWJlbC5hbmltYXRlKHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZToge3g6IDAsIHk6IC0xNX0sXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDAuMSwgMC4xLCAwLjEsIDEpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvL3RoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFyLnRpdGxlID0gXCJJbmljaWFyIFNlc2nDs25cIjtcbiAgICAgICAgdGhpcy5vblRhcCgnbGFiZWwxJyk7XG4gICAgICAgIHRoaXMub25UYXAoJ2xhYmVsMicpO1xuXG4gICAgICAgIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlIGFyZSBydW5uaW5nIG9uIEFuZHJvaWQgZGV2aWNlIVwiKTtcbiAgICAgICAgICAgIHRoaXMucGxhdGFmb3JtYSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGFwcGxpY2F0aW9uLmlvcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXZSBhcmUgcnVubmluZyBvbiBpT1MgZGV2aWNlXCIpO1xuICAgICAgICAgICAgdGhpcy5wbGF0YWZvcm1hID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICBpZihwbGF0Zm9ybS5pc0FuZHJvaWQpe1xuICAgICAgICAgICAgcGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oW2FuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5XUklURV9FWFRFUk5BTF9TVE9SQUdFLGFuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5SRUFEX0VYVEVSTkFMX1NUT1JBR0VdLCBcIk5lY2VzaXRhbW9zIG9idGVuZXIgdHUgdWJpY2FjacOzbiBHUFNcIilcbiAgICAgICAgICAgICAgICAudGhlbigoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQb2RlbW9zIGVzY3JpYmlyIHkgbGVlciBtZW1vcmlhIGVuIG1hcnNobWFsbG93L05vdWdhdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW4odGhpcy51c2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBkYXRhLnVzZXIgYXMgVXNlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVTVUFSSU9cIiwgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDTElFTlRFXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlci5jbGllbnRlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidG9rZW5cIiwgZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXN1YXJpb01vZGVsLmluc2VydCh0aGlzLnVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsaWVudGVNb2RlbC5pbnNlcnQodGhpcy51c2VyLmNsaWVudGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsaWVudGVNZWRpb3NNb2RlbC5pbnNlcnQodGhpcy51c2VyLmNsaWVudGUubWVkaW9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5zaW5jcm9uaXphY2lvbigpLnN1YnNjcmliZShkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTSU5DUk9OSVpBQ0lPTlwiLCBKU09OLnN0cmluZ2lmeShkLnRpcG9zX21lZGlvcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lL2luaWNpb1wiXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90aXBvc01lZGlvc01vZGVsLmluc2VydChkLnRpcG9zX21lZGlvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVaCBvaCwgbm8gcGVybWlzc2lvbnMgLSBwbGFuIEIgdGltZSFcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRkFMTE9PT09PT09cIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNlIHsgdGhpcy5sb2dpblNlcnZpY2UubG9naW4odGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBkYXRhLnVzZXIgYXMgVXNlcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVTVUFSSU9cIiwgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDTElFTlRFXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlci5jbGllbnRlKSk7XG4gICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidG9rZW5cIiwgZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXN1YXJpb01vZGVsLmluc2VydCh0aGlzLnVzZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsaWVudGVNb2RlbC5pbnNlcnQodGhpcy51c2VyLmNsaWVudGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsaWVudGVNZWRpb3NNb2RlbC5pbnNlcnQodGhpcy51c2VyLmNsaWVudGUubWVkaW9zKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5zaW5jcm9uaXphY2lvbigpLnN1YnNjcmliZShkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTSU5DUk9OSVpBQ0lPTlwiLCBKU09OLnN0cmluZ2lmeShkLnRpcG9zX21lZGlvcykpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lL2luaWNpb1wiXSwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90aXBvc01lZGlvc01vZGVsLmluc2VydChkLnRpcG9zX21lZGlvcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTt9XG5cblxuICAgIH1cblxuICAgIHJlY3VwZXJhclBhc3N3b3JkKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVjdXBlcmFyUGFzc3dvcmRcIik7XG4gICAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgLy8gPj4gcmV0dXJuaW5nLXJlc3VsdFxuICAgICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKE1vZGFsVmlld0NvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChkYXRvKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UucmVjdXBlcmFyUGFzc3dvcmQoZGF0bykuc3Vic2NyaWJlKGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlY3VwZXJhciBjb250cmFzZcOxYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTZSBoYSBlbnZpYWRvIHN1IG51ZXZhIGNvbnRyYXNlw7FhIGEgc3UgY29ycmVvLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il19