import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "ui/page";
import {ClienteService} from "../cliente.service";

import { registerElement } from "nativescript-angular/element-registry";
import {NavigationExtras} from "@angular/router";
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

@Component({
    selector: "my-app-clientes",
    providers: [ClienteService],
    templateUrl: "pages/cliente/listado/listado-cliente.html",
    styleUrls: ["pages/cliente/css/cliente.css"]
})
export class ListadoClienteComponent implements OnInit {
    public clientes: any[];
    listLoaded = false;
    constructor(private routerExtensions: RouterExtensions, private page: Page, private _clienteService: ClienteService) {
        this._clienteService.index().subscribe(clientes => {
            this.clientes = clientes.data;
            this.listLoaded = true;
        });
    }

    ngOnInit() {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Mis Clientes";
    }
    nuevo() {
        this.routerExtensions.navigate(["/home/cliente/create"]);
    }

    detalle(item){
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "detalle": JSON.stringify(item)
            }
        };
        this.routerExtensions.navigate(['/home/cliente/detalle'], navigationExtras);
    }
}