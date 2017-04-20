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
