import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import activityIndicatorModule = require("ui/activity-indicator");
import {DatepickerComponent} from "./datepicker/date-picker";
const routes: Routes = [
    {path: 'datepicker', component: DatepickerComponent},

]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [DatepickerComponent],
    exports: [],
})
export class ModalModule {}