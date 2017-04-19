/**
 * Created by iedeveloper on 17/02/17.
 */
import {Component, OnInit} from "@angular/core";
import * as elementRegistryModule from 'nativescript-angular/element-registry';
import {ActivatedRoute, Router, NavigationExtras} from "@angular/router";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "ui/page";
import {Color} from "color";
import {VentaService} from "../venta.service";

import * as application from "application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "application";
import { isAndroid } from "platform";

//elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);
@Component({
    selector: "ticket",
    providers: [VentaService],
    templateUrl: "pages/venta/ticket/ticket.html",
    styleUrls: ["pages/venta/ticket/ticket.css"]
})

export class TicketComponent extends OnInit {

    current_tab:any;
    current_id:any;

    ngOnInit(): void {
        this.page.actionBar.title="Ticket de Compra";
        this.page.backgroundColor=new Color("#EEEEEE");

        if (isAndroid) {
            application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
                //if (this.router.isActive("/home/ventas", false)) { data.cancel = true; // prevents default back button behavior }

                data.cancel = true; // prevents default back button behavior
                //this.routerExtensions.navigate(['/home/ventas']);
                console.log("BACK_PRESED", JSON.stringify(this.current_tab));
                let navigationExtras: NavigationExtras = {
                    queryParams: {
                        "tab": JSON.stringify(this.current_tab)
                    }
                };
                this.routerExtensions.navigate(['/home/ventas'], navigationExtras);
            });
        }
    }

    constructor(private page:Page, private router:Router, private routerExtensions: RouterExtensions, private activatedRoute:ActivatedRoute){
        super();

        activatedRoute.queryParams.subscribe(params => {
            this.current_tab = JSON.parse(params["tab"]);
            this.current_id = JSON.parse(params["id"]);
            console.log("RECEIVED_TAB", JSON.stringify(this.current_tab));
        });

    }

}