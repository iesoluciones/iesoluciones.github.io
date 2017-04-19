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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljdWVudGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWljdWVudGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBeUUsZUFBZSxDQUFDLENBQUE7QUFDekYsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBRTdCLHNCQUE2QixVQUFVLENBQUMsQ0FBQTtBQUV4Qyw2QkFBcUQsbUNBQW1DLENBQUMsQ0FBQTtBQUN6Riw0QkFBa0Msa0NBQWtDLENBQUMsQ0FBQTtBQUNyRSwrQkFBNEIsK0JBQStCLENBQUMsQ0FBQTtBQUU1RCw4QkFBMkIsMkJBQTJCLENBQUMsQ0FBQTtBQUN2RCxzQ0FBa0MsbUNBQW1DLENBQUMsQ0FBQTtBQUN0RSxrQ0FBOEIsK0JBQStCLENBQUMsQ0FBQTtBQUM5RCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFPcEM7SUFJSSwyQkFBb0IsTUFBYyxFQUNkLGFBQTJCLEVBQzNCLG1CQUF3QyxFQUN4QyxpQkFBa0MsRUFDbEMsSUFBVSxFQUNWLEtBQXVCLEVBQ3ZCLGFBQWlDLEVBQ2pDLGdCQUFpQztRQVBqQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWlCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFDakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQVY5QyxRQUFHLEdBQVEsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQztRQUM1QyxrQkFB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OEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQ2pELENBQUM7O3lCQUFBO0lBK0ZGLHdCQUFDO0FBQUQsQ0FBQyxBQTlGRCxJQThGQztBQTlGWSx5QkFBaUIsb0JBOEY3QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7TGFiZWx9IGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IHtBbmltYXRpb25DdXJ2ZX0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQge0RhdGVQaWNrZXJ9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xuaW1wb3J0IHtNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHtEYXRlcGlja2VyQ29tcG9uZW50fSBmcm9tIFwiLi4vbW9kYWxzL2RhdGVwaWNrZXIvZGF0ZS1waWNrZXJcIjtcbmltcG9ydCB7TWFwYUNvbXBvbmVudH0gZnJvbSBcIi4uL21vZGFscy9tYXBhL21hcGEuY29tcG9uZW50XCI7XG5pbXBvcnQgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcbmltcG9ydCB7Q2xpZW50ZU1vZGVsfSBmcm9tIFwiLi4vLi4vbW9kZWwvY2xpZW50ZS5tb2RlbFwiO1xuaW1wb3J0IHtDbGllbnRlc01lZGlvc01vZGVsfSBmcm9tIFwiLi4vLi4vbW9kZWwvY2xpZW50ZXNfbWVkaW9zLm1vZGVsXCI7XG5pbXBvcnQge1RpcG9zTWVkaW9Nb2RlbH0gZnJvbSBcIi4uLy4uL21vZGVsL3RpcG9zX21lZGlvLm1vZGVsXCI7XG5pbXBvcnQge01pY3VlbnRhU2VydmljZX0gZnJvbSBcIi4vbWljdWVudGEuc2VydmljZVwiO1xudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHByb3ZpZGVyczogW01pY3VlbnRhU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbWljdWVudGEvbWljdWVudGEuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbWljdWVudGEvY3NzL21pY3VlbnRhLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBNaWN1ZW50YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGN0ZTogYW55ID0ge25vbWJyZTogJzEnLCBtZWRpb3M6IFtdfTtcbiAgICB2YWxvcl9pbmljaWFsOiBzdHJpbmcgPSBcIjFcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY2xpZW50ZU1vZGVsOiBDbGllbnRlTW9kZWwsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY2xpZW50ZU1lZGlvc01vZGVsOiBDbGllbnRlc01lZGlvc01vZGVsLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3RpcG9zTWVkaW9zTW9kZWw6IFRpcG9zTWVkaW9Nb2RlbCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9taWN1ZW50YVNlcnZpY2U6IE1pY3VlbnRhU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvL3RoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFyLnRpdGxlID0gXCJNaSBDdWVudGFcIjtcbiAgICAgICAgdGhpcy5fY2xpZW50ZU1vZGVsLmZldGNoKCkudGhlbihjbGllbnRlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpZW50ZSAxMjM9PiBcIiwgSlNPTi5zdHJpbmdpZnkoY2xpZW50ZSkpO1xuICAgICAgICAgICAgdGhpcy5jdGUgPSBjbGllbnRlO1xuICAgICAgICAgICAgdGhpcy5fY2xpZW50ZU1lZGlvc01vZGVsLmZldGNoKCkudGhlbihtZWRpb3MgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTUVESU9TPT4gXCIsIEpTT04uc3RyaW5naWZ5KG1lZGlvcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3RlLm1lZGlvcyA9IG1lZGlvcztcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGFwKCdsYWJlbDEnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGFwKCdsYWJlbDInKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGFwKCdsYWJlbDMnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25maWd1cmUoZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcikge1xuICAgICAgICBkYXRlUGlja2VyLnllYXIgPSAxOTgwO1xuICAgICAgICBkYXRlUGlja2VyLm1vbnRoID0gMjtcbiAgICAgICAgZGF0ZVBpY2tlci5kYXkgPSA5O1xuICAgICAgICBkYXRlUGlja2VyLm1pbkRhdGUgPSBuZXcgRGF0ZSgxOTc1LCAwLCAyOSk7XG4gICAgICAgIGRhdGVQaWNrZXIubWF4RGF0ZSA9IG5ldyBEYXRlKDIwNDUsIDQsIDEyKTtcbiAgICB9XG5cbiAgICBtb2RhbFBpY2tlcigpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm1vZGFscElDS0VSXCIpO1xuICAgICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIC8vID4+IHJldHVybmluZy1yZXN1bHRcbiAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3dNb2RhbChEYXRlcGlja2VyQ29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGVyZXN1bHQ6IERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZmVjaGEgPSBuZXcgRGF0ZShkYXRlcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRmVjaGEgMTIzXCIsZmVjaGEpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJGZWNoYSA9PiBcIixtb21lbnQoZmVjaGEsIFwiTU0tREQtWVlZWVwiKSk7XG4gICAgICAgICAgICAgICAgLy90aGlzLmZvcm0uZ2V0KCdmZWNoYScpLnNldFZhbHVlKG1vbWVudChkYXRlcmVzdWx0KS5mb3JtYXQoJ0REL01NL1lZWVknKSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBndWFyZGFyKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwibW9kYWxwSUNLRVJcIik7XG4gICAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgICBjb250ZXh0OntsYXRpdHVkZTp0aGlzLmN0ZS5sYXRpdHVkZSxsb25naXR1ZGU6dGhpcy5jdGUubG9uZ2l0dWRlfVxuICAgICAgICB9O1xuICAgICAgICAvLyA+PiByZXR1cm5pbmctcmVzdWx0XG4gICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93TW9kYWwoTWFwYUNvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2VvbG9jYWxpemFjaW9uXCIsSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9taWN1ZW50YVNlcnZpY2UuZ2VvbG9jYWxpemFjaW9uKHRoaXMuY3RlLmNvZGlnbyxkYXRhKS5zdWJzY3JpYmUoZD0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0ZS5sYXRpdHVkZSA9IGRhdGEubGF0aXR1ZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0ZS5sb25naXR1ZGUgPSBkYXRhLmxvbmdpdHVkZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsdE1vZGVsID0gdGhpcy5fY2xpZW50ZU1vZGVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSB0aGlzLmN0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkdlb2xvY2FsaXphY2nDs25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlNlIGhhIGd1YXJkYWRvIGxhIGdlb2xvY2FsaXphY2nDs24uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2x0TW9kZWwuZ2VvbG9jYWxpemFjaW9uKGMuY29kaWdvLGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcChsYmwpIHtcbiAgICAgICAgdmFyIGxhYmVsOiBMYWJlbCA9IDxMYWJlbD4gdGhpcy5wYWdlLmdldFZpZXdCeUlkKGxibCk7XG4gICAgICAgIGxhYmVsLmFuaW1hdGUoe1xuICAgICAgICAgICAgdHJhbnNsYXRlOiB7eDogMCwgeTogLTE1fSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuY3ViaWNCZXppZXIoMC4xLCAwLjEsIDAuMSwgMSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il19