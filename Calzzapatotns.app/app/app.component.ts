import {Component, ElementRef, ViewChild, OnInit, Injectable, ChangeDetectorRef} from '@angular/core';
import {Color} from "color";
import {Page} from "ui/page";
import {Router} from "@angular/router";
import {Observable} from "data/observable";
import {DbService} from "./model/db.service";
import {UserModel} from "./model/user.model";
import {HttpService} from "./custom-http/http-service";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
var dialogs = require("ui/dialogs");
import * as application from "application";

@Component({
    selector: 'main',
    templateUrl: './app.component.html',
    styleUrls: [],
})

@Injectable()
export class AppComponent extends Observable implements OnInit {
    @ViewChild("container") container: ElementRef;
    isLoading = false;
    public user: any = {};
    plataforma = false;

    constructor(private page: Page, private _changeDetectionRef: ChangeDetectorRef, private router: Router, private usr: UserModel, private dbService: DbService, private http: HttpService) {
        super();
        //this.onDrawerOpening();
        //this.user = {name: "Anónimo"};
        //page.on("loaded", this.onLoaded, this);
        if (application.android) {
            //console.log("We are running on Android device!");
            this.plataforma = false;
        } else if (application.ios) {
            //console.log("We are running on iOS device");
            this.plataforma = true;
        }
    }

    ngOnInit() {
        this.http.start.subscribe(() => this.isLoading = true);
        this.http.stop.subscribe(() => this.isLoading = false);
        //this.page.actionBarHidden = true;
        this.page.backgroundColor = new Color("#EEEEEE");

        this.http.errorEvent.subscribe(e => {
            if (e instanceof ErrorObservable) {
                let error = e;
                if (error.error == 'timeout_exceeded') {
                    this.errorTimeOut();
                }
            } else if (e.status == 401) {
                this.error401();
            } else if (e.status == 403) {
                this.error403();
            } else if (e.status == 404) {
                this.error404();
            } else if (e.status == 422) {
                this.error422(e.json());
            } else if (e.status == 423) {
                this.error423();
            } else if (e.status == 500) {
                this.error500();
            } else if (e.status == 503) {
                this.error503();
            }
        });
    }

    error401() {
        let r = this.router;
        dialogs.alert({
            title: "Permisos!",
            message: "No cuenta con suficientes permisos.",
            okButtonText: "Aceptar"
        }).then(function () {
            r.navigate(["/"]);
        });
    }

    error403() {
        let r = this.router;
        dialogs.alert({
            title: "Permisos!",
            message: "No cuenta con suficientes permisos.",
            okButtonText: "Aceptar"
        }).then(function () {
            r.navigate(["/"]);
        });
    }

    error404() {
        let r = this.router;
        dialogs.alert({
            title: "Ruta no encontrada!",
            message: "La ruta a la que trata de acceder no se encuentra disponible.",
            okButtonText: "Aceptar"
        }).then(function () {
            r.navigate(["/"]);
        });
    }

    error422(err) {

        let msg = "";
        console.log("Error 422", JSON.stringify(err));
        for (let error of err.errors) {
            msg += error + "\n";
        }
        dialogs.alert({
            title: "Petición inválida.",
            message: msg,
            okButtonText: "Aceptar"
        }).then(function () {
        });
    }

    error423() {
        let r = this.router;
        dialogs.alert({
            title: "Demasiados intentos",
            message: "Se ha bloqueado tu cuenta por 15 minutos. intente más tarde.",
            okButtonText: "Aceptar"
        }).then(function () {
            r.navigate(["/"]);
        });
    }

    error500() {
        let r = this.router;
        dialogs.alert({
            title: "Oops!, Ocurrió un error.",
            message: "Se ha enviado un reporte a sistemas",
            okButtonText: "Aceptar"
        }).then(function () {
            r.navigate(["/"]);
        });
    }

    error503() {
        let r = this.router;
        dialogs.alert({
            title: "Servidor en mantenimiento",
            message: "Por el momento los servidores están en mantenimiento",
            okButtonText: "Aceptar"
        }).then(function () {
            r.navigate(["/"]);
        });
    }

    errorTimeOut() {
        let r = this.router;
        dialogs.alert({
            title: "Tiempo de espera agotado!",
            message: "Excedio el límite de tiempo de espera",
            okButtonText: "Aceptar"
        }).then(function () {
            r.navigate(["/"]);
        });
    }

}
