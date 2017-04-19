import {Component, OnInit, ViewChild, ElementRef, ViewContainerRef, Injectable, ChangeDetectorRef} from "@angular/core";
import {User} from "./user.class";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {UserModel} from "../../model/user.model";
import {Page} from "ui/page";
import {registerElement} from "nativescript-angular/element-registry";
import {ModalDialogService, ModalDialogOptions} from "nativescript-angular/modal-dialog";
import {ModalViewComponent} from "./modal/modal-view";
import {RouterExtensions} from "nativescript-angular";
import {ClienteModel} from "../../model/cliente.model";
import {TiposMedioModel} from "../../model/tipos_medio.model";
import {ClientesMediosModel} from "../../model/clientes_medios.model";
//registerElement("CheckBox", () => require("nativescript-checkbox").CheckBox);
var dialogs = require("ui/dialogs");
var appSettings = require("application-settings");
import {Label} from "ui/label";
import {AnimationCurve} from "ui/enums";
import * as application from "application";
declare var android: any;
var permissions = require( "nativescript-permissions" );
import * as platform from "platform";

@Component({
    selector: "my-app",
    providers: [LoginService],
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn = true;
    plataforma = false;
    @ViewChild("container") container: ElementRef;
    //@ViewChild("CB1") FirstCheckBox: ElementRef;

    constructor(private routerExtensions: RouterExtensions,
                private router: Router,
                private loginService: LoginService,
                private _usuarioModel: UserModel,
                private _clienteModel: ClienteModel,
                private _clienteMediosModel: ClientesMediosModel,
                private _tiposMediosModel: TiposMedioModel,
                private page: Page,
                private _modalService: ModalDialogService,
                private vcRef: ViewContainerRef,
                private _tipoMedioModel: TiposMedioModel,) {
        this.user = new User();
        this.user.email = "38289";
        this.user.password = "secret";
    }

    ngAfterViewInit() {
        this._usuarioModel.fetch().then(usuario => {
            if (usuario) {
                console.log("Que chingados",usuario);
                this.routerExtensions.navigate(["/home/inicio"], {clearHistory: true});
            } else {
                this.routerExtensions.navigate(["/"], {clearHistory: true});
                this.onTap('label1');
                this.onTap('label2');
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

    ngOnInit() {
        //this.page.actionBarHidden = true;
        this.page.actionBar.title = "Iniciar Sesión";
        this.onTap('label1');
        this.onTap('label2');

        if (application.android) {
            console.log("We are running on Android device!");
            this.plataforma = false;
        } else if (application.ios) {
            console.log("We are running on iOS device");
            this.plataforma = true;
        }
    }

    login() {
        if(platform.isAndroid){
            permissions.requestPermission([android.Manifest.permission.WRITE_EXTERNAL_STORAGE,android.Manifest.permission.READ_EXTERNAL_STORAGE], "Necesitamos obtener tu ubicación GPS")
                .then(()=> {
                    console.log("Podemos escribir y leer memoria en marshmallow/Nougat");
                    this.loginService.login(this.user)
                        .subscribe(data => {
                            this.user = data.user as User;
                            console.log("USUARIO", JSON.stringify(this.user));
                            console.log("CLIENTE", JSON.stringify(this.user.cliente));
                            appSettings.setString("token", data.token);
                            this._usuarioModel.insert(this.user);
                            this._clienteModel.insert(this.user.cliente);
                            this._clienteMediosModel.insert(this.user.cliente.medios);
                            this.loginService.sincronizacion().subscribe(d => {
                                console.log("SINCRONIZACION", JSON.stringify(d.tipos_medios));
                                this.isLoggingIn = true;
                                this.routerExtensions.navigate(["/home/inicio"], {clearHistory: true});
                                this._tiposMediosModel.insert(d.tipos_medios);
                            });
                        });
                })
                .catch(()=> {
                    console.log("Uh oh, no permissions - plan B time!");
                    console.log("FALLOOOOOOO");
                });
        }else { this.loginService.login(this.user)
            .subscribe(data => {
                this.user = data.user as User;
                console.log("USUARIO", JSON.stringify(this.user));
                console.log("CLIENTE", JSON.stringify(this.user.cliente));
                appSettings.setString("token", data.token);
                this._usuarioModel.insert(this.user);
                this._clienteModel.insert(this.user.cliente);
                this._clienteMediosModel.insert(this.user.cliente.medios);
                this.loginService.sincronizacion().subscribe(d => {
                    console.log("SINCRONIZACION", JSON.stringify(d.tipos_medios));
                    this.isLoggingIn = true;
                    this.routerExtensions.navigate(["/home/inicio"], {clearHistory: true});
                    this._tiposMediosModel.insert(d.tipos_medios);
                });
            });}


    }

    recuperarPassword() {
        //console.log("recuperarPassword");
        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(ModalViewComponent, options)
            .then((dato) => {
                this.loginService.recuperarPassword(dato).subscribe(d => {
                    dialogs.alert({
                        title: "Recuperar contraseña",
                        message: "Se ha enviado su nueva contraseña a su correo.",
                        okButtonText: "Aceptar"
                    }).then(function () {
                    });
                });
            });
    }
}