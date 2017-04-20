"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var referenciabancaria_service_1 = require("./referenciabancaria.service");
var page_1 = require("ui/page");
var cliente_model_1 = require("../../model/cliente.model");
var dialogs = require("ui/dialogs");
var ReferenciabancariaComponent = (function () {
    function ReferenciabancariaComponent(router, _referenciabancariaService, page, _clienteModel) {
        this.router = router;
        this._referenciabancariaService = _referenciabancariaService;
        this.page = page;
        this._clienteModel = _clienteModel;
    }
    ReferenciabancariaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page.actionBar.title = "Referencias Bancarias";
        this._clienteModel.fetch().then(function (cliente) {
            console.log("cliente", JSON.stringify(cliente));
            if (cliente) {
                _this._referenciabancariaService.getReferenciasBancarias(cliente.codigo).subscribe(function (referencias) {
                    _this.referencias = referencias.ReferenciasBancarias;
                    console.log("referencias123=> ", JSON.stringify(_this.referencias));
                });
                _this._referenciabancariaService.getReferenciasBancariasGenericas(cliente.codigo).subscribe(function (referenciasg) {
                    _this.referenciasg = referenciasg;
                    console.log("referenciasGenericas123=> ", JSON.stringify(_this.referencias));
                });
            }
        });
    };
    ReferenciabancariaComponent = __decorate([
        core_1.Component({
            selector: "my-app-reterenciasbancarias",
            providers: [referenciabancaria_service_1.ReferenciabancariaService, { provide: core_1.LOCALE_ID, useValue: "es-MX" }],
            //templateUrl: "pages/referenciasbancarias/referenciabancaria.html",
            template: "\n    <GridLayout rows=\"*\" height=\"100%\" width=\"100%\">\n        <TabView #element [(ngModel)]=\"selectedIndex\">\n            <GridLayout width=\"100%\" height=\"100%\" *tabItem=\"{title: 'PARA CORTE'}\">\n                <StackLayout row=\"0\">\n                   <ListView [items]='referencias' width=\"100%\" height=\"100%\">\n                       <template let-item='item'>\n                           <GridLayout style=\"background-color: #EAEAEA\">\n                               <GridLayout columns=\"100,*\" rows=\"auto,auto,auto\" class=\"cobrado\">\n                                   <Label col=\"0\" row=\"0\" text=\"{{item.Entidad}}\" style=\"text-align: left\"></Label>\n                                   <Label col=\"1\" row=\"0\" text=\"{{item.FechaPago | date: 'dd MMM yyyy'}}\" style=\"text-align: right\"></Label>\n                                   \n                                   <Label col=\"0\" row=\"1\" text=\"Convenio\" style=\"text-align: left\"></Label>\n                                   <Label col=\"1\" row=\"1\" text=\"{{item.Convenio}}\" style=\"text-align: right\"></Label>\n                                   \n                                   <Label col=\"0\" row=\"2\" text=\"Referencia\" style=\"text-align: left\"></Label>\n                                   <Label col=\"1\" row=\"2\" text=\"{{item.Referencia}}\" style=\"text-align: right\" textWrap=\"true\"></Label>\n                               </GridLayout>\n                           </GridLayout>\n                       </template>\n                   </ListView>\n                </StackLayout>\n            </GridLayout>\n            <GridLayout *tabItem=\"{title: 'GENERALES'}\" style=\"background-color: #EAEAEA\">\n                <StackLayout row=\"0\">\n                   <ListView [items]='referenciasg' width=\"100%\" height=\"100%\">\n                       <template let-item='item'>\n                           <GridLayout style=\"background-color: #EAEAEA\">\n                               <GridLayout columns=\"100,*\" rows=\"auto,auto,auto\" class=\"cobrado\">\n                                   <Label col=\"0\" row=\"0\" colSpan=\"2\" text=\"{{item.Banco}}\" style=\"text-align: left\"></Label>\n                                   <!--<Label col=\"1\" row=\"0\" text=\"{{item.FechaPago | date: 'dd MMM yyyy'}}\" style=\"text-align: right\"></Label>-->\n                                   \n                                   <Label col=\"0\" row=\"1\" text=\"Cuenta\" style=\"text-align: left\"></Label>\n                                   <Label col=\"1\" row=\"1\" text=\"{{item.Cuenta}}\" style=\"text-align: right\"></Label>\n                                   \n                                   <Label col=\"0\" row=\"2\" text=\"Referencia\" style=\"text-align: left\"></Label>\n                                   <Label col=\"1\" row=\"2\" text=\"{{item.Referencia}}\" style=\"text-align: right\" textWrap=\"true\"></Label>\n                               </GridLayout>\n                           </GridLayout>\n                       </template>\n                   </ListView>\n                </StackLayout>\n            </GridLayout>\n        </TabView>\n    </GridLayout>\n",
            styleUrls: ["pages/referenciasbancarias/css/referenciabancaria.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, referenciabancaria_service_1.ReferenciabancariaService, page_1.Page, cliente_model_1.ClienteModel])
    ], ReferenciabancariaComponent);
    return ReferenciabancariaComponent;
}());
exports.ReferenciabancariaComponent = ReferenciabancariaComponent;
