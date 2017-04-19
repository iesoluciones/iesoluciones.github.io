import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "ui/page";

//import { registerElement } from "nativescript-angular/element-registry";
import {ValeService} from "../vale.service";
import {ClienteModel} from "../../../model/cliente.model";
//registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

@Component({
    selector: "my-app-vales",
    providers: [ValeService],
    templateUrl: "pages/vales/listado/listado-vale.html",
    styleUrls: ["pages/vales/css/vale.css"]
})
export class ListadoValeComponent implements OnInit {
    public vales: any[];
    listLoaded = false;
    constructor(private routerExtensions: RouterExtensions, private page: Page, private _valeService: ValeService, private _clienteModel : ClienteModel) {
        this._clienteModel.fetch().then(cliente=>{
            this._valeService.index(cliente.codigo).subscribe(vales => {
                console.log(JSON.stringify(vales));
                this.vales = vales;
                this.listLoaded = true;
            });
        });
    }

    ngOnInit() {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Mis Vales";

    }
    nuevo() {
        this.routerExtensions.navigate(["/home/vale/create"]);

    }
}