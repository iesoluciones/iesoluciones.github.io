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
