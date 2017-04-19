import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {Routes, RouterModule} from "@angular/router";
import {DbService} from "../../model/db.service";
import activityIndicatorModule = require("ui/activity-indicator");
import {ModalViewComponent} from "./modal/modal-view";
const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'recuperar', component: ModalViewComponent},

]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LoginComponent,ModalViewComponent],
    exports: [LoginComponent],
})
export class LoginModule {}