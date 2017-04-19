import {Component, OnInit, LOCALE_ID} from "@angular/core";
import {Page} from "ui/page";
import {GridLayout} from "ui/layouts/grid-layout";
import {Router, NavigationExtras} from "@angular/router";
import {ClienteModel} from "../../model/cliente.model";
import {VentaModel} from "../../model/venta.model";
import {InicioService} from "./inicio.service";
import {UserModel} from "../../model/user.model";
import moment = require("moment");
declare var android: any;
var permissions = require( "nativescript-permissions" );
import * as platform from "platform";
moment.locale('es');
@Component({
    selector: "inicio-inc",
    templateUrl: "pages/inicio/inicio.component.html",
    styleUrls: ["pages/inicio/inicio-common.css", "pages/inicio/inicio.css"],
    providers:[InicioService,{ provide: LOCALE_ID, useValue: "es-MX" }]
})

export class InicioComponent implements OnInit {
    extenderSaldo=true;
    clienteSaldo:any;
    fecha="";
    disponible="0";
    pagoMinimo="0";

    public user: any = {};

    constructor(private page:Page, private router:Router, private _clienteModel: ClienteModel, private _inicioService: InicioService,  private _userModel: UserModel,
                private _ventaModel: VentaModel){
        console.log("constructor");
    }

    ngOnInit(): void {
        this.page.actionBar.title="Inicio";
    }

    ngAfterViewInit() {
        this._clienteModel.fetch().then(usuario => {
            this._inicioService.getClienteInfo(usuario.codigo)
                .subscribe(info=>{
                    this.clienteSaldo=info;
                    this.disponible=info.disponible;
                    this.fecha=info.fecha;
                    this.pagoMinimo=info.pagoMinimo;
                    console.log("info",JSON.stringify(this.clienteSaldo));
                });
        });
        this._userModel.fetch().then(usuario => {
            if (usuario) {
                this.user = usuario;
            }
        });
    }

    onSaldoClicked(){
        let grid: GridLayout = <GridLayout> this.page.getViewById("gridSaldo");
        this.extenderSaldo=!this.extenderSaldo;
        if(this.extenderSaldo==false){
            grid.visibility='visible';
            grid.animate({
                opacity: 1,
                duration: 300
            });
        }

        if(this.extenderSaldo==true){
            grid.animate({
                opacity: 0,
                duration: 200
            }).then( (d)=>{ grid.visibility='collapse';} )
        }
    }

    redireccion(args) {
        this.router.navigate(["/home/" + args]);
    }

    corte(){
        console.log("Tap corte");
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "info": JSON.stringify(this.clienteSaldo)
            }
        };
        this.router.navigate(['/home/corte'], navigationExtras);
    }

    oficinaCredito(){
        if(platform.isAndroid){
        permissions.requestPermission(android.Manifest.permission.ACCESS_COARSE_LOCATION, "Necesitamos obtener tu ubicación GPS")
            .then(()=> {
                console.log("Woo Hoo, I have the power!");
                this.redireccion('oficinacredito')
            })
            .catch(()=> {
                console.log("Uh oh, no permissions - plan B time!");
                console.log("FALLOOOOOOO");
            });
        }else { this.redireccion('oficinacredito')}
    }

}