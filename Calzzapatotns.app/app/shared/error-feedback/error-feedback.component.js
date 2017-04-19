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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZmVlZGJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXJyb3ItZmVlZGJhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQsc0JBQXdCLGdCQUFnQixDQUFDLENBQUE7QUFDekMsc0JBQWdDLGFBQWEsQ0FBQyxDQUFBO0FBVTlDO0lBMEJJO1FBbkJBLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFRaEIsdUJBQWtCLEdBQUc7WUFDekIsTUFBTSxFQUFFLCtDQUErQztZQUN2RCxPQUFPLEVBQUUsNkRBQTZEO1lBQ3RFLFVBQVUsRUFBRSx5QkFBeUI7WUFDckMsV0FBVyxFQUFFLCtDQUErQztZQUM1RCxXQUFXLEVBQUUsa0RBQWtEO1lBQy9ELGVBQWUsRUFBRSw0QkFBNEI7U0FFaEQsQ0FBQztJQUlGLENBQUM7SUFqQkQsc0JBQUksNENBQVE7YUFBWixVQUFhLElBQVM7WUFDbEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUN0RSxDQUFDOzs7T0FBQTtJQWlCRCx5Q0FBUSxHQUFSO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7YUFDakIsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCwrQ0FBYyxHQUFkLFVBQWUsSUFBVTtRQUVyQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2IsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzFCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUV6QyxHQUFHLENBQUMsQ0FBQyxJQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyx5QkFBaUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUFFTCxDQUFDO0lBcEREO1FBQUMsWUFBSyxDQUFDLFdBQVcsQ0FBQzs7d0RBQUE7SUFDbkI7UUFBQyxZQUFLLENBQUMsYUFBYSxDQUFDOzt3REFBQTtJQUlyQjtRQUFDLFlBQUssRUFBRTs7OzBEQUFBO0lBaEJaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLDZLQUViO1NBQ0EsQ0FBQzs7OEJBQUE7SUE2REYsNkJBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDO0FBM0RZLDhCQUFzQix5QkEyRGxDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge2lzTnVsbE9yVW5kZWZpbmVkfSBmcm9tIFwidXRpbHMvdHlwZXNcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1lcnJvci1mZWVkYmFjaycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxMYWJlbCAgKm5nSWY9XCJmb3JtRXJyb3JzXCIgIHRleHQ9XCJ7eyBmb3JtRXJyb3JzIH19XCIgcm93PVwiMlwiIHN0eWxlPVwibWFyZ2luOjBweCAwcHggMHB4IDEwcHg7cGFkZGluZzowcHggMHB4IDBweCAxMHB4O2NvbG9yOnJlZFwiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgRXJyb3JGZWVkYmFja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAvL0BJbnB1dCgndmFsaWRhdGlvbk1lc3NhZ2VzJykgdmFsaWRhdGlvbk1lc3NhZ2VzOiBhbnk7XG5cbiAgICBASW5wdXQoJ2Zvcm1Hcm91cCcpIGZvcm06IEZvcm1Hcm91cDtcbiAgICBASW5wdXQoJ2NvbnRyb2xOYW1lJykgbmFtZTogc3RyaW5nO1xuXG4gICAgZm9ybUVycm9yczogc3RyaW5nID0gJyc7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBtZXNzYWdlcyhtc2dzOiBhbnkpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZXMgPSAobXNncykgPyBtc2dzIDogdGhpcy52YWxpZGF0aW9uTWVzc2FnZXM7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHZhbGlkYXRpb25NZXNzYWdlcyA9IHtcbiAgICAgICAgJ2RhdGUnOiAnRWwgY2FtcG8gbm8gY29ycmVzcG9uZGUgY29uIHVuYSBmZWNoYSB2w6FsaWRhLicsXG4gICAgICAgICdlbWFpbCc6ICdFbCBjYW1wbyBubyBjb3JyZXNwb25kZSBjb24gdW5hIGRpcmVjY2nDs24gZGUgZS1tYWlsIHbDoWxpZGEuJyxcbiAgICAgICAgJ3JlcXVpcmVkJzogJ0VsIGNhbXBvIGVzIG9ibGlnYXRvcmlvJyxcbiAgICAgICAgJ21pbmxlbmd0aCc6ICdFbCBjYW1wbyBkZWJlIGNvbnRlbmVyIGFsIG1lbm9zIHggY2FyYWN0ZXJlcy4nLFxuICAgICAgICAnbWF4bGVuZ3RoJzogJ0VsIGNhbXBvIGRlYmUgY29udGVuZXIgeCBjYXJhY3RlcmVzIGNvbW8gbcOheGltby4nLFxuICAgICAgICAnZm9ybWF0b051bWVybyc6ICdFbCBjYW1wbyBkZWJlIHNlciBudW3DqXJpY28nXG5cbiAgICB9O1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlc1xuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMub25WYWx1ZUNoYW5nZWQoZGF0YSkpO1xuICAgIH1cblxuICAgIG9uVmFsdWVDaGFuZ2VkKGRhdGE/OiBhbnkpIHtcblxuICAgICAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuZm9ybTtcblxuICAgICAgICB0aGlzLmZvcm1FcnJvcnMgPSAnJztcbiAgICAgICAgY29uc3QgY29udHJvbCA9IGZvcm0uZ2V0KHRoaXMubmFtZSk7XG5cbiAgICAgICAgaWYgKGNvbnRyb2wgJiYgY29udHJvbC5kaXJ0eSAmJiAhY29udHJvbC52YWxpZCkge1xuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IHRoaXMubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy52YWxpZGF0aW9uTWVzc2FnZXM7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChtZXNzYWdlc1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvcnMgPSBtZXNzYWdlc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cbiJdfQ==