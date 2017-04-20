"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var cliente_service_1 = require("../cliente.service");
var enums_1 = require("ui/enums");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var date_picker_1 = require("../../modals/datepicker/date-picker");
var moment = require("moment");
var forms_1 = require("@angular/forms");
var CustomValidators_1 = require("../../../shared/validators/CustomValidators");
var user_model_1 = require("../../../model/user.model");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs = require("ui/dialogs");
var FormularioClienteComponent = (function () {
    function FormularioClienteComponent(router, routerExtensions, page, _clienteService, _userModel, vcRef, _modalService, _fb) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this._clienteService = _clienteService;
        this._userModel = _userModel;
        this.vcRef = vcRef;
        this._modalService = _modalService;
        this._fb = _fb;
        this.valid = true;
        this.validationMessages = {
            nombre: {
                required: "El nombre es obligatorio",
                maxLength: "El tamaño máximo del nombre es de 255 dígitos",
                minLength: "El tamaño mínimo del nombre es de 1 dígito"
            },
            paterno: {
                required: "El apellido paterno es obligatorio",
                maxLength: "El tamaño máximo del apellido paterno es de 255 dígitos",
                minLength: "El tamaño mínimo del apellido paterno es de 1 dígito"
            },
            materno: {
                required: "El apellido materno es obligatorio",
                maxLength: "El tamaño máximo del apellido materno es de 255 dígitos",
                minLength: "El tamaño mínimo del apellido materno es de 1 dígito"
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
                email: "El correo no corresponde con una dirección de e-mail válida."
            },
            fecha_nacimiento: {
                required: "La fecha de nacimiento es obligatoria",
                maxLength: "La tamaño máximo del fecha de nacimiento es de 255 dígitos",
                minLength: "La tamaño mínimo del fecha de nacimiento es de 1 dígito"
            },
            calle: {
                required: "La calle es obligatorio",
                maxLength: "La tamaño máximo del calle es de 255 dígitos",
                minLength: "La tamaño mínimo del calle es de 1 dígito"
            },
            numero_exterior: {
                required: "El número exterior es obligatorio",
                maxLength: "El tamaño máximo del número exterior es de 255 dígitos",
                minLength: "El tamaño mínimo del número exterior es de 1 dígito"
            },
            numero_interior: {
                required: "El número interior es obligatorio",
                maxLength: "El tamaño máximo del número interior es de 255 dígitos",
                minLength: "El tamaño mínimo del número interior es de 1 dígito"
            },
            colonia: {
                required: "La colonia es obligatorio",
                maxLength: "La tamaño máximo del colonia es de 255 dígitos",
                minLength: "La tamaño mínimo del colonia es de 1 dígito"
            },
            cp: {
                required: "El código postal es obligatorio",
                maxLength: "El tamaño máximo del código postal es de 10 dígitos",
                minLength: "El tamaño mínimo del código postal es de 1 dígito"
            }
        };
    }
    FormularioClienteComponent.prototype.ngOnInit = function () {
        this.page.actionBar.title = "Agregar Cliente";
        this.form = this._fb.group({
            nombre: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            paterno: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            materno: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            celular: [null, [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(10), CustomValidators_1.CustomValidators.celular]],
            email: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1), CustomValidators_1.CustomValidators.email]],
            fecha_nacimiento: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            calle: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            numero_exterior: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            numero_interior: [null, [forms_1.Validators.minLength(1)]],
            colonia: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            cp: [null, [forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.maxLength(10)]]
        });
    };
    FormularioClienteComponent.prototype.modalPicker = function () {
        var _this = this;
        //console.log("modalpICKER");
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        // >> returning-result
        this._modalService.showModal(date_picker_1.DatepickerComponent, options)
            .then(function (dateresult) {
            _this.form.get('fecha_nacimiento').setValue(moment(dateresult).format('DD/MM/YYYY'));
            _this.onTap('label7');
        });
    };
    FormularioClienteComponent.prototype.configure = function (datePicker) {
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    };
    FormularioClienteComponent.prototype.onTap = function (lbl) {
        var label = this.page.getViewById(lbl);
        label.animate({
            translate: { x: -10, y: -15 },
            duration: 500,
            curve: enums_1.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        });
    };
    FormularioClienteComponent.prototype.guardar = function () {
        var _this = this;
        var cliente = this.form.value;
        this.valid = false;
        console.log("Guardar :)))))", this.form.get('fecha_nacimiento'));
        this._userModel.fetch().then(function (usuario) {
            cliente.cliente_id = usuario.cliente_id;
            console.log("Va a guardar", JSON.stringify(cliente));
            _this._clienteService.save(cliente).subscribe(function (d) {
                var route = _this.routerExtensions;
                dialogs.alert({
                    title: "Cliente",
                    message: "El cliente se agregó correctamente.",
                    okButtonText: "Aceptar"
                }).then(function () {
                    route.navigate(["/home/clientes"], { clearHistory: true });
                });
            });
        });
    };
    FormularioClienteComponent = __decorate([
        core_1.Component({
            selector: "my-app-clientes",
            providers: [cliente_service_1.ClienteService],
            templateUrl: "pages/cliente/formulario/formulario-cliente.html",
            styleUrls: ["pages/cliente/css/cliente.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, nativescript_angular_1.RouterExtensions, page_1.Page, cliente_service_1.ClienteService, user_model_1.UserModel, core_1.ViewContainerRef, modal_dialog_1.ModalDialogService, forms_1.FormBuilder])
    ], FormularioClienteComponent);
    return FormularioClienteComponent;
}());
exports.FormularioClienteComponent = FormularioClienteComponent;
