import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MicuentaComponent} from './micuenta.component';
import {Routes, RouterModule} from "@angular/router";
const routes: Routes = [
    {path: '', component: MicuentaComponent}

]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [MicuentaComponent],
    exports: [MicuentaComponent],
})
export class MicuentaModule {}