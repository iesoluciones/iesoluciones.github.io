"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var forms_1 = require("@angular/forms");
var CustomValidators_1 = require("../../../shared/validators/CustomValidators");
var enums_1 = require("ui/enums");
// >> passing-parameters
var ModalViewComponent = (function () {
    function ModalViewComponent(params, page, _fb) {
        this.params = params;
        this.page = page;
        this._fb = _fb;
        this.user = {
            usuario: '',
            email: '',
            celular: ''
        };
        this.validationMessages = {
            usuario: {
                required: "El usuario es obligatorio",
                maxLength: "El tamaño máximo del usuario es de 255 dígitos",
                minLength: "El tamaño mínimo del usuario es de 1 dígito"
            },
            celular: {
                required: "El celular es obligatorio",
                maxLength: "El tamaño máximo del celular es de 10 dígitos",
                minLength: "El tamaño mínimo del celular es de 10 dígitos",
                celular: "Ingrese un celular válido"
            },
            email: {
                required: "El email es obligatorio",
                maxLength: "El tamaño máximo del email es de 255 dígitos",
                minLength: "El tamaño mínimo del email es de 1 dígito",
                email: "El correo no válido."
            }
        };
    }
    ModalViewComponent.prototype.ngOnInit = function () {
        this.form = this._fb.group({
            usuario: ['58536', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            celular: ['', [CustomValidators_1.CustomValidators.celular]],
            email: ['heris161993@gmail.com', [CustomValidators_1.CustomValidators.email]]
        });
        this.onTap('label1');
        this.onTap('label4');
        this.onTap('label6');
    };
    ModalViewComponent.prototype.solicitar = function () {
        //alert("Usuario recuperar => "+JSON.stringify(this.form.value));
        this.params.closeCallback(this.form.value);
    };
    ModalViewComponent.prototype.onTap = function (lbl) {
        var label = this.page.getViewById(lbl);
        label.animate({
            translate: { x: 15, y: -15 },
            duration: 500,
            curve: enums_1.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    };
    ModalViewComponent.prototype.cerrar = function () {
        this.params.closeCallback(null);
    };
    ModalViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            //templateUrl: "./modal-view.html",
            template: " \n        <ScrollView class=\"modal-view-style\">\n          <StackLayout [formGroup]=\"form\" style=\"margin: 0px;padding: 0px;height: 100%\">\n              <Label class=\"title\" text=\"Recuperar Contrase\u00F1a\" style=\"margin: 15px 0px 15px 15px\"></Label> \n              \n              <GridLayout rows=\"20 auto,auto\">\n                <Label row=\"1\" id=\"label1\" fontSize=\"15\" (tap)=\"onTap('label1')\" text=\"Usuario\" textWrap=\"true\"></Label>\n                <TextField keyboardType=\"next\"  (tap)=\"onTap('label1')\" fontSize=\"15\" row=\"1\"  text=\"\" formControlName=\"usuario\"></TextField>\n                <app-error-feedback row=\"2\" [messages]=\"validationMessages.usuario\" [formGroup]=\"form\" controlName=\"usuario\"></app-error-feedback>\n              </GridLayout> \n              <GridLayout rows=\"20 auto,auto\">\n                <Label row=\"1\" id=\"label6\" fontSize=\"15\" (tap)=\"onTap('label6')\" text=\"Email\" textWrap=\"true\"></Label>\n                <TextField keyboardType=\"next\"  (tap)=\"onTap('label6')\" fontSize=\"15\" row=\"1\"  text=\"\" formControlName=\"email\"></TextField>\n                <app-error-feedback [messages]=\"validationMessages.email\" [formGroup]=\"form\" controlName=\"email\"></app-error-feedback>\n              </GridLayout>\n              \n              <Label text=\"\u00F3\" horizontalAlignment=\"center\" marginBottom=\"1%\"></Label>\n              \n              <GridLayout rows=\"20 auto,auto\">\n                <Label row=\"1\" id=\"label4\" fontSize=\"15\" (tap)=\"onTap('label4')\" text=\"Celular\" textWrap=\"true\"></Label>\n                <TextField keyboardType=\"phone\"  (tap)=\"onTap('label4')\" fontSize=\"15\" row=\"1\"  text=\"\" formControlName=\"celular\"></TextField>\n                <app-error-feedback [messages]=\"validationMessages.celular\" [formGroup]=\"form\" controlName=\"celular\"></app-error-feedback>\n              </GridLayout>\n              <GridLayout rows=\"auto\"  columns=\"*, *\" style=\"margin: 0px 15px 15px 15px;\">\n                <Button row=\"1\" col=\"0\" [text]=\"'CANCELAR'\" class=\"button-save\" style=\"width: 100%\" (tap)=\"cerrar()\" horizontalAlignment=\"center\" verticalAlignment=\"center\"></Button>\n                <Button row=\"1\" col=\"1\" [text]=\"'SOLICITAR'\" class=\"button-save\" style=\"width: 100%\"  [ngClass]=\"{'style1': !form.valid}\" isEnabled = \"{{form.valid}}\" (tap)=\"solicitar()\" horizontalAlignment=\"center\" verticalAlignment=\"center\"></Button>\n              </GridLayout> \n          </StackLayout>\n        </ScrollView>\n    ",
            styleUrls: ["./../login-common.css", "./../login.css"]
        }), 
        __metadata('design:paramtypes', [modal_dialog_1.ModalDialogParams, page_1.Page, forms_1.FormBuilder])
    ], ModalViewComponent);
    return ModalViewComponent;
}());
exports.ModalViewComponent = ModalViewComponent;
// << passing-parameters
