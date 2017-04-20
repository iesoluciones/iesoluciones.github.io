"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var enums_1 = require("ui/enums");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var date_picker_1 = require("../modals/datepicker/date-picker");
var mapa_component_1 = require("../modals/mapa/mapa.component");
var cliente_model_1 = require("../../model/cliente.model");
var clientes_medios_model_1 = require("../../model/clientes_medios.model");
var tipos_medio_model_1 = require("../../model/tipos_medio.model");
var micuenta_service_1 = require("./micuenta.service");
var dialogs = require("ui/dialogs");
var MicuentaComponent = (function () {
    function MicuentaComponent(router, _clienteModel, _clienteMediosModel, _tiposMediosModel, page, vcRef, _modalService, _micuentaService) {
        this.router = router;
        this._clienteModel = _clienteModel;
        this._clienteMediosModel = _clienteMediosModel;
        this._tiposMediosModel = _tiposMediosModel;
        this.page = page;
        this.vcRef = vcRef;
        this._modalService = _modalService;
        this._micuentaService = _micuentaService;
        this.cte = { nombre: '1', medios: [] };
        this.valor_inicial = "1";
    }
    MicuentaComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Mi Cuenta";
        this._clienteModel.fetch().then(function (cliente) {
            console.log("Cliente 123=> ", JSON.stringify(cliente));
            _this.cte = cliente;
            _this._clienteMediosModel.fetch().then(function (medios) {
                console.log("MEDIOS=> ", JSON.stringify(medios));
                _this.cte.medios = medios;
                _this.onTap('label1');
                _this.onTap('label2');
                _this.onTap('label3');
            });
        });
    };
    MicuentaComponent.prototype.configure = function (datePicker) {
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    };
    MicuentaComponent.prototype.modalPicker = function () {
        //console.log("modalpICKER");
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(date_picker_1.DatepickerComponent, options)
            .then(function (dateresult) {
            var fecha = new Date(dateresult);
            //console.log("Fecha 123",fecha);
            //console.log("Fecha => ",moment(fecha, "MM-DD-YYYY"));
            //this.form.get('fecha').setValue(moment(dateresult).format('DD/MM/YYYY'));
        });
    };
    MicuentaComponent.prototype.guardar = function () {
        var _this = this;
        //console.log("modalpICKER");
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false,
            context: { latitude: this.cte.latitude, longitude: this.cte.longitude }
        };
        // >> returning-result
        this._modalService.showModal(mapa_component_1.MapaComponent, options)
            .then(function (data) {
            if (data) {
                console.log("Geolocalizacion", JSON.stringify(data));
                _this._micuentaService.geolocalizacion(_this.cte.codigo, data).subscribe(function (d) {
                    _this.cte.latitude = data.latitude;
                    _this.cte.longitude = data.longitude;
                    var cltModel = _this._clienteModel;
                    var c = _this.cte;
                    dialogs.alert({
                        title: "Geolocalización",
                        message: "Se ha guardado la geolocalización.",
                        okButtonText: "Aceptar"
                    }).then(function () {
                        cltModel.geolocalizacion(c.codigo, data);
                    });
                });
            }
        });
    };
    MicuentaComponent.prototype.onTap = function (lbl) {
        var label = this.page.getViewById(lbl);
        label.animate({
            translate: { x: 0, y: -15 },
            duration: 500,
            curve: enums_1.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    };
    MicuentaComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [micuenta_service_1.MicuentaService],
            templateUrl: "pages/micuenta/micuenta.html",
            styleUrls: ["pages/micuenta/css/micuenta.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, cliente_model_1.ClienteModel, clientes_medios_model_1.ClientesMediosModel, tipos_medio_model_1.TiposMedioModel, page_1.Page, core_1.ViewContainerRef, modal_dialog_1.ModalDialogService, micuenta_service_1.MicuentaService])
    ], MicuentaComponent);
    return MicuentaComponent;
}());
exports.MicuentaComponent = MicuentaComponent;
