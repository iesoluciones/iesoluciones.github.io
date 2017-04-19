import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "ui/page";
import {VentaService} from "./venta.service";

import {ActivatedRoute, NavigationExtras} from "@angular/router";

@Component({
    selector: "venta",
    providers: [VentaService],
    templateUrl: "pages/venta/venta.html",
    styleUrls: ["pages/venta/venta.css"]
})
export class VentaComponent extends OnInit {

    public selectedIndex: number;

    ngOnInit(): void {
        this.page.actionBar.title="Mis Ventas";
    }

    constructor(private routerExtensions: RouterExtensions, private page:Page, private activatedRoute:ActivatedRoute){
        super();
        console.log("WHATS", "aqui andamos");
        if(activatedRoute.queryParams){
            activatedRoute.queryParams.subscribe(params => {
                if(params["tab"]){
                    console.log("TAB_RETORNADO", JSON.parse(params["tab"]));
                    this.selectedIndex = params["tab"];
                }else{
                    console.log("EL_TAB_RETORNADO", "No hay nada aun...");
                }
            });
        }
    }

    viewTicket(tab, id) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "tab": JSON.stringify(tab),
                "id": JSON.stringify(id)
            }
        };
        this.routerExtensions.navigate(['/home/ventas/ticket'], navigationExtras);
        //this.routerExtensions.navigate(["/home/ventas/ticket"]);
    }

}