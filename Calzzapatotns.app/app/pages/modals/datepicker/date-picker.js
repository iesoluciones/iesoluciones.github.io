"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
// >> passing-parameters
var DatepickerComponent = (function () {
    function DatepickerComponent(params, page) {
        this.params = params;
        this.page = page;
        this.currentdate = new Date(params.context);
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        var datePicker = this.page.getViewById("datePicker");
        datePicker.year = this.currentdate.getFullYear();
        datePicker.month = this.currentdate.getMonth() + 1;
        datePicker.day = this.currentdate.getDate();
        datePicker.minDate = new Date(1900, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    };
    DatepickerComponent.prototype.submit = function () {
        var datePicker = this.page.getViewById("datePicker");
        this.params.closeCallback(datePicker.date);
    };
    DatepickerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./date-picker.html"
        }), 
        __metadata('design:paramtypes', [modal_dialog_1.ModalDialogParams, page_1.Page])
    ], DatepickerComponent);
    return DatepickerComponent;
}());
exports.DatepickerComponent = DatepickerComponent;
// << passing-parameters
