import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {ValeService} from "./vale.service";
import {ListadoValeComponent} from "./listado/listado.vale.component";
const routes: Routes = [
    {path: '', component: ListadoValeComponent}

]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ListadoValeComponent
    ],
    //exports: [],
    providers: [ValeService]
})
export class ValeModule {}