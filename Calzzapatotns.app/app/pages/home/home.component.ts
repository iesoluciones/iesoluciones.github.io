import {Component, ElementRef, ViewChild, OnInit, ViewContainerRef, ChangeDetectorRef} from '@angular/core';
import {Color} from "color";
import {Page} from "ui/page";
import {Router, NavigationExtras} from "@angular/router";
import {Observable} from "data/observable";
import {RadSideDrawerComponent, SideDrawerType} from "nativescript-telerik-ui/sidedrawer/angular";
import {DrawerTransitionBase, SlideInOnTopTransition} from 'nativescript-telerik-ui/sidedrawer';
import {DbService} from "../../model/db.service";
import {HttpService} from "../../custom-http/http-service";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import * as application from "application";
import {RouterExtensions} from "nativescript-angular";
import {UserModel} from "../../model/user.model";
import {ClienteModel} from "../../model/cliente.model";
import {TiposMedioModel} from "../../model/tipos_medio.model";
import {ClientesMediosModel} from "../../model/clientes_medios.model";
import {VentaModel} from "../../model/venta.model";
import {LoginService} from "../login/login.service";
import {ModalDialogService, ModalDialogOptions} from "nativescript-angular/modal-dialog";
import {RecuperarComponent} from "../modals/recuperar/recuperar";
import {InicioService} from "../inicio/inicio.service";
var appSettings = require("application-settings");
var dialogs = require("ui/dialogs");
declare var android: any;
var permissions = require( "nativescript-permissions" );
import * as platform from "platform";

@Component({
    selector: "inicio-inc",
    templateUrl: "pages/home/home.component.html",
    providers: [LoginService, InicioService]
})

export class HomeComponent implements OnInit {

    @ViewChild("container") container: ElementRef;
    public user: any = {};
    plataforma = false;
    isLoggingIn = false;
    clienteSaldo = {
        corte: '',
        pago_minimo: 0,
        fecha_pago: '',
        saldo_disponible: 0,
    };

    constructor(private routerExtensions: RouterExtensions,
                private page: Page,
                private _changeDetectionRef: ChangeDetectorRef,
                private router: Router,
                private _userModel: UserModel,
                private _clienteModel: ClienteModel,
                private _tiposMediosModel: TiposMedioModel,
                private _clientesMedios: ClientesMediosModel,
                private _loginService: LoginService,
                private vcRef: ViewContainerRef,
                private _modalService: ModalDialogService,
                private _inicioService: InicioService,
                private _ventaModel: VentaModel) {
        this.onDrawerOpening();
        this.user = {name: "Anónimo"};
        page.on("loaded", this.onLoaded, this);
        if (application.android) {
            //console.log("We are running on Android device!");
            this.plataforma = false;
        } else if (application.ios) {
            //console.log("We are running on iOS device");
            this.plataforma = true;
        }
    }

    public onDrawerOpening() {
        this.user = {name: "Anónimo"};
        this._userModel.fetch().then(usuario => {
            if (usuario) {
                this.user = usuario;
            }
        });
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private _sideDrawerTransition: DrawerTransitionBase;
    private drawer: SideDrawerType;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    public get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    public toggle() {
        this.drawer.toggleDrawerState();
    }

    public onLoaded(args) {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    openDrawer() {
        //console.log("openDrawer");
        if (this.drawer.getIsOpen()) {
            this.drawer.closeDrawer();
        } else {
            this.drawer.showDrawer();
        }
    }

    public redireccion(args) {
        //console.log("redireccion", args);
        this.routerExtensions.navigate(["/home/" + args], {clearHistory: true});
        this.drawer.closeDrawer();
    }

    corte(){
        console.log("inicio corte");
        this._userModel.fetch().then(usuario => {
            this._inicioService.getClienteInfo(usuario.email)
                .subscribe(info=>{
                    let navigationExtras: NavigationExtras = {
                        queryParams: {
                            "info": JSON.stringify(info)
                        }
                    };
                    this.router.navigate(['/home/corte'], navigationExtras);

                    this.drawer.closeDrawer();
                });
        });
    }

    truncateDatabase() {
        console.log("truncateDatabase");
        this._userModel.truncate();
        this._clienteModel.truncate();
        this._ventaModel.truncate();
        this._tiposMediosModel.truncate();
        this._clientesMedios.truncate();
    }

    salir() {
        this.truncateDatabase();
        this.user = {name: "Anónimo"};
        appSettings.clear(); //borrar token sesion
        this.routerExtensions.navigate(["/"], {clearHistory: true});
    }

    ngOnInit() {
        if (this.user.solicitar == 1) {
            let options: ModalDialogOptions = {
                viewContainerRef: this.vcRef,
                fullscreen: false
            };
            // >> returning-result
            this._modalService.showModal(RecuperarComponent, options)
                .then((dato) => {
                    if (dato) {
                        let datos = {cliente_id: this.user.cliente_id, dato: dato};
                        this._loginService.cambiarPassword(datos).subscribe(d => {
                            this._userModel.cambiarSolicitud();
                            dialogs.alert({
                                title: "Recuperar contraseña",
                                message: "La contraseña se ha actualizado correctamente.",
                                okButtonText: "Aceptar"
                            }).then(function () {
                            });
                        });
                    }
                });
        }
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