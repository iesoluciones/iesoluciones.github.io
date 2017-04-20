"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var forms_1 = require("@angular/forms");
var enums_1 = require("ui/enums");
var CustomValidators_1 = require("../../../shared/validators/CustomValidators");
var RecuperarComponent = (function () {
    function RecuperarComponent(params, page, _fb) {
        this.params = params;
        this.page = page;
        this._fb = _fb;
        this.valid = false;
        this.user = {
            password: '',
            password_confirm: ''
        };
        this.validationMessages = {
            password: {
                required: "El contraseña es obligatoria",
                minLength: "El tamaño mínimo de la contraseña es de 1 dígito",
                password: "La contraseña por lo menos debe tener 8 caracteres."
            },
            password_confirm: {
                required: "El confirmación de contraseña es obligatorio",
                minLength: "El tamaño mínimo de la confirmación de contraseña es de 1 dígitos",
                password: "La contraseña por lo menos debe tener 8 caracteres."
            }
        };
    }
    RecuperarComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({
            password: [null, [forms_1.Validators.required, forms_1.Validators.minLength(8), CustomValidators_1.CustomValidators.password]],
            password_confirm: [null, [forms_1.Validators.required, forms_1.Validators.minLength(8)], CustomValidators_1.CustomValidators.password]
        });
        this.onTap('label1');
    };
    RecuperarComponent.prototype.validarPassword = function () {
        var usr = this.form.value;
        this.valid = false;
        if (usr.password == usr.password_confirm && usr.password.length >= 8 && usr.password_confirm.length >= 8) {
            this.valid = true;
        }
        return this.valid;
    };
    RecuperarComponent.prototype.onTap = function (lbl) {
        var label = this.page.getViewById(lbl);
        label.animate({
            translate: { x: 0, y: -15 },
            duration: 500,
            curve: enums_1.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    };
    RecuperarComponent.prototype.recuperar = function () {
        this.params.closeCallback(this.form.value);
    };
    RecuperarComponent.prototype.cerrar = function () {
        this.params.closeCallback(null);
    };
    RecuperarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./recuperar.html",
            styleUrls: ["./recuperar-common.css"]
        }), 
        __metadata('design:paramtypes', [modal_dialog_1.ModalDialogParams, page_1.Page, forms_1.FormBuilder])
    ], RecuperarComponent);
    return RecuperarComponent;
}());
exports.RecuperarComponent = RecuperarComponent;
