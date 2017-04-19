import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {OficinacreditoComponent} from "./oficinacredito.component";
const routes: Routes = [
    {path: '', component: OficinacreditoComponent}

]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [OficinacreditoComponent],
    exports: [OficinacreditoComponent],
})
export class OficinacreditoModule {}