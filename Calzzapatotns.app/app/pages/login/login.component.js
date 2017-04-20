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
