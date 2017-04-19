import {CorteComponent} from "./corte.component";
import {NativeScriptRouterModule} from "nativescript-angular";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {SaldoDisponibleComponent} from "./saldo-disponible/saldo-disponible.component";
/**
 * Created by iedeveloper on 15/02/17.
 */

const routes: Routes = [
    {path: '', component: CorteComponent}

]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CorteComponent],
    exports: [CorteComponent],
})
export class MicuentaModule {}