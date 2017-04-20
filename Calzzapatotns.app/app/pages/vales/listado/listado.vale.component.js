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
