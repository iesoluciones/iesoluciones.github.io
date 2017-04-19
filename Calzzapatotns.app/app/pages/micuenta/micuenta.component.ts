import {Component, OnInit, ViewChild, ElementRef, ViewContainerRef} from "@angular/core";
import {Router} from "@angular/router";
import {Page} from "ui/page";
import {Label} from "ui/label";
import {AnimationCurve} from "ui/enums";
import {DatePicker} from "ui/date-picker";
import {ModalDialogService, ModalDialogOptions} from "nativescript-angular/modal-dialog";
import {DatepickerComponent} from "../modals/datepicker/date-picker";
import {MapaComponent} from "../modals/mapa/mapa.component";
import moment = require("moment");
import {ClienteModel} from "../../model/cliente.model";
import {ClientesMediosModel} from "../../model/clientes_medios.model";
import {TiposMedioModel} from "../../model/tipos_medio.model";
import {MicuentaService} from "./micuenta.service";
var dialogs = require("ui/dialogs");
@Component({
    selector: "my-app",
    providers: [MicuentaService],
    templateUrl: "pages/micuenta/micuenta.html",
    styleUrls: ["pages/micuenta/css/micuenta.css"]
})
export class MicuentaComponent implements OnInit {
    public cte: any = {nombre: '1', medios: []};
    valor_inicial: string = "1";

    constructor(private router: Router,
                private _clienteModel: ClienteModel,
                private _clienteMediosModel: ClientesMediosModel,
                private _tiposMediosModel: TiposMedioModel,
                private page: Page,
                private vcRef: ViewContainerRef,
                private _modalService: ModalDialogService,
                private _micuentaService: MicuentaService) {
    }

    ngOnInit() {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Mi Cuenta";
        this._clienteModel.fetch().then(cliente => {
            console.log("Cliente 123=> ", JSON.stringify(cliente));
            this.cte = cliente;
            this._clienteMediosModel.fetch().then(medios => {
                console.log("MEDIOS=> ", JSON.stringify(medios));
                this.cte.medios = medios;
                this.onTap('label1');
                this.onTap('label2');
                this.onTap('label3');
            });
        });
    }

    configure(datePicker: DatePicker) {
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    }

    modalPicker() {
        //console.log("modalpICKER");
        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(DatepickerComponent, options)
            .then((dateresult: Date) => {
                let fecha = new Date(dateresult);
                //console.log("Fecha 123",fecha);
                //console.log("Fecha => ",moment(fecha, "MM-DD-YYYY"));
                //this.form.get('fecha').setValue(moment(dateresult).format('DD/MM/YYYY'));
            });
    }

    guardar() {
        //console.log("modalpICKER");
        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false,
            context:{latitude:this.cte.latitude,longitude:this.cte.longitude}
        };
        // >> returning-result
        this._modalService.showModal(MapaComponent, options)
            .then((data) => {
                if(data){
                    console.log("Geolocalizacion",JSON.stringify(data));
                    this._micuentaService.geolocalizacion(this.cte.codigo,data).subscribe(d=>{

                        this.cte.latitude = data.latitude;
                        this.cte.longitude = data.longitude;

                        let cltModel = this._clienteModel;
                        let c = this.cte;
                        dialogs.alert({
                            title: "Geolocalización",
                            message: "Se ha guardado la geolocalización.",
                            okButtonText: "Aceptar"
                        }).then(function () {
                            cltModel.geolocalizacion(c.codigo,data);
                        });
                    });
                }
            });
    }

    public onTap(lbl) {
        var label: Label = <Label> this.page.getViewById(lbl);
        label.animate({
            translate: {x: 0, y: -15},
            duration: 500,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    }

}