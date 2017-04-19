/**
 * Created by iedeveloper on 15/02/17.
 */
import {Component, OnInit, LOCALE_ID} from "@angular/core";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {Page} from "ui/page";
import {RouterExtensions} from "nativescript-angular";
@Component({
    selector: "corte",
    providers: [{ provide: LOCALE_ID, useValue: "es-MX" }],
    templateUrl: "pages/corte/corte.html",
    styleUrls: ["pages/corte/corte.css"]
})

export class CorteComponent implements OnInit{
    info: any;
    saldo="";
    pagoMinimo="";


    constructor(private page:Page,private activatedRoute: ActivatedRoute,private routerExtensions: RouterExtensions, private router:Router){
        activatedRoute.queryParams.subscribe(params => {
            this.info = JSON.parse(params["info"]);
            console.log("INFOOOOO=>",JSON.stringify(this.info));
        });
    }

    ngOnInit(): void {
        this.page.actionBar.title="Corte y Saldo";
    }

    referenciabanc(){
        this.routerExtensions.navigate(["/home/referenciabancaria"]);
    }
    saldoDisponible(){
        console.log("Tap corte");
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "info": JSON.stringify(this.info)
            }
        };
        this.router.navigate(['/home/saldo-disponible'], navigationExtras);
    }

    redireccion(args) {
        this.router.navigate(["/home/" + args]);
    }
}