/**
 * Created by iedeveloper on 17/02/17.
 */
import {Component, OnInit} from "@angular/core";
import * as elementRegistryModule from 'nativescript-angular/element-registry';
import {ActivatedRoute} from "@angular/router";
import {Page} from "ui/page";
import {Color} from "color";

var phone = require("nativescript-phone");

elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);
@Component({
    selector: "detalle-cliente",
    providers: [],
    templateUrl: "pages/cliente/detalle/cliente-detalle.html",
    styleUrls: ["pages/cliente/detalle/cliente-detalle.css"]
})

export class ClienteDetalleComponent extends OnInit {
    detalle:any;

    public selectedIndex: number;

    ngOnInit(): void {
        this.page.actionBar.title=this.detalle.nombre+" "+this.detalle.paterno+" "+this.detalle.materno;
        this.page.backgroundColor=new Color("#EEEEEE");
    }

    constructor(private page:Page, private activatedRoute:ActivatedRoute){
        super();
        activatedRoute.queryParams.subscribe(params => {
            this.detalle = JSON.parse(params["detalle"]);
            console.log(JSON.stringify(this.detalle));
        });
    }

    call() {
        if(this.detalle.celular){
           phone.dial(this.detalle.celular, true);
        }
    }

}