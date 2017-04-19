import {SIDEDRAWER_DIRECTIVES} from "nativescript-telerik-ui/sidedrawer/angular";
import {NgModule} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {NativeScriptRouterModule} from "nativescript-angular/router";

import {AppComponent} from "./app.component";

import {routes, navigatableComponents} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {DbService} from "./model/db.service";
import {UserModel} from "./model/user.model";
import {CustomHttpModule} from "./custom-http/custom-http.module";
import {Config} from "./shared/config";
import actionBarModule = require("ui/action-bar");
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import {ClienteModel} from "./model/cliente.model";
import {VentaModel} from "./model/venta.model";
import {TiposMedioModel} from "./model/tipos_medio.model";
import {ClientesMediosModel} from "./model/clientes_medios.model";
import {ErrorFeedbackComponent} from "./shared/error-feedback/error-feedback.component";
import {EqualValidator} from "./shared/validators/equal-validator.directive";
import {CorteService} from "./pages/corte/corte.service";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        ReactiveFormsModule,
        CustomHttpModule.forRoot(Config.apiUrl)
    ],
    declarations: [
        AppComponent,
        ...navigatableComponents,
        SIDEDRAWER_DIRECTIVES,
        ErrorFeedbackComponent,
        EqualValidator
    ],
    bootstrap: [AppComponent],
    providers: [
        DbService,
        UserModel,
        ModalDialogService,
        ClienteModel,
        TiposMedioModel,
        ClientesMediosModel,
        VentaModel,
        CorteService
    ]
})
export class AppModule {
    constructor(dbServ : DbService){
    }
}
