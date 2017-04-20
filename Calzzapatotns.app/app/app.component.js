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
