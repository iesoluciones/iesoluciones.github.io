"use strict";
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var types_1 = require("utils/types");
var ErrorFeedbackComponent = (function () {
    function ErrorFeedbackComponent() {
        this.formErrors = '';
        this.validationMessages = {
            'date': 'El campo no corresponde con una fecha válida.',
            'email': 'El campo no corresponde con una dirección de e-mail válida.',
            'required': 'El campo es obligatorio',
            'minlength': 'El campo debe contener al menos x caracteres.',
            'maxlength': 'El campo debe contener x caracteres como máximo.',
            'formatoNumero': 'El campo debe ser numérico'
        };
    }
    Object.defineProperty(ErrorFeedbackComponent.prototype, "messages", {
        set: function (msgs) {
            this.validationMessages = (msgs) ? msgs : this.validationMessages;
        },
        enumerable: true,
        configurable: true
    });
    ErrorFeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
    };
    ErrorFeedbackComponent.prototype.onValueChanged = function (data) {
        if (!this.form) {
            return;
        }
        var form = this.form;
        this.formErrors = '';
        var control = form.get(this.name);
        if (control && control.dirty && !control.valid) {
            var attribute = this.name;
            var messages = this.validationMessages;
            for (var key in control.errors) {
                if (!types_1.isNullOrUndefined(messages[key])) {
                    this.formErrors = messages[key];
                }
            }
        }
    };
    __decorate([
        core_1.Input('formGroup'), 
        __metadata('design:type', forms_1.FormGroup)
    ], ErrorFeedbackComponent.prototype, "form", void 0);
    __decorate([
        core_1.Input('controlName'), 
        __metadata('design:type', String)
    ], ErrorFeedbackComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ErrorFeedbackComponent.prototype, "messages", null);
    ErrorFeedbackComponent = __decorate([
        core_1.Component({
            selector: 'app-error-feedback',
            template: "\n      <Label  *ngIf=\"formErrors\"  text=\"{{ formErrors }}\" row=\"2\" style=\"margin:0px 0px 0px 10px;padding:0px 0px 0px 10px;color:red\" textWrap=\"true\"></Label>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorFeedbackComponent);
    return ErrorFeedbackComponent;
}());
exports.ErrorFeedbackComponent = ErrorFeedbackComponent;
