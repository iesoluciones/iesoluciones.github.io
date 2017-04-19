import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {ReferenciabancariaComponent} from "./referenciabancaria.component";
const routes: Routes = [
    {path: '', component: ReferenciabancariaComponent}

]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ReferenciabancariaComponent],
    exports: [ReferenciabancariaComponent],
})
export class ReterenciabancariaModule {}