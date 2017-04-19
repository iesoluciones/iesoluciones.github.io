import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {VentaService} from "./venta.service";
import {VentaComponent} from "./venta.component";
import {TicketComponent}  from "./ticket/ticket.component";

const routes: Routes = [
    {path: '', component: VentaComponent},
    {path: 'ticket', component: TicketComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        VentaComponent,
        TicketComponent
    ],
    //exports: [],
    providers: [VentaService]
})
export class VentaModule {}