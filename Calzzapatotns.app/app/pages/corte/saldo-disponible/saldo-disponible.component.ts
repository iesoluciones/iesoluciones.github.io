import {Component, OnInit} from "@angular/core";
import {CorteService} from "../corte.service";
import {UserModel} from "../../../model/user.model";
import {Page} from "ui/page";
import {ActivatedRoute} from "@angular/router";

/**
 * Created by iedeveloper on 23/03/17.
 */

@Component({
    selector: "saldoDisponible",
    providers: [CorteService,UserModel],
    templateUrl: "pages/corte/saldo-disponible/saldo-disponible.html",
    styleUrls: ["pages/corte/saldo-disponible/saldo-disponible.css"]
})

export class SaldoDisponibleComponent implements OnInit{

    ultimaActualizacion="";
    limiteCredito="0";
    saldo="0";
    creditoDisponible="0";
    estatus="";
    saldos:any;

    constructor(private page:Page,private activatedRoute: ActivatedRoute){
        activatedRoute.queryParams.subscribe(params => {
            this.saldos = JSON.parse(params["info"]);
            this.ultimaActualizacion=this.saldos.fecha;
            this.limiteCredito=this.saldos.limite;
            this.creditoDisponible=this.saldos.disponible;
            this.saldo=this.saldos.saldo;
            console.log("INFOOOOO=>",JSON.stringify(this.saldos));
        });
    }
    ngOnInit(): void {
        console.log("entra el  Saldo Disponible");
        this.page.actionBar.title="Saldo Disponible";
    }

    ngAfterViewInit() {

    }

}